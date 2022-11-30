import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue"
import Sains from "../views/Sains.vue"
import Social from "../views/Social.vue"
import Baca from "../views/Baca.vue"

const routes = [
  {
path : "/",
name : "Home",
component: Home,
  },
  {
    path : "/sains",
    name : "Sains",
    component: Sains,
  },{
    path : "/social",
    name : "Social",
    component: Social,
  },
  {
    path : '/baca/:id',
    props: true,
    name : 'Baca',
    component: Baca,
  
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;