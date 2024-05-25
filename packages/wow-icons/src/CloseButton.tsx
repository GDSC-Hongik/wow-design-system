const CloseButton = (color: string, size: number) => (
  <svg
    fill="none"
    height={size}
    width={size}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11 12 7 7l4-5M3 12l4-5-4-5"
      stroke={color}
      stroke-linejoin="bevel"
      stroke-width="1.2"
    />
  </svg>
);

export default CloseButton;
