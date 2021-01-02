console.log('Im Working. Im JS. Im Beautiful');

//  list = []
//  object = {}

const list = ["Mon", "Tue", "Wed"];

const MyInfo = {
    name: "hanwool",
    age: 24,
    gender: "female",
    FavMovies: ["Frozen", "3 idio"],
    FavFood: [
        {
            name: "galbicchim",
            type: "Meat"
        },
        {
            name: "chicken",
            fatty: true
        }
    ]
}

console.log(MyInfo.name);

MyInfo.name = "HuhHanWoo";

console.log(MyInfo.name);

function sayHello(name){
    console.log(name + 'Hello');
}