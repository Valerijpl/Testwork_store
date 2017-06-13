app.controller('MainController', ['$scope', function($scope) {
  $scope.title = 'Catalog';
  $scope.promo = 'Good prices!';
  $scope.status = 'list';
 $scope.products = [
  {
    name: 'Book',
    pubdate: new Date('2017', '03', '08'),
    image_url: 'http://njnj.ru/pix/voc/book.gif',
    price: 5.67,
    id: 1,
    selected: false,
    location: 'Locarno, Ukraine',
    seller: 'Ivan Ivanov'
  },
  {
    name: 'Knife',
    pubdate: new Date('2017', '03', '17'),
    image_url: 'https://images-na.ssl-images-amazon.com/images/I/61FfyVtoKgL._SL1500_.jpg',
    price: 89.67,
    id: 2,
    selected: false,
    location: 'Locarno, Ukraine',
    seller: 'Ivan Ivanov'
  },
  {
  name: 'Chair',
  pubdate: new Date('2017', '03', '17'),
  image_url: 'http://www.ikea.com/PIAimages/0238233_PE377690_S5.JPG',
  price: 30.41,
  id: 3,
  selected: false,
  location: 'Locarno, Ukraine',
  seller: 'Ivan Ivanov'
},
  {
    name: 'Milk',
    pubdate: new Date('2016', '08', '01'),
    image_url: 'http://www.legendairy.com.au/~/media/legendairy/images/lhp/milk-carton-thumbnail.jpg?h=600&la=en&w=600',
    price: 4.56,
    id: 4,
    selected: false,
    location: 'Locarno, Switzerland',
    seller: 'Fillip Morris'
  },
  {
    name: 'Hat',
    pubdate: new Date('2016', '08', '01'),
    image_url: 'http://www.villagehatshop.com/photos/product/giant/4511390S162374/-/size-m.jpg',
    price: 19.32,
    id: 5,
    selected: false,
    location: 'Paris, France',
    seller: 'France Lemagne'
  },
  {
    name: 'Meat',
    pubdate: new Date('2016', '08', '01'),
    image_url: 'http://rivesqualitymeats.com/wp-content/uploads/2013/08/rives_quality_meats_2013.jpg',
    price: 3.56,
    id: 6,
    selected: false,
    location: 'London, England',
    seller: 'John Johnson'
  }
];
$scope.ShowInfo = function(product){
  product.selected = true;
  $scope.status = 'view';
  return product;
};
$scope.RemoveAction = function(product){
  product.alertDanger = 'show';
};
$scope.canselRemove = function(product){
  product.alertDanger = 'close';
};
$scope.RemoveProduct = function(product){
  var index = $scope.products.indexOf(product);
	$scope.products.splice( index, 1 );
  $scope.status = 'deleted';
};
$scope.UpdateSectionMoveTo = function(product){
  product.selected = true;
  product.old_values = [];
  product.old_values.name = product.name;
  product.old_values.image_url = product.image_url;
  product.old_values.price = product.price;
  product.old_values.seller = product.seller;
  product.old_values.location = product.location;
  $scope.status = 'update';
  return product;
};
$scope.GetBack = function(product){
  product.selected = false;
  $scope.status = 'list';
  return product;
};
$scope.GetBackMain = function(){
  $scope.status = 'list';
};
$scope.Update = function(product){
  product.selected = false;
  $scope.status = 'list';
};
$scope.UpdateGetBack = function(product){
  product.name = product.old_values.name;
  product.image_url = product.old_values.image_url;
  product.price = product.old_values.price;
  product.seller = product.old_values.seller;
  product.location = product.old_values.location;
  $scope.status = 'list';
};
$scope.Create = function(){
  $scope.status = 'create';
};
$scope.create_new_product = function(product){
  var product = {
      name: product.name,
      pubdate: new Date().toLocaleDateString(),
      price: product.price,
      id: $scope.products.length + 1,
      image_url: product.image_url,
      selected: false,
      location: product.location,
      seller: product.seller
    };
  $scope.products.push(product);
  $scope.new_product = [];
  product.selected = false;
  $scope.status = 'list';
};
}]);

