import { FEATURE_FLAGS } from "feature-flags";
import { RouteProps } from "react-router-dom";
import { TranslatedTerm } from "helpers";
import { lazy } from "react";

type RouteWithBreadcrumbs = RouteProps & { breadcrumbName?: TranslatedTerm };

const Splash = lazy(() => import("./components/routes/Splash"));
const Portfolio = lazy(() => import("./components/routes/Portfolio"));
const Staking = lazy(() => import("./components/routes/Staking"));
const Stake = lazy(() => import("./components/routes/Stake"));
const Learn = lazy(() => import("./components/routes/Learn"));
const LearnArticle = lazy(() => import("./components/routes/LearnArticle"));
const UniswapStakeForm = lazy(
  () => import("./components/routes/UniswapStakeForm")
);
const SushiswapStakeForm = lazy(
  () => import("./components/routes/SushiswapStakeForm")
);
const IndexPools = lazy(() => import("./components/routes/IndexPools"));
const IndexPool = lazy(() => import("./components/routes/IndexPool"));
const Vaults = lazy(() => import("./components/routes/Vaults"));
const Vault = lazy(() => import("./components/routes/Vault"));
const Timelocks = lazy(() => import("./components/routes/Timelocks"));
const CreateTimelock = lazy(() => import("./components/routes/CreateTimelock"));
const TimelockWithdrawal = lazy(
  () => import("./components/routes/TimelockWithdrawal")
);

export const routes: RouteWithBreadcrumbs[] = [
  {
    path: "/",
    exact: true,
    component: Splash,
  },
  {
    path: "/portfolio",
    breadcrumbName: "PORTFOLIO",
    exact: true,
    component: Portfolio,
  },
  {
    path: "/staking",
    breadcrumbName: "STAKE",
    exact: true,
    component: Staking,
  },
  {
    path: "/staking/:id",
    exact: true,
    component: Stake,
  },
  {
    path: "/staking-new/:id",
    exact: true,
    component: UniswapStakeForm,
  },
  {
    path: "/stake-sushi/:id",
    exact: true,
    component: SushiswapStakeForm,
  },
  {
    path: "/index-pools",
    breadcrumbName: "INDEX_POOLS",
    exact: true,
    component: IndexPools,
  },
  {
    path: "/index-pools/:slug",
    exact: true,
    component: IndexPool,
  },
  {
    path: "/index-pools/:slug/buy",
    exact: true,
    component: IndexPool,
  },
  {
    path: "/index-pools/:slug/mint",
    exact: true,
    component: IndexPool,
  },
  {
    path: "/index-pools/:slug/burn",
    exact: true,
    component: IndexPool,
  },
  {
    path: "/vaults",
    exact: true,
    component: Vaults,
  },
  {
    path: "/vaults/:slug",
    exact: true,
    component: Vault,
  },
  {
    path: "/timelocks",
    exact: true,
    component: Timelocks,
  },
  {
    path: "/create-timelock",
    exact: true,
    component: CreateTimelock,
  },
  {
    path: "/timelocks/:id",
    exact: true,
    component: TimelockWithdrawal,
  },
];

if (FEATURE_FLAGS.useAcademy) {
  routes.push(
    ...[
      {
        path: "/learn",
        exact: true,
        component: Learn,
      },
      {
        path: "/learn/:slug",
        exact: true,
        component: LearnArticle,
      },
    ]
  );
}
