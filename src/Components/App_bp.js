import React from 'react';
import ReactDOM from 'react-dom';
import {mxClient,
    mxUtils,
    mxEvent,
    mxGraph,
    mxRubberband
} from 'mxgraph-js';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        // 不知道發生什麼事情, 但有問題就註解回來看看ㄏ
        // this.LoadGraph = this.LoadGraph.bind(this);
    }

    componentDidMount() {
        this.LoadGraph();
    }

    LoadGraph() {
        var container = ReactDOM.findDOMNode(this.refs.divGraph);
        console.log('yeeee');
        console.log(mxClient);
        if (!mxClient.isBrowserSupported()) {
            mxUtils.error("Browser is not supported!", 200, false);
        } else {
            // 禁用鼠标右键
            mxEvent.disableContextMenu(container);
            
            var graph = new mxGraph(container);

            // 设置这个属性后节点之间才可以连接
            graph.setConnectable(false);

            // 开启区域选择
            new mxRubberband(graph);
            
            var parent = graph.getDefaultParent();
            graph.getModel().beginUpdate();
            try {
                var v1 = graph.insertVertex(parent, null, 'Hello,', 20, 20, 80, 30);
                var v2 = graph.insertVertex(parent, null, 'World!', 200, 150, 80, 30);
                var e1 = graph.insertEdge(parent, null, '30%', v1, v2);
            } finally {
                graph.getModel().endUpdate();
            }
        }
    }

    render() {
        return <div className="graph-container" ref="divGraph" id={this.props.id}/>;
    }
}