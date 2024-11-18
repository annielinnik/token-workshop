import { createContext, useContext, useState } from "react";

type TokenList = Record<string, string>;

const saveTokenList = (tokenList: TokenList) => {
  const stringified = JSON.stringify(tokenList);
  localStorage.setItem("app.tokenList", stringified);
};

const TokenListContext = createContext<{
  tokenList: TokenList;
  addItemToTokenList: (tokenAddress: string, ticker: string) => void;
  deleteItemFromTokenList: (tokenAddress: string) => void;
} | null>(null);

export const TokenListContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const defaultTokenList = JSON.parse(
    localStorage.getItem("app.tokenList") ?? "{}"
  );

  const [tokenList, setTokenList] = useState<TokenList>(defaultTokenList);

  const addItemToTokenList = (tokenAddress: string, tiker: string) => {
    const newTokenList = {
      ...tokenList,
      [tokenAddress]: tiker,
    };

    setTokenList(newTokenList);
    saveTokenList(newTokenList);
  };

  const deleteItemFromTokenList = (tokenAddress: string) => {
    const newTokenList = {
      ...tokenList,
    };
    delete newTokenList[tokenAddress];
    setTokenList(newTokenList);
    saveTokenList(newTokenList);
  };

  const value = {
    tokenList,
    addItemToTokenList,
    deleteItemFromTokenList,
  };

  return (
    <TokenListContext.Provider value={value}>
      {children}
    </TokenListContext.Provider>
  );
};

export const useTokenListContext = () => {
  return useContext(TokenListContext)!;
};
