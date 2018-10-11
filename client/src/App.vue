<template>
  <v-app>
    <Toolbar/>
    <div id="app">
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
      <transition name="slide-fade">
        <router-view></router-view>
      </transition>
    </div>
  </v-app>
</template>

<script>
import Toolbar from '@/components/Toolbar.vue';

export default {
  components: {
    Toolbar,
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Ubuntu');

#app {
  font-family: 'Ubuntu', Helvetica, Arial, sans-serif;
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
.slide-fade-enter-active {
  transition: all .4s ease;
  transition-delay: 0.25s;
}
.slide-fade-leave-active {
  transition: all .25s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter {
  transform: translateY(-10px);
  opacity: 0;
}
.slide-fade-leave-to{
  transform: translateY(100px);
  opacity: 0;
}
</style>
