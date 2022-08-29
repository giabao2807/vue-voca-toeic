<template>
  <div class="home">
    <BlogPost :post="welcomeScreen" />
    <!-- <BlogPost
      :post="post"
      v-for="(post, index) in sampleBlogPost"
      :key="index"
    /> -->
    <Blogs></Blogs>
    <div class="updates">
      <div class="container">
        <h2>Never miss a vocabulary. Register for your free account today!</h2>
        <router-link class="router-button" to="#">
          Register to Gia Bao <Arrow class="arrow arrow-light" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import BlogPost from "../components/BlogPost.vue";
import Blogs from "./Blogs.vue";
import Arrow from "../assets/Icons/arrow-right-light.svg";

export default {
  name: "Home",
  components: {
    BlogPost,
    Blogs,
    Arrow,
  },
  data() {
    return {
      welcomeScreen: {
        title: "Welcome to Giabao's vocabulary",
        blogPost:
          "Using to learning vocabulary for toeic.\n" +
          "Improve with handle common data with vueJS.\n",
        welcomeScreen: true,
        photo: "blog1",
      },
      sampleBlogPost: [
        {
          title: "Sample Blog Post",
          blogHTMl: "This is a filler blog post. It is not meant to be read.",
          blogCoverPhoto: "blog2",
        },
        {
          title: "Sample Blog Post",
          blogHTMl: "This is a filler blog post. It is not meant to be read.",
          blogCoverPhoto: "blog3",
        },
      ],
    };
  },
  computed: {
    vocabularyData() {
      return this.$store.state.vocabularyData;
    },
  },
};
</script>

<style lang="scss" scoped>
.blog-card-wrap {
  h3 {
    font-weight: 300;
    font-size: 28px;
    margin-bottom: 32px;
  }
}

.updates {
  .container {
    padding: 100px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 800px) {
      padding: 125px 25px;
      flex-direction: row;
    }

    .router-button {
      display: flex;
      font-size: 14px;
      text-decoration: none;

      @media (min-width: 800px) {
        margin-left: auto;
      }
    }

    h2 {
      font-weight: 300;
      font-size: 32px;
      max-width: 435px;
      width: 100%;
      text-align: center;
      text-transform: uppercase;
      @media (min-width: 800px) {
        text-align: initial;
        font-size: 25px;
      }
    }
  }
}
</style>
