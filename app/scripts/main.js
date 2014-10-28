var library = {
  books : [
    { title: 'Moby Dick', author: 'Herman Melville' },
    { title: 'Great Expectations', author: 'Charles Dickens'},
    { title: 'Where the Red Fern Grows', author: 'Wilson Rawls'}
  ]
};


// // grabbing our template string - DONT NEED THIS WITH HANDLEBARS
// var template = $('#book').html();

// create our handlebars function
// var rendered = Handlebars.compile(template);

var rendered_1 = Handlebars.templates['books'];

// append to my books element
$('#books').append( rendered_1(library) );


var footy = {
  teams : [
    { name: 'Tottenham Hotspur', stadium: 'White Hart Lane' },
    { name: 'Manchester United', stadium: 'Old Trafford'},
    { name: 'Chelsea', stadium: 'Stamford Bridge'}
  ]
};

var rendered_2 = Handlebars.templates['teams'];

$('#teams').append( rendered_2(library) );
