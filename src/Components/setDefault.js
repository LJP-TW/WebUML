export default function setDefault(graph, mxConnectionHandler) {
    // Overrides method to provide a cell label in the display
    graph.convertValueToString = function (cell) {
        if (cell.value !== null) {
            return cell.value.text;
        }
        else {
            return '';
        }
    };

    // Overrides method to store a cell label in the model
    var graphCellLabelChanged = graph.cellLabelChanged;
    graph.cellLabelChanged = function (cell, value, autoSize) {
        console.log('celllabelchanged!');
        // 複製出一個新 cell.value object
        var elt = { ...cell.value };
        elt.text = value;

        arguments[1] = elt;
        graphCellLabelChanged.apply(this, arguments);
    };

    // Overrides method to create the editing value
    // var getEditingValue = graph.getEditingValue;
    graph.getEditingValue = function (cell) {
        return cell.value.text;
    };

    // setting default edge value
    const mxConnectionHandlerInsertEdge = mxConnectionHandler.prototype.insertEdge;
    mxConnectionHandler.prototype.insertEdge = function (parent, id, value, source, target, style) {
        value = {};
        value['text'] = '';
		value['UMLtype'] = 'arrow';

		// Font
		value['text'] = '';
		value['fontsize'] = 12;
		value['fontcolor'] = '#000000';
		
		// Arrow
		value['strokecolor'] = '#000000';
        value['strokewidth'] = 1;
        value['dashed'] = 0;
		value['endarrow'] = 'block';
        value['endfill'] = 1;
        
        arguments[2] = value;

        return mxConnectionHandlerInsertEdge.apply(this, arguments);
    };
}