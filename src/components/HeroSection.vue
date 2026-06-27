<script setup lang="ts">
import heroImage from '@/assets/images/hero-image.jpg'
</script>

<template>
  <section class="hero-section" :style="{ '--hero-image': `url(${heroImage})` }">
    <v-container>
      <v-row align="center" class="hero-row">
        <v-col cols="12" md="9" lg="7">
          <h1>
            <span class="script-word">Monkey King</span>
            <span>Tu auto en manos expertas</span>
          </h1>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
.hero-section {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  min-height: calc(100svh - 76px);
  padding: clamp(1.5rem, 3vw, 2.25rem) 0;
  overflow: hidden;
}

.hero-section::before,
.hero-section::after {
  position: absolute;
  inset: 0;
  pointer-events: none;
  content: '';
}

.hero-section::before {
  z-index: -2;
  background-image: var(--hero-image);
  background-position: center;
  background-size: cover;
  filter: saturate(1.08) contrast(1.05) sepia(0.08);
}

.hero-section::after {
  z-index: -1;
  background:
    radial-gradient(circle at 72% 32%, rgba(255, 151, 24, 0.08), transparent 20rem),
    linear-gradient(
      90deg,
      rgba(9, 8, 6, 0.96) 0%,
      rgba(9, 8, 6, 0.72) 34%,
      rgba(9, 8, 6, 0.28) 68%,
      rgba(9, 8, 6, 0.66) 100%
    ),
    linear-gradient(
      180deg,
      rgba(9, 8, 6, 0.88) 0%,
      rgba(9, 8, 6, 0.2) 42%,
      rgba(9, 8, 6, 0.86) 100%
    );
}

.hero-section .v-container {
  position: relative;
  z-index: 1;
}

.hero-row {
  min-height: 0;
}

.hero-section h1 {
  max-width: 12ch;
  color: #ff8b22;
  font-family: Impact, Haettenschweiler, 'Arial Black', sans-serif;
  font-size: clamp(3.1rem, 8.8vw, 7.8rem);
  font-style: italic;
  font-weight: 900;
  letter-spacing: -0.06em;
  line-height: 0.74;
  text-shadow:
    4px 4px 0 #050505,
    -2px -2px 0 #050505,
    2px -2px 0 #050505,
    -2px 2px 0 #050505,
    0 0 0.1rem #ffcf27,
    0 0 2.2rem rgba(255, 156, 28, 0.48);
}

.script-word {
  display: block;
  color: #ffcf27;
  font-family: 'Brush Script MT', 'Segoe Script', cursive;
  font-size: 0.72em;
  letter-spacing: -0.035em;
  line-height: 0.76;
  transform: rotate(-3deg);
  transform-origin: left center;
}

@media (max-width: 959px) {
  .hero-section {
    min-height: auto;
    padding-top: 1.5rem;
  }

  .hero-section h1 {
    max-width: 10ch;
  }
}

@media (max-width: 599px) {
  .hero-section h1 {
    font-size: clamp(2.8rem, 16vw, 4.2rem);
  }
}
</style>
