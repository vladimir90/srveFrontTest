<template>
  <div class="container is-fluid">
    <div class="columns is-mobile">
      <navView></navView>


      <transition name="slide" mode="out-in">
         <router-view></router-view>
      </transition>


    </div>
  </div>
</template>

<script>
  import navView from '../common/Nav.vue';
  import {auth} from '../../auth/index.js';

  export default {
    components:{
      navView
    },
    template:'<navView>',
    //Check if user Auth then allow access
    beforeRouteEnter(to,from,next){
      if(auth.checkAuth('id_token')){
        next();
      }else{
        next("*");
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
