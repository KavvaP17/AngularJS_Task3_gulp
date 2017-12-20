angular.module('contactListModule')
    .controller('HomeCtrl', ['$scope','ContactListService',( $scope, ContactListService) => {
        $scope.filterValue = '';
        $scope.contactsList = ContactListService.getAll();
        $scope.objToArray = ContactListService.objToArray;
    }]
    )
