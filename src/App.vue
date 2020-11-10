<template>
  <div>
    <v-btn data-test="btn" @click="count++">count: {{ count }}</v-btn>
  </div>
</template>

<script>
export default {
  data: () => ({
    count: 0
  })
};
</script>
