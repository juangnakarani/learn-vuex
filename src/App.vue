<template>
  <div id="app">
    <show-message-component :msg="msg"></show-message-component>
    </br>
    <edit-message-component :msg="msg"></edit-message-component>
  </div>
</template>

<script>
import ShowMessageComponent from './components/ShowMessageComponent.vue'
import EditMessageComponent from './components/EditMessageComponent.vue'
import store from './vuexc/store.js'
export default {
  components: {
    ShowMessageComponent,
    EditMessageComponent
  },
  store,
  name: 'app',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<style>
div .component{
  border: solid red 1px;
  margin: 50, 50, 50, 50;
}
</style>


</style>


<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
