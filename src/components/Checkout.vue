<template>
  <div class="crypto-checkout">
    <section class="ship_to">
      <h2>
        ship to
        <span class="edit" @click="shipToClick">edit</span>
      </h2>
      <div class="content">
        <p class="name">{{name}}</p>
        <p class="address">{{address}}</p>
      </div>
    </section>

    <h2 class="payment">
      payment
      <span class="edit" @click="paymentClick">edit</span>
    </h2>
    <Asset :asset.sync="asset" />

    <section class="account">
      <h2>account</h2>
      <div class="content wrap">
        <div class="item">
          <h3>general account</h3>
          <p class="balance">Balance 2.593 ETH</p>
        </div>
        <div class="item total">
          <p>- 0.43521 ETH</p>
        </div>
      </div>
    </section>
    <button class="submit" @click="checkoutClick">checkout now</button>
  </div>
</template>

<script>
import Asset from "../components/CryptoPay-asset";
// import axios from "axios";
export default {
  name: "cryptopay-checkout",
  data() {
    return {
      name: "",
      address: "407, Zxxx Street, Tanzi, Taichung Taiwan",
      asset: this.$route.params.asset || 0
    };
  },
  components: {
    Asset
  },
  mounted() {
    this.name = this.$store.state.name;
  },
  methods: {
    shipToClick() {
      this.$router.push({
        name: "Buyer",
        params: { name: this.name, address: this.address }
      });
    },
    paymentClick() {
      this.$router.push({
        name: "Payment",
        params: { asset: this.asset }
      });
    },
    checkoutClick() {
      if (this.asset !== 0) this.$router.push({ name: "Result" });
      else {
        alert("請選擇付款幣別");
      }
    }
  }
};
</script>

<style lang="scss">
.crypto-checkout {
  .edit {
    cursor: pointer;
  }
  .ship_to {
    margin: 24px 0;
  }
  .ship_to > h2 {
    position: relative;
    margin-bottom: 8px;
  }
  h2 > span {
    position: absolute;
    right: 0;
    bottom: 0;
    font-size: 16px;
    color: #6200ff;
  }
  .payment {
    position: relative;
    margin-bottom: 16px;
  }
  .content {
    border: 1px solid #000;
    border-radius: 4px;
    padding: 16px 20px;
    .name {
      font-size: 20px;
    }
    .address {
      color: rgba(0, 0, 0, 0.6);
      text-transform: capitalize;
      font-weight: 400;
    }
  }

  .account {
    margin-top: 16px;
    h2 {
      margin-bottom: 8px;
    }
    .content {
      padding: 16px 20px;
    }
    h3 {
      font-size: 20px;
      font-weight: bold;
    }
    .total {
      color: #6200ff;
      display: flex;
      flex-direction: column;
      justify-content: center;
      p {
        text-align: center;
      }
    }
    .balance {
      color: rgba(0, 0, 0, 0.6);
    }
  }

  .submit {
    cursor: pointer;
    width: 100%;
    height: 54px;
    border-radius: 4px;
    background-color: #6200ff;
    color: white;
    font-family: "Open Sans";
    font-size: 16px;
    font-weight: bold;
    padding: 0;
    border: none;
    margin-top: 24px;
    text-transform: uppercase;
  }
}
@media screen and (min-width: 515px) {
  #display {
    display: inline;
  }
}
</style>