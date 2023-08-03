import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import { styled } from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const Item = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  height: 5vh;
  background-color: ${(props) => props.theme.coinBoxColor};
  margin: 5px 5px 5px 5px;
`;

interface IHistorical {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

interface PriceProps {
  coinId: string;
  isDark?: boolean;
}

function toDateString(millis: string) {
  const date = new Date(millis);
  return date.toDateString();
}

function Price({ coinId, isDark }: PriceProps) {
  const { isLoading, data } = useQuery<IHistorical[]>(
    ["ohlcv", coinId],
    () => fetchCoinHistory(coinId)
    // {
    //   refetchInterval: 10000,
    // }
  );
  return (
    <div>
      {isLoading ? (
        "Loading chart..."
      ) : (
        <Container>
          <Item>Date</Item>
          <Item>
            {toDateString(
              (data as IHistorical[])[(data as any).length - 1].time_close
            )}
          </Item>
          <Item>open</Item>
          <Item>
            {Number(
              Number(
                (data as IHistorical[])[(data as any).length - 1].open
              ).toFixed(3)
            ).toLocaleString()}
          </Item>
          <Item>high</Item>
          <Item>
            {Number(
              Number(
                (data as IHistorical[])[(data as any).length - 1].high
              ).toFixed(3)
            ).toLocaleString()}
          </Item>
          <Item>low</Item>
          <Item>
            {Number(
              Number(
                (data as IHistorical[])[(data as any).length - 1].low
              ).toFixed(3)
            ).toLocaleString()}
          </Item>
          <Item>close</Item>
          <Item>
            {Number(
              Number(
                (data as IHistorical[])[(data as any).length - 1].close
              ).toFixed(3)
            ).toLocaleString()}
          </Item>
          <Item>Volume (24h)</Item>
          <Item>
            $
            {Number(
              Number(
                (data as IHistorical[])[(data as any).length - 1].volume
              ).toFixed(3)
            ).toLocaleString()}
          </Item>
          <Item>MarketCap</Item>
          <Item>
            $
            {Number(
              Number(
                (data as IHistorical[])[(data as any).length - 1].market_cap
              ).toFixed(3)
            ).toLocaleString()}
          </Item>
        </Container>
      )}
    </div>
  );
}
export default Price;
