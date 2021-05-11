<template>
  <q-layout view="hHh Lpr fFf" class="bg-primary"> <!-- Be sure to play with the Layout demo on docs -->

    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  name: 'LayoutControle',

  data () {
    return {
      leftDrawer: true
    }
  }
}
</script>
