<template>
  <div>
    <h1>DepartamentosComponent</h1>
    <img src="./../assets/images/loading.png" v-if="status == false">
    <table class="table table-dark" v-else>
      <thead>
        <tr>
          <th>ID Departamento</th>
          <th>Nombre</th>
          <th>Localidad</th>
          <th>Detalle</th>
          <th>Editar</th>
          <th>Eliminar</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="dep in departamentos" :key="dep">
          <td>{{ dep.idDepartamento }}</td>
          <td>{{ dep.nombre }}</td>
          <td>{{ dep.localidad }}</td>
          <td><router-link class="btn btn-warning" :to="'/details/' + dep.idDepartamento + '/' + dep.nombre + '/' + dep.localidad">Detalle</router-link></td>
          <td><router-link class="btn btn-info" :to="'/update/' + dep.idDepartamento">Editar</router-link></td>
          <td><router-link :to="'/delete/' + dep.idDepartamento" class="btn btn-danger">Eliminar</router-link></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ServiceDepartamentos from '@/services/ServiceDepartamentos';
let service = new ServiceDepartamentos()

export default {
  name: "DepartamentosComponent",
  data(){
    return{
      departamentos: [],
      status: false
    }
  },
  mounted(){
      service.getDepartamentos().then(result=>{
        this.departamentos = result
        this.status = true
      })
    
  },
  methods:{
    deleteDep(){

    }
  }
}
</script>

<style>

</style>