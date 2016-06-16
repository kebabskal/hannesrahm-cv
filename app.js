/* 
	Hej!
	Kommer du ofta hit? ;D
*/
var app = angular.module('cvApp', []);
app.controller('cvController', function($scope, $interval) {
	$scope.experience = [
		{ 
			start: 2001,
			end: 2003,
			title: 'Henrix',
			long: 'Henrix Grafiska AB',
			tooltip: ['Grafisk design', 'Web', 'Print'],
		},
		{ 
			start: 2003,
			end: 2003,
			title: 'DGC',
			long: 'Diamond Graphic Consulting',
			tooltip: ['3D Grafik', 'Animation'],
		},
		{ 
			start: 2004,
			end: 2004,
			title: 'FotoDesign',
			long: 'FotoDesign',
			tooltip: ['Fotoretusch', 'Fotoprint', 'Framkallning'],
		},
		{ 
			start: 2004,
			end: 2013,
			title: 'Henrix',
			long: 'Henrix Grafiska AB',
			tooltip: ['Grafisk design', 'Web', 'Print'],
		},
		{ 
			start: 2013,
			end: 2016,
			title: 'Procera',
			long: 'Procera Networks AB',
			tooltip: ['Grafisk design', 'Webutveckling', 'Applikationsdesign', 'SQL'],
		},
	];


	function updateAge() {
		var now = moment();
		var birth = moment('1982-07-08 20:11');

		var years = now.diff(birth, 'years');
		var seconds = now.diff(birth, 'seconds');

		$scope.age = years;
	}

	$interval(updateAge, 1000);
	updateAge();
});

app.directive('stars', function() {
	return {
		scope: { value: '@', },
		template: '<div ng-repeat="i in [0, 1, 2]" class="star" ng-class="{ active: i < value }"></div>',
	};
});