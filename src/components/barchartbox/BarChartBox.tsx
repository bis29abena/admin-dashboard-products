import "./barchartbox.scss";
import { BarChart, Bar, ResponsiveContainer, Tooltip } from "recharts";

type BarChartProps = {
  title: string;
  color: string;
  dataKey: string;
  chartData: object[];
};

export default function BarChartBox(props: BarChartProps) {
  return (
    <div className="barchartbox">
      <h1>{props.title}</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height={150}>
          <BarChart data={props.chartData}>
            <Tooltip
              contentStyle={{ background: "#2a3447", borderRadius: "5px" }}
              labelStyle={{ display: "none" }}
              cursor={{fill: "none"}}
            />
            <Bar dataKey={props.dataKey} fill={props.color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
