<template>
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
        <a href="#nosotros">Nosotros</a>
        <a href="#equipo">Equipo</a>
        <a href="#contacto">Contacto</a>
      </div>
    </v-container>
  </v-app-bar>
</template>

<style scoped>
.nav-bar {
  background: rgba(7, 6, 4, 0.78) !important;
  backdrop-filter: blur(18px);
  border-bottom: 2px solid rgba(255, 184, 28, 0.32);
  box-shadow: 0 0.6rem 2.5rem rgba(0, 0, 0, 0.45);
}

.brand-mark,
.nav-links {
  display: flex;
  align-items: center;
}

.brand-mark {
  gap: 0.85rem;
}

.brand-emblem {
  color: #120900;
  background: linear-gradient(145deg, #ffe15a 0%, #ffb000 45%, #ff6b1a 100%);
  border: 3px solid #050505;
  box-shadow:
    0 0 0 2px #ffbf1f,
    0 0.65rem 1.5rem rgba(255, 118, 24, 0.38);
}

.brand-mark span {
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

@media (max-width: 599px) {
  .brand-name {
    font-size: 0.95rem;
  }
}
</style>
