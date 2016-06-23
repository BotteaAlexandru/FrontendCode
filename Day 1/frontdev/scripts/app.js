/**
 * Created by user on 6/23/2016.
 */
var employeesList = [
    {
        firstName: 'John',
        lastName: 'King',
        phone: '1290841',
        salary: 4500
    },
    {
        firstName: 'Steven',
        lastName: 'Gerard',
        phone: '1290841',
        salary: 4500
    },
    {
        firstName: 'Diana',
        lastName: 'Ross',
        phone: '1290841',
        salary: 4500
    },
    {
        firstName: 'Mike',
        lastName: 'Bob',
        phone: '1290841',
        salary: 4500
    },
    {
        firstName: 'Emily',
        lastName: 'Hudson',
        phone: '1290841',
        salary: 4500
    }
];

function showList() {
    var myTable = '<table class="table table-bordered"><tr><th>First Name</th><th>Last Name</th><th>Phone</th><th>Salary</th></tr>';
    for (var i in employeesList) {
        myTable += '<tr><td>' + employeesList[i].firstName + '</td><td>' +
            employeesList[i].lastName + '</td><td>' +
            employeesList[i].phone + '</td><td>' +
            employeesList[i].salary +  '</td><td>' +
            '<button class="btn btn-default" onclick="vizualizare(' + i +')">Vizualizare</button>' + '</td><td>' +
            '<button class="btn btn-default" onclick="stergere(' + i +')">Stergere</button>' +'</td></tr>';
    }
        myTable += '</table>';
        var container = document.getElementById('listcontainer');
        container.innerHTML = myTable;

}
var Employee = function(firstName, lastName, phone, salary) {
    this.firstName = firstName;
    this.lastName = firstName;
    this.phone = phone;
    this.salary = salary;
}

function addEmployee() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var phone = document.getElementById("phone").value;
    var salary = parseInt(document.getElementById("salary").value);
    employeesList.push(new Employee(firstName, lastName, phone, salary));

    showList();
    showSalary();
}

function showSalary(){
    var total = 0;
    for(var i in employeesList) {
        total = total + employeesList[i].salary;
    }
    document.getElementById('salarytotal').value = total;
}

function deleteEmployee() {
    employeesList.pop();
    showList();
    showSalary();
}

function vizualizare(i) {
    alert("First Name: " + employeesList[i].firstName + "\n" +
        "Last Name: " + employeesList[i].lastName + "\n" +
        "Phone: " + employeesList[i].phone + "\n" +
        "Salary: " + employeesList[i].salary);
}

function stergere(i) {
    employeesList.splice(i,1);
    showList();
    showSalary();
}




















