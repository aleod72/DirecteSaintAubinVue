 <template>
  <ion-content :fullscreen="true">
    <div class="allscreen">
      <ion-img
        src="https://cdn.discordapp.com/attachments/878387055409901639/1092391402022907914/dsa_complete.png"
        alt="Logo Directe St-Aubin"
        @ion-error="setOpened(true)"
      ></ion-img>
      <h1>Bienvenue 👋</h1>
      <form method="dialog">
        <label for="username">Nom d'utilisateur</label>
        <input type="text" v-model="username" name="username" />
        <label for="password">Mot de passe</label>
        <input type="password" v-model="password" name="password" />
        <ion-button @click.prevent="login" class="enabled"
          >Se connecter</ion-button
        >
      </form>
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
} from "@ionic/vue";

import { ref } from "vue";

const username = ref("");
const password = ref("");
const toastOpened = ref(false);

function login() {
  username.value = "";
  password.value = "";
}

function setOpened(value: boolean) {
  toastOpened.value = value;
}
</script>

<style scoped>
@import url("https://fonts.cdnfonts.com/css/codec-pro");
/* Définir des variables CSS globales pour les couleurs et les polices */
:root {
  --ion-color-primary: #7277f1;
  --ion-color-secondary: #3dc2ff;
  --ion-color-tertiary: #5260ff;
  --ion-color-success: #2dd36f;
  --ion-color-warning: #ffc409;
  --ion-color-danger: #eb445a;
  --ion-color-dark: #2c2732;
  --ion-color-medium: #92949c;
  --ion-color-light: #f4f5f8;
  --font-family-sans-serif: "Roboto", "Helvetica Neue", sans-serif;
}
.allscreen {
  background-color: #2c2732;
  position: fixed;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  color: white;
  font-family: "Codec Pro";
  padding: 20px
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.allscreen ion-img {
  height: 30vh;
  margin-top: 10px;
  margin-bottom: 2em;
}

input {
  border-radius: 5px;
  width: calc(80% - 10px);
  margin: 10px 0;
  padding: 10px;
  border: none;
  font-size: 1.2em;
  color: #000;
}

label {
  margin-top: 0.7em;
  line-height: 50%;
  width: calc(80% - 10px);
  font-size: 1.1em;
}

.allscreen ion-button {
  --background: #7277f1;
  --padding: 10px 10px;
  --border-radius: 5px;
  height: calc(1.2em + 20px);
  font-family: "Codec Pro";
  font-weight: bolder;
  width: calc(80% - 10px);
  margin: 10px 0;
  border: none;
  font-size: 1.2em;
  margin-top: 1.2em;
  cursor: pointer;
}

.disabled {
  background-color: #7678a0;
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
