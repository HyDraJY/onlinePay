<template>
  <div class="container">
    <slot />
  </div>
</template>

<script>
export default {};
</script>

<style lang='scss'>
.container {
  font-family: "Open Sans";
  max-width: 540px;
  padding: 24px 36px;
  box-sizing: border-box;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.16);
  border-radius: 8px;
  text-transform: uppercase;
  text-align: left;
  font-weight: bold;
}
@media (min-width: 767px) {
  .container {
    margin-left: 30px;
  }
}
</style>