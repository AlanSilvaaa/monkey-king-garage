<script setup lang="ts">
import { computed, ref } from 'vue'

import WorkPhotosSection from '@/components/WorkPhotosSection.vue'
import aboutImage from '@/assets/images/about.png'
import heroImage from '@/assets/images/hero-image.jpg'
import heroImage2 from '@/assets/images/hero-image-2.jpg'
import logoImage from '@/assets/images/monkey-king-garage-logo.png'
import tool1 from '@/assets/images/tools/tool-1.png'
import tool2 from '@/assets/images/tools/tool-2.png'
import tool3 from '@/assets/images/tools/tool-3.png'
import tool4 from '@/assets/images/tools/tool-4.png'
import tool5 from '@/assets/images/tools/tool-5.png'
import tool6 from '@/assets/images/tools/tool-6.png'

type DesignKey = 'original' | 'retro' | 'blueprint' | 'caleta' | 'originalCaletaMesh'

type DesignVariant = {
  key: DesignKey
  name: string
  label: string
  className: string
}

const whatsappUrl = `https://api.whatsapp.com/send?phone=56991598696&text=${encodeURIComponent(
  'Hola! Vengo de la página web. Quiero hacerles una consulta.',
)}`

const designs: DesignVariant[] = [
  {
    key: 'original',
    name: 'Original actual',
    label: 'El look oscuro/naranja que usa la pagina hoy.',
    className: 'design-original',
  },
  {
    key: 'retro',
    name: 'Retro Service Manual',
    label: 'Manual impreso, formas duras, crema, amarillo y naranja.',
    className: 'design-retro',
  },
  {
    key: 'blueprint',
    name: 'Blueprint Rally',
    label: 'Tecnico, limpio, azul, con cortes diagonales y ritmo de pista.',
    className: 'design-blueprint',
  },
  {
    key: 'caleta',
    name: 'Caleta de Diagnostico',
    label: 'Puerto Montt lluvioso, taller de puerto, precision sin pose.',
    className: 'design-caleta',
  },
  {
    key: 'originalCaletaMesh',
    name: 'Original + Malla Caleta',
    label: 'Original actual, con fondo cuadriculado verde despues del hero.',
    className: 'design-original design-original-caleta-mesh',
  },
]

const activeKey = ref<DesignKey>('original')
const activeDesign = computed<DesignVariant>(
  () => designs.find((design) => design.key === activeKey.value) ?? designs[0]!,
)

const services = [
  { title: 'Cambio de aceite', icon: 'mdi-oil' },
  { title: 'Frenos', icon: 'mdi-car-brake-alert' },
  { title: 'Motor', icon: 'mdi-engine' },
  { title: 'Scanner automotriz', icon: 'mdi-car-cog' },
  { title: 'Suspension', icon: 'mdi-car-lifted-pickup' },
  { title: 'Tren delantero', icon: 'mdi-car-wrench' },
  { title: 'Embrague', icon: 'mdi-car-shift-pattern' },
  { title: 'Bateria y alternador', icon: 'mdi-car-battery' },
]

const workPhotos = [
  { src: aboutImage, alt: 'Auto en Monkey King Garage durante una mantencion' },
  { src: aboutImage, alt: 'Trabajo mecanico en Monkey King Garage' },
  { src: aboutImage, alt: 'Vehiculo atendido en Monkey King Garage' },
  { src: aboutImage, alt: 'Trabajo realizado por Monkey King Garage' },
  { src: aboutImage, alt: 'Detalle de trabajo mecanico en Monkey King Garage' },
  { src: aboutImage, alt: 'Revision de vehiculo en Monkey King Garage' },
  { src: aboutImage, alt: 'Auto listo despues de una mantencion' },
  { src: aboutImage, alt: 'Registro de trabajo del taller Monkey King Garage' },
]

const toolDecorations = [
  { src: tool1, side: 'left', top: '5%', size: '8.5rem', tilt: '-18deg' },
  { src: tool4, side: 'right', top: '9%', size: '9rem', tilt: '16deg' },
  { src: tool2, side: 'left', top: '22%', size: '7.5rem', tilt: '23deg' },
  { src: tool5, side: 'right', top: '27%', size: '8rem', tilt: '-24deg' },
  { src: tool3, side: 'left', top: '43%', size: '9.25rem', tilt: '11deg' },
  { src: tool6, side: 'right', top: '48%', size: '7.25rem', tilt: '-12deg' },
  { src: tool4, side: 'left', top: '64%', size: '7.75rem', tilt: '-31deg' },
  { src: tool1, side: 'right', top: '68%', size: '8.75rem', tilt: '28deg' },
  { src: tool5, side: 'left', top: '82%', size: '8rem', tilt: '17deg' },
  { src: tool2, side: 'right', top: '86%', size: '7.5rem', tilt: '-19deg' },
]

const aboutText =
  'Monkey King Garage es un taller mecánico integral especializado en mantención, diagnóstico y reparación de vehículos livianos y comerciales. Nos caracterizamos por un servicio honesto, transparente y de alta calidad, utilizando repuestos confiables y tecnología de diagnóstico moderna. Nuestro equipo técnico trabaja con compromiso y precisión para asegurar el mejor rendimiento y seguridad de tu vehículo. En Monkey King Garage cuidamos tu auto como si fuera nuestro, ofreciendo soluciones eficientes, atención personalizada y tiempos de entrega rápida.'
</script>

