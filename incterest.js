var app = angular.module("incItapp", ["firebase"]);
app.controller('incItCtrl', function($scope, $firebase){

  var json = {
  "0": {
    "title": "Rubix Cube",
    "poster": "images/rubix.png",
    "description": "As of January 2009, 350 million cubes had been sold worldwide.",
    "link": "http://rubiks.com/"
  },
  "1": {
    "title": "Santa's Mail",
    "poster": "images/santa.jpg",
    "description": "In 2002, Bryon Reese launched Santa Mail. By 2009 Santa Mail had responded to nearly 300,000 children",    
  "link": "https://www.santamail.org/closed/"
  },
  "2": {
    "title": "SendaBall",
    "poster": "images/sendaball.jpg",
    "description": "A company started by 2 sisters in 2003 because they wanted to send something other than a card. So far, SENDaBALL has racked up $1 million in gross sales.",    
  "link": "https://secure.sendaball.com/start"
  },
  "3": {
    "title": "Lucky Break Wishbone",
    "poster": "images/luckwishbone.jpeg",
    "description": "Ken Ahroni found a “secret formula” that allows the Lucky Break Wishbone to break just like a dried wishbone. His co made $2 million within 2 years",
    "link": "http://www.luckybreakwishbone.com/"
  },
  "4": {
    "title": "The Ugly Doll",
    "poster": "images/uglydoll.jpg",
    "description": "The Uglydoll may not look pretty, but it has resulted in some good looking sales receipts — it’s raked in over $100 million in retail sales since its debut.",
    "link": "http://www.uglydolls.com/"
  },
  "5": {
    "title": "The Spork",
    "poster": "images/spork.jpg",
    "description": "Joachim Nordwall designed a two-ended spork for the Swedish company Light My Fire in 2003, which has sold more than 20 million units.",
    "link": "http://en.wikipedia.org/wiki/Spork"
  },
  "6" : {
     "title": "Inspirational Quote",
    "poster": "images/investInYou.jpg",
    "description": "Warren Buffet",
    "link": "http://en.wikipedia.org/wiki/Warren_Buffett"
  },
 "7" : {
     "title": "Antenna Balls",
    "poster": "images/antennaBall.jpg",
    "description": "Jason Wall was inspired by a Jack in the Box commerical in 1997 and create some to sell to auto part store. He made $1.2 mil in 1 year.",
    "link": "http://myweirdbusiness.blogspot.com/2006/08/how-guy-became-millionaire-selling.html"
  },
 "8" : {
     "title": "Koosh Ball",
    "poster": "images/koosh.jpg",
    "description": "Stillinger came up with the idea for the Koosh ball when he tied rubber bands together to create an easier-to-catch ball for his children in 1987.",
    "link": "http://en.wikipedia.org/wiki/Koosh_ball"
  },
 "9" : {
     "title": "Drybar",
    "poster": "images/drybar.jpg",
    "description": "Launced in 2010 by stay a home mom, Alli Webb, and her husband, Drybar is a women's salon that specializes in blowout hairstyling for less.",
    "link": "http://www.thedrybar.com/"
  },
 "10" : {
     "title": "Snuggie",
    "poster": "images/snuggie.jpg",
    "description": "The company declines to disclose exact sales revenue, but says 30 million blankets have been sold to date.",
    "link": "http://www.mysnuggiestore.com/"
  },
 "11" : {
     "title": "K'Nex",
    "poster": "images/knex.jpg",
    "description": "Joel Glickman's construction set added an extra dimension of wheels, pulleys and gears to more traditional concepts. Knex receives $200 million in annual sales.",
    "link": "http://finance.yahoo.com/news/surprisingly-simple-ideas-made-millions-040001737.html."
  },
 "12" : {
     "title": "Inspirational quote",
    "poster": "images/dreamBig.jpg",
    "description": "Richard Branson",
    "link": "http://time.com/3060414/how-i-made-my-first-million-richard-branson/"
  },
 "13" : {
     "title": "Pet Rock",
    "poster": "images/petRock.jpg",
    "description": "In April 1975, Gary Dahl came up with the idea of a pet rock when his friends complained about their own pet. Dahl sold 1.5 million Pet Rocks and became a millionaire.",
    "link": "http://www.petrock.com/"
  },
 "14" : {
     "title": "Doggles",
    "poster": "images/doggles.jpg",
    "description": "It all happened one day in 1996 when Roni Di Lullo notice that her dog couldn't play fetch well because of the glare in his eyes. Doggles made $3 million in retail sales last year.",
    "link": "http://shop.doggles.com/"
  },
 "15" : {
     "title": "1-800-GOT-JUNK",
    "poster": "images/gotjunk.jpeg",
    "description": "In 1990, Brian Scudamore was a struggling college student looking to make some extra cash. Today, there are 173 franchises, and the company made $137 million last year.",
    "link": ""
  },
 "16" : {
     "title": "TOMS",
    "poster": "images/toms.jpg",
    "description": "An overpriced pair of shoe created by Blake Mycoskie with an humanitarian purpose. It survived the recession and hasover 500 retailers were carrying the brand globally.",
    "link": "http://www.success.com/article/the-business-of-giving-toms-shoes"
  },
 "17" : {
     "title": "The million dollar homepage",
    "poster": "images/milldollarhomepage.png",
    "description": "From the simple idea of selling pixels of a 1000x1000 grid for $1 each, the project attracted people like flies. Alex Tew made $1,037,100 in a matter of months.",
    "link": ""
  },
 "18" : {
     "title": "airbnb",
    "poster": "images/airbnb.jpg",
    "description": "Renting your room to strangers?! A idea that many investors in the Silcon Valley thought was crazy. In April 2014, the company has an valuation of approximately $10 billion",
    "link": ""
  },
 "19" : {
     "title": "Obama Os & Cap’n McCains",
    "poster": "images/obamaos.jpg",
    "description": "Desparate for $, airbnb founders made special-edition Cheerios boxes for both presidential candidates with hot glue and cardboard. These boxes made them 30K to fund their co.",
    "link": "http://www.theatlantic.com/business/archive/2013/08/airbnb-ceo-brian-chesky-on-building-a-company-and-starting-a-sharing-revolution/278635/"
  },
 "20" : {
     "title": "Inspirational quote",
    "poster": "images/quote.jpg",
    "description": "Chinese proverb",
    "link": "http://www.sba.gov/content/follow-these-steps-starting-business"
  }
 };

  var incItFb =new Firebase('https://incit.firebaseio.com/');
  var sync = $firebase(incItFb);
  $scope.incs = sync.$asArray();

  for (var key in json) {
    if (json.hasOwnProperty(key)) {
      console.log(key);
    }
  }
    
  $scope.addInc = function(title, desc, image, link){
    if($scope.newInc != "" && $scope.newTitle != "" && $scope.newPoster != "" && $scope.newDesc != "") {
      $scope.incs.$add({
        title: $scope.newTitle,
        poster: $scope.newPoster,
        description: $scope.newDesc,
        link:$scope.newLink,
      });
      $scope.newTitle = "";
      $scope.newPoster = "";
      $scope.newDesc = "";
      $scope.newLink = "";
    } 
    else {
      alert("Please fill out the form")
    }
  }
  
});

  //   $scope.newTitle = "";
  //   $scope.newPoster = "";
  //   $scope.newDesc = "";
  // }
