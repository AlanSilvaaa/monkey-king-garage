<script setup lang="ts">
defineProps<{
  icon: string
  title: string
}>()
</script>

<template>
  <v-card class="service-card" height="100%" rounded="xl">
    <v-icon :icon="icon" size="46" />
    <h3>{{ title }}</h3>
  </v-card>
</template>

<style scoped>
.service-card {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 10.5rem;
  gap: 1.15rem;
  padding: 2rem;
  overflow: hidden;
  text-align: center;
  background:
    radial-gradient(circle at 86% 0%, rgba(255, 203, 39, 0.16), transparent 12rem),
    linear-gradient(145deg, rgba(30, 24, 16, 0.98), rgba(8, 7, 6, 0.98));
  border: 3px solid #050505;
  box-shadow:
    0 0 0 2px rgba(255, 194, 33, 0.84),
    0 1.2rem 2.6rem rgba(0, 0, 0, 0.42);
}

.service-card::before {
  position: absolute;
  inset: 0;
  pointer-events: none;
  content: '';
  background: linear-gradient(135deg, rgba(255, 196, 33, 0.12), transparent 42%);
}

.service-card .v-icon {
  color: #ffcf27;
  filter: drop-shadow(2px 2px 0 #000000) drop-shadow(0 0 0.9rem rgba(255, 139, 34, 0.6));
}

.service-card h3 {
  position: relative;
  color: #ff9b19;
  font-family: Impact, Haettenschweiler, 'Arial Black', sans-serif;
  font-size: clamp(1.08rem, 2.2vw, 1.35rem);
  font-style: italic;
  letter-spacing: -0.01em;
  line-height: 1;
  margin: 0;
  text-shadow: 2px 2px 0 #000000;
}
</style>
