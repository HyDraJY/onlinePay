<template>
  <div class="asset">
    <h3>asset</h3>
    <div class="btn_group wrap">
      <div class="eth" @click="clickHandler(1)">
        <ETHLogo class="icon"></ETHLogo>
        <div class="txt">
          <p>
            <span class="display" id="display">Ethereum</span>
            (ETH)
          </p>
        </div>
      </div>
      <div class="btc" @click="clickHandler(2)">
        <BTCLogo class="icon"></BTCLogo>
        <div class="txt">
          <p>
            <span class="display" id="display">Bitcoin</span>
            (BTC)
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ETHLogo from "../assets/imgs/ic-ETH.svg";
import BTCLogo from "../assets/imgs/ic-BTC.svg";
export default {
  name: "asset",
  components: {
    ETHLogo,
    BTCLogo
  },
  props: {
    asset: {
      type: Number,
      required: true
    }
  },
  methods: {
    clickHandler(index) {
      this.$emit("update:asset", index);
    }
  }
};
</script>

<style lang="scss">
.asset {
  h2 {
    position: relative;
    margin-bottom: 16px;
    span {
      position: absolute;
      right: 0;
      bottom: 0;
      font-size: 16px;
      color: #6200ff;
    }
  }
  h3 {
    margin-bottom: 8px;
    font-size: 20px;
  }
  .eth {
    width: 50%;
    text-align: center;
    border: 1px solid #000000;
    border-radius: 4px 0px 0px 4px;
    background-color: white;
    display: flex;
    justify-content: center;
    padding: 16px 0;
    .a {
      fill: white;
    }
    .icon {
      margin-right: 8px;
    }
    .txt {
      max-width: 60%;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .display {
      display: none;
    }
  }
  .btc {
    width: 50%;
    text-align: center;
    border: 1px solid #000000;
    border-radius: 0 4px 4px 0;
    background-color: white;
    display: flex;
    justify-content: center;
    padding: 16px 0;
    .icon {
      margin-right: 8px;
    }
    .txt {
      max-width: 60%;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .display {
      display: none;
    }
  }
  .btc:hover {
    border: 1px solid white;
    color: black;
    filter: invert(1);
  }
  .eth:hover {
    border: 1px solid white;
    color: black;
    filter: invert(1);
  }
}
</style>