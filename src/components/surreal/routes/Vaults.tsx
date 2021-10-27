import { SurrealHeading, SurrealPanel } from "../atomic";

export default function SurrealVaultsRoute() {
  return (
    <div style={{ position: "fixed", top: "20rem", left: "20rem" }}>
      <SurrealPanel>
        <SurrealHeading
          image="http://via.placeholder.com/100"
          title="Vaults"
          subtitle="Earn Interest on Your Assets"
        />
      </SurrealPanel>
    </div>
  );
}
