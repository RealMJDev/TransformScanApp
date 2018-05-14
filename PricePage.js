/*//////////////////////////
    This Is The Product List
////////////////////////////*/
var theProductsList = [{
    code: 'CH097/20',
    description: 'CHANDELIER 3 TIER FADED AMBER GLASS 20LI',
    price: '5265'
},{
    code: 'GL8S112WP',
    description: '12 WAY SURFACE DB W/PROOF DIN RAIL',
    price: '407.40'
},{
    code: 'GL8S118WP',
    description: '18 WAY SURFACE DB W/PROOF DIN RAIL',
    price: '637.65'
}
]

/*//////////////////////////////////////
    This Is The Search / Filter Function
////////////////////////////////////////*/
var searchKeyword = 'g';

var lowerCaseKeyword = searchKeyword.toLowerCase();

var SEARCH_PROPERTIES = ['code', 'description', 'price'];

var filteredProducts = theTransformProducts.filter(function(product) {
    return SEARCH_PROPERTIES.some(function(prop) {
        return product.hasOwnProperty(prop) && String(product[prop]).toLowerCase().indexOf(lowerCaseKeyword) >= 0
    })
})

document.write(filteredProducts)
