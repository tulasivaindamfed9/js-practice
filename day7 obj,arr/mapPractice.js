// Map function is used to loop inside an array
// map practice on array of numbers
const numbers=[20, 30, 40, 50];
const squareNUM=numbers.map(num=>num*num);
console.log(squareNUM);//prints square of given numbers in the array


// MOVIE PRICING EXERCISE
// creating array of movies
const moviesList=[
    {title:"kanna", price:4},
    {title:"munna", price:2},
    {title:"lalana", price:6}
]

// mapping for each movie 
const movies=moviesList.map(movie=>{
    return "The price of " + movie.title+ " is "+movie.price;
})
// now to print "the price of movie.title is movie.price" using for each
movies.forEach(movie=>{
    console.log(movie);
})

console.log("Changing the price of each movie to $price");

// adding a "$" to price using map
const formattedMovieList=moviesList.map(list=>{
    return{
        title:list.title,
        price:`$${list.price}`
    }
})
console.log("Formatted movies list: ",formattedMovieList);




// more pracice on map
// 1. Create an array of 5 movie objects with: title, rating, price
const movie5=[
    {title:"ugram",
      rating:"4.5",
      price:200,
      seatsAvailable: 70
    },
    {
        title:"veeram",
        rating:4,
        price:250,
        seatsAvailable:25
    },
    {
        title:"maha",
        rating:4.2,
        price:200,
        seatsAvailable:0
    },
    {
        title:"vishnum",
        rating:4.5,
        price:150,
        seatsAvailable:30
    },
    {
        title:"narasimham",
        rating:4.8,
        price:300,
        seatsAvailable:40
    }
]
console.log("movies with old price",movie5);

// 2. Use map to create a "premium" price (original price + 100)
const newMovies5=movie5.map(movie=>{
    return{
        title:movie.title,
        rating:movie.rating,
        premiumPrice:movie.price + 100,
        seatsAvailable:movie.seatsAvailable
    }
});
console.log("Added a price of 100Rs. to each movie ticket: ",newMovies5);

// 3. Use map to create movie recommendations based on rating
const rating=newMovies5.map(rate=>{
    return{
        bestRatedMovie:rate.title,
        rating: rate.rating > 4.5 ? "excellent":"good",
        price:rate.premiumPrice,
        seatsAvailable:rate.seatsAvailable
    }
});
console.log("Movies based on rating: ",rating);

// 4.Use map to show only available movies
const moviesAvailable=rating.map(seats=>{
    return{
        title:seats.bestRatedMovie,
        seatsAvailable:seats.seatsAvailable > 0 ? seats.seatsAvailable: 0
    }
})
console.log("Movies list with no.of seats available: ",moviesAvailable);