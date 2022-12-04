import axios from "axios";

const EMPLOYE_MANAGEMENT_BASE_URL = "http://localhost:8049/api/v1/employee";

class EmployeeManagerService {
  viewEmployee(client) {
    return axios.post(EMPLOYE_MANAGEMENT_BASE_URL + "/viewEmployee", client);
  }
  checkEmployeeExist(client) {
    return axios.put(
      EMPLOYE_MANAGEMENT_BASE_URL + "/checkEmployeeExist" + client
    );
  }
  getAllActiveTitle(client_id) {
    return axios.post(
      EMPLOYE_MANAGEMENT_BASE_URL + "/getAllActiveTitle",
      client_id
    );
  }
  getAllActiveGender(client_id) {
    return axios.post(
      EMPLOYE_MANAGEMENT_BASE_URL + "/getAllActiveGender",
      client_id
    );
  }
  getAllActiveDepartment(client_id) {
    return axios.post(
      EMPLOYE_MANAGEMENT_BASE_URL + "/getAllActiveDepartment",
      client_id
    );
  }
  getAllActiveDesignation(client_id) {
    return axios.post(
      EMPLOYE_MANAGEMENT_BASE_URL + "/getAllActiveDesignation",
      client_id
    );
  }
  getAllActiveNationality(client_id) {
    return axios.post(
      EMPLOYE_MANAGEMENT_BASE_URL + "/getAllActiveNationality",
      client_id
    );
  }
  getAllActiveCountry(client_id) {
    return axios.post(
      EMPLOYE_MANAGEMENT_BASE_URL + "/getAllActiveCountry",
      client_id
    );
  }
  getAllActiveCity(client_id) {
    return axios.post(
      EMPLOYE_MANAGEMENT_BASE_URL + "/getAllActiveCity" + client_id
    );
  }
  deactivateEmployee(client) {
    return axios.post(
      EMPLOYE_MANAGEMENT_BASE_URL + "/deactivateEmployee",
      client
    );
  }
  saveOrEdittEmployee(employee) {
    return axios.post(EMPLOYE_MANAGEMENT_BASE_URL + "/saveEmployee" + employee);
  }
}

export default new EmployeeManagerService();
