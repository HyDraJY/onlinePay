<template>
  <div class="crypto-pay">
    <span class="txt">check out with</span>
    <CryptoPayLogo fill="white"></CryptoPayLogo>
  </div>
</template>

<script>
import CryptoPayLogo from "../assets/imgs/logo-crypto-pay.svg";
export default {
  name: "crypto-pay",
  components: {
    CryptoPayLogo
  }
};
</script>

<style lang="scss">
.crypto-pay {
  font-family: "Open Sans";
  background: linear-gradient(180deg, #8c45ff 0%, #6200ff 100%, #310080 100%);
  max-width: 350px;
  border-radius: 9999px;
  color: white;
  box-shadow: 0px 4px 8px rgba(98, 0, 255, 0.2);
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  line-height: (70px / 14px);
  margin: 0 auto;
  .txt {
    padding-right: 8px;
  }
  svg {
    vertical-align: middle;
  }
}
</style>
