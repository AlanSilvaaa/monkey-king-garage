<script setup lang="ts">
import AboutSection from '@/components/AboutSection.vue'
import AppNavbar from '@/components/AppNavbar.vue'
import ContactSection from '@/components/ContactSection.vue'
import HeroSection from '@/components/HeroSection.vue'
import ServicesSection from '@/components/ServicesSection.vue'
import SiteFooter from '@/components/SiteFooter.vue'
import TeamSection from '@/components/TeamSection.vue'
import WhatsAppFloat from '@/components/WhatsAppFloat.vue'

const whatsappUrl = `https://api.whatsapp.com/send?phone=56991598696&text=${encodeURIComponent(
  'Hola! Vengo de la página web. Quiero hacerles una consulta.',
)}`
const instagramUrl = 'https://www.instagram.com/monkeykinggarage/'
const facebookUrl = 'https://www.facebook.com/p/Monkeykinggarage-100083604510769/'
</script>

<template>
  <AppNavbar />

  <v-main class="landing-page">
    <HeroSection />
    <ServicesSection />
    <AboutSection />
    <TeamSection />
    <ContactSection :whatsapp-url="whatsappUrl" />
  </v-main>

  <SiteFooter
    :facebook-url="facebookUrl"
    :instagram-url="instagramUrl"
    :whatsapp-url="whatsappUrl"
  />
  <WhatsAppFloat :whatsapp-url="whatsappUrl" />
</template>

<style scoped>
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
</style>
