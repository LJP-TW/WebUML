import React, { useState, useEffect } from "react";
import setAttributeEditor from "./setAttributeEditor"

export default function AttributeEditor(props) {
    const [selected, setSelected] = useState(null);
    const [attr, setAttr] = useState(null);

    // Handle parent call
    useEffect(() => {
        if (props.parentCall !== null) {
            if (props.parentCall.toLowerCase() === 'setattributeeditor') {
                setAttributeEditor(props.graph, setSelected, setAttr);
            }
        }
    }, [props.parentCall]);

    useEffect(() => {
        if (selected !== null) {
            var elt = { ...selected.value };
            setAttr(elt);
        }
    }, [selected]);

    function handleTextChange(event) {
        var elt = { ...attr };
        elt.text = event.target.value;

        setAttr(elt);
        props.graph.model.setValue(selected, elt);
    }

    function handleFontsizeChange(event) {
        var elt = { ...attr };
        elt.fontsize = event.target.value;

        setAttr(elt);
    }

    function handleFontsizeBlur(event) {
        var fontsize = parseInt(event.target.value);
        if (isNaN(fontsize) === false && fontsize > 0 && Number.isInteger(fontsize)) {
            var elt = { ...attr };
            elt.fontsize = fontsize;

            setAttr(elt);
            props.graph.model.setValue(selected, elt);

            // 第三個參數若未指定, 預設是所有選取的 cell
            props.graph.setCellStyles('fontSize', fontsize);
        }
    }

    function handleFontcolorChange(event) {
        var isColor = /^#[0-9A-F]{6}$/i;

        if (isColor.test(event.target.value) === true) {
            var elt = { ...attr };
            elt.fontcolor = event.target.value;

            setAttr(elt);
            props.graph.model.setValue(selected, elt);

            // 第三個參數若未指定, 預設是所有選取的 cell
            props.graph.setCellStyles('fontColor', elt.fontcolor, [selected]);
        }
    }

    function handleFillcolorChange(event) {
        var isColor = /^#[0-9A-F]{6}$/i;

        if (isColor.test(event.target.value) === true) {
            var elt = { ...attr };
            elt.fillcolor = event.target.value;

            setAttr(elt);
            props.graph.model.setValue(selected, elt);

            // 第三個參數若未指定, 預設是所有選取的 cell
            props.graph.setCellStyles('fillColor', elt.fillcolor, [selected]);
        }
    }

    function handleOpacityChange(event) {
        var elt = { ...attr };
        elt.opacity = event.target.value;

        setAttr(elt);
    }

    function handleOpacityBlur(event) {
        var opacity = parseInt(event.target.value);
        if (isNaN(opacity) === false && opacity >= 0 && opacity <= 100 && Number.isInteger(opacity)) {
            var elt = { ...attr };
            elt.opacity = opacity;

            setAttr(elt);
            props.graph.model.setValue(selected, elt);

            // 第三個參數若未指定, 預設是所有選取的 cell
            props.graph.setCellStyles('opacity', opacity);
        }
    }

    function handleStrokecolorChange(event) {
        var isColor = /^#[0-9A-F]{6}$/i;

        if (isColor.test(event.target.value) === true) {
            var elt = { ...attr };
            elt.strokecolor = event.target.value;

            setAttr(elt);
            props.graph.model.setValue(selected, elt);

            // 第三個參數若未指定, 預設是所有選取的 cell
            props.graph.setCellStyles('strokeColor', elt.strokecolor, [selected]);
        }
    }

    function handleStrokewidthChange(event) {
        var elt = { ...attr };
        elt.strokewidth = event.target.value;

        setAttr(elt);
    }

    function handleStrokewidthBlur(event) {
        var strokewidth = parseInt(event.target.value);
        if (isNaN(strokewidth) === false && strokewidth > 0 && Number.isInteger(strokewidth)) {
            var elt = { ...attr };
            elt.strokewidth = strokewidth;

            setAttr(elt);
            props.graph.model.setValue(selected, elt);

            // 第三個參數若未指定, 預設是所有選取的 cell
            props.graph.setCellStyles('strokeWidth', strokewidth);
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    // Render
    if (selected === null || attr === null || attr.UMLtype === undefined) {
        return (
            <div id={props.id}>
                <h1>AttributeEditor</h1>
            </div>
        );
    }
    else {
        if (attr.UMLtype === 'text') {
            return (
                <div id={props.id}>
                    <h1>AttributeEditor</h1>
                    <form onSubmit={handleSubmit}>
                        <label>
                            Text:
                            <textarea type="text" value={attr.text} onChange={handleTextChange}></textarea>
                        </label>
                        <label>
                            Font size:
                            <input type="number" value={attr.fontsize} onChange={handleFontsizeChange} onBlur={handleFontsizeBlur} />
                        </label>
                        <label>
                            Font color:
                            <input type="color" value={attr.fontcolor} onChange={handleFontcolorChange} />
                        </label>
                    </form>
                </div>
            );
        }
        else if (attr.UMLtype === 'rectangle') {
            return (
                <div id={props.id}>
                    <h1>AttributeEditor</h1>
                    <form onSubmit={handleSubmit}>
                        <label>
                            Text:
                            <textarea type="text" value={attr.text} onChange={handleTextChange}></textarea>
                        </label>
                        <label>
                            Font size:
                            <input type="number" value={attr.fontsize} onChange={handleFontsizeChange} onBlur={handleFontsizeBlur} />
                        </label>
                        <label>
                            Font color:
                            <input type="color" value={attr.fontcolor} onChange={handleFontcolorChange} />
                        </label>
                        <label>
                            Background color:
                            <input type="color" value={attr.fillcolor} onChange={handleFillcolorChange} />
                        </label>
                        <label>
                            Opacity:
                            <input type="number" value={attr.opacity} onChange={handleOpacityChange} onBlur={handleOpacityBlur} />
                        </label>
                    </form>
                </div>
            );
        }
        else if (attr.UMLtype === 'if') {
            return (
                <div id={props.id}>
                    <h1>AttributeEditor</h1>
                    <form onSubmit={handleSubmit}>
                        <label>
                            Text:
                            <textarea type="text" value={attr.text} onChange={handleTextChange}></textarea>
                        </label>
                        <label>
                            Font size:
                            <input type="number" value={attr.fontsize} onChange={handleFontsizeChange} onBlur={handleFontsizeBlur} />
                        </label>
                        <label>
                            Font color:
                            <input type="color" value={attr.fontcolor} onChange={handleFontcolorChange} />
                        </label>
                        <label>
                            Background color:
                            <input type="color" value={attr.fillcolor} onChange={handleFillcolorChange} />
                        </label>
                        <label>
                            Opacity:
                            <input type="number" value={attr.opacity} onChange={handleOpacityChange} onBlur={handleOpacityBlur} />
                        </label>
                    </form>
                </div>
            );
        }
        else if (attr.UMLtype === 'actor') {
            return (
                <div id={props.id}>
                    <h1>AttributeEditor</h1>
                    <form onSubmit={handleSubmit}>
                        <label>
                            Text:
                            <textarea type="text" value={attr.text} onChange={handleTextChange}></textarea>
                        </label>
                        <label>
                            Font size:
                            <input type="number" value={attr.fontsize} onChange={handleFontsizeChange} onBlur={handleFontsizeBlur} />
                        </label>
                        <label>
                            Font color:
                            <input type="color" value={attr.fontcolor} onChange={handleFontcolorChange} />
                        </label>
                        <label>
                            Background color:
                            <input type="color" value={attr.fillcolor} onChange={handleFillcolorChange} />
                        </label>
                        <label>
                            Opacity:
                            <input type="number" value={attr.opacity} onChange={handleOpacityChange} onBlur={handleOpacityBlur} />
                        </label>
                    </form>
                </div>
            );
        }
        else if (attr.UMLtype === 'begin') {
            return (
                <div id={props.id}>
                    <h1>AttributeEditor</h1>
                    <form onSubmit={handleSubmit}>
                        <label>
                            Color:
                            <input type="color" value={attr.fillcolor} onChange={handleFillcolorChange} />
                        </label>
                        <label>
                            Opacity:
                            <input type="number" value={attr.opacity} onChange={handleOpacityChange} onBlur={handleOpacityBlur} />
                        </label>
                    </form>
                </div>
            );
        }
        else if (attr.UMLtype === 'end') {
            return (
                <div id={props.id}>
                    <h1>AttributeEditor</h1>
                    <form onSubmit={handleSubmit}>
                        <label>
                            Color:
                            <input type="color" value={attr.fillcolor} onChange={handleFillcolorChange} />
                        </label>
                        <label>
                            Stroke color:
                            <input type="color" value={attr.strokecolor} onChange={handleFillcolorChange} />
                        </label>
                        <label>
                            Stroke width:
                            <input type="number" value={attr.strokewidth} onChange={handleFillcolorChange} />
                        </label>
                        <label>
                            Opacity:
                            <input type="number" value={attr.opacity} onChange={handleOpacityChange} onBlur={handleOpacityBlur} />
                        </label>
                    </form>
                </div>
            );
        }
        else {
            return (
                <div id={props.id}>
                    <h1>AttributeEditor</h1>
                </div>
            );
        }
    }
}