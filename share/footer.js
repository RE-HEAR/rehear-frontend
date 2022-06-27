import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import "./footer.scss";


export default function Footer(){
    return(
        <div class="footer" id="log-footer">
            <div style={{display:'block', width:'1000px', fontSize:'13px'}}>
                <div id="foot">인터뷰 지원 | 문의 team.seoridam@gmail.com</div>
                <div><br/> </div>
                <div style={{color:'white'}}>(주) 서리담 | 대표 : 이시은<br/>이용약관 | 개인정보 처리방침 © rehear Inc.</div>
            </div>
        </div>
    );
}