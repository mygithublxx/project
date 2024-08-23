export const conditionName = {
  GREATER_THEN: 1,
  LESS_THEN: 2,
  EQUAL: 3,
  GREATER_AND_EQUAL: 4,
  LESS_AND_EQUAL: 5,
  NOT_EQUAL: 6,
};

export const itemsConditions = [
  {
    id: conditionName.GREATER_THEN,
    label: ">",
  },
  {
    id: conditionName.LESS_THEN,
    label: "<",
  },
  {
    id: conditionName.EQUAL,
    label: "=",
  },
  {
    id: conditionName.GREATER_AND_EQUAL,
    label: "≥",
  },
  {
    id: conditionName.LESS_AND_EQUAL,
    label: "≤",
  },
  {
    id: conditionName.NOT_EQUAL,
    label: "!=",
  },
];

export const getConditionName = (index: number) => {
  return itemsConditions.find((c) => c.id === index)?.label || "";
};
