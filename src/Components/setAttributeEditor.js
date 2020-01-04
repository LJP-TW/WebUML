import { mxUtils, mxEvent, mxForm } from "mxgraph-js";

export default function setAttributeEditor(graph) {
    graph.getSelectionModel().addListener(mxEvent.CHANGE, function (sender, evt) {
        selectionChanged(graph);
    });

    selectionChanged(graph);
}

function selectionChanged(graph) {
    var attributeEditor = document.getElementById('attributeEditor');

    attributeEditor.innerHTML = '';

    var cell = graph.getSelectionCell();
    console.log(cell);

    if (cell == null) {
        mxUtils.writeln(attributeEditor, 'Nothing selected.');
    }
    else {
        var center = document.createElement('center');
        mxUtils.writeln(center, cell.style);
        attributeEditor.appendChild(center);
        mxUtils.br(attributeEditor);

        if (cell.value !== null && cell.value.text !== null) {
            var center = document.createElement('center');
            mxUtils.writeln(center, cell.value.text);
            attributeEditor.appendChild(center);
            mxUtils.br(attributeEditor);
        }

        // Creates the form from the attributes of the user object
        var form = new mxForm();

        mxUtils.writeln(attributeEditor, 'Something selected.');
    }
}