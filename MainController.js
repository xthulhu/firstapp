app.controller('MainController', ['$scope', function($scope) { 
  $scope.title = 'Gas the Kikes'; 
  $scope.promo = 'Race-war now';
  $scope.products = [
  	{ 
    	name: 'The Book of Trees', 
    	price: 19, 
    	pubdate: new Date('2014', '03', '08'), 
    	cover: 'img/the-book-of-trees.jpg',
    	likes: 0,
      dislikes: 0
  	}, 
  	{ 
    	name: 'Program or be Programmed', 
    	price: 8, 
    	pubdate: new Date('2013', '08', '01'), 
    	cover: 'img/program-or-be-programmed.jpg',
    	likes: 0,
      dislikes: 0
  	}, 
  	{ 
    	name: 'Mein Kampf', 
    	price: 14.88, 
    	pubdate: new Date('1924', '07', '08'), 
    	cover: 'https://static1.squarespace.com/static/535746bae4b049723f707ddf/t/53630f6fe4b09796c4c75d56/1399000946908/Mein+Kampf',
    	likes: 0 ,
      dislikes: 0
  	}, 
  	{ 
    	name: 'Ready Player One', 
    	price: 7.99, 
    	pubdate: new Date('2011', '08', '16'), 
    	cover: 'http://upload.wikimedia.org/wikipedia/en/a/a4/Ready_Player_One_cover.jpg',
    	likes: 0 ,
      dislikes: 0
  	}
  ];
  $scope.minusOne = function(index) { 
  	$scope.products[index].dislikes += 1; 
	};
  $scope.plusOne = function(index) { 
  	$scope.products[index].likes += 1; 
	};
}]);
