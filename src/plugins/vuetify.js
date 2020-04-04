import "@fortawesome/fontawesome-free/css/all.css"; // Ensure you are using css-loader
import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify, {
  icons: {
    iconfont: "mdi" // default - only for display purposes
  },
  theme: {
    primary: "#9652ff",
    success: "#3cd1c2",
    info: "#ffaa2c",
    error: "#f83e70"
  }
});

export default new Vuetify({});
