import { mxUtils, 
	mxEvent, 
	mxCell, 
	mxGeometry, 
	mxDragSource } from "mxgraph-js";

export default function Draggable(graph) {
	// 判斷 Drop 是否有效
	const dropGraph = function(evt) {
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

	// Drop 成功後新建一個 node
	const dropSuccessCb = function(graph, evt, target, x, y) {
		const cell = new mxCell("Test", new mxGeometry(0, 0, 120, 80));
		cell.vertex = true;
		const cells = graph.importCells([cell], x, y, target);
		if (cells != null && cells.length > 0) {
			graph.setSelectionCells(cells);
		}
	};

	// Creates the element that is being for the actual preview.
	var dragElt = document.createElement("div");
	dragElt.style.border = "dashed black 1px";
	dragElt.style.width = "120px";
	dragElt.style.height = "80px";

	// Generating UML Object at objectSelector
	var umlObjImgClasses = ["pika", "icon_128", "pika", "pika", "pika"];

	const objectLists = document.getElementById("objectLists");
	for (var umlObjImgClass of umlObjImgClasses) {
		var li = document.createElement("li");
		var img = document.createElement("img");
		img.classList.add("umlObj");
		img.classList.add(umlObjImgClass);

		li.appendChild(img);
		objectLists.appendChild(li);

		var ds = mxUtils.makeDraggable(img, dropGraph, dropSuccessCb, dragElt, null, null, graph.autoscroll, true);
		// Restores original drag icon while outside of graph
		ds.createDragElement = mxDragSource.prototype.createDragElement;
	}
}
