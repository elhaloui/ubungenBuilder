// Libs
import 'angular-animate';
import 'angular-meteor';
import 'angular-sanitize';
import 'angular-ui-router';
import 'ionic-scripts';
import Angular from 'angular';
import Loader from 'angular-ecmascript/module-loader';
import { Meteor } from 'meteor/meteor';

// Modules
import RoutesConfig from '../routes';

const App='ubungenBuilder';

Angular.module(App,[
	'angular-meteor',
	'ionic']);

new Loader(App)
	.load(RoutesConfig);

// Startup
var onReady=()=>{
Angular.bootstrap(document,[App]);
};

if(Meteor.isCordova){
	Angular.element(document).on('deviceready',onReady);
}
else
{
	Angular.element(document).ready(onReady);
}