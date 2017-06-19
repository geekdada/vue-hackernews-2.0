<template>
  <div class="yk-empty" :class="{ fullscreen }">
    <div class="inner-wrapper" @click="onClick">
      <div class="image"></div>
      <div class="text">{{ text }}</div>
    </div>
  </div>
</template>

<script type="text/babel">
  export default {
    name: 'Empty',
    methods: {
      onClick($event) {
        this.$emit('click', $event);
      },
    },
    props: {
      text: {
        type: String,
        default: '未获取到内容',
      },
      fullscreen: {
        type: Boolean,
        default: false,
      },
    },
  };
</script>

<style>
</style>
