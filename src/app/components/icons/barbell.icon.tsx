type Props = {
  className?: string;
  size?: number;
  width?: number;
  height?: number;
};

export const BarbellIcon: React.FC<Props> = ({
  className,
  size,
  width,
  height,
}) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 489.989 489.989"
      xmlSpace="preserve"
      fill="currentColor"
      className={className}
      width={width && size}
      height={height && size}
    >
      <path d="M483.757,83.225l-34.3-34.3l0,0l0,0l-42.7-42.7c-8.3-8.3-20.8-8.3-29.1,0c-8.3,8.3-8.3,20.8,0,29.1l28,28l-29.7,29.7 l-47.2-47.2c-8.3-8.3-20.8-8.3-29.1,0c-8.3,8.3-8.3,20.8,0,29.1l47.1,47.1l-225.4,224.1l-46.5-46.5c-8.3-8.3-20.8-8.3-29.1,0 s-8.3,20.8,0,29.1l46.4,46.4l-29.7,29.6l-27.1-27.1c-8.3-8.3-20.8-8.3-29.1,0s-8.3,20.8,0,29.1l77,77c13.5,11.7,25,4.2,29.1,0 c8.3-8.3,8.3-20.8,0-29.1l-20.8-20.8l29.7-29.6l41,41c13.6,11.6,25,4.2,29.1,0c8.3-8.3,8.3-20.8,0-29.1l-40.9-40.9l225.3-224.1 l40.3,40.3c13.4,11.3,25,4.2,29.1,0c8.3-8.3,8.3-20.8,0-29.1l-40.2-40.2l29.7-29.6l19.8,19.8c13,12,25,4.2,29.1,0 C492.057,104.025,492.057,91.525,483.757,83.225z" />
    </svg>
  );
};
