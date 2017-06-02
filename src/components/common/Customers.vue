<template>

  <div class="column">
    <h1>Customers</h1>
    <ul>
      <li v-for="data in jsonData">{{data.id}}</li>
    </ul>
  </div>

</template>

<script>
  export default{
    data(){
      return {
        jsonData: this.$store.getters.getJsonData
      }
    }


  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
