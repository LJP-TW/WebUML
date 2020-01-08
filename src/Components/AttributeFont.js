import React from 'react';

export default function AttributeFont(props) {
    function handleTextChange(event) {
        var elt = { ...props.attr };
        elt.text = event.target.value;

        props.setAttr(elt);
        props.graph.model.setValue(props.selected, elt);
    }

    function handleFontsizeChange(event) {
        var elt = { ...props.attr };
        elt.fontsize = event.target.value;

        props.setAttr(elt);
    }

    function handleFontsizeBlur(event) {
        var fontsize = parseInt(event.target.value);
        if (isNaN(fontsize) === false && fontsize > 0 && Number.isInteger(fontsize)) {
            var elt = { ...props.attr };
            elt.fontsize = fontsize;

            props.setAttr(elt);
            props.graph.model.setValue(props.selected, elt);

            // 第三個參數若未指定, 預設是所有選取的 cell
            props.graph.setCellStyles('fontSize', fontsize);
        }
    }

    function handleFontcolorChange(event) {
        var isColor = /^#[0-9A-F]{6}$/i;

        if (isColor.test(event.target.value) === true) {
            var elt = { ...props.attr };
            elt.fontcolor = event.target.value;

            props.setAttr(elt);
            props.graph.model.setValue(props.selected, elt);

            // 第三個參數若未指定, 預設是所有選取的 cell
            props.graph.setCellStyles('fontColor', elt.fontcolor, [props.selected]);
        }
    }

    if (props.attr.UMLtype === 'text' ||
        props.attr.UMLtype === 'rectangle' ||
        props.attr.UMLtype === 'if' ||
        props.attr.UMLtype === 'actor' ||
        props.attr.UMLtype === 'arrow') {
        return (
            <React.Fragment>
                <font size="5" class="attrTitle">Font</font>
                <label>
                    Text:
                    <textarea class="attrblock" type="text" value={props.attr.text} onChange={handleTextChange}></textarea>
                </label>
                <label>
                    Font size:
                    <input class="attrblock" type="number" value={props.attr.fontsize} onChange={handleFontsizeChange} onBlur={handleFontsizeBlur} />
                </label>
                <label>
                    Font color:
                    <input class="attrblock" type="color" value={props.attr.fontcolor} onChange={handleFontcolorChange} />
                </label>
            </React.Fragment>
        );
    }
    else {
        return null;
    }
}