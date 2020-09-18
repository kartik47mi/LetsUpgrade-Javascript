let employeeData = [{
    name: "rahul",
    age: 20,
    city: "jaipur",
    salary: 45000
}, {
    name: "rohit",
    age: 20,
    city: "new Delhi",
    salary: 5000
}, {
    name: "yatin",
    age: 22,
    city: "kailash puri",
    salary: 4500
}, {
    name: "dharmender",
    age: 26,
    city: "gangapur",
    salary: 9000
},{
    name: "Piyush",
    age: 17,
    city: "new Delhi",
    salary: 7654
}];

function display(superarray) {
    let tabledata = "";
    superarray.forEach(function(emp, index) {
        let currentrow = `<tr>
        <td>${index+1}</td>
        <td>${emp.name}</td>
        <td>${emp.age}</td>
        <td>${emp.city}</td>
        <td>${emp.salary}</td>
        <td><button onclick="deleteStock(${index})">Delete</button></td>
        </tr>`;
        tabledata += currentrow;
    });
    document.getElementsByClassName("tdata")[0].innerHTML = tabledata;
}
display(employeeData);

function searchByName() {
    let searchvalue = document.getElementById("searchemp").value;
    let newData = employeeData.filter(function(emp) {
        return (emp.name.toUpperCase().indexOf(searchvalue.toUpperCase()) != -1) ||
            (emp.city.toUpperCase().indexOf(searchvalue.toUpperCase()) != -1);
    });
    display(newData);
}

function deleteStock(index) {
    employeeData.splice(index, 1);
    display(employeeData);
}
