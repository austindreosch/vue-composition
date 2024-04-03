<template>
  <div class="home">
    <h3>{{ counterData.title }}</h3>
    <div>
      <button @click="decreaseCounter" class="btn px-5 bg-gray-100 rounded">-</button>
      <span class="counter">{{counterData.count}}</span>
      <button @click="increaseCounter" class="btn px-5 bg-gray-100">+</button>
    </div>
    <div class="edit mt-5">
      <h4 class="m-1">Edit Counter Title:</h4>
      <input v-model="counterData.title" class="bg-gray-200 border border-black text-darkgray rounded p-1" type="text" >
    </div>

  </div>
</template>

<script setup>
  import { reactive, ref } from 'vue'
  const counterData = reactive({
    count: 0,
    title: 'Super Counter'
  });

  const increaseCounter = () => {
    counterData.count++;
  }
  const decreaseCounter = () => {
    counterData.count--;
  }
</script>


<style>
  .home {
    text-align: center;
    padding: 20px;
  }
  .btn, .counter {
    font-size: 40px;
    margin: 20px;
  }
</style>