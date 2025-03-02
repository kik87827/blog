<template>
  <div>
    <h4>상세페이지</h4>
    <h5>{{ blogArticle[$route.params.id].title }}</h5>
    <p>{{ blogArticle[$route.params.id].content }}</p>
    <router-view> </router-view>
  </div>
</template>

<script>
export default {
  name: 'DetailPage',
  data() {},
  props: {
    blogArticle: Array,
  },
}
</script>

<style scoped></style>
