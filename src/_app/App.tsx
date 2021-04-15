// import "theme/index.less";
import { AppErrorBoundary } from "./AppErrorBoundary";
import { BrowserRouter } from "react-router-dom";
import { DEBUG } from "components";
import { FEATURE_FLAGS } from "feature-flags";
import { Layout } from "./Layout";
// import { Parallax } from "react-parallax";
import { Provider, useSelector } from "react-redux";
import { TransactionProvider, WalletConnectionProvider } from "../app/drawers";
import { Web3ReactProvider } from "@web3-react/core";
import { ethers } from "ethers";
import { message, notification } from "antd";
import { selectors, store } from "features";
import { useBreakpoints } from "hooks";
import { useEffect } from "react";

function Inner() {
  const { isMobile } = useBreakpoints();
  const theme = useSelector(selectors.selectTheme);
  const inner = (
    <>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
      {FEATURE_FLAGS.useDEBUG && <DEBUG />}
    </>
  );

  // Effect:
  // Configure antd notifications and messages.
  useEffect(() => {
    message.config({
      top: isMobile ? 106 : 66,
      duration: 4.2,
    });

    notification.config({
      placement: "topRight",
      top: isMobile ? 106 : 66,
      duration: 4.2,
    });
  }, [isMobile]);

  return inner;

  //   return theme === "outrun" ? (
  //     <Parallax bgImage={background} bgImageAlt="background" strength={200}>
  //       {inner}
  //     </Parallax>
  //   ) : (
  //     inner
  //   );
}

export function App() {
  return (
    <Provider store={store}>
      <AppErrorBoundary>
        <Web3ReactProvider getLibrary={getLibrary}>
          <WalletConnectionProvider>
            <TransactionProvider>
              <Inner />
            </TransactionProvider>
          </WalletConnectionProvider>
        </Web3ReactProvider>
      </AppErrorBoundary>
    </Provider>
  );
}

// #region Helpers
function getLibrary(_provider?: any, _connector?: any) {
  return new ethers.providers.Web3Provider(_provider);
}

// #endregion