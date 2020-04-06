<template>
  <div class="home">
    <v-row class="justify-center">
      <h1 class="text-center subheading grey--text d-inline-block">This is Homepage</h1>
    </v-row>
    <v-container class="my-5" fluid>
      <v-row class="mb-3">
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn small text color="grey" @click="sortBy('title')" v-on="on">
              <v-icon left>fas fa-folder</v-icon>
              <span class="caption text-lowercase">By Project Name</span>
            </v-btn>
          </template>
          <span>Sort Projects by project name</span>
        </v-tooltip>
        <v-btn small text color="grey" @click="sortBy('person')">
          <v-icon left>fas fa-users</v-icon>
          <span class="caption text-lowercase">Person</span>
        </v-btn>
      </v-row>
      <div v-for="project in projects" :key="project.title" class="my-3">
        <v-row :class="`pa-3 project ${project.status}`">
          <v-col cols="12" md="6">
            <!-- <v-card flat outlined tile> -->
            <div class="caption grey--text">Project title</div>
            <div>{{ project.title }}</div>
            <!-- </v-card> -->
          </v-col>
          <v-col cols="6" sm="4" md="2">
            <!-- <v-card outlined flat tile> -->
            <div class="caption grey--text">Person</div>
            <div>{{ project.person }}</div>
            <!-- </v-card> -->
          </v-col>
          <v-col cols="6" sm="4" md="2">
            <!-- <v-card outlined flat tile> -->
            <div class="caption grey--text">Due by</div>
            <div>{{ project.due }}</div>
            <!-- </v-card> -->
          </v-col>

          <v-col cols="2" sm="4" md="2">
            <!-- <v-card outlined flat tile> -->
            <div align="right">
              <v-chip>{{ project.status }}</v-chip>
            </div>
            <!-- </v-card> -->
          </v-col>
        </v-row>
        <v-divider></v-divider>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {},
  setup() {
    const projects = [
      {
        title: "Design a new website",
        person: "zoo",
        due: "1st Jan 2019",
        status: "ongoing",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"
      },
      {
        title: "Code up the homepage",
        person: "Chun Li",
        due: "10th Jan 2019",
        status: "complete",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"
      },
      {
        title: "Design video thumbnails",
        person: "Ryu",
        due: "20th Dec 2018",
        status: "complete",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"
      },
      {
        title: "Create a community forum",
        person: "Gouken",
        due: "20th Oct 2018",
        status: "overdue",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"
      }
    ];

    const sortBy = args => {
      projects.sort((a, b) => (a[args] < b[args] ? -1 : 1));
    };

    return {
      projects,
      sortBy
    };
  }
};
</script>

<style scoped>
.project.complete {
  border-left: 4px solid #3cd1c2;
}
.project.ongoing {
  border-left: 4px solid orange;
}
.project.overdue {
  border-left: 4px solid tomato;
}
</style>
