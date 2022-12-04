import { useState, useEffect } from "react";
import EmployeeManagerService from "../Service/EmployeeManagerService";

export const useFetch = ({ client, client_id }) => {
  const [employees, setEmployees] = useState({});
  const [activeTitles, setActiveTitles] = useState([]);
  const [activeGender, setAllActiveGender] = useState([]);
  const [activeDepartment, setAllActiveDepartment] = useState([]);
  const [activeDesignation, setAllActiveDesignations] = useState([]);
  const [activeNationality, setAllActiveNationality] = useState([]);
  const [activeCountry, setAllActiveCountry] = useState([]);
  const [activeCity, setAllActiveCity] = useState([]);
  useEffect(() => {
    EmployeeManagerService.viewEmployee(client).then((resp) => {
      setEmployees(resp.data);
    });
  }, []);

  useEffect(() => {
    EmployeeManagerService.getAllActiveTitle(client_id).then((resp) => {
      setActiveTitles(resp.data);
    });
  }, []);
  useEffect(() => {
    EmployeeManagerService.getAllActiveGender(client_id).then((resp) => {
      setAllActiveGender(resp.data);
    });
  }, []);
  useEffect(() => {
    EmployeeManagerService.getAllActiveDepartment(client_id).then((resp) => {
      setAllActiveDepartment(resp.data);
    });
  }, []);
  useEffect(() => {
    EmployeeManagerService.getAllActiveDesignation(client_id).then((resp) => {
      setAllActiveDesignations(resp.data);
    });
  }, []);
  useEffect(() => {
    EmployeeManagerService.getAllActiveNationality(client_id).then((resp) => {
      setAllActiveNationality(resp.data);
    });
  }, []);
  useEffect(() => {
    EmployeeManagerService.getAllActiveCountry(client_id).then((resp) => {
      setAllActiveCountry(resp.data);
    });
  }, []);
  useEffect(() => {
    EmployeeManagerService.getAllActiveCity
      (client_id).then((resp) => {
      setAllActiveCity(resp.data);
    });
  }, []);
  return {
    employees,
    activeTitles,
    activeCity,
    activeCountry,
    activeDepartment,
    activeDesignation,
    activeNationality,
    activeGender,
  };
};


