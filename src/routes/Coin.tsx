import { useParams } from "react-router";

interface RouterParams {
  coinId: string;
}
function Coin() {
  const { coinId } = useParams<RouterParams>();
  return <h1> Coin : {coinId}</h1>;
}

export default Coin;
