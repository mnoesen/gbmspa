/*gbmgbmspa
 * gbmspa.js
 * Root namegbmspace module
*/

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
