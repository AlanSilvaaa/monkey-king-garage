<script setup lang="ts">
defineProps<{
  whatsappUrl: string
}>()
</script>

<template>
  <section id="contacto" class="content-section contact-section">
    <v-container>
      <v-row align="center" class="contact-content">
        <v-col cols="12" md="7">
          <span class="eyebrow">Contacto</span>
          <h2>Agenda una revision o pide una cotizacion.</h2>
          <p>
            Encuentranos en Monkey King Garage, Puerto Montt. Lunes a viernes de 09:00 a 18:30 hrs.
          </p>
        </v-col>

        <v-col cols="12" md="5">
          <div class="contact-actions">
            <v-btn
              block
              class="king-button"
              :href="whatsappUrl"
              prepend-icon="mdi-whatsapp"
              rel="noopener noreferrer"
              rounded="lg"
              size="large"
              target="_blank"
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
    </v-container>
  </section>
</template>

<style scoped>
.content-section {
  position: relative;
  z-index: 1;
  padding: clamp(4rem, 8vw, 7rem) 0;
}

.contact-section {
  padding-top: 0;
  background:
    radial-gradient(circle at 12% 0%, rgba(255, 178, 0, 0.18), transparent 22rem),
    linear-gradient(180deg, #120f0b 0%, #080706 100%);
  color: #ffffff;
}

.contact-content {
  position: relative;
  z-index: 1;
}

.eyebrow {
  color: #ff9b19;
  font-size: 0.78rem;
  font-weight: 950;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  text-shadow: 1px 1px 0 #000000;
}

.contact-content h2 {
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

.contact-content p {
  position: relative;
  max-width: 42rem;
  margin-top: 1.25rem;
  color: rgba(255, 238, 197, 0.76);
  font-size: 1rem;
  line-height: 1.7;
}

.contact-actions {
  display: grid;
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
</style>
