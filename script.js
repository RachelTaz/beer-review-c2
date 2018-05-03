var beers = [];

var renderBeers = function(){
    $('.beers-list').empty();
    for (i =0; i< beers.length; i++) {
        $('.beers-list').append('<li>' + beers[i].name +'</li>');
    };
    };

$('.post-beer').on('click', function () {
    addBeer($('.beer-input').val(), $('.category-input').val() );
    renderBeers();   
});

var addBeer = function(name, category){
var beerInfo = {
    name: name,
    category: category
};
beers.push(beerInfo);
}


