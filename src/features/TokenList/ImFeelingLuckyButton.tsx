import { getMetamaskBrowserProvider } from "@/utils/metamask-provider";
import { WorkshopUSDToken__factory } from "@/types/ethers/factories/contracts/token.sol/WorkshopUSDToken__factory";
import { Button } from "@/components/Button";

export const ImFeelingLuckyButton = ({
  tokenAddress,
}: {
  tokenAddress: string;
}) => {
  const onClick = async () => {
    // Participate in the lottery here...
  };

  return <Button onClick={onClick}>🍀 I&apos;m feeling lucky</Button>;
};
