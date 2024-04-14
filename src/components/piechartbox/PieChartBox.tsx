import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import "./piechartbox.scss";

type pieChartData = {
  name: string;
  value: number;
  color: string;
};

type PieChartProps = {
  title: string;
  dataKey: string;
  data: pieChartData[];
};

export default function PieChartBox(props: PieChartProps) {
  return (
    <div className="pieChartBox">
      <h1>{props.title}</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height={300}>
          <PieChart>
            <Tooltip
              contentStyle={{ background: "white", borderRadius: "5px" }}
            />
            <Pie
              data={props.data}
              innerRadius={"70%"}
              outerRadius={"90%"}
              paddingAngle={5}
              dataKey={props.dataKey}
            >
              {props.data.map((item) => (
                <Cell key={item.name} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="options">
        {props.data.map((option) => (
          <div className="option" key={option.name}>
            <div className="title">
              <div className="dot" style={{backgroundColor: option.color}}></div>
              <span>{option.name}</span>
            </div>
            <span>{option.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
