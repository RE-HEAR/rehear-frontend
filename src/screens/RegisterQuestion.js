import React, { Component } from "react";
import styled from "styled-components";
import NavBar from "../share/NavBar";
import Footer from "../share/footer";
import { Link } from "react-router-dom";
import axios from "axios";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
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
  font-size: 35px;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 25px;
  color: #585858;
  float: right;
  font-family: "Noto Sans KR", sans-serif;
`;
const Question = styled.div`
  margin-left: 120px;
  font-size: 45px;
  color: #075e53;
  font-family: "Noto Sans KR", sans-serif;
`;
const InputTitle = styled.input`
  width: 800px;
  height: 35px;
  margin-left: 120px;
  font-family: "Noto Sans KR", sans-serif;
`;
const InputContent = styled.textarea`
  width: 800px;
  height: 400px;
  margin-left: 120px;
  margin-top: 30px;
  resize: none;
  white-space: pre-line;
  word-wrap: break-word;
  word-break: break-all;
  font-family: "Noto Sans KR", sans-serif;
`;
const question = {
  width: 90,
  height: 40,
  marginTop: 30,
  marginRight: 70,
  marginBottom: 25,
  border: "none",
  borderRadius: 5,
  backgroundColor: "#075e53",
  color: "white",
  float: "right",
  textAlign: "center",
  verticalAlign: "center",
  cursor: "pointer",
  fontSize: 15,
  fontFamily: "'Noto Sans KR', sans-serif",
};

// const BtnQ = styled.button`
//   width: 90px;
//   height: 40px;
//   margin-top: 30px;
//   margin-right: 70px;
//   margin-bottom: 25px;
//   border: none;
//   border-radius: 5px;
//   background-color: #075e53;
//   color: #ffffff;
//   float: right;
//   text-align: center;
//   vertical-align: middle;
//   cursor: pointer;
// `;

class RegisterQ extends Component {
  state = { title: "", content: "" };
  postBoard = async () => {
    const { title, content } = this.state;
    const post = await axios.post("http://localhost:3000/QuestionBoard", {
      title,
      content,
    });

    this.setState({
      title: "",
      content: "",
    });
    console.log(post);
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

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
          <Question>
            <strong>질문하기</strong>
          </Question>
        </Container>

        <Container>
          <InputTitle
            required
            type="text"
            name="title"
            placeholder="제목을 입력해주세요"
            onChange={this.handleChange}
            value={this.state.title}
          />
          <InputContent //현재 이부분 보완 필요함. 줄바꿈 적용안됨. 추후 발전시킬때 확인.
            required
            type="text"
            name="content"
            placeholder="어떤 고민과 질문이 있으신가요?
            자유롭게 작성해주세요!
            많은 이들이 리:히어 할 수 있도록 #해쉬태그를 꼭 사용해주세요! :)
            예시) #예비창업자 #사업계획서 #IR피칭
            주의: 질문을 올리신 후 답변이 달리면 다시 질문 글을 지울 수 없습니다. 유의해주세요!"
            onChange={this.handleChange}
            value={this.state.content}
          />
          {/* if-else문 필요 - 제목과 글을 안쓰면 비활성화 시켜야 함 (색 변화) */}
          <Link to="/QuestionBoard">
            <input
              type="button"
              style={question}
              value="질문하기"
              // onClick={this.postBoard}
            />
          </Link>
        </Container>
        <Footer />
      </StyledHome>
    );
  }
}

export default RegisterQ;
