<template>
  <div>
    <headerView></headerView>

          <transition name="slide" mode="out-in">
            <router-view>
            </router-view>
          </transition>

    <footerView></footerView>
  </div>
</template>

<script>


  require('../src/assets/css/app.css');

  import headerView from './components/common/Header.vue';
  import footerView from './components/common/Footer.vue';
  import navView from './components/common/Nav.vue';


export default {
  components:{
    navView,
    headerView,
    footerView,
  },
  name: 'app'
}
</script>

<style>

  slide-leave-active {
    height:600px;
    transition: opacity 0.5s ease;
    opacity: 0;
    animation: slide-out 0.5s ease-out forwards;
  }
  .slide-leave {
    opacity: 1;
    transform: translateX(0);
  }
  .slide-enter-active {
    animation: slide-in 0.5s ease-out forwards;
  }
  @keyframes slide-out {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-30px);
    }
  }
  @keyframes slide-in {
    0% {
      transform: translateX(-30px);
    }
    100% {
      transform: translateX(0);
    }
  }
</style>
