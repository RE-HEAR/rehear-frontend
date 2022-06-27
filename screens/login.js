import React from 'react';
import logo from '../logo.svg';
import "./login.scss";
import { Link } from "react-router-dom";
import Footer from "../share/footer.js"
import {PersonOutlineIcon, LockIcon} from "../share/constant.js";

function Login() {
    return(
        <div id="login">
            <div className="header">
                <div id="log-body">
                    <img src='img/logo_rehear.png' className="center" alt="logo" height="40" />
                    <div className="center" id="id-box">
                        <div className="log-text">
                            <div className="log-img">
                                <PersonOutlineIcon/>
                            </div>
                            <input type='text' className="text" placeholder="aaaa@email.com"/>
                        </div>
                    </div>
                    <div className="center" id="pw-box">
                        <div className="log-text">
                            <div className="log-img">
                                <LockIcon/>
                            </div>
                            <input type='password' className="text" placeholder="password"/>
                        </div>
                    </div>
                    <div id="check">비밀번호가 올바르지 않습니다.</div>
                    <Link to="" className="center link">
                        <input type="button"  id="log-btn" value="로그인" />
                    </Link>
                    <Link to="/join" className="center link">
                        <input type="button"  class="btns" value="회원가입" />
                    </Link>
                    <Link to="" className="center link">
                        <input type="button"  class="btns" value="카카오톡으로 로그인하기" />
                    </Link>
                    <Link to="" className="center link">
                        <input type="button"  class="btns" value="Google로 로그인하기" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Login;