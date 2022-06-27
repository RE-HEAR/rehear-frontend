import { fontWeight } from "@mui/system";
import React, {useRef, useEffect} from "react";
import styled from "styled-components";

const NavDropdown = (props) => {
  const [item, setItem] = React.useState(null);
  const onActiveToggle = () => {
    
    if (props.condition === "정보마당") {
      infoChange();
    } else if (props.condition === "커뮤니티") {
      communityChange();
    } else if (props.condition === "사용자") {
      userChange();
    } 
  };
  
  const infoChange = () => {
    props.setInfoActive(!props.infoActive);
    props.setCommunityActive(false);
    props.setUserActive(false);
  };

  const communityChange = () => {
    props.setInfoActive(false);
    props.setCommunityActive(!props.communityActive);
    props.setUserActive(false);
  };

  const userChange = () => {
    props.setInfoActive(false);
    props.setCommunityActive(false);
    props.setUserActive(!props.userActive);
  };

  const onSelectItem = (name) => {
    // setItem(name);
    // props.state(name);

    if (props.infoActive) {
      props.setInfoActive(!props.infoActive);
    } else if (props.communityActive) {
      props.setCommunityActive(!props.communityActive);
      if(name=="질문 게시판"){
        window.location.href="/qna_page";
      }
    } else if (props.userActive) {
      props.setUserActive(!props.userActive);
    } 
  };

  return (
    <NavDropdownContainer onClick={onActiveToggle}>
    
    {/* <NavDropdownContainer onMouseOver={onActiveToggle} onMouseOut={onActiveToggle}> */}
      <NavDropdownBody >
        {item ? (
          <>
            <NavItemName>{`${item}`}</NavItemName>
          </>
        ) : (
          <>
            <NavDropdownSelect >{`${props.title}`}</NavDropdownSelect>
            
          </>
        )}
      </NavDropdownBody>
      {props.infoActive ? (
        <NavDropdownMenu id="type2" isActive={props.infoActive} >
          {props.infoItems &&
            props.infoItems.map((item) => (
              <NavDropdownItemContainer 
                key={item} 
                onClick={() => {
                  onSelectItem(item);
                }}
                
              >
                <div id={item} style={{margin:"5px 3px 5px 3px"}} onMouseOver={() => {document.getElementById(item).style.fontWeight="700"}}
                onMouseOut={() => {document.getElementById(item).style.fontWeight="400"}}>{`${item}`}</div>
              </NavDropdownItemContainer>
            ))}
        </NavDropdownMenu>
      ) : null}

      {props.communityActive ? (
        <NavDropdownMenu id="type2" isActive={props.communityActive} >
          {props.communityItems &&
            props.communityItems.map((item) => (
              <NavDropdownItemContainer
                key={item}
                onClick={() => {
                  onSelectItem(item);
                }}
              >
                <div id={item} style={{margin:"5px 3px 5px 3px"}} onMouseOver={() => {document.getElementById(item).style.fontWeight="700"}}
                onMouseOut={() => {document.getElementById(item).style.fontWeight="400"}}>{`${item}`}</div>
              </NavDropdownItemContainer>
            ))}
        </NavDropdownMenu>
      ) : null}

      {props.userActive ? (
        <NavDropdownMenu id="type2" isActive={props.userActive} >
          {props.userItems &&
            props.userItems.map((item) => (
              <NavDropdownItemContainer 
                key={item} 
                onClick={() => {
                  onSelectItem(item);
                }}
              >
                <div id={item} style={{margin:"5px 3px 5px 3px"}} onMouseOver={() => {document.getElementById(item).style.fontWeight="700"}}
                onMouseOut={() => {document.getElementById(item).style.fontWeight="400"}}>{`${item}`}</div>
              </NavDropdownItemContainer>
            ))}
        </NavDropdownMenu>
      ) : null}

    </NavDropdownContainer>
  );
};

const NavDropdownContainer = styled.div`
  // padding-left:100px;
  display:flex;
  align-items:center;
  position:relative;

  /* &:hover {
    cursor: pointer;
    border: 3px solid #fbc037;
    border-radius: 10px;
  } */
`;

const NavDropdownBody = styled.div`
  align-items: center;
  color: ${(props) => props.color && props.color};
  display:flex;
`;

const NavDropdownSelect = styled.p`
  margin:0;
`;

const NavDropdownMenu = styled.ul`
  // display: ${(props) => (props.isActive ? `block` : `none`)};
  display:block;
  width:max-content;
  max-height: 200px;
  overflow: scroll;
  background-color: white;
  position: absolute;
  margin:0;
  margin-top: -1px;
  margin-left: -3px;
  border: 1px solid #c4c4c4;
  box-shadow: 3px 3px 2px 2px rgba(0,0,0,0.1);
  border-radius:5px;
  overflow: hidden; // 가로 축 스크롤 감추기
  top:25px;
  padding:5px 10px 5px 10px;
  z-index:1;
  font-weight:400;
`;

const NavDropdownItemContainer = styled.li`
  display: flex;
  justify-content: space-between;
  margin-left: -5px;
  color:black;

  &:last-child {
    border-bottom: none;
  }
`;

const NavItemName = styled.p`
  font-size: 12px;
  margin:0;
  padding:0;
`;

export default NavDropdown;
