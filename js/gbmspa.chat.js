/*
 * gbmspa.chat.js
 * Chat feature module for GBM SPA
*/

/*jslint          browser : true, continue : true, 
	devel  : true, indent : 2,    maxerr   : 50, 
	newcap : true, nomen  : true, plusplus : true, 
	regexp : true, sloppy : true, vars     : false, 
	white  : true
*/
/*global $, gbmspa */

gbmspa.chat = (function () {
//-------- BEGIN MODULE SCOPE VARIABLES --------
var 
	configMap = {
		main_html : String()
			+ '<div style="padding:1em; color:#fff;">'
			+ 'Submit a request to building maintenance'
			+ '</div>',
			settable_map : {},
	},
	stateMap = { $container : null },
	jqueryMap = {},

	setJqueryMap, configModule, initModule
	;
//------- END MODULE SCOPE VARIABLES ----------

//--------- BEGIN UTILITY METHODS -------------
//
//---------- END UTILITY METHODS --------------

//---------- BEGIN DOM METHODS ----------------
// Begin DOM method /setJqueryMap/
setJqueryMap = function () {
	var $container = stateMap.$container; 
	jqueryMap = { $container : $container };
};
// End DOM method /setJqueryMap/
//----------- END DOM METHODS -----------------

//--------- BEGIN EVENT HANDLERS --------------
//
//---------- END EVENT HANDLERS ---------------

//--------- BEGIN PUBLIC METHODS --------------
// Begin public method /configModule/
// Example   : gbmspa.chat.configModule({ slider_open_em : 18 });
// Purpose   : Configure the module prior to initialization
// Arguments : A map of settable keys and values 
//    * set_char_anchor - a callback to modify the URI anchor to 
//       indicate open or closed state. This callback must return
//       false if the requested state cannot be met. 
//    * chat_model - the chat model object provides methods to 
//        interact with our instant messaging 
//    * people_model - the people model object which provides 
//        methods to manage the list of people the model maintains.
//    * slider_* settings.  All these are optional scalars.
//        See mapConfig.settable_map for a full list
//        Example: slider_open_em is the open height in em's. 
// Action    :
//   The internal configuration data structure (configMap) is 
//   updated with provided arguments.  No other actions are taken. 
// Returns   : true 
// Throws    : Javascript error object and stack trace on 
//               unacceptable or missing arguments.  
//
configModule = function ( input_map ) {
	gbmspa.util.setConfigMap({
		input_map    : input_map,
		settable_map : configMap.settable_map,
		configMap    : configMap
});
	return true; 
};
// End public method /configModule/

// Begin public method /initModule/
// Purpose    : Initializes module 
// Arguments  : 
//  * $container the jquery element used by this feature 
// Returns    : true
// Throws     : none 
//
initModule = function ( $container ) {
	$container.html( configMap.main_html );
	stateMap.$container = $container ; 
	setJqueryMap();
	return true; 
};
// End public method /initModule/

// return public methods 
return {
	configModule : configModule,
	initModule   : initModule
};
//---------- END PUBLIC METHODS ---------------
}());