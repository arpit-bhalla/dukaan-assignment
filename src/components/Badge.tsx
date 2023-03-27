export function Badge({
  value = "",
  className = "bg-white text-black",
  size = 5,
  ...rest
}) {
  return (
    <span
      className={
        `inline-flex justify-center items-center rounded-xl text-sm w-${size} h-${size} ` +
        className
      }
      {...rest}
    >
      {value}
    </span>
  );
}
