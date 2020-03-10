<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">CryptoPay</router-link>|
      <router-link :to="{name:'Result'}">Result</router-link>|
      <router-link :to="{name:'Login'}">Login</router-link>|
      <router-link to="/view/checkout">Checkout</router-link>|
      <router-link :to="{name:'Buyer'}">Buyer</router-link>|
      <router-link :to="{name:'Payment'}">Payment</router-link>|
      <a href="javascript:;" @click="logoutHandler" v-if="loginStatus">Logout</a>
    </div>
    <router-view />
  </div>
</template>

<script>
import store from "@/store";
export default {
  computed: {
    loginStatus() {
      return store.state.status === "connected" ? true : false;
    }
  },
  mounted() {
    window.fbAsyncInit = function() {
      FB.init({
        appId: "205927627424935",
        cookie: true,
        xfbml: true,
        version: "v6.0"
      });
      FB.AppEvents.logPageView();

      FB.getLoginStatus(res => {
        console.log("res", res); // 這裡可以得到 fb 回傳的結果
        store.commit("CHANGE_STATUS", res.status);
      });
    };
  },
  methods: {
    logoutHandler() {
      FB.logout(res => {
        this.$store.commit("SET_PRIVACY", {});
        this.$store.commit("SET_INFOs", res);
      });
      FB.getLoginStatus(res => {
        this.$store.commit("CHANGE_STATUS", res.status);
      });
      console.log("logged out!!");
      this.$router.push("/");
    }
  }
};
</script>

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
