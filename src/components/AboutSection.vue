<script setup lang="ts">
import aboutImage from '@/assets/images/about.png'

const aboutText =
  'Monkey King Garage es un taller mecánico integral especializado en mantención, diagnóstico y reparación de vehículos livianos y comerciales. Nos caracterizamos por un servicio honesto, transparente y de alta calidad, utilizando repuestos confiables y tecnología de diagnóstico moderna. Nuestro equipo técnico trabaja con compromiso y precisión para asegurar el mejor rendimiento y seguridad de tu vehículo. En Monkey King Garage cuidamos tu auto como si fuera nuestro, ofreciendo soluciones eficientes, atención personalizada y tiempos de entrega rápida.'
</script>

<template>
  <section id="nosotros" class="content-section about-section">
    <v-container>
      <v-row align="center">
        <v-col cols="12" md="6">
          <div class="section-heading text-left">
            <span>Sobre el taller</span>
            <h2>Un taller integral con atencion cercana.</h2>
            <p>{{ aboutText }}</p>
          </div>
        </v-col>

        <v-col cols="12" md="6">
          <v-card class="about-image-card" rounded="xl">
            <v-img
              :src="aboutImage"
              alt="Entrada de Monkey King Garage"
              aspect-ratio="1.15"
              cover
            />
          </v-card>
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

.about-section {
  background:
    radial-gradient(circle at 82% 24%, rgba(255, 161, 25, 0.18), transparent 22rem),
    linear-gradient(90deg, rgba(255, 161, 25, 0.15), transparent 35%, rgba(255, 161, 25, 0.1)),
    #050505;
}

.section-heading {
  max-width: 48rem;
  margin: 0 auto 3rem;
  text-align: center;
}

.section-heading.text-left {
  margin-left: 0;
  text-align: left;
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

.section-heading p {
  color: rgba(255, 238, 197, 0.76);
  font-size: 1rem;
  line-height: 1.7;
}

.about-image-card {
  overflow: hidden;
  padding: 0.5rem;
  background:
    radial-gradient(circle at 80% 0%, rgba(255, 203, 39, 0.16), transparent 12rem),
    linear-gradient(145deg, rgba(30, 24, 16, 0.98), rgba(8, 7, 6, 0.98));
  border: 3px solid #050505;
  box-shadow:
    0 0 0 2px rgba(255, 194, 33, 0.84),
    0 1.2rem 2.6rem rgba(0, 0, 0, 0.42);
}
</style>
