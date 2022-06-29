import React, { Component } from "react";
import styled from "styled-components";
import NavBar from "../share/NavBar";
import Footer from "../share/footer";
import { Link } from "react-router-dom";
import axios from "axios";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import MessageIcon from "@mui/icons-material/Message";
// import { CenterFocusStrong } from "@material-ui/icons";
import "./Font.scss";

const StyledHome = styled.div``;
const Container = styled.div`
  width: 1000px;
  margin: auto;
  margin-bottom: 50px;
`;
const Banner = styled.div`
  height: 100px;
  margin: 20px -50px px -50px; /*상 우 하 좌*/
  background: #ededed;
  object-fit: cover;
`;
const Banner_Content = styled.div`
  float: left;
  padding-left: 100px;
`;
const icon = {
  marginTop: 23,
  marginLeft: 15,
  width: 50,
  height: 60,
  color: "#585858",
};
const TheList = styled.div`
  font-size: 30px;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 30px;
  color: #585858;
  float: right;
`;
const QuestionWrap = styled.div`
  object-fit: cover;
  height: 40px;
`;
const Question = styled.div`
  float: left;
`;
const Title = styled.div`
  margin-left: 120px;
  font-size: 35px;
  color: black;
  float: left;
`;
const HashTag1 = styled.div`
  margin-top: 11px;
  margin-left: 7px;
  float: left;
  padding: 3px;
  border: 1px solid;
  border-radius: 50px;
  color: #075e53;
  font-size: 13px;
`;
const HashTag2 = styled.div`
  margin-top: 11px;
  margin-left: 7px;
  float: left;
  padding: 3px;
  border: 1px solid;
  border-radius: 50px;
  color: #075e53;
  font-size: 13px;
`;

const ContentWrap = styled.div`
  width: 760px;
  height: 100%;
  margin: 30px; /*상 우 하 좌*/
  margin-left: 130px;
  object-fit: cover;
`;

const Content = styled.div`
  color: black;
  white-space: pre-line;
  color: "black";
`;

const textstyle = {
  color: "black",
};
const AllIconWrap = styled.div`
  object-fit: cover;
  margin-left: 120px;
  text-align: center;
`;
const IconWrap = styled.div`
  margin-top: 15px;
  margin-right: 30px;
  float: left;
`;
const iconstyle1 = {
  width: 40,
  height: 40,
  float: "left",
  marginRight: 10,
};
const iconstyle2 = {
  marginTop: -2,
  width: 42,
  height: 42,
  // float: "left",
};
const p = {
  marginTop: 5,
  float: "left",
  fontSize: 20,
  marginRight: 5,
};
const Line = styled.hr`
  width: 1000px;
  border: solid 1px #ededed;
  margin: auto;
  margin-bottom: 25px;
  color: #ededed;
  clear: left;
`;
const commentIcon = {
  color: "#075e53",
  float: "left",
  width: 40,
  height: 40,
  marginLeft: 70,
};
const InputComment = styled.textarea`
  width: 800px;
  height: 40px;
  margin-left: 10px;
  /* margin-top: 30px; */
  resize: none;
  white-space: pre-line;
  word-wrap: break-word;
  word-break: break-all;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 13px;
  border-radius: 5px;
  border-color: #ededed;
  ::placeholder {
    font-style: italic;
  }
`;
const p2 = {
  textAlign: "center",
  fontSize: 20,
};

const login = {
  width: 90,
  height: 40,
  margin: "auto",
  marginTop: 30,
  marginBottom: 50,
  border: "none",
  borderRadius: 5,
  backgroundColor: "#075e53",
  color: "white",
  textAlign: "center",
  verticalAlign: "center",
  cursor: "pointer",
  fontSize: 15,
  fontFamily: "'Noto Sans KR', sans-serif",
  display: "block",
};

class QDetail_NonLogin extends Component {
  render() {
    return (
      <StyledHome>
        <NavBar />
        <Container>
          <Banner>
            <Banner_Content>
              <Link to="/QuestionBoard">
                <KeyboardBackspaceIcon style={icon} />
              </Link>
              <TheList>
                <strong>목록</strong>
              </TheList>
            </Banner_Content>
          </Banner>
        </Container>

        <Container>
          <QuestionWrap>
            <Question>
              <Title>
                <strong>비대면 서류평가 합격하신 분들</strong>
              </Title>
              <HashTag1>예비창업</HashTag1>
              <HashTag2>소상공인</HashTag2>
            </Question>
          </QuestionWrap>
        </Container>

        <Container>
          <ContentWrap>
            <Content>
              <p style={textstyle}>
                이번 면접은 대면인가요 비대면인가요?
                <br />
                그리고 #피치덱 어떻게 만들고 계신 지 궁금합니다.
                <br />
                제가 이런 거 처음이라서 어떻게 해야할 지 감이 안오네요 ㅠㅠ
              </p>
            </Content>
          </ContentWrap>
          <AllIconWrap>
            <IconWrap>
              <ThumbUpOffAltIcon style={iconstyle1} />
              <p style={p}>3</p>
            </IconWrap>
            <IconWrap>
              <ChatBubbleOutlineIcon style={iconstyle1} />
              <p style={p}>2</p>
            </IconWrap>
            <IconWrap>
              <BookmarkBorderIcon style={iconstyle2} onclick={0} />
              {/* 누르면 아이콘 바뀌게 */}
            </IconWrap>
          </AllIconWrap>
        </Container>
        <Line />
        <Container>
          <MessageIcon style={commentIcon} />
          <InputComment
            required
            type="text"
            name="comment"
            placeholder="댓글을 작성하려면 로그인 해주세요"
            disabled
          />
        </Container>

        <Container>
          <p style={p2}>
            <strong>참여하고 싶으시다면 지금 로그인 해주세요</strong>
          </p>
          <Link to="/Login">
            <input type="button" style={login} value="로그인" />
          </Link>
        </Container>
        <Footer />
      </StyledHome>
    );
  }
}

export default QDetail_NonLogin;
