import { ReactNode } from "react";
import { Typography } from "antd";

interface Props {
  image?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  children?: ReactNode;
}

const COLORS = {
  Cyan: "rgba(39,193,192,1)",
};

export function SurrealHeading({
  image = "",
  title,
  subtitle = null,
  children = null,
}: Props) {
  return (
    <>
      <div style={{ display: "flex", alignItems: "flex-start" }}>
        {image && (
          <img src={image} alt="Heading" style={{ marginRight: "1rem" }} />
        )}
        <div>
          <Typography.Title
            level={2}
            style={{ textTransform: "uppercase", marginBottom: 0 }}
          >
            {title}
          </Typography.Title>
          {subtitle && (
            <Typography.Title
              level={3}
              style={{ marginTop: "0.5rem", marginBottom: 0 }}
            >
              {subtitle}
            </Typography.Title>
          )}
          {children}
        </div>

        {/* Bottom Faded-Border */}
      </div>
      <div
        style={{
          marginTop: "1.5rem",
          height: 3,
          background: `linear-gradient(101deg, ${COLORS.Cyan} 18%, rgba(0, 0, 0, 0) 100%)`,
        }}
      ></div>
    </>
  );
}
