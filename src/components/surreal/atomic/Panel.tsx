import { ReactNode } from "react";

export function SurrealPanel({ children }: { children: ReactNode }) {
  return (
    <div style={{ background: "rgb(25,26,27)", borderRadius: 4, padding: 20 }}>
      {children}
    </div>
  );
}
