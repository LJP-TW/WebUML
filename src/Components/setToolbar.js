import {
	mxGeometry,
	mxCell,
	mxPoint,
	mxUtils,
	mxCodec
} from "mxgraph-js";
import html2canvas from 'html2canvas';
import 'js-file-download';

export default function setToolbar(graph, setBtns) {
	// Adds zoom buttons in top, left corner
	var btnsObj = [];
	var fileUploader;
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

	const DrawGraph = function (xmlString) {
		//var xmlString = '<root><mxCell id="0"/><mxCell id="1" parent="0"/><mxCell id="2" style="text" vertex="1" parent="1"><Object text="Text" fontsize="12" fontcolor="#000000" UMLtype="text" as="value"/><mxGeometry x="510" y="240" width="50" height="30" as="geometry"/></mxCell><mxCell id="3" style="rectangle" vertex="1" parent="1"><Object text="" fontsize="12" fontcolor="#000000" fillcolor="#FFFFFF" strokecolor="#000000" strokewidth="1" opacity="100" UMLtype="rectangle" as="value"/><mxGeometry x="710" y="330" width="120" height="80" as="geometry"/></mxCell></root>';
		var doc = mxUtils.parseXml(xmlString);
		var codec = new mxCodec(doc);
		var elt = doc.documentElement.firstChild;
		var cells = [];

		while (elt != null) {
			var a = codec.decodeCell(elt);
			cells.push(a);
			elt = elt.nextSibling;
		}
		graph.addCells(cells);
	}

	const SaveXml = function (xml) {
		// file name
		var filename = document.getElementById('filename').value;
		if(filename == ''){
			filename = 'WebUML';
		}
		var fileDownload = require('js-file-download');
		fileDownload(xml, filename+'.xml');
	}

	const ReadXml = function (){
		var fileUploader = document.createElement('input');
		fileUploader.type = 'file';
		
		fileUploader.click();
		var fileReader = new FileReader();
		fileUploader.addEventListener("change", function(event) {
			var xmlType = /xml.*/;
			if (this.files.length > 0 && this.files[0].type.match(xmlType)) {
			  fileReader.readAsText(this.files[0]);
			}else{
				alert('File Type Error');
				return;
			}
		}, false);
		fileReader.onload = function(e) {
			DrawGraph(this.result);
			alert('Load successed!');
		}
	}

	addButton("screenshoot", function () {
		var filename = document.getElementById('filename').value;
		if(filename == ''){
			filename = 'WebUML';
		}
		html2canvas(document.querySelector("#canvas")).then(canvas => {
			var download = document.createElement('a');
			download.href = canvas.toDataURL("image/png");
			download.download = filename+'.png';
			download.click();
		});
	});

	addButton("save", function () {
		var encoder = new mxCodec();
		var result = encoder.encode(graph.getModel());
		var xml = mxUtils.getXml(result);
		xml = xml.substring(xml.indexOf("<mxGraphModel>") + "<mxGraphModel>".length, xml.indexOf("</mxGraphModel>"));
		SaveXml(xml);
	});

	addButton("read", function () {
		ReadXml();
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
