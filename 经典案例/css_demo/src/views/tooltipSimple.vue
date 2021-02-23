<template>
  <div class="home">
     <h3> tooltip Demo</h3>
    <Tooltip content="这是一个提示1">tooltip1</Tooltip>
    <Tooltip content="这是一个提示2">tooltip2</Tooltip>
  </div>
</template>

<script>
// @ is an alias to /src
import Tooltip from "@/components/Tooltip.vue";

export default {
  name: "Home",
  components: {
    Tooltip
  }
};
</script>
<style lang="scss">
  .home{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
