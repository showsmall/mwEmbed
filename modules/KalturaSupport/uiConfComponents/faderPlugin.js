/**
* Adds fader plugin support
* Read the fader plugin from the UIConf
* <Plugin id="fader" width="0%" height="0%" includeInLayout="false" target="{controllersVbox}" hoverTarget="{PlayerHolder}" duration="0.5"/>
*/
$j( mw ).bind( 'newEmbedPlayerEvent', function( event, embedPlayer ){
	$j( embedPlayer ).bind( 'KalturaSupport.checkUiConf', function( event, $uiConf, callback ){	
		faderPlugin( embedPlayer, $uiConf );		
		callback();
		
	})
});
var faderPlugin = function(embedPlayer, $uiConf){
	var $fader = $uiConf.find("Plugin#fader");
	if( $fader.attr('target') === "{controllersVbox}" ){
		embedPlayer.overlaycontrols = true;
	} else {
		embedPlayer.overlaycontrols = false;
	}	
}