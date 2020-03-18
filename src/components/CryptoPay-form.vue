<template>
  <div class="crypto-pay-form">
    <div class="title">
      <p class="description">pay with Crypto pay</p>
    </div>
    <form class="form">
      <p>name</p>
      <input type="text" v-model="name" />
      <p>password</p>
      <input type="text" />
      <button class="submit" @click="logoutHandler" v-if="status">LOGOUT</button>
      <button class="submit" @click="login" v-else>LOGIN WITH FACEBOOK</button>
      <div class="forgot">
        <span>forgot your password?</span>
      </div>
    </form>
  </div>
</template>

<script>
/*eslint-disable*/
export default {
  data() {
    return {
      name: "",
      email: "",
      id: null
    };
  },
  computed: {
    status() {
      return this.$store.state.status === "connected" ? true : false;
    }
  },
  mounted() {
    FB.getLoginStatus(res => {
      this.$store.commit("CHANGE_STATUS", res.status);
      if (this.status === "connected") {
        this.setProfile();
      }
    });
  },
  methods: {
    async getPrivacy() {
      await this.$store.dispatch("GET_PRIVACY");
      this.$router.push({ name: "Checkout" });
    },
    setProfile() {
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
      console.log("setProfile()");
>>>>>>> da7442fe9b204bce7bfb3f68685b08b50554bafc
>>>>>>> 000cbda8218fe0e55a47f34eeedfda0632a1b045
      FB.api("/me?fields=name,id,email", res => {
        this.$store.commit("SET_INFOs", res);
      });
    },
    login() {
      FB.login(
        res => {
          this.$store.commit("CHANGE_STATUS", res.status);
          this.setProfile();
          this.getPrivacy();
        },
        { scope: "email, public_profile", return_scopes: true }
      );
    },
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
.crypto-pay-form {
  .title .description {
    font-size: 20px;
    margin: 24.5px 0 16px;
  }

  .form {
    font-size: 16px;
    p {
      margin: 0 0 4px;
    }
    input {
      font-family: "Open Sans";
      font-size: 1em;
      margin: 0 0 16px;
      width: 100%;
      height: 54px;
      border-radius: 4px;
      border: 1px solid #000;
      box-sizing: border-box;
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
      margin: 8px 0;
    }
    .forgot {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-transform: capitalize;
      color: rgba(0, 0, 0, 0.2);
      span {
        cursor: pointer;
      }
    }
  }
}
</style>