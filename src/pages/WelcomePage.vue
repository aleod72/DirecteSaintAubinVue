<template>
  <ion-content :fullscreen="true">
    <div class="allscreen">
      <div class="center">
        <ion-img
          src="https://media.discordapp.net/attachments/878387055409901639/1092522987682545715/Copie_de_Directe_2_1.png"
          alt="Logo Directe St-Aubin"
          @ion-error="setOpened(true)"
        ></ion-img>
        <h5 class="description">Bienvenue 👋, ceci n'est qu'un affichage ^^</h5>
      </div>
      <ion-nav-link router-direction="forward" :component="LoginPage.vue">
        <ion-button class="enabled"> Commencer maintenant </ion-button>
      </ion-nav-link>
    </div>
  </ion-content>
</template>

<script lang="ts" setup>
import {
  IonButton,
  IonImg,
  IonContent,
  IonModal,
  IonInput,
  onIonViewDidEnter,
  IonNavLink,
} from "@ionic/vue";
import { ref, defineComponent, computed } from "vue";
import LoginPage from "./LoginPage.vue";
const loginPage = ref(LoginPage);

const toastOpened = ref(false);

function setOpened(value: boolean) {
  toastOpened.value = value;
}
</script>

<style scoped>
@import url("https://fonts.cdnfonts.com/css/codec-pro");
/* Définir des variables CSS globales pour les couleurs et les polices */
:root {
  --font-family-sans-serif: "Roboto", "Helvetica Neue", sans-serif;
}
.allscreen {
  position: fixed;
  z-index: 9999;
  height: 100%;
  width: 100%;
  color: white;
  background: linear-gradient(
    0deg,
    rgba(91, 35, 125, 1) 1%,
    rgba(205, 128, 252, 1) 100%
  );
  font-family: "Codec Pro";
  padding: 0 20px;

  display: flex;
  align-items: center;
  flex-direction: column;
}

.center {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.allscreen ion-img {
  height: 7.1em;
  margin-bottom: -10px;
}

.allscreen ion-button {
  --background: #f1e2fa;
  --border-radius: 8px;
  --color: #6c2994;
  height: calc(1.9em + 20px);
  font-family: "Codec Pro";
  font-weight: 900;
  width: calc(100%);
  max-width: 900px;
  border: none;
  font-size: 1em;
  margin-bottom: 5em;
  cursor: pointer;
}

ion-modal {
  --border-radius: 15px;
}

ion-input {
  --border-radius: 10px;
}

.description {
  color: #eee0f7;
  text-align: center;
  padding: 0 30px;
}

.disabled {
  background-color: #7678a0;
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
