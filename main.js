
///////functions tutorial/////////
function square(monkey) {
  return monkey * monkey;
}

function square(x) {
	return x*x;
} 
 function square (x) { 
 	return x *x; 
 } 
 function square(x) {
 	return x * x; 
 }
  function cube(x) { 
 		return x * x * x; 
 }

 function average(num1,num2) {
 	return (num2+num1)/2;
 }

  function greeter(name) {
 	return "Hello" + " " + name + "!";
 }
  function perimeterRect(l, w) { 
 return 2 * (l + w) 
 }
 function perimeterTriangle(l1,l2,l3) { 
 return l1 + l2 + l3;
 }
 function perimeterSquare(l) { 
 return 4 * l;
 }
 function perimeterQuad(l1,l2,l3,l4) { 
 return l1 + l2 + l3 + l4;
 }
 function perimeterCircle(r) { 
 return 2 * Math.PI *r;
 }

 ///////boolean and conditions//// 

function isOldEnoughToDrive(age){
	if(age > 16){
		return "True";
	} else{
		return "False";
	}
}
function sameLength(str1,str2) {
	if(str1.length === str2.length){
		return true;
	}
	return false;
}
function passwordLongEnough(password) {
	if(password.length > 8){
		return "Your password is long enough";
	}
	return "Your password is not long enough";
 }


function rentalCar(name,age){
	if(age < 21){
		return "You can not rent a car";
	}
	return "You can rent a car" 

}
function max(num1,num2){
	if(num1 > num2){
		return num1;
	}
	return num2;
}
function min(num1,num2){
	if(num1 < num2){
		return num1;
	}
	return num2;
}

function larger(str1,str2){
	if(str1.length > str2.length){
 		return str1;
	}
	return str2;
}

function smaller(str1,str2){
	if(str1.length < str2.length){
 		return str1;
	}
	return str2;
}

/////////Logical Operators and More Conditionals//
//unary operators
//("warm today" || "cold today")
//("thats dog is frensh bulldog"|| "thats dog is frensh a boston terrier")

// "cold" && "raining";
// "hissing" && "growling";

function rentalCar1(age,name){
	if(name === "Joe" || age < 21){
		return "You can not rent a car";
	}else {
		return "You can rent a car";
	}
}
function scoreToGrade(mark){
  if(mark >100 || mark <0){
 		return "Invalid Score";
  }
	else if(mark <= 100 && mark >= 90){
		return "A";
	}
	else if(mark < 90 && mark >= 80){
		return "B";
	}
	else if(mark < 80 && mark >= 70){
		return "C";
	}
	else if(mark <70 && mark >= 60){
		return "D";
	}
	else {
		return "You can not pass this semester";
	}
}

/////////Introduction to Repetition//////
function sum(n){
	if(n === 0){
		return n;
	}
 return n+ sum(n - 1);
}

function factorial(n){
	if(n === 1){
		return n;
	}
 return n * factorial(n - 1);
}

function repeatString(str,count){
	if(count === 0){
		return "";
	}
	return str + repeatString(str,count - 1);
}

function fib(num){
	if(num === 0 || num === 1){
		return 1;
	}
	return fib(num - 1) + fib(num - 2);
}

function multiplyBy10(number,n){
	if(n === 0){
		return number;
	}
	return 1* 10 * multiplyBy10(number,n-1);
}

/// Variables/////
var count = 0;
function counter() {  
	 return count++ ;
 } 

 ////While Loop////
 function sum(n){

 	var sumi = 0;

 	if(n === 0){
 	   	return 0;
 	   }
 	while(n > 0){
 		sumi = sumi + n;
 		n--;
 	}
 	return sumi;
 }


function factorial(n){
	var fact = 1;

 	if(n === 0){
 	   	return 0;
 	   }
 	while(n > 0){
 		fact = fact * n;
 		n--;
 	}
 	return fact;
}

function repeat(str,count){
	var stringg="";
 	if(count === 0){
 	   	return "";
 	   }
 	while(count > 0){
 		stringg = stringg + str;
 		count--;
 	}
 	return stringg;
}

///Array//

var array1=["Your favorite TV shows/movies"," Names of people you know/care about","Favorite sports/activities"];

function firstelement(arr){
	return arr[0];
}


function lastelement(arr2){
	return arr2[arr2.length - 1];
}

function pushunshift(arr){
	arr.unshift(0,1);
	arr.push(5,6,7);
	return arr;
}

function pushelement(arr,string1){
	arr.shift();
	arr.unshift(string1);
	return arr;
}

////For Loop///
function sumfor(n){
 	var sumi = 0;
 	if(n === 0){
 		return 0;
 	}
 	for(var i = n;i > 0;i--){
 		sumi = sumi + i;
 	}
 	return sumi;
 }

function factorialfor(n){
	var fact = 1;

 	if(n === 0){
 	   	return 0;
 	   }
 	for(var i = n;i > 0;i--){
 		fact = fact * n;
 		
 	}
 	return fact;
}

function repeatfor(str,count){
	var stringg="";
 	if(count === 0){
 	   	return "";
 	   }
 	for(var i = count;i > 0;i--){
 		stringg = stringg + str;
 	}
 	return stringg;
}

function sumArray(arr){
	var sumOfArray=0;
	for(var i=0; i<arr.length; i++){
		sumOfArray = sumOfArray + arr[i];	
	}
    return sumOfArray;
}

function maxArray(arr){
	var max = arr[0];
	for(var i = 1; i < arr.length; i++){
		if(max < arr[i]){
			max=arr[i];
		}
	}
	return max;
}
// this is just for 2 elements can removed
function removeArray(arr,element){
	for(var i=0;i<arr.length;i++){
		if(arr[i]===element){
			arr.splice(i,1);
		}
	}
	return arr;
}
//for +2 numbers this is the function
function removeArray2(arr,element){
	var newArray=[];
	for(var i=0;i<arr.length;i++){
		if(arr[i] === element){
			i++;
		}
		else{
			newArray.push(arr[i]);
		}
	}
	return newArray;
}

function evenArray(arr){
	var newEvenArray=[];
	for(var i=0;i<arr.length;i++){
		if(arr[i]%2 === 0){
			newEvenArray.push(arr[i]);
		}
	}
	return newEvenArray;
}

////Objects////
var person = {
	firstName: 'Amal',
	lastName: 'Al Jarousha',
	age: 26,
	hometwon: 'Gaza'
};

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

var item = {
	itemName: 'Choclate',
	category: 'sweets',
	yearreleased: '2016',
	rating: 5,
	price: '2 dollar'
};

function formateName(person){
	return person.name.firstName + person.name.middleName + person.name.lastName;
}

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

