<template>
  <div class="cryptopay" @click="clickHandler">
    <CryptoPay />
  </div>
</template>

<script>
// @ is an alias to /src
import CryptoPay from "@/components/CryptoPay-btn.vue";

export default {
  name: "Home",
  components: {
    CryptoPay
  },
  methods: {
    clickHandler() {
      this.$router.push({ name: "Login" });
    }
  }
};
</script>

<style lang="scss">
.cryptopay {
  cursor: pointer;
}
</style>
