import React, { useState, useEffect } from "react";
import setAttributeEditor from "./setAttributeEditor";
import AttributeFont from "./AttributeFont";
import AttributeBlock from "./AttributeBlock";
import AttributeArrow from "./AttributeArrow";
import "../Css/input_text.css"

export default function AttributeEditor(props) {
	const [selected, setSelected] = useState(null);
	const [attr, setAttr] = useState(null);

	// Handle parent call
	useEffect(() => {
		if (props.parentCall !== null) {
			if (props.parentCall.toLowerCase() === "setattributeeditor") {
				setAttributeEditor(props.graph, setSelected, setAttr);
			}
		}
	}, [props.parentCall]);

	// When selected cell changes, update attrs that show on editor
	useEffect(() => {
		if (selected !== null) {
			var elt = { ...selected.value };
			setAttr(elt);
		}
	}, [selected]);

	// Render
	if (selected === null || attr === null || attr.UMLtype === undefined) {
		return (
			<div id={props.id}>
				<font size="6">AttributeEditor</font>
            </div>
            
		);
	} else {
		return (
			<div id={props.id}>
                <font size="6">AttributeEditor</font>
				<AttributeFont attr={attr} setAttr={setAttr} selected={selected} graph={props.graph} />
				<AttributeBlock attr={attr} setAttr={setAttr} selected={selected} graph={props.graph} />
				<AttributeArrow attr={attr} setAttr={setAttr} selected={selected} graph={props.graph} />
			</div>
		);
	}
}
