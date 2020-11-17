<template>
  <div class="layout-content-container">
    <!-- Left side -->
    <div class="layout-aside">
      <div class="container-fluid">
        <div class="row">
          <!-- User infos card -->
          <div class="col-12">
            <user-card />
          </div>
          <!-- Generate new card product -->
          <div class="col-12">
            <card-new-product />
          </div>
        </div>
      </div>
    </div>

    <!-- Rigth side -->
    <div class="layout-section">
      <div class="container-fluid">
        <div class="row justi-content-center d-flex">
          <!-- Favorites contacts -->
          <div class="col-12">
            <div class="col-12 my-3">
              <div class="section-title">
                <s-chip> Friends ({{ favorites.length }})</s-chip>
              </div>
            </div>
            <s-card-group
              class="d-flex justify-content-sm-center justify-content-md-start friends-section"
            >
              <!-- Friend card -->
              <card-friends
                v-for="(item, index) in favorites"
                :key="index"
                :contact="item"
                @delete-favorite="deleteFavoriteUser"
              />
              <!-- Add new friend -->
              <card-new-friend @newFriend="generateFavoriteUser" />
            </s-card-group>
          </div>
        </div>
        <div class="row mt-2">
          <div class="col-12 mx-3">
            <div class="section-title">
              <s-chip>Feed</s-chip>
            </div>
          </div>
          <!-- Post feed-->
          <div class="col-md-10 col-lg-6 col-sm-12">
            <card-post
              v-for="(post, index) in posts"
              :key="index"
              :post="post"
              @click="show(), (postFull = post)"
            />

            <!-- Full post card -->
            <modal-card-post :post="postFull" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// components
import CardFriends from "../components/CardFriends";
import UserCard from "@/components/UserCard";
import CardNewProduct from "@/components/CardNewPost";
import CardNewFriend from "@/components/CardNewFriend";
import { CardPost, Modal as ModalCardPost } from "@/components/CardPost";
import { mapGetters } from "vuex";

// Mixin for demo
import demo from "@/mixins/fake";
export default {
  // fake data for mockup
  mixins: [demo],

  components: {
    UserCard,
    CardNewProduct,
    CardFriends,
    CardNewFriend,
    CardPost,
    ModalCardPost,
  },

  data: () => ({
    postFull: [],
  }),

  computed: mapGetters({ posts: "post/getPosts" }),

  // generate 20 news fake users/friends
  mounted() {
    for (let index = 0; index < 20; index++) {
      this.generateFavoriteUser();
    }
  },

  methods: {
    show() {
      this.$modal.show("fullScreenPost");
    },
  },
};
</script>