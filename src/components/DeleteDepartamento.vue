<template>
  <div>
    <h1>Delete</h1>
  </div>
</template>

<script>
import ServiceDepartamentos from '@/services/ServiceDepartamentos';
const service = new ServiceDepartamentos() 

export default {
    name: "DeleteDepartamento",
    mounted(){
        let id = this.$route.params.id
        service.deleteDep(id).then(result=>{
            console.log("eliminado" + result)
            this.$router.push("/")
        })
    }
}
</script>

<style>

</style>