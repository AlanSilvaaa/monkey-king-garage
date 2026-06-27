<script setup lang="ts">
import footerLogo from '@/assets/images/monkey-king-garage-logo.png'

defineProps<{
  facebookUrl: string
  instagramUrl: string
  whatsappUrl: string
}>()
</script>

<template>
  <v-footer class="site-footer">
    <v-container>
      <div class="footer-content">
        <a class="footer-brand" href="#top" aria-label="Volver al inicio">
          <img :src="footerLogo" alt="Monkey King Garage" />
          <div>
            <p>Monkey King Garage</p>
            <span>Puerto Montt, Chile</span>
          </div>
        </a>

        <div class="footer-links" aria-label="Links de contacto">
          <a :href="whatsappUrl" target="_blank" rel="noopener noreferrer">
            <v-icon icon="mdi-whatsapp" size="22" />
            WhatsApp
          </a>
          <a :href="instagramUrl" target="_blank" rel="noopener noreferrer">
            <v-icon icon="mdi-instagram" size="22" />
            Instagram
          </a>
          <a :href="facebookUrl" target="_blank" rel="noopener noreferrer">
            <v-icon icon="mdi-facebook" size="22" />
            Facebook
          </a>
          <a href="#contacto">
            <v-icon icon="mdi-map-marker" size="22" />
            Contacto
          </a>
        </div>
      </div>
    </v-container>
  </v-footer>
</template>

<style scoped>
.site-footer {
  padding: 1.5rem 0;
  color: #fff0c7;
  background:
    linear-gradient(90deg, rgba(255, 161, 25, 0.14), transparent 45%, rgba(255, 161, 25, 0.1)),
    #050505 !important;
  border-top: 2px solid rgba(255, 184, 28, 0.38);
}

.footer-content,
.footer-brand,
.footer-links,
.footer-links a {
  display: flex;
  align-items: center;
}

.footer-content {
  justify-content: space-between;
  gap: 1.5rem;
}

.footer-brand {
  gap: 0.85rem;
  color: inherit;
  text-decoration: none;
}

.footer-brand img {
  width: 4rem;
  height: 4rem;
  object-fit: contain;
  filter: drop-shadow(0 0 0.65rem rgba(255, 176, 0, 0.32));
}

.footer-brand p {
  color: #ffcf27;
  font-family: Impact, Haettenschweiler, 'Arial Black', sans-serif;
  font-size: 1.15rem;
  font-style: italic;
  letter-spacing: 0.02em;
  line-height: 1;
  margin: 0;
  text-shadow: 2px 2px 0 #000000;
}

.footer-brand span {
  color: rgba(255, 238, 197, 0.76);
  font-size: 0.92rem;
}

.footer-links {
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 0.75rem;
}

.footer-links a {
  gap: 0.4rem;
  color: #ffd24a;
  font-size: 0.92rem;
  font-weight: 900;
  letter-spacing: 0.03em;
  text-decoration: none;
  text-transform: uppercase;
  text-shadow: 1px 1px 0 #000000;
}

@media (max-width: 959px) {
  .footer-content,
  .footer-links {
    justify-content: center;
  }

  .footer-content {
    flex-direction: column;
    text-align: center;
  }
}
</style>
