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

function showArr() {
    for (i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
};

showArr();