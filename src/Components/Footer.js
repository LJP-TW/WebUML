import React, { useEffect } from "react";
import setUMLObjs from "./setUMLObjs"

export default function Footer(props) {
    // Handle parent call
    useEffect(() => {
        if (props.parentCall !== null) {
            if (props.parentCall.toLowerCase() === 'setumlobjs') {
                setUMLObjs(props.graph);
            }
        }
    }, [props.parentCall]);

    return (
        <div id={props.id}>
            <div class="float_center">
                <ul id="objectLists">
                </ul>
            </div>
        </div>
    );
}