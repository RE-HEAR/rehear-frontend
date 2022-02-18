import React from 'react';
import styled from "styled-components";
import NavBar from './shared/NavBar.js';

const StyledHome = styled.div`
`
const Container = styled.div`
width: 1000px;
margin: auto;
`
const Banner = styled.div`
height: 250px;
margin-top: 20px;
background: #c4c4c4;
`
const Title = styled.div`
height: 20px;
margin-bottom: 25px;
font-size: 20px;
font-weight: bold;
color: #222222;
`
const ContentWrap = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`
const MainContent = styled.div`
height: 20px;
margin-top: 5px;
font-size: 14px;
font-weight: bold;
overflow: hidden;
`
const SubContent1 = styled.div`
height: 15px;
margin-top: 5px;
font-size: 12px;
overflow: hidden;
`
const SubContent2 = styled.div`
height: 35px;
margin-top: 10px;
font-size: 12px;
overflow: hidden;
`
const SubContent3 = styled.div`
height: 50px;
margin-top: 10px;
font-size: 12px;
overflow: hidden;
`
const Line = styled.hr`
width: 990px;
margin-top: 20px;
`
const Section1 = styled.div`
height: 300px;
margin-top: 20px;
`
const Content1 = styled.div`
width: 225px;
height: 255px;
`
const ImgContent1 = styled.div`
width: 225px;
height: 170px;
background: #c4c4c4;
`
const Section2 = styled.div`
height: 500px;
margin-top: 20px;
`
const Content2 = styled.div`
width: 300px;
height: 230px;
`
const ImgContent2 = styled.div`
width: 300px;
height: 150px;
background: #c4c4c4;
`
const Section4 = styled.div`
height: 300px;
margin-top: 20px;
margin-bottom: 20px;
`
const Content4 = styled.div`
width: 280px;
height: 255px;
`
const ImgWrap4 = styled.div`
width: 280px;
height: 170px;
background: #c4c4c4;
`

function Home() {
    return(
        <StyledHome>
            <NavBar></NavBar>
            <Banner></Banner>
            <Container>
                <Section1>
                    <Title>카테고리1</Title>
                    <ContentWrap>
                        <Content1>
                            <ImgContent1></ImgContent1>
                            <SubContent1>인터뷰</SubContent1>
                            <SubContent2>안녕하세용 두줄이 최대임</SubContent2>
                        </Content1>
                        <Content1>
                            <ImgContent1></ImgContent1>
                            <SubContent1>인터뷰</SubContent1>
                            <SubContent2>안녕하세용 두줄이 최대임</SubContent2>
                        </Content1>
                        <Content1>
                            <ImgContent1></ImgContent1>
                            <SubContent1>인터뷰</SubContent1>
                            <SubContent2>안녕하세용 두줄이 최대임</SubContent2>
                        </Content1>
                        <Content1>
                            <ImgContent1></ImgContent1>
                            <SubContent1>인터뷰</SubContent1>
                            <SubContent2>안녕하세용 두줄이 최대임</SubContent2>
                        </Content1>
                    </ContentWrap>
                </Section1>
                <Line />
                <Section2>
                    <Title>여성 대표들의 이야기를 들어보고 싶다면!</Title>
                    <ContentWrap>
                        <Content2>
                            <ImgContent2></ImgContent2>
                            <SubContent2>“실패했다고 끝이 아니거든요. 오히려 비로소 그때가 진짜 시작이죠.”</SubContent2>
                            <SubContent1>이시은 대표의 인터뷰 지금 읽기</SubContent1>
                        </Content2>
                        <Content2>
                            <ImgContent2></ImgContent2>
                            <SubContent2>“실패했다고 끝이 아니거든요. 오히려 비로소 그때가 진짜 시작이죠.”</SubContent2>
                            <SubContent1>이시은 대표의 인터뷰 지금 읽기</SubContent1>
                        </Content2>
                        <Content2>
                            <ImgContent2></ImgContent2>
                            <SubContent2>“실패했다고 끝이 아니거든요. 오히려 비로소 그때가 진짜 시작이죠.”</SubContent2>
                            <SubContent1>이시은 대표의 인터뷰 지금 읽기</SubContent1>
                        </Content2>
                        <Content2>
                            <ImgContent2></ImgContent2>
                            <SubContent2>“실패했다고 끝이 아니거든요. 오히려 비로소 그때가 진짜 시작이죠.”</SubContent2>
                            <SubContent1>이시은 대표의 인터뷰 지금 읽기</SubContent1>
                        </Content2>
                        <Content2>
                            <ImgContent2></ImgContent2>
                            <SubContent2>“실패했다고 끝이 아니거든요. 오히려 비로소 그때가 진짜 시작이죠.”</SubContent2>
                            <SubContent1>이시은 대표의 인터뷰 지금 읽기</SubContent1>
                        </Content2>
                        <Content2>
                            <ImgContent2></ImgContent2>
                            <SubContent2>“실패했다고 끝이 아니거든요. 오히려 비로소 그때가 진짜 시작이죠.”</SubContent2>
                            <SubContent1>이시은 대표의 인터뷰 지금 읽기</SubContent1>
                        </Content2>
                    </ContentWrap>
                </Section2>
                <Line />
                <Section2>
                    <Title>투자 받는 법을 알고 싶다면</Title>
                    <ContentWrap>
                        <Content2>
                            <ImgContent2></ImgContent2>
                            <SubContent2>“실패했다고 끝이 아니거든요. 오히려 비로소 그때가 진짜 시작이죠.”</SubContent2>
                            <SubContent1>이시은 대표의 인터뷰 지금 읽기</SubContent1>
                        </Content2>
                        <Content2>
                            <ImgContent2></ImgContent2>
                            <SubContent2>“실패했다고 끝이 아니거든요. 오히려 비로소 그때가 진짜 시작이죠.”</SubContent2>
                            <SubContent1>이시은 대표의 인터뷰 지금 읽기</SubContent1>
                        </Content2>
                        <Content2>
                            <ImgContent2></ImgContent2>
                            <SubContent2>“실패했다고 끝이 아니거든요. 오히려 비로소 그때가 진짜 시작이죠.”</SubContent2>
                            <SubContent1>이시은 대표의 인터뷰 지금 읽기</SubContent1>
                        </Content2>
                        <Content2>
                            <ImgContent2></ImgContent2>
                            <SubContent2>“실패했다고 끝이 아니거든요. 오히려 비로소 그때가 진짜 시작이죠.”</SubContent2>
                            <SubContent1>이시은 대표의 인터뷰 지금 읽기</SubContent1>
                        </Content2>
                        <Content2>
                            <ImgContent2></ImgContent2>
                            <SubContent2>“실패했다고 끝이 아니거든요. 오히려 비로소 그때가 진짜 시작이죠.”</SubContent2>
                            <SubContent1>이시은 대표의 인터뷰 지금 읽기</SubContent1>
                        </Content2>
                        <Content2>
                            <ImgContent2></ImgContent2>
                            <SubContent2>“실패했다고 끝이 아니거든요. 오히려 비로소 그때가 진짜 시작이죠.”</SubContent2>
                            <SubContent1>이시은 대표의 인터뷰 지금 읽기</SubContent1>
                        </Content2>
                    </ContentWrap></Section2>
                <Line />
                <Section4>
                <Title>book by RE:Hear - 리:히어 콘텐츠를 책으로 즐겨보세요!</Title>
                <ContentWrap>
                    <Content4>
                        <ImgWrap4></ImgWrap4>
                        <MainContent>개발자가 대표로 살아남기</MainContent>
                        <SubContent3>자본이 많아야만 성공한다? 소자본으로 실패 후, 소자본으로 성공한 대표 8인의 인터뷰, 소자본으로 성공한 대표 8인의 인터뷰,</SubContent3>
                    </Content4>
                    <Content4>
                        <ImgWrap4></ImgWrap4>
                        <MainContent>개발자가 대표로 살아남기</MainContent>
                        <SubContent3>자본이 많아야만 성공한다? 소자본으로 실패 후, 소자본으로 성공한 대표 8인의 인터뷰, 소자본으로 성공한 대표 8인의 인터뷰,</SubContent3>
                    </Content4>
                    <Content4>
                        <ImgWrap4></ImgWrap4>
                        <MainContent>개발자가 대표로 살아남기</MainContent>
                        <SubContent3>자본이 많아야만 성공한다? 소자본으로 실패 후, 소자본으로 성공한 대표 8인의 인터뷰, 소자본으로 성공한 대표 8인의 인터뷰,</SubContent3>
                    </Content4>
                </ContentWrap>
                </Section4>
            </Container>
        </StyledHome>
    )
}

export default Home;