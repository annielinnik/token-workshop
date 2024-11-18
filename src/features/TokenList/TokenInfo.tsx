import { Block, SimpleDataBlockView } from "@/components/Blocks";
import { useTokenListContext } from "./useTokenList";
import { Button } from "@/components/Button";
import TokenBalance from "./TokenBalance";
import LotteryResults from "./LotteryResults";
import { Title } from "@/components/Title";
import { IssueTokenButton } from "./IssueTokenButton";
import { ImFeelingLuckyButton } from "./ImFeelingLuckyButton";

export const TokenInfo = ({
  tokenAddress,
  tokenTicker,
}: {
  tokenAddress: string;
  tokenTicker: string;
}) => {
  const { deleteItemFromTokenList } = useTokenListContext();

  return (
    <>
      <Title>
        {tokenAddress} | {tokenTicker}
      </Title>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 24 }}>
        <div style={{ maxWidth: 300 }}>
          <TokenBalance tokenAddress={tokenAddress} tokenTicker={tokenTicker} />
        </div>
        <div style={{ maxWidth: 300 }}>
          <SimpleDataBlockView>
            <IssueTokenButton tokenAddress={tokenAddress} />
            <ImFeelingLuckyButton tokenAddress={tokenAddress} />
            <Button
              onClick={() => deleteItemFromTokenList(tokenAddress)}
              color="secondary"
            >
              ❌ Remove from the list
            </Button>
          </SimpleDataBlockView>
        </div>
        <div style={{ minWidth: 460 }}>
          <Block title={"Lottery results (aka contract logs)"}>
            <LotteryResults tokenAddress={tokenAddress} />
          </Block>
        </div>
      </div>
    </>
  );
};
