import { useCallback, useState } from "react";
import { Spinner } from "../../components/Spinner";
import { Button } from "@/components/Button";

import { WorkshopUSDToken__factory } from "@/types/ethers/factories/contracts/token.sol/WorkshopUSDToken__factory";
import { drpcProvider } from "@/utils/drpc-provider";
import { TypedContractEvent, TypedEventLog } from "@/types/ethers/common";
import {
  LooseEvent,
  WinEvent,
} from "@/types/ethers/contracts/token.sol/WorkshopUSDToken";
import { getAddress } from "ethers";

const getEthereumAddress = (paddedAddress: string) =>
  getAddress("0x" + paddedAddress.slice(26));

type State = {
  winEvents: TypedEventLog<
    TypedContractEvent<
      WinEvent.InputTuple,
      WinEvent.OutputTuple,
      WinEvent.OutputObject
    >
  >[];
  looseEvents: TypedEventLog<
    TypedContractEvent<
      LooseEvent.InputTuple,
      LooseEvent.OutputTuple,
      LooseEvent.OutputObject
    >
  >[];
};

export default function LotteryResults({
  tokenAddress,
}: {
  tokenAddress: string;
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<State | null>(null);

  const onSubmit = useCallback(async () => {
    setIsLoading(true);

    // Get the lottery results here...

    setIsLoading(false);
  }, [tokenAddress]);

  return (
    <div>
      <Button onClick={onSubmit}>Get logs</Button>
      {isLoading ? (
        <div style={{ marginTop: 12 }}>
          <Spinner />
        </div>
      ) : data ? (
        <div style={{ marginTop: 16 }}>
          <b>Win events</b>
          {data.winEvents?.length ? (
            <ul>
              {data.winEvents.map((w, i) => (
                <li key={i}>{getEthereumAddress(w.topics[1])}</li>
              ))}
            </ul>
          ) : (
            <p>No win events</p>
          )}

          <b>Loose events</b>
          {data.looseEvents?.length ? (
            <ul>
              {data.looseEvents.map((w, i) => (
                <li key={i}>{getEthereumAddress(w.topics[1])}</li>
              ))}
            </ul>
          ) : (
            <p>No lose events</p>
          )}
        </div>
      ) : null}
    </div>
  );
}
