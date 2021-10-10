/** @format */

import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;
// importing bootstap
import "bootstrap/dist/css/bootstrap.css";

new Vue({
	render: (h) => h(App),
}).$mount("#app");
