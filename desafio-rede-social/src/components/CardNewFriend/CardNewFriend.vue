<template>
  <s-card center >
    <div class="new-friend-card-container">
      <s-spinner :loading="loading" size="45">
        <div class="new-friend-icon">
          <s-button xLarge icon outlined @click="addNewfriend">
            <i class="mdi mdi-plus"></i>
          </s-button>
        </div>
      </s-spinner>
    </div>
  </s-card>
</template>
<script>
export default {
  data: () => ({
    loading: false,
  }),
  methods: {
    addNewfriend() {
      this.loading = true;
      const that = this;
      // Simulating a promise
      setTimeout((_) => {
        that.loading = false;
        that.$emit("newFriend");
      }, 1500);
    },
  },
};
</script>
<style lang="scss" src="./CardNewFriend.scss"></style>