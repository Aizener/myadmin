<template>
  <div class="main">
    <div class="main-container">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.main {
  padding: 30px;
  &-container {
    padding: 20px;
    background-color: #fff;
  }
}
</style>
