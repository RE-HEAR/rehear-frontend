import React from 'react';
import styled from "styled-components";
import NavBar from '../share/NavBar.js';
import Footer from "../share/footer.js";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

const StyledHome = styled.div`
`
const Container = styled.div`
width: 1000px;
margin: auto;
`
const Banner = styled.div`
height: 200px;
width:1000px;
margin: auto;
margin-top: 20px;
background: #c4c4c4;
`
const Title = styled.div`
margin-bottom: 25px;
font-size: 25px;
font-weight: bold;
color: #075E53;
`
const ContentWrap = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`
const MainContent = styled.div`
height: 20px;
width:170px;
margin:auto;
margin-top: 5px;
font-size: 14px;
font-weight: bold;
overflow: hidden;
`
const SubContent1 = styled.div`
height:50px;
margin-top: 5px;
font-size: 18px;
font-weight : 700;
overflow: hidden;
white-space:no-wrap;
word-wrap:break-word;
text-overflow: ellipsis;
display:-webkit-box;
-webkit-line-clamp:2;
-webkit-box-orient:vertical;
`
const SubContent2 = styled.div`
height: 150px;
margin-top: 10px;
`
const SubText2 = styled.div`
font-size: 16px;
overflow: hidden;
white-space:no-wrap;
word-wrap:break-word;
text-overflow: ellipsis;
display:-webkit-box;
-webkit-line-clamp:6;
-webkit-box-orient:vertical;
`
const Hashtag = styled.div`
color:#73C8A3;
font-size:14px;
margin-top:5px;
margin-right:5px;
`
const SubContent3 = styled.div`
height: max-content;
width:160px;
margin:auto;
margin-top: 10px;
font-size: 12px;
overflow: hidden;
white-space:no-wrap;
word-wrap:break-word;
text-overflow: ellipsis;
display:-webkit-box;
-webkit-line-clamp:3;
-webkit-box-orient:vertical;
text-align:left;
`
const Line = styled.hr`
width: 990px;
margin-top: 20px;
`
const Section1 = styled.div`
height: max-content;
margin-top: 20px;
`
const Content1 = styled.div`
width: 240px;
height: max-content;
`
const TextBox = styled.div `
padding:5px;
border: 2px solid #73C8A3; 
&:hover{
    cursor:pointer;
}
`
const ImgContent1 = styled.div`
height: 30px;
margin-top:5px;
padding-left:5px;
`
const Section2 = styled.div`
height: max-content;
margin-top: 20px;
`
const Content2 = styled.div`
width: 32%;
height: max-content;
`
const ImgContent2 = styled.div`
width: 300px;
height: 150px;
background: #c4c4c4;
`
const Section4 = styled.div`
height: max-content;
margin-top: 20px;
margin-bottom: 20px;
`
const Content4 = styled.div`
width: 200px;
height: max-content;
text-align:center;
`
const ImgWrap4 = styled.div`
width: 160px;
height: 200px;
background: #c4c4c4;
margin:auto;
`
const BookContent = styled.div`
display: flex;
flex-wrap: wrap;
`
const id="kim"; //로그인 버튼 / 사용자 정보 중 보이게 될 정보 선택(id가 없을 때 로그인 버튼)
function Home() {
    return(
        <StyledHome>
            <NavBar id={id}></NavBar>
            <Banner></Banner>
            <Container>
                <Section1>
                    <Title>금주의 HOT 게시글</Title>
                    <ContentWrap>
                        <Content1>
                            <TextBox>
                                <SubContent1>엔젤투자자와 투자유치건에 대해서 이런 갈등 어쩌구 저쩌구</SubContent1>
                                <SubContent2><SubText2>이번에 제가 창업을 했는데 생각했던 것보다 힘들고 어려워서 다른 분들은 어떻게 이겨냈는지 궁금해요.
                                    저는 특히 세무 부분에 대해 무지하여 혼자 다 하려고 하니 힘들었는데 그나마 리:히어 어쩌구 저쩌구
                                    </SubText2></SubContent2>
                                <ImgContent1>
                                <div style={{display:"flex"}}>
                                    <ThumbUpOffAltIcon/>
                                    <div style={{marginRight:"15px", marginLeft:"5px"}}>1</div>
                                    <ChatBubbleOutlineIcon/>
                                    <div style={{marginRight:"5px", marginLeft:"5px"}}>5</div>
                                </div>
                                </ImgContent1>
                            </TextBox>
                            <div style={{display:"flex"}}>
                                <Hashtag>#투자유지</Hashtag>
                                <Hashtag>#엔젤투자자</Hashtag>
                            </div>
                        </Content1>
                        <Content1>
                            <TextBox>
                                <SubContent1>스타트업 초기에는 원래 다 이렇게 어려운가요?</SubContent1>
                                <SubContent2><SubText2>안녕하세용 두줄이 최대임</SubText2></SubContent2>
                                <ImgContent1>
                                <div style={{display:"flex"}}>
                                    <ThumbUpOffAltIcon/>
                                    <div style={{marginRight:"15px", marginLeft:"5px"}}>1</div>
                                    <ChatBubbleOutlineIcon/>
                                    <div style={{marginRight:"5px", marginLeft:"5px"}}>2</div>
                                </div>
                                </ImgContent1>
                            </TextBox>
                            <div style={{display:"flex"}}>
                                <Hashtag>#스타트업초기</Hashtag>
                                <Hashtag>#데스밸리</Hashtag>
                            </div>
                        </Content1>
                        <Content1>
                            <TextBox>
                                <SubContent1>이번에 진행되는 정부지원사업 관련 IR 컨어쩌구저쩌구</SubContent1>
                                <SubContent2><SubText2>안녕하세용 두줄이 최대임</SubText2></SubContent2>
                                <ImgContent1>
                                <div style={{display:"flex"}}>
                                    <ThumbUpOffAltIcon/>
                                    <div style={{marginRight:"15px", marginLeft:"5px"}}>1</div>
                                    <ChatBubbleOutlineIcon/>
                                    <div style={{marginRight:"5px", marginLeft:"5px"}}>5</div>
                                </div>
                                </ImgContent1>
                            </TextBox>
                            <div style={{display:"flex"}}>
                                <Hashtag>#IR</Hashtag>
                                <Hashtag>#컨설팅</Hashtag>
                            </div>
                        </Content1>
                        <Content1>
                            <TextBox>
                                <SubContent1>엔젤투자자와 투자유치건에 대해서 이런 갈등 어쩌구 저쩌구</SubContent1>
                                <SubContent2><SubText2>안녕하세용 두줄이 최대임</SubText2></SubContent2>
                                <ImgContent1>
                                <div style={{display:"flex"}}>
                                    <ThumbUpOffAltIcon/>
                                    <div style={{marginRight:"15px", marginLeft:"5px"}}>1</div>
                                    <ChatBubbleOutlineIcon/>
                                    <div style={{marginRight:"5px", marginLeft:"5px"}}>5</div>
                                </div>
                                </ImgContent1>
                            </TextBox>
                            <div style={{display:"flex"}}>
                                <Hashtag>#지원사업</Hashtag>
                                <Hashtag>#무료특강</Hashtag>
                            </div>
                        </Content1>
                    </ContentWrap>
                </Section1>
                <Line/>
                <Section2>
                    <Title>여러분! 이 지원사업 확인하셨나요?</Title>
                    <ContentWrap>
                        <Content2>
                            <TextBox>
                                <SubContent1>리:히어에서 진행하는 무료아이템 컨설팅 신청 어쩌구 저쩌구</SubContent1>
                                <SubContent2><SubText2>안녕하세요 핸드크래프트 비건 화장품을 만들고 있는 비거니 대표 김채소입니다.
                                    저희는 현재 와디즈 펀딩 3차까지 성공리에 마치며 충성 고객을 모으고 있는데요, 막상 매출액 어쩌고 저쩌고
                                    </SubText2></SubContent2>
                                <ImgContent1>
                                <div style={{display:"flex"}}>
                                    <ThumbUpOffAltIcon/>
                                    <div style={{marginRight:"15px", marginLeft:"5px"}}>1</div>
                                    <ChatBubbleOutlineIcon/>
                                    <div style={{marginRight:"5px", marginLeft:"5px"}}>5</div>
                                </div>
                                </ImgContent1>
                            </TextBox>
                            <div style={{display:"flex"}}>
                                <Hashtag>#투자유지</Hashtag>
                                <Hashtag>#엔젤투자자</Hashtag>
                            </div>
                        </Content2>
                        <Content2>
                            <TextBox>
                                <SubContent1>리:히어에서 진행하는 무료아이템 컨설팅 신청 어쩌구 저쩌구</SubContent1>
                                <SubContent2><SubText2>안녕하세요 핸드크래프트 비건 화장품을 만들고 있는 비거니 대표 김채소입니다.
                                    저희는 현재 와디즈 펀딩 3차까지 성공리에 마치며 충성 고객을 모으고 있는데요, 막상 매출액 어쩌고 저쩌고
                                    </SubText2></SubContent2>
                                <ImgContent1>
                                <div style={{display:"flex"}}>
                                    <ThumbUpOffAltIcon/>
                                    <div style={{marginRight:"15px", marginLeft:"5px"}}>1</div>
                                    <ChatBubbleOutlineIcon/>
                                    <div style={{marginRight:"5px", marginLeft:"5px"}}>5</div>
                                </div>
                                </ImgContent1>
                            </TextBox>
                            <div style={{display:"flex"}}>
                                <Hashtag>#투자유지</Hashtag>
                                <Hashtag>#엔젤투자자</Hashtag>
                            </div>
                        </Content2>
                        <Content2>
                            <TextBox>
                                <SubContent1>리:히어에서 진행하는 무료아이템 컨설팅 신청 어쩌구 저쩌구</SubContent1>
                                <SubContent2><SubText2>안녕하세요 핸드크래프트 비건 화장품을 만들고 있는 비거니 대표 김채소입니다.
                                    저희는 현재 와디즈 펀딩 3차까지 성공리에 마치며 충성 고객을 모으고 있는데요, 막상 매출액 어쩌고 저쩌고
                                    </SubText2></SubContent2>
                                <ImgContent1>
                                <div style={{display:"flex"}}>
                                    <ThumbUpOffAltIcon/>
                                    <div style={{marginRight:"15px", marginLeft:"5px"}}>1</div>
                                    <ChatBubbleOutlineIcon/>
                                    <div style={{marginRight:"5px", marginLeft:"5px"}}>5</div>
                                </div>
                                </ImgContent1>
                            </TextBox>
                            <div style={{display:"flex"}}>
                                <Hashtag>#투자유지</Hashtag>
                                <Hashtag>#엔젤투자자</Hashtag>
                            </div>
                        </Content2>
                    </ContentWrap>
                </Section2>
                <Line/>
                <Section2>
                    <Title>최근에 올라온 질문</Title>
                    <ContentWrap>
                    <Content2>
                            <TextBox>
                                <SubContent1>리:히어에서 진행하는 무료아이템 컨설팅 신청 어쩌구 저쩌구</SubContent1>
                                <SubContent2><SubText2>안녕하세요 핸드크래프트 비건 화장품을 만들고 있는 비거니 대표 김채소입니다.
                                    저희는 현재 와디즈 펀딩 3차까지 성공리에 마치며 충성 고객을 모으고 있는데요, 막상 매출액 어쩌고 저쩌고
                                    </SubText2></SubContent2>
                                <ImgContent1>
                                <div style={{display:"flex"}}>
                                    <ThumbUpOffAltIcon/>
                                    <div style={{marginRight:"15px", marginLeft:"5px"}}>1</div>
                                    <ChatBubbleOutlineIcon/>
                                    <div style={{marginRight:"5px", marginLeft:"5px"}}>5</div>
                                </div>
                                </ImgContent1>
                            </TextBox>
                            <div style={{display:"flex", marginBottom:"15px"}}>
                                <Hashtag>#투자유지</Hashtag>
                                <Hashtag>#엔젤투자자</Hashtag>
                            </div>
                        </Content2>
                        <Content2>
                            <TextBox>
                                <SubContent1>리:히어에서 진행하는 무료아이템 컨설팅 신청 어쩌구 저쩌구</SubContent1>
                                <SubContent2><SubText2>안녕하세요 핸드크래프트 비건 화장품을 만들고 있는 비거니 대표 김채소입니다.
                                    저희는 현재 와디즈 펀딩 3차까지 성공리에 마치며 충성 고객을 모으고 있는데요, 막상 매출액 어쩌고 저쩌고
                                    </SubText2></SubContent2>
                                <ImgContent1>
                                <div style={{display:"flex"}}>
                                    <ThumbUpOffAltIcon/>
                                    <div style={{marginRight:"15px", marginLeft:"5px"}}>1</div>
                                    <ChatBubbleOutlineIcon/>
                                    <div style={{marginRight:"5px", marginLeft:"5px"}}>5</div>
                                </div>
                                </ImgContent1>
                            </TextBox>
                            <div style={{display:"flex",marginBottom:"15px"}}>
                                <Hashtag>#투자유지</Hashtag>
                                <Hashtag>#엔젤투자자</Hashtag>
                            </div>
                        </Content2>
                        <Content2>
                            <TextBox>
                                <SubContent1>리:히어에서 진행하는 무료아이템 컨설팅 신청 어쩌구 저쩌구</SubContent1>
                                <SubContent2><SubText2>안녕하세요 핸드크래프트 비건 화장품을 만들고 있는 비거니 대표 김채소입니다.
                                    저희는 현재 와디즈 펀딩 3차까지 성공리에 마치며 충성 고객을 모으고 있는데요, 막상 매출액 어쩌고 저쩌고
                                    </SubText2></SubContent2>
                                <ImgContent1>
                                <div style={{display:"flex",marginBottom:"15px"}}>
                                    <ThumbUpOffAltIcon/>
                                    <div style={{marginRight:"15px", marginLeft:"5px"}}>1</div>
                                    <ChatBubbleOutlineIcon/>
                                    <div style={{marginRight:"5px", marginLeft:"5px"}}>5</div>
                                </div>
                                </ImgContent1>
                            </TextBox>
                            <div style={{display:"flex"}}>
                                <Hashtag>#투자유지</Hashtag>
                                <Hashtag>#엔젤투자자</Hashtag>
                            </div>
                        </Content2>
                        <Content2>
                            <TextBox>
                                <SubContent1>리:히어에서 진행하는 무료아이템 컨설팅 신청 어쩌구 저쩌구</SubContent1>
                                <SubContent2><SubText2>안녕하세요 핸드크래프트 비건 화장품을 만들고 있는 비거니 대표 김채소입니다.
                                    저희는 현재 와디즈 펀딩 3차까지 성공리에 마치며 충성 고객을 모으고 있는데요, 막상 매출액 어쩌고 저쩌고
                                    </SubText2></SubContent2>
                                <ImgContent1>
                                <div style={{display:"flex"}}>
                                    <ThumbUpOffAltIcon/>
                                    <div style={{marginRight:"15px", marginLeft:"5px"}}>1</div>
                                    <ChatBubbleOutlineIcon/>
                                    <div style={{marginRight:"5px", marginLeft:"5px"}}>5</div>
                                </div>
                                </ImgContent1>
                            </TextBox>
                            <div style={{display:"flex"}}>
                                <Hashtag>#투자유지</Hashtag>
                                <Hashtag>#엔젤투자자</Hashtag>
                            </div>
                        </Content2>
                        <Content2>
                            <TextBox>
                                <SubContent1>리:히어에서 진행하는 무료아이템 컨설팅 신청 어쩌구 저쩌구</SubContent1>
                                <SubContent2><SubText2>안녕하세요 핸드크래프트 비건 화장품을 만들고 있는 비거니 대표 김채소입니다.
                                    저희는 현재 와디즈 펀딩 3차까지 성공리에 마치며 충성 고객을 모으고 있는데요, 막상 매출액 어쩌고 저쩌고
                                    </SubText2></SubContent2>
                                <ImgContent1>
                                <div style={{display:"flex"}}>
                                    <ThumbUpOffAltIcon/>
                                    <div style={{marginRight:"15px", marginLeft:"5px"}}>1</div>
                                    <ChatBubbleOutlineIcon/>
                                    <div style={{marginRight:"5px", marginLeft:"5px"}}>5</div>
                                </div>
                                </ImgContent1>
                            </TextBox>
                            <div style={{display:"flex"}}>
                                <Hashtag>#투자유지</Hashtag>
                                <Hashtag>#엔젤투자자</Hashtag>
                            </div>
                        </Content2>
                        <Content2>
                            <TextBox>
                                <SubContent1>리:히어에서 진행하는 무료아이템 컨설팅 신청 어쩌구 저쩌구</SubContent1>
                                <SubContent2><SubText2>안녕하세요 핸드크래프트 비건 화장품을 만들고 있는 비거니 대표 김채소입니다.
                                    저희는 현재 와디즈 펀딩 3차까지 성공리에 마치며 충성 고객을 모으고 있는데요, 막상 매출액 어쩌고 저쩌고
                                    </SubText2></SubContent2>
                                <ImgContent1>
                                <div style={{display:"flex"}}>
                                    <ThumbUpOffAltIcon/>
                                    <div style={{marginRight:"15px", marginLeft:"5px"}}>1</div>
                                    <ChatBubbleOutlineIcon/>
                                    <div style={{marginRight:"5px", marginLeft:"5px"}}>5</div>
                                </div>
                                </ImgContent1>
                            </TextBox>
                            <div style={{display:"flex"}}>
                                <Hashtag>#투자유지</Hashtag>
                                <Hashtag>#엔젤투자자</Hashtag>
                            </div>
                        </Content2>
                    </ContentWrap></Section2>
                <Line />
                <Section4>
                <Title>book by RE:Hear - 리:히어 콘텐츠를 책으로 즐겨보세요!</Title>
                <BookContent>
                    <Content4>
                        <ImgWrap4></ImgWrap4>
                        <MainContent>개발자가 대표로 살아남기</MainContent>
                        <SubContent3>자본이 많아야만 성공한다? 소자본으로 실패 후, 소자본으로 성공한 대표 8인의 인터뷰</SubContent3>
                    </Content4>
                    <Content4>
                        <ImgWrap4></ImgWrap4>
                        <MainContent>개발자가 대표로 살아남기</MainContent>
                        <SubContent3>자본이 많아야만 성공한다? 소자본으로 실패 후, 소자본으로 성공한 대표 8인의 인터뷰</SubContent3>
                    </Content4>
                    <Content4>
                        <ImgWrap4></ImgWrap4>
                        <MainContent>개발자가 대표로 살아남기</MainContent>
                        <SubContent3>자본이 많아야만 성공한다? 소자본으로 실패 후, 소자본으로 성공한 대표 8인의 인터뷰</SubContent3>
                    </Content4>
                </BookContent>
                </Section4>
            </Container>
            <Footer/>
        </StyledHome>
    )
}

export default Home;