<template>
  <v-main
    :class="['design-lab', activeDesign.className]"
    :style="{ '--hero-image': `url(${heroImage})`, '--hero-image-2': `url(${heroImage2})` }"
  >
    <div class="lab-switcher">
      <v-container class="switcher-inner">
        <RouterLink class="home-link" to="/">Volver al sitio</RouterLink>

        <div class="switcher-copy">
          <strong>{{ activeDesign.name }}</strong>
          <span>{{ activeDesign.label }}</span>
        </div>

        <div class="switcher-actions" aria-label="Seleccionar diseno">
          <button
            v-for="design in designs"
            :key="design.key"
            class="switcher-button"
            :class="{ 'switcher-button-active': activeKey === design.key }"
            type="button"
            @click="activeKey = design.key"
          >
            {{ design.name }}
          </button>
        </div>
      </v-container>
    </div>

    <header class="site-nav">
      <v-container class="nav-inner">
        <RouterLink class="brand-mark" to="/">
          <img :src="logoImage" alt="Monkey King Garage" />
          <div>
            <p>Monkey King Garage</p>
            <span>Puerto Montt, Chile</span>
          </div>
        </RouterLink>

        <nav class="nav-links" aria-label="Navegacion de prueba de diseno">
          <a href="#servicios">Servicios</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#trabajos">Trabajos</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </v-container>
    </header>

    <section class="hero-section">
      <v-container>
        <v-row align="center" class="hero-row">
          <v-col cols="12" md="7">
            <p class="hero-kicker">Monkey King</p>
            <h1>Tu auto en manos expertas</h1>
            <p class="hero-summary">
              Taller mecánico integral en Puerto Montt para mantención, diagnóstico y reparación de
              vehículos livianos y comerciales.
            </p>
            <div class="hero-actions">
              <a
                class="primary-action"
                :href="whatsappUrl"
                rel="noopener noreferrer"
                target="_blank"
              >
                Escribir por WhatsApp
              </a>
              <a class="secondary-action" href="#servicios">Ver servicios</a>
            </div>
          </v-col>

          <v-col cols="12" md="5">
            <div class="hero-visual">
              <img :src="logoImage" alt="Monkey King Garage" />
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <div class="post-hero-content">
      <div class="tool-background" aria-hidden="true">
        <img
          v-for="(tool, index) in toolDecorations"
          :key="`${tool.src}-${index}`"
          :class="['tool-decoration', `tool-decoration-${tool.side}`]"
          :src="tool.src"
          alt=""
          :style="{
            '--tool-top': tool.top,
            '--tool-size': tool.size,
            '--tool-tilt': tool.tilt,
          }"
        />
      </div>

      <section id="servicios" class="content-section services-section">
        <v-container>
          <div class="section-heading">
            <span>Servicios principales</span>
            <h2>Servicios mecanicos para mantener tu auto al dia.</h2>
          </div>

          <div class="services-grid">
            <article v-for="service in services" :key="service.title" class="service-card">
              <v-icon :icon="service.icon" />
              <h3>{{ service.title }}</h3>
            </article>
          </div>
        </v-container>
      </section>

      <section id="nosotros" class="content-section about-section">
        <v-container>
          <v-row align="center" class="about-row">
            <v-col cols="12" md="6">
              <div class="section-heading text-left">
                <span>Sobre el taller</span>
                <h2>Un taller integral con atencion cercana.</h2>
                <p>{{ aboutText }}</p>
              </div>
            </v-col>

            <v-col cols="12" md="6">
              <div class="about-image-card">
                <img :src="aboutImage" alt="Entrada de Monkey King Garage" />
              </div>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <WorkPhotosSection :photos="workPhotos" />

      <section id="contacto" class="content-section contact-section">
        <v-container>
          <v-row align="center" class="contact-row">
            <v-col cols="12" md="7">
              <span class="eyebrow">Contacto</span>
              <h2>Agenda una revision o pide una cotizacion.</h2>
              <p>
                Encuentranos en Monkey King Garage, Puerto Montt. Lunes a viernes de 09:00 a 18:30
                hrs.
              </p>
            </v-col>

            <v-col cols="12" md="5">
              <div class="contact-actions">
                <a
                  class="primary-action"
                  :href="whatsappUrl"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <v-icon icon="mdi-whatsapp" />
                  Escribir por WhatsApp
                </a>
                <a class="secondary-action" href="#contacto">
                  <v-icon icon="mdi-map-marker" />
                  Ver ubicacion
                </a>
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
        </v-container>
      </section>
    </div>

    <footer class="site-footer">
      <v-container class="footer-inner">
        <a class="footer-brand" href="#top" aria-label="Volver al inicio">
          <img :src="logoImage" alt="Monkey King Garage" />
          <div>
            <p>Monkey King Garage</p>
            <span>Puerto Montt, Chile</span>
          </div>
        </a>

        <div class="footer-links" aria-label="Links de contacto">
          <a :href="whatsappUrl" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          <a
            href="https://www.instagram.com/monkeykinggarage/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://www.facebook.com/p/Monkeykinggarage-100083604510769/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a href="#contacto">Contacto</a>
        </div>
      </v-container>
    </footer>
  </v-main>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@400;700&family=IBM+Plex+Mono:wght@500;700&family=Teko:wght@500;600;700&display=swap');

.design-lab {
  --lab-bg: #090806;
  --lab-bg-alt: #120f0b;
  --lab-surface: rgba(17, 14, 10, 0.96);
  --lab-text: #ffffff;
  --lab-heading: #ffcf27;
  --lab-muted: rgba(255, 238, 197, 0.76);
  --lab-primary: #ff9b19;
  --lab-secondary: #ffcf27;
  --lab-line: #050505;
  --lab-font-display: Impact, Haettenschweiler, 'Arial Black', sans-serif;
  --lab-font-body: Arial, Helvetica, sans-serif;

  min-height: 100svh;
  color: var(--lab-text);
  background:
    radial-gradient(circle at 76% 12%, rgba(255, 183, 0, 0.22), transparent 22rem),
    radial-gradient(circle at 18% 22%, rgba(255, 99, 20, 0.22), transparent 25rem),
    linear-gradient(135deg, rgba(255, 178, 0, 0.08) 0 2px, transparent 2px 34px),
    linear-gradient(180deg, #090806 0%, #14100b 45%, #090806 100%);
  font-family: var(--lab-font-body);
}

.design-retro {
  --lab-bg: #fff8ec;
  --lab-bg-alt: #fff1de;
  --lab-surface: #ffffff;
  --lab-text: #29170d;
  --lab-heading: #2a170d;
  --lab-muted: #6c5748;
  --lab-primary: #a95100;
  --lab-secondary: #ffd60a;
  --lab-line: #2b190f;
  --lab-font-display: Rockwell, 'Courier New', serif;
  --lab-font-body: 'Courier New', monospace;

  background-color: var(--lab-bg);
  background-image: radial-gradient(rgba(169, 81, 0, 0.22) 1px, transparent 1px);
  background-size: 22px 22px;
}

.design-blueprint {
  --lab-bg: #fff5df;
  --lab-bg-alt: #ffe4b8;
  --lab-surface: rgba(255, 255, 255, 0.9);
  --lab-text: #241207;
  --lab-heading: #241207;
  --lab-muted: #745541;
  --lab-primary: #ff7a1a;
  --lab-secondary: #ffd43b;
  --lab-line: #241207;
  --lab-font-display: Arial, Helvetica, sans-serif;
  --lab-font-body: Arial, Helvetica, sans-serif;

  background-color: var(--lab-bg);
  background-image:
    linear-gradient(rgba(255, 122, 26, 0.12) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 122, 26, 0.12) 1px, transparent 1px),
    radial-gradient(circle at 80% 12%, rgba(255, 212, 59, 0.36), transparent 22rem),
    radial-gradient(circle at 12% 24%, rgba(255, 122, 26, 0.18), transparent 20rem);
  background-size:
    42px 42px,
    42px 42px,
    auto;
}

