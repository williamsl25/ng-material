angular.module('MyApp', [ 'ngMaterial', 'users' ])
  // .run(function(){
  //   console.log('MyApp is ready!');
    .config(function( $mdIconProvider, $mdThemingProvider ){
      console.log('MyApp is ready!');
        // Register the user `avatar` icons
        $mdIconProvider.defaultIconSet("./svg/avatars.svg", 128)
        $mdIconProvider.icon("share", "./svg/share.svg", 24)
        $mdIconProvider.icon("menu", "./svg/menu.svg", 24)
        $mdIconProvider.icon("google_plus", "./svg/google_plus.svg" , 512)
        $mdIconProvider.icon("hangouts", "./svg/hangouts.svg"    , 512)
        $mdIconProvider.icon("twitter", "./svg/twitter.svg"     , 512)
        $mdIconProvider.icon("phone", "./svg/phone.svg"       , 512)

        $mdThemingProvider.theme('default')
        .primaryPalette('indigo')
        .accentPalette('blue');


  });
