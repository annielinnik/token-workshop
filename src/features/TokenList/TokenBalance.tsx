import { useCallback, useState } from "react";

import { formatEther } from "ethers/utils";
import { useSession } from "next-auth/react";

import { WorkshopUSDToken__factory } from "@/types/ethers/factories/contracts/token.sol/WorkshopUSDToken__factory";
import { drpcProvider } from "@/utils/drpc-provider";
import { Block, SimpleDataBlock } from "@/components/Blocks";

export default function TokenBalance({
  tokenAddress,
  tokenTicker,
}: {
  tokenAddress: string;
  tokenTicker: string;
}) {
  const [balance, setBalance] = useState<unknown>(null);
  const [isLoading, setIsLoading] = useState(false);

  const { data: session } = useSession();

  const onSubmit = useCallback(async () => {
    setIsLoading(true);

    // Get the token balance here...

    setIsLoading(false);
  }, [session?.user.walletAddress, tokenAddress]);

  return (
    <Block title="Balance">
      <SimpleDataBlock
        data={balance ? formatEther(BigInt(balance as string)) : 0}
        isLoading={isLoading}
        onClick={onSubmit}
        buttonText="Get balance"
        subheader={`${tokenTicker} in your wallet`}
      />
    </Block>
  );
}
