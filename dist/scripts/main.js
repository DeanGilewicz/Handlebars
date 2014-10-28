(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['books'] = template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "  <li> "
    + escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + " by "
    + escapeExpression(((helper = (helper = helpers.author || (depth0 != null ? depth0.author : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"author","hash":{},"data":data}) : helper)))
    + " </li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.books : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true});
templates['teams'] = template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "  <li> "
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + " play at "
    + escapeExpression(((helper = (helper = helpers.stadium || (depth0 != null ? depth0.stadium : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"stadium","hash":{},"data":data}) : helper)))
    + " </li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.teams : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true});
})();

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
