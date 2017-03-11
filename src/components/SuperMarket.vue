<template>
<div class="hello">
  <h1> SuperMarket </h1>
  <ul>
    <li v-for="foodType in $store.state.foodTypes"> {{foodType}}
      <button @click="$store.actions.addFoodToShoppingCart(foodType)">Buy</button>
    </li>
  </ul>
  <h3> Shopping Cart </h3>
  <ul>
    <li v-for="foodType in $store.state.shoppingCart"> {{foodType}}
      <button @click="$store.actions.removeFoodFromShoppingCart(foodType)">Remove</button>
    </li>
  </ul>
  <button @click="$store.actions.checkOut()">CheckOut</button>

  <h3> You buy </h3>
  <ul>
    <li v-for="foodType in $store.state.checkOutCart"> {{foodType}}
    </li>
  </ul>
</div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$store)
  },
  data() {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

a {
  color: #42b983;
}
</style>
