import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./arreachartbox.scss";

type DataKeys = {
  key: string;
  color: string;
};

type AreaData = {
  name: string;
  books: number;
  clothes: number;
  electronic: number;
};

type AreaChartProps = {
  title: string;
  xaxisDataKey: string;
  areaDataKeys: DataKeys[];
  data: AreaData[];
};

export default function AreaChartBox(props: AreaChartProps) {
  return (
    <div className="areachartbox">
      <h1>{props.title}</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height="100%">
          <AreaChart
            data={props.data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <XAxis dataKey={props.xaxisDataKey} />
            <Tooltip />
            {props.areaDataKeys.map((dataKey, index) => (
              <Area
                type="monotone"
                dataKey={dataKey.key}
                stackId="1"
                stroke={dataKey.color}
                fill={dataKey.color}
                key={index}
              />
            ))}
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
