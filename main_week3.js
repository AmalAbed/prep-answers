///////////Reduce /////////
 function reduce(array, f, start) { 
   var acc = start; 
   each(array, function(element) { 
         acc = f(acc, element); 
   }); 
   return acc; 
 }
///Q1
  function product(numbers) { 
     return reduce(numbers, function(total, number) { 
       return total * number; 
    }, 1); 
  }

///Q2
  function averageAge(people) { 
     return reduce(people,function(sum,number){
        return (sum + number.age)
     },0)/people.length;
  }  

///Q3 ////
  function range(start, end) { 
     var acc = []; 
     for (var i = start; i < end; i++) { 
           acc.push(i); 
     } 
     return acc; 
  }
  function factorialn(n){
    return product(range(1,n+1));
  }

 /////////Improved Reduce//////////////////
  function reduce(array, f, acc) { 
     if (acc === undefined) { 
           acc = array[0]; 
           array = array.slice(1); 
     } 
     each(array, function(element, i) { 
           acc = f(acc, element, i); 
     }); 
     return acc; 
  }
 ////Q1
  function factorial(n){
    return reduce(range(1, n + 1), function(i, number) {
        return i * number; 
      })
  } 
 ///Q2
  function max(array){
    return reduce(array,function(max,number){
      if(number > max){
        max = number;
      }
      return max;
    });
  }
 ////Q3
 function improvedRange(start,end){
   var acc = []; 
   if (end === undefined) { 
     end = start;
     start = 0;
    } 
   for (var i = start; i < end; i++) { 
     acc.push(i); 
    } 
    return acc; 
 }

 /////Abstraction/////
 function each(coll, func) { 
   if (Array.isArray(coll)) { 
       for (var i = 0; i < coll.length; i++) { 
           func(coll[i], i); 
       } 
  }else { 
     for (var key in coll) { 
         func(coll[key], key); 
       } 
    } 
 }

 function map(array, f) { 
   var acc = []; 
   each(array, function(element, i) { 
         acc.push(f(element, i)); 
   });
      return acc; 
 }
 //Q1
function select(obj,arr){
  var new_obj= {};
  each(obj,function(num,key){
    each(arr,function(element,i){
      if(key === element){
        new_obj[key] = num;
      }
    })
  })
  return new_obj;
}

//Q2
function pluck(array,key){
 var new_arr = [];
 return map(array,function(element,index){
      return element[key];
  })
}
//Q3
function extend(desObject,sourceObject){
  each(desObject,function(element,key){
      sourceObject[key] = element;

    })
return sourceObject
}

//var x ={keys[0]:values[0]}

//Q4
 function zip(keys, values) { 
   var obj={};
   each(keys,function(element,i1){
    obj[element]=values[i1]
   })
   return obj
 }

 //Q5
 ///it needs time 

 //Q6
 function numbersOnly(arr){
  each(arr,function(number2){
    each(number2,function(number3,key2){
      if(typeof number3 === 'number'){
        delete number2[key2];
      }
    })
  })
return arr;
 }
/////////////////// Clouser  ////////////////////
//Q1
function makeCount(){
    var counter = 0;
    function count(){
      counter++;
      return counter;
    }
return count;
}
var count1 = makeCount();
var count2 = makeCount();
//Q2
// function makeCount(num){
//  var counter = num;
//  function count(){
//      counter++;
//      return counter;
//  }
// return count;
// }
// var num = 10;
// var count1 = makeCount(20);
// var count2 = makeCount(50);

///Q3///
 function pow(exponent) {
     return function(base) {
          return Math.pow(base,exponent);
          }
     } 
//Fill in the ??? so that it works like this: 
var square = pow(2);
 var cube = pow(3); 
var power4 = pow(4); 

////Closures Adding Methods/////

function makeCount(num){
  var counter = num;
  var obj = { 
      up: function(){
          counter++;
          return counter;
      }, 
  }
  return obj;
}
var count1 = makeCount(10);

//Q1
function makeAccount(initial) {
   var balance = initial;
   return {
      withdraw: function(amount) {
      if (balance - amount >= 0) {
      balance = balance - amount;
      return 'Heres your money: $' + amount;
   }
     return 'Insufficient funds.';
    },
   deposit: function(amount) {
        balance = balance + amount;
        return 'Your balance is: $' + balance;
    },
    checkBalance: function(){
      return 'Your Balance is '+ balance;
    }
   };
}

///Q2 
function makeCount(num){
  var counter = num;
  var obj = { 
    up: function(){
        counter++;
        return counter;
    },
    down: function(){
        counter--;
        return counter;
    },
  }
return obj;
}

/// Q3
function makeCount(num){
  var counter = num;
  var obj = { 
      up: function(){
          counter++;
          return counter;
      },
      down: function(){
          counter--;
          return counter;
      },
      reset: function(){
          counter = num;
      }
  }
return obj;
}

////////Data Modeling with Closures////









////////////OOp///////////////
//Q1
function makeAccount(initial) {
   var obj = {};
   obj.balance = initial;
   obj.withdraw = withdraw;
   obj.deposit = deposit;

   return obj;
}
var withdraw = function(amount) {
     if (this.balance - amount >= 0) {
        this.balance = this.balance - amount;
        return 'Here is your money: $' + amount;
     }
  return 'Insufficient funds.';
  }
var deposit = function(amount) {
      this.balance = this.balance + amount;
      return 'Your balance is: $' + this.balance;
  }
   
//Q2
 function makeStopwatch() {
     var obj = {}
     obj.time = 0;
     obj.stop ;
     obj.start = start;
     obj.stop1 = stop1;
     obj.reset = reset;
     
     return obj;   
}
var start = function() {
  var that = this;
       this.stop = setInterval(function() {
       that.time = that.time + 1;
       //console.log('Elapsed time: ' + that.time + 's.');
   }, 1000);
}

var stop1 = function() {
           clearInterval(this.stop);
          }

var reset = function() {
           var that = this;
           clearInterval(this.stop);
            that.time = 0;
          }
// var watch1 = makeStopwatch(); 
// Collapse











