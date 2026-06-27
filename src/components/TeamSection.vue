<script setup lang="ts">
const mechanics = [
  {
    name: 'Marco Ruiz',
    role: 'Especialista en diagnostico',
    initials: 'MR',
  },
  {
    name: 'Camila Torres',
    role: 'Mecanica general y frenos',
    initials: 'CT',
  },
  {
    name: 'Diego Soto',
    role: 'Motor y tren delantero',
    initials: 'DS',
  },
]
</script>

<template>
  <section id="equipo" class="content-section team-section">
    <v-container>
      <div class="section-heading">
        <span>Equipo mockup</span>
        <h2>Mecanicos cercanos, visibles y faciles de contactar.</h2>
      </div>

      <v-row>
        <v-col v-for="mechanic in mechanics" :key="mechanic.name" cols="12" md="4">
          <v-card class="team-card" rounded="xl">
            <v-avatar class="team-avatar" size="76">{{ mechanic.initials }}</v-avatar>
            <h3>{{ mechanic.name }}</h3>
            <p>{{ mechanic.role }}</p>
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

.team-section {
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

.team-card {
  position: relative;
  overflow: hidden;
  padding: 2rem;
  text-align: center;
  background:
    radial-gradient(circle at 86% 0%, rgba(255, 203, 39, 0.16), transparent 12rem),
    linear-gradient(145deg, rgba(30, 24, 16, 0.98), rgba(8, 7, 6, 0.98));
  border: 3px solid #050505;
  box-shadow:
    0 0 0 2px rgba(255, 194, 33, 0.84),
    0 1.2rem 2.6rem rgba(0, 0, 0, 0.42);
}

.team-card::before {
  position: absolute;
  inset: 0;
  pointer-events: none;
  content: '';
  background: linear-gradient(135deg, rgba(255, 196, 33, 0.12), transparent 42%);
}

.team-avatar {
  color: #120900;
  margin-inline: auto;
  font-family: Impact, Haettenschweiler, 'Arial Black', sans-serif;
  font-size: 1.45rem;
  font-style: italic;
  background: linear-gradient(145deg, #ffe15a 0%, #ffb000 45%, #ff6b1a 100%);
  border: 3px solid #050505;
  box-shadow:
    0 0 0 2px #ffbf1f,
    0 0.65rem 1.5rem rgba(255, 118, 24, 0.38);
}

.team-card h3 {
  position: relative;
  color: #ff9b19;
  font-family: Impact, Haettenschweiler, 'Arial Black', sans-serif;
  font-size: 1.7rem;
  font-style: italic;
  letter-spacing: -0.01em;
  margin: 1.5rem 0 0.75rem;
  text-shadow: 2px 2px 0 #000000;
}

.team-card p {
  position: relative;
  color: rgba(255, 238, 197, 0.76);
  font-size: 1rem;
  line-height: 1.7;
}
</style>
