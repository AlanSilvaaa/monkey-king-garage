<script setup lang="ts">
import heroImage from '@/assets/images/hero-image.jpg'

const services = [
  {
    title: 'Diagnostico electronico',
    description:
      'Revision con scanner, lectura de fallas y una explicacion clara antes de reparar.',
    icon: 'mdi-car-cog',
  },
  {
    title: 'Mantencion preventiva',
    description: 'Cambio de aceite, filtros, frenos y chequeo general para evitar fallas caras.',
    icon: 'mdi-wrench-clock',
  },
  {
    title: 'Motor y transmision',
    description: 'Reparaciones mecanicas para recuperar fuerza, seguridad y confiabilidad.',
    icon: 'mdi-engine',
  },
]

const process = [
  'Agendamos una visita y escuchamos el problema.',
  'Inspeccionamos el vehiculo y compartimos el diagnostico.',
  'Aprobado el presupuesto, reparamos y probamos en ruta.',
]

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
  <v-app>
    <v-app-bar class="nav-bar" color="transparent" elevation="0" height="76">
      <v-container class="d-flex align-center justify-space-between">
        <div class="brand-mark">
          <v-avatar class="brand-emblem" size="48">
            <v-icon icon="mdi-crown" size="28" />
          </v-avatar>

          <div>
            <p class="brand-name"><span>Monkey King</span> Garage</p>
            <span>Puerto Montt, Chile</span>
          </div>
        </div>

        <div class="nav-links d-none d-md-flex">
          <a href="#servicios">Servicios</a>
          <a href="#proceso">Proceso</a>
          <a href="#equipo">Equipo</a>
          <a href="#contacto">Contacto</a>
        </div>
      </v-container>
    </v-app-bar>

    <v-main class="landing-page">
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

      <section id="servicios" class="content-section services-section">
        <v-container>
          <div class="section-heading">
            <span>Servicios principales</span>
            <h2>Una pagina simple para explicar que hace el taller.</h2>
          </div>

          <v-row>
            <v-col v-for="service in services" :key="service.title" cols="12" md="4">
              <v-card class="service-card" height="100%" rounded="xl">
                <v-icon :icon="service.icon" size="46" />
                <h3>{{ service.title }}</h3>
                <p>{{ service.description }}</p>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <section id="proceso" class="content-section process-section">
        <v-container>
          <v-row align="center">
            <v-col cols="12" md="5">
              <div class="section-heading text-left">
                <span>Como trabajamos</span>
                <h2>Proceso transparente desde el primer mensaje.</h2>
                <p>
                  La pagina puede usar esta seccion para reducir dudas frecuentes: tiempos,
                  aprobacion de presupuesto y entrega del vehiculo.
                </p>
              </div>
            </v-col>

            <v-col cols="12" md="7">
              <div class="process-list">
                <v-card
                  v-for="(item, index) in process"
                  :key="item"
                  class="process-card"
                  rounded="xl"
                >
                  <v-avatar class="step-avatar" size="46">{{ index + 1 }}</v-avatar>
                  <p>{{ item }}</p>
                </v-card>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </section>

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

      <section id="contacto" class="content-section contact-section">
        <v-container>
          <v-card class="contact-card" rounded="xl">
            <v-row align="center">
              <v-col cols="12" md="7">
                <span class="eyebrow">Contacto</span>
                <h2>Agenda una revision o pide una cotizacion.</h2>
                <p>
                  Encuentranos en Monkey King Garage, Puerto Montt. Lunes a viernes de 09:00 a
                  18:30 hrs.
                </p>
              </v-col>

              <v-col cols="12" md="5">
                <div class="contact-actions">
                  <v-btn
                    block
                    class="king-button"
                    prepend-icon="mdi-whatsapp"
                    rounded="lg"
                    size="large"
                  >
                    Escribir por WhatsApp
                  </v-btn>
                  <v-btn
                    block
                    class="outline-button"
                    prepend-icon="mdi-map-marker"
                    rounded="lg"
                    size="large"
                  >
                    Ver ubicacion
                  </v-btn>
                </div>
              </v-col>

              <v-col cols="12">
                <div class="map-frame">
                  <iframe
                    title="Ubicacion de Monkey King Garage en Google Maps"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d920.6874135358528!2d-72.94700357732248!3d-41.471592742226996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96183bad93dc5bdd%3A0xa9f40dc1c1f5018e!2sMonkey%20king%20Garage!5e0!3m2!1sen!2scl!4v1782585888771!5m2!1sen!2scl"
                    allowfullscreen
                    loading="lazy"
                    referrerpolicy="strict-origin-when-cross-origin"
                  />
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-container>
      </section>
    </v-main>
  </v-app>
