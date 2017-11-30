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
/*global $, gbmspa, getComputedStyle */

gbmspa.chat = (function () {
//-------- BEGIN MODULE SCOPE VARIABLES --------
var 
	configMap = {
		main_html : String()
			/*+ '<div style="padding:1em; color:#fff;">'
			+ 'Submit a request to building maintenance'
			+ '</div>', */
			+ '<div class="gbmspa-chat">'
			   + '<div class="gbmspa-chat-head">'
			   + '<div class="gbmspa-chat-head-toggle">+</div>'
			   + '<div class="gbmspa-chat-head-title">'
			     + 'Chat'
			   + '<div>'  
			  + '<div>'
			  + '<div class="gbmspa-chat-closer">x</div>'
			  + '<div class="gbmspa-chat-sizer">'
			    + '<div class="gbmspa-chat-msgs"></div>' 
			    + '<div class="gbmspa-chat-box">'
			      + '<input type="text"/>'
			      + '<div>send</div>'
			    + '</div>' 
			  + '</div>'
	    + '</div>',
			settable_map : {
				slider_open_time    : true, 
				slider_close_time   : true, 
				slider_opened_em    : true, 
				slider_closed_em    : true, 
				slider_opened_title : true, 
				slider_closed_title : true, 

				chat_model      : true, 
				people_model    : true, 
				set_chat_anchor : true, 
			},

			slider_open_time : 250,
			slider_close_time : 250, 
			slider_opened_em : 16, 
			slider_closed_em : 2,
			slider_opened_title : 'Click to close',
			slider_closed_title : 'Click to open',

			chat_model : null, 
			people_model : null, 
			set_chat_anchor : null
	},
	stateMap = { 
		$append_target   : null,
		position_type    : 'closed',
		px_per_em        : 0,
		slider_hidden_px : 0, 
		slider_closed_px : 0, 
		slider_opened_px : 0
	},	
	jqueryMap = {},

	setJqueryMap, getEmSize, setPxSizes, setSliderPosition, 
	onClickToggle, configModule, initModule
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
// Example    : gbmspa.chat.initModule( $('div_id') );
// Purpose    : Directs Chat to offer its capability to the user 
// Arguments  : 
//  * $append_target (example: $('#div_id')).
//     A jQuery collection that should represent a single 
//     DOM container
// Action     : 
//   Appends the chat slider to the provided container and 
//   fills it with HTML content. It then initializes elements, 
//   events, and handlers to provide the user with a chat
//   room interface
// Returns    : true on success, false on failure 
// Throws     : none 
//
initModule = function ( $container ) {
	$container.html( configMap.main_html );
	stateMap.$container = $container ; 
	setJqueryMap();
	return true; 
};
// End public method /initModule/
//
// Begin public method /setSliderPosition/
//
// Example   : gbmspa.chat.setSliderPosition( 'closed' );
// Purpose   : Ensure chat slider is in the requested area 
// Arguments : 
//   * position_type - enum('closed', 'opened' or 'hidden')
//   * callback - optional callback at end of animation
//     (callback receives slider DOM element as argument)
// Action    :
//   Leaves slider in current state if it matches requested,
//   otherwise animate to requested state.  
// Returns   : 
//   * true  - requested state achieved 
//   * false - requested state not achieved 
// Throws    : none
//
// return public methods 
return {
	configModule : configModule,
	initModule   : initModule
};
//---------- END PUBLIC METHODS ---------------
}());