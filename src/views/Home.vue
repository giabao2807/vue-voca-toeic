<template>
  <div class="home">
    <BlogPost :post="welcomeScreen" />
    <BlogPost
      :post="post"
      v-for="(post, index) in sampleBlogPost"
      :key="index"
    />
  </div>
</template>

<script>
import BlogPost from "../components/BlogPost.vue";

export default {
  name: "Home",
  components: {
    BlogPost,
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
    };
  },
};
</script>