</template>

<style scoped>
:global(html) {
  scroll-behavior: smooth;
}

:global(body) {
  margin: 0;
  background: #070604;
}

.nav-bar {
  background: rgba(7, 6, 4, 0.78) !important;
  backdrop-filter: blur(18px);
  border-bottom: 2px solid rgba(255, 184, 28, 0.32);
  box-shadow: 0 0.6rem 2.5rem rgba(0, 0, 0, 0.45);
}

.brand-mark,
.nav-links,
.process-card {
  display: flex;
  align-items: center;
}

.brand-mark {
  gap: 0.85rem;
}

.brand-emblem,
.step-avatar,
.team-avatar {
  color: #120900;
  background: linear-gradient(145deg, #ffe15a 0%, #ffb000 45%, #ff6b1a 100%);
  border: 3px solid #050505;
  box-shadow:
    0 0 0 2px #ffbf1f,
    0 0.65rem 1.5rem rgba(255, 118, 24, 0.38);
}

.brand-mark span,
.nav-links a,
.section-heading p,
.service-card p,
.team-card p,
.contact-card p {
  color: rgba(255, 238, 197, 0.76);
}

.brand-name {
  color: #ff8b22;
  font-family: Impact, Haettenschweiler, 'Arial Black', sans-serif;
  font-size: 1.08rem;
  font-style: italic;
  font-weight: 900;
  letter-spacing: 0.02em;
  line-height: 0.95;
  margin: 0;
  text-shadow:
    0 2px 0 #050505,
    0 0 0.8rem rgba(255, 176, 0, 0.55);
}

.brand-name span {
  color: #ffcf27;
}

.nav-links {
  gap: 1.5rem;
}

.nav-links a {
  color: #ffd24a;
  font-size: 0.95rem;
  font-weight: 900;
  letter-spacing: 0.04em;
  text-decoration: none;
  text-transform: uppercase;
  text-shadow: 0 2px 0 #000000;
}

.landing-page {
  position: relative;
  overflow: hidden;
  color: #ffffff;
  background:
    radial-gradient(circle at 76% 12%, rgba(255, 183, 0, 0.22), transparent 22rem),
    radial-gradient(circle at 18% 22%, rgba(255, 99, 20, 0.22), transparent 25rem),
    linear-gradient(135deg, rgba(255, 178, 0, 0.08) 0 2px, transparent 2px 34px),
    linear-gradient(180deg, #090806 0%, #14100b 45%, #090806 100%);
}

.landing-page::before {
  position: absolute;
  inset: 0;
  pointer-events: none;
  content: '';
  background:
    linear-gradient(90deg, transparent 0%, rgba(255, 187, 0, 0.16) 50%, transparent 100%),
    repeating-linear-gradient(0deg, rgba(255, 255, 255, 0.035) 0 1px, transparent 1px 7px);
  mix-blend-mode: screen;
  opacity: 0.35;
}

.hero-section,
.content-section {
  position: relative;
  z-index: 1;
}

.hero-section {
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
    linear-gradient(90deg, rgba(9, 8, 6, 0.96) 0%, rgba(9, 8, 6, 0.72) 34%, rgba(9, 8, 6, 0.28) 68%, rgba(9, 8, 6, 0.66) 100%),
    linear-gradient(180deg, rgba(9, 8, 6, 0.88) 0%, rgba(9, 8, 6, 0.2) 42%, rgba(9, 8, 6, 0.86) 100%);
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

.king-button {
  color: #160900 !important;
  background: linear-gradient(90deg, #ffdf46, #ff9b19 55%, #ff5d1c) !important;
  border: 3px solid #050505;
  box-shadow:
    0 0 0 2px #ffc421,
    0 0.8rem 1.5rem rgba(255, 105, 19, 0.32);
  font-weight: 950;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.outline-button {
  color: #ffd24a !important;
  background: rgba(8, 8, 8, 0.75) !important;
  border: 2px solid #ffb000 !important;
  box-shadow: 0 0 1rem rgba(255, 176, 0, 0.24);
  font-weight: 950;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.service-card,
.team-card,
.contact-card,
.process-card {
  border: 3px solid #050505;
  box-shadow:
    0 0 0 2px rgba(255, 194, 33, 0.84),
    0 1.2rem 2.6rem rgba(0, 0, 0, 0.42);
}

.service-card .v-icon {
  color: #ffcf27;
  filter: drop-shadow(2px 2px 0 #000000) drop-shadow(0 0 0.9rem rgba(255, 139, 34, 0.6));
}

.section-heading span,
.eyebrow {
  color: #ff9b19;
  font-size: 0.78rem;
  font-weight: 950;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  text-shadow: 1px 1px 0 #000000;
}

.content-section {
  padding: clamp(4rem, 8vw, 7rem) 0;
}

.services-section,
.team-section,
.contact-section {
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

.section-heading.text-left {
  margin-left: 0;
  text-align: left;
}

.section-heading h2,
.contact-card h2 {
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

.section-heading p,
.service-card p,
.team-card p,
.contact-card p {
  color: rgba(255, 238, 197, 0.76);
  font-size: 1rem;
  line-height: 1.7;
}

.service-card,
.team-card {
  position: relative;
  overflow: hidden;
  padding: 2rem;
  background:
    radial-gradient(circle at 86% 0%, rgba(255, 203, 39, 0.16), transparent 12rem),
    linear-gradient(145deg, rgba(30, 24, 16, 0.98), rgba(8, 7, 6, 0.98));
}

.service-card::before,
.team-card::before,
.contact-card::before {
  position: absolute;
  inset: 0;
  pointer-events: none;
  content: '';
  background: linear-gradient(135deg, rgba(255, 196, 33, 0.12), transparent 42%);
}

.service-card h3,
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

.service-card p,
.team-card p {
  position: relative;
}

.process-section {
  background:
    linear-gradient(90deg, rgba(255, 161, 25, 0.15), transparent 28%, rgba(255, 161, 25, 0.1)),
    #050505;
}

.process-section .section-heading h2 {
  color: #ffcf27;
}

.process-list {
  display: grid;
  gap: 1rem;
}

.process-card {
  gap: 1rem;
  padding: 1.25rem;
  background:
    linear-gradient(90deg, rgba(255, 176, 0, 0.15), rgba(255, 93, 28, 0.08)), rgba(0, 0, 0, 0.74);
}

.process-card p {
  color: #fff0c7;
  font-size: 1.05rem;
  font-weight: 850;
  margin: 0;
}

.team-card {
  text-align: center;
}

.team-avatar {
  margin-inline: auto;
  font-family: Impact, Haettenschweiler, 'Arial Black', sans-serif;
  font-size: 1.45rem;
  font-style: italic;
}

.contact-section {
  padding-top: 0;
}

.contact-card {
  position: relative;
  overflow: hidden;
  padding: clamp(2rem, 5vw, 4rem);
  background:
    radial-gradient(circle at 80% 40%, rgba(255, 102, 25, 0.2), transparent 16rem),
    linear-gradient(145deg, rgba(28, 21, 12, 0.98), rgba(5, 5, 5, 0.98));
}

.contact-card p {
  position: relative;
  max-width: 42rem;
  margin-top: 1.25rem;
}

.contact-actions {
  display: grid;
  gap: 1rem;
}

.map-frame {
  position: relative;
  overflow: hidden;
  height: clamp(18rem, 38vw, 28rem);
  margin-top: 1.5rem;
  background: rgba(0, 0, 0, 0.62);
  border: 2px solid rgba(255, 176, 0, 0.68);
  border-radius: 1.25rem;
  box-shadow:
    inset 0 0 0 1px rgba(255, 119, 24, 0.22),
    0 1rem 2rem rgba(0, 0, 0, 0.3);
}

.map-frame iframe {
  display: block;
  width: 100%;
  height: 100%;
  border: 0;
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
  .brand-name {
    font-size: 0.95rem;
  }

  .hero-section h1 {
    font-size: clamp(2.8rem, 16vw, 4.2rem);
  }
}
</style>
