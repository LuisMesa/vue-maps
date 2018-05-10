<template>
  <div class="VehicleList md-elevation-5" >
    <md-field>
      <label>Vehicle Plate</label>
      <md-input v-model="plate" @keyup="handleEnter"></md-input>
      <span class="md-helper-text">New Vehicle</span>
      <md-icon>save</md-icon>
    </md-field>
    <md-list>
      <md-list-item v-for="vehicle in vehicles">
        <md-avatar>
          <img :src="vehicle.avatar" alt="People">
        </md-avatar>
        <span class="md-list-item-text">{{vehicle.plate}}</span>
        <md-switch :value="!vehicle.visible" @change="handleSwitch(vehicle.plate)"/>
      </md-list-item>
    </md-list>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  export default {
    name: 'VehicleList',
    data: () => ({
      plate: ''
    }),
    computed: mapState([
      'vehicles'
    ]),
    methods: {
      handleEnter(event) {
        if (event.key==='Enter') {
          this.$store.commit('addVehicle', this.plate);
          this.plate = '';
        }
      },
      handleSwitch(plate) {
        this.$store.commit('setVehicleVisibility', plate);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .VehicleList {
    width: 30vw;
    .md-list {
      width: 100%;
    }
    .md-field {
      margin: 10px 15px 20px 15px;
      width: calc(100% - 30px);
    }
  }

</style>
