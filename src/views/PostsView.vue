<template>
  <div class="posts">
    <h1>This is an about page</h1>
    <ul>
      <li class="flex flex-col">
        <RouterLink to="/posts/details/1">Post 1</RouterLink>
        <RouterLink to="/posts/details/2">Post 2</RouterLink>
        <RouterLink to="/posts/details/3">Post 3</RouterLink>
      </li>
    </ul>
  </div>
</template>


<script setup>
import {vAutofocus} from '@/directives/vAutofocus';
</script>