import { Typography } from "antd";
import { useBreakpoints } from "helpers";
import React from "react";

export default function DEBUGScreenSize() {
  const {
    isMobile,
    xs = false,
    sm = false,
    md = false,
    lg = false,
    xl = false,
    xxl = false,
  } = useBreakpoints();
  const successOrDanger = (factor: boolean) => (factor ? "success" : "danger");

  return (
    <>
      <Typography.Paragraph type={successOrDanger(isMobile)}>
        Is mobile?
      </Typography.Paragraph>
      <Typography.Paragraph type={successOrDanger(xs)}>
        Extra Small
      </Typography.Paragraph>
      <Typography.Paragraph type={successOrDanger(sm)}>
        Small
      </Typography.Paragraph>
      <Typography.Paragraph type={successOrDanger(md)}>
        Medium
      </Typography.Paragraph>
      <Typography.Paragraph type={successOrDanger(lg)}>
        Large
      </Typography.Paragraph>
      <Typography.Paragraph type={successOrDanger(xl)}>
        Extra Large
      </Typography.Paragraph>
      <Typography.Paragraph type={successOrDanger(xxl)}>
        Huge
      </Typography.Paragraph>
    </>
  );
}