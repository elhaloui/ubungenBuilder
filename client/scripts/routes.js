import { Config } from 'angular-ecmascript/module-helpers';
export default class RoutesConfig extends Config
{
	configure(){
		this.$stateProvider
	.state('menu', {
    url: '/menu',
    templateUrl: 'client/templates/menu.html',
    abstract:true,
         })
	.state('menu.level', {
    url: '/level',
    views: {
      'menu.level': {
        templateUrl: 'client/templates/level.html',
      },
      

    }
  });


		this.$urlRouterProvider.otherwise('menu/level');
	}
}

RoutesConfig.$inject=['$stateProvider', '$urlRouterProvider'];