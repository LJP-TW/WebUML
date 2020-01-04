import React, { useEffect } from "react";
import setAttributeEditor from "./setAttributeEditor"

export default function AttributeEditor(props) {
    // Handle parent call
    useEffect(() => {
        if (props.parentCall !== null) {
            if (props.parentCall.toLowerCase() === 'setattributeeditor') {
                setAttributeEditor(props.graph);
            }
        }
    }, [props.parentCall]);

    return (
        <div id={props.id}>
            AttributeEditor
        </div>
    );
}