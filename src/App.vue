<template>
  <HeaderSection />

  <div style="text-align: center; display: flex; gap: 10px; justify-content: center; margin: 20px">
    <router-link to="/list">리스트</router-link>
    <router-link to="/home">홈</router-link>
  </div>

  <router-view :blogArticle="blogArticle" class="mt-5"> </router-view>
</template>

<script>
import blogData from './assets/blogData.js'
import HeaderSection from './components/HeaderSection.vue'

export default {
  name: 'App',
  data() {
    return {
      blogArticle: blogData,
    }
  },
  components: { HeaderSection },
}
</script>

<style></style>
