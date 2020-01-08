import React, { useState, useEffect } from "react";
import setToolbar from "./setToolbar"

export default function Toolbar(props) {
    const [btns, setBtns] = useState(null);

    // Handle parent call
    useEffect(() => {
        if (props.parentCall !== null) {
            if (props.parentCall.toLowerCase() === 'settoolbar') {
                setToolbar(props.graph, setBtns);
            }
        }
    }, [props.parentCall]);

    if (btns === null) {
        return (
            <div id={props.id}></div>
        );
    }
    else {
        return (
            <div id={props.id}>
                {btns.map(item => (
                    <React.Fragment>
                        <div class={`sidetool ${item.class}`} onClick={item.clickEvt}></div>
                    </React.Fragment>
                ))}
            </div>
        );
    }
}