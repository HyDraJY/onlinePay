<template>
  <CryptoContainer class="relative">
    <CryptoPayHeader />
    <router-view />
    <ShoppingCart class="shopping_cart" />
  </CryptoContainer>
</template>

<script>
import CryptoContainer from "../components/CryptoPay-container";
import CryptoPayHeader from "../components/CryptoPay-header";
import ShoppingCart from "../components/ShoppingCart";
export default {
  name: "cryptopay-view",
  components: {
    CryptoPayHeader,
    CryptoContainer,
    ShoppingCart
  }
};
</script>

<style lang="scss">
.relative {
  position: relative;
  .shopping_cart {
    position: absolute;
    top: 0;
    left: 100%;
    width: 100%;
    margin-left: 30px;
  }
  @media screen and (max-width: 768px) {
    .shopping_cart {
      top: 100%;
      left: 0;
      margin: 0;
      margin-top: 30px;
    }
  }
}
</style>