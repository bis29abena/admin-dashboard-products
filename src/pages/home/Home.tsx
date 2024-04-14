import AreaChartBox from "../../components/areachartbox/AreaChartBox";
import BarChartBox from "../../components/barchartbox/BarChartBox";
import ChatBox from "../../components/chatbox/ChatBox";
import PieChartBox from "../../components/piechartbox/PieChartBox";
import TopBox from "../../components/topbox/TopBox";
import {
  chartBoxUser,
  chartBoxProduct,
  chartBoxConversion,
  chartBoxRevenue,
  barChartBoxRevenue,
  barChartBoxVisit,
  peiChatData,
  areaChartData
} from "../../data";
import "./home.scss";

export default function Home() {
  return (
    <div className="home">
      <div className="box box1">
        <TopBox />
      </div>
      <div className="box box2">
        <ChatBox {...chartBoxUser} />
      </div>
      <div className="box box3">
        <ChatBox {...chartBoxConversion} />
      </div>
      <div className="box box4">
        <PieChartBox {...peiChatData} />
      </div>
      <div className="box box5">
        <ChatBox {...chartBoxProduct} />
      </div>
      <div className="box box6">
        <ChatBox {...chartBoxRevenue} />
      </div>
      <div className="box box7"><AreaChartBox {...areaChartData}/></div>
      <div className="box box8">
        <BarChartBox {...barChartBoxVisit} />
      </div>
      <div className="box box9">
        <BarChartBox {...barChartBoxRevenue} />
      </div>
    </div>
  );
}
