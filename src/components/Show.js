import React, { Component } from "react";

export default class Show extends Component {
    componentWillUnmount() {
        console.log("[Show.js] componentwillunmount");
        window.confirm("do you want to leave this page");
    }
    render() {
        return <div>Show</div>;
    }
}
