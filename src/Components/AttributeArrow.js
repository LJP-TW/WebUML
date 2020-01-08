import React from 'react';

export default function AttributeArrow(props) {
    function handleStrokecolorChange(event) {
        var isColor = /^#[0-9A-F]{6}$/i;

        if (isColor.test(event.target.value) === true) {
            var elt = { ...props.attr };
            elt.strokecolor = event.target.value;

            props.setAttr(elt);
            props.graph.model.setValue(props.selected, elt);

            // 第三個參數若未指定, 預設是所有選取的 cell
            props.graph.setCellStyles('strokeColor', elt.strokecolor, [props.selected]);
        }
    }

    function handleStrokewidthChange(event) {
        var elt = { ...props.attr };
        elt.strokewidth = event.target.value;

        props.setAttr(elt);
    }

    function handleStrokewidthBlur(event) {
        var strokewidth = parseInt(event.target.value);
        if (isNaN(strokewidth) === false && strokewidth > 0 && Number.isInteger(strokewidth)) {
            var elt = { ...props.attr };
            elt.strokewidth = strokewidth;

            props.setAttr(elt);
            props.graph.model.setValue(props.selected, elt);

            // 第三個參數若未指定, 預設是所有選取的 cell
            props.graph.setCellStyles('strokeWidth', strokewidth);
        }
    }

    function handleDashedChange(event) {
        var dashed = event.target.value > 0 ? 0 : 1;
        var elt = { ...props.attr };
        elt.dashed = dashed;

        props.setAttr(elt);
        props.graph.model.setValue(props.selected, elt);
        props.graph.setCellStyles('dashed', dashed, [props.selected]);
    }
    
    function handleEndarrowChange(event) {
        var elt = { ...props.attr };
        elt.endarrow = event.target.value;

        props.setAttr(elt);
        props.graph.model.setValue(props.selected, elt);
        props.graph.setCellStyles('endArrow', elt.endarrow, [props.selected]);
    }

    function handleEndfillChange(event) {
        var endfill = event.target.value > 0 ? 0 : 1;
        var elt = { ...props.attr };
        elt.endfill = endfill;

        props.setAttr(elt);
        props.graph.model.setValue(props.selected, elt);
        props.graph.setCellStyles('endFill', endfill, [props.selected]);       
    }

    if (props.attr.UMLtype === 'arrow') {
        return (
            <React.Fragment>
				<font size="5" class="attrTitle">
					Arrow
                </font>
                <label>
                    Dashed:
                    <input type="checkbox" value={props.attr.dashed} onChange={handleDashedChange} checked={props.attr.dashed > 0} />
                </label>
                <label>
                    Endfill:
                    <input type="checkbox" value={props.attr.endfill} onChange={handleEndfillChange} checked={props.attr.endfill > 0}/>
                </label>
                <label>
                    Stroke color:
                    <input class="attrblock" type="color" value={props.attr.strokecolor} onChange={handleStrokecolorChange} />
                </label>
                <label>
                    Stroke width:
                    <input class="attrblock" type="number" value={props.attr.strokewidth} onChange={handleStrokewidthChange} onBlur={handleStrokewidthBlur} />
                </label>
                <label>
                    Arrow style:
                    <select class="attrblock" value={props.attr.endarrow} onChange={handleEndarrowChange}>
                        <option value="block">block</option>
                        <option value="open">open</option>
                        <option value="diamond">diamond</option>
                    </select>
                </label>
                
                
            </React.Fragment>
        );
    }
    else {
        return null;
    }
}