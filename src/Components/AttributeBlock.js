import React from "react";

export default function AttributeBlock(props) {
	function handleFillcolorChange(event) {
		var isColor = /^#[0-9A-F]{6}$/i;

		if (isColor.test(event.target.value) === true) {
			var elt = { ...props.attr };
			elt.fillcolor = event.target.value;

			props.setAttr(elt);
			props.graph.model.setValue(props.selected, elt);

			// 第三個參數若未指定, 預設是所有選取的 cell
			props.graph.setCellStyles("fillColor", elt.fillcolor, [props.selected]);
		}
	}

	function handleStrokecolorChange(event) {
		var isColor = /^#[0-9A-F]{6}$/i;

		if (isColor.test(event.target.value) === true) {
			var elt = { ...props.attr };
			elt.strokecolor = event.target.value;

			props.setAttr(elt);
			props.graph.model.setValue(props.selected, elt);

			// 第三個參數若未指定, 預設是所有選取的 cell
			props.graph.setCellStyles("strokeColor", elt.strokecolor, [props.selected]);
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
			props.graph.setCellStyles("strokeWidth", strokewidth);
		}
	}

	function handleOpacityChange(event) {
		var elt = { ...props.attr };
		elt.opacity = event.target.value;

		props.setAttr(elt);
	}

	function handleOpacityBlur(event) {
		var opacity = parseInt(event.target.value);
		if (isNaN(opacity) === false && opacity >= 0 && opacity <= 100 && Number.isInteger(opacity)) {
			var elt = { ...props.attr };
			elt.opacity = opacity;

			props.setAttr(elt);
			props.graph.model.setValue(props.selected, elt);

			// 第三個參數若未指定, 預設是所有選取的 cell
			props.graph.setCellStyles("opacity", opacity);
		}
	}

	if (
		props.attr.UMLtype === "rectangle" ||
		props.attr.UMLtype === "if" ||
		props.attr.UMLtype === "begin" ||
		props.attr.UMLtype === "end" ||
		props.attr.UMLtype === "bus" ||
		props.attr.UMLtype === "actor"
	) {
		return (
			<React.Fragment>
				<font size="5" class="attrTitle">
					Block
				</font>
				<label>
					Background color:
					<input class="attrblock" type="color" value={props.attr.fillcolor} onChange={handleFillcolorChange} />
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
					Opacity:
					<input class="attrblock" type="number" value={props.attr.opacity} onChange={handleOpacityChange} onBlur={handleOpacityBlur} />
				</label>
			</React.Fragment>
		);
	} else {
		return null;
	}
}
