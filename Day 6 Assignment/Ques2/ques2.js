window.onload = function() {
    let ibusDetails = []; //stockdetailer --> busDetails

    if (localStorage.getItem("busDetails") == null) {
        localStorage.setItem("busDetails", JSON.stringify(ibusDetails));
    }
};

function display(superarray = undefined) {
    let tabledata = "";
    let busDetails;
    if (superarray == undefined) {
        busDetails = JSON.parse(localStorage.getItem("busDetails"));
    } else {
        busDetails = superarray;
    }
    busDetails.forEach(function(bus, index) {
        let currentrow = `<tr>
        <td>${index+1}</td>
        <td>${bus.name}</td>
        <td>${bus.source}</td>
        <td>${bus.destination}</td>
        <td>${bus.bnumber}</td>
        <td>${bus.pcapacity}</td>
        <td><button onclick="deleteBus(${index})">Delete</button><button onclick="openModale(${index})">Update</button></td>
        </tr>`;
        tabledata += currentrow;
    });
    document.getElementsByClassName("tdata")[0].innerHTML = tabledata;
}
display();

function addBus(event) {
    event.preventDefault();
    let bus = {}; //superhero --> bus
    let name = document.getElementById("name").value;
    let source = document.getElementById("source").value;
    let destination = document.getElementById("destination").value;
    let bnumber = document.getElementById("bnumber").value;
    let pcapacity = document.getElementById("pcapacity").value;


    bus.name = name;
    bus.source = source;
    bus.destination = destination;
    bus.bnumber = bnumber;
    bus.pcapacity = pcapacity;

    let busDetails = JSON.parse(localStorage.getItem("busDetails"));
    busDetails.push(bus);
    localStorage.setItem("busDetails", JSON.stringify(busDetails));
    display()
    document.getElementById("name").value = "";
    document.getElementById("source").value = "";
    document.getElementById("destination").value = "";
    document.getElementById("bnumber").value = "";
    document.getElementById("pcapacity").value = "";

}

function searchByName() {
    let searchvalue = document.getElementById("searchStock").value;
    let busDetails = JSON.parse(localStorage.getItem("busDetails"));
    let newData = busDetails.filter(function(bus) {
        return bus.source.toUpperCase().indexOf(searchvalue.toUpperCase()) != -1 ||
            bus.destination.toUpperCase().indexOf(searchvalue.toUpperCase()) != -1;
    });
    display(newData);
}

function deleteBus(index) {
    let busDetails = JSON.parse(localStorage.getItem("busDetails"));

    busDetails.splice(index, 1);
    localStorage.setItem("busDetails", JSON.stringify(busDetails));
    display(busDetails);
}

function openModale(index) {
    let modal = document.getElementsByClassName("modal")[0];
    modal.style.display = "block";
    copyData(index);
}

function hidemodal(event) {
    if (event.target.className == "modal") {
        let modal = document.getElementsByClassName("modal")[0];
        modal.style.display = "none";
    }
}
let updateIndex;

function copyData(index) {
    let busDetails = JSON.parse(localStorage.getItem("busDetails"));
    updateIndex = index;
    let bus = busDetails[index];
    document.getElementById("name1").value = bus.name;
    document.getElementById("source1").value = bus.source;
    document.getElementById("destination1").value = bus.destination;
    document.getElementById("bnumber1").value = bus.bnumber;
    document.getElementById("pcapacity1").value = bus.pcapacity;
}

function updateBus(event) {
    event.preventDefault();
    let busDetails = JSON.parse(localStorage.getItem("busDetails"));
    let bus = busDetails[updateIndex];
    console.log(bus);
    let name = document.getElementById("name1").value;
    let source = document.getElementById("source1").value;
    let destination = document.getElementById("destination1").value;
    let bnumber = document.getElementById("bnumber1").value;
    let pcapacity = document.getElementById("pcapacity1").value;

    bus.name = name;
    bus.source = source;
    bus.destination = destination;
    bus.bnumber = bnumber;
    bus.pcapacity = pcapacity;

    localStorage.setItem("busDetails", JSON.stringify(busDetails));
    display(busDetails);

    let modal = document.getElementsByClassName("modal")[0];
    modal.style.display = "none";
}