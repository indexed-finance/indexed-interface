import { Button, Divider, Statistic, Typography } from "antd";
import { ExternalLink, IndexPoolWidgetGroup, Page } from "components/atomic";
import { Link } from "react-router-dom";
import { selectors } from "features";
import { useBreakpoints, useTranslator } from "hooks";
import { useSelector } from "react-redux";

export default function Splash() {
  const tx = useTranslator();
  const poolsExist = useSelector(selectors.selectPoolCount) > 0;
  const assetsUnderManagement = useSelector(
    selectors.selectTotalAssetsUnderManagement
  );
  const { isMobile } = useBreakpoints();

  return (
    <Page hasPageHeader={false}>
      <div style={{ textAlign: "center" }}>
        <Typography.Title style={{ fontSize: isMobile ? 36 : 64 }}>
          {tx("DECENTRALIZED_INDEX_PROTOCOL")}
        </Typography.Title>
        <Typography.Title level={2}>
          Gain exposure to passively-managed crypto index portfolios represented
          by a single token.
        </Typography.Title>
        {assetsUnderManagement !== "$0.00" && (
          <Statistic
            className="prominent-stat"
            title="Total Protocol Assets Under Management "
            value={assetsUnderManagement}
          />
        )}
        <Typography.Title level={3}>
          <div>
            <Divider className="fancy">Dive in today</Divider>
            <Button.Group
              style={{ flexDirection: isMobile ? "column" : "row" }}
            >
              <Link to="/index-pools">
                <Button
                  className="plus"
                  type="primary"
                  style={{
                    textTransform: "uppercase",
                    fontSize: isMobile ? 16 : 24,
                    width: isMobile ? 160 : "auto",
                    height: "auto",
                    marginRight: isMobile ? 0 : 10,
                    marginBottom: isMobile ? 10 : 0,
                  }}
                >
                  Buy an index
                </Button>
              </Link>
              <ExternalLink to="https://docs.indexed.finance/" withIcon={false}>
                <Button
                  type="default"
                  style={{
                    fontSize: isMobile ? 16 : 24,
                    width: isMobile ? 160 : "auto",
                    height: "auto",
                    textTransform: "uppercase",
                  }}
                >
                  Learn more
                </Button>
              </ExternalLink>
            </Button.Group>
          </div>
        </Typography.Title>
      </div>
      <Divider />
      {poolsExist && <IndexPoolWidgetGroup />}
    </Page>
  );
}
