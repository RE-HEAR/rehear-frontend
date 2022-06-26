import React from "react";
import styled from "styled-components";
import NavBar from "../share/NavBar";
import Footer from "../share/footer";
import { Link } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

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
const Question = styled.div`
  margin-left: 120px;
  font-size: 35px;
  color: #075e53;
`;
const InputTitle = styled.input`
  width: 800px;
  height: 35px;
  margin-left: 120px;
`;
const InputContent = styled.textarea`
  width: 800px;
  height: 400px;
  margin-left: 120px;
  margin-top: 30px;
  white-space: pre-wrap;
  word-wrap: break-word;
  word-break: break-all;
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
  verticalAlign: "middle",
  cursor: "pointer",
};

function RegisterQuestion() {
  return (
    <StyledHome>
      <NavBar />
      <Container>
        <Banner>
          <Banner_Content>
            <Link to="/QBoard">
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

      {/* if-else문 필요 - 제목과 글을 안쓰면 비활성화 시켜야 함 (색 변화) */}
      <Container>
        <InputTitle
          required
          type="text"
          placeholder="제목을 입력해주세요"
          onChange={(e) => this.titleSpace(e)}
        />
        <InputContent //현재 이부분 보완 필요함. 줄바꿈 적용안됨. 추후 발전시킬때 확인.
          required
          type="text"
          placeholder="어떤 고민과 질문이 있으신가요?
          자유롭게 작성해주세요!
          많은 이들이 리:히어 할 수 있도록 #해쉬태그를 꼭 사용해주세요! :)
          예시) #예비창업자 #사업계획서 #IR피칭
          주의: 질문을 올리신 후 답변이 달리면 다시 질문 글을 지울 수 없습니다. 유의해주세요!"
          onChange={(e) => this.contentSpace(e)}
        />
        <Link to="/QBoard">
          <input type="button" style={question} value="질문하기" />
        </Link>
      </Container>
      <Footer />
    </StyledHome>
  );
}

export default RegisterQuestion;
