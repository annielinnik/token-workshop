import { PropsWithChildren } from "react";
import { Button } from "./Button";
import { Spinner } from "./Spinner";

export const Block = ({
  title,
  children,
}: PropsWithChildren<{ title: string }>) => {
  return (
    <div
      style={{
        background: "white",
        boxShadow:
          "0 0 #0000, 0 0 #0000,  0px 8px 13px -3px rgba(0, 0, 0, 0.07)",
        border: "1px solid rgb(226, 232, 240)",
        borderRadius: "2px",
      }}
    >
      <div
        style={{
          padding: "16px 30px 16px 30px",
          borderBottom: "1px solid rgb(226, 232, 240)",
          fontWeight: 500,
        }}
      >
        {title}
      </div>
      <div style={{ padding: "30px" }}>{children}</div>
    </div>
  );
};

export function SimpleDataBlock({
  data,
  isLoading,
  onClick,
  buttonText,
  subheader,
  showUnknownMessage = true,
}: {
  data: string | number | null;
  isLoading: boolean;
  onClick: () => void;
  buttonText: string;
  subheader: string;
  showUnknownMessage?: boolean;
}) {
  return (
    <SimpleDataBlockView>
      <Button onClick={onClick} color="secondary">
        {buttonText}
      </Button>

      <span>
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <h4
              style={{
                fontSize: "24px",
                fontWeight: 700,
              }}
            >
              {!data && showUnknownMessage ? "Unknown" : null}
              {data ? data : null}
            </h4>
            <span
              style={{
                fontSize: "14px",
                fontWeight: 500,
                color: "rgb(107, 114, 128)",
              }}
            >
              {subheader}
            </span>
          </>
        )}
      </span>
    </SimpleDataBlockView>
  );
}

export function SimpleDataBlockView({ children }: PropsWithChildren) {
  return (
    <div className="flex gap-4 flex-col flex-row self-stretch w-full">
      {children}
    </div>
  );
}
