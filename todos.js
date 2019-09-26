// generateID is a *function* that, when invoked, returns a number representing
// an ID.
var generateID = makeCounter();
// By using a counter, we have a function that will always generate a new number
// -- this is great for generating unique IDs for things.

// Try the following at your console:

// generateID(); // => ?

// What does it return? Try invoking generateID a few more times to be certain
// of how it works.
function map(array, f) { 
   var acc = []; 
   each(array, function(element, i) { 
         acc.push(f(element, i)); 
   });
      return acc; 
 }
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

// EXERCISE 1
var todos = [];
function todoFactory(task) {
  return {
    task: task,
    complete: false,            // todos always start as incomplete
    id: generateID()            // use generateID to make an ID for this todo
  };
}
var todo1 = todoFactory('sleeping');
var todo2= todoFactory('eating');
var todo3 = todoFactory('laughing');
todos.push(todo1,todo2,todo3);

// EXERCISE 2
function displayTodo(todo) {
  var todo_string = ''
  for (var i = 0; i < todos.length; i++) {
    if(todo === todos[i].id){
      todo_string += todos[i].task +' '+ todos[i].complete +' '+todos[i].id;
    }
  }
  return todo_string; 
}

// var myTodoList = makeTodoList(???);
function todoFunc(task,priority) {
  return {
    task: task,
    complete: false,
    priority:priority,            // todos always start as incomplete
    id: generateID()            // use generateID to make an ID for this todo
  };
}

// makeTodoList accepts an *array* of todo objects as a parameter, and returns
// an object with methods for manipulating todos
function makeTodoList(initialTodos) {
 todos = initialTodos;
  var new_str = '';
  var archived_arr = [];

  return {
    todos : todos,
    display: function() {
      // return reduce(todos,function(acc,element){
      //   return acc + displayTodo(element.id) + ' ';
      // })
      var result = '';
      for(var i=0; i < todos.length; i++) {
        result = result + displayTodo(todos[i]['id']) + '\n';
      } 
      return result;     
    },
    add: function(task) {
       var todo_adding = todoFactory(task);
       todos.push(todo_adding); 
    },
    // complete: function (id){
    //     for (var i = 0; i < todos.length; i++) {
    //         if(id === todos[i].id){
    //           todos[i].complete = true;
    //         }
    //       }  
    //   },
    toggleComplete: function (id){
        for (var i = 0; i < todos.length; i++) {
            if(id === todos[i].id){
              todos[i].complete = 'complete';
            }
          }  
      },
    clear: function(){
      for (var i = 0; i < todos.length; i++) {
          if(todos[i].complete === 'complete'){
              todos.splice(i, 1);
         }
       } 
     },
    archive: function(){
     for (var i = 0; i < todos.length; i++) {
        if(todos[i].complete === 'complete'){
          archived_arr.push(todos[i]);
        }
      } 
      return archived_arr;
    },
   unarchive: function(){
     for (var i = 0; i < archived_arr.length; i++) {
        todos.push(archived_arr[i]);
      } 
      return todos;
   },
   displayArchived: function(){
      var result = '';
      for (var i = 0; i < archived_arr.length; i++) {
        result = result + archived_arr[i].id+' '+archived_arr[i].task+' '+archived_arr[i].complete+ '\n';
      } 
      return result;
    },
   clearArchived: function(){
     archived_arr = [];
     return archived_arr;
    },
   move: function(from,to) {
       var new_arr = [];
       new_arr.push(todos.splice(from, 1));//[0];
       todos.splice(to, 0, new_arr[0][0]);
    },
    priority: function(){
        todos.sort(function(a, b){
          return b.priority-a.priority})
    }
  };
}

////Q5/////


// =============================================================================
// HELPER FUNCTIONS

function makeCounter() {
  var count = 0;
  return function() {
    var t = count;
    count = count + 1;
    return t;
  };
}
