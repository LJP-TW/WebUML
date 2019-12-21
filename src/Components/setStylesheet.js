import { mxConstants } from "mxgraph-js";

export default function Stylesheet(graph) {
    const setRectangle = function () {
	    var style = [];
        style[mxConstants.STYLE_SHAPE] = mxConstants.SHAPE_RECTANGLE;
        style[mxConstants.STYLE_FILLCOLOR] = '#FFFFFF';
        graph.getStylesheet().putCellStyle('rectangle', style);
    }

    const setIf = function () {
	    var style = [];
        style[mxConstants.STYLE_SHAPE] = mxConstants.SHAPE_RHOMBUS;
        style[mxConstants.STYLE_FILLCOLOR] = '#FFFFFF';
        graph.getStylesheet().putCellStyle('if', style);
    }

    const setBegin = function () {
	    var style = [];
        style[mxConstants.STYLE_SHAPE] = mxConstants.SHAPE_ELLIPSE;
        style[mxConstants.STYLE_FILLCOLOR] = '#000000';
        graph.getStylesheet().putCellStyle('begin', style);
    }

    const setEnd = function () {
	    var style = [];
        style[mxConstants.STYLE_SHAPE] = mxConstants.SHAPE_DOUBLE_ELLIPSE;
        style[mxConstants.STYLE_FILLCOLOR] = '#000000';
        style[mxConstants.STYLE_STROKECOLOR] = '#FF0000';
        style[mxConstants.STYLE_STROKEWIDTH] = 2;
        graph.getStylesheet().putCellStyle('end', style);
    }

    const setBus = function () {
	    var style = [];
        style[mxConstants.STYLE_SHAPE] = mxConstants.SHAPE_LINE;
        style[mxConstants.STYLE_STROKECOLOR] = '#000000';
        style[mxConstants.STYLE_STROKEWIDTH] = 2;
        graph.getStylesheet().putCellStyle('bus', style);
    }

    const setActor = function () {
	    var style = [];
        style[mxConstants.STYLE_SHAPE] = mxConstants.SHAPE_ACTOR;
        style[mxConstants.STYLE_FILLCOLOR] = '#FFFFFF';
        graph.getStylesheet().putCellStyle('actor', style);
    }

    setRectangle();
    setIf();
    setBegin();
    setEnd();
    setBus();
    setActor();
}
