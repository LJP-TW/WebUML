import React from "react";
import ReactDOM from "react-dom";
import { mxClient, 
	mxUtils, 
	mxEvent, 
	mxGraph, 
	mxRubberband,
	mxShape
} from "mxgraph-js";

import setDeleteEvent from "./setDeleteEvent"
import setStylesheet from "./setStylesheet"
import setUMLObjs from "./setUMLObjs"
import setAnchors from "./setAnchors"
import setClipboard from "./setClipboard"
import setToolbar from "./setToolbar"

class App extends React.Component {
	constructor(props) {
		super(props);

		// 不知道發生什麼事情, 但有問題就註解回來看看ㄏ
		// this.LoadGraph = this.LoadGraph.bind(this);
	}

	componentDidMount() {
		this.LoadGraph();
	}

	LoadGraph() {
		// Generating MxGraph
		var container = ReactDOM.findDOMNode(this.refs.divGraph);
		// Checks if the browser is supported
		if (!mxClient.isBrowserSupported()) {
			// Displays an error message if the browser is not supported.
			mxUtils.error("Browser is not supported!", 200, false);
		} else {
			// 禁用滑鼠右鍵
			mxEvent.disableContextMenu(container);

			var graph = new mxGraph(container);

			// 設置這個數興後節點之間才可以連接
			graph.setConnectable(true);

			graph.setPanning(true); // 開啟平移

			// 開啟範圍選取
			new mxRubberband(graph);

			// 設定刪除事件
			setDeleteEvent(graph);

			// 設定 mxStylesheet
			setStylesheet(graph);

			// 設定 UML Object 可拉進 graph
			setUMLObjs(graph);

			// 設定錨點
			// Overridden to define per-shape connection points
			setAnchors(mxGraph, mxShape);

			// 設定剪貼簿
			// 尚有 bug 無法使用
			// setClipboard(graph);

			// 設定工具列
			setToolbar(graph);

		}
	}

	render() {
		return <div className="graph-container" ref="divGraph" id={this.props.id} />;
	}
}

export default App;
