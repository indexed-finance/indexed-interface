import {
  Alert,
  Button,
  Card,
  Col,
  Divider,
  Row,
  Space,
  Tooltip,
  Typography,
} from "antd";
import { BigNumber, convert } from "helpers";
import {
  FormattedVault,
  useBalanceAndApprovalRegistrar,
  useNirnTransactionCallbacks,
  useTokenApproval,
  useVaultUserBalance,
} from "hooks";
import { Formik } from "formik";
import { TokenSelector } from "components/atomic/organisms/TokenSelector";
import { useCallback, useMemo, useState } from "react";

type TokenAmount = { exact: BigNumber; displayed: string };

export function VaultForm({ vault }: { vault: FormattedVault }) {
  return (
    <Formik
      initialValues={{
        asset: "",
        amount: {
          displayed: "0.00",
          exact: convert.toBigNumber("0.00"),
        },
        inputType: "stake",
      }}
      onSubmit={console.info}
      validateOnChange={true}
      validateOnBlur={true}
    >
      <Inner vault={vault} />
    </Formik>
  );
}

export function Inner({ vault }: { vault: FormattedVault }) {
  const { underlying, performanceFee } = vault;
  const { deposit, withdrawUnderlying } = useNirnTransactionCallbacks(vault.id);
  const [mode, setMode] = useState<"deposit" | "withdraw">("deposit");
  const [amount, setAmount] = useState<TokenAmount>({
    exact: convert.toBigNumber("0.00"),
    displayed: "0.00",
  });
  const dependentAmount = useMemo(() => {
    if (!vault.price) return convert.toBigNumber("0");
    const exact = amount.exact
      .times(convert.toToken("1", 18))
      .div(convert.toBigNumber(vault.price));
    return convert.toBalance(exact, underlying.decimals, true, 2);
  }, [amount, vault, underlying]);
  const { balance, unwrappedBalance } = useVaultUserBalance(vault.id);
  const handleSubmit = useCallback(() => {
    if (mode === "deposit") {
      deposit(amount.exact.integerValue().toString(10));
    } else {
      withdrawUnderlying(amount.exact.integerValue().toString(10));
    }
  }, [mode, amount, deposit, withdrawUnderlying]);
  const { status, approve } = useTokenApproval({
    tokenId: vault.underlying.id,
    spender: vault.id,
    amount: amount.displayed,
    rawAmount: amount.exact.toString(),
    symbol: vault.symbol,
  });

  // 10/27 Cream was exploited, temporarily disable deposits there.
  const isTemporarilyDisabled = useMemo(
    () => mode === "deposit" && ["nWBTC", "nAAVE"].includes(vault.symbol),
    [mode, vault]
  );

  useBalanceAndApprovalRegistrar(vault.id, [vault.underlying.id]);

  return (
    <Card
      bordered={true}
      title={
        <Row gutter={24} align="middle">
          <Col span={24}>
            <Typography.Title level={2}>I want to</Typography.Title>
          </Col>
          <Col span={10}>
            <Button
              block={true}
              size="large"
              type={mode === "deposit" ? "primary" : "default"}
              onClick={() => setMode("deposit")}
            >
              Deposit
            </Button>
          </Col>
          <Col span={4}>
            <Divider>or</Divider>
          </Col>
          <Col span={10}>
            <Button
              block={true}
              size="large"
              type={mode === "withdraw" ? "primary" : "default"}
              onClick={() => setMode("withdraw")}
            >
              Withdraw
            </Button>
          </Col>
        </Row>
      }
    >
      {isTemporarilyDisabled ? (
        <Alert
          type="error"
          message="Due to the recent Cream Finance exploit, deposits into vaults which were targeting Cream have been temporarily disabled."
        />
      ) : (
        <Space direction="vertical" size="large" style={{ width: "100%" }}>
          <TokenSelector
            assets={[]}
            balanceOverride={mode === "deposit" ? balance : unwrappedBalance}
            selectable={false}
            value={{
              token: underlying.symbol,
              amount,
            }}
            onChange={(next) => {
              if (next?.amount) {
                setAmount(next.amount);
              }
            }}
            isInput={true}
          />
          <Alert
            showIcon={true}
            type="info"
            style={{ borderRadius: 0 }}
            message={
              <Tooltip
                title={`The Indexed DAO treasury receives a small percentage of the vault's profits.`}
              >
                {`Performance Fee: ${convert.toPercent(
                  performanceFee
                )} of yield`}
              </Tooltip>
            }
          />
          <Alert
            showIcon={true}
            type="success"
            message={
              <Tooltip
                title={`${vault.symbol} is the Nirn wrapper for ${underlying.symbol} - it can be burned to redeem ${underlying.symbol}.`}
              >
                You will {mode === "deposit" ? "receive" : "burn"}{" "}
                {dependentAmount} {vault.symbol}
              </Tooltip>
            }
          />
          {status === "approval needed" && mode === "deposit" ? (
            <Button
              type="primary"
              block={true}
              style={{ fontSize: 30, height: 60 }}
              onClick={approve}
            >
              Approve
            </Button>
          ) : (
            <Button
              type="primary"
              disabled={status === "unknown" || amount.exact.eq(0)}
              block={true}
              style={{ fontSize: 30, height: 60 }}
              onClick={handleSubmit}
            >
              {mode === "deposit" ? "Deposit" : "Withdraw"}
            </Button>
          )}
        </Space>
      )}
    </Card>
  );
}
