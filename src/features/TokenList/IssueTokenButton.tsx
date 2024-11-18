import { getMetamaskBrowserProvider } from "@/utils/metamask-provider";
import { WorkshopUSDToken__factory } from "@/types/ethers/factories/contracts/token.sol/WorkshopUSDToken__factory";
import { Button } from "@/components/Button";

export const IssueTokenButton = ({
  tokenAddress,
}: {
  tokenAddress: string;
}) => {
  const issueToken = async () => {
    // Issue token to your wallet here...
  };

  return <Button onClick={issueToken}>💰 Issue token to your wallet</Button>;
};
