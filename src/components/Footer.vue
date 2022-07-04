<template>
  <footer>
    <div class="container">
      <div class="left">
        <div class="col-1">
          <router-link class="header" :to="{ name: 'home' }"
            >FireBlogs</router-link
          >
          <ul>
            <li>
              <a href="#"><youtube class="svd-icon"/></a>
            </li>
            <li>
              <a href="#"><twitter class="svd-icon"/></a>
            </li>
            <li>
              <a href="#"><instagram class="svd-icon"/></a>
            </li>
            <li>
              <a href="#"><linkedin class="svd-icon"/></a>
            </li>
          </ul>
        </div>
        <div class="col-2">
          <ul>
            <router-link class="link" to="{name: 'home'}">Home</router-link>
            <router-link class="link" to="{name: 'blogs'}">Blogs</router-link>
            <router-link v-if="user" class="link" to="{name: 'newpost'}"
              >Create Post</router-link
            >
            <router-link v-if="!user" class="link" to="{name: 'login'}"
              >Login/ Register</router-link
            >
          </ul>
        </div>
      </div>
      <div class="right">
        <p>Copyright 2022 All Right Reserved</p>
      </div>
    </div>
  </footer>
</template>

<script>
import youtube from "../assets/Icons/youtube-brands.svg";
import twitter from "../assets/Icons/twitter-brands.svg";
import instagram from "../assets/Icons/instagram-brands.svg";
import linkedin from "../assets/Icons/linkedin-brands.svg";

export default {
  name: "footer-vue",
  components: {
    youtube,
    twitter,
    instagram,
    linkedin,
  },
};
</script>

<style lang="scss" scoped></style>
