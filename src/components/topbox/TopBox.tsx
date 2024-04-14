import "./topbox.scss";
import { topDealUsers } from "../../data";

export default function TopBox() {
  return (
    <div className="topbox">
      <h1>Top Deals</h1>
      <div className="list">
        {topDealUsers.map((users) => (
          <div className="listItems" key={users.id}>
            <div className="users">
              <img src={users.img} alt="" className="userimage" />
              <div className="userdetails">
                <span className="username">{users.username}</span>
                <span className="email">{users.email}</span>
              </div>
            </div>
            <div className="amount">${users.amount}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
