////Objects////
//Q2
var person = {
  firstName: 'Amal',
  lastName: 'Al Jarousha',
  age: 26,
  hometwon: 'Gaza'
};

//Q3
var person = {
  firstName: 'Amal',
  lastName: 'Al Jarousha',
  age: 26,
  hometwon: 'Gaza',
  favourite: 'Reading/Drawing/Watching Movies',
  family: 'I have 7 sisters and 2 brothers',
  dateOfBirth: '15/2/1993',
  placeOfBirth: 'Gaza'
};

//Q4
var person = {
  name: {
    firstName: 'Amal',
    middleName: "Abed",
    lastName: 'Al Jarousha',
  },
  age: 26,
  hometwon: 'Gaza',
  favourite: 'Reading/Drawing/Watching Movies',
  family: 'I have 7 sisters and 2 brothers',
  dateOfBirth: '15/2/1993',
  placeOfBirth: 'Gaza',
  favouritecolor: 'Red'
};
//Q5
var item = {
  itemName: 'Choclate',
  category: 'sweets',
  yearreleased: '2016',
  rating: 5,
  price: '2 dollar'
};
///Q11
function formateName(person){
  return person.name.firstName + person.name.middleName + person.name.lastName;
}
///Q12
var people = [ 
       {name: {first: 'Grace', middle: 'B.', last: 'Hopper'}, age: 85}, 
       {name: {first: 'Adele', last: 'Goldstine'}, age: 43}, 
       {name: {first: 'Ada', last: 'Lovelace'}, age: 36}, 
       {name: {first: 'Hedy', middle: 'E.', last: 'Lamarr'}, age: 85}, 
       {name: {first: 'Ruchi', last: 'Sanghvi'}, age: 34} 
 ];
 people[5]=person;


 function formateName(people){
  return people[5].name.firstName + people[5].name.middleName + people[5].name.lastName;
}

function averageAge(people){
  var sum = 0;
  for(var i = 0;i < people.length; i++){
    sum = sum + (people[i]['age']);
  }    
  return sum / people.length;
}

function peopleOlderAge(people,age){
  var newArrayage = [];
  for (var i = 0; i < people.length; i++) {
    if(people[i]['age'] > age){
      newArrayage.push(people[i]['age']);
    }
  }
  return newArrayage;
}
//Q13
var dirtyObject = { 
       _fht: 192492,
       name: 'Yan Fan', 
       age: 27, 
       _byz: 939205, 
       _ttrs: 510852 
 } 
 function clean(obj) { 
  // delete obj._fht;
  // delete obj._byz;
  // delete obj._ttrs;
  for(var key in obj){
    if(key.indexOf('_') === 0){
      delete obj[key];
    }
  }
    return obj;     
 } 

 //Q14
 //this question I answred it with Maha
 function removeOddValues(obj){
  for(var key in obj){
    if(typeof obj[key] === "string" || obj[key] % 2 === 0){
      delete obj[key];
    }
  }
  return obj;
 }

 ////data modeling///

//Q3
function makeBook(ID,title,authors,mrsp,genere,numberOfPages,description,yearOfgen){
    return {
        ID : ID ,
        title : title ,
        authors : authors ,
        mrsp : mrsp ,
        genere : genere ,
        numberOfPages : numberOfPages ,
        description : description ,
        yearOfgen : yearOfgen
    };
}
//Q2
var book1 = makeBook(1,'Harry Potter and the Sorcerer\'s Stone',['J.K. Rowling'],'adventure','15$',387,"sgsb",2003);
var book2 = makeBook(2,'Romeo and Juliet ',['William Shakespeare'],'edgsdg','3$',5468,1432);
var book3 = makeBook(3,'Structure and Interpretation of Computer Programs',['Gerald Jay Sussman','Hal Abelson'],'fdhgwtd','20$',3876,1995);
//Q4
function displayBook(book){
return book.title+", by "+book.authors+" -- "+book.mrsp+", "+book.genere;
}
//Q5
var booksArray = [book1,book2,book3];
//6
function displayBooks(arr){
    var booksStr='';
    for(var i = 0 ; i < arr.length ; i++){
        booksStr+= i+1 +". " +displayBook(arr[i])+'\n';
    }
    return booksStr;
}
//Q7 we need help;
function isMatch (query ,str){
    str.toLowerCase();
    query.toLowerCase();
    var nStr = str.split('');
    var nQuery = query.split('');
    for(var i=0 ; i < nStr.length; i++ ){
    if(str.indexOf(query) === -1){
        return false;
    }
    else {
    return true ;
    }
    }
    str.substr(0, query.length);
    
}
function searchBooks (query,booksArray){
    for(var i =0 ; i < booksArray.length ; i++){
        if(isMatch(query,booksArray[i].title)===true){
            return 'matching';
        }
            return 'no matching'
    }
}
///Q8
function removeBook(title,booksArray){
    //title.toLowerCase();
    var newarr=[];
    for(var i = 0 ;i < booksArray.length;i++){
        //booksArray[i].title.toLowerCase();
        if(booksArray[i].title !== title){
            newarr.push(booksArray[i]);
        }
    }
    return newarr;
}

