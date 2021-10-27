// Atom
import { PLACEHOLDER_TOKEN_IMAGE } from "config";
import { Typography } from "antd";
import { useMemo } from "react";

interface Props {
  address?: string;
  showImage?: boolean;
  symbol: string;
}

export function SurrealAsset({
  showImage = true,
  symbol,
  address = "",
}: Props) {
  const image = useMemo(() => determineImagePath(symbol, address), [
    symbol,
    address,
  ]);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      {showImage && (
        <img
          src={image}
          alt={symbol}
          style={{
            width: 36,
            height: 36,
            marginRight: "1rem",
          }}
        />
      )}
      <Typography.Title
        level={3}
        style={{
          textTransform: "uppercase",
          marginTop: 0,
          marginBottom: 0,
          position: "relative",
          top: 2,
        }}
      >
        {symbol}
      </Typography.Title>
    </div>
  );
}

// #region Helpers
function determineImagePath(symbol: string, address?: string) {
  const path = address
    ? `https://tokens.dharma.io/assets/${address.toLowerCase()}/icon.png`
    : "";

  if (path) {
    return path;
  } else {
    try {
      return require(`images/${symbol.toLowerCase()}.png`).default;
    } catch {
      return PLACEHOLDER_TOKEN_IMAGE;
    }
  }
}
// #endregion
