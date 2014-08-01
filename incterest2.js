var app = angular.module("incItapp", ["firebase"]);

function incItCtrl($scope, $firebase){
  var incItRef = new Firebase('https://incit.firebaseio.com/');
  $scope.toyCo = $firebase(incItRef);

  $scope.toyCo.$set(
    {incs: [
      {
        id: 0,
        title: "Rubix Cube",
        poster: "images/rubix.png",
        description: "Rubik's Cube is a 3-D combination puzzle invented in 1974 by Hungarian sculptor and professor of architecture Erno Rubik. Originally called the Magic Cube, the puzzle was licensed by Rubik to be sold by Ideal Toy Corp."
      },
      {
        id: 1,
        title: "Fancy Pants",
        poster: "images/rubix.png",
        description: "Rubik's Cube is a 3-D combination puzzle invented in 1974 by Hungarian sculptor and professor of architecture Erno Rubik. Originally called the Magic Cube, the puzzle was licensed by Rubik to be sold by Ideal Toy Corp."    
      },
      {

        id: 2,
        title: "Rubix Cube",
        poster: "images/rubix.png",
        description: "Rubik's Cube is a 3-D combination puzzle invented in 1974 by Hungarian sculptor and professor of architecture Erno Rubik. Originally called the Magic Cube, the puzzle was licensed by Rubik to be sold by Ideal Toy Corp."    
      },
      {
        
        id: 3,
        title: "Rubix Cube",
        poster: "images/rubix.png",
        description: "Rubik's Cube is a 3-D combination puzzle invented in 1974 by Hungarian sculptor and professor of architecture Erno Rubik. Originally called the Magic Cube, the puzzle was licensed by Rubik to be sold by Ideal Toy Corp."
      },
      {
        id: 4,
        title: "Rubix Cube",
        poster: "images/rubix.png",
        description: "Rubik's Cube is a 3-D combination puzzle invented in 1974 by Hungarian sculptor and professor of architecture Erno Rubik. Originally called the Magic Cube, the puzzle was licensed by Rubik to be sold by Ideal Toy Corp."
      },
      {
        id: 5,
        title: "The Slinky",
        poster: "images/slinky.jpg",
        description: "Invented by Richard James in 1943, when he accidentically knocked a metal spring from a shelf. Over 300 million Slinkys have been sold between 1945 and 2005, and the original Slinky is still a bestseller."
      }
    ]})

};
    











// {
//         id: 0,
//         title: "Rubix Cube",
//         poster: "images/rubix.png",
//         description: "Rubik's Cube is a 3-D combination puzzle invented in 1974 by Hungarian sculptor and professor of architecture Erno Rubik. Originally called the Magic Cube, the puzzle was licensed by Rubik to be sold by Ideal Toy Corp."
//       },
//       {
//         id: 1,
//         title: "Fancy Pants",
//         poster: "images/rubix.png",
//         description: "Rubik's Cube is a 3-D combination puzzle invented in 1974 by Hungarian sculptor and professor of architecture Erno Rubik. Originally called the Magic Cube, the puzzle was licensed by Rubik to be sold by Ideal Toy Corp."    
//       },
//       {

//         id: 2,
//         title: "Rubix Cube",
//         poster: "images/rubix.png",
//         description: "Rubik's Cube is a 3-D combination puzzle invented in 1974 by Hungarian sculptor and professor of architecture Erno Rubik. Originally called the Magic Cube, the puzzle was licensed by Rubik to be sold by Ideal Toy Corp."    
//       },
//       {
        
//         id: 3,
//         title: "Rubix Cube",
//         poster: "images/rubix.png",
//         description: "Rubik's Cube is a 3-D combination puzzle invented in 1974 by Hungarian sculptor and professor of architecture Erno Rubik. Originally called the Magic Cube, the puzzle was licensed by Rubik to be sold by Ideal Toy Corp."
//       },
//       {
//         id: 4,
//         title: "Rubix Cube",
//         poster: "images/rubix.png",
//         description: "Rubik's Cube is a 3-D combination puzzle invented in 1974 by Hungarian sculptor and professor of architecture Erno Rubik. Originally called the Magic Cube, the puzzle was licensed by Rubik to be sold by Ideal Toy Corp."
//       },
//       {
//         id: 5,
//         title: "The Slinky",
//         poster: "images/slinky.jpg",
//         description: "Invented by Richard James in 1943, when he accidentically knocked a metal spring from a shelf. Over 300 million Slinkys have been sold between 1945 and 2005, and the original Slinky is still a bestseller."
//       }
//     ]



    // $scope.incs.$add({title: $scope.newTitle, poster: $scope.newImage, desc: $scope.newDesc});
    
    // $scope.newTitle = "";
    // $scope.newPoster = "";
    // $scope.newDesc = "";

  // $scope.removedTile = function(id){
  //   alert(id.toString())
  // };

    
 //adding removed:false to each character
 // for(var i = 0; i < $scope.incs.length; i++){
 //  $scope.incs[i].removed = false
 // };


  // $scope.addinc = function() {
  //     if($scope.newInc != "" && $scope.newTitle != "" && $scope.newPoster != "" && $scope.newDesc != "") {
  //       $scope.incs.push({
  //         title: $scope.newTitle,
  //         poster: $scope.newPoster,
  //         description: $scope.newDesc,
  //         removed:false
  //         });
  //       $scope.newTitle = "";
  //       $scope.newPoster = "";
  //       $scope.newDesc = "";
  //     } else {
  //       alert("Please fill out the form")
  //     }
  //   };
  //run a function that removes incs
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
