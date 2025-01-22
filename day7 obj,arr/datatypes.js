//There are two types of data types
//"PRIMITIVE(STRING, NUMBER, BOOLEAN, NULL, UNDEFINED)"
//NON-PRIMITIVE(OBJECT-"KEY:VALUE PAIRS", ARRAY-"COLLECTION OF OBJECTS")

//Practicing primitives
 let itemName="kurti";
 let itemPrice=999;
 let isItemAvailable=true;
 let offer;
 let itemDamage=null;

//  printing the "type of" using console
console.log("type of itemName is "+ typeof itemName);//string
console.log("type of itemprice is "+ typeof itemPrice);//number
console.log("type of isItemAvailable is "+ typeof isItemAvailable);//boolean
console.log("type of offer is "+typeof  offer);//undefined
console.log("type of itemDamage is "+ typeof itemDamage);//null



// Practicing non-primitives
//creating array of movieCollection
const movieCollection=[
    {
        title:"Sankrantiki vastunam",
        hero:"venky",
        year:2025,
        price:{
            normal:200,
            premium:300
        },
        showTimings:["10AM","2PM", "6PM","12AM" ]

    },
    {
        title:"game changer",
        hero:"ram charan",
        year:2025,
        price:{
            normal:250,
            premium:350
        },
        showTimings:["10AM","2PM", "6PM","12AM" ]

    },
    {
        title:"daku maharaj",
        hero:"bala krishna",
        year:2025,
        price:{
            normal:200,
            premium:300
        },
        showTimings:["10AM","2PM", "6PM","12AM" ]

    }
];

// printing the whole array
console.log(movieCollection);

//printing all movies in the array
console.log(movieCollection["title"])//output is undefined. So we should use map to get movie titles in the array

// map is used to loop inside the array
const movieName=movieCollection.map(movie=>movie.title);
console.log(movieName);//prints all movie titles
