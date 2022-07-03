import React, { useState } from "react";
import styled from "styled-components";
import "./join.scss";
import Footer from "../share/footer.js";
import { Link } from "react-router-dom";
import Dropdown from "../components/dropdown";
import Popup from "../components/popup";
import { Button } from "@material-ui/core";
import NavDropdown from "../components/navDropdown";
import { textAlign } from "@mui/system";

let flag = 0; //0 : 가입 실패, 1 : 가입 성공
let select_age = "";
let select_y_n = "";
export function yCheck(y = "") {
  select_y_n = y;
}
export function sCheck(s = "") {
  select_age = s;
}
function colorChange() {
  console.log(flag);
  if (flag == 0) {
    document.getElementById("join-checkBtn").style.backgroundColor =
      "rgba(237,237,237.0)";
    document.getElementById("checkM").style.display = "block";
    return false;
  } else {
    document.getElementById("join-checkBtn").style.backgroundColor = "#075E53";
    return true;
  }
}
function Join(props) {
  const {} = props;
  const [title, setTitle] = useState("");
  const [popup, handlePopup] = useState(false);
  const startups = ["예", "아니오"];
  const ages = ["10대", "20대", "30대", "40대", "기타"];
  const emailcheck = "ok";
  const titleEmail = "중복된 이메일입니다.";
  if (emailcheck == "ok") {
    const titleEmail = "사용 가능한 이메일입니다.";
  }
  const niccheck = "ok";
  const titleNic = "중복된 닉네임입니다.";
  if (niccheck == "ok") {
    const titleNic = "사용 가능한 닉네임입니다.";
  }

  const joinCheck = "회원가입이 완료되었습니다";

  const [startup, setStartup] = React.useState("예");
  const [age, setAge] = React.useState(0);
  const [startupActive, setStartupActive] = React.useState(false);
  const [ageActive, setAgeActive] = React.useState(false);

  const comunities = ["질문 게시판", "홍보 게시판", "실시간 왁자지껄"];
  const infos = ["사업 공고", "창업 소식"];
  const users = ["마이페이지", "계정관리", "로그아웃"];
  const [info, setInfo] = React.useState("예");
  const [infoActive, setInfoActive] = React.useState(false);
  const [community, setCommunity] = React.useState(0);
  const [communityActive, setCommunityActive] = React.useState(false);
  const [user, setUser] = React.useState(0);
  const [userActive, setUserActive] = React.useState(false);

  return (
    <div style={{ overflow: "auto", height: "100%" }}>
      <div id="join">
        <div id="join-box">
          <div id="menu">
            <img
              src="img/logo_rehear.png"
              className="Logo"
              alt="logo"
              height="40"
            />
            <MenuWrap>
              <Link to="">
                <BtnMenu>리:히어 이야기</BtnMenu>
              </Link>
              <BtnMenu>
                <NavDropdown
                  communityActive={communityActive}
                  setInfoActive={setInfoActive}
                  setCommunityActive={setCommunityActive}
                  setUserActive={setUserActive}
                  condition={"커뮤니티"}
                  title={"커뮤니티"}
                  communityItems={comunities}
                  state={setInfo}
                />
              </BtnMenu>
              <Link to="../Category">
                <BtnMenu>창업 경험담</BtnMenu>
              </Link>
              <BtnMenu>
                <NavDropdown
                  infoActive={infoActive}
                  setInfoActive={setInfoActive}
                  setCommunityActive={setCommunityActive}
                  setUserActive={setUserActive}
                  condition={"정보마당"}
                  title={"정보 마당"}
                  infoItems={infos}
                  state={setCommunity}
                />
              </BtnMenu>
            </MenuWrap>
          </div>
          <div id="body-box">
            <div style={{ width: "100%" }}>
              <div id="body">
                <div id="left">
                  <div id="email">
                    <div class="join">
                      <div class="name">이메일</div>
                      <input
                        type="text"
                        id="input_email"
                        class="txt-box"
                        placeholder="aaaa@email.com"
                        onChange={colorCheck}
                      />
                    </div>
                    <Container>
                      <Button
                        class="check-btn"
                        id="input_checkbox"
                        onClick={() => {
                          handlePopup(true);
                          setTitle(titleEmail);
                        }}
                      >
                        중복확인
                      </Button>
                      {popup && <Popup title={title} onClose={handlePopup} />}
                    </Container>
                  </div>
                  <div class="join">
                    <div class="name">비밀번호</div>
                    <input
                      type="password"
                      id="input_password"
                      class="txt-box"
                      onChange={colorCheck}
                      placeholder="비밀번호를 입력해주세요"
                    />
                  </div>
                  <div class="join">
                    <div class="name">비밀번호 확인</div>
                    <input
                      type="password"
                      id="input_passwordCheck"
                      class="txt-box"
                      onChange={colorCheck}
                      placeholder="비밀번호를 입력해주세요"
                    />
                  </div>
                  <div class="join">
                    <div class="name">이름</div>
                    <input
                      type="text"
                      id="input_name"
                      class="txt-box"
                      onChange={colorCheck}
                      placeholder="이름을 입력해주세요"
                    />
                  </div>
                  <div class="join">
                    <div class="name">창업 경험 유무</div>
                    <div class="txt-box">
                      <div
                        style={{
                          display: "flex",
                          height: "100%",
                          width: "100%",
                          alignItems: "center",
                          position: "relative",
                        }}
                      >
                        <Dropdown
                          startupActive={startupActive}
                          setStartupActive={setStartupActive}
                          setAgeActive={setAgeActive}
                          condition={""}
                          title={"선택해주세요"}
                          startupItems={startups}
                          state={setStartup}
                          style={{ width: "400px" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div id="right">
                  <div id="nic">
                    <div class="join">
                      <div class="name">닉네임</div>
                      <input
                        type="text"
                        id="input_nicName"
                        class="txt-box"
                        onChange={colorCheck}
                        placeholder="닉네임을 입력해주세요"
                      />
                    </div>
                    <Container>
                      <Button
                        class="check-btn"
                        onClick={() => {
                          handlePopup(true);
                          setTitle(titleNic);
                        }}
                      >
                        중복확인
                      </Button>
                      {popup && <Popup title={title} onClose={handlePopup} />}
                    </Container>
                  </div>
                  <div class="join">
                    <div class="name">연령대</div>
                    <div class="txt-box">
                      <div
                        style={{
                          display: "flex",
                          height: "100%",
                          alignItems: "center",
                        }}
                      >
                        <Dropdown
                          ageActive={ageActive}
                          setStartupActive={setStartupActive}
                          setAgeActive={setAgeActive}
                          condition={"나이"}
                          title={"선택해주세요"}
                          ageItems={ages}
                          state={setAge}
                        />
                      </div>
                    </div>
                  </div>
                  <div class="join">
                    <div class="name">직종</div>
                    <input
                      type="text"
                      id="input_company"
                      class="txt-box"
                      onChange={colorCheck}
                      placeholder="직종을 입력해주세요"
                    />
                  </div>
                  <div class="join">
                    <div class="name">가입 경로</div>
                    <input
                      type="text"
                      id="input_know"
                      class="txt-box"
                      onChange={colorCheck}
                      placeholder="가입경로를 입력해주세요"
                    />
                  </div>
                  <div class="join">
                    <div class="name">업종</div>
                    <input
                      type="text"
                      id="input_job"
                      class="txt-box"
                      onChange={colorCheck}
                      placeholder="창업 경험이 있다면 업종을 입력해주세요"
                    />
                  </div>
                </div>
              </div>

              <div id="service-box">
                <div id="agree-box">
                  <div class="bbox">
                    모두
                    <br />
                    동의합니다
                    <br />
                    <input type="checkbox" id="join-checkbox" />
                  </div>
                </div>
                <div id="join-service">
                  <textarea id="join-txt" defaultValue="서비스 약관"></textarea>
                </div>
              </div>
              <div id="checkM" class="bbox" style={{ color: "Red" }}>
                모든 빈칸을 올바르게 입력해주세요
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "10px",
                }}
              >
                <Container>
                  <Button
                    id="join-checkBtn"
                    onClick={() => {
                      handlePopup(colorChange());
                      setTitle(joinCheck);
                    }}
                  >
                    가입하기
                  </Button>
                  {popup && <Popup title={title} onClose={handlePopup} />}
                </Container>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  function colorCheck() {
    if (
      document.getElementById("input_email").value != "" &&
      document.getElementById("input_password").value != "" &&
      select_age != "" &&
      select_y_n != "" &&
      document.getElementById("input_passwordCheck").value != "" &&
      document.getElementById("input_name").value != "" &&
      document.getElementById("input_nicName").value != "" &&
      document.getElementById("input_company").value != "" &&
      document.getElementById("input_know").value != "" &&
      document.getElementById("input_job").value != ""
    ) {
      console.log("ok");
      document.getElementById("join-checkBtn").style.backgroundColor =
        "#075E53";
    } else {
      console.log("no");
    }
  }
}
const Container = styled.div``;
const DropdownContent = styled.div`
  display: ${(props) => (props.display ? "block" : "none")};
  margin-top: 17px;
`;
const MenuWrap = styled.div`
  display: flex;
  justify-content: space-around;
  width: 550px;
  margin-left: 20px;
`;
const BtnMenu = styled.button`
  background: none;
  color: #222222;
  font-size: 15px;
  border: none;
  &:hover {
    cursor: pointer;
    color: #075e53;
    font-weight: 700;
  }
`;
// const BtnWrap = styled.div`
//   display: flex;
//   justify-content: space-between;
//   width: 150px;
//   height: 20px;
//   margin-top: 15px;
//   visibility: ;
// `;

export default Join;
