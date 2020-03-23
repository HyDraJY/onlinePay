<template>
  <div class="payment">
    <h2>
      <i class="material-icons back" @click="back">arrow_back</i>
      <span class="back" @click="back">edit payment</span>
    </h2>
    <Asset class="asset" :asset.sync="myAsset" />
    <section class="delivery">
      <div class="wrap">
        <div class="item">
          <h3>from</h3>
        </div>
        <div class="item">
          <h3>to</h3>
        </div>
      </div>
      <div class="wrap relative">
        <div class="arrow">
          <i class="material-icons">arrow_forward</i>
        </div>
        <div class="item">
          <div class="from">
            <span class="title">general account</span>
            <br />
            <span class="number">0x3e…8C5c</span>
          </div>
        </div>
        <div class="item">
          <div class="to">
            <span class="title">store Name</span>
            <br />
            <span class="number">0xd3…4hgr</span>
            <qrcode class="qrcode" id="qrcode" />
          </div>
        </div>
      </div>
    </section>
    <section class="fee">
      <h3>transaction fee</h3>
      <div class="wrap">
        <div class="item">
          <p>slow</p>
          <p>0.00008 ETH</p>
        </div>
        <div class="item">
          <p>average</p>
          <p>0.00021 ETH</p>
        </div>
        <div class="item">
          <p>fast</p>
          <p>0.00042 ETH</p>
        </div>
      </div>
    </section>
    <div class="btn-group">
      <div class="item">
        <button class="submit cancel" @click="back">cancel</button>
      </div>
      <div class="item">
        <button class="submit" @click="continueHandler">continue</button>
      </div>
    </div>
  </div>
</template>

<script>
import Asset from "../components/CryptoPay-asset";
import qrcode from "../assets/imgs/ic-qrcode.svg";
export default {
  name: "payment",
  components: {
    Asset,
    qrcode
  },
  data() {
    return {
      myAsset: this.$route.params.asset
    };
  },
  methods: {
    back() {
      this.$router.push({ name: "Checkout" });
    },
    continueHandler() {
      this.$router.push({ name: "Checkout", params: { asset: this.myAsset } });
    }
  }
};
</script>
<style lang="scss">
.payment {
  .back {
    cursor: pointer;
  }
  h2 {
    margin: 24px 0;
  }
  .asset {
    margin-bottom: 24px;
  }
  .delivery {
    margin-bottom: 24px;
    h3 {
      margin-bottom: 8px;
    }
    .item {
      width: 50%;
    }
    .title {
      text-transform: capitalize;
    }
    .number {
      font-weight: 400;
      text-transform: none;
    }
    .relative {
      position: relative;
    }
    .arrow {
      position: absolute;
      margin: auto;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      width: 32px;
      height: 32px;
      background-color: #000;
      border-radius: 50%;
      z-index: 1;
    }
    .material-icons {
      width: 24px;
      height: 24px;
      color: white;
      margin: 4px 4px;
    }
  }
  .from {
    border: 1px solid black;
    border-radius: 4px 0 0 4px;
    padding: 16px 24px;
  }
  .to {
    border: 1px solid black;
    border-radius: 0 4px 4px 0;
    padding: 16px 24px;
    position: relative;
    .qrcode {
      position: absolute;
      right: 24px;
      top: 0;
      bottom: 0;
      margin: auto;
    }
    @media screen and (max-width: 426px) {
      // 畫面小於426px時觸發
      .qrcode {
        display: none;
      }
    }
  }
  .fee {
    margin-bottom: 24px;
    h3 {
      margin-bottom: 8px;
    }
    .item {
      cursor: pointer;
      width: 156px;
      box-sizing: border-box;
      border: 1px solid black;
      padding: 15px 24px;
      background-color: #fff;
      p:nth-child(2) {
        font-weight: 400;
      }
    }
    .item:nth-child(1) {
      border-radius: 4px 0 0 4px;
    }
    .item:nth-child(3) {
      border-radius: 0 4px 4px 0;
    }
    .item:hover {
      border: 1px solid white;
      filter: invert(1);
    }
    .wrap {
      justify-content: none;
    }
    @media screen and (max-width: 426px) {
      .item {
        padding: 15px 10px;
      }
      .qrcode {
        display: none;
      }
    }
  }
  .btn-group {
    display: flex;
    justify-content: space-between;
    .item {
      width: 224px;
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
      text-transform: uppercase;
    }
    .cancel {
      background-color: white;
      color: black;
      border: 1px solid black;
    }
  }
}
</style>