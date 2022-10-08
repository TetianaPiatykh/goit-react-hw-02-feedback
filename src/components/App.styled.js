import styled from 'styled-components';

export const StatisticTitleSection = styled.section`

display: flex;
flex-direction: column;
text-align: center;
`;

export const BtnList = styled.ul`
display: flex;
flex-direction: row;
justify-content: center;
gap: 20px;
`;

export const Btn = styled.button`
 font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid lightblue;
  border-radius: 3px;
  cursor: pointer;
  background-color: lightblue;
           &:hover {
    border: 2px solid lightblue;
    border-color: #93a0a9;
     box-shadow: 1px 1px 2px 3px #deebef;
     }
`;

export const StatisticsList = styled.ul`
display: flex;
flex-direction: column;
justify-content: flex-start;
margin-left: 0;
gap: 20px;
`;