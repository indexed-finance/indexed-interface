import * as yup from "yup";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Alert, Button, Divider, Space, Typography } from "antd";
import { Flipper, Token } from "components/atoms";
import { Formik, FormikProps, useFormikContext } from "formik";
import { ReactNode, useCallback, useMemo, useRef } from "react";
import { TokenSelector } from "components";
import { convert } from "helpers";
import { selectors } from "features";
import { useSelector } from "react-redux";
import { useTokenApproval, useTokenRandomizer, useTranslator } from "hooks";

type Asset = { name: string; symbol: string; id: string };

interface Props {
  title: ReactNode;
  assets: Asset[];
  spender: string;
  extra?: ReactNode;
  disableInputSelect?: boolean;
  disableOutputSelect?: boolean;
  defaultInputSymbol?: string;
  defaultOutputSymbol?: string;
  requiresApproval?: boolean;
  onSubmit(values: InteractionValues): void;
  onChange(values: InteractionValues): void | string;
}

const initialValues = {
  fromToken: "",
  fromAmount: 0,
  toToken: "",
  toAmount: 0,
  lastTouchedField: "from" as "from" | "to",
};

const interactionSchema = yup.object().shape({
  fromToken: yup.string().min(0, "A token is required in the 'From' field."),
  fromAmount: yup.number().min(0, "From balance must be greater than zero."),
  toToken: yup.string().min(1, "A token is required in the 'To' field."),
});

export type InteractionValues = typeof initialValues;

export function BaseInteraction({
  title,
  assets,
  spender,
  extra = null,
  onSubmit,
  onChange,
  defaultInputSymbol,
  defaultOutputSymbol,
  disableInputSelect,
  disableOutputSelect,
  requiresApproval = true,
}: Props) {
  const interactionRef = useRef<null | HTMLDivElement>(null);

  return (
    <div
      className="Interaction"
      ref={interactionRef}
      style={{ position: "relative" }}
    >
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={interactionSchema}
      >
        {(props) => (
          <>
            <Space align="center" className="spaced-between">
              <Typography.Title
                level={2}
                className="fancy no-margin-bottom"
                type="secondary"
              >
                {title}
              </Typography.Title>
              <InteractionComparison />
            </Space>
            <Divider />
            <InteractionInner
              {...props}
              assets={assets}
              spender={spender}
              extra={extra}
              onSubmit={onSubmit}
              onChange={onChange}
              defaultInputSymbol={defaultInputSymbol}
              defaultOutputSymbol={defaultOutputSymbol}
              disableInputSelect={disableInputSelect}
              disableOutputSelect={disableOutputSelect}
              requiresApproval={requiresApproval}
            />
          </>
        )}
      </Formik>
    </div>
  );
}

type InnerProps = Omit<Props, "title"> & FormikProps<InteractionValues>;

