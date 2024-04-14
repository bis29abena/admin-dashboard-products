import "./single.scss";
import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type SingleProps = {
  id: number;
  img?: string;
  title: string;
  info: object;
  chart: {
    dataKeys: { name: string; color: string }[];
    data: object[];
  };
  activities: { time: string; text: string }[];
};

export default function Single(props: SingleProps) {
  return (
    <div className="single">
      <div className="view">
        <div className="info">
          <div className="topinfo">
            <img src={props.img || `{/noavatr.png}`} alt="" />
            <h1>{props.title}</h1>
            <button>Update</button>
          </div>
          <div className="details">
            {Object.entries(props.info).map((infoItem, index) => (
              <div className="item" key={index}>
                <span className="itemTitle">{infoItem[0]}:</span>
                <span className="itemValue">{infoItem[1]}</span>
              </div>
            ))}
          </div>
        </div>
        <hr />
        <div className="chart">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={500}
              height={300}
              data={props.chart.data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              {props.chart.dataKeys.map((dataKey) => (
                <Line
                  type="monotone"
                  dataKey={dataKey.name}
                  stroke={dataKey.color}
                  activeDot={{ r: 8 }}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="activities">
        <h2>Activities</h2>
        <ul>
          {props.activities.map((activity) => (
            <li>
              <div>
                <p>{activity.text}</p>
                <time>{activity.time}</time>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
