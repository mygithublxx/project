export const HC_UP = {
  width: 40,
  height: 40,
  attrs: {
    g1: {
      tagName: "g",
      selector: "g1",
      transform: "translate(0.000000, 0.230447)",
      fill: "none",
      stroke: "#525F7C",
    },
    mask1: {
      tagName: "mask",
      selector: "mask1",
      fill: "white",
      children: [
        {
          tagName: "use",
          selector: "use1",
          "xlink:href": "#path1",
        },
      ],
    },
    g2: {
      tagName: "g",
      selector: "g2",
    },
    path1: {
      tagName: "path",
      selector: "path1",
      d: "M12,39.0832611 L12,25.0832611 C12,23.9786916 12.8954305,23.0832611 14,23.0832611 L28,23.0832611 L28,23.0832611",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      mask: "url(#mask1)",
      transform:
        "translate(20.000000, 31.083261) rotate(-315.000000) translate(-20.000000, -31.083261)",
      fill: "none",
    },
    path2: {
      tagName: "path",
      selector: "path2",
      d: "M12,26.4558441 L12,12.4558441 C12,11.3512746 12.8954305,10.4558441 14,10.4558441 L28,10.4558441 L28,10.4558441",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      mask: "url(#mask1)",
      transform:
        "translate(20.000000, 18.455844) rotate(-315.000000) translate(-20.000000, -18.455844)",
      fill: "none",
    },
  },
  markup: [
    {
      tagName: "g",
      selector: "g1",
      children: [
        {
          tagName: "mask",
          selector: "mask1",
          children: [
            {
              tagName: "use",
              selector: "use1",
            },
          ],
        },
        {
          tagName: "g",
          selector: "g2",
          children: [
            {
              tagName: "path",
              selector: "path1",
            },
            {
              tagName: "path",
              selector: "path2",
            },
          ],
        },
      ],
    },
  ],
};

export const HC_DOWN = {
  ...HC_UP,
  attrs: {
    ...HC_UP.attrs,
    g1: {
      ...HC_UP.attrs.g1,
      transform: "rotate(180,20,20) ",
    },
  },
};

export const HC_LEFT = {
  ...HC_UP,
  attrs: {
    ...HC_UP.attrs,
    g1: {
      ...HC_UP.attrs.g1,
      transform: "rotate(270,20,20) ",
    },
  },
};

export const HC_RIGHT = {
  ...HC_UP,
  attrs: {
    ...HC_UP.attrs,
    g1: {
      ...HC_UP.attrs.g1,
      transform: "rotate(90,20,20) ",
    },
  },
};
