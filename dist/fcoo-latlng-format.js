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


    //Set first and last id for longitude-latitude-formats
    window.latLngFormat.LATLNGFORMAT_FIRST_LATLNG = window.latLngFormat.LATLNGFORMAT_DMSS;
    window.latLngFormat.LATLNGFORMAT_LAST_LATLNG = window.latLngFormat.LATLNGFORMAT_DD;

    /***********************************************************
    Set up and load latlng-format via fcoo.settings and add options.text to latlngFormat
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
        globalEvents: ns.events.LATLNGFORMATCHANGED

    });

    window.latLngFormat.options.text = {};

    //Create content for modal-form with settings
    var items = [];
    var dC = window.latLngFormat.options.degreeChar;
    $.each([
        //Degrees Minutes Seconds Decimal Seconds: N65d30'15.3"  d='degree sign'
        {
            id  : window.latLngFormat.LATLNGFORMAT_DMSS,
            text: {
                da:'Bredde/Længdegrader: <span class="text-monospace">G'+dC+'M S.s</span>',
                en:'Latitude/Longitude: <span class="text-monospace">D'+dC+'M\'S.s"</span>'
            }
        },
        //Degrees Decimal minutes                : N65d30.258'
        {
            id  : window.latLngFormat.LATLNGFORMAT_DMM,
            text: {
                da:'Bredde/Længdegrader: <span class="text-monospace">G'+dC+'M.mmm\'</span>',
                en:'Latitude/Longitude: <span class="text-monospace">D'+dC+'M.mmm\'</span>'
            }
        },
        //Decimal degrees                        : N41.1234d
        {
            id  : window.latLngFormat.LATLNGFORMAT_DD,
            text: {
                da:'Bredde/Længdegrader: <span class="text-monospace">G.gggg'+dC+'</span>',
                en:'Latitude/Longitude: <span class="text-monospace">D.dddd'+dC+'</span>'
            }
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
            if (info.id !== undefined){
                items.push(info);
                window.latLngFormat.options.text[info.id] = info.text;
            }
        }
    );

    ns.globalSetting.addModalContent(ns.events.LATLNGFORMATCHANGED, {
        id   : 'latlng',
        type : 'selectlist',
        items: items
    });

}(jQuery, this, document));