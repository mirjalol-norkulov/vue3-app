import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import AboutPage from "./pages/AboutPage.vue";
import LoginPage from "./pages/LoginPage.vue";
import Dashboard from "./pages/Dashboard.vue";
import UsersList from "./pages/UsersList.vue";
import UsersListDetail from "./pages/UsersListDetail.vue";
import NotFoundPage from "./pages/NotFoundPage.vue";

const routes = [
  {
    name: 'home',
    path: '/',
    component: HomePage
  },
  {
    name: 'about',
    path: '/about',
    component: AboutPage
  },
  {
    name: 'login',
    path: '/login',
    component: LoginPage
  },
  {
    name: 'dashboard',
    path: '/dashboard',
    component: Dashboard
  },
  {
    name: 'users',
    path: '/dashboard/users',
    component: UsersList,
  },
  {
    name: 'users-details',
    path: '/dashboard/users/:id',
    component: UsersListDetail,
  },
  { path: '/:pathMatch(.*)*', name: '404', component: NotFoundPage },
];

export const router = createRouter({
  routes,
  history: createWebHistory()
});

