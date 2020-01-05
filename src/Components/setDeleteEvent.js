import { mxEvent,
	mxUtils } from "mxgraph-js";

export default function deleteEvent(graph) {
	mxEvent.addListener(document, 'keydown', mxUtils.bind(this, function(evt) {
		if(evt.key === 'Backspace' && evt.shiftKey === true && graph.isEnabled() && !graph.isSelectionEmpty()) {
			graph.removeCells();
		}
	}));
}
