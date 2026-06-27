<script setup lang="ts">
defineProps<{
  whatsappUrl: string
}>()
</script>

<template>
  <v-btn
    aria-label="Escribir por WhatsApp"
    class="whatsapp-float"
    :href="whatsappUrl"
    icon="mdi-whatsapp"
    rel="noopener noreferrer"
    size="x-large"
    target="_blank"
  />
</template>

<style scoped>
.whatsapp-float {
  position: fixed !important;
  right: clamp(1rem, 3vw, 1.75rem);
  bottom: clamp(1rem, 3vw, 1.75rem);
  z-index: 20;
  color: #ffffff !important;
  background: #25d366 !important;
  border: 3px solid #050505;
  box-shadow:
    0 0 0 2px rgba(255, 255, 255, 0.86),
    0 0.8rem 1.7rem rgba(0, 0, 0, 0.42),
    0 0 1.8rem rgba(37, 211, 102, 0.58);
}
</style>
