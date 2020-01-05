import { mxEvent,
	mxGeometry ,
	mxCell,
	mxPoint,
	mxUtils,
	mxXmlCanvas2D,
	mxImageExport,
	mxXmlRequest,
	mxCodec} from "mxgraph-js";

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
		console.log(cell);
		graph.addCell(cell);
	}

	const Test = function() {
		//This is to read xml and add to graph
		var xml = '<root><mxCell id="2" value="Hello," vertex="1"><mxGeometry x="20" y="20" width="80" height="30" as="geometry"/></mxCell><mxCell id="3" value="World!" vertex="1"><mxGeometry x="200" y="150" width="80" height="30" as="geometry"/></mxCell><mxCell id="4" value="" edge="1" source="2" target="3"><mxGeometry relative="1" as="geometry"/></mxCell></root>';
		var doc = mxUtils.parseXml(xml);
		var codec = new mxCodec(doc);
		var elt = doc.documentElement.firstChild;
		var cells = [];
		
		while (elt != null)
		{
  			cells.push(codec.decode(elt));
  			elt = elt.nextSibling;
		}
		// Here is the problem 
		graph.addCells(cells);
		//
	}

	const SaveAsXml = function(xml){
		// Output xml.xml file
		/*
		/ code here
		*/
	}

	addButton("screenshoot", function() {
		const xmlDoc = mxUtils.createXmlDocument();
    	const root = xmlDoc.createElement('output');
    	xmlDoc.appendChild(root);
		const { scale } = graph.view;
    	
    	const border = 0;

		const bounds = graph.getGraphBounds();
    	const xmlCanvas = new mxXmlCanvas2D(root);
    	xmlCanvas.translate(
      		Math.floor((border / scale - bounds.x) / scale),
      		Math.floor((border / scale - bounds.y) / scale),
    	);
		xmlCanvas.scale(1);
		
		const imgExport = new mxImageExport();
    	imgExport.drawState(graph.getView().getState(graph.model.root), xmlCanvas);
    	const w = Math.ceil(bounds.width * scale / scale + 2 * border);
    	const h = Math.ceil(bounds.height * scale / scale + 2 * border);
		var xml = mxUtils.getXml(root);
		// Output xml to func that can convert to img format
		//
		
	});
	
	addButton("save", function() {
		var encoder = new mxCodec();
		var result = encoder.encode(graph.getModel());
		var xml = mxUtils.getXml(result);
		xml = xml.substring(xml.indexOf("<mxGraphModel>")+"<mxGraphModel>".length, xml.indexOf("</mxGraphModel>"));
		SaveAsXml(xml);
	});

	addButton("test", function() {
		Test();
	});
	
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
