<template>
  <el-button :type="type" :size="size" @click="onClick">{{label}}</el-button>
</template>

<script>
export default {
  name: "ele-button",
  props: {
    label: {
      type: String,
    },
    type: {
      type: String,
      default:"primary"
    },
    size:{
      type: String,
      default:"small"
    }
  },
  methods: {
    onClick() {
      this.$emit('onClick'); 
    },
  },
};
</script>
