<template>
    <div class="container mt-5">
      <div class="card">
        <div class="card-header bg-warning text-dark">
          <h1 class="h3 mb-0">Actualizar Departamento</h1>
        </div>
        <div class="card-body">
          <form v-if="departamento" @submit.prevent="updateDep">
            <div class="mb-3">
              <label for="idDepartamento" class="form-label">ID Departamento</label>
              <input type="text" id="idDepartamento" class="form-control" v-model="departamento.idDepartamento" disabled>
            </div>
            <div class="mb-3">
              <label for="nombre" class="form-label">Nombre</label>
              <input type="text" id="nombre" class="form-control" v-model="departamento.nombre" placeholder="Ingrese el nombre del departamento" required>
            </div>
            <div class="mb-3">
              <label for="localidad" class="form-label">Localidad</label>
              <input type="text" id="localidad" class="form-control" v-model="departamento.localidad" placeholder="Ingrese la localidad" required>
            </div>
            <button type="submit" class="btn btn-warning w-100">Editar</button>
          </form>
        </div>
      </div>
    </div>
  </template>

<script>
import ServiceDepartamentos from '@/services/ServiceDepartamentos';
const service = new ServiceDepartamentos
export default {
    name: "UpdateDepartamento",
    data(){
        return{
            departamento: null
        }
    },
    mounted(){
        let id = this.$route.params.id
        service.findDep(id).then(result=>{
            this.departamento = result
        })
    },
    methods: {
        updateDep(){
            service.updateDep(this.departamento).then(result=>{
                console.log(result)
                this.$router.push("/")
            })
        }
    }
}
</script>

<style>

</style>