import { mxConstants } from "mxgraph-js";

export default function setStylesheet(graph) {
    const setRectangle = function () {
	    var style = [];
        style[mxConstants.STYLE_SHAPE] = mxConstants.SHAPE_RECTANGLE;
        style[mxConstants.STYLE_STROKECOLOR] = '#000000';
        style[mxConstants.STYLE_STROKEWIDTH] = 1;
        style[mxConstants.STYLE_FILLCOLOR] = '#FFFFFF';
        style[mxConstants.STYLE_FONTCOLOR] = '#000000';
        style[mxConstants.STYLE_FONTSIZE] = 12;
        graph.getStylesheet().putCellStyle('rectangle', style);
    }

    const setIf = function () {
	    var style = [];
        style[mxConstants.STYLE_SHAPE] = mxConstants.SHAPE_RHOMBUS;
        style[mxConstants.STYLE_STROKECOLOR] = '#000000';
        style[mxConstants.STYLE_STROKEWIDTH] = 1;
        style[mxConstants.STYLE_FILLCOLOR] = '#FFFFFF';
        style[mxConstants.STYLE_FONTCOLOR] = '#000000';
        style[mxConstants.STYLE_FONTSIZE] = 12;
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
        style[mxConstants.STYLE_ENDARROW] = null;
        style[mxConstants.STYLE_FILLCOLOR] = '#000000';
        style[mxConstants.STYLE_STROKECOLOR] = '#000000';
        style[mxConstants.STYLE_STROKEWIDTH] = 3;
        graph.getStylesheet().putCellStyle('bus', style);
    }

    const setText = function () {
	    var style = [];
        style[mxConstants.STYLE_SHAPE] = mxConstants.SHAPE_RECTANGLE;
        style[mxConstants.STYLE_OPACITY] = 0;
        style[mxConstants.STYLE_FONTCOLOR] = '#000000';
        style[mxConstants.STYLE_FONTSIZE] = 12;
        graph.getStylesheet().putCellStyle('text', style);
    }

    const setActor = function () {
	    var style = [];
        style[mxConstants.STYLE_SHAPE] = mxConstants.SHAPE_ACTOR;
        style[mxConstants.STYLE_STROKECOLOR] = '#000000';
        style[mxConstants.STYLE_STROKEWIDTH] = 1;
        style[mxConstants.STYLE_FILLCOLOR] = '#FFFFFF';
        style[mxConstants.STYLE_FONTCOLOR] = '#000000';
        style[mxConstants.STYLE_FONTSIZE] = 12;
        graph.getStylesheet().putCellStyle('actor', style);
    }

    const setEdgeDefault = function () {
        var defaultEdgeStyle = graph.getStylesheet().getDefaultEdgeStyle();
        defaultEdgeStyle[mxConstants.STYLE_EDGE] = mxConstants.EDGESTYLE_ELBOW;
        defaultEdgeStyle[mxConstants.STYLE_ENDARROW] = mxConstants.ARROW_BLOCK;
        defaultEdgeStyle[mxConstants.STYLE_STROKECOLOR] = '#000000';
        defaultEdgeStyle[mxConstants.STYLE_STROKEWIDTH] = 1;
        defaultEdgeStyle[mxConstants.STYLE_FILLCOLOR] = '#FFFFFF';
        defaultEdgeStyle[mxConstants.STYLE_FONTCOLOR] = '#000000';
        defaultEdgeStyle[mxConstants.STYLE_FONTSIZE] = 12;
    }

    const setArrow = function () {
        var style = [];
        graph.getStylesheet().putCellStyle('arrow', style);
    }

    const setDashedArrow = function () {
        var style = [];
        style[mxConstants.STYLE_DASHED] = 1;
        style[mxConstants.STYLE_ENDARROW] = mxConstants.ARROW_OPEN;
        graph.getStylesheet().putCellStyle('dashedArrow', style);
    }

    const setImplementArrow = function () {
        var style = [];
        style[mxConstants.STYLE_DASHED] = 1;
        style[mxConstants.STYLE_ENDARROW] = mxConstants.ARROW_BLOCK;
        style[mxConstants.STYLE_ENDFILL] = 0;
        graph.getStylesheet().putCellStyle('implementArrow', style);
    }

    const setGeneralizationArrow = function () {
        var style = [];
        style[mxConstants.STYLE_ENDARROW] = mxConstants.ARROW_BLOCK;
        style[mxConstants.STYLE_ENDFILL] = 0;
        graph.getStylesheet().putCellStyle('generalizationArrow', style);
    }

    const setAggregationArrow = function () {
        var style = [];
        style[mxConstants.STYLE_ENDARROW] = mxConstants.ARROW_DIAMOND;
        style[mxConstants.STYLE_ENDFILL] = 0;
        graph.getStylesheet().putCellStyle('aggregationArrow', style);
    }

    // Verteice
    setRectangle();
    setIf();
    setBegin();
    setEnd();
    setBus();
    setText();
    setActor();

    // Edges
    setEdgeDefault();
    setArrow();
    setDashedArrow();
    setImplementArrow();
    setGeneralizationArrow();
    setAggregationArrow();
}
