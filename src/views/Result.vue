<template>
  <div class="result" id="result">
    <container class="container">
      <Logo class="logo" fill="#6200FF" />
      <div class="icon">
        <i class="material-icons">check_circle</i>
      </div>
      <h2>Thanks for your purchase!</h2>
      <div class="txt">
        <p>
          Your order number is:
          <span class="serial_number">XD8787</span>
        </p>
        <p>We’ll email you an confirmation with detail and tracking info</p>
      </div>

      <button class="submit" @click="continueClick">continue shopping</button>
    </container>
  </div>
</template>

<script>
import container from "../components/CryptoPay-container";
import Logo from "../assets/imgs/logo-crypto-pay.svg";
export default {
  name: "Result",
  components: {
    container,
    Logo
  },
  methods: {
    continueClick() {
      this.$router.push({ name: "Home" });
    }
  }
};
</script>
<style lang="scss">
.result {
  .container {
    text-align: center;
  }
  .logo {
    transform: scale(1.2);
    transform-origin: center 0;
  }
  .icon {
    width: 133px;
    height: 133px;
    margin: 45.3px auto;
    i {
      font-size: 133px;
      transform: scale(1.2);
    }
  }
  h2 {
    margin-bottom: 24px;
  }
  .serial_number {
    color: #6200ff;
    font-weight: bold;
  }
  p {
    font-weight: 400;
    text-transform: none;
  }
  .txt {
    margin-bottom: 24px;
    p:first-child {
      margin-bottom: 4px;
    }
  }
  .submit {
    cursor: pointer;
    width: 100%;
    height: 54px;
    border-radius: 4px;
    background-color: #6200ff;
    color: white;
    font-size: 16px;
    font-weight: bold;
    padding: 0;
    border: none;
    text-transform: uppercase;
  }
}
</style>