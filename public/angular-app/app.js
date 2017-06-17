angular.module('meanhotel', ['ngRoute', 'angular-jwt']).config(config).run(run);

function config($httpProvider, $routeProvider, $locationProvider) {
  $httpProvider.interceptors.push('AuthInterceptor');
  $locationProvider.html5Mode(false).hashPrefix('');
  $routeProvider
    .when('/', {
      templateUrl: 'angular-app/main/main.html',
      access: {
        restricted: false
      }
    })
    /*.when('/hotels', {
      templateUrl: 'angular-app/hotel-list/hotels.html',
      controller: HotelsController,
      controllerAs: 'vm',
      access: {
        restricted: false
      }
    })
    .when('/hotel/:id', {
      templateUrl: 'angular-app/hotel-display/hotel.html',
      controller: HotelController,
      controllerAs: 'vm',
      access: {
        restricted: false
      }
    })*/
    .when('/register', {
      templateUrl: 'angular-app/register/register.html',
      controller: RegisterController,
      controllerAs: 'vm',
      access: {
        restricted: false
      }
    })
    .when('/login', {
      templateUrl: 'angular-app/login/login.html',
      //controller: loginController,
      controllerAs: 'vm',
      access: {
        restricted: false
      }
    })
    .when('/profile', {
      templateUrl: 'angular-app/profile/profile.html',
      controller: PLoginController,
      controllerAs: 'vm',
      access: {
        restricted: true
      }
    })
    .when('/scrape', {
      templateUrl: 'angular-app/scrape/scrape.html',
      controller: Scrapecontroller,
      controllerAs: 'vm',
      access: {
        restricted: true
      }
    })
    .when('/store', {
      templateUrl: 'angular-app/Bot-Store/botstore.html',
      controller: BotstoreController,
      controllerAs: 'vm',
      access: {
        restricted: true
      }
    })
    .when('/infostore', {
      templateUrl: 'angular-app/infobot/infobot.html',
      controller: infocontroller,
      controllerAs: 'vm',
      access: {
        restricted: true
      }
    })
    .otherwise({
      redirectTo: '/'
    });
}

function run($rootScope, $location, $window, AuthFactory) {
  $rootScope.$on('$routeChangeStart', function(event, nextRoute, currentRoute) {
    if (nextRoute.access !== undefined && nextRoute.access.restricted && !$window.sessionStorage.token && !AuthFactory.isLoggedIn) {
      event.preventDefault();
      $location.path('/');
    }
  });
}
