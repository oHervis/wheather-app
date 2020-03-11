<template>
  <div class="wheather-info-retry">
    <p class="wheather-info-retry__text">Something went wrong</p>
    <button @click="retryRequests" class="wheather-info-retry__button">Try again</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class WheatherInfoRetry extends Vue {
  retryRequests() {
    this.$emit('retry-request');
  }
}
</script>

<style lang="sass" scoped>
.wheather-info-retry
  display: flex
  flex-direction: column
  padding: 50px 0
  &__text
    text-align: center
    color: $red
  &__button
    padding: 10px
    width: 100px
    font-size: 14px
    margin: 0 auto
    color: $gray
    border: 1px solid $gray
    background: transparent
    font-weight: 300
    border-radius: 30px
    cursor: pointer
    transition: .4s ease all
    &:hover
      background: rgba(0, 0, 0, 0.03)
    &:focus
      outline: none!important
</style>
