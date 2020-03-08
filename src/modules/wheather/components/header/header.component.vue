<template>
  <header class="header">
    <img class="header__img" src="img/logo/logo.svg" alt="" />
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class HeaderApp extends Vue {}
</script>

<style lang="sass" scoped>
.header
  display: flex
  position: fixed
  width: 100vw
  top: 0
  justify-content: center
  height: $header-height
  background: white
  &__img
    width: 160px
</style>