///////////////////////Introduction to Higher Order Functions/////////

var cube = function(x) { 
       return x * x * x; 
 };
 //
 var fullName  = function (first,last){
     return first + ' ' + last; 
 }
 var arr = [1,2,3]
function sum (arr) {
 for (var i=0; arr.length; i++ ){
 }
}
var power = function(base, exp) { 
       if (exp === 0) { 
       return 1; 
       } 
       return base * power(base, exp - 1); 
 } 
 var subCubes = function(numbers) { 
       var total = 0; 
       for (var i = 0; i < numbers.length; i++) { 
             total = total + cube(numbers[i]); 
       } 
       return total; 
 }
// Q2
function each(array, func){
 for(var i =0; i<array.length; i++){
     func(array[i],i);
 }
}

//Q3
function sumSqure(numbers){
 var total = 0;
 each(numbers,function(number,i){
     //console.log(numbers);
     total += number;
 });
 return total;   
}

//Q4
function sumCubes(numbers){
 var total = 0;
 each(numbers, function(num,i){
     total += cube(num);
 });
    return total;
}

//Q5
function product(numbers){
 var total = 1;
 each(numbers, function(num,i){
     total *= num;
 });
    return total;
}

//Q6
function cubeAll(arr){
  var new_arr = [];
  for(var i=0;i<arr.length;i++){
    new_arr.push(cube(arr[i]));
  }
  return new_arr;
}
//Q6 using each;
function cubeAllEach(arr){
  var new_arr = [];
  each(arr,function(number,i){
    new_arr.push(cube(number));
  })
  return new_arr;
}

//Q7
function odds(numbers){
 var oddArray = [];
 each(numbers,function(num,i){
     if(num % 2 !== 0){
        oddArray.push(num); 
     }
 });
 return oddArray;        
}

/////////////Passing Element Idices////////////////
//Q1
 function indexedExponentials(numbers) { 
     var expoArray = [];
     each(numbers,function(num,i){
         expoArray.push(Math.pow(num,i));
        }
      );
 return expoArray;
 }

 //Q2
  function evenIndexedOddNumbers(numbers) { 
     var evenOddAray = [];
     each(numbers,function (num, i){
         if (num % 2 !== 0 && i % 2 === 0){
             evenOddAray.push(num);
         }
     });
     return evenOddAray;
 }

