import { Col, Row } from "antd";
import { IndexCard } from "./IndexCard";
import { PortfolioSection } from "./PortfolioSection";
import { convert } from "helpers";
import {
  useBreakpoints,
  useMasterChefRegistrar,
  useNewStakingRegistrar,
  usePortfolioData,
  useStakingRegistrar,
} from "hooks";

export function LiquiditySection() {
  const { isMobile } = useBreakpoints();
  const { tokens } = usePortfolioData({
    onlyOwnedAssets: true,
  });
  const liquidityTokens = tokens.filter(
    (token) => token.isSushiswapPair || token.isUniswapPair
  );
  const sectionUsdValue = convert.toCurrency(
    liquidityTokens
      .map((token) => token.value.replace(/\$/g, ""))
      .map((value) => parseFloat(value))
      .reduce((prev, next) => prev + next, 0)
  );

  useStakingRegistrar();
  useNewStakingRegistrar();
  useMasterChefRegistrar();

  return (
    <PortfolioSection title="Liquidity" usdValue={sectionUsdValue}>
      <Row gutter={12} align="bottom">
        {liquidityTokens.map((token) => (
          <Col
            key={token.address}
            xs={24}
            lg={8}
            style={{ marginBottom: isMobile ? 12 : 0 }}
          >
            <IndexCard
              name={token.name}
              symbol={token.symbol}
              address={token.address}
              amount={token.balance}
              usdValue={token.value}
              hasStakingPool={token.hasStakingPool}
              staking={token.staking}
              earnedSymbol={token.isSushiswapPair ? "SUSHI" : "NDX"}
              earnedAmount={
                token.isSushiswapPair ? token.sushiEarned : token.ndxEarned
              }
            />
          </Col>
        ))}
      </Row>
    </PortfolioSection>
  );
}