.design-caleta {
  --lab-bg: #10191b;
  --lab-bg-alt: #17282b;
  --lab-surface: rgba(217, 225, 211, 0.92);
  --lab-text: #102024;
  --lab-heading: #edf2e8;
  --lab-muted: rgba(237, 242, 232, 0.74);
  --lab-primary: #b96f3a;
  --lab-secondary: #f1c85b;
  --lab-line: #274148;
  --lab-font-display: 'Teko', 'Arial Narrow', sans-serif;
  --lab-font-body: 'Atkinson Hyperlegible', Arial, sans-serif;
  --lab-font-utility: 'IBM Plex Mono', monospace;

  background:
    radial-gradient(circle at 12% 8%, rgba(122, 168, 159, 0.34), transparent 20rem),
    radial-gradient(circle at 80% 16%, rgba(185, 111, 58, 0.2), transparent 24rem),
    linear-gradient(rgba(241, 200, 91, 0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(241, 200, 91, 0.05) 1px, transparent 1px),
    linear-gradient(180deg, #10191b 0%, #17282b 52%, #0c1417 100%);
  background-size:
    auto,
    auto,
    4.25rem 4.25rem,
    4.25rem 4.25rem,
    auto;
}

.design-original {
  position: relative;
  isolation: isolate;
  overflow: hidden;
  background:
    radial-gradient(circle at 18% 18%, rgba(255, 122, 26, 0.2), transparent 28rem),
    radial-gradient(circle at 82% 32%, rgba(255, 221, 51, 0.14), transparent 34rem),
    linear-gradient(180deg, #050403 0%, #0b0704 38%, #080706 100%);
}

.design-original::before {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  content: '';
  background:
    linear-gradient(104deg, transparent 0 32%, rgba(255, 176, 0, 0.07) 34% 40%, transparent 42%),
    radial-gradient(ellipse at 18% 42%, rgba(255, 176, 0, 0.11), transparent 34rem),
    repeating-linear-gradient(90deg, rgba(255, 255, 255, 0.024) 0 1px, transparent 1px 72px);
  mix-blend-mode: screen;
}

.design-original > * {
  position: relative;
  z-index: 1;
}

.lab-switcher {
  position: sticky;
  top: 0;
  z-index: 30;
  color: #ffffff;
  background: #111111;
  border-bottom: 3px solid var(--lab-secondary);
}

.switcher-inner,
.nav-inner,
.footer-inner,
.brand-mark,
.footer-brand,
.footer-links {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.switcher-inner {
  min-height: 4rem;
  justify-content: space-between;
}

.home-link,
.switcher-button,
.brand-mark,
.nav-links a,
.primary-action,
.secondary-action,
.footer-brand,
.footer-links a {
  color: inherit;
  font-weight: 950;
  text-decoration: none;
  text-transform: uppercase;
}

.switcher-copy {
  display: grid;
  line-height: 1.2;
}

.switcher-copy span {
  color: rgba(255, 255, 255, 0.72);
  font-size: 0.82rem;
}

.switcher-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: flex-end;
}

.switcher-button {
  padding: 0.45rem 0.75rem;
  color: #ffffff;
  cursor: pointer;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.28);
}

.switcher-button-active {
  color: #111111;
  background: var(--lab-secondary);
  border-color: var(--lab-secondary);
}

.design-lab :is(a, button):focus-visible {
  outline: 3px solid var(--lab-secondary);
  outline-offset: 4px;
}

.site-nav {
  background: rgba(7, 6, 4, 0.78);
  backdrop-filter: blur(18px);
  border-bottom: 2px solid rgba(255, 184, 28, 0.32);
  box-shadow: 0 0.6rem 2.5rem rgba(0, 0, 0, 0.45);
}

.nav-inner {
  min-height: 4.75rem;
  justify-content: space-between;
}

.brand-mark {
  color: inherit;
  text-decoration: none;
}

.brand-mark img,
.footer-brand img {
  width: 3.8rem;
  height: 3.8rem;
  object-fit: contain;
}

.brand-mark p,
.footer-brand p,
.hero-kicker,
.hero-section h1,
.section-heading h2,
.service-card h3,
.team-card h3,
.contact-section h2 {
  font-family: var(--lab-font-display);
}

.brand-mark p,
.footer-brand p {
  margin: 0;
  color: var(--lab-primary);
  font-size: 1.08rem;
  font-style: italic;
  line-height: 0.95;
  text-shadow: 0 2px 0 #000000;
}

.brand-mark span,
.footer-brand span {
  color: var(--lab-muted);
}

.nav-links {
  display: flex;
  gap: clamp(1rem, 3vw, 1.5rem);
}

.nav-links a {
  color: var(--lab-secondary);
  font-size: 0.95rem;
  letter-spacing: 0.04em;
  text-shadow: 0 2px 0 #000000;
}

.hero-section {
  position: relative;
  display: flex;
  align-items: center;
  min-height: calc(100svh - 8.75rem);
  padding: clamp(3rem, 7vw, 6rem) 0;
  overflow: hidden;
}

.hero-section::before {
  position: absolute;
  inset: 0;
  z-index: -2;
  content: '';
  background-image: var(--hero-image);
  background-position: center;
  background-size: cover;
  filter: saturate(1.08) contrast(1.05) sepia(0.08);
}

.hero-section::after {
  position: absolute;
  inset: 0;
  z-index: -1;
  content: '';
  background:
    linear-gradient(90deg, rgba(9, 8, 6, 0.96), rgba(9, 8, 6, 0.35) 68%, rgba(9, 8, 6, 0.7)),
    linear-gradient(180deg, rgba(9, 8, 6, 0.88), rgba(9, 8, 6, 0.2) 42%, rgba(9, 8, 6, 0.86));
}

.hero-kicker {
  margin: 0;
  color: var(--lab-secondary);
  font-size: clamp(2rem, 5vw, 4.8rem);
  font-style: italic;
  line-height: 0.8;
  text-shadow: 3px 3px 0 #000000;
}

.hero-section h1 {
  max-width: 11ch;
  margin: 0;
  color: var(--lab-primary);
  font-size: clamp(3.1rem, 8vw, 7.5rem);
  font-style: italic;
  font-weight: 950;
  letter-spacing: -0.06em;
  line-height: 0.74;
  text-shadow:
    4px 4px 0 #050505,
    -2px -2px 0 #050505,
    2px -2px 0 #050505,
    -2px 2px 0 #050505;
}

.hero-summary {
  max-width: 38rem;
  margin: 1.5rem 0 0;
  color: var(--lab-muted);
  font-size: 1.05rem;
  line-height: 1.75;
}

.hero-actions,
.contact-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
}

.primary-action,
.secondary-action {
  display: inline-flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  min-height: 3.4rem;
  padding: 0.9rem 1.25rem;
  border: 3px solid var(--lab-line);
}

.primary-action {
  color: #160900;
  background: linear-gradient(90deg, #ffdf46, #ff9b19 55%, #ff5d1c);
  box-shadow:
    0 0 0 2px #ffc421,
    0 0.8rem 1.5rem rgba(255, 105, 19, 0.32);
}

.secondary-action {
  color: var(--lab-secondary);
  background: rgba(8, 8, 8, 0.75);
  border-color: var(--lab-secondary);
}

.hero-visual {
  display: none;
}

.design-original .hero-visual {
  position: relative;
  display: grid;
  min-height: clamp(22rem, 42vw, 34rem);
  place-items: center;
}

.design-original .hero-visual::before {
  position: absolute;
  width: min(34rem, 82%);
  aspect-ratio: 1;
  content: '';
  background: radial-gradient(circle, rgba(255, 207, 39, 0.24), transparent 64%);
  border-radius: 999px;
}

.design-original .hero-visual img {
  position: relative;
  width: min(27rem, 78%);
  filter: drop-shadow(0 1.2rem 1.6rem rgba(0, 0, 0, 0.5))
    drop-shadow(0 0 1.6rem rgba(255, 176, 0, 0.28));
}

.content-section {
  position: relative;
  z-index: 1;
  padding: clamp(4rem, 8vw, 7rem) 0;
}

.services-section,
.team-section,
.contact-section {
  background:
    radial-gradient(circle at 12% 0%, rgba(255, 178, 0, 0.18), transparent 22rem),
    linear-gradient(180deg, #120f0b 0%, #080706 100%);
}

.about-section {
  background:
    radial-gradient(circle at 82% 24%, rgba(255, 161, 25, 0.18), transparent 22rem),
    linear-gradient(90deg, rgba(255, 161, 25, 0.15), transparent 35%, rgba(255, 161, 25, 0.1)),
    #050505;
}

.design-original .hero-section {
  padding-bottom: clamp(7rem, 10vw, 10rem);
}

.design-original .hero-section::before {
  opacity: 0.58;
  background-image: var(--hero-image-2);
  background-position: center right;
  filter: saturate(1.12) contrast(1.08) brightness(0.92);
}

.design-original .hero-section::after {
  background:
    radial-gradient(circle at 78% 38%, rgba(255, 207, 39, 0.18), transparent 24rem),
    radial-gradient(circle at 14% 78%, rgba(255, 99, 20, 0.22), transparent 22rem),
    linear-gradient(
      90deg,
      rgba(5, 5, 5, 0.94) 0%,
      rgba(5, 5, 5, 0.74) 42%,
      rgba(5, 5, 5, 0.48) 100%
    ),
    linear-gradient(
      180deg,
      rgba(5, 5, 5, 0.82) 0%,
      rgba(5, 5, 5, 0.22) 45%,
      rgba(5, 5, 5, 0.58) 72%,
      rgba(5, 5, 5, 0) 100%
    );
}

.design-original-caleta-mesh .hero-section::after {
  background:
    linear-gradient(180deg, rgba(5, 5, 5, 0) 56%, rgba(5, 5, 5, 0.78) 84%, #050505 100%),
    radial-gradient(circle at 78% 38%, rgba(255, 207, 39, 0.18), transparent 24rem),
    radial-gradient(circle at 14% 78%, rgba(255, 99, 20, 0.22), transparent 22rem),
    linear-gradient(
      90deg,
      rgba(5, 5, 5, 0.94) 0%,
      rgba(5, 5, 5, 0.74) 42%,
      rgba(5, 5, 5, 0.48) 100%
    ),
    linear-gradient(
      180deg,
      rgba(5, 5, 5, 0.82) 0%,
      rgba(5, 5, 5, 0.22) 45%,
      rgba(5, 5, 5, 0.58) 72%,
      rgba(5, 5, 5, 0) 100%
    );
}

.design-original .services-section {
  overflow: hidden;
  margin-top: -7rem;
  padding-top: clamp(9rem, 13vw, 12rem);
  padding-bottom: clamp(8rem, 12vw, 11rem);
  background: transparent;
}

.design-original .content-section > .v-container {
  position: relative;
  z-index: 2;
}

.design-original .services-section::before {
  position: absolute;
  inset: -10rem 0 -8rem;
  z-index: 0;
  pointer-events: none;
  content: '';
  background:
    radial-gradient(circle at 12% 22%, rgba(255, 178, 0, 0.22), transparent 28rem),
    linear-gradient(
      180deg,
      rgba(5, 4, 3, 0) 0%,
      rgba(5, 4, 3, 0.72) 21%,
      rgba(5, 4, 3, 0.9) 62%,
      rgba(5, 4, 3, 0) 100%
    ),
    linear-gradient(90deg, rgba(5, 4, 3, 0.9), rgba(5, 4, 3, 0.58), rgba(5, 4, 3, 0.92));
  background-position:
    12% 22%,
    center,
    center;
  background-repeat: no-repeat;
  background-size: auto, auto, auto;
}

.design-original .about-section,
.design-original .team-section,
.design-original .contact-section {
  overflow: hidden;
  margin-top: -7rem;
  padding-top: clamp(10rem, 14vw, 13rem);
  padding-bottom: clamp(8rem, 11vw, 10rem);
  background: transparent;
}

.design-original .about-section > .v-container,
.design-original .team-section > .v-container,
.design-original .contact-section > .v-container {
  position: relative;
  z-index: 1;
}

.design-original .about-section::before,
.design-original .team-section::before,
.design-original .contact-section::before {
  position: absolute;
  inset: -10rem 0;
  z-index: 0;
  pointer-events: none;
  content: '';
}

.design-original .about-section::before {
  background:
    radial-gradient(circle at 82% 36%, rgba(255, 161, 25, 0.15), transparent 28rem),
    linear-gradient(90deg, rgba(255, 161, 25, 0.08), transparent 42%, rgba(255, 161, 25, 0.07)),
    linear-gradient(
      180deg,
      rgba(5, 5, 5, 0) 0%,
      rgba(5, 5, 5, 0.34) 18%,
      rgba(5, 5, 5, 0.7) 45%,
      rgba(5, 5, 5, 0.62) 78%,
      rgba(5, 5, 5, 0) 100%
    );
}

.design-original .team-section::before,
.design-original .contact-section::before {
  background:
    radial-gradient(circle at 12% 26%, rgba(255, 178, 0, 0.16), transparent 30rem),
    linear-gradient(
      180deg,
      rgba(18, 15, 11, 0) 0%,
      rgba(18, 15, 11, 0.3) 18%,
      rgba(8, 7, 6, 0.72) 52%,
      rgba(8, 7, 6, 0.58) 80%,
      rgba(8, 7, 6, 0) 100%
    );
}

.design-original-caleta-mesh .services-section::before,
.design-original-caleta-mesh .about-section::before,
.design-original-caleta-mesh .team-section::before,
.design-original-caleta-mesh .contact-section::before {
  background:
    linear-gradient(rgba(241, 200, 91, 0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(241, 200, 91, 0.05) 1px, transparent 1px),
    linear-gradient(180deg, #10191b 0%, #17282b 52%, #0c1417 100%);
  background-position: center, center, center;
  background-size:
    4.25rem 4.25rem,
    4.25rem 4.25rem,
    auto;
}

.design-original-caleta-mesh .services-section::after {
  position: absolute;
  inset: 0 0 auto;
  z-index: 1;
  height: clamp(7rem, 11vw, 11rem);
  pointer-events: none;
  content: '';
  background: linear-gradient(
    180deg,
    rgba(5, 5, 5, 0.98) 0%,
    rgba(5, 5, 5, 0.62) 42%,
    rgba(16, 25, 27, 0) 100%
  );
}

.post-hero-content {
  position: relative;
}

.tool-background {
  display: none;
}

.design-original-caleta-mesh .tool-background {
  position: absolute;
  inset: 0;
  z-index: 3;
  display: block;
  pointer-events: none;
}

.design-original-caleta-mesh .tool-decoration {
  position: absolute;
  top: var(--tool-top);
  width: var(--tool-size);
  height: auto;
  opacity: 0.11;
  filter: sepia(0.35) saturate(0.7) hue-rotate(115deg) brightness(0.86);
  transform: rotate(var(--tool-tilt));
  transform-origin: center;
  user-select: none;
}

.design-original-caleta-mesh .tool-decoration-left {
  left: clamp(0.75rem, 4vw, 4.5rem);
}

.design-original-caleta-mesh .tool-decoration-right {
  right: clamp(0.75rem, 4vw, 4.5rem);
}

.design-original-caleta-mesh .content-section {
  --lab-font-display: 'Teko', 'Arial Narrow', sans-serif;
  --lab-font-body: 'Atkinson Hyperlegible', Arial, sans-serif;
  --lab-font-utility: 'IBM Plex Mono', monospace;
  --lab-heading: #edf2e8;
  --lab-primary: #f1c85b;
  --lab-muted: rgba(214, 226, 219, 0.74);

  font-family: var(--lab-font-body);
}

.design-original-caleta-mesh .section-heading span,
.design-original-caleta-mesh .eyebrow {
  font-family: var(--lab-font-utility);
  text-shadow: none;
}

.design-original-caleta-mesh .section-heading h2,
.design-original-caleta-mesh .contact-section h2,
.design-original-caleta-mesh .service-card h3 {
  font-family: var(--lab-font-display);
  font-style: normal;
  text-transform: uppercase;
}

.design-original-caleta-mesh .section-heading h2,
.design-original-caleta-mesh .contact-section h2 {
  text-shadow: none;
}

.design-original-caleta-mesh .section-heading p,
.design-original-caleta-mesh .contact-section p {
  color: var(--lab-muted);
  text-transform: none;
}

.design-original-caleta-mesh .service-card {
  background:
    linear-gradient(135deg, rgba(122, 168, 159, 0.12), transparent 48%), rgba(7, 22, 24, 0.82);
  border: 1px solid rgba(241, 200, 91, 0.46);
  border-radius: 1rem;
  box-shadow:
    inset 0 0 0 1px rgba(122, 168, 159, 0.12),
    0 0.7rem 1.6rem rgba(2, 8, 9, 0.22);
}

.design-original-caleta-mesh .service-card .v-icon {
  color: #d7c078;
  filter: none;
}

.design-original-caleta-mesh .service-card h3 {
  color: #f1c85b;
  text-shadow: none;
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

.section-heading span,
.eyebrow {
  color: var(--lab-primary);
  font-size: 0.78rem;
  font-weight: 950;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  text-shadow: 1px 1px 0 #000000;
}

.section-heading h2,
.contact-section h2 {
  margin-top: 0.75rem;
  color: var(--lab-heading);
  font-size: clamp(2.2rem, 5.4vw, 4.6rem);
  font-style: italic;
  font-weight: 950;
  letter-spacing: -0.04em;
  line-height: 0.9;
  text-shadow:
    3px 3px 0 #050505,
    0 0 1.4rem rgba(255, 126, 24, 0.34);
}

.section-heading p,
.contact-section p,
.team-card p {
  color: var(--lab-muted);
  font-size: 1rem;
  line-height: 1.7;
}

.services-grid,
.team-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
}

.team-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.service-card,
.team-card,
.about-image-card {
  position: relative;
  overflow: hidden;
  background:
    radial-gradient(circle at 86% 0%, rgba(255, 203, 39, 0.16), transparent 12rem),
    linear-gradient(145deg, rgba(30, 24, 16, 0.98), rgba(8, 7, 6, 0.98));
  border: 3px solid #050505;
  border-radius: 1.5rem;
  box-shadow:
    0 0 0 2px rgba(255, 194, 33, 0.84),
    0 1.2rem 2.6rem rgba(0, 0, 0, 0.42);
}

.service-card {
  display: grid;
  min-height: 10.5rem;
  gap: 1.15rem;
  place-items: center;
  padding: 2rem;
  text-align: center;
}

.service-card .v-icon {
  color: var(--lab-heading);
  font-size: 2.875rem;
  filter: drop-shadow(2px 2px 0 #000000) drop-shadow(0 0 0.9rem rgba(255, 139, 34, 0.6));
}

.service-card h3,
.team-card h3 {
  position: relative;
  margin: 0;
  color: var(--lab-primary);
  font-size: clamp(1.08rem, 2.2vw, 1.35rem);
  font-style: italic;
  line-height: 1;
  text-shadow: 2px 2px 0 #000000;
}

.about-image-card {
  padding: 0.5rem;
}

.about-image-card img {
  display: block;
  width: 100%;
  aspect-ratio: 1.15;
  object-fit: cover;
  border-radius: 1rem;
}

.team-card {
  padding: 2rem;
  text-align: center;
}

.team-avatar {
  display: grid;
  width: 4.75rem;
  aspect-ratio: 1;
  margin: 0 auto 1.5rem;
  place-items: center;
  color: #120900;
  font-family: var(--lab-font-display);
  font-size: 1.45rem;
  font-style: italic;
  background: linear-gradient(145deg, #ffe15a 0%, #ffb000 45%, #ff6b1a 100%);
  border: 3px solid #050505;
  border-radius: 999px;
}

.team-card p {
  margin-bottom: 0;
}

.contact-section {
  padding-top: 0;
}

.contact-actions {
  display: grid;
  margin-top: 0;
}

.map-frame {
  position: relative;
  height: clamp(18rem, 38vw, 28rem);
  margin-top: 1.5rem;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.62);
  border: 2px solid rgba(255, 176, 0, 0.68);
  border-radius: 1.25rem;
}

.map-frame iframe {
  display: block;
  width: 100%;
  height: 100%;
  border: 0;
}

.site-footer {
  padding: 1.5rem 0;
  color: #fff0c7;
  background:
    linear-gradient(90deg, rgba(255, 161, 25, 0.14), transparent 45%, rgba(255, 161, 25, 0.1)),
    #050505;
  border-top: 2px solid rgba(255, 184, 28, 0.38);
}

.footer-inner {
  justify-content: space-between;
}

.footer-brand {
  color: inherit;
}

.footer-links {
  flex-wrap: wrap;
  justify-content: flex-end;
}

.footer-links a {
  color: var(--lab-secondary);
  font-size: 0.92rem;
  letter-spacing: 0.03em;
  text-shadow: 1px 1px 0 #000000;
}

.design-retro .site-nav {
  background: var(--lab-surface);
  border-bottom: 4px solid var(--lab-line);
  box-shadow: 0 5px 0 var(--lab-secondary);
}

.design-retro .brand-mark p,
.design-retro .footer-brand p,
.design-retro .nav-links a,
.design-retro .section-heading span,
.design-retro .eyebrow {
  text-shadow: none;
}

.design-retro .brand-mark span,
.design-retro .footer-brand span {
  color: var(--lab-muted);
}

.design-retro .hero-section {
  min-height: auto;
  background: transparent;
  border-bottom: 4px solid rgba(43, 25, 15, 0.22);
}

.design-retro .hero-section::before,
.design-retro .hero-section::after {
  display: none;
}

.design-retro .hero-row {
  flex-direction: row;
}

.design-retro .hero-kicker {
  display: inline-block;
  padding: 0.35rem 0.8rem;
  margin-bottom: 1.5rem;
  color: #ffffff;
  font-size: 0.72rem;
  line-height: 1;
  text-transform: uppercase;
  background: var(--lab-primary);
  border: 3px solid var(--lab-line);
  box-shadow: 4px 4px 0 var(--lab-line);
}

.design-retro .hero-section h1,
.design-retro .section-heading h2,
.design-retro .contact-section h2 {
  max-width: 11ch;
  color: var(--lab-heading);
  font-style: normal;
  letter-spacing: 0.01em;
  line-height: 0.92;
  text-transform: uppercase;
  text-shadow: 3px 3px 0 rgba(41, 23, 13, 0.18);
}

.design-retro .hero-summary {
  padding-left: 1rem;
  color: var(--lab-muted);
  border-left: 4px solid var(--lab-secondary);
}

.design-retro .hero-visual {
  display: grid;
  max-width: 30rem;
  aspect-ratio: 1;
  margin: 0 auto;
  place-items: center;
  background: #ffffff;
  border: 0.55rem solid var(--lab-primary);
  border-radius: 45% 55% 48% 52% / 52% 45% 55% 48%;
  box-shadow:
    0 0 0 4px var(--lab-line),
    0 1.3rem 0 rgba(0, 0, 0, 0.1);
}

.design-retro .hero-visual img {
  width: min(75%, 22rem);
}

.design-retro .services-section,
.design-retro .about-section,
.design-retro .team-section,
.design-retro .contact-section {
  color: var(--lab-text);
  background: transparent;
}

.design-retro .section-heading {
  padding-bottom: 0.75rem;
  border-bottom: 4px solid var(--lab-primary);
}

.design-retro .service-card,
.design-retro .team-card,
.design-retro .about-image-card {
  color: var(--lab-text);
  background: var(--lab-surface);
  border-color: var(--lab-line);
  border-radius: 0;
  box-shadow: 6px 6px 0 var(--lab-line);
}

.design-retro .service-card:nth-child(3n),
.design-retro .team-card:nth-child(2) {
  background: #ffd9bd;
}

.design-retro .service-card .v-icon {
  color: var(--lab-primary);
  filter: none;
}

.design-retro .service-card h3,
.design-retro .team-card h3 {
  color: var(--lab-heading);
  font-style: normal;
  text-shadow: none;
}

.design-retro .team-avatar,
.design-retro .primary-action,
.design-retro .secondary-action {
  border-radius: 0;
  box-shadow: 5px 5px 0 var(--lab-line);
}

.design-retro .secondary-action {
  color: #080808;
  background: var(--lab-secondary);
}

.design-retro .site-footer {
  color: var(--lab-secondary);
  text-align: center;
  background: #2a1b12;
  border-top: 0.8rem solid var(--lab-secondary);
}

.design-blueprint .site-nav {
  margin: 1rem auto 0;
  background: rgba(255, 255, 255, 0.84);
  border: 1px solid rgba(255, 122, 26, 0.2);
  border-radius: 999px;
  box-shadow: 0 1.2rem 3rem rgba(255, 122, 26, 0.14);
}

.design-blueprint .brand-mark p,
.design-blueprint .footer-brand p,
.design-blueprint .nav-links a,
.design-blueprint .section-heading span,
.design-blueprint .eyebrow {
  text-shadow: none;
}

.design-blueprint .nav-links a {
  color: var(--lab-text);
}

.design-blueprint .hero-section {
  min-height: auto;
}

.design-blueprint .hero-section::before {
  inset: 2rem 0 auto auto;
  width: min(45vw, 36rem);
  height: min(45vw, 36rem);
  opacity: 0.3;
  clip-path: polygon(18% 0, 100% 12%, 82% 100%, 0 88%);
}

.design-blueprint .hero-section::after {
  background: linear-gradient(115deg, rgba(255, 245, 223, 0.95) 0 58%, transparent 58%);
}

.design-blueprint .hero-row {
  align-items: stretch;
}

.design-blueprint .hero-kicker {
  color: var(--lab-primary);
  font-size: 0.9rem;
  font-style: normal;
  letter-spacing: 0.22em;
  line-height: 1;
  text-transform: uppercase;
  text-shadow: none;
}

.design-blueprint .hero-section h1 {
  max-width: 12ch;
  color: var(--lab-heading);
  font-size: clamp(3rem, 7vw, 6.5rem);
  font-style: normal;
  letter-spacing: -0.08em;
  line-height: 0.86;
  text-shadow: none;
}

.design-blueprint .hero-summary {
  color: var(--lab-muted);
}

.design-blueprint .hero-visual {
  display: grid;
  height: 100%;
  min-height: 24rem;
  place-items: center;
  background:
    linear-gradient(135deg, rgba(255, 122, 26, 0.16), transparent 42%), var(--lab-surface);
  border: 1px solid rgba(255, 122, 26, 0.22);
  border-radius: 2rem 8rem 2rem 8rem;
  box-shadow: 0 1.5rem 3.5rem rgba(255, 122, 26, 0.16);
  transform: rotate(1.5deg);
}

.design-blueprint .hero-visual img {
  width: min(72%, 21rem);
}

.design-blueprint .services-section,
.design-blueprint .about-section,
.design-blueprint .team-section,
.design-blueprint .contact-section {
  color: var(--lab-text);
  background: transparent;
}

.design-blueprint .section-heading {
  text-align: left;
}

.design-blueprint .section-heading h2,
.design-blueprint .contact-section h2 {
  color: var(--lab-heading);
  font-style: normal;
  letter-spacing: -0.07em;
  text-shadow: none;
}

.design-blueprint .services-grid {
  grid-template-columns: 1.15fr 0.85fr 1fr;
}

.design-blueprint .service-card,
.design-blueprint .team-card,
.design-blueprint .about-image-card {
  color: var(--lab-text);
  background: var(--lab-surface);
  border: 1px solid rgba(255, 122, 26, 0.22);
  border-radius: 1.5rem;
  box-shadow: 0 1.5rem 3rem rgba(255, 122, 26, 0.12);
}

.design-blueprint .service-card:nth-child(4n + 1) {
  grid-row: span 2;
  min-height: 22rem;
  border-radius: 3rem 1rem 3rem 1rem;
}

.design-blueprint .service-card:nth-child(3n) {
  transform: translateY(1.5rem);
}

.design-blueprint .service-card .v-icon {
  color: var(--lab-primary);
  filter: none;
}

.design-blueprint .service-card h3,
.design-blueprint .team-card h3 {
  color: var(--lab-heading);
  font-style: normal;
  text-shadow: none;
}

.design-blueprint .team-grid {
  align-items: stretch;
}

.design-blueprint .team-card:nth-child(2) {
  transform: translateY(-1.5rem);
}

.design-blueprint .team-avatar {
  color: #ffffff;
  background: var(--lab-primary);
  border: 0;
  border-radius: 1.5rem;
}

.design-blueprint .primary-action,
.design-blueprint .secondary-action {
  border: 0;
  border-radius: 999px;
  box-shadow: 0 0.8rem 1.6rem rgba(255, 122, 26, 0.18);
}

.design-blueprint .primary-action {
  color: #ffffff;
  background: var(--lab-primary);
}

.design-blueprint .secondary-action {
  color: var(--lab-text);
  background: #ffffff;
}

.design-blueprint .map-frame {
  border: 0;
  border-radius: 2rem;
  box-shadow: 0 1.5rem 3rem rgba(255, 122, 26, 0.14);
}

.design-blueprint .site-footer {
  color: var(--lab-text);
  background: #ffffff;
  border-top: 1px solid rgba(255, 122, 26, 0.22);
}

.design-caleta .site-nav {
  width: min(1120px, calc(100% - 2rem));
  margin: 1.25rem auto 0;
  color: var(--lab-text);
  background: rgba(217, 225, 211, 0.9);
  border: 1px solid rgba(241, 200, 91, 0.3);
  border-radius: 1.15rem 1.15rem 0.35rem 0.35rem;
  box-shadow:
    inset 0 -0.45rem 0 rgba(185, 111, 58, 0.3),
    0 1.4rem 3rem rgba(4, 10, 12, 0.3);
}

.design-caleta .nav-inner {
  min-height: 5rem;
}

.design-caleta .brand-mark p,
.design-caleta .footer-brand p,
.design-caleta .nav-links a,
.design-caleta .section-heading span,
.design-caleta .eyebrow {
  font-family: var(--lab-font-utility);
  font-style: normal;
  text-shadow: none;
}

.design-caleta .brand-mark p,
.design-caleta .footer-brand p {
  color: var(--lab-line);
  font-size: 0.9rem;
  letter-spacing: -0.02em;
}

.design-caleta .brand-mark span,
.design-caleta .footer-brand span {
  color: rgba(16, 32, 36, 0.72);
  font-family: var(--lab-font-utility);
  font-size: 0.76rem;
}

.design-caleta .nav-links a {
  color: var(--lab-line);
  font-size: 0.76rem;
  letter-spacing: 0.08em;
}

.design-caleta .hero-section {
  min-height: auto;
  padding: clamp(4.5rem, 8vw, 7rem) 0 clamp(5rem, 9vw, 8rem);
  overflow: visible;
}

.design-caleta .hero-section::before {
  inset: 1.5rem max(1rem, calc((100vw - 1120px) / 2)) 2rem auto;
  width: min(35rem, 43vw);
  height: auto;
  opacity: 0.42;
  background-image: var(--hero-image);
  background-position: center;
  background-size: cover;
  border: 1px solid rgba(241, 200, 91, 0.32);
  border-radius: 0.75rem 5rem 0.75rem 0.75rem;
  filter: saturate(0.72) contrast(1.1) brightness(0.7);
}

.design-caleta .hero-section::after {
  inset: auto 0 0;
  height: 7.5rem;
  background:
    linear-gradient(
      90deg,
      transparent 0 calc(50% - 10rem),
      rgba(241, 200, 91, 0.5) calc(50% - 10rem) calc(50% - 9.8rem),
      transparent calc(50% - 9.8rem)
    ),
    linear-gradient(
      90deg,
      transparent 0 calc(50% + 9.8rem),
      rgba(241, 200, 91, 0.5) calc(50% + 9.8rem) calc(50% + 10rem),
      transparent calc(50% + 10rem)
    ),
    linear-gradient(180deg, transparent 0%, rgba(6, 12, 14, 0.66) 100%);
}

.design-caleta .hero-row {
  align-items: stretch;
}

.design-caleta .hero-kicker {
  display: inline-flex;
  width: fit-content;
  padding: 0.45rem 0.7rem;
  color: #0f2024;
  font-family: var(--lab-font-utility);
  font-size: 0.78rem;
  font-style: normal;
  letter-spacing: 0.12em;
  line-height: 1;
  text-transform: uppercase;
  background: var(--lab-secondary);
  border-radius: 999px;
  text-shadow: none;
}

.design-caleta .hero-section h1 {
  max-width: 10ch;
  margin-top: 1rem;
  color: var(--lab-heading);
  font-size: clamp(4.2rem, 10vw, 9rem);
  font-style: normal;
  font-weight: 700;
  letter-spacing: -0.035em;
  line-height: 0.76;
  text-shadow: none;
  text-transform: uppercase;
}

.design-caleta .hero-summary {
  max-width: 33rem;
  color: var(--lab-muted);
  font-size: clamp(1rem, 1.7vw, 1.18rem);
}

.design-caleta .hero-visual {
  position: relative;
  display: grid;
  min-height: clamp(22rem, 38vw, 32rem);
  place-items: center;
  overflow: hidden;
  background:
    radial-gradient(circle at 50% 45%, rgba(241, 200, 91, 0.22), transparent 32%),
    linear-gradient(145deg, rgba(122, 168, 159, 0.22), rgba(11, 22, 25, 0.58));
  border: 1px solid rgba(241, 200, 91, 0.36);
  border-radius: 48% 52% 8% 8% / 42% 42% 8% 8%;
  box-shadow:
    inset 0 0 0 0.55rem rgba(15, 31, 35, 0.78),
    0 1.6rem 4rem rgba(4, 10, 12, 0.36);
}

.design-caleta .hero-visual::before {
  position: absolute;
  width: 116%;
  height: 9rem;
  content: '';
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(241, 200, 91, 0.2) 45%,
    rgba(241, 200, 91, 0.72) 50%,
    rgba(241, 200, 91, 0.2) 55%,
    transparent 100%
  );
  filter: blur(2px);
  transform: rotate(-17deg) translateY(-5rem);
  animation: caleta-scan 7s ease-in-out infinite;
}

.design-caleta .hero-visual::after {
  position: absolute;
  inset: 1.4rem;
  content: '';
  border: 1px dashed rgba(237, 242, 232, 0.34);
  border-radius: inherit;
}

.design-caleta .hero-visual img {
  position: relative;
  z-index: 1;
  width: min(64%, 20rem);
  filter: drop-shadow(0 1.2rem 1.4rem rgba(0, 0, 0, 0.42));
}

.design-caleta .services-section,
.design-caleta .about-section,
.design-caleta .team-section,
.design-caleta .contact-section {
  color: var(--lab-heading);
  background: transparent;
}

.design-caleta .section-heading {
  margin-right: 0;
  margin-left: 0;
  text-align: left;
}

.design-caleta .section-heading span,
.design-caleta .eyebrow {
  color: var(--lab-secondary);
  font-size: 0.74rem;
  letter-spacing: 0.18em;
}

.design-caleta .section-heading h2,
.design-caleta .contact-section h2 {
  max-width: 13ch;
  color: var(--lab-heading);
  font-size: clamp(3rem, 6vw, 5.7rem);
  font-style: normal;
  font-weight: 600;
  letter-spacing: -0.03em;
  line-height: 0.82;
  text-shadow: none;
  text-transform: uppercase;
}

.design-caleta .section-heading p,
.design-caleta .contact-section p,
.design-caleta .team-card p {
  color: var(--lab-muted);
}

.design-caleta .services-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.85rem;
}

.design-caleta .service-card,
.design-caleta .team-card,
.design-caleta .about-image-card {
  color: var(--lab-text);
  background:
    linear-gradient(90deg, rgba(185, 111, 58, 0.18) 0 0.45rem, transparent 0.45rem),
    var(--lab-surface);
  border: 1px solid rgba(241, 200, 91, 0.24);
  border-radius: 0.85rem;
  box-shadow: 0 1.1rem 2.4rem rgba(4, 10, 12, 0.22);
}

.design-caleta .service-card {
  min-height: 11rem;
  padding: 1.4rem;
  place-items: start;
  text-align: left;
}

.design-caleta .service-card:nth-child(4n + 1),
.design-caleta .service-card:nth-child(4n + 4) {
  transform: translateY(1.2rem);
}

.design-caleta .service-card .v-icon {
  color: var(--lab-primary);
  font-size: 2.35rem;
  filter: none;
}

.design-caleta .service-card h3,
.design-caleta .team-card h3 {
  color: var(--lab-text);
  font-size: clamp(1.55rem, 2.8vw, 2.15rem);
  font-style: normal;
  font-weight: 600;
  letter-spacing: -0.01em;
  line-height: 0.86;
  text-shadow: none;
  text-transform: uppercase;
}

.design-caleta .about-image-card {
  padding: 0.7rem;
  background:
    linear-gradient(135deg, rgba(241, 200, 91, 0.18), transparent 48%), rgba(217, 225, 211, 0.12);
  border-color: rgba(241, 200, 91, 0.32);
  border-radius: 5rem 0.85rem 0.85rem 0.85rem;
}

.design-caleta .about-image-card img {
  filter: saturate(0.75) contrast(1.04);
  border-radius: 4.4rem 0.45rem 0.45rem 0.45rem;
}

.design-caleta .team-card {
  text-align: left;
}

.design-caleta .team-avatar {
  margin: 0 0 1.25rem;
  color: #102024;
  font-family: var(--lab-font-utility);
  font-size: 0.95rem;
  font-style: normal;
  background: var(--lab-secondary);
  border: 0;
  border-radius: 0.75rem;
}

.design-caleta .primary-action,
.design-caleta .secondary-action {
  font-family: var(--lab-font-utility);
  font-size: 0.82rem;
  letter-spacing: 0.05em;
  border: 1px solid rgba(241, 200, 91, 0.38);
  border-radius: 999px;
  box-shadow: none;
}

.design-caleta .primary-action {
  color: #102024;
  background: var(--lab-secondary);
}

.design-caleta .secondary-action {
  color: var(--lab-heading);
  background: rgba(217, 225, 211, 0.08);
}

.design-caleta .map-frame {
  border: 1px solid rgba(241, 200, 91, 0.34);
  border-radius: 1rem 4rem 1rem 1rem;
  box-shadow: 0 1.2rem 3rem rgba(4, 10, 12, 0.28);
}

.design-caleta .site-footer {
  color: var(--lab-text);
  background: rgba(217, 225, 211, 0.92);
  border-top: 0;
}

.design-caleta .footer-links a {
  color: var(--lab-line);
  font-family: var(--lab-font-utility);
  font-size: 0.78rem;
  text-shadow: none;
}

@keyframes caleta-scan {
  0%,
  100% {
    transform: rotate(-17deg) translateY(-7rem);
  }

  46%,
  58% {
    transform: rotate(-17deg) translateY(7rem);
  }
}

@media (prefers-reduced-motion: reduce) {
  .design-caleta .hero-visual::before {
    animation: none;
  }
}

@media (max-width: 959px) {
  .nav-links {
    display: none;
  }

  .services-grid,
  .design-blueprint .services-grid,
  .team-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .design-blueprint .service-card:nth-child(4n + 1) {
    grid-row: auto;
    min-height: 10.5rem;
  }

  .design-blueprint .service-card:nth-child(3n),
  .design-blueprint .team-card:nth-child(2),
  .design-caleta .service-card:nth-child(4n + 1),
  .design-caleta .service-card:nth-child(4n + 4) {
    transform: none;
  }

  .design-caleta .hero-section::before {
    inset: 1rem 1rem auto;
    width: auto;
    height: 18rem;
  }

  .design-caleta .hero-section::after {
    opacity: 0.65;
  }

  .design-original-caleta-mesh .tool-background {
    display: none;
  }
}

@media (max-width: 599px) {
  .switcher-inner {
    align-items: flex-start;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    flex-direction: column;
  }

  .site-nav {
    border-radius: 0;
  }

  .design-caleta .site-nav {
    width: calc(100% - 1rem);
    margin-top: 0.5rem;
  }

  .design-caleta .hero-section {
    padding-top: 3.5rem;
  }

  .design-caleta .hero-section h1 {
    font-size: clamp(3.6rem, 19vw, 5rem);
  }

  .brand-mark img,
  .footer-brand img {
    width: 3rem;
    height: 3rem;
  }

  .services-grid,
  .design-blueprint .services-grid,
  .team-grid {
    grid-template-columns: 1fr;
  }

  .hero-actions,
  .contact-actions,
  .primary-action,
  .secondary-action {
    width: 100%;
  }

  .footer-inner,
  .footer-links {
    justify-content: center;
  }

  .footer-inner {
    flex-direction: column;
    text-align: center;
  }
}
</style>
