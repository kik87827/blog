<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" aria-disabled="true">Disabled</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <div class="container mt-4" style="text-align: center">
    <h5>React 개발자의 블로그입니다</h5>
    <p>- Vue로 만들었음 -</p>
  </div>

  <ArticleList :blogArticle="blogArticle" />
</template>

<script>
import ArticleList from './components/ArticleList.vue'
import blogData from './assets/blogData.js'

export default {
  name: 'App',
  data() {
    return {
      blogArticle: blogData,
    }
  },
  components: { ArticleList },
}
</script>

<style></style>
