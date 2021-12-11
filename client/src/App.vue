<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
</template>

<script>
 import { onMounted } from "vue";
 import {io} from "socket.io-client"


 export default {


   setup() {

     onMounted(() => {
       const socket = io(process.env.VUE_APP_SERVER);
       socket.on('connect', function() {
         console.log('Connected');
       })
       socket.on('events', function(data) {
         console.log('event', data);
       });
       socket.on('exception', function(data) {
         console.log('event', data);
       });
       socket.on('disconnect', function() {
         console.log('Disconnected');
       });
     })
   }
 }
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
