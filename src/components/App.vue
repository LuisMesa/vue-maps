<template>
  <md-app md-mode="reveal">
    <md-app-toolbar class="md-primary">
      <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
        <md-icon>menu</md-icon>
      </md-button>
      <span class="md-title">Vue Maps</span>
    </md-app-toolbar>

    <md-app-drawer :md-active.sync="menuVisible">
      <md-toolbar class="md-transparent" md-elevation="0">Navigation</md-toolbar>

      <md-list>
        <md-list-item>
          <md-icon>move_to_inbox</md-icon>
          <span class="md-list-item-text">Inbox</span>
        </md-list-item>

        <md-list-item>
          <md-icon>send</md-icon>
          <span class="md-list-item-text">Sent Mail</span>
        </md-list-item>

        <md-list-item>
          <md-icon>delete</md-icon>
          <span class="md-list-item-text">Trash</span>
        </md-list-item>

        <md-list-item>
          <md-icon>error</md-icon>
          <span class="md-list-item-text">Spam</span>
        </md-list-item>
      </md-list>
    </md-app-drawer>

    <md-app-content>
      <Map />
      <VehicleList />
    </md-app-content>
  </md-app>
</template>

<script>
  import Map from './Map/Map.vue';
  import VehicleList from './VehicleList/VehicleList.vue';

  export default {
    name: 'App',
    components: {
      Map,
      VehicleList
    },
    data: () => ({
      menuVisible: false,
    }),
    methods: {
    },
    beforeMount: function () {
      setTimeout(()=>this.$store.commit('addVehicle', 'ABC111',),2000);
      setTimeout(()=>this.$store.commit('addVehicle', 'ABC222',),2000);
    }
  }
</script>

<style lang="scss" scoped>
  body {
    margin: 0;
    padding: 0;
  }

  .md-app {
    height: 100vh;
  }

  .md-content {
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
  }

  // Demo purposes only
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }
</style>
