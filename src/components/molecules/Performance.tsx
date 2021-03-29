import { FormattedIndexPool } from "features";
import { Space, Statistic } from "antd";
import { useBreakpoints } from "helpers";
import { useTranslation } from "i18n";

export default function Performance({ pool }: { pool: FormattedIndexPool }) {
  const translate = useTranslation();
  const { isMobile } = useBreakpoints();

  return (
    <Space
      className="Performance"
      direction={isMobile ? "vertical" : "horizontal"}
      style={{
        flex: 1,
        flexWrap: "wrap",
        justifyContent: "space-around",
        width: "100%",
        marginBottom: 20,
      }}
    >
      <Statistic
        title={translate("TOTAL_VALUE_LOCKED")}
        value={pool.totalValueLocked}
        style={{ flex: 1, textAlign: "center" }}
      />
      <Statistic
        title={translate("VOLUME")}
        value={pool.volume}
        style={{ flex: 1, textAlign: "center" }}
      />
      <Statistic
        title={translate("CUMULATIVE_FEES")}
        value={pool.cumulativeFee}
        style={{ flex: 1, textAlign: "center" }}
      />
      <Statistic
        title={translate("SWAP_FEE")}
        value={pool.swapFee}
        style={{ flex: 1, textAlign: "center" }}
      />
    </Space>
  );
}
