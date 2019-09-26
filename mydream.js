 /////HTML and Javascript Interaction
///Q4
 function each (arr, callback) {
   for(var i=0;i<arr.length;i++){
     callback(arr[i],i);
   }
}
//document.getElementsByClassName("box");
//Q5
var boxes =  document.getElementsByClassName("box");
 each (boxes, function(element, i){
 	element.textContent = "Hello World";

 })
///Q6
document.getElementById('myimg').style.height= "300px";

///Q7
//working with pair (Fatom)
var cities = ['San Francisco', 'Cairo', 'Tokyo', 'Nairobi'];
var countries = document.getElementsByClassName('country');
each(countries, function(element, index) {
    each(cities, function(city, i){
        if(i === index)
            element.textContent = city;
        else if(index === countries.length - 1){
            element.textContent = '';
        }        
    });
})


/////////////JQuery///////////
$('body').css('background-color','red')
$('h1').css('color','blue')
$('.holder').css('border-color','black')
$('ul').children().css('font-weight','bold')
$('h1').next().css('color','green')
$('#secret').css("display", "none");
$('#secret').css("display", "block");
$('#change-me').text('new sentence');
$('#change-me').append(' new text');
$('#change-me').replaceWith('<p>paragraph 1</p> <p>paragraph 2</p>')
$('#change-me').append('<p>new paragraph</p>');
$('li').text('new sentence')
$('li').append('new text')
$('#everything').append('<ol><li>item1</li><li>item1</li><li>item1</li></ol>')

//////Q2
var new_div = $('<div class="important">Got a new div coming in here!</div>')
new_div.css('color','white').attr('id','primary').text('Hi, Im new here');
$('body').append(new_div) 
new_div.addClass('hello');

















    
