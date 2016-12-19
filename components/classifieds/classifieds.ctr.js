(function(){

	'use strict';

	angular.module("ngClassifieds")
	.controller("classifiedsCtrl", function($scope, $state, $http, classifiedsFactory){

		var vm = this;
		vm.openSidebar = openSidebar;
		vm.saveClassified = saveClassified;
		vm.editClassified = editClassified;
		vm.saveEdit = saveEdit;
		vm.deleteClassified = deleteClassified;

		vm.classifieds;
		vm.categories;
		vm.classified;
		vm.editing;

		vm.classifieds = classifiedsFactory.ref;
		vm.classifieds.$loaded().then(function(classifieds){
			vm.categories = getCategories(classifieds);
		});

		$scope.$on('newClassified', function(event, classified){
			vm.classifieds.$add(classified);
			vm.classified = { };
		});

		$scope.$on('editSaved', function(event){
			$state.go('classifieds.edit');
		});

		function openSidebar(){
			$state.go('classifieds.new');
		}

		function saveClassified(classified){
			if(classified){
				vm.classifieds.$add(classified);
				vm.classified = { };
			}
		}

		function editClassified(classified){
			$state.go('classifieds.edit', {
				id: classified.$id
			});
		}

		function saveEdit(){
			vm.editing = false;
			vm.classified = { };
		}

		function deleteClassified(classified){
			var index = vm.classifieds.indexOf(classified);
			if(confirm("Are you sure?")){
				vm.classifieds.splice(index, 1);
			}
		}

		function getCategories(classifieds){
			var categories = [];

			angular.forEach(classifieds, function(item){
				angular.forEach(item.categories, function(category){
					categories.push(category);
				});
			});

			return _.uniq(categories);
		}

	});
	
})();


	

