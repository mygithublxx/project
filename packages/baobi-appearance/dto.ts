export interface MenuIconSvgProps {
  linearGradient?: {
    id: string;
    direction?: "to Right" | "to Bottom" | "to Left" | "to Up";
    colors: { offset: string; stopColor: string }[];
  };
}
