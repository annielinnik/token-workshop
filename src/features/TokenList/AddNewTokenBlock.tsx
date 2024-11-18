import { Block } from "@/components/Blocks";
import { Form } from "@/components/Form";
import { useTokenListContext } from "./useTokenList";
import { WorkshopUSDToken__factory } from "@/types/ethers/factories/contracts/token.sol/WorkshopUSDToken__factory";
import { drpcProvider } from "@/utils/drpc-provider";

export const AddNewTokenBlock = () => {
  const { addItemToTokenList } = useTokenListContext();

  const handleFormSubmit = async (values: { address: string }) => {
    const { address } = values;

    // Get the token ticker here...
    const ticker = "unknown ticker";

    addItemToTokenList(address, ticker);
  };

  return (
    <Block title="Add a new token">
      <Form
        onSubmit={handleFormSubmit}
        inputs={[{ label: "Token address", name: "address" }]}
      ></Form>
    </Block>
  );
};
