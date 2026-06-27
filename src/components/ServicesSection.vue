<script setup lang="ts">
import ServiceCard from './ServiceCard.vue'

const services = [
  {
    title: 'Cambio de aceite',
    icon: 'mdi-oil',
  },
  {
    title: 'Frenos',
    icon: 'mdi-car-brake-alert',
  },
  {
    title: 'Motor',
    icon: 'mdi-engine',
  },
  {
    title: 'Scanner automotriz',
    icon: 'mdi-car-cog',
  },
  {
    title: 'Suspension',
    icon: 'mdi-car-suspension',
  },
  {
    title: 'Tren delantero',
    icon: 'mdi-car-wrench',
  },
  {
    title: 'Embrague',
    icon: 'mdi-car-shift-pattern',
  },
  {
    title: 'Bateria y alternador',
    icon: 'mdi-car-battery',
  },
]
</script>

<template>
  <section id="servicios" class="content-section services-section">
    <v-container>
      <div class="section-heading">
        <span>Servicios principales</span>
        <h2>Servicios mecanicos para mantener tu auto al dia.</h2>
      </div>

      <v-row>
        <v-col v-for="service in services" :key="service.title" cols="6" sm="4" md="3">
          <ServiceCard :icon="service.icon" :title="service.title" />
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
.content-section {
  position: relative;
  z-index: 1;
  padding: clamp(4rem, 8vw, 7rem) 0;
}

.services-section {
  background:
    radial-gradient(circle at 12% 0%, rgba(255, 178, 0, 0.18), transparent 22rem),
    linear-gradient(180deg, #120f0b 0%, #080706 100%);
  color: #ffffff;
}

.section-heading {
  max-width: 48rem;
  margin: 0 auto 3rem;
  text-align: center;
}

.section-heading span {
  color: #ff9b19;
  font-size: 0.78rem;
  font-weight: 950;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  text-shadow: 1px 1px 0 #000000;
}

.section-heading h2 {
  margin-top: 0.75rem;
  color: #ffcf27;
  font-family: Impact, Haettenschweiler, 'Arial Black', sans-serif;
  font-size: clamp(2.2rem, 5.4vw, 4.6rem);
  font-style: italic;
  font-weight: 900;
  letter-spacing: -0.04em;
  line-height: 0.9;
  text-shadow:
    3px 3px 0 #050505,
    0 0 1.4rem rgba(255, 126, 24, 0.34);
}
</style>
