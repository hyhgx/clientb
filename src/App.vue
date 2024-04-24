<template>
  <div class="insert">
    <InfoEntry/>
  </div>
  <div class="query">
    <QueryInfo/>
  </div>
</template>

<script>
import InfoEntry from './components/InfoEntry.vue'
import QueryInfo from './components/QueryInfo.vue'
export default {
  name: 'App',
  components: {
    InfoEntry,
    QueryInfo
  }
}

</script>

<style>
.query{
  float:right;
}
.insert{
  float: left;
}
</style>
