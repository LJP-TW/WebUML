import React from "react";
import ReactDOM from "react-dom";
import { mxClient, 
	mxUtils, 
	mxEvent, 
	mxGraph
} from "mxgraph-js";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.LoadGraph = this.LoadGraph.bind(this);
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

			// 設定上一層的 graph, 告知正處於初始化階段
			graph.init = true;
			this.props.setGraph(graph);
		}
	}

	render() {
		return <div className="graph-container" ref="divGraph" id={this.props.id} />;
	}
}

export default App;
