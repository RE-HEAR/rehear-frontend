import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import * as Join from "../screens/join.js";

function useOutsideAlerter(ref) {
  function handleClickOutSide(event) {
    if (ref.current && !ref.current.contains(event.target)) {
      // alert("click outside");
      console.log(ref);
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutSide);
    return () => {
      document.removeEventListener("mousedown", handleClickOutSide);
    };
  });
}

const Dropdown = (props) => {
  const [item, setItem] = React.useState(null);

  const onActiveToggle = () => {
    if (props.condition === "") {
      startupChange();
    } else if (props.condition === "나이") {
      ageChange();
    }
  };

  const startupChange = () => {
    props.setStartupActive(!props.startupActive);
    props.setAgeActive(false);
  };

  const ageChange = () => {
    props.setStartupActive(false);
    props.setAgeActive(!props.ageActive);
  };

  const onSelectItem = (name) => {
    setItem(name);
    props.state(name);

    if (props.startupActive) {
      props.setStartupActive(!props.startupActive);
    } else if (props.ageActive) {
      props.setAgeActive(!props.ageActive);
    }
  };

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);
  let f;

  return (
    <DropdownContainer onClick={onActiveToggle}>
      <DropdownBody>
        {item ? (
          <>
            <ItemName>{`${item}`}</ItemName>
          </>
        ) : (
          <>
            <DropdownSelect>{`${props.title}`}</DropdownSelect>
            <div style={{ position: "absolute", right: "-20px" }}>
              <ArrowDropDownOutlinedIcon />
            </div>
          </>
        )}
      </DropdownBody>
      {props.startupActive ? (
        <DropdownMenu id="type2" isActive={props.startupActive}>
          {props.startupItems &&
            props.startupItems.map((item) => (
              <DropdownItemContainer
                key={item}
                onClick={() => {
                  onSelectItem(item);
                  Join.yCheck(item);
                }}
              >
                <div style={{ margin: "5px 3px 5px 3px" }}>{`${item}`}</div>
              </DropdownItemContainer>
            ))}
        </DropdownMenu>
      ) : null}

      {props.ageActive ? (
        <DropdownMenu id="type2" isActive={props.ageActive}>
          {props.ageItems &&
            props.ageItems.map((item) => (
              <DropdownItemContainer
                key={item}
                onClick={() => {
                  onSelectItem(item);
                  Join.sCheck(item);
                }}
              >
                <div style={{ margin: "5px 3px 5px 3px" }}>{`${item}`}</div>
              </DropdownItemContainer>
            ))}
        </DropdownMenu>
      ) : null}
    </DropdownContainer>
  );
};

const DropdownContainer = styled.div`
  // padding-left:100px;
  display: flex;
  align-items: center;
  position: relative;
  width: 85%;
  /* &:hover {
    cursor: pointer;
    border: 3px solid #fbc037;
    border-radius: 10px;
  } */
`;

const DisabledDropDownContainer = styled.div`
  width: 100px;
  //   margin: auto;
  //   text-align: center;
  border: 1px solid gray;
`;

const DropdownBody = styled.div`
  align-items: center;
  color: ${(props) => props.color && props.color};
  display: flex;
`;

const DropdownSelect = styled.p`
  font-size: 12px;
  margin: 0;
`;

const DropdownMenu = styled.ul`
  display: ${(props) => (props.isActive ? `block` : `none`)};
  // width: calc(100% - 110px);
  width: 130px;
  max-height: 200px;
  overflow: scroll;
  background-color: white;
  position: absolute;
  margin-top: 2px;
  margin-left: -5px;
  border: 1px solid #c4c4c4;
  box-shadow: 3px 3px 2px 2px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  overflow: hidden; // 가로 축 스크롤 감추기
  top: 25px;
  padding: 5px 20px 5px 10px;
  z-index: 1;
`;

const DropdownItemContainer = styled.li`
  display: flex;
  justify-content: space-between;
  margin-left: -5px;

  &:last-child {
    border-bottom: none;
  }
`;

const ItemName = styled.p`
  font-size: 12px;
  margin: 0;
  padding: 0;
`;

export default Dropdown;
