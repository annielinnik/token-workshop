import { TokenInfo } from "./TokenInfo";
import { useTokenListContext } from "./useTokenList";
import { AddNewTokenBlock } from "./AddNewTokenBlock";

export const TokenList = () => {
  const { tokenList } = useTokenListContext();

  return (
    <div>
      {Object.entries(tokenList).map(([tokenAddress, tokenTicker], i) => (
        <TokenInfo
          tokenAddress={tokenAddress}
          tokenTicker={tokenTicker}
          key={i}
        />
      ))}
      {!!Object.entries(tokenList).length && <div style={{ height: 16 }}></div>}
      <div style={{ maxWidth: 400 }}>
        <AddNewTokenBlock />
      </div>
    </div>
  );
};
