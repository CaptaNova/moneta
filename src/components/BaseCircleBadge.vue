<template>
  <div class="circle-badge">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.circle-badge {
  align-items: center;
  border-radius: 50%;
  box-shadow: rgba(149, 157, 165, 0.15) 0px 3px 6px;
  display: flex;
  height: 40px;
  justify-content: center;
  line-height: 1;
  width: 40px;
}
</style>
