import { mxEvent,
	mxGeometry ,
	mxCell,
	mxPoint } from "mxgraph-js";

export default function setToolbar(graph) {
	// Adds zoom buttons in top, left corner
	var buttons = document.createElement("div");

	const addButton = function (imgClass, funct) {
		var btn = document.createElement("img");
		btn.classList.add("sidetool");
		btn.classList.add(imgClass);

		mxEvent.addListener(btn, "click", function(evt) {
			funct();
			mxEvent.consume(evt);
		});

		buttons.appendChild(btn);
	}

	const createEdge = function(style, length, text) {
		var x = 50;
		var y = 50;
		const cell = new mxCell(text, new mxGeometry(0, 0, 0, 0), style);
		cell.geometry.setTerminalPoint(new mxPoint(x, y), true);
		cell.geometry.setTerminalPoint(new mxPoint(x + length, y), false);
		cell.geometry.relative = false;
		cell.edge = true;
		graph.addCell(cell);
	}

	addButton("navigate_plus", function() {
		graph.zoomIn();
	});

	addButton("navigate_minus", function() {
		graph.zoomOut();
	});

	addButton("arrow", function() {
		createEdge('arrow', 100, "");
	})

	addButton("dashedArrow", function() {
		createEdge('dashedArrow', 100, "");
	})

	addButton("implementArrow", function() {
		createEdge('implementArrow', 100, "");
	})

	addButton("generalizationArrow", function() {
		createEdge('generalizationArrow', 100, "");
	})

	addButton("aggregationArrow", function() {
		createEdge('aggregationArrow', 100, "");
	})

	const sideToolbar = document.getElementById("toolbar");
	sideToolbar.appendChild(buttons);
}
