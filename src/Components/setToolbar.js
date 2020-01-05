import {
	mxGeometry,
	mxCell,
	mxPoint,
	mxUtils,
	mxXmlCanvas2D,
	mxImageExport,
	mxXmlRequest,
	mxCodec
} from "mxgraph-js";
import html2canvas from 'html2canvas';

export default function setToolbar(graph, setBtns) {
	// Adds zoom buttons in top, left corner
	var btnsObj = [];

	const addButton = function (imgClass, funct) {
		var btnObj = {};
		btnObj['class'] = imgClass;
		btnObj['clickEvt'] = funct;
		btnsObj.push(btnObj);
	}

	const createEdge = function (style, length, text, value) {
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

	const Test = function () {
		var xmlString = '<root><mxCell id="0"/><mxCell id="1" parent="0"/><mxCell id="2" style="begin" vertex="1" parent="1"><Object fillcolor="#000000" strokecolor="#000000" strokewidth="1" opacity="100" UMLtype="begin" as="value"/><mxGeometry x="640" y="360" width="30" height="30" as="geometry"/></mxCell><mxCell id="3" style="end" vertex="1" parent="1"><Object fillcolor="#000000" strokecolor="#FF0000" strokewidth="2" opacity="100" UMLtype="end" as="value"/><mxGeometry x="750" y="360" width="30" height="30" as="geometry"/></mxCell><mxCell id="4" style="exitX=1;exitY=0.5;" edge="1" parent="1" source="2" target="3"><Object text="" UMLtype="arrow" fontsize="12" fontcolor="#000000" strokecolor="#000000" strokewidth="1" dashed="0" endarrow="block" endfill="1" as="value"/><mxGeometry relative="1" as="geometry"/></mxCell></root>';
		var doc = mxUtils.parseXml(xmlString);
		var codec = new mxCodec(doc);
		var elt = doc.documentElement.firstChild;
		var cells = [];

		while (elt != null) {
			var a = codec.decodeCell(elt);
			cells.push(a);
			console.log(a);
			elt = elt.nextSibling;
		}

		graph.addCells(cells);
	}

	const SaveAsXml = function (xml) {
		// Output xml.xml file
		/*
		/ code here
		*/
	}

	addButton("screenshoot", function () {
		html2canvas(document.querySelector("#canvas")).then(canvas => {
			var download = document.createElement('a');
			download.href = canvas.toDataURL("image/png");
			download.download = 'WebUML.png';
			download.click();
		});
	});

	addButton("save", function () {
		var encoder = new mxCodec();
		var result = encoder.encode(graph.getModel());
		var xml = mxUtils.getXml(result);
		xml = xml.substring(xml.indexOf("<mxGraphModel>") + "<mxGraphModel>".length, xml.indexOf("</mxGraphModel>"));
		SaveAsXml(xml);
		console.log(xml);
	});

	addButton("test", function () {
		Test();
	});

	addButton("navigate_plus", function () {
		graph.zoomIn();
	});

	addButton("navigate_minus", function () {
		graph.zoomOut();
	});

	addButton("arrow", function () {
		createEdge('arrow', 100, "", {
			'dashed': 0,
			'endarrow': 'block',
			'endfill': 1
		});
	})

	addButton("dashedArrow", function () {
		createEdge('dashedArrow', 100, "", {
			'dashed': 1,
			'endarrow': 'open',
			'endfill': 1
		});
	})

	addButton("implementArrow", function () {
		createEdge('implementArrow', 100, "", {
			'dashed': 1,
			'endarrow': 'block',
			'endfill': 0
		});
	})

	addButton("generalizationArrow", function () {
		createEdge('generalizationArrow', 100, "", {
			'dashed': 0,
			'endarrow': 'block',
			'endfill': 0
		});
	})

	addButton("aggregationArrow", function () {
		createEdge('aggregationArrow', 100, "", {
			'dashed': 0,
			'endarrow': 'diamond',
			'endfill': 0
		});
	})

	setBtns(btnsObj);
}
