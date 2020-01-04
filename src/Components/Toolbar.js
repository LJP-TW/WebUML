import React, { useEffect } from "react";
import setToolbar from "./setToolbar"

export default function Toolbar(props) {
    // Handle parent call
    useEffect(() => {
        if (props.parentCall !== null) {
            if (props.parentCall.toLowerCase() === 'settoolbar') {
                setToolbar(props.graph);
            }
        }
    }, [props.parentCall]);

    return (
        <div id={props.id}></div>
    );
}