(function(){

	'use strict';

	angular.module('ngClassifieds')
		.controller('newClassifiedsCtrl', function($scope, classifiedsFactory){
			
			var vm = this;
			vm.saveClassified = saveClassified;
		});

		function saveClassified(classified){
			if(classified){
				$scope.$emit('newClassified', classified);
			}
		}

})();