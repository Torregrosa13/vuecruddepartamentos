import { createRouter, createWebHistory } from "vue-router";
import DepartamentosComponent from "./components/DepartamentosComponent.vue";
import CreateDepartamentos from "./components/CreateDepartamentos.vue";
import DetailDepartamento from "./components/DetailDepartamento.vue";
import UpdateDepartamento from "./components/UpdateDepartamento.vue";
import DeleteDepartamento from "./components/DeleteDepartamento.vue";

const myRoutes = [
  {
    path: "/",
    component: DepartamentosComponent,
  },
  {
    path: "/create",
    component: CreateDepartamentos,
  },
  {
    path: "/details/:id/:nombre/:localidad",
    component: DetailDepartamento,
  },
  {
    path: "/update/:id",
    component: UpdateDepartamento,
  },
  {
    path: "/delete/:id",
    component: DeleteDepartamento,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: myRoutes,
});

export default router;
