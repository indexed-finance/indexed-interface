import {
  SurrealAsset,
  SurrealHeading,
  SurrealPanel,
} from "components/surreal/atomic";

export default function SurrealVaultsRoute() {
  return (
    <div
      style={{
        position: "fixed",
        top: "20rem",
        left: "20rem",
        minWidth: "60vw",
      }}
    >
      <SurrealPanel>
        <SurrealHeading
          image="http://via.placeholder.com/100"
          title="Vaults"
          subtitle="Earn Interest on Your Assets"
        />
        <SurrealAsset symbol="WBTC" />
      </SurrealPanel>
    </div>
  );
}
