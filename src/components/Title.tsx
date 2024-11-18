import { PropsWithChildren } from "react";

export const Title = ({ children }: PropsWithChildren) => {
  return (
    <h2
      style={{
        fontSize: 20,
        fontWeight: 600,
        marginBottom: 16,
      }}
    >
      {children}
    </h2>
  );
};
