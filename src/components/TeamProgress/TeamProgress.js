import React from "react";
import { PieChart, Pie, Cell } from "recharts";
import "./TeamProgress.css";

const data = [
    { name: "Group A", value: 33 },
    { name: "Group B", value: 67 },
];
const COLORS = ["#E9841D", "#E7F1F9"];

export default function TeamProgress() {
    return (
        <section className="team-progress">
            <div className="team-progress__title">
                <h2 className="team-progress__name">Прогресс сотрудников</h2>
                <div className="team-progress__warning"></div>
            </div>
            <PieChart width={200} height={105}>
                <text
                    x={100}
                    y={96}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    style={{
                        fontWeight: "400",
                        fontSize: "32px",
                        lineHeight: "40px",
                    }}
                >
                    2/5
                </text>
                <Pie
                    data={data}
                    // cx={200}
                    cy={100}
                    startAngle={180}
                    endAngle={0}
                    innerRadius={80}
                    outerRadius={100}
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
            </PieChart>
            <p className="team-progress__text">
                сотрудников завершили обучение
            </p>
        </section>
    );
}
