let arr = [{
        name: "rahul",
        age: 15,
        country: "india",
        hobbies: ["music", "badminton", "reading"],
    },
    {
        name: "rahul1",
        age: 25,
        country: "America",
        hobbies: ["cricket", "badminton", "cooking"]
    },
    {
        name: "rahul2",
        age: 35,
        country: "Australia",
        hobbies: ["studying", "joking", "reading"]
    },
    {
        name: "rahul3",
        age: 45,
        country: "india",
        hobbies: ["music", "dancing", "reading"]
    }
];

function age() {
    for (i = 0; i < arr.length; i++) {
        let ageLess = arr[i];
        if (arr[i].age < 30) {
            console.log(ageLess);
        }
    }
}
age();

function country() {
    for (i = 0; i < arr.length; i++) {
        let ind = arr[i];
        if (arr[i].country === "india") {
            console.log(ind);
        }
    }
}
country();