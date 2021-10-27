// Atom
import { ReactNode } from "react";

export function SurrealPanel({
  children,
  style = {},
}: {
  children: ReactNode;
  style?: Record<string, any>;
}) {
  return (
    <div
      style={{ background: "#191A1B", borderRadius: 4, padding: 20, ...style }}
    >
      {children}
    </div>
  );
}
