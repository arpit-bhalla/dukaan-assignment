import React from "react";

export const Container = ({
  children,
  className,
}: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>) => (
  <div className={"container max-w-6xl mx-auto " + className}>{children}</div>
);
