import React, { useState, useEffect } from "react";
import setHeader from "./setHeader";
import "../Css/input_text.css"


export default function Header(props) {
	// Handle parent call
	useEffect(() => {
		if (props.parentCall !== null) {
			if (props.parentCall.toLowerCase() === "setheader") {
				setHeader(props.graph);
			}
		}
	}, [props.parentCall]);

	return (
		<div id={props.id}>
			<div class="form-group">
				<span>Filename: </span>
				<input id="filename" type="text" placeholder="Untitled fileName" />
			</div>
		</div>
	);
}
