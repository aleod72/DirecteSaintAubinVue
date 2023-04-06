<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { StatusBar } from '@capacitor/status-bar';
import { NavigationBar } from '@hugotomazi/capacitor-navigation-bar';

StatusBar.setBackgroundColor({ color: '#00000000' });
StatusBar.setOverlaysWebView({ overlay: true });
NavigationBar.setTransparency({ isTransparent: true });

export default {
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet
  }
}
</script>
