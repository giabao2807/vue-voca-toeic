<template>
  <div class="blog-card">
    <div v-show="editPost" class="icons">
      <div class="icon">
        <Edit class="edit"></Edit>
      </div>
      <div class="icon">
        <Delete class="delete"></Delete>
      </div>
    </div>

    <img
      :src="require(`../assets/blogCards/${post.picture}.jpg`)"
      alt="blog-photo"
    />
    <div class="info">
      <h3>{{ post.vocabulary }}</h3>
      <h5>Meaning: {{ post.meaning }}</h5>
    </div>
  </div>
</template>

<script>
import Edit from "../assets/Icons/edit-regular.svg";
import Delete from "../assets/Icons/trash-regular.svg";

export default {
  name: "blogCard",
  props: ["post"],
  components: {
    Edit,
    Delete,
  },
  computed: {
    editPost() {
      return this.$store.state.editPost;
    },
  },
};
</script>

<style lang="scss" scope>
.blog-card {
  position: relative;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background-color: #fff;
  min-height: 420px;
  transition: 0.5s ease all;

  &:hover {
    transform: rotate(-1deg) scale(1.01);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }

  .icons {
    display: flex;
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 99;

    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 35px;
      height: 35px;

      border-radius: 50%;
      background-color: #fff;
      transition: 0.5s ease all;
      &:hover {
        background-color: #303030;

        .edit .delete {
          path {
            fill: #fff;
          }
        }
      }

      &:nth-child(1) {
        margin-right: 8px;
      }

      .edit .delete {
        pointer-events: none;
        height: 15px;
        width: auto;
      }
    }
  }

  img {
    display: block;
    border-radius: 8px 8px 0 0;
    z-index: 1;
    width: 100%;
    min-height: 200px;
    object-fit: cover;
  }

  .info {
    display: flex;
    flex-direction: column;
    height: 100%;
    z-index: 3;
    padding: 32px 16px;
    color: #000;

    h3 {
      padding-bottom: 8px;
      font-size: 20px;
      font-weight: 300;
    }

    h5 {
      font-weight: 400px;
      font-size: 18px;
      padding-bottom: 16px;
    }

    .link {
      display: inline-flex;
      align-items: center;
      margin-top: auto;
      font-weight: 500px;
      padding-top: 20px;
      font-size: 12px;
      padding-bottom: 4px;
      transition: 0.5 ease-in all;

      &:hover {
        color: rgba(0, 0, 0, 0.06);
      }

      .arrow {
        width: 10px;
      }
    }
  }
}
</style>
