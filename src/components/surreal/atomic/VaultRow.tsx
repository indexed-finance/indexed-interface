// Organism
import { Button, Typography } from "antd";
import { SurrealAsset } from "./Asset";
import { SurrealPanel } from "./Panel";
import { useHistory } from "react-router-dom";

interface Props {
  asset: string;
  totalValueLocked: string;
  apr: string;
  protocol: string;
}

export function SurrealVaultRow({
  asset,
  totalValueLocked,
  apr,
  protocol,
}: Props) {
  const history = useHistory();
  const protocolImage = determineImagePath(protocol);

  return (
    <SurrealPanel>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontSize: 22,
        }}
      >
        <SurrealAsset symbol={asset} />

        <div>{totalValueLocked}</div>

        <div>{apr}</div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          {protocolImage && (
            <img
              src={protocolImage}
              alt={`${protocol} Protocol`}
              style={{
                width: 20,
                height: 20,
                marginRight: "1rem",
              }}
            />
          )}
          <Typography.Title
            level={4}
            style={{
              marginTop: 0,
              marginBottom: 0,
              position: "relative",
              top: 2,
            }}
          >
            {protocol}
          </Typography.Title>
        </div>

        <Button
          type="primary"
          onClick={() => history.push(`/vaults/${asset}`)}
          //   style={{ fontSize: 20, height: "unset" }}
        >
          View Vault
        </Button>
      </div>
    </SurrealPanel>
  );
}

// #region Helpers
function determineImagePath(protocol: string) {
  try {
    return require(`images/${protocol.toLowerCase()}.png`).default;
  } catch {
    return "";
  }
}
// #endregion
