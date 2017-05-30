<template>
  <div class="container is-fluid">
    <div class="columns is-mobile">
      <navView></navView>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import navView from '../common/Nav.vue';
  import dashboardView from '../common/Dashboard.vue';

  export default {
    components:{
      navView,
      dashboardView
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
