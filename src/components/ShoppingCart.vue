<template>
  <div class="shopping_cart">
    <h2 class="title">
      detail
      <select>
        <option value="0"></option>
        <option value="1">ETH</option>
        <option value="2">BTC</option>
      </select>
      <i class="material-icons">unfold_more</i>
    </h2>

    <section class="store">
      <h3>store</h3>
      <p>Store Name Inc.</p>
    </section>

    <section class="list">
      <h3>list</h3>
      <div class="item">
        <div class="name">
          <p>First Product (3)</p>
        </div>
        <div class="cost">
          <p>0.402 ETH</p>
        </div>
      </div>
      <div class="item">
        <div class="name">
          <p>Second Product (1)</p>
        </div>
        <div class="cost">
          <p>0.033 ETH</p>
        </div>
      </div>
    </section>

    <section class="amount">
      <div class="item">
        <div class="name boldname">
          <p>amount</p>
        </div>
        <div class="cost">
          <p>0.435 ETH</p>
        </div>
      </div>
    </section>

    <section class="gas">
      <div class="item">
        <div class="name boldname">
          <p>gas fee</p>
        </div>
        <div class="cost">
          <p>0.00021 ETH</p>
        </div>
      </div>
    </section>

    <section class="total">
      <div class="item">
        <div class="name boldname">
          <p>total</p>
        </div>
        <div class="cost">
          <p>0.43521 ETH</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "ShoppingCart"
};
</script>

<style lang="scss">
.shopping_cart {
  padding: 24px 36px;
  border: 1px solid black;
  border-radius: 8px;
  max-width: 350px;
  box-sizing: border-box;
  font-family: "Open Sans";
  text-align: left;
  .title {
    text-transform: uppercase;
    font-weight: bold;
    position: relative;
    margin-bottom: 16px;
    select {
      border: none;
      appearance: none;
      background-color: transparent;
      font-size: 16px;
      font-weight: bold;
      vertical-align: middle;
      position: absolute;
      right: 0;
      margin-top: 0.7em;
      padding-right: 1.3em;
      & + i {
        position: absolute;
        right: 0;
        padding: 0.3em 0;
        z-index: -1;
      }
    }
  }
  h3 {
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
    padding-bottom: 8px;
  }
  .store {
    margin-bottom: 24px;
  }
  .item {
    display: flex;
    width: 100%;
    .name {
      width: 60%;
    }
    .cost {
      width: 40%;
      display: flex;
      justify-content: flex-end;
      font-weight: bold;
    }
  }
  .list {
    border-bottom: 1px solid black;
    padding-bottom: 8.5px;
    margin-bottom: 8.5px;
  }

  .amount {
    margin-bottom: 8px;
  }

  .gas {
    border-bottom: 1px solid black;
    padding-bottom: 8.5px;
    margin-bottom: 8.5px;
  }

  .total {
    font-size: 20px;
    .name {
      width: 50%;
    }
    .cost {
      width: 50%;
    }
  }

  .boldname {
    font-weight: bold;
    text-transform: uppercase;
  }
}
</style>