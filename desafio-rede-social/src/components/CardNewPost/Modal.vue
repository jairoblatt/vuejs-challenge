<template>
  <modal name="new-post" height="auto" adaptive>
    <s-card :loading="loading">
      <!-- Avatar and user name -->
      <s-card-title class="post-user-info">
        <s-avatar size="50">
          <img :src="user.avatar" alt="User avatar" />
        </s-avatar>
          <s-card-title class="p-0">
            {{ user.name }}
        </s-card-title>
        <s-card-sub-title class="p-0">
            {{ user.user_name }}
        </s-card-sub-title>
      </s-card-title>

      <!-- Form create new post -->
      <s-card-body>
        <s-text-field :errors="error" label="Title" v-model="post.title" />
      </s-card-body>

      <s-card-body>
        <s-text-field label="Description" v-model="post.description" />
      </s-card-body>

      <s-card-body>
        <s-text-field label="Image path" v-model="post.imgPath" />
      </s-card-body>

      <s-card-body>
        <s-button @click="createPost" :loading="loading" block>Post</s-button>
      </s-card-body>
      
    </s-card>
  </modal>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data: () => ({
    loading: false,
    post: {
      title: "",
      description: "",
      imgPath: "",
      likes: Math.floor(Math.random() * 23),
    },
    error: "",
  }),

  computed: mapGetters({ user: "auth/getUser" }),

  methods: {
    ...mapActions("post", ["createNewPost"]),

    hide() {
      this.$modal.hide("new-post");
    },

    createPost() {
      this.loading = true;
      const { title, description, imgPath, likes } = this.post;
      // Validate filed
      if (title.length == 0) {
        this.loading = false;
        return (this.error = "This field is required");
      }

      // simulating a promise
      setTimeout(() => {
        this.createNewPost({ title, description, imgPath, likes });
        this.hide();
        this.loading = false;
      }, 2000);
    },
  },
};
</script>