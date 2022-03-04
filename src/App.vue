<script>
import { api } from "~/api";

export default {
  provide() {
    return { api };
  },
};
</script>

<template>
  <div>
    <router-view />
  </div>
</template>
