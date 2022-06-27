import React, { Component } from "react";
// import { render } from "sass";
import styled from "styled-components";

class Popup extends Component{
    render(){
        const {onClose}=this.props;
        return(
            <Container>
                <div style={{display:"block", textAlign:"center"}}>
                <div>{this.props.title}</div>
                <Button onClick={()=> {
                    onClose(false);
                }}>OK</Button>
                </div>
            </Container>
        );
    }
}
Popup.defaultProps = {
    title: "팝업창 제목"
}
export default Popup;

const Container = styled.div`
    position:fixed;
    left:50%;
    top:30%;
    transform:translate(-50%,0);
    z-index:100;
    width:400px;
    height:100px;
    border:1px solid #525252;
    border-sizing:border-box;
    box-shadow:3px 3px 4px 3px rgba(0,0,0,0.3);
    border-radius:5px;
    background-color:white;
    display:flex;
    align-items:center;
    justify-content:center;
`

const Button = styled.button`
    background-color:#075E53;
    width:200px;
    height:25px;
    text-align:center;
    border:none;
    border-radius:5px;
    margin-top:15px;
    color:white;
    :hover{
        cursor:pointer;
    }
`