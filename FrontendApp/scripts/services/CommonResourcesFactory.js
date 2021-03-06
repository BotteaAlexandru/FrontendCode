'use strict';

hrApp.factory('CommonResourcesFactory', function() {
        var baseUrl = "http://localhost:9090/app/mvc/";
        return {
            findAllDepartmentsUrl: baseUrl + "departments/all",
            findAllEmployeesUrl: baseUrl + "employees/all",
            findAllJobsUrl: baseUrl + "jobs/all",
            findAllLocationsUrl: baseUrl + "locations/all",
            findOneDepartmentUrl: baseUrl + "departments/one",
            findOneEmployeeUrl: baseUrl + "employees/one",
            findOneJobUrl: baseUrl + "jobs/one",
            findOneLocationUrl: baseUrl + "locations/one",
            deleteDepartmentUrl: baseUrl + "departments",
            deleteEmployeeUrl: baseUrl + "employees",
            deleteJobUrl: baseUrl + "jobs/one",
            deleteLocationUrl: baseUrl + "locations",
            addDepartmentUrl: baseUrl + "departments",
            addEmployeeUrl: baseUrl + "employees",
            addJobUrl: baseUrl + "jobs/one",
            addLocationUrl: baseUrl + "locations",
            editDepartmentUrl: baseUrl + "departments",
            editEmployeeUrl: baseUrl + "employees",
            editJobUrl: baseUrl + "jobs/one",
            editLocationUrl: baseUrl + "locations"
        };
    }
);