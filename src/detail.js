// 리액트 패키지를 불러옵니다.
import React,  { useState }  from "react";
import styled from "styled-components";
import rude from './rude.png'
import { useHistory, useParams } from "react-router-dom";


const Detail = (props) => {
const history = useHistory();
const wall = useParams();
const [circle, setCirBgC] = React.useState(0);//[색깔동구라미,색바꾸는함수]

    return (
        <div>
            <Hl>
            {wall.day}은 어땠나요?
            </Hl>
            <Imgdiv/>
            <Bar>
            {Array.from({ length: 5 }, (item, idx) => {
              console.log(wall.w);
            return (
              <Circle
                circle={circle}
                idx={idx}
                onClick={() => {
                  setCirBgC(idx + 1);
                }}
              />
            );
          })}
            </Bar>
          <ButtonBack>
            <Butto onClick={() => {
                history.goBack();
            }}>평점남기기
            </Butto>
          </ButtonBack>
            
        </div>
    );
};

const Bar = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: 1rem 0px;
width: 100%;
`

const Hl = styled.h3`
text-align: center;
`

const Circle = styled.div`
width: 25px;
height: 25px;
border-radius: 30px;
margin: 5px;
background-color: ${(props)=>props.circle < props.idx + 1 ? "#F3E9DD" : "#B7CADB"};
`
const Imgdiv = styled.img.attrs({
  src: `${rude}`
})`
width: 100%;
height: 100%;
justify-content: center;
`;

const ButtonBack = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: 1rem 0px;
`

const Butto = styled.button`
background-color : #DAB88B;
color: #FDF6EC;
width: 100px;
height: 30px;
border: transparent;

`

export default Detail;