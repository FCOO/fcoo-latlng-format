/****************************************************************************
	fcoo-latlng-format.js,

	(c) 2017, FCOO

	https://github.com/FCOO/fcoo-latlng-format
	https://github.com/FCOO

****************************************************************************/

(function ($, window, document, undefined) {
	"use strict";

	//Create fcoo-namespace
    window.fcoo = window.fcoo || {};
    var ns = window.fcoo;

    /***********************************************************
    Set up and load latlng-format via fcoo.settings
    ***********************************************************/
    ns.globalSetting.add({
        id          : 'latlng',
        validator   : function( /*latlngFormatId*/ ){
                          //TODO Check for valid value
                          return true;
                      },
        applyFunc   : function( latlngFormatId ){
                          window.latLngFormat.setFormat( latlngFormatId );
                      },
        defaultValue: window.latLngFormat.LATLNGFORMAT_DMSS,
//HER        callApply   : true,
//HER        globalEvents: ns.events.LATLNGFORMATCHANGED

    });


    //Update the latlng-format when the number-format is changed
    ns.events.on( window.fcoo.events.NUMBERFORMATCHANGED, function(){
        ns.globalSetting.set({latlng: window.latLngFormat.options.formatId} );
    });


    //Create content for modal-form with settings
    var items = [];
    var dC = window.latLngFormat.options.degreeChar;
    $.each([
        //Degrees Minutes Seconds Decimal Seconds: N65d30'15.3"  d='degree sign'
        {
            id  : window.latLngFormat.LATLNGFORMAT_DMSS,
            text: {da:'Længde/Breddegrader <span class="text-monospace">(G'+dC+'M S.s)</span>', en:'Longitude/Latitude <span class="text-monospace">(D'+dC+'M\'S.s")</span>'}
        },
        //Degrees Decimal minutes                : N65d30.258'
        {
            id  : window.latLngFormat.LATLNGFORMAT_DMM,
            text: {da:'Længde/Breddegrader <span class="text-monospace">(G'+dC+'M.mmm\')</span>', en:'Longitude/Latitude <span class="text-monospace">(D'+dC+'M.mmm\')</span>'}
        },
        //Decimal degrees                        : N41.1234d
        {
            id  : window.latLngFormat.LATLNGFORMAT_DD,
            text: {da:'Længde/Breddegrader <span class="text-monospace">(G.gggg'+dC+')</span>', en:'Longitude/Latitude <span class="text-monospace">(D.dddd'+dC+')</span>'}
        },
        //UTM                                    : 29Q 286657 2492164
        {
            id  : window.latLngFormat.LATLNGFORMAT_UTM,
            text: 'Universal Transverse Mercator (UTM)'
        },
        //MGRS                                   : 02U PG 03727 09686
        {
            id  : window.latLngFormat.LATLNGFORMAT_MGRS,
            text: 'Military Grid Reference System (MGRS)'
        },
        //NAC                                    : HBV6R RG77T.
        {
            id  : window.latLngFormat.LATLNGFORMAT_NAC,
            text: 'Natural Area Code (NAC)'
        }],
        function(index, info){
            if (info.id !== undefined)
                items.push(info);
        }
    );

    ns.globalSetting.addModalContent(ns.events.LATLNGFORMATCHANGED, {
        id   : 'latlng',
        type : 'selectlist',
        items: items
    });

}(jQuery, this, document));