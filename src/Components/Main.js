import React, { useState, useEffect } from "react";

import { mxGraph, 
	mxRubberband,
	mxShape
} from "mxgraph-js";

import App from './App';
import Header from './Header';
import Footer from './Footer';
import Toolbar from './Toolbar';
import AttributeEditor from './AttributeEditor';

import setDeleteEvent from "./setDeleteEvent"
import setStylesheet from "./setStylesheet"
import setUMLObjs from "./setUMLObjs"
import setAnchors from "./setAnchors"
import setClipboard from "./setClipboard"
import setToolbar from "./setToolbar"
import setAttributeEditor from "./setAttributeEditor"

import '../Css/Main.css'
import '../Css/Images.css'
import '../Css/common.css'
import '../Css/explorer.css'

export default function Main() {
    // mxGraph object
    const [graph, setGraph] = useState(null);
    
    // 在 graph 更動時會呼叫
    useEffect(()=>{
        if (graph !== null && graph.init === true) {
            // 初始化 mxGraph
            graph.init = false;
            setGraph(graph);

			// 設置這個參數後節點之間才可以連接
			graph.setConnectable(true);

            // 開啟平移
            graph.setPanning(true);
            
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

			// 設定 Attribute Editor
			setAttributeEditor(graph);
        }
    }, [graph]);

    return (
        <div id='main'>
            <Header id='header' />
            <Toolbar id='toolbar' />
            <App id='canvas' setGraph={setGraph} />
            <AttributeEditor id='attributeEditor' />
            <Footer id='objectSelector' />
        </div>
    );
}