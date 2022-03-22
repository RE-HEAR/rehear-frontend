import React, {useRef, useEffect} from "react";
import styled from "styled-components";
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';

function useOutsideAlerter(ref){
    function handleClickOutSide(event){
        if(ref.current && !ref.current.contains(event.target)){
            // alert("click outside");
            console.log(ref);
        }
    }

    useEffect(()=>{
        document.addEventListener("mousedown",handleClickOutSide);
        return()=>{
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

  const wrapperRef=useRef(null);
  useOutsideAlerter(wrapperRef);

  return (
    <DropdownContainer  onClick={onActiveToggle} >
      <DropdownBody >
        {item ? (
          <>
            <ItemName>{`${item}`}</ItemName>
          </>
        ) : (
          <>
            <DropdownSelect >{`${props.title}`}</DropdownSelect><div style={{position:"absolute", right:"5px"}}><ArrowDropDownOutlinedIcon/></div>
            
          </>
        )}
      </DropdownBody>
      {props.startupActive ? (
        <DropdownMenu id="type2" isActive={props.startupActive} >
          {props.startupItems &&
            props.startupItems.map((item) => (
              <DropdownItemContainer 
                key={item}
                onClick={() => {
                  onSelectItem(item);
                }}
              >
                <div style={{margin:"5px 3px 5px 3px"}}>{`${item}`}</div>
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
                }}
              >
                <div style={{margin:"5px 3px 5px 3px"}}>{`${item}`}</div>
              </DropdownItemContainer>
            ))}
        </DropdownMenu>
      ) : null}

    </DropdownContainer>
  );
};

const DropdownContainer = styled.div`
  width: 400px;
  padding-left:100px;
//   border: 1px solid gray;
  display:flex;
  align-items:center;

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
  display:flex;
`;

const DropdownSelect = styled.p`
  font-size:12px;
  margin:0;
`;

const DropdownMenu = styled.ul`
  display: ${(props) => (props.isActive ? `block` : `none`)};
  width: calc(100% - 110px);
  max-height: 200px;
  overflow: scroll;
  background-color: white;
  position: absolute;
  margin-top: -1px;
  margin-left: -10px;
  border: 1px solid #c4c4c4;
  box-shadow: 3px 3px 2px 2px rgba(0,0,0,0.1);
  border-radius:5px;
  overflow: hidden; // 가로 축 스크롤 감추기
  top:45px;
  padding:5px 10px 5px 10px;
  z-index:1;
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
  margin:0;
  padding:0;
`;

export default Dropdown;

// import React, {Component, useState, useCallback} from 'react';
// import styled from "styled-components";
// import "./dropdown.scss";
// import "../share/color.scss"

// const Dropdown = () => {
//     const [isActive, setIsActive] = useState(false);
//     const [item, setItem] = useState(null);
  
//     const onActiveToggle = useCallback(() => {
//       setIsActive((prev) => !prev);
//     }, []);
  
//     const onSelectItem = useCallback((e) => {
//       const targetId = e.target.id;
  
//       if (targetId === "item_name") {
//         setItem(e.target.parentElement.innertText);
//       } else if (targetId === "item") {
//         setItem(e.target.innertText);
//       }
  
//       setIsActive((prev) => !prev);
//     }, []);

//     const dropdownItems = ["1","2","3"];
    
//     return (
//       <DropdownContainer>
//         <DropdownBody onClick={onActiveToggle}>
//           {item ? (
//             <>
//               <ItemName>{item}</ItemName>
//             </>
//           ) : (
            
//             <>
//               <DropdownSelect>선택해주세요.</DropdownSelect>
//               {/* <AiOutlineDown /> */}
//             </>
//           )}
//         </DropdownBody>
//         <DropdownMenu isActive={isActive}>
//           {dropdownItems.map((item) => (
//             <DropdownItemContainer id="item" key={item.id} onClick={onSelectItem}>
//               <ItemName id="item_name">{item.name}</ItemName>
//             </DropdownItemContainer>
//           ))}
//         </DropdownMenu>
//       </DropdownContainer>
//     );
//   };

//   Dropdown.defaultProps = {
//     item: {id:'1', name:'1'}
//   }
  
//   export default Dropdown;


// export const DropdownContainer = styled.div`
//   width: 400px;

//   &:hover {
//     cursor: pointer;
//   }
// `;

// export const DropdownBody = styled.div`
//   height:40px;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding-left:100px;
// `;

// export const DropdownSelect = styled.p`
//   font-family: 'Roboto';
//   font-size:14px;
//   color:-internal-light-dark(black, white);
// `;

// export const DropdownMenu = styled.ul`
//   display: ${(props) => (props.isActive ? `block` : `none`)};
//   width: 300px;
//   background-color: white;
//   position: absolute;
//   left:90px;
//   border: 1px solid #c4c4c4;
//   margin:5px 0 0 0;
//   padding:5px;
// `;

// export const DropdownItemContainer = styled.li`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;

//   border-bottom: 1px solid #c4c4c4;
//   border-top: none;

//   &:last-child {
//     border-bottom: none;
//   }
// `;

// export const ItemName = styled.p`
//   color:#c4c4c4;
// `;

// // class Dropdown extends Component {
// //     constructor(props){
// //       super(props)
// //       this.state = {
// //         selectedValue: ""
// //       }
// //     }
// //     render() {
// //       const handleChange = (e) => {
// //         this.setState({selectedValue: e.target.value})
// //       }
// //       return (
// //       <div className="drop-box">
// //       <select onChange={(e) => handleChange(e)}>
// //         <option value="선택해주세요" >선택해주세요</option>
// //         {this.props.options.map(arrayItem => <option class="menu" value={arrayItem}>{arrayItem}</option>)}
// //       </select>
// //       {/* <h1>{this.state.selectedValue}</h1> */}
// //       </div>
// //       );
// //     }
// // }
// // Dropdown.defaultProps = {
// //     options: ["1-10", "10-15", "15-20", "20+"]
// // }


// // export default Dropdown;
