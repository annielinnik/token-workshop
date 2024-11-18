import JsonViewComponent from "react18-json-view";
import "react18-json-view/src/style.css";

export default function JsonView({ data }: { data: Object | any[] }) {
  return (
    <div
      style={{
        marginTop: 12,
        maxWidth: 500,
        overflow: "auto",
        maxHeight: 400,
      }}
    >
      <JsonViewComponent
        src={data}
        collapseStringsAfterLength={25}
        style={{ fontSize: 12 }}
      />
    </div>
  );
}
