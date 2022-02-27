<script setup lang="ts">
import { ref, onMounted } from 'vue';
import JsonPlaceHolderService from '../services/Posts';
import { FilterService, FilterMatchMode } from 'primevue/api';

defineProps<{ msg: string }>();

const count = ref(0);
const posts = ref();
const service = new JsonPlaceHolderService();

onMounted(() => {
  service.getPosts().then((data) => (posts.value = data));
  console.log(posts.value);
});
</script>

<template>
  <h1>{{ msg }}</h1>
  <!--
  <div v-for="item in posts.value" :key="item.id">
    <p>{{ item.id }}</p>
  </div>
  -->
  <Button @click="count++" label="Count">{{ count }}</Button>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
