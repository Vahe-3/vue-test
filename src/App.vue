<template>
  <div id="app">
    <Table />
  </div>
</template>

<script>
import Table from './components/Table'

export default {
  name: 'App',
  components: {
    Table
  }
}
</script>

<style>

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  background: linear-gradient(to right, #4b2ae8, #d41414);
  height: 100vh;
	width: 100vw;
  display: flex;
  justify-content: center;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
</style>
