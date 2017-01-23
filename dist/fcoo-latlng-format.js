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


    //Update the latlng-format when the number-format is changed
    ns.events.on( 'numberformatchanged', function(){
        ns.settings.set('latlng', window.latLngFormat.options.formatId );
    });

/* TODO - if N,S,E,W need to be in local language (da: NS�V)
    //Update the latlng-format when the language is changed
    ns.events.on( 'languagechanged', function(){
        ns.settings.set('latlng', window.latLngFormat.options.formatId );
    });
*/
}(jQuery, this, document));