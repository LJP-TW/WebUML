import React, { useState, useEffect } from "react";

import { mxGraph, mxRubberband, mxShape, mxConnectionHandler, mxGraphModel, mxGeometry } from "mxgraph-js";

import App from "./App";
import Header from "./Header";
import Footer from "./Footer";
import Toolbar from "./Toolbar";
import AttributeEditor from "./AttributeEditor";

import setDeleteEvent from "./setDeleteEvent";
import setStylesheet from "./setStylesheet";
import setAnchors from "./setAnchors";
import setClipboard from "./setClipboard";
import setDefault from "./setDefault";

import "../Css/Main.css";
import "../Css/Images.css";
import "../Css/common.css";
import "../Css/explorer.css";
import "../Css/hamburger_menu.css";

export default function Main(props) {
	// mxGraph object
	const [graph, setGraph] = useState(null);
	const [callFooter, setCallFooter] = useState(null);
	const [callToolbar, setCallToolbar] = useState(null);
	const [callHeader, setCallHeader] = useState(null);
	const [callAttributeEditor, setCallAttributeEditor] = useState(null);

	// 在 graph 更動時會呼叫
	useEffect(() => {
		if (graph !== null && graph.init === true) {
			// 設好 window global 變數, 用於 mxGraph 內部
			window["mxGraphModel"] = mxGraphModel;
			window["mxGeometry"] = mxGeometry;

			// 初始化 mxGraph
			graph.init = false;
			setGraph(graph);

			// 設置這個參數後節點之間才可以連接
			graph.setConnectable(true);

			// 開啟平移
			graph.setPanning(true);

			// 開啟範圍選取
			new mxRubberband(graph);

			// Shift+Backspace 刪除選取的 cells
			setDeleteEvent(graph);

			// 設定 mxStylesheet
			setStylesheet(graph);

			// 設定錨點
			// Overridden to define per-shape connection points
			setAnchors(mxGraph, mxShape);

			// Overridden mxGraph 的一些 function
			setDefault(graph, mxConnectionHandler);

			// 設定剪貼簿
			// 尚有 bug 無法使用
			setClipboard(graph);

			// 設定 UML Object 可拉進 graph
			setCallFooter("setUMLObjs");

			// 設定工具列
			setCallToolbar("setToolbar");

			// 設定 Attribute Editor
			setCallAttributeEditor("setAttributeEditor");

			setCallHeader("setHeader");

			var attrTriger = document.getElementById('attrTriger');
			attrTriger.click();
		}
	}, [graph]);

	return (
		<div id="main">
			<Header id="header" graph={graph} parentCall={callHeader} />
			<Toolbar id="toolbar" graph={graph} parentCall={callToolbar} />
			<App id="canvas" setGraph={setGraph} />
			<div id="menuToggle">
				<input id="attrTriger" type="checkbox" />
				<span></span>
				<span></span>
				<span></span>

                <ul id="menu">
                <AttributeEditor id="attributeEditor" graph={graph} parentCall={callAttributeEditor} />
                </ul>
			</div>
			<Footer id="objectSelector" graph={graph} parentCall={callFooter} />
		</div>
	);
}

// <AttributeEditor id='attributeEditor' graph={graph} parentCall={callAttributeEditor} />
