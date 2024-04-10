<template>
  <div class="post-detail">
    <h1>Post Details Page:</h1>
    <p>Displaying the content for post with ID of {{ $route.params.id }} here!</p>
    <div>
      <button @click="showPostId" class="border p-2 rounded border-gray-300 bg-gray-200 hover:bg-gray-300 active:bg-gray-200">Show Post ID</button>
    </div>
    <p><RouterLink to="/posts">&lt; Back</RouterLink></p>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { ref } from 'vue';

const route = useRoute();

const showPostId = () => {
  console.log(`The post ID is: ${route.params.id}`);
};
</script>