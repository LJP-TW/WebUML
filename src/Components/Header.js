import React, { useState, useEffect } from "react";
import setHeader from './setHeader';
export default function Header(props) { 
    
    // Handle parent call
    useEffect(() => {
        if (props.parentCall !== null) {
            if (props.parentCall.toLowerCase() === 'setheader') {
                setHeader(props.graph);
            }
        }
    }, [props.parentCall]);
    
    return (
        <div id={props.id}>
            <input id="filename" type="text" placeholder="Untitled fileName"/>
        </div>
    );
}