//Q3
function evenIndexedEvenLengths(strings) { 
    var new_arr=[];
    each(strings,function (str_arr, i){
       if (str_arr.length %2 === 0 && i % 2 === 0){
           new_arr.push(str_arr);
       }
     });
    return new_arr;
  } 

 //////////////Iterating Over Objects/////////////////
 ///
 function each(coll, func) { 
       if (Array.isArray(coll)) { 
             for (var i = 0; i < coll.length; i++) { 
                   func(coll[i], i); 
             } 
       } else { 
             for (var key in coll) { 
                   func(coll[key], key); 
             } 
       } 
 }

 //Q2
 function keysLongerThan(coll,number){
     var new_bj = {};
     each(coll,function(num,key){
         if(key.length > number) {
           new_bj[key] = num
         }  
     })
    return new_bj; 
     }

   //Q3//
  function incrementValues(coll){
    var obj = {};
    each(coll,function(numb,key){
        if(typeof(numb)=== 'number'){
          numb = numb + 1;
          obj[key] = numb;
        }
        else{
          obj[key] = numb;
        }
    }); 
      return obj; 
    }
  
   //Q4//
  // function objectToArrayOrArrayToObject(coll){
  //   var obj = {};
  //   each(coll, function(num,key){
  //     if(){

  //     }


  //   });
  //   return obj; 
  //  }

   //Q5//
  function oddEvenArray(obj){
    var newArr = [];
    each(obj,function(value,key){
      if(value % 2 !==0){
        newArr.unshift(value);
      }else{
        newArr.push(value);
      }
    }); 
      return newArr;
  } 

  //Q6
  function isPrime(obj){
    var arr = [];
    each(obj,function(val,key){
      if(val === 1 || val === 2){
        arr.push(val);
      }
      else{
        for(var i = 2; i< val ; i++){
          if(val % i === 0){
            break;
          }else{
            arr.push(val)
          } break; 
        }

      }
    })
    return arr;
  }


////Map////
//Q1
function map(array, f) { 
   var acc = []; 
   each(array, function(element, i) { 
         acc.push(f(element, i)); 
   }); 
   return acc; 
 }

var people = [ 
     {name: {first: 'Grace', middle: 'B.', last: 'Hopper'}, age: 85}, 
     {name: {first: 'Adele', last: 'Goldstine'}, age: 43}, 
     {name: {first: 'Ada', last: 'Lovelace'}, age: 36}, 
     {name: {first: 'Hedy', middle: 'E.', last: 'Lamarr'}, age: 85}, 
     {name: {first: 'Ruchi', last: 'Sanghvi'}, age: 34} 
 ]; 

function firstnames(people) { 
   return map(people, function(person) { 
      return person.name.first;
    }); 
 }  

 //Q2
  function abs(x) { 
   if (x >= 0) { 
         return x; 
   } 
   return -x; 
 }

 function absMap(arr){
  return map(arr,function(number){
    return abs(number);
  })
 };

 //Q3
 function max(arr){
  var max = arr[0];
  each(arr,function(number,i){
    if(number > max){
      max = number;
    }
  })
  return max;
 }

 function maxArr(arr){
    return map(arr,function(num,i){
      return max(num);
    });
 }

//////Improved Map//////
function map(coll,f){
  var acc = [];
  if(!Array.isArray(coll)){
    acc = {}
  }
  each(coll,function(element,key){
    acc[key] = f(element,key);
  });
  return acc;
}

//Q1
function incrementValues(obj){
  return map(obj,function(element,key){
    if(typeof(element) === 'number'){
      return element + 1;
    }
    else {
      return element;
    }
  })
}

//Q2
function uppercaseValues(obj){
  return map(obj,function(element,key){
    if(typeof(element) === 'string'){
      return element.toUpperCase();
    }
      return element;
  })
}

//Q3
function countNestedKeys(obj){
  return map(obj,function(element,key){
      return Object.keys(element).length;
  })
}

//Q4
 function agesToMinutes(object){ 
   return map(object,function(element,key){
      if(key === 'age'){
        return element = element * 365 * 60 * 60;
      }
   }) 
 } 



 ////filter////
function filter(arr,predicate){
  var acc = [];
  each(arr,function(element){
    if(predicate(element)){
      acc.push(element);
    }
  })
  return acc;
} 
///Q1
function evens(arr){
  return filter(arr,function(number){
    return (number % 2 === 0);
  })
}

////Q2
function multiplesOfThree(arr){
  return filter(arr,function(element){
    return (element % 3 === 0);
  })
}

////Q3
function positive(arr){
  return filter(arr,function(element){
    return (element > 0);
  })
}

////Q4
function evenLength(arr){
  return filter(arr,function(element){
    return (element.length % 2 === 0);
  })
}

//Q5
// function moveZero(arr){
//   var new_arr = [];
//   return filter(arr,function(element){
//     if(element === 0){
//        new_arr = arr.splice(element, 1);
//        console.log(arr)
//               console.log(new_arr)

//        return new_arr;
//     }
//  })
// }

