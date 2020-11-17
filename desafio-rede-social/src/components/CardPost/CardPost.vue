<template>
  <div class="post-container" @click="$emit('click')">
    <s-card :elevation="false">
      <!-- Post title -->
      <s-card-title>
        <div class="post-content">
          <h2>{{ post.title }} <small>13 minutes ago</small></h2>
          <h3>{{ post.description }}</h3>
        </div>
      </s-card-title>
      <!-- post Image -->
      <s-card-body>
        <div class="post-img">
          <img :src="post.imgPath" alt="" />
        </div>
      </s-card-body>
      <!-- Post Likes and comments -->
      <s-card-body>
        <div class="post-actions">
          <span>
            <s-button x-large icon text @click="post.likes++">
              <i class="mdi mdi-heart"></i>
              {{ post.likes }}
            </s-button>
          </span>
          <s-button x-large icon text>
            <i class="mdi mdi-comment"></i>
          </s-button>
        </div>
      </s-card-body>

      <!-- Shows only when the post is full-->
      <span v-if="comments">
        <s-card-sub-title >Comments</s-card-sub-title>
        <div class="post-comments-container">
          <s-card v-for="(comment, index) in comments" :key="index" :elevation="false">
            <s-card-body>
              <div class="post-comments">
                <div class="user-info">
                  <s-avatar rounded>{{ firstChar(comment.user_name) }}</s-avatar>
                  <span>
                    <h2>{{ comment.user_name }}</h2>
                    <h3>@{{ comment.name }}</h3>
                  </span>
                </div>
                <div class="comment">
                  <p>{{ comment.content }}</p>
                </div>
              </div>
            </s-card-body>
          </s-card>
        </div>
      </span>
    </s-card>
  </div>
</template>
<script>
export default {
  props: {
    post: [Object, Array],
    comments: [Object, Array],
  },

  methods: {
    firstChar(data){
      return data.charAt(1).toUpperCase();
    }
  },
};
</script>
<style lang="scss" src="./CardPost.scss"/>