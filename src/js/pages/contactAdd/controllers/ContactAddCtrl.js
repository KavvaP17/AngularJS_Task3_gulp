angular.module('contactListModule')
    .controller('ContactAddCtrl', ['$scope', '$state', 'ContactListService', function($scope, $state, ContactListService){
        $scope.addContact = function(newName, newPhone, newEmail){
            if (ContactListService.addContact(newName, newPhone, newEmail)){
                $state.go('home');
            }
        };
        $scope.goHome = function(){
            $state.go('home');
        };

        $scope.nameIsValid = ContactListService.nameIsValid;

        $scope.addFormValid = function(name, phone, email){
            if (ContactListService.formIsValid(name, phone, email)){
                return !$scope.nameIsValid(name);
            }
            return true;
        }

    }
]);
