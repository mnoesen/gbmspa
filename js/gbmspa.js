/*gbmgbmspa
 * gbmspa.js
 * Root namegbmspace module
*/

//NOTE: There is an MVC style framework to this web app.
//  Most of the code one might exepct to find here 
//  can be found in gbmspa.shell.js (referred to as "the shell").

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, gbmspa */

var gbmspa = (function () {
  var initModule = function ( $container ) {
    gbmspa.shell.initModule( $container );
  };

  return { initModule: initModule };
}());
