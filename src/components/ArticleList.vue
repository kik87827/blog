<template>
  <div style="text-align: center">
    <div v-for="(item, index) in blogArticle" :key="index">
      <h5>{{ item.title }}</h5>
      <p>{{ item.date }}</p>
    </div>
    <!-- <div>
      <h5>블로그 글 제목</h5>
      <p>블로그 글 날짜</p>
    </div>
    <div>
      <h5>블로그 글 제목</h5>
      <p>블로그 글 날짜</p>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'ArticleList',
  props: {
    blogArticle: Array,
  },
}
</script>

<style lang="scss" scoped></style>
