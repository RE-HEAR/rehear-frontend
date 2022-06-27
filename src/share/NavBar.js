import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import NavDropdown from "../components/navDropdown";

const StyledNavBar = styled.div`
  width: 1000px;
  margin: 20px auto 0 auto;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  height: 120px;
`;
const Logo = styled.img`
  width: 120px;
  height: 40px;
  margin-top: 20px;
  // background: black;
  &:hover {
    cursor: pointer;
  }
`;
const FormContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 600px;
  height: 85px;
`;
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
`;
const BtnEnter = styled.button`
  width: 80px;
  height: 40px;
  margin-top: 15px;
  border: none;
  /* border: 1px #525252;
border-style: solid solid solid none; */
  border-radius: 0 5px 5px 0;
  background: #a2a9cd;
  color: #ffffff;
`;
const MenuWrap = styled.div`
  display: flex;
  justify-content: space-around;
  width: 420px;
  margin: 15px auto 0 auto;
`;
const BtnMenu = styled.button`
  background: none;
  color: #222222;
  border: none;
  &:hover {
    cursor: pointer;
    color: #a2a9cd;
    font-weight: 700;
  }
`;
const BtnWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 150px;
  height: 20px;
  margin-top: 15px;
  /* visibility: ; */
`;
const AccountBtn = styled.button`
  width: 70px;
  height: 20px;
  background: #a2a9cd;
  border: none;
  border-radius: 10px;
  font-size: 10px;
  color: #ffffff;
`;
const ProfileWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 150px;
  height: 35px;
  margin-top: 15px;
`;
const NameBox = styled.div`
  font-size: 15px;
  margin-right: 10px;
  &:hover {
    cursor: pointer;
  }
`;
const NavBar = (props) => {
  const [id, setId] = React.useState(null);

  const comunities = ["질문 게시판", "홍보 게시판", "실시간 왁자지껄"];
  const infos = ["사업 공고", "창업 소식"];
  const users = ["마이페이지", "계정관리", "로그아웃"];
  const [info, setInfo] = React.useState("예");
  const [infoActive, setInfoActive] = React.useState(false);
  const [community, setCommunity] = React.useState(0);
  const [communityActive, setCommunityActive] = React.useState(false);
  const [user, setUser] = React.useState(0);
  const [userActive, setUserActive] = React.useState(false);

  if (`${props.id}` === "") {
    return (
      <StyledNavBar>
        <Container>
          <Link to="../">
            <Logo src="img/logo_rehear.png"></Logo>
          </Link>
          <FormContainer>
            <Input></Input>
            <BtnEnter>검색</BtnEnter>
            <MenuWrap>
              <Link to="../Intro">
                <BtnMenu id="rehear">리:히어 이야기</BtnMenu>
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
          </FormContainer>
          <BtnWrap>
            <Link to="../Login">
              <AccountBtn>로그인</AccountBtn>
            </Link>
            <Link to="../Join">
              <AccountBtn>회원가입</AccountBtn>
            </Link>
          </BtnWrap>
        </Container>
      </StyledNavBar>
    );
  } else {
    return (
      <StyledNavBar>
        <Container>
          <Link to="../">
            <Logo src="img/logo_rehear.png"></Logo>
          </Link>
          <FormContainer>
            <Input></Input>
            <BtnEnter>검색</BtnEnter>
            <MenuWrap>
              <Link to="../Intro">
                <BtnMenu id="rehear">리:히어 이야기</BtnMenu>
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
          </FormContainer>
          <ProfileWrap>
            <AccountCircleIcon style={{ fontSize: "35px" }} />
            <NameBox>
              <NavDropdown
                userActive={userActive}
                setInfoActive={setInfoActive}
                setCommunityActive={setCommunityActive}
                setUserActive={setUserActive}
                condition={"사용자"}
                title={props.id + "님"}
                userItems={users}
                state={setCommunity}
              />
            </NameBox>
            <ArrowDropDownIcon style={{ fontSize: "35px" }} />
          </ProfileWrap>
        </Container>
      </StyledNavBar>
    );
  }
};

export default NavBar;
