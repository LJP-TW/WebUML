import {
	mxUtils,
	mxEvent,
	mxCell,
	mxGeometry,
	mxDragSource
} from "mxgraph-js";

export default function setUMLObjs(graph, objLists) {
	const setObj = function (umlObjImgClass, width, height, value) {
		// 判斷 Drop 是否有效
		const dropGraph = function (evt) {
			const x = mxEvent.getClientX(evt);
			const y = mxEvent.getClientY(evt);
			// 獲取鼠標點擊的座標上最頂層的元素
			const elt = document.elementFromPoint(x, y);
			// 如果此元素落在 graph 中
			if (mxUtils.isAncestorNode(graph.container, elt)) {
				return graph;
			}
			return null;
		};

		const objectLists = document.getElementById(objLists);

		var li = document.createElement("li");
		var img = document.createElement("img");
		img.classList.add("umlObj");
		img.classList.add(umlObjImgClass);

		li.appendChild(img);
		objectLists.appendChild(li);

		// Drop 成功後新建一個 vertex
		const dropSuccessCb = function (graph, evt, target, x, y) {
			value.UMLtype = umlObjImgClass;
			const cell = new mxCell(value, new mxGeometry(0, 0, width, height), umlObjImgClass);
			cell.vertex = true;
			const cells = graph.importCells([cell], x, y, target);
			if (cells != null && cells.length > 0) {
				graph.setSelectionCells(cells);
			}
		};

		// Creates the element that is being for the actual preview.
		var dragElt = document.createElement("div");
		dragElt.style.border = "dashed black 1px";
		dragElt.style.width = width + "px";
		dragElt.style.height = height + "px";

		var ds = mxUtils.makeDraggable(img, dropGraph, dropSuccessCb, dragElt, null, null, graph.autoscroll, true);
		// Restores original drag icon while outside of graph
		ds.createDragElement = mxDragSource.prototype.createDragElement;
	}

	setObj('text', 50, 30, {
		// Font
		'text': 'Text',
		'fontsize': 12,
		'fontcolor': '#000000'
	});

	setObj('rectangle', 120, 80, {
		// Font
		'text': '',
		'fontsize': 12,
		'fontcolor': '#000000',

		// Block
		'fillcolor': '#FFFFFF',
		'strokecolor': '#000000',
		'strokewidth': 1,
		'opacity': 100
	});

	setObj('if', 40, 40, {
		// Font
		'text': '',
		'fontsize': 12,
		'fontcolor': '#000000',

		// Block
		'fillcolor': '#FFFFFF',
		'strokecolor': '#000000',
		'strokewidth': 1,
		'opacity': 100
	});

	setObj('begin', 30, 30, {
		// Block
		'fillcolor': '#000000',
		'strokecolor': '#000000',
		'strokewidth': 1,
		'opacity': 100
	});

	setObj('end', 30, 30, {
		// Block
		'fillcolor': '#000000',
		'strokecolor': '#FF0000',
		'strokewidth': 2,
		'opacity': 100
	});

	setObj('bus', 100, 1, {
		// Block
		'fillcolor': '#000000',
		'strokecolor': '#000000',
		'strokewidth': 3,
		'opacity': 100
	});

	setObj('actor', 80, 100, {
		// Font
		'text': 'Actor',
		'fontsize': 12,
		'fontcolor': '#000000',

		// Block
		'fillcolor': '#FFFFFF',
		'strokecolor': '#000000',
		'strokewidth': 1,
		'opacity': 100
	});
}
