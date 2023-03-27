import React from "react";
import { Badge } from "./Badge";

export const PaginationBadge = ({
  selected = false,
  disabled = false,
  ...rest
}) =>
  React.createElement(Badge, {
    className:
      "cursor-pointer h-6 w-6 " +
      (selected ? "bg-primary text-white" : "hover:bg-slate-100") +
      (disabled ? " hover:bg-white text-slate-500 cursor-default" : ""),
    ...rest,
  });
