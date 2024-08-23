export const TIMEZONE_OPTIONS = [
  {
    value: -12,
    label: "西十二区",
  },
  {
    value: -11,
    label: "西十一区",
  },
  {
    value: -10,
    label: "西十区",
  },
  {
    value: -9,
    label: "西九区",
  },
  {
    value: -8,
    label: "西八区",
  },
  {
    value: -7,
    label: "西七区",
  },
  {
    value: -6,
    label: "西六区",
  },
  {
    value: -5,
    label: "西五区",
  },
  {
    value: -4,
    label: "西四区",
  },
  {
    value: -3,
    label: "西三区",
  },
  {
    value: -2,
    label: "西二区",
  },
  {
    value: -1,
    label: "西一区",
  },
  {
    value: 0,
    label: "中时区",
  },
  {
    value: 1,
    label: "东一区",
  },
  {
    value: 2,
    label: "东二区",
  },
  {
    value: 3,
    label: "东三区",
  },
  {
    value: 4,
    label: "东四区",
  },
  {
    value: 5,
    label: "东五区",
  },
  {
    value: 6,
    label: "东六区",
  },
  {
    value: 7,
    label: "东七区",
  },
  {
    value: 8,
    label: "东八区",
  },
  {
    value: 9,
    label: "东九区",
  },
  {
    value: 10,
    label: "东十区",
  },
  {
    value: 11,
    label: "东十一区",
  },
  {
    value: 12,
    label: "东十二区",
  },
];

export const getTimeZoneName = (value: number) => {
  return TIMEZONE_OPTIONS.find((t) => t.value === value)?.label || "";
};
