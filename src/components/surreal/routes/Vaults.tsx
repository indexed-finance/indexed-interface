import {
  SurrealHeading,
  SurrealPanel,
  SurrealVaultRow,
} from "components/surreal/atomic";

export default function SurrealVaultsRoute() {
  return (
    <div
      style={{
        position: "fixed",
        top: "10rem",
        left: "20rem",
        minWidth: "60vw",
        minHeight: "40vh",
        background: "#0C0C0C",
        padding: "1rem",
        borderRadius: 4,
      }}
    >
      <div style={{ marginBottom: "1rem" }}>
        <SurrealPanel>
          <SurrealHeading
            title="Vaults"
            subtitle="Earn Interest on Your Assets"
          />
        </SurrealPanel>
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <SurrealPanel style={{ padding: 12 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              textTransform: "uppercase",
              fontWeight: "bold",
            }}
          >
            <div style={{ flex: 1, position: "relative", left: "1rem" }}>
              Asset
            </div>
            <div
              style={{
                flex: 1,
                textAlign: "right",
                position: "relative",
                left: "1rem",
              }}
            >
              Total Value Locked
            </div>
            <div
              style={{
                flex: 1,
                textAlign: "right",
                position: "relative",
                right: "1rem",
              }}
            >
              APR
            </div>
            <div
              style={{
                flex: 1,
                textAlign: "right",
                position: "relative",
                right: "1rem",
              }}
            >
              Protocol
            </div>
            <div style={{ flex: 1, visibility: "hidden" }}>Ignore me.</div>
          </div>
        </SurrealPanel>
      </div>

      {Array.from({ length: 6 }, (_, index) => (
        <div key={index} style={{ marginBottom: "1rem" }}>
          <SurrealVaultRow
            asset="WBTC"
            totalValueLocked="$1,333,337.00"
            apr="37.4%"
            protocol="Cream"
          />
        </div>
      ))}
    </div>
  );
}
