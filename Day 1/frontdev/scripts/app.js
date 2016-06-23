/**
 * Created by Alex on 6/23/2016.
 */
/**
 * Created by Alex on 6/23/2016.
 */
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
var numberOfEmployees = 0;
var unique = 0;
var avg = 0;
function avgSal(){
    var temp = 0;
    for(var i = 0; i < employeesList.length; i++){
        temp += employeesList[i].salary;
    }
    temp /= employeesList.length;

    avg = temp;
}
function showList() {
    numberOfEmployees = 0;

    var myTable = '<table class="table table-bordered"><tr><th>First Name</th><th>Last Name</th><th>Phone</th><th>Salary</th></tr>';
    for (var i in employeesList) {
        myTable += '<tr><td>' + employeesList[i].firstName + '</td><td>' +
            employeesList[i].lastName + '</td><td>' +
            employeesList[i].phone + '</td><td>' +
            employeesList[i].salary + '</td><td>' +
            '<button class="btn btn-default" onclick="vizualizare(' + i + ')">Vizualizare</button>' + '</td><td>' +
            '<button class="btn btn-default" onclick="stergere(' + i + ')">Stergere</button>' + '</td></tr>';
    }
    mostCommonName();
    avgSal();
    myTable += '<tr><td>' + Name + '</td><td>' +
        unique + '</td><td>' +
        "TODO 3" + '</td><td>' +
        avg + '</td></tr>';
    myTable += '</table>';
    var container = document.getElementById('listcontainer');
    container.innerHTML = myTable;
}

function findInTable(){
    var whatToFind = document.getElementById("search").value;

    var check = 0;

    for (var i in employeesList) {
        if(employeesList[i].firstName == whatToFind ||
            employeesList[i].lastName == whatToFind ||
            employeesList[i].salary == whatToFind ||
            employeesList[i].phone == whatToFind) {

            check++;
            if (check == 1) {
                var myTable = '<table class="table table-bordered"><tr><th>First Name</th><th>Last Name</th><th>Phone</th><th>Salary</th></tr>';
                check++;
            }
            if(check > 0) {
                myTable += '<tr><td>' + employeesList[i].firstName + '</td><td>' +
                    employeesList[i].lastName + '</td><td>' +
                    employeesList[i].phone + '</td><td>' +
                    employeesList[i].salary + '</td><td>' + '</td></tr>';
            }
        }
    }
    if(check > 0) {
        myTable += '</table>';
        var container = document.getElementById('searchcontainer');
        container.innerHTML = myTable;
    }
    else{
        var container = document.getElementById('searchcontainer');
        container.innerHTML = "No results found.";
    }
}
var Employee = function (firstName, lastName, phone, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
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

function showSalary() {
    var total = 0;
    for (var i in employeesList) {
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
    employeesList.splice(i, 1);
    showList();
    showSalary();
    numberOfEmployees--;
}

var occurences = [];
var firstNames = [];
var lastNames = [];
var Name;
var max = -1;
var index = 0;
var ocIndex = 0;


function uniq(a) {
    return Array.from(new Set(a));
}

function mostCommonName() {

    Name = "";
    firstNames = [];
    occurences = [];
    unique = 0;
    max = -1;
    for (var i = 0; i < employeesList.length; i++) {
        var found = firstNames.indexOf(employeesList[i].firstName);
        lastNames.push(employeesList[i].lastName);

        if (found == -1) {
            firstNames.push(employeesList[i].firstName);
            occurences.push(1);
        } else {
            occurences[found]++;
        }
    }
    unique = uniq(lastNames).length;
    for (i = 0; i < occurences.length; i++) {
        if (occurences[i] > max) {
            max = occurences[i];
            ocIndex = i;
        }
    }
    if(max == 1)
        Name = firstNames[0];
    else
        Name = firstNames[ocIndex];
}


