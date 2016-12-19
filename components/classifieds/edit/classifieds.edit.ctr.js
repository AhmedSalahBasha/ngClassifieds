(function(){

	'use strict';

	angular.module('ngClassifieds')
		.controller('editClassifiedsCtrl', function($scope, classifiedsFactory){
			
			var vm = this;
			vm.classifieds = classifiedsFactory.ref;
			vm.saveEdit = saveEdit;
			vm.classified = vm.classifieds.$getRecord($state.params.id);
		});

		function saveEdit(){
			vm.classifieds.$save(vm.classified).then(function(){
				$scope.$emit('editSaved');
			});					
		}

})();