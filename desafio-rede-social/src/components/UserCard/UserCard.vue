<template>
  <s-card center>
    <div class="user-card-container">

      <div class="user-info">
        <s-avatar size="70">
          <img
            :src="user.avatar"
            class="avatar"
            alt="User Avatar"
          />
        </s-avatar>
          <h3>{{ user.name }}</h3>
          <h2>{{ user.user_name }}</h2>
      </div>

      <div class="user-revenues">
        <div class="revenue-item">
          <h3>Following</h3>
          <h2>{{ user.following }}</h2>
        </div>

        <hr class="divider"></hr>

        <div class="revenue-item">
          <h3>Followers</h3>
          <h2>{{ user.followers }}</i></h2>
        </div>
      </div>
    </div>
  </s-card>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  computed: mapGetters({user: 'auth/getUser'}),
};
</script>
<style lang="scss" src="./UserCard.scss"/>