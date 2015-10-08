var bob = {
    name: "Bob",
    age: 30,
    occupation: "Burgers",
    business: "Bob's Burgers",
    isMarried: true,

    cars: [
        {
            make: "Toyota",
            model: "Camry",
            color: "Silver",
            powerSteering: true,
            sunroof: true
        },
        {
            make: "Tesla",
            model: "S",
            color: "Red",
            powerSteering: true,
            sunroof: true,
            awesomeness: true
        }
    ],

    speak: function() {
        console.log("Hello!");
    },
    children: [
        {
            name: "Jessica",
            age: 4,
            favoriteToys: ["adas", "asdgfsdb", "sfgsa"]
        },
        {
            name: "Bob Jr.",
            age: 2,
            favoriteToys: ["adas", "asdgfsdb", "sfgsa"]
        }
    ]
}

console.log(bob.age);