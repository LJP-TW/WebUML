import { mxUtils, 
	mxEvent } from "mxgraph-js";

export default function ZoomButtons(graph) {
	// Adds zoom buttons in top, left corner
	var buttons = document.createElement("div");

	function addButton(imgClass, funct) {
		var btn = document.createElement("img");
		btn.classList.add("sidetool");
		btn.classList.add(imgClass);

		mxEvent.addListener(btn, "click", function(evt) {
			funct();
			mxEvent.consume(evt);
		});

		buttons.appendChild(btn);
	}

	addButton("navigate_plus", function() {
		graph.zoomIn();
	});

	addButton("navigate_minus", function() {
		graph.zoomOut();
	});

	const sideToolbar = document.getElementById("toolbar");
	sideToolbar.appendChild(buttons);
}
