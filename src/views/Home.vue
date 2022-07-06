<template>
  <div class="home">
    <BlogPost :post="welcomeScreen" />
    <BlogPost
      :post="post"
      v-for="(post, index) in sampleBlogPost"
      :key="index"
    />
    <div class="blog-card-wrap">
      <div class="container">
        <h3>View more recent blog</h3>
        <div class="blog-cards">
          <BlogCard
            v-for="(post, index) in sampleBlogCards"
            :key="index"
            :post="post"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogPost from "../components/BlogPost.vue";
import BlogCard from "../components/BlogCard.vue";

export default {
  name: "Home",
  components: {
    BlogPost,
    BlogCard,
  },
  data() {
    return {
      welcomeScreen: {
        title: "Welcome to Giabao's blog",
        blogPost:
          "Weekly blog posts from the best authors in the world.\n" +
          "Join the community and share your thoughts with the world about anime.",
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
      sampleBlogCards: [
        {
          blogTitle: "Blog Card 01",
          blogCoverPhoto: "stock-1",
          blogDate: "July 28,2001",
        },
        {
          blogTitle: "Blog Card 02",
          blogCoverPhoto: "stock-2",
          blogDate: "July 28,2001",
        },
        {
          blogTitle: "Blog Card 03",
          blogCoverPhoto: "stock-3",
          blogDate: "July 28,2001",
        },
        {
          blogTitle: "Blog Card 04",
          blogCoverPhoto: "stock-4",
          blogDate: "July 28,2001",
        },
      ],
    };
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
</style>
