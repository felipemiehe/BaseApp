<script setup>
import {onMounted, computed} from "vue";
import { useAuthStore } from "../stores/auth";
import router from "../router/index.js";
import {onBeforeMount} from "@vue/runtime-core";

const authStore = useAuthStore();

// onBeforeMount(async () => {
//       await useAuthStore().isAuthenticated()
// });

</script>

<template>
  <div class="max-w-7xl mx-auto">
<!--    <div v-if="authStore.user">-->
<!--      <h1>{{ authStore.user.name }}</h1>-->
<!--      <p>{{ authStore.user.email }}</p>-->
<!--    </div>-->
   <p>testando autenticação</p>
  </div>



</template>