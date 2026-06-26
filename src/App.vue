<script setup lang="ts">
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

const stats = [
  { value: '+12', label: 'anos de experiencia' },
  { value: '24h', label: 'respuesta referencial' },
  { value: '4.8', label: 'calificacion mockup' },
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
      <section class="hero-section">
        <v-container>
          <v-row align="center" class="hero-row">
            <v-col cols="12" lg="7">
              <v-chip class="king-chip mb-6" prepend-icon="mdi-crown" variant="flat">
                Taller mecanico con corona
              </v-chip>

              <h1>
                <span class="script-word">Monkey King</span>
                <span>Garage para autos con caracter.</span>
              </h1>

              <p class="hero-copy">
                Mockup informativo para presentar servicios, confianza, equipo y datos de contacto
                de Monkey King Garage. Este contenido es referencial hasta contar con informacion
                real.
              </p>

              <div class="hero-actions">
                <v-btn class="king-button" href="#contacto" rounded="lg" size="large">
                  Agendar revision
                </v-btn>
                <v-btn
                  class="outline-button"
                  href="#servicios"
                  rounded="lg"
                  size="large"
                  variant="outlined"
                >
                  Ver servicios
                </v-btn>
              </div>

              <div class="hero-stats">
                <div v-for="stat in stats" :key="stat.label" class="stat-card">
                  <strong>{{ stat.value }}</strong>
                  <span>{{ stat.label }}</span>
                </div>
              </div>
            </v-col>

            <v-col cols="12" lg="5">
              <v-card class="inspection-card" rounded="xl">
                <div class="inspection-header">
                  <v-icon icon="mdi-crown-outline" size="38" />
                  <div>
                    <span>Diagnostico del rey</span>
                    <h2>Estado del vehiculo</h2>
                  </div>
                </div>

                <v-divider class="my-6" />

                <div class="check-row">
                  <span>Scanner y codigos</span>
                  <v-chip color="green" size="small" variant="tonal">Listo</v-chip>
                </div>
                <div class="check-row">
                  <span>Frenos y suspension</span>
                  <v-chip color="amber" size="small" variant="tonal">Revisar</v-chip>
                </div>
                <div class="check-row">
                  <span>Presupuesto claro</span>
                  <v-chip color="green" size="small" variant="tonal">Enviado</v-chip>
                </div>

                <v-sheet class="next-slot mt-6 pa-5" rounded="lg">
                  <p class="mb-1">Proxima hora disponible</p>
                  <strong>Hoy, 16:30 hrs</strong>
                </v-sheet>
              </v-card>
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
                  Datos de ejemplo: Avenida Taller 123, Puerto Montt. Lunes a viernes de 09:00 a
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
.hero-actions,
.hero-stats,
.inspection-header,
.check-row,
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
.hero-copy,
.section-heading p,
.service-card p,
.team-card p,
.contact-card p,
.inspection-card p,
.stat-card span {
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
  min-height: 100vh;
  padding: 8rem 0 5rem;
}

.hero-row {
  min-height: calc(100vh - 13rem);
}

.king-chip {
  color: #160900 !important;
  background: linear-gradient(90deg, #ffdd42, #ff9d18 52%, #ff6422) !important;
  border: 2px solid #050505;
  box-shadow:
    0 0 0 2px #ffc322,
    0 0 1.8rem rgba(255, 142, 27, 0.45);
  font-weight: 950;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.hero-section h1 {
  max-width: 12ch;
  color: #ff8b22;
  font-family: Impact, Haettenschweiler, 'Arial Black', sans-serif;
  font-size: clamp(3.1rem, 8.8vw, 7.8rem);
  font-style: italic;
  font-weight: 900;
  letter-spacing: -0.06em;
  line-height: 0.82;
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
  line-height: 0.95;
  transform: rotate(-3deg);
  transform-origin: left center;
}

.hero-copy {
  max-width: 43rem;
  margin: 2rem 0;
  color: rgba(255, 238, 197, 0.82);
  font-size: clamp(1.08rem, 2vw, 1.3rem);
  font-weight: 650;
  line-height: 1.75;
}

.hero-actions {
  flex-wrap: wrap;
  gap: 1rem;
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

.hero-stats {
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 3rem;
}

.stat-card {
  min-width: 9rem;
  padding: 1rem 1.25rem;
  background:
    linear-gradient(145deg, rgba(255, 189, 26, 0.13), rgba(255, 84, 22, 0.08)), rgba(0, 0, 0, 0.48);
  border: 2px solid rgba(255, 191, 31, 0.76);
  border-radius: 1.25rem;
  box-shadow:
    inset 0 0 0 1px rgba(255, 119, 24, 0.28),
    0 0.9rem 2rem rgba(0, 0, 0, 0.28);
}

.stat-card strong {
  display: block;
  color: #ffcf27;
  font-family: Impact, Haettenschweiler, 'Arial Black', sans-serif;
  font-size: 2rem;
  font-style: italic;
  line-height: 1;
  text-shadow: 2px 2px 0 #000000;
}

.stat-card span {
  display: block;
  margin-top: 0.35rem;
  font-size: 0.85rem;
  font-weight: 800;
}

.inspection-card,
.service-card,
.team-card,
.contact-card,
.process-card {
  border: 3px solid #050505;
  box-shadow:
    0 0 0 2px rgba(255, 194, 33, 0.84),
    0 1.2rem 2.6rem rgba(0, 0, 0, 0.42);
}

.inspection-card {
  position: relative;
  overflow: hidden;
  padding: clamp(1.5rem, 4vw, 2.5rem);
  background:
    radial-gradient(circle at 78% 18%, rgba(255, 198, 34, 0.28), transparent 12rem),
    linear-gradient(145deg, rgba(23, 19, 14, 0.98), rgba(5, 5, 5, 0.96));
}

.inspection-card::after {
  position: absolute;
  right: -2.5rem;
  bottom: -3rem;
  color: rgba(255, 193, 30, 0.08);
  content: 'MK';
  font-family: Impact, Haettenschweiler, 'Arial Black', sans-serif;
  font-size: 9rem;
  font-style: italic;
  line-height: 1;
}

.inspection-header {
  position: relative;
  z-index: 1;
  gap: 1rem;
}

.inspection-header .v-icon,
.service-card .v-icon {
  color: #ffcf27;
  filter: drop-shadow(2px 2px 0 #000000) drop-shadow(0 0 0.9rem rgba(255, 139, 34, 0.6));
}

.inspection-header span,
.section-heading span,
.eyebrow {
  color: #ff9b19;
  font-size: 0.78rem;
  font-weight: 950;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  text-shadow: 1px 1px 0 #000000;
}

.inspection-header h2 {
  color: #ffcf27;
  font-family: Impact, Haettenschweiler, 'Arial Black', sans-serif;
  font-size: 2rem;
  font-style: italic;
  letter-spacing: -0.02em;
  text-shadow: 2px 2px 0 #000000;
}

.check-row {
  position: relative;
  z-index: 1;
  justify-content: space-between;
  padding: 1rem 0;
  color: #fff0c7;
  font-weight: 850;
}

.next-slot {
  position: relative;
  z-index: 1;
  color: #fff3c6;
  background: rgba(0, 0, 0, 0.62) !important;
  border: 2px solid rgba(255, 176, 0, 0.54);
}

.next-slot strong {
  color: #ffcf27;
  font-size: 1.3rem;
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

@media (max-width: 959px) {
  .hero-section {
    padding-top: 7rem;
  }

  .hero-section h1 {
    max-width: 10ch;
  }
}

@media (max-width: 599px) {
  .brand-name {
    font-size: 0.95rem;
  }

  .hero-actions .v-btn {
    width: 100%;
  }

  .stat-card {
    flex: 1 1 calc(50% - 1rem);
  }
}
</style>
