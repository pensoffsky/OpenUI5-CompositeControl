// Provides default renderer for control view.CompositeControl
sap.ui.define(['jquery.sap.global'],
	function(jQuery) {
		"use strict";

		var CompositeControlRenderer = {};

		CompositeControlRenderer.render = function(oRm, oControl) {
			oRm.write('<div');
			oRm.writeControlData(oControl);
			oRm.addClass('myFancyCompositeControl');
			oRm.writeClasses();

			oRm.write('>');

			oRm.renderControl(oControl.getControlToRender());
			
			oRm.write('</div>');
		};


		return CompositeControlRenderer;

	}, /* bExport= */ true);
