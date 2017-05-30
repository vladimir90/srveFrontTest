<template>
  <div>
    <headerView></headerView>
      <router-view></router-view>
    <footerView></footerView>
  </div>
</template>

<script>

  require('../node_modules/bulma/css/bulma.css');

  import headerView from './components/common/Header.vue';
  import footerView from './components/common/Footer.vue';
  import navView from './components/common/Nav.vue';

export default {
  components:{
    navView,
    headerView,
    footerView
  },
  name: 'app'
}
</script>

<style>

</style>
