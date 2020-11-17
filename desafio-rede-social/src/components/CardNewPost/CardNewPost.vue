<template>
  <s-card min-height="90">
    <div class="new-product">
      <div class="new-product-icon">
        <s-button color="#212121" icon @click="show">
          <i class="mdi mdi-pencil"></i>
        </s-button>
      </div>
      <div class="new-produtc-content">
        <h2>What's happening?</h2>
        <h3>Create new post</h3>
      </div>
    </div>
    <!-- Modal new post -->
    <modal-new-post />
  </s-card>
</template>
<script>
import ModalNewPost from "./Modal";
export default {
  components: { ModalNewPost },

  methods: {
    show() {
      this.$modal.show("new-post");
    },
  },
};
</script>

<style lang="scss" src="./NewProductCard.scss"/>