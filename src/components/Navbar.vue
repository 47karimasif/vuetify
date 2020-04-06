<template>
  <nav>
    <v-app-bar app flat relative>
      <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey-text">
        <span class="font-weight-light">Todo</span>
        <span>47</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-menu offset-y :elevation="0">
        <template v-slot:activator="{ on }">
          <v-btn text v-on="on" class="grey--text">
            <v-icon left>fas fa-chevron-down</v-icon>
            <span>Menu</span>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(link, index) in links" :key="index" router :to="link.route">
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-btn text class="grey--text mr-5">
        <span>Sign-Out</span>
        <v-icon right>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-app-bar>

    <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>

    <v-navigation-drawer v-model="drawer" app class="primary">
      <v-list>
        <v-list-item class="justify-center mt-5">
          <v-avatar size="100">
            <img src="/avatar-1.png" alt="avatar" />
          </v-avatar>
        </v-list-item>
        <v-list-item class="justify-center mt-2">
          <p class="white--text subheading">Avatar Ninja</p>
        </v-list-item>
      </v-list>
      <v-list>
        <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-item-icon>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="white--text">
              {{
              link.text
              }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-btn id="toggler" right fab fixed text class="grey lighten--4">
      <v-switch v-model="$vuetify.theme.dark" class="d-flex align-center"></v-switch>
    </v-btn>
    <v-btn
      fab
      fixed
      bottom
      right
      color="red"
      v-show="fab"
      v-scroll="onScroll"
      @click="toTop($vuetify)"
    >
      <v-icon>mdi-arrow-up</v-icon>
    </v-btn>
  </nav>
</template>

<script>
import { ref } from "@vue/composition-api";
export default {
  name: "Navbar",
  component: {},
  setup() {
    let drawer = true;
    // const drawerUpdate = () => {
    //   drawer.value = !drawer.value;
    // };
    const links = [
      { icon: "mdi-view-dashboard", text: "Dashboard", route: "/" },
      { icon: "fas fa-folder", text: "My Projects", route: "/projects" },
      { icon: "fas fa-users", text: "Team", route: "/team" },
      { icon: "fas fa-plus", text: "practice", route: "/practice" }
    ];
    const fab = ref(false);

    const onScroll = e => {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      fab.value = top > 20;
    };
    const toTop = $vuetify => {
      $vuetify.goTo(0);
    };
    return {
      drawer,
      links,
      onScroll,
      toTop,
      fab
    };
  }
};
</script>

<style >
.theme--light.v-app-bar.v-toolbar.v-sheet {
  background-color: white;
}
.v-messages {
  display: none;
}
.x {
  background-color: teal;
  padding: 50px;
}
#toggler {
  top: 80px;
  z-index: 2;
}
.v-input--selection-controls {
  margin-top: 5px;
}
</style>