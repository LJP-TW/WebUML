import { mxConnectionConstraint, 
	mxPoint } from "mxgraph-js";

export default function Anchors(_mxGraph, _mxShape) {
	// Overridden to define per-shape connection points
	_mxGraph.prototype.getAllConnectionConstraints = function(terminal, source) {
		if (terminal != null && terminal.shape != null) {
			if (terminal.shape.stencil != null) {
				if (terminal.shape.stencil != null) {
					return terminal.shape.stencil.constraints;
				}
			} else if (terminal.shape.constraints != null) {
				return terminal.shape.constraints;
			}
		}

		return null;
	};
	// Define anchors
	_mxShape.prototype.constraints = [
		new mxConnectionConstraint(new mxPoint(0.25, 0), true),
		new mxConnectionConstraint(new mxPoint(0.75, 0), true),
		new mxConnectionConstraint(new mxPoint(0.5, 0), true),
		new mxConnectionConstraint(new mxPoint(0, 0.25), true),
		new mxConnectionConstraint(new mxPoint(0, 0.5), true),
		new mxConnectionConstraint(new mxPoint(0, 0.75), true),
		new mxConnectionConstraint(new mxPoint(1, 0.25), true),
		new mxConnectionConstraint(new mxPoint(1, 0.5), true),
		new mxConnectionConstraint(new mxPoint(1, 0.75), true),
		new mxConnectionConstraint(new mxPoint(0.25, 1), true),
		new mxConnectionConstraint(new mxPoint(0.5, 1), true),
		new mxConnectionConstraint(new mxPoint(0.75, 1), true)
	];
}
