<!--Awesome example: https://alligator.io/vuejs/vue-google-maps
https://github.com/heavyy/vue2-google-maps
/-->
<template>
  <div class="Map">
    <gmap-map
      :center="center"
      :zoom="12"
      style="width:100%;  height: 100%;"
    >
      <gmap-marker
        v-for="(currentMarker, index) in vehicles"
        v-if="currentMarker.visible"
        :key="index"
        :position="currentMarker.position"
        :title="currentMarker.plate"
        @click="center=currentMarker.position"
      ></gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
  import {mapState} from 'vuex';

  export default {
    name: 'Map',
    computed: mapState([
      'vehicles'
    ]),
    data() {
      return {
        center: {lat: 45.508, lng: -73.587},
        places: [],
        currentPlace: null
      };
    },
    mounted() {
      this.geolocate();
    },
    methods: {
      geolocate() {
        navigator.geolocation.getCurrentPosition(position => {
          this.center = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
        });
      }
    }
  };
</script>

<style lang="scss">
  .Map {
    height: 100%;
    width: 70vw;
  }
</style>
