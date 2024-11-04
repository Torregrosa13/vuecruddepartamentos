<template>
    <div class="container mt-5">
      <div class="card">
        <div class="card-header bg-primary text-white">
          <h1 class="h3 mb-0">Crear Departamento</h1>
        </div>
        <div class="card-body">
          <form @submit.prevent="createDep()">
            <div class="mb-3">
              <label for="id" class="form-label">ID</label>
              <input type="number" id="id" class="form-control" v-model="departamento.idDepartamento" placeholder="Ingrese el nombre del departamento" required>
            </div>
            <div class="mb-3">
              <label for="nombre" class="form-label">Nombre</label>
              <input type="text" id="nombre" class="form-control" v-model="departamento.nombre" placeholder="Ingrese el nombre del departamento" required>
            </div>
            <div class="mb-3">
              <label for="localidad" class="form-label">Localidad</label>
              <input type="text" id="localidad" class="form-control" v-model="departamento.localidad" placeholder="Ingrese la localidad" required>
            </div>
            <button type="submit" class="btn btn-primary w-100">Crear Departamento</button>
          </form>
        </div>
      </div>
    </div>
  </template>

<script>
import ServiceDepartamentos from '@/services/ServiceDepartamentos';
const service = new ServiceDepartamentos()

export default {
    name: "CreateDepartamentos",
    data(){
        return{
            mensaje: "",
            departamento: {
                idDepartamento: 0,
                nombre:"",
                localidad: ""
            }
        }
    },
    methods:{
        createDep(){
            service.createDep(this.departamento).then(result=>{
                this.mensaje= "Insertado correctamente " + result
                this.$router.push("/")
            })
        }
    }
}
</script>

<style>

</style>