<template>
  <!-- Full screen post -->
  <modal name="fullScreenPost" height="auto" adaptive>
    <s-card class="modal-card-post">
      <s-card-title>
        <div class="contact-card-action">
          <button @click="hide">
            <i class="mdi mdi-close"></i>
          </button>
        </div>
      </s-card-title>
      <!-- posts card -->
        <card-post :post="post" :comments="post.comments" />
    </s-card>
  </modal>
</template>
<script>
import CardPost from "./CardPost";

export default {
  components: { CardPost },
  props: {
    post: [Object, Array]
  },
  methods: {
    hide() {
      this.$modal.hide("fullScreenPost");
    },
  },
};
</script>