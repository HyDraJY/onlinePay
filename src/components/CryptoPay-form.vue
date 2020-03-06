<template>
  <div class="crypto-pay-form">
    <div class="title">
      <p class="description">pay with Crypto pay</p>
    </div>
    <form class="form">
      <p>email</p>
      <input type="email" v-model="email" />
      <p>password</p>
      <input type="text" v-model="password" />
      <button class="submit" @click.prevent="login">LOGIN</button>
      <div class="forgot">
        <span>forgot your password?</span>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login() {
      if (this.email.length && this.password.length)
        this.$router.push({ name: "Checkout" });
      else {
        alert("請填入正確資料");
      }
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