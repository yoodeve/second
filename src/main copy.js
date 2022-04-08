// eslint-disable-next-line

// 리액트 패키지를 불러옵니다.
import React, { useState } from "react";
import styled from "styled-components";
import polite from './polite.png'
import { useHistory } from "react-router-dom";

const Main = (props) => {
    let history = useHistory();
    const [round, setRoundBgC] = React.useState(0);

    const day_Arry = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"]
    
    const week_day = Object.keys(day_Arry).map((da, i) => {
        
        return day_Arry[da];
        
    });

    const week_rates = week_day.map((way, id) => {
        
        return {
            day:way,
            rate:Math.floor(Math.random() * (Math.floor(5) - Math.floor(1))+ Math.floor(1))
        }
    });

    console.log(week_rates);
    return (
        <>
            <Title>내 일주일은 어땠을까</Title>
            <Imgdiv/>
            {week_rates.map((w, idx) => {
                    console.log(w.rate)
                return (
            
                    <Week>
                        <Yoil>
                            {w.day}
                        </Yoil>
                    
                        {Array.from({ length: 5 }, (item, idx) => {
                            // console.log(idx);
                            return (
                            <Round 
                            rate={w.rate}
                            idx={idx}
                            />
                        );
                        })}
                        
                        <Tri
                            onClick={() => {
                                history.push(`/detail/${w.day}`);
                            }}
                        />
                    </Week>
                );
            })}
        </>
    );
}

const Round = styled.div`
width: 25px;
height: 25px;
border-radius: 30px;
margin: 5px;
background-color: ${props => props.rate < props.idx ? "#FDF6EC" : "#B7CADB"};
`

const Title = styled.h4`
text-align: center;
`

const Imgdiv = styled.img.attrs({
    src: `${polite}`
  })`
  width: 100%;
  height: 100%;
  justify-content: center;
  `;
  
const Week = styled.div`
justify-content: center;
display: flex;
margin: 1rem 0px;
`

const Yoil = styled.p`
margin: 0px 0.5rem 0px 0px;
font-weight: bold;
`

const Tri = styled.div`
appearance: none;
background-Color: transparent;
border-Color: #C69B7B;
width: 0px;
height: 0px;
border-Top: 1rem solid transparent;
border-Bottom: 1rem solid transparent;
border-Left: 1.7rem solid #C69B7B;
color: #fff;`

export default Main;