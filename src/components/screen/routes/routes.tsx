import { AppState, selectors } from "features";
import { Divider, Space, Spin, Typography } from "antd";
import { PoolInteractionFooter, Token, UsefulLinks } from "components/atomic";
import { RouteTemplate } from "./RouteTemplate";
import { lazy, useMemo } from "react";
import { useParams } from "react-router-dom";
import { usePortfolioData, useStakingRegistrar, useTranslator } from "hooks";
import { useSelector } from "react-redux";

const routes: Array<{
  path: string;
  component: () => JSX.Element;
}> = [];

// Splash
// -- The landing page, gives top-level information on the project and wants to "hook" the user.
const SplashRoute = () => {
  const adjustedValues = useMemo(
    () => ({
      hasPageHeader: false,
      actions: null,
      extra: null,
      title: "",
      subtitle: "",
    }),
    []
  );
  const Component = useMemo(() => lazy(() => import("./Splash")), []);

  return <RouteTemplate adjustedValues={adjustedValues} screen={Component} />;
};

routes.push({
  path: "/",
  component: SplashRoute,
});

// Portfolio
// -- Displays the relevant holdings to the connected user.
const PortfolioRoute = () => {
  const tx = useTranslator();
  const { totalValue } = usePortfolioData();
  const adjustedValues = useMemo(
    () => ({
      hasPageHeader: true,
      actions: (
        <Space
          style={{
            width: "100%",
            justifyContent: "flex-end",
            margin: "0 9rem",
          }}
        >
          <Typography.Title level={3} type="secondary" style={{ margin: 0 }}>
            {tx("TOTAL_VALUE")}
          </Typography.Title>
          <Divider type="vertical" />
          <Typography.Title type="success" level={3} style={{ margin: 0 }}>
            {totalValue}
          </Typography.Title>
        </Space>
      ),
      extra: null,
      title: tx("PORTFOLIO"),
      subtitle: "<fill me>",
    }),
    [tx, totalValue]
  );
  const Component = useMemo(() => lazy(() => import("./Portfolio")), []);

  useStakingRegistrar();

  return <RouteTemplate adjustedValues={adjustedValues} screen={Component} />;
};

routes.push({
  path: "/portfolio",
  component: PortfolioRoute,
});

// Staking
// -- Displays all pools and relevant staking data.
const StakingRoute = () => {
  const tx = useTranslator();
  const adjustedValues = useMemo(
    () => ({
      hasPageHeader: true,
      actions: null,
      extra: null,
      title: tx("LIQUIDITY_MINING"),
      subtitle: tx("STAKE_INDEX_TOKENS_..."),
    }),
    [tx]
  );
  const Component = useMemo(() => lazy(() => import("./Staking")), []);

  return <RouteTemplate adjustedValues={adjustedValues} screen={Component} />;
};

routes.push({
  path: "/staking",
  component: StakingRoute,
});

// Pools
// -- Displays all pools and relevant general information.
const PoolsRoute = () => {
  const tx = useTranslator();
  const adjustedValues = useMemo(
    () => ({
      hasPageHeader: true,
      actions: null,
      extra: null,
      title: tx("INDEX_POOLS"),
      subtitle: "<fill me>",
    }),
    [tx]
  );
  const Component = useMemo(() => lazy(() => import("./Pools")), []);

  return <RouteTemplate adjustedValues={adjustedValues} screen={Component} />;
};

routes.push({
  path: "/pools",
  component: PoolsRoute,
});

// Pool
// -- Displays general and specific information for a particular pool.
const PoolRoute = () => {
  const { slug } = useParams<{ slug: string }>();
  const poolId = useSelector((state: AppState) =>
    selectors.selectPoolIdByName(state, slug)
  );
  const pool = useSelector((state: AppState) =>
    poolId ? selectors.selectFormattedIndexPool(state, poolId) : null
  );
  const adjustedValues = useMemo(
    () => ({
      hasPageHeader: true,
      actions: pool ? <PoolInteractionFooter pool={pool} /> : null,
      extra: pool ? <UsefulLinks address={pool.id} /> : null,
      title: pool ? (
        <Space>
          <Token
            name={pool.name}
            image={pool.name}
            symbol={pool.symbol}
            address={pool.id}
            size="large"
          />
          <Divider type="vertical" />
          <Typography.Text>{pool.name}</Typography.Text>
        </Space>
      ) : (
        <Spin />
      ),
      subtitle: "<fill me>",
    }),
    [pool]
  );
  const SubscreenComponent = useMemo(
    () => lazy(() => import("components/screen/routes/Pool")),
    []
  );

  return (
    <RouteTemplate
      adjustedValues={adjustedValues}
      screen={SubscreenComponent}
    />
  );
};

routes.push({
  path: "/pools/:slug",
  component: PoolRoute,
});

export { routes };
