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

	const createEdge = function(style, length, text, value) {
		var x = 50;
		var y = 50;

		value['text'] = text;
		value['UMLtype'] = 'arrow';

		// Font
		value['text'] = ''
		value['fontsize'] = 12
		value['fontcolor'] = '#000000'
		
		// Arrow
		value['strokecolor'] = '#000000'
		value['strokewidth'] = 1

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
		createEdge('arrow', 100, "", {
			'dashed': 0,
			'endarrow': 'block',
			'endfill': 1
		});
	})

	addButton("dashedArrow", function() {
		createEdge('dashedArrow', 100, "", {
			'dashed': 1,
			'endarrow': 'open',
			'endfill': 1
		});
	})

	addButton("implementArrow", function() {
		createEdge('implementArrow', 100, "", {
			'dashed': 1,
			'endarrow': 'block',
			'endfill': 0
		});
	})

	addButton("generalizationArrow", function() {
		createEdge('generalizationArrow', 100, "", {
			'dashed': 0,
			'endarrow': 'block',
			'endfill': 0
		});
	})

	addButton("aggregationArrow", function() {
		createEdge('aggregationArrow', 100, "", {
			'dashed': 0,
			'endarrow': 'diamond',
			'endfill': 0
		});
	})

	setBtns(btnsObj);
}
