angular.module('contactListModule')
    .config(['$stateProvider', function($stateProvider){
        $stateProvider
            .state('editContact',{
                abstract: true,
                url: '/edit',
                template: '<div ui-view></div>'
            })
            .state('editContact.detail',{
                url: '/:id',
                templateUrl : 'templates/editContact.html',
                controller: 'ContactEditCtrl',
                onEnter: ['$stateParams', 'ContactListService', '$state', function($stateParams, ContactListService, $state){
                    if (!((ContactListService.getAll())[$stateParams.id])){
                        $state.go('home')
                    }
                }]
            })
    }])
