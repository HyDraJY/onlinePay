<template>
  <div class="cryptopay-header">
    <div class="wrap">
      <CryptoPayLogo fill="#6200FF"></CryptoPayLogo>
      <div class="amount">
        <shoppingCart />
        <span class="amount-eth">0.43521 ETH</span>
        <br />
        <span class="amount-usd">$97.92 USD</span>
      </div>
    </div>
  </div>
</template>

<script>
import CryptoPayLogo from "../assets/imgs/logo-crypto-pay.svg";
import shoppingCart from "../assets/imgs/shopping_cart-24px.svg";
export default {
  name: "cryptopay-header",
  components: {
    CryptoPayLogo,
    shoppingCart
  }
};
</script>

<style lang='scss'>
.cryptopay-header {
  .wrap {
    flex-wrap: wrap;
  }
}
.wrap {
  font-family: "Open Sans";
  max-width: 468px;
  display: flex;
  justify-content: space-between;
  margin: 0;
  > svg {
    transform-origin: 0 0;
    transform: scale(1.2);
  }
  .amount {
    text-align: end;

    > svg {
      vertical-align: middle;
      padding-right: 8px;
    }
  }

  .amount-eth {
    font-size: 20px;
    font-weight: bold;
  }

  .amount-usd {
    color: #00000098;
  }
}

.cryptopay-header::after {
  content: "";
  box-sizing: border-box;
  margin-top: 19px;
  display: inline-block;
  width: 468px;
  height: 0;
  border: 1px solid #f4f4f4;
}
</style>