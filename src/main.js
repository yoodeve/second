// 리액트 패키지를 불러옵니다.
import React from "react";
import styled from "styled-components";

import { useHistory } from "react-router-dom";

const Main = (props) => {
    let history = useHistory();

    const day_dict = {
        0: '일',
        1: '월',
        2: '화',
        3: '수',
        4: '목',
        5: '금',
        6: '토',
    };
    console.log(
        Object.keys(day_dict).map((_d, i) => day_dict[_d])
    );

    const week_day = Object.keys(day_dict).map((_d, i) => {
        let today = new Date().getDay();

        let d =
            today + parseInt(_d) > 6
                ? today + parseInt(_d) - 7 :
                today + parseInt(_d);

        console.log(d)
        return day_dict[d];
    });

    console.log(week_day)


    const week_rate =
        week_day.map((w, i) => {
            return {
                day: w,
                rate: Math.floor(Math.random() * (Math.floor(5) - Math.ceil(1) + 1)) +
                    Math.ceil(1),
            };
        });


    return (
        <>
            {/* Quiz : style을 styled-components를 사용하도록 변경해주세요! :) (스타일을 그대로 옮겨도 좋고, 좀 더 예쁘게 바꿔도 좋아요!) */}
            <Title>내 일주일은?</Title>

            {/* 일단 요일별로 하나씩 [요일 / 평점 동그라미 5개 / 해당 요일로 이동하는 버튼]이 생기도록 해야해요! 우리가 위에서 만든 평점 배열을 map 돌리면 되겠죠! */}
            {week_rate.map((w, idx) => {
                return (
                    <Week
                        key={`week_day_${idx}`}>
                        {/* 요일 텍스트 */}
                        <Yoil>
                            {w.day}
                        </Yoil>
                        {/* 이제 평점 동그라미 차례! Array.from()이 뭐였더라? 헷갈린다면 검색해보기! */}
                        {/* 저는 길이가 5인 배열을 만들어서 map을 돌려버릴거예요. 평점 동그라미 다섯개를 직접 만들어도 괜찮아요. :) */}
                        {Array.from({ length: 5 }, (item, idx) => {
                            /**
                             * Q6. 평점이 3이라면 동그라미 3개만 노랑색이면 좋겠는데, 회색과 노랑색을 어떻게 구분해줄까?
                             *  -> 우리는 여기에서 평점 값을 가지고 있죠! 
                             *     (이 위치는 week_rates 배열의 map 안쪽이면서, 임의로 만든 길이 5개짜리 배열의 map 안쪽입니다. 
                             *      week_rates 요소 하나인 w에 접근할 수 있어요. 즉, 평점을 w.rate으로 가지고 올 수 있다!)
                             *  -> 그리고 이번 동그라미가 몇번째 동그라미인 지도 알 수 있어요! 이번 요소가 몇 번째 요소인 지 idx로 가져올 수 있잖아요. :) 
                             *  -> 평점과 지금이 몇 번째 동그라미인 지 삼항연산자로 노랑, 회색을 정해줍시다!
                             */
                            return (
                                <Round key={idx} />
                            );
                        })}

                        {/* 삼각형 버튼을 만들어봅시다! */}
                        <Tri
                            onClick={() => {
                                // 요일 별 페이지로 이동해요!
                                history.push(`/detail/${w.day}`);
                            }}
                        />
                    </Week>
                );
            })}
        </>
    );
};

const Round = styled.div`
width: 25px;
height: 25px;
border-radius: 30px;
margin: 5px;
background-color: ${(props) => props.week_rate < props.idx ? "#ddd" : "#000"};
`

const Title = styled.h4`
text-align: center;
`

const Week = styled.div`
display: flex;
justify-Content: center;
align-Items: center;
margin: 1rem 0px;
width: 100%;
`

const Yoil = styled.p`
margin: 0px 0.5rem 0px 0px;
font-Weight: bold;
`

const Tri = styled.div`
appearance: none;
background-Color: transparent;
border-Color: purple;
width: 0px;
height: 0px;
border-Top: 1rem solid transparent;
border-Bottom: 1rem solid transparent;
border-Left: 1.6rem solid purple;
color: #fff;`

export default Main;