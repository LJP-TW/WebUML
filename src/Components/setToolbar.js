import { mxGeometry ,
	mxCell,
	mxPoint } from "mxgraph-js";

export default function setToolbar(graph, setBtns) {
	// Adds zoom buttons in top, left corner
	var btnsObj = [];

	const addButton = function (imgClass, funct) {
		var btnObj = {};
		btnObj['class'] = imgClass;
		btnObj['clickEvt'] = funct;
		btnsObj.push(btnObj);
	}

	const createEdge = function(style, length, text) {
		var x = 50;
		var y = 50;

		var value = {};
		value['text'] = text;
		value['UMLtype'] = 'arrow';

		const cell = new mxCell(value, new mxGeometry(0, 0, 0, 0), style);
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

	setBtns(btnsObj);
}
