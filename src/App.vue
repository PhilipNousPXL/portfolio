<script lang="ts" setup>
import {appRoutes} from "./router.ts";
import './style.css'
</script>

<template>
  <div style="display: flex; justify-content: center; margin-top: 4rem;">
    <div style="display: inline-flex; justify-content: space-around; width: 40rem;">
      <router-link class="link" :to="{ path: appRoutes.home}">Wie ben ik?</router-link>
      <router-link class="link" :to="{ path: appRoutes.experience}">Mijn ervaringen</router-link>
      <router-link class="link" :to="{ path: appRoutes.reflection}">Hoe ben ik gegroeid?</router-link>
    </div>
  </div>

  <router-view></router-view>

</template>

