import NumberFlow, { continuous, type Format } from "@number-flow/react";
const format: Format = {
};

export function Number({
  number,
  className,
  formatProps,
}: {
  number: number;
  className?: string;
  formatProps?: Format;
}) {
  return (
    <NumberFlow
      willChange
      plugins={[continuous]}
      className={className}
      value={number}
      format={{
        ...format,
        ...formatProps,
      }}
    />
  );
}
