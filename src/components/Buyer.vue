<template>
  <div class="buyer">
    <h2>
      <i class="material-icons back" @click="back">arrow_back</i>
      <span class="back" @click="back">edit shipping</span>
    </h2>
    <section class="personal">
      <h3>personal</h3>
      <div class="wrap">
        <div class="item">
          <label for>full name*</label>
          <input type="text" :placeholder="name" />
        </div>
        <div class="item">
          <label for>phone*</label>
          <input type="phone" placeholder="0912345678" />
        </div>
      </div>
    </section>
    <section class="shipping">
      <h3>shipping</h3>
      <div class="wrap">
        <div class="item">
          <label for>city*</label>
          <input type="text" />
        </div>
        <div class="item">
          <label for>zip</label>
          <input type="text" />
        </div>
      </div>
      <label>address*</label>
      <input type="text" :placeholder="address" />
    </section>
    <ButtonGroup />
  </div>
</template>

<script>
import ButtonGroup from "./Crypto-Pay-btnGroup";
export default {
  name: "buyer",
  components: {
    ButtonGroup
  },
  methods: {
    back() {
      this.$router.push({ name: "Checkout" });
    },
    changeNameHandler() {}
  },
  computed: {
    name() {
      return this.$route.params.name ? this.$route.params.name : "";
    },
    address() {
      return this.$route.params.address ? this.$route.params.address : "";
    }
  }
};
</script>

<style lang="scss">
.buyer {
  h2 {
    margin-top: 24px;
    margin-bottom: 24px;
  }
  h3 {
    font-size: 20px;
    margin-bottom: 16px;
  }
  input {
    line-height: 3.28em;
    border: none;
    border: 1px solid black;
    border-radius: 4px;
    width: 100%;
    box-sizing: border-box;
    font-size: 16px;
    padding: 0 24px;
    margin-top: 4px;
    font-family: "Open Sans";
  }
  input::placeholder {
    font-size: 16px;
  }
  .back {
    cursor: pointer;
  }
  .wrap {
    flex-wrap: wrap;
  }
  .item {
    max-width: 224px;
  }
  .personal {
    margin-bottom: 24px;
  }
  .shipping {
    margin-bottom: 24px;
    .wrap {
      margin-bottom: 16px;
    }
  }
}
</style>