angular.module('contactListModule')
    .controller('ContactEditCtrl', ['$state', '$scope', '$stateParams', 'ContactListService', function($state, $scope, $stateParams, ContactListService){
    $scope.id = $stateParams.id;
    $scope.editItem = Object.assign({}, ContactListService.getForKey($scope.id));
    $scope.editContact = function(key, newUser, newPhone, newEmail){
        if (ContactListService.editContact(key, newUser, newPhone, newEmail)){
            $state.go('home');
        }
    };
    $scope.deleteContact = function(key){
        ContactListService.removeContact(key);
        $state.go('home');
    }
    $scope.goHome = function(){
        $state.go('home');
    };
    $scope.formValid = ContactListService.formIsValid;
    $scope.nameIsValid = function(id, name){
        if (id === name){
            return true;
        } else {
            return ContactListService.nameIsValid(name);
        }
    }
}]);
