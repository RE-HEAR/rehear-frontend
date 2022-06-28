import React from 'react';
import styled from "styled-components";
import NavBar from '../share/NavBar.js';
import Footer from "../share/footer.js";

const id="kim";
function Intro(){
    return(
        <StyledHome>
            <NavBar id={id} num={1}></NavBar>
            <Title1>창업가의 이야기에 귀 기울이는</Title1>
            <Title2>리:히어</Title2>
            <Line/>
            <Section>
                <Center>
                    <Content>
                    {`
                    저희 서리담팀은 고민했습니다. 
                    왜 우리나라에는 건강하고 활발한 창업 커뮤니티가 없을까?

                    그래서, 저희가 만들어나가기로 했습니다. 
                    예비/초기 창업가부터 숙력된 기창업자들까지
                    한데 어우러져 다양한 인사이트와 경험을 공유하며 네트워킹이 가능한 커뮤니티.
                    리:히어에서 뵙겠습니다.

                    뭐 이런식으로 블라블라 어떨까..
                    `}
                    
                    </Content>
                </Center>
                <Img src="img/img.png"/>
            </Section>
            <Footer/>
        </StyledHome>
    )
}

const StyledHome = styled.html`
`
const Title1 = styled.div`
font-weight:700;
font-size:30px;
text-align:center;
`
const Title2 = styled.div`
font-weight:700;
font-size:28px;
color:#075E53;
margin-top:5px;
text-align:center;
`
const Center = styled.div`
display:flex;
justify-content:center;
`
const Line = styled.hr`
width: 900px;
margin-top: 20px;
`
const Content = styled.pre`
width:850px;
font-size:15px;
white-space:pre-line;
margin:0;
margin-bottom:20px;
line-height:150%;
text-align:left;
`
const Img = styled.img`
width:830px;
`
const Section = styled.div`
text-align:center;
margin-bottom:15px;
`
export default Intro;

