import React, { useState, useEffect } from "react";
import setUMLObjs from "./setUMLObjs";
import "../Css/footer.css"

export default function Footer(props) {
	const objLists = "objectLists";

	// Handle parent call
	useEffect(() => {
		if (props.parentCall !== null) {
			if (props.parentCall.toLowerCase() === "setumlobjs") {
				setUMLObjs(props.graph, objLists);
			}
		}
	}, [props.parentCall]);

	return (
		<div id={props.id}>
			<div class="float_center">
				<ul id={objLists}></ul>
			</div>
		</div>
	);
}