//   $scope.removedTile = function(id){
//      //run a function that removes incs
//   //create a temp variable that we can put all the incs in 
//   var goneIncs = $scope.incs; 
//   //remove all the incs from the original variable
//   $scope.incs = [];

//   //loop through the temp variable with the forEach angular function
//   angular.forEach(goneIncs, function(inc){
//     if(!inc.removed){
//   $scope.incs.push(inc);
//   }
//   else {
//   }
// })
  // };

//     $scope.incs = [
//   {
//     id: 0,
//     title: "Rubix Cube",
//     poster: "images/rubix.png",
//     description: "Rubik's Cube"
//   },
//   {
//     id: 1,
//     title: "Santa's Mail",
//     poster: "images/santa.jpg",
//     description: "In 2002, Bryon Reese launched Santa Mail, a service that allows kids to send letters to the North Pole. Parents enclose a small fee of just $9.95."    
//   },
//   {

//     id: 2,
//     title: "Rubix Cube",
//     poster: "images/rubix.png",
//     description: "Rubik's Cube is a 3-D combination puzzle invented in 1974 by Hungarian sculptor and professor of architecture Erno Rubik. Originally called the Magic Cube, the puzzle was licensed by Rubik to be sold by Ideal Toy Corp."    
//   },
//   {
    
//     id: 3,
//     title: "Lucky Break Wishbone",
//     poster: "images/luckwishbone.jpeg",
//     description: "http://shop.luckybreakwishbone.com/product.sc?productId=2&categoryId=1"
//   },
//   {
//     id: 4,
//     title: "Rubix Cube",
//     poster: "images/rubix.png",
//     description: "Rubik's Cube is a 3-D combination puzzle invented in 1974 by Hungarian sculptor and professor of architecture Erno Rubik. Originally called the Magic Cube, the puzzle was licensed by Rubik to be sold by Ideal Toy Corp."
//   },
//   {
//     id: 5,
//     title: "The Slinky",
//     poster: "images/slinky.jpg",
//     description: "Invented by Richard James in 1943, when he accidentically knocked a metal spring from a shelf. Over 300 million Slinkys have been sold between 1945 and 2005, and the original Slinky is still a bestseller."
//   }
//     ];
//  //adding removed:false to each character
//  for(var i = 0; i < $scope.incs.length; i++){
//   $scope.incs[i].removed = false
//  };


//   $scope.addinc = function() {
//       if($scope.newInc != "" && $scope.newTitle != "" && $scope.newPoster != "" && $scope.newDesc != "") {
//         $scope.incs.push({
//           title: $scope.newTitle,
//           poster: $scope.newPoster,
//           description: $scope.newDesc,
//           removed:false
//           });
//         $scope.newTitle = "";
//         $scope.newPoster = "";
//         $scope.newDesc = "";
//       } else {
//         alert("Please fill out the form")
//       }
// //     };
//   //run a function that removes incs
//   $scope.removeInc = function() {
//   //create a temp variable that we can put all the incs in 
//   var goneIncs = $scope.incs; 
//   //remove all the incs from the original variable
//   $scope.incs = [];

//   //loop through the temp variable with the forEach angular function
//   angular.forEach(goneIncs, function(inc){
//     if(!inc.removed){
//   $scope.incs.push(inc);
//   }
//   else {
//   }
// })
// };
// });
