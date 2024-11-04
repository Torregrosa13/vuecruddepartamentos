import Global from "@/Global";
import axios from "axios";

export default class ServiceDepartamentos {
  getDepartamentos() {
    return new Promise(function (resolve) {
      let departamentos = [];
      let request = "api/departamentos";
      let url = Global.urlApiDepartamentos + request;
      axios.get(url).then((response) => {
        departamentos = response.data;
        resolve(departamentos);
      });
    });
  }

  findDep(id) {
    return new Promise(function (resolve) {
      let departamento = {};
      let request = "api/departamentos/" + id;
      let url = Global.urlApiDepartamentos + request;
      axios.get(url).then((response) => {
        departamento = response.data;
        resolve(departamento);
      });
    });
  }

  deleteDep(id) {
    return new Promise(function (resolve) {
      let request = "api/departamentos/" + id;
      let url = Global.urlApiDepartamentos + request;
      axios.delete(url).then((response) => {
        console.log("borrado");
        resolve(response);
      });
    });
  }

  createDep(departamento) {
    return new Promise(function (resolve) {
      let request = "api/departamentos";
      let url = Global.urlApiDepartamentos + request;
      axios.post(url, departamento).then((response) => {
        resolve(response);
      });
    });
  }

  updateDep(departamento) {
    return new Promise(function (resolve) {
      let request = "api/departamentos";
      let url = Global.urlApiDepartamentos + request;
      axios.put(url, departamento).then((response) => {
        resolve(response);
      });
    });
  }
}
