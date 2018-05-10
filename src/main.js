import Vue from 'vue'
import * as VueGoogleMaps from "vue2-google-maps";
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';
import Vuex from 'vuex'
import App from './components/App.vue';

Vue.use(Vuex);
Vue.use(VueMaterial);

const store = new Vuex.Store({
  state: {
    vehicles : []
  },
  mutations: {
    addVehicle(state, newPlate) {
      state.vehicles.push({
        plate: newPlate,
        avatar: 'https://placeimg.com/40/40/people/'+ Math.floor((Math.random() * 4) + 1),
        visible: true,
        position: {
          lat: (Math.random() * 0.05) + 4.7,
          lng: - ((Math.random() * 0.05) + 73.95)
        }
      })
    },
    setVehicleVisibility(state, plate) {
      const target = state.vehicles.filter( v => v.plate === plate)[0];
      if(target)
        target.visible = !target.visible;
    }
  }
});

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyCFAC8Qt6Ezd9AJh81iCUlkPkaPsTq7AaQ",
    libraries: "places"
  }
});

new Vue({
  el: '#app',
  store,
  render: h => h(App)
});
