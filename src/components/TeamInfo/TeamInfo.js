import "./TeamInfo.css";
import React from "react";
import { PieChart, Pie, Cell, Legend } from "recharts";

const data = [
    { name: "Завершено 70 (7)", value: 70 },
    { name: "В процессе 10 (1)", value: 10 },
    { name: "Не пройдено 10 (1)", value: 10 },
    { name: "Не начато 10 (1)", value: 10 },
];
const COLORS = ["#00A75C", "#E9841D", "#EC133D", "#B6D4ED"];

function TeamInfo() {
    return (
        <section className="team-info">
            <div className="team-info__title">
                <h2 className="team-info__name">Обученность команды</h2>
                <div className="team-info__warning"></div>
            </div>
            <div className="team-info__progress">
                <PieChart width={160} height={160}>
                    <text
                        x={80}
                        y={80}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        style={{
                            FontFace: "Stolzl",
                            fontWeight: "400",
                            fontSize: "32px",
                            lineHeight: "40px",
                        }}
                    >
                        70%
                    </text>
                    <Pie
                        data={data}
                        cy={75}
                        startAngle={450}
                        endAngle={0}
                        innerRadius={64}
                        outerRadius={80}
                        fill="#8884d8"
                        paddingAngle={0}
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={COLORS[index % COLORS.length]}
                            />
                        ))}
                    </Pie>
                    {/* <Legend
            iconType="circle"
            iconSize={8}
            align="left"
            wrapperStyle={{
              paddingLeft: "200px",
              paddingBottom: "40px",
            }}
          ></Legend> */}
                </PieChart>
                <div className="team-info-legend">
                    <h3 className="team-info__progress-name">
                        Курсы и траектории
                    </h3>
                    <ul className="team-info__list">
                        {/* {data.map((text) => {
              return (
                <div className="team-info__text">
                  <div className="team-info__image"></div>
                  <li className="team-info__list-element">{text.name}</li>
                  <li className="team-info__list-procent">
                    {`${text.value}% `} 
                    <p className="team-info__value">({text.value / 10})</p>
                  </li>
                </div>
              );
            })} */}
                        <div className="team-info__text">
                            <div className="team-info__image"></div>
                            <li className="team-info__list-element">
                                Завершено
                            </li>
                            <li className="team-info__list-procent">
                                70%
                                <p className="team-info__value">(7)</p>
                            </li>
                        </div>
                        <div className="team-info__text">
                            <div className="team-info__image team-info__image_orange"></div>
                            <li className="team-info__list-element">
                                В процессе
                            </li>
                            <li className="team-info__list-procent">
                                10%
                                <p className="team-info__value">(1)</p>
                            </li>
                        </div>
                        <div className="team-info__text">
                            <div className="team-info__image team-info__image_red"></div>
                            <li className="team-info__list-element">
                                Не пройдено
                            </li>
                            <li className="team-info__list-procent">
                                10%
                                <p className="team-info__value">(1)</p>
                            </li>
                        </div>
                        <div className="team-info__text">
                            <div className="team-info__image team-info__image_gray"></div>
                            <li className="team-info__list-element">
                                Не начато
                            </li>
                            <li className="team-info__list-procent">
                                10%
                                <p className="team-info__value">(1)</p>
                            </li>
                        </div>
                    </ul>
                </div>
                <div />
            </div>
        </section>
    );
}

export default TeamInfo;
