<template>
  <div class="home">
    <h2 class="text-x uppercase mb-2">{{ appTitle }}</h2>
    <h3>{{ counterData.title }}</h3>
    <div>
      <button @click="decreaseCounter(2)" class="btn px-5 bg-gray-100 rounded">-2</button>
      <button @click="decreaseCounter(1)" class="btn px-5 bg-gray-100 rounded">-1</button>
      <span class="counter">{{counterData.count}}</span>
      <button @click="increaseCounter(1, $event)" class="btn px-5 bg-gray-100">+1</button>
      <button @click="increaseCounter(2)" class="btn px-5 bg-gray-100">+2</button>
    </div>
    <p>This counter is {{oddOrEven}}.</p>

    <div class="edit mt-5">
      <h4 class="m-1">Edit Counter Title:</h4>
      <input v-model="counterData.title" class="bg-gray-200 border border-black text-darkgray rounded p-1" type="text" v-autofocus="">
    </div>

  </div>
</template>



<script setup> 

import { computed, onActivated, onBeforeMount, onBeforeUnmount, onBeforeUpdate, onDeactivated, onMounted, onUnmounted, onUpdated, reactive, ref, watch } from 'vue'
import {vAutofocus} from '@/directives/vAutofocus';

/* -----------------------------------------------------------
  *!    APP TITLE
----------------------------------------------------------- */


const appTitle = "My Amazing Counter App";

onMounted(() => {
  console.log('Do stuff related to the App Title');
});


/* -----------------------------------------------------------
  *!    COUNTER
----------------------------------------------------------- */

const counterData = reactive({
  count: 0,
  title: 'Super Counter'
});

watch(() => counterData.count, (newCount, oldCount) => {
  // console.log(`Count changed from ${oldCount} to ${newCount}.`);
  if (newCount == 20) {
    alert('Counter is now 20!');
  }
});

const oddOrEven = computed(() => {
  if(counterData.count % 2 === 0) return 'even';
  return 'odd';
});

const increaseCounter = (amount, event) => {
  // console.log(event);
  counterData.count += amount;
}
const decreaseCounter = amount => {
  counterData.count -= amount;;
}

onMounted(() => {
  console.log('Do stuff related to the counter');
});

/* -----------------------------------------------------------
  *!    DIRECTIVES
----------------------------------------------------------- */

// const vAutofocus = {
//   mounted(el) {
//     el.focus();
//   }
// }


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