import React from "react";
import App from '../Components/App';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Toolbar from '../Components/Toolbar';
import AttributeEditor from '../Components/AttributeEditor';
import '../Css/Main.css'
import '../Css/Images.css'
import '../Css/common.css'
import '../Css/explorer.css'

export default class Layout extends React.Component {
    render() {
        return (
            <div id='layout'>
                <Header id='header' />
                <Toolbar id='toolbar' />
                <App id='canvas' />
                <AttributeEditor id='attributeEditor' />
                <Footer id='objectSelector' />
            </div>
        );
    }
}