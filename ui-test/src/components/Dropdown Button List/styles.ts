import styled from "styled-components";

const StyledButtonDropDown= styled.div`
margin-top: 10px;
  
`;
export default StyledButtonDropDown;

export const StyledList = styled.div`
  .list{
    font-family: Roboto, Helvetica, Arial, sans-serif;
    font-size: 14px;
    visibility: hidden;
    opacity:0;
    transition:visibility 0.2s linear,opacity 0.2s linear;
    width: 140px;
    & ul{
      list-style-type:none;
      padding: 0px;
      margin: 10px 0px 0px 0px;
      border: 1px solid #D6D6D6;
      border-radius: 5px;

    } 
    & li{
      padding: 10px 10px 10px 10px;
    } 
    & li:hover{
      cursor: pointer;
      background-color: #E6E6E6;
    }
    & li:active{
      font-weight:bold
    }
  }
  .list.active{
    visibility: visible;
    opacity: 1;
  }

`;
