import React, {useState} from 'react';
import styled from "styled-components"
import "./join.scss";
import Footer from "../share/footer.js"
import { Link } from "react-router-dom";
import Dropdown from '../components/dropdown';
import Popup from "../components/popup";
import { Button } from '@material-ui/core';

function Join(props) {
    const {} = props;
    const [popup, handlePopup]=useState(false);
    var startup=["예", "아니오"];
    var age=["10대", "20대", "30대", "40대","기타"];
    var titleEmail="사용 가능한 이메일입니다.";
    var titleNic="사용 가능한 닉네임입니다.";
    var joinCheck="회원가입이 완료되었습니다";
    
    return(
        <div style={{overflow:"auto", height:"100%"}}>
            <div id="join">
                <div id="join-box">
                    <div id="menu">
                        <img src='img/logo_rehear.png' className="Logo" alt="logo" height="40" />
                        <Link to="">
                            <input type="button" class="menu" value="실패 경험담"/>
                        </Link>
                        <Link to="">
                            <input type="button" class="menu" value="실패담 공유하기"/>
                        </Link>
                        <Link to="">
                            <input type="button" class="menu" value="유튜브 채널 바로가기"/>
                        </Link>
                    </div>
                    <div id="body">
                        <div id="left">
                            <div id="email">
                                <div class="join">
                                    <div class="name">
                                        이메일
                                    </div>
                                    <input type='text' class="txt-box" placeholder="aaaa@email.com"/>
                                </div>
                                <Container>
                                    <Button class="check-btn" onClick={()=>{
                                        handlePopup(true);
                                    }}>중복확인</Button>
                                    {popup && <Popup title={titleEmail} onClose={handlePopup}/>}
                                </Container>
                            </div>
                            <div class="join">
                                <div class="name">
                                    비밀번호
                                </div>
                                <input type='text' class="txt-box" placeholder="비밀번호를 입력해주세요"/>
                            </div>
                            <div class="join">
                                <div class="name">
                                    비밀번호 확인
                                </div>
                                <input type='text' class="txt-box" placeholder="비밀번호를 입력해주세요"/>
                            </div>
                            <div class="join">
                                <div class="name">
                                    이름
                                </div>
                                <input type='text' class="txt-box" placeholder="이름을 입력해주세요"/>
                            </div>
                            <div class="join">
                                <div class="name">
                                    창업 경험 유무
                                </div>
                                <Dropdown class="txt-box" options={startup}/>
                            </div>
                        </div>
                        <div id="right">
                            <div id="nic">
                                <div class="join">
                                    <div class="name">
                                        닉네임
                                    </div>
                                    <input type='text' class="txt-box" placeholder="닉네임을 입력해주세요"/>
                                </div>
                                <Container>
                                    <Button class="check-btn" onClick={()=>{
                                        handlePopup(true);
                                    }}>중복확인</Button>
                                    {popup && <Popup title={titleNic} onClose={handlePopup}/>}
                                </Container>
                            </div>
                            <div class="join">
                                <div class="name">
                                    연령대
                                </div>
                                <Dropdown class="txt-box" options={age}/>
                                {/* <input type='text' class="txt-box" placeholder="연령대를 선택해주세요"/> */}
                            </div>
                            <div class="join">
                                <div class="name">
                                    직종
                                </div>
                                <input type='text' class="txt-box" placeholder="직종을 입력해주세요"/>
                            </div>
                            <div class="join">
                                <div class="name">
                                    가입 경로
                                </div>
                                <input type='text' class="txt-box" placeholder="가입경로를 입력해주세요"/>
                            </div>
                            <div class="join">
                                <div class="name">
                                    업종
                                </div>
                                <input type='text' class="txt-box" placeholder="창업 경험이 있다면 업종을 입력해주세요"/>
                            </div>
                        </div>
                    </div>
                    <div id="join-service" >
                        <textarea id="join-txt">서비스 약관</textarea>
                    </div>
                    <div id="agree-box">동의합니다<input type="checkbox" id="join-checkbox"/></div>
                    <div style={{display:"flex", justifyContent:"center"}}>
                        {/* <input type="button" id="join-checkBtn" value="가입하기"/> */}
                        <Container>
                            <Button id="join-checkBtn" onClick={()=>{
                                handlePopup(true);
                            }}>가입하기</Button>
                            {popup && <Popup title={joinCheck} onClose={handlePopup}/>}
                        </Container>
                    </div>
                </div>
            </div>
            <Footer/>
            {/* <div class="join-footer" id="footer">
                <div style={{display:'block', width:'70%'}}>
                    <div id="join-foot">인터뷰 지원 | 제휴 문의 team.seoridam@gmail.com</div>
                    <div>(주) 서리담 | 대표 : 김태완 | 사업자 등록번호 : 123-45-67890 | 서울시 중구 필동로 1길 30 | 통신판매업신고 : 2021-서울중구-12345 | 이용약관 | 개인정보 처리방침 © REHEAR Inc.</div>
                </div>
            </div> */}
        </div>
    )
}
const Container = styled.div``;

export default Join;
