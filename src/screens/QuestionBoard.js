import React from "react";
import styled from "styled-components";
import NavBar from "../share/NavBar";
import Footer from "../share/footer";
import { Link } from "react-router-dom";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import SearchIcon from "@mui/icons-material/Search";
import "./QuestionBoard.scss";

const StyledHome = styled.div``;

function QnA_page1() {
  return (
    <StyledHome>
      <NavBar />
      <div id="container">
        <div id="banner">
          <div id="banner_content">
            <div id="title_QnA">
              <strong>QnA -</strong> 이 질문 리:히어 해주세요!
            </div>
            <div id="sub_QnA">
              여러분들의 고민과 답변 모두 소중하게 다시 들여다보는 ...
            </div>
          </div>
          <Link to="/QnA_page2">
            <input type="button" id="question" value="질문하기" />
          </Link>
        </div>
      </div>

      <div id="search">
        <SearchIcon id="search-icon" />
        <input
          id="search_content"
          type="text"
          placeholder="궁금한 주제가 있으신가요? 키워드를 검색해주세요 ex) IR 피칭덱"
          onChange={(e) => this.searchSpace(e)}
        ></input>
        <button id="btn-search">검색</button>
      </div>

      {/* ---- 금주의 QnA ---- */}
      <div id="container">
        <section id="section1">
          <div id="title">금주의 QnA</div>
          <div id="contentWrap">
            {/*컨텐츠 1*/}
            <div id="cont_type1">
              <Link to="/QDetail_Login" id="link">
                <div id="textbox">
                  <div id="sub_cont_title">
                    엔젤투자자와 투자유치건에 대해서 이런 갈등 .......
                  </div>
                  <div id="sub_cont_text">
                    <div id="sub-text">
                      안녕하세요 현재 저는 반려동물을 위한 플랫폼을 운영하고
                      있습니다. 이번에 좋은 기회로 저희에게 관심을 보여주신
                      엔젤투자자로부터...
                    </div>
                  </div>
                  <div id="img">
                    <div style={{ display: "flex" }}>
                      <ThumbUpOffAltIcon />
                      <div style={{ marginRight: "15px", marginLeft: "5px" }}>
                        1
                      </div>
                      <ChatBubbleOutlineIcon />
                      <div style={{ marginRight: "5px", marginLeft: "5px" }}>
                        5
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              <div style={{ display: "flex" }}>
                <div id="hashtag">#투자유지</div>
                <div id="hashtag">#엔젤투자자</div>
              </div>
            </div>
            {/*컨텐츠 2*/}
            <div id="cont_type1">
              <Link to="/QDetail_Login" id="link">
                <div id="textbox">
                  <div id="sub_cont_title">
                    스타트업 초기에는 원래 다 이렇게 어려운가요?
                  </div>
                  <div id="sub_cont_text">
                    <div id="sub-text">
                      이번에 제가 창업을 했는데 생각했던 것보다 힘들고 어려워서
                      다른 분들은 어떻게 이겨냈는지 궁금해요. 저는 특히 세무
                      부분에 대해 무지하여 혼자 다 하려고 하니 힘들었는데 그나라
                      리:히어...
                    </div>
                  </div>
                  <div id="img">
                    <div style={{ display: "flex" }}>
                      <ThumbUpOffAltIcon />
                      <div style={{ marginRight: "15px", marginLeft: "5px" }}>
                        1
                      </div>
                      <ChatBubbleOutlineIcon />
                      <div style={{ marginRight: "5px", marginLeft: "5px" }}>
                        2
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              <div style={{ display: "flex" }}>
                <div id="hashtag">#스타트업초기</div>
                <div id="hashtag">#데스밸리</div>
              </div>
            </div>
            {/*컨텐츠 3*/}
            <div id="cont_type1">
              <Link to="/QDetail_Login" id="link">
                <div id="textbox">
                  <div id="sub_cont_title">
                    이번에 진행되는 정부지원사업 관련해 IR 컨설팅...
                  </div>
                  <div id="sub_cont_text">
                    <div id="sub-text">
                      이번에 리:히어에서 진행하는 무료 컨설팅 받는 거 너무 큰
                      도움이 되었습니다. 그런데 그 외 다른 것도 컨설팅 받고
                      싶은데 혹시 함께 지원하여 피드백을 ...
                    </div>
                  </div>
                  <div id="img">
                    <div style={{ display: "flex" }}>
                      <ThumbUpOffAltIcon />
                      <div style={{ marginRight: "15px", marginLeft: "5px" }}>
                        1
                      </div>
                      <ChatBubbleOutlineIcon />
                      <div style={{ marginRight: "5px", marginLeft: "5px" }}>
                        5
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              <div style={{ display: "flex" }}>
                <div id="hashtag">#투자유지</div>
                <div id="hashtag">#엔젤투자자</div>
              </div>
            </div>
            {/*컨텐츠 4*/}
            <div id="cont_type1">
              <Link to="/QDetail_Login" id="link">
                {/* <Link to="/QDetail_NonLogin" id="link">  -> 로그인 비로그인 페이지 다르게 해야함*/}
                <div id="textbox">
                  <div id="sub_cont_title">
                    이번에 진행되는 정부지원사업 관련해 IR 컨설팅...
                  </div>
                  <div id="sub_cont_text">
                    <div id="sub-text">
                      이번에 리:히어에서 진행하는 무료 컨설팅 받는 거 너무 큰
                      도움이 되었습니다. 그런데 그 외 다른 것도 컨설팅 받고
                      싶은데 혹시 함께 지원하여 피드백을 ...
                    </div>
                  </div>
                  <div id="img">
                    <div style={{ display: "flex" }}>
                      <ThumbUpOffAltIcon />
                      <div style={{ marginRight: "15px", marginLeft: "5px" }}>
                        1
                      </div>
                      <ChatBubbleOutlineIcon />
                      <div style={{ marginRight: "5px", marginLeft: "5px" }}>
                        5
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              <div style={{ display: "flex" }}>
                <div id="hashtag">#지원사업</div>
                <div id="hashtag">#무료특강</div>
              </div>
            </div>
          </div>
        </section>

        {/* ---- 전문가가 리:히어 한 글들을 모아봤어요 ---- */}
        <section id="section2">
          <div id="title">전문가가 리:히어 한 글들을 모아봤어요</div>
          <div id="contentWrap">
            {/*컨텐츠 1*/}
            {/*Content2 -> Content1과 크기가 다르기 때문에 이름 다름*/}
            <div id="cont_type2">
              <Link to="/QDetail_Login" id="link">
                <div id="textbox">
                  <div id="sub_cont_title">
                    IR 피칭 시 복장이 많이 중요한가요?
                  </div>
                  <div id="sub_cont_text">
                    <div id="sub-text">
                      이번에 서류전행 통과하여 IR 피칭을 대면으로 하게
                      되었습니다. 너무 감사한 일인데 막상 하려고 하니 하나부터
                      열까지 아는 게 없어서 질문글 올립니다. 당장 뭘
                      입어야할지도 모르겠고 피치덱도 지금...
                    </div>
                  </div>
                  <div id="img">
                    <div style={{ display: "flex" }}>
                      <ThumbUpOffAltIcon />
                      <div style={{ marginRight: "15px", marginLeft: "5px" }}>
                        1
                      </div>
                      <ChatBubbleOutlineIcon />
                      <div style={{ marginRight: "5px", marginLeft: "5px" }}>
                        5
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              <div style={{ display: "flex", marginBottom: "15px" }}>
                <div id="hashtag">#투자유지</div>
                <div id="hashtag">#엔젤투자자</div>
              </div>
            </div>
            {/*컨텐츠 2*/}
            <div id="cont_type2">
              <Link to="/QDetail_Login" id="link">
                <div id="textbox">
                  <div id="sub_cont_title">
                    저희 회사가 이번에 데스밸리에 진입한 듯 합니다...
                  </div>
                  <div id="sub_cont_text">
                    <div id="sub-text">
                      안녕하세요 현재 저는 반려동물을 위한 플랫폼을 운영하고
                      있습니다. 이번에 좋은 기회로 저희에게 관심을 보여주신
                      엔젤투자자로부터 규모가 있는 투자를 받게 되었습니다.
                    </div>
                  </div>
                  <div id="img">
                    <div style={{ display: "flex" }}>
                      <ThumbUpOffAltIcon />
                      <div style={{ marginRight: "15px", marginLeft: "5px" }}>
                        1
                      </div>
                      <ChatBubbleOutlineIcon />
                      <div style={{ marginRight: "5px", marginLeft: "5px" }}>
                        5
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              <div style={{ display: "flex", marginBottom: "15px" }}>
                <div id="hashtag">#투자유지</div>
                <div id="hashtag">#엔젤투자자</div>
              </div>
            </div>
            {/*컨텐츠 3*/}
            <div id="cont_type2">
              <Link to="/QDetail_Login" id="link">
                <div id="textbox">
                  <div id="sub_cont_title">
                    지역 지원 사업을 지원하게 되었는데 이 경우에 ...
                  </div>
                  <div id="sub_cont_text">
                    <div id="sub-text">
                      안녕하세요 현재 저는 반려동물을 위한 플랫폼을 운영하고
                      있습니다. 이번에 좋은 기회로 저희에게 관심을 보여주신
                      엔젤투자자로부터 규모가 있는 투자를 받게 되었습니다.
                    </div>
                  </div>
                  <div id="img">
                    <div style={{ display: "flex" }}>
                      <ThumbUpOffAltIcon />
                      <div style={{ marginRight: "15px", marginLeft: "5px" }}>
                        1
                      </div>
                      <ChatBubbleOutlineIcon />
                      <div style={{ marginRight: "5px", marginLeft: "5px" }}>
                        5
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              <div style={{ display: "flex", marginBottom: "15px" }}>
                <div id="hashtag">#투자유지</div>
                <div id="hashtag">#엔젤투자자</div>
              </div>
            </div>
          </div>
        </section>

        {/* ---- 최근에 올라온 질문 ---- */}
        <section id="section3">
          <div id="title">최근에 올라온 질문</div>
          <div id="contentWrap">
            {/*컨텐츠 1*/}
            <div id="cont_type2">
              <Link to="/QDetail_Login" id="link">
                <div id="textbox">
                  <div id="sub_cont_title">
                    리:히어에서 진행하는 무료아이템 컨설팅 신청 ......
                  </div>
                  <div id="sub_cont_text">
                    <div id="sub-text">
                      안녕하세요 핸드크래프트 비건 화장품을 만들고 있는 비거니
                      대표 김채소입니다. 저희는 현재 와디즈 펀딩 3차까지
                      성공리에 마치며 충성 고객을 모으고 있는데요, 막상 매출액
                      .....
                    </div>
                  </div>
                  <div id="img">
                    <div style={{ display: "flex" }}>
                      <ThumbUpOffAltIcon />
                      <div style={{ marginRight: "15px", marginLeft: "5px" }}>
                        1
                      </div>
                      <ChatBubbleOutlineIcon />
                      <div style={{ marginRight: "5px", marginLeft: "5px" }}>
                        5
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              <div style={{ display: "flex", marginBottom: "15px" }}>
                <div id="hashtag">#투자유지</div>
                <div id="hashtag">#엔젤투자자</div>
              </div>
            </div>
            {/*컨텐츠 2*/}
            <div id="cont_type2">
              <Link to="/QDetail_Login" id="link">
                <div id="textbox">
                  <div id="sub_cont_title">
                    사업계획서 작성 시 아직까지 눈에 띄는 매출이 ...
                  </div>
                  <div id="sub_cont_text">
                    <div id="sub-text">
                      안녕하세요 핸드크래프트 비건 화장품을 만들고 있는 비거니
                      대표 김채소입니다. 저희는 현재 와디즈 펀딩 3차까지
                      성공리에 마치며 충성 고객을 모으고 있는데요, 막상 매출액
                      ....
                    </div>
                  </div>
                  <div id="img">
                    <div style={{ display: "flex" }}>
                      <ThumbUpOffAltIcon />
                      <div style={{ marginRight: "15px", marginLeft: "5px" }}>
                        1
                      </div>
                      <ChatBubbleOutlineIcon />
                      <div style={{ marginRight: "5px", marginLeft: "5px" }}>
                        5
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              <div style={{ display: "flex", marginBottom: "15px" }}>
                <div id="hashtag">#투자유지</div>
                <div id="hashtag">#엔젤투자자</div>
              </div>
            </div>
            {/*컨텐츠 3*/}
            <div id="cont_type2">
              <Link to="/QDetail_Login" id="link">
                <div id="textbox">
                  <div id="sub_cont_title">
                    수요조사와 실제 수요가 다른 경우 어떻게 하면 ...
                  </div>
                  <div id="sub_cont_text">
                    <div id="sub-text">
                      안녕하세요 다이어트 식단 기록을 도와주는 어플 다식기 대표
                      ㅁㅁㅁ입니다. 이번에 저희가 새로 구독 서비스를 출시하려고
                      오픈 베타 수요조사를 하였는데요. 실제로 신청을 ....
                    </div>
                  </div>
                  <div id="img">
                    <div style={{ display: "flex", marginBottom: "15px" }}>
                      <ThumbUpOffAltIcon />
                      <div style={{ marginRight: "15px", marginLeft: "5px" }}>
                        1
                      </div>
                      <ChatBubbleOutlineIcon />
                      <div style={{ marginRight: "5px", marginLeft: "5px" }}>
                        5
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              <div style={{ display: "flex" }}>
                <div id="hashtag">#투자유지</div>
                <div id="hashtag">#엔젤투자자</div>
              </div>
            </div>
            {/*컨텐츠 4*/}
            <div id="cont_type2">
              <Link to="/QDetail_Login" id="link">
                <div id="textbox">
                  <div id="sub_cont_title">
                    리:히어에서 진행하는 무료아이템 컨설팅 신청 어쩌구 저쩌구
                  </div>
                  <div id="sub_cont_text">
                    <div id="sub-text">
                      안녕하세요 핸드크래프트 비건 화장품을 만들고 있는 비거니
                      대표 김채소입니다. 저희는 현재 와디즈 펀딩 3차까지
                      성공리에 마치며 충성 고객을 모으고 있는데요, 막상 매출액
                      어쩌고 저쩌고
                    </div>
                  </div>
                  <div id="img">
                    <div style={{ display: "flex" }}>
                      <ThumbUpOffAltIcon />
                      <div style={{ marginRight: "15px", marginLeft: "5px" }}>
                        1
                      </div>
                      <ChatBubbleOutlineIcon />
                      <div style={{ marginRight: "5px", marginLeft: "5px" }}>
                        5
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              <div style={{ display: "flex" }}>
                <div id="hashtag">#투자유지</div>
                <div id="hashtag">#엔젤투자자</div>
              </div>
            </div>
            {/*컨텐츠 5*/}
            <div id="cont_type2">
              <Link to="/QDetail_Login" id="link">
                <div id="textbox">
                  <div id="sub_cont_title">
                    리:히어에서 진행하는 무료아이템 컨설팅 신청 어쩌구 저쩌구
                  </div>
                  <div id="sub_cont_text">
                    <div id="sub-text">
                      안녕하세요 핸드크래프트 비건 화장품을 만들고 있는 비거니
                      대표 김채소입니다. 저희는 현재 와디즈 펀딩 3차까지
                      성공리에 마치며 충성 고객을 모으고 있는데요, 막상 매출액
                      어쩌고 저쩌고
                    </div>
                  </div>
                  <div id="img">
                    <div style={{ display: "flex" }}>
                      <ThumbUpOffAltIcon />
                      <div style={{ marginRight: "15px", marginLeft: "5px" }}>
                        1
                      </div>
                      <ChatBubbleOutlineIcon />
                      <div style={{ marginRight: "5px", marginLeft: "5px" }}>
                        5
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              <div style={{ display: "flex" }}>
                <div id="hashtag">#투자유지</div>
                <div id="hashtag">#엔젤투자자</div>
              </div>
            </div>
            {/*컨텐츠 6*/}
            <div id="cont_type2">
              <Link to="/QDetail_Login" id="link">
                <div id="textbox">
                  <div id="sub_cont_title">
                    리:히어에서 진행하는 무료아이템 컨설팅 신청 어쩌구 저쩌구
                  </div>
                  <div id="sub_cont_text">
                    <div id="sub-text">
                      안녕하세요 핸드크래프트 비건 화장품을 만들고 있는 비거니
                      대표 김채소입니다. 저희는 현재 와디즈 펀딩 3차까지
                      성공리에 마치며 충성 고객을 모으고 있는데요, 막상 매출액
                      어쩌고 저쩌고
                    </div>
                  </div>
                  <div id="img">
                    <div style={{ display: "flex" }}>
                      <ThumbUpOffAltIcon />
                      <div style={{ marginRight: "15px", marginLeft: "5px" }}>
                        1
                      </div>
                      <ChatBubbleOutlineIcon />
                      <div style={{ marginRight: "5px", marginLeft: "5px" }}>
                        5
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              <div style={{ display: "flex" }}>
                <div id="hashtag">#투자유지</div>
                <div id="hashtag">#엔젤투자자</div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </StyledHome>
  );
}

export default QnA_page1;
