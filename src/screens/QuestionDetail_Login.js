import React, { Component } from "react";
import styled from "styled-components";
import NavBar from "../share/NavBar";
import Footer from "../share/footer";
import { Link } from "react-router-dom";
import axios from "axios";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
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
const HashTag = styled.div`
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
  cursor: "pointer",
};
const iconstyle2 = {
  marginTop: -2,
  width: 42,
  height: 42,
  cursor: "pointer",
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
const Line2 = styled.hr`
  /* width: 1000px; */
  border: solid 1px #ededed;
  margin: auto;
  text-align: center;
  margin-top: 25px;
  margin-bottom: 25px;
  color: #ededed;
  clear: left;
`;
const InputWrap = styled.div`
  float: left;
`;
const commentIcon = {
  color: "#075e53",
  float: "left",
  width: 40,
  height: 40,
  marginLeft: 70,
};
const InputComment = styled.textarea`
  width: 740px;
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
`;
const submit = {
  width: 50,
  height: 45,
  // marginTop: -50,
  marginLeft: 10,
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
const CommentList = styled.div`
  clear: left;
  margin-left: 80px;
`;
const list = {
  marginBottom: 10,
  marginRight: 132,
};
const username = {
  fontSize: 30,
  float: "left",
};
const good = {
  width: 30,
  height: 30,
  float: "right",
  marginTop: 15,
  marginRight: 20,
  cursor: "pointer",
};
const recomment = {
  width: 30,
  height: 30,
  float: "right",
  marginTop: 15,
  cursor: "pointer",
};

class QDetail_Login extends Component {
  state = {
    comment: "",
    comments: [],
    // recomment: "",
    // recomments: [],
    isLikeChecked: false,
    isCommentChecked: false,
    isBookmarkChecked: false,
  };
  num = 0;

  handleChange = (e) => {
    this.setState({
      comment: e.target.value,
    });
  };

  handleComment = () => {
    this.setState({
      comments: this.state.comments.concat({
        num: this.num,
        comment: this.state.comment,
      }),
      comment: "",
    });
    this.num += 1;
  };
  like = () => {
    this.state.isLikeChecked
      ? this.setState({
          isLikeChecked: false,
        })
      : this.setState({
          isLikeChecked: true,
        });
  };

  comment = () => {
    this.state.isCommentChecked
      ? this.setState({
          isCommentChecked: false,
        })
      : this.setState({
          isCommentChecked: true,
        });
  };

  bookmark = () => {
    this.state.isBookmarkChecked
      ? this.setState({
          isBookmarkChecked: false,
        })
      : this.setState({
          isBookmarkChecked: true,
        });
  };

  render() {
    const { comments } = this.state;
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
              <HashTag>예비창업</HashTag>
              <HashTag>소상공인</HashTag>
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
              {this.state.isLikeChecked ? (
                <ThumbUpAltIcon style={iconstyle1} onClick={this.like} />
              ) : (
                <ThumbUpOffAltIcon style={iconstyle1} onClick={this.like} />
              )}
              <p style={p}>3</p> {/* 좋아요 눌리면 숫자 증가시켜야함 */}
            </IconWrap>
            <IconWrap>
              <ChatBubbleOutlineIcon style={iconstyle1} />
              <p style={p}>2</p>
            </IconWrap>
            <IconWrap>
              {/* 북마크 표시 */}
              {this.state.isBookmarkChecked ? (
                <BookmarkIcon style={iconstyle2} onClick={this.bookmark} />
              ) : (
                <BookmarkBorderIcon
                  style={iconstyle2}
                  onClick={this.bookmark}
                />
              )}
            </IconWrap>
          </AllIconWrap>
        </Container>
        <Line />
        <Container>
          <InputWrap>
            <MessageIcon style={commentIcon} />
            <InputComment
              required
              type="text"
              name="comment"
              placeholder="내용을 입력해주세요."
              onChange={this.handleChange}
              value={this.state.comment}
            />
            <input
              type="button"
              style={submit}
              value="등록"
              onClick={
                !this.state.comment
                  ? (e) => {
                      e.preventDefault();
                    }
                  : this.handleComment
              }
            />
          </InputWrap>
        </Container>

        <Container>
          <CommentList>
            <ul
              style={{
                listStyle: "none",
              }}
            >
              {comments.map((commentText) => {
                return (
                  <li key={commentText.num} style={list}>
                    <span style={username}>
                      <strong>김대표</strong> {/*유저 이름 들어가게 해야함*/}
                    </span>
                    <HashTag>예비창업자</HashTag>
                    {/*유저 해시태그 들어가게 해야함*/}
                    <HashTag>IT</HashTag>
                    {/* 클릭 시 대댓글 기능 구현 필요*/}
                    <ChatBubbleOutlineIcon style={recomment} onClick={0} />
                    {this.state.isLikeChecked ? (
                      <ThumbUpAltIcon style={good} onClick={this.like} />
                    ) : (
                      <ThumbUpOffAltIcon style={good} onClick={this.like} />
                    )}
                    <br />
                    <br />
                    <pre style={{ clear: "left" }}>{commentText.comment}</pre>
                    <Line2 />
                  </li>
                );
              })}
            </ul>
          </CommentList>
        </Container>
        <Footer />
      </StyledHome>
    );
  }
}

export default QDetail_Login;