function InteractionInner({
  spender,
  assets,
  extra,
  values,
  isValid,
  handleSubmit,
  onChange,
  setFieldValue,
  setValues,
  setFieldError,
  defaultInputSymbol,
  defaultOutputSymbol,
  disableInputSelect,
  disableOutputSelect,
  requiresApproval,
}: InnerProps) {
  const tx = useTranslator();
  const tokenLookup = useSelector(selectors.selectTokenLookupBySymbol);
  const [tokenId, exactAmountIn] = useMemo(() => {
    if (values.fromToken && values.fromAmount) {
      const tokenIn = tokenLookup[values.fromToken.toLowerCase()];
      if (tokenIn) {
        return [
          tokenIn.id,
          convert
            .toToken(values.fromAmount.toString(), tokenIn.decimals)
            .toString(10),
        ];
      }
    }
    return ["", "0"];
  }, [values.fromAmount, values.fromToken, tokenLookup]);
  const { status, approve } = useTokenApproval({
    spender,
    tokenId,
    amount: exactAmountIn,
  });
  const inputOptions = useMemo(
    () => assets.filter(({ symbol }) => symbol !== values.toToken),
    [assets, values.toToken]
  );
  const outputOptions = useMemo(
    () => assets.filter(({ symbol }) => symbol !== values.fromToken),
    [assets, values.fromToken]
  );
  const disableFlip = disableInputSelect || disableOutputSelect;
  const handleFlip = useCallback(() => {
    if (!disableFlip) {
      const newValues = {
        fromToken: values.toToken,
        toToken: values.fromToken,
        fromAmount: values.toAmount,
        toAmount: values.fromAmount,
        lastTouchedField: values.lastTouchedField,
      };
      const error = onChange(newValues as InteractionValues);
      if (error) {
        const inputErr =
          error.includes("Input") ||
          (newValues.lastTouchedField === "from" && !error.includes("Output"));

        if (inputErr) {
          setFieldError("fromAmount", error);
        } else {
          setFieldError("toAmount", error);
        }
      }
      setValues(newValues);
    }
  }, [disableFlip, values, setValues, onChange, setFieldError]);

  // Effect:
  // On initial load, select two arbitrary tokens.
  useTokenRandomizer({
    assets,
    defaultInputSymbol,
    defaultOutputSymbol,
    from: values.fromToken,
    to: values.toToken,
    changeFrom: (newFrom) => setFieldValue("fromToken", newFrom),
    changeTo: (newTo) => setFieldValue("toToken", newTo),
  });

  return (
    <>
      {/* // Fields */}
      <TokenSelector
        label={tx("FROM")}
        assets={inputOptions}
        value={{
          token: values.fromToken,
          amount: values.fromAmount,
        }}
        selectable={!disableInputSelect}
        onChange={({ token, amount }) => {
          const newValues = {
            ...values,
            fromToken: token || "",
            fromAmount: amount || 0,
            lastTouchedField: "from",
          } as InteractionValues;
          const error = onChange(newValues);
          if (error) {
            if (error.includes("Output")) {
              setFieldError("toAmount", error);
            } else {
              setFieldError("fromAmount", error);
            }
          }
          setValues(newValues);
        }}
      />

      <Flipper disabled={disableFlip} onFlip={handleFlip} />

      <TokenSelector
        label={tx("TO")}
        assets={outputOptions}
        value={{
          token: values.toToken,
          amount: values.toAmount,
        }}
        selectable={!disableOutputSelect}
        onChange={({ token, amount }) => {
          const newValues = {
            ...values,
            toToken: token || "",
            toAmount: amount || 0,
            lastTouchedField: "to",
          } as InteractionValues;
          const error = onChange(newValues);
          if (error) {
            if (error.includes("Input")) {
              setFieldError("fromAmount", error);
            } else {
              setFieldError("toAmount", error);
            }
          }
          setValues(newValues);
        }}
      />

      <Divider />

      <InteractionErrors />

      {extra}

      {requiresApproval && status === "approval needed" ? (
        <Button
          type="primary"
          style={{ width: "100%" }}
          disabled={!isValid}
          onClick={approve}
        >
          Approve
        </Button>
      ) : (
        <Button
          type="primary"
          style={{ width: "100%" }}
          disabled={!isValid || (requiresApproval && status === "unknown")}
          onClick={() => handleSubmit()}
        >
          Send
        </Button>
      )}
    </>
  );
}

// e.g. [OMG] -> [AAVE]
function InteractionComparison() {
  const { values } = useFormikContext<typeof initialValues>();
  const { fromToken, toToken } = values;

  return fromToken && toToken ? (
    <Space>
      <Token name="Baseline" image={fromToken} />
      <AiOutlineArrowRight
        style={{
          position: "relative",
          top: "4px",
          fontSize: "32px",
        }}
      />
      <Token name="Comparison" image={toToken} />
    </Space>
  ) : null;
}

function InteractionErrors() {
  const { errors, touched } = useFormikContext<typeof initialValues>();
  const formattedErrors = Object.entries(errors)
    .filter(([key]) => touched[key as keyof InteractionValues])
    .map(([, value], index) => <li key={index}>{value}</li>);

  return formattedErrors.length > 0 ? (
    <>
      <Alert
        showIcon={true}
        type="error"
        message="Please fix the following issues:"
        description={<ul>{formattedErrors}</ul>}
      />
      <Divider />
    </>
  ) : null;
}
