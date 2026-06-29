<script setup lang="ts">
import { computed, ref } from 'vue'

type WorkPhoto = {
  src: string
  alt: string
}

defineProps<{
  photos: WorkPhoto[]
}>()

const selectedPhoto = ref<WorkPhoto | null>(null)
const isPreviewOpen = computed({
  get: () => selectedPhoto.value !== null,
  set: (isOpen) => {
    if (!isOpen) {
      selectedPhoto.value = null
    }
  },
})
</script>

<template>
  <section id="trabajos" class="content-section team-section work-section">
    <v-container>
      <div class="section-heading work-heading">
        <span>Trabajos del taller</span>
        <h2>Fotos reales de autos que pasan por nuestras manos.</h2>
      </div>

      <div class="work-grid">
        <button
          v-for="(photo, index) in photos"
          :key="`${photo.src}-${index}`"
          class="work-photo-card"
          type="button"
          :aria-label="`Ampliar foto de trabajo ${index + 1}`"
          @click="selectedPhoto = photo"
        >
          <v-img :src="photo.src" :alt="photo.alt" aspect-ratio="1" cover />
        </button>
      </div>
    </v-container>

    <v-dialog v-model="isPreviewOpen" max-width="min(92vw, 62rem)">
      <v-card class="work-photo-dialog" rounded="xl">
        <v-img
          v-if="selectedPhoto"
          :src="selectedPhoto.src"
          :alt="selectedPhoto.alt"
          max-height="82vh"
        />
      </v-card>
    </v-dialog>
  </section>
</template>

<style scoped>
.content-section {
  position: relative;
  z-index: 1;
  padding: clamp(4rem, 8vw, 7rem) 0;
}

.work-section {
  color: var(--lab-text, #ffffff);
}

.work-section > .v-container {
  position: relative;
  z-index: 2;
}

.work-heading {
  max-width: 54rem;
  margin: 0 auto 3rem;
  text-align: center;
}

.work-heading span {
  color: var(--lab-primary, #ff9b19);
  font-size: 0.78rem;
  font-weight: 950;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  text-shadow: 1px 1px 0 #000000;
}

.work-heading h2 {
  margin-top: 0.75rem;
  color: var(--lab-heading, #ffcf27);
  font-family: var(--lab-font-display, Impact, Haettenschweiler, 'Arial Black', sans-serif);
  font-size: clamp(2.2rem, 5.4vw, 4.6rem);
  font-style: italic;
  font-weight: 950;
  letter-spacing: -0.04em;
  line-height: 0.9;
  text-shadow:
    3px 3px 0 #050505,
    0 0 1.4rem rgba(255, 126, 24, 0.34);
}

.work-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
}

.work-photo-card {
  position: relative;
  overflow: hidden;
  display: block;
  aspect-ratio: 1;
  padding: 0;
  cursor: pointer;
  background: rgba(7, 6, 4, 0.9);
  border: 2px solid var(--lab-secondary, #ffcf27);
  border-radius: 1.35rem;
  box-shadow: 0 1rem 2.4rem rgba(0, 0, 0, 0.34);
}

.work-photo-card :deep(.v-img) {
  height: 100%;
  filter: saturate(0.92) contrast(1.04) brightness(0.82);
  transition: transform 180ms ease;
}

.work-photo-card:hover :deep(.v-img) {
  transform: scale(1.04);
}

.work-photo-card:focus-visible {
  outline: 3px solid var(--lab-secondary, #ffcf27);
  outline-offset: 4px;
}

.work-photo-dialog {
  overflow: hidden;
  background: #050505;
  border: 1px solid rgba(255, 207, 39, 0.5);
}

:global(.design-original-caleta-mesh) .work-photo-card {
  background: rgba(7, 22, 24, 0.82);
  border: 1px solid rgba(241, 200, 91, 0.46);
  border-radius: 1rem;
  box-shadow:
    inset 0 0 0 1px rgba(122, 168, 159, 0.12),
    0 0.7rem 1.6rem rgba(2, 8, 9, 0.22);
}

@media (max-width: 959px) {
  .work-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 599px) {
  .work-grid {
    grid-template-columns: 1fr;
  }
}
</style>
