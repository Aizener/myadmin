<template>
  <div class="table-wrapper">
    <div class="table-wrapper__top">
      <slot name="top"></slot>
    </div>
    <div class="table-wrapper__content">
      <slot></slot>
    </div>
    <div class="table-wrapper__footer">
      <slot name="bottom"></slot>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.table-wrapper {
  &__top, &__content {
    padding: 15px 20px;
    border-bottom: 1px solid rgba(77,82,89,0.07);
  }
  &__footer {
    padding: 15px 20px;
  }
}
</style>
