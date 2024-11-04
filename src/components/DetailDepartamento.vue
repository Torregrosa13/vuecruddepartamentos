<template>
    <div>
        <h1>DetailDepartamento</h1>
        <ul class="list-group">
            <li class="list-group-item">Id: {{ $route.params.id }}</li>
        </ul>
        <ul class="list-group">
            <li class="list-group-item">Nombre: {{ $route.params.nombre }}</li>
        </ul>
        <ul class="list-group">
            <li class="list-group-item">Localidad: {{ $route.params.localidad }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "DetailDepartamento"
}
</script>

<style>

</style>