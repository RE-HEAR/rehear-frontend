import React from 'react';
import styled from "styled-components";

const StyledNavBar = styled.div`
width: 1000px;
margin: 20px auto 0 auto;
`
const Container = styled.div`
display: flex;
justify-content: space-between;
/* align-items: center; */
height: 120px;
`
const Logo = styled.img`
width: 120px;
height: 50px;
margin-top: 15px;
background: black;
`
const FormContainer = styled.div`
display: flex;
flex-wrap: wrap;
width: 600px;
height: 85px;
`
const Input = styled.input`
width: 500px;
margin-top: 15px;
padding-left: 10px;
border: 1px #525252;
border-style: solid none solid solid;
border-radius: 5px 0 0 5px;
font-size: 14;
&:focus {
        outline: none;
    }
`
const BtnEnter = styled.button`
width: 80px;
height: 40px;
margin-top: 15px;
border: none;
/* border: 1px #525252;
border-style: solid solid solid none; */
border-radius: 0 5px 5px 0;
background: #A2A9CD;
color: #ffffff;
`
const MenuWrap = styled.div`
display: flex;
justify-content: space-around;
width: 420px;
margin: 15px auto 0 auto;
`
const BtnMenu = styled.button`
background: none;
color: #222222;
border: none;
`
const BtnWrap = styled.div`
display: flex;
justify-content: space-between;
width: 150px;
height: 20px;
margin-top: 15px;
`
const AccountBtn = styled.button`
width: 70px;
background: #A2A9CD;
border: none;
border-radius: 10px;
font-size: 10px;
color: #ffffff;
`

function NavBar() {
    return(
        <StyledNavBar>
            <Container>
                <Logo></Logo>
                <FormContainer>
                    <Input></Input>
                    <BtnEnter>검색</BtnEnter>
                    <MenuWrap>
                        <BtnMenu>실패 경험담</BtnMenu>
                        <BtnMenu>실패담 공유하기</BtnMenu>
                        <BtnMenu>유튜브 채널 바로가기</BtnMenu>
                    </MenuWrap>
                </FormContainer>
                <BtnWrap>
                    <AccountBtn>로그인</AccountBtn>
                    <AccountBtn>회원가입</AccountBtn>
                </BtnWrap>
            </Container>
        </StyledNavBar>
    )
}

export default NavBar;