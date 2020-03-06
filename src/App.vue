<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">CryptoPay</router-link>|
      <router-link :to="{name:'Result'}">Result</router-link>|
      <router-link :to="{name:'Login'}">Login</router-link>|
      <router-link to="/view/checkout">Checkout</router-link>|
      <router-link :to="{name:'Buyer'}">Buyer</router-link>|
      <router-link :to="{name:'Payment'}">Payment</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang='scss'>
#app {
  font-family: "Open Sans";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }
}
</style>
