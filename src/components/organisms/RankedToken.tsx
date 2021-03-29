import { Asset } from "features";
import { IndexCard, Quote } from "components/molecules";
import { Progress, Token } from "components/atoms";
import { Space, Spin, Typography } from "antd";
import { convert, useBreakpoints } from "helpers";
import { useTranslation } from "i18n";

export interface Props {
  token: Asset;
  rank: number;
}

export default function RankedToken({ token }: Props) {
  const translate = useTranslation();
  const { isMobile } = useBreakpoints();

  return (
    <>
      <IndexCard
        direction={isMobile ? "vertical" : "horizontal"}
        style={{ minWidth: isMobile ? 0 : 400, width: isMobile ? 280 : "auto" }}
        title={
          <Space align="center" className="no-margin-bottom">
            <Token
              address={token.id}
              name={token.name}
              image={token.symbol}
              size="small"
            />
            {token.symbol}
          </Space>
        }
        titleExtra={
          <Quote
            price={token.price}
            netChange={token.netChange}
            netChangePercent={token.netChangePercent}
            isNegative={token.isNegative}
            kind="small"
            inline={isMobile}
            centered={isMobile}
          />
        }
        actions={[
          {
            title: translate("BALANCE_IN_TOKENS"),
            value: `${token.balance} ${token.symbol}`,
          },
          {
            title: translate("BALANCE_IN_USD"),
            value: (
              <Typography.Text type="success">
                {token.balanceUsd ? (
                  convert.toCurrency(
                    parseFloat(token.balanceUsd.replace(/,/g, ""))
                  )
                ) : (
                  <Spin />
                )}
              </Typography.Text>
            ),
          },
        ]}
      >
        <Progress
          type="dashboard"
          percent={parseFloat(token.weightPercentage.replace(/%/g, ""))}
        />
      </IndexCard>
    </>
  );
}
