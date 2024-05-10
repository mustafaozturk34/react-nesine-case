import { useContext, useState } from "react";
import { GlobalContext } from "../Contexts/GlobalState";
import "../styles/Basket.css";
function Basket() {
  const { basketData } = useContext(GlobalContext);

  const [ratioMultiplier, setRatioMultiplier] = useState(1);
  let totalFee = 0;

  return (
    <>
      <div className="basketMain">
        {basketData.map((item) => {
          if (totalFee !== 0) {
            totalFee = totalFee * item.Oran;
          } else {
            totalFee = item.Oran * ratioMultiplier;
          }
          return (
            <div className="basketItem" key={item.C}>
              {`${item.MBS} Kod: ${item.C} Maç: ${item.N}`}{" "}
              <b>{`Oran : ${item.Oran}`}</b>
            </div>
          );
        })}
        <div className="ratioMultiplier">
          Kupon tutari :{" "}
          <input
            value={ratioMultiplier}
            onChange={(e) => setRatioMultiplier(e.target.value)}
          />{" "}
          TL
        </div>
        <div className="totalCount">
          Toplam Oran : {Number(totalFee * ratioMultiplier).toFixed(2)} TL
        </div>
      </div>
    </>
  );
}

export default Basket;
