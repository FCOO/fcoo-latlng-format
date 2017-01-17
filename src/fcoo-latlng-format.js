/****************************************************************************
	fcoo-latlng-format.js, 

	(c) 2017, FCOO

	https://github.com/FCOO/fcoo-latlng-format
	https://github.com/FCOO

****************************************************************************/

(function ($, window/*, document, undefined*/) {
	"use strict";
	
	//Create fcoo-namespace
    window.fcoo = window.fcoo || {};
    var ns = window.fcoo; 

    /***********************************************************
    Set up and load latlng-format via fcoo.settings
    ***********************************************************/
    ns.settings.add({
        id          : 'latlng', 
        validator   : function( /*latlngFormatId*/ ){ 
                          //TODO Check for valid value                              
                          return true;      
                      },
        applyFunc   : function( latlngFormatId ){
                          window.latLngFormat.setFormat( latlngFormatId );
                      },
        defaultValue: window.latLngFormat.LATLNGFORMAT_DMSS,
        callApply   : true,
        globalEvents: 'latlngformatchanged'

    });

}(jQuery, this, document));