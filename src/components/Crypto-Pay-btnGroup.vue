<template>
  <div class="btn-group">
    <div class="item">
      <button class="submit cancel" @click="back">cancel</button>
    </div>
    <div class="item">
      <button class="submit" @click="back">continue</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "btn-group",
  methods: {
    back() {
      this.$router.push({ name: "Checkout" });
    }
  }
};
</script>
<style lang="scss">
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
</style>