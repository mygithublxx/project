import { HC_UP, HC_DOWN, HC_LEFT, HC_RIGHT } from "../const/nodes/HC";
import { WT_D_D, WT_D_Y, WT_ONLOAD, WT_Y_D, WT_Y_Y } from "../const/nodes/WT";

export const useNodeRegister = (Graph) => {
  const registerCustomNode = () => {
    const wrapper = {
      strokeWidth: 0,
      fillOpacity: 0,
      fill: "rgb(216, 216, 216)",
      x: 0,
      y: 0,
      width: 40,
      height: 40,
    };
    Graph.registerNode(
      "CT",
      {
        width: 40,
        height: 40,
        attrs: {
          wrapper: {
            ...wrapper,
          },
          g1: {
            tagName: "g",
            selector: "g1",
            transform: "translate(7.329836, 4.000000)",
            stroke: "#525F7C",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          circle1: {
            tagName: "circle",
            selector: "circle1",
            cx: 8,
            cy: 16,
            r: 8,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            fill: "none",
          },
          line1: {
            tagName: "line",
            selector: "line1",
            x1: 8,
            y1: 0,
            x2: 8,
            y2: 31.1988158,
          },
          line2: {
            tagName: "line",
            selector: "line2",
            x1: 16,
            y1: 16,
            x2: 28.4391536,
            y2: 16,
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          line3: {
            tagName: "line",
            selector: "line3",
            x1: 16.4782512,
            y1: 19,
            x2: 23.5995219,
            y2: 12.8153461,
            transform:
              "translate(20.478251, 16.000000) rotate(-4.026464) translate(-20.478251, -16.000000)",
          },
          line4: {
            tagName: "line",
            selector: "line4",
            x1: 21.1044415,
            y1: 19,
            x2: 28.2257122,
            y2: 12.8153461,
            transform:
              "translate(25.104441, 16.000000) rotate(-4.026464) translate(-25.104441, -16.000000)",
          },
        },
        markup: [
          {
            tagName: "g",
            selector: "g1",
            children: [
              {
                tagName: "circle",
                selector: "circle1",
              },
              {
                tagName: "line",
                selector: "line1",
              },
              {
                tagName: "line",
                selector: "line2",
              },
              {
                tagName: "line",
                selector: "line3",
              },
              {
                tagName: "line",
                selector: "line4",
              },
            ],
          },
        ],
      },
      true
    );
    Graph.registerNode(
      "GSES-CLOSE",
      {
        width: 40,
        height: 40,
        attrs: {
          g1: {
            tagName: "g",
            selector: "g1",
            stroke: "#525F7C",
          },
          line1: {
            tagName: "line",
            selector: "line1",
            x1: 20.0859154,
            y1: 4.71637178,
            x2: 20.0859154,
            y2: 11.137202,
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          line2: {
            tagName: "line",
            selector: "line2",
            x1: 20.0859154,
            y1: 22.3881859,
            x2: 20.0859154,
            y2: 30.7836282,
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          line3: {
            tagName: "line",
            selector: "line3",
            x1: 22.9060541,
            y1: 15.1627006,
            x2: 11.7142235,
            y2: 18.3076905,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            transform:
              "translate(17.363972, 17.162701) rotate(-277.671645) translate(-17.363972, -17.162701)",
          },
          line4: {
            tagName: "line",
            selector: "line4",
            x1: 15.4750135,
            y1: 11.7163718,
            x2: 24.6151832,
            y2: 11.7163718,
          },
          line5: {
            tagName: "line",
            selector: "line5",
            x1: 13,
            y1: 30.7836282,
            x2: 27,
            y2: 30.7836282,
          },
          line6: {
            tagName: "line",
            selector: "line6",
            x1: 15,
            y1: 32.7836282,
            x2: 25,
            y2: 32.7836282,
          },
          line7: {
            tagName: "line",
            selector: "line7",
            x1: 17,
            y1: 34.7836282,
            x2: 23,
            y2: 34.7836282,
          },
        },
        markup: [
          {
            tagName: "g",
            selector: "g1",
            children: [
              {
                tagName: "line",
                selector: "line1",
              },
              {
                tagName: "line",
                selector: "line2",
              },
              {
                tagName: "line",
                selector: "line3",
              },
              {
                tagName: "line",
                selector: "line4",
              },
              {
                tagName: "line",
                selector: "line5",
              },
              {
                tagName: "line",
                selector: "line6",
              },
              {
                tagName: "line",
                selector: "line7",
              },
            ],
          },
        ],
      },
      true
    );
    Graph.registerNode(
      "GSES-OPEN",
      {
        width: 40,
        height: 40,
        attrs: {
          g1: {
            tagName: "g",
            selector: "g1",
            stroke: "#525F7C",
          },
          line1: {
            tagName: "line",
            selector: "line1",
            x1: 21.1170307,
            y1: 4.71637178,
            x2: 21.1170307,
            y2: 11.137202,
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          line2: {
            tagName: "line",
            selector: "line2",
            x1: 21.1170307,
            y1: 22.3881859,
            x2: 21.1170307,
            y2: 30.7836282,
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          line3: {
            tagName: "line",
            selector: "line3",
            x1: 22.1917139,
            y1: 16.4867836,
            x2: 10.9998833,
            y2: 19.6317735,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            transform:
              "translate(16.649632, 18.486784) rotate(-299.304232) translate(-16.649632, -18.486784)",
          },
          line4: {
            tagName: "line",
            selector: "line4",
            x1: 16.5061287,
            y1: 11.7163718,
            x2: 25.6462985,
            y2: 11.7163718,
          },
          line5: {
            tagName: "line",
            selector: "line5",
            x1: 14.0311152,
            y1: 30.7836282,
            x2: 28.0311152,
            y2: 30.7836282,
          },
          line6: {
            tagName: "line",
            selector: "line6",
            x1: 16.0311152,
            y1: 32.7836282,
            x2: 26.0311152,
            y2: 32.7836282,
          },
          line7: {
            tagName: "line",
            selector: "line7",
            x1: 18.0311152,
            y1: 34.7836282,
            x2: 24.0311152,
            y2: 34.7836282,
          },
        },
        markup: [
          {
            tagName: "g",
            selector: "g1",
            children: [
              {
                tagName: "line",
                selector: "line1",
              },
              {
                tagName: "line",
                selector: "line2",
              },
              {
                tagName: "line",
                selector: "line3",
              },
              {
                tagName: "line",
                selector: "line4",
              },
              {
                tagName: "line",
                selector: "line5",
              },
              {
                tagName: "line",
                selector: "line6",
              },
              {
                tagName: "line",
                selector: "line7",
              },
            ],
          },
        ],
      },
      true
    );
    Graph.registerNode(
      "ISD-CLOSE",
      {
        width: 40,
        height: 40,
        attrs: {
          g1: {
            tagName: "g",
            selector: "g1",
            transform: "translate(10.695081, 2.243553)",
            stroke: "#525F7C",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          line1: {
            tagName: "line",
            selector: "line1",
            x1: 9.55598426,
            y1: -1.08888656e-13,
            x2: 9.55598426,
            y2: 6.42083025,
          },
          g2: {
            tagName: "g",
            selector: "g2",
            transform: "translate(0.000000, 9.638941)",
          },
          line2: {
            tagName: "line",
            selector: "line2",
            x1: 9.55598426,
            y1: 20.2027198,
            x2: 9.55598426,
            y2: 26.6235501,
          },
          line3: {
            tagName: "line",
            selector: "line3",
            x1: 12.7733364,
            y1: 1.59261813,
            x2: 2.81886199,
            y2: 13.6101017,
            transform:
              "translate(7.796099, 7.601360) rotate(-52.671645) translate(-7.796099, -7.601360)",
          },
          circle1: {
            tagName: "circle",
            selector: "circle1",
            cx: 9.55598426,
            cy: 17.7027198,
            r: 2.5,
            fill: "none",
          },
          circle2: {
            tagName: "circle",
            selector: "circle2",
            cx: 9.55598426,
            cy: 8.92083025,
            r: 2.5,
            fill: "none",
          },
        },
        markup: [
          {
            tagName: "g",
            selector: "g1",
            children: [
              {
                tagName: "line",
                selector: "line1",
              },
              {
                tagName: "g",
                selector: "g2",
                children: [
                  {
                    tagName: "line",
                    selector: "line2",
                  },
                  {
                    tagName: "line",
                    selector: "line3",
                  },
                  {
                    tagName: "circle",
                    selector: "circle1",
                  },
                ],
              },
              {
                tagName: "circle",
                selector: "circle2",
              },
            ],
          },
        ],
      },
      true
    );
    Graph.registerNode(
      "ISD-OPEN",
      {
        width: 40,
        height: 40,
        attrs: {
          g1: {
            tagName: "g",
            selector: "g1",
            transform: "translate(8.767570, 1.868755)",
            stroke: "#525F7C",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          line1: {
            tagName: "line",
            selector: "line1",
            x1: 11.964859,
            y1: -1.08888656e-13,
            x2: 11.964859,
            y2: 6.42083025,
          },
          g2: {
            tagName: "g",
            selector: "g2",
            transform: "translate(0.000000, 13.807362)",
          },
          line2: {
            tagName: "line",
            selector: "line2",
            x1: 11.964859,
            y1: 16.0342982,
            x2: 11.964859,
            y2: 22.4551284,
          },
          line3: {
            tagName: "line",
            selector: "line3",
            x1: 11.4249471,
            y1: -0.491592701,
            x2: 1.47047273,
            y2: 11.5258909,
            transform:
              "translate(6.447710, 5.517149) rotate(-264.636063) translate(-6.447710, -5.517149)",
          },
          circle1: {
            tagName: "circle",
            selector: "circle1",
            cx: 11.964859,
            cy: 13.5342982,
            r: 2.5,
            fill: "none",
          },
          circle2: {
            tagName: "circle",
            selector: "circle2",
            cx: 11.964859,
            cy: 8.92083025,
            r: 2.5,
            fill: "none",
          },
        },
        markup: [
          {
            tagName: "g",
            selector: "g1",
            children: [
              {
                tagName: "line",
                selector: "line1",
              },
              {
                tagName: "g",
                selector: "g2",
                children: [
                  {
                    tagName: "line",
                    selector: "line2",
                  },
                  {
                    tagName: "line",
                    selector: "line3",
                  },
                  {
                    tagName: "circle",
                    selector: "circle1",
                  },
                ],
              },
              {
                tagName: "circle",
                selector: "circle2",
              },
            ],
          },
        ],
      },
      true
    );
    Graph.registerNode("HC-UP", HC_UP, true);
    Graph.registerNode("HC-DOWN", HC_DOWN, true);
    Graph.registerNode("HC-LEFT", HC_LEFT, true);
    Graph.registerNode("HC-RIGHT", HC_RIGHT, true);
    Graph.registerNode(
      "FUSE",
      {
        width: 40,
        height: 40,
        attrs: {
          g1: {
            tagName: "g",
            selector: "g1",
            transform: "translate(15.000000, 3.000000)",
            stroke: "#525F7C",
          },
          wrapper: {
            ...wrapper,
          },
          rect1: {
            tagName: "rect",
            selector: "rect1",
            x: 0,
            y: 8,
            width: 10,
            height: 17,
            rx: 2,
            fill: "transparent",
          },
          line1: {
            tagName: "line",
            selector: "line1",
            x1: 5,
            y1: 0,
            x2: 5,
            y2: 33,
          },
        },
        markup: [
          {
            tagName: "rect",
            selector: "wrapper",
          },
          {
            tagName: "g",
            selector: "g1",
            children: [
              {
                tagName: "rect",
                selector: "rect1",
              },
              {
                tagName: "line",
                selector: "line1",
              },
            ],
          },
        ],
      },
      true
    );
    Graph.registerNode(
      "SA",
      {
        width: 40,
        height: 40,
        attrs: {
          g1: {
            tagName: "g",
            selector: "g1",
            transform: "translate(13.000000, 3.475325)",
            stroke: "#525F7C",
          },
          wrapper: {
            ...wrapper,
          },
          rect1: {
            tagName: "rect",
            selector: "rect1",
            x: 0,
            y: 4,
            width: 14,
            height: 20,
            rx: 2,
            fill: "transparent",
          },
          line1: {
            tagName: "line",
            selector: "line1",
            x1: 7,
            y1: 0,
            x2: 7,
            y2: 14.4506701,
          },
          path1: {
            tagName: "path",
            selector: "path1",
            d: "M12,39.0832611 L12,25.0832611 C12,23.9786916 12.8954305,23.0832611 14,23.0832611 L28,23.0832611 L28,23.0832611",
            strokeWidth: 3.4,
            fill: "none",
            transform:
              "translate(4.60000, 22.00000) rotate(225.000000) scale(0.3)",
          },
          line2: {
            tagName: "line",
            selector: "line2",
            x1: 7,
            y1: 24,
            x2: 7,
            y2: 28,
          },
          line3: {
            tagName: "line",
            selector: "line3",
            x1: 0,
            y1: 28.54935,
            x2: 14,
            y2: 28.54935,
          },
          line4: {
            tagName: "line",
            selector: "line4",
            x1: 2,
            y1: 30.54935,
            x2: 12,
            y2: 30.54935,
          },
          line5: {
            tagName: "line",
            selector: "line5",
            x1: 4,
            y1: 32.54935,
            x2: 10,
            y2: 32.54935,
          },
        },
        markup: [
          {
            tagName: "rect",
            selector: "wrapper",
          },
          {
            tagName: "g",
            selector: "g1",
            children: [
              {
                tagName: "rect",
                selector: "rect1",
              },
              {
                tagName: "line",
                selector: "line1",
              },
              {
                tagName: "path",
                selector: "path1",
              },
              {
                tagName: "line",
                selector: "line2",
              },
              {
                tagName: "line",
                selector: "line3",
              },
              {
                tagName: "line",
                selector: "line4",
              },
              {
                tagName: "line",
                selector: "line5",
              },
            ],
          },
        ],
      },
      true
    );
    Graph.registerNode(
      "SP",
      {
        width: 40,
        height: 40,
        attrs: {
          g1: {
            tagName: "g",
            selector: "g1",
            fill: "none",
            stroke: "#525F7C",
          },
          wrapper: {
            ...wrapper,
          },
          circle1: {
            tagName: "circle",
            selector: "circle1",
            cx: 20,
            cy: 20,
            r: 8,
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
        },
        markup: [
          {
            tagName: "rect",
            selector: "wrapper",
          },
          {
            tagName: "g",
            selector: "g1",
            children: [
              {
                tagName: "circle",
                selector: "circle1",
              },
            ],
          },
        ],
      },
      true
    );
    Graph.registerNode(
      "BUSBAR",
      {
        width: 40,
        height: 40,
        attrs: {
          g1: {
            tagName: "g",
            selector: "g1",
          },
          wrapper: {
            ...wrapper,
          },
          line1: {
            tagName: "line",
            selector: "line1",
            x1: 12.7221407,
            y1: 20,
            x2: 27.2778593,
            y2: 20,
            id: "路径-4备份-8",
            stroke: "#525F7C",
          },
        },
        markup: [
          {
            tagName: "rect",
            selector: "wrapper",
          },
          {
            tagName: "g",
            selector: "g1",
            children: [
              {
                tagName: "line",
                selector: "line1",
              },
            ],
          },
        ],
      },
      true
    );
    Graph.registerNode(
      "LLI",
      {
        width: 40,
        height: 40,
        attrs: {
          g1: {
            tagName: "g",
            selector: "g1",
            stroke: "#525F7C",
          },
          wrapper: {
            ...wrapper,
          },
          circle1: {
            tagName: "circle",
            selector: "circle1",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            cx: 20,
            cy: 22.4671399,
            r: 8,
            fill: "transparent",
          },
          line1: {
            tagName: "line",
            selector: "line1",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            x1: 15.5139687,
            y1: 16.4671399,
            x2: 24.4860313,
            y2: 28.4671399,
            transform:
              "translate(20.000000, 22.467140) rotate(-8.215568) translate(-20.000000, -22.467140)",
          },
          line2: {
            tagName: "line",
            selector: "line2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            x1: 15.5139687,
            y1: 16.4671399,
            x2: 24.4860313,
            y2: 28.4671399,
            transform:
              "translate(20.000000, 22.467140) rotate(-98.215568) translate(-20.000000, -22.467140)",
          },
          path1: {
            tagName: "path",
            selector: "path1",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M20,3.94588812 C20,3.94588812 20,5.42009043 20,8.36849504",
          },
          line3: {
            tagName: "line",
            selector: "line3",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            x1: 20,
            y1: 12.5268345,
            x2: 20,
            y2: 14.4770571,
          },
          line4: {
            tagName: "line",
            selector: "line4",
            x1: 17,
            y1: 8.94766479,
            x2: 23.1151832,
            y2: 8.94766479,
          },
          line5: {
            tagName: "line",
            selector: "line5",
            x1: 12.9140846,
            y1: 30.4671399,
            x2: 27.4698031,
            y2: 30.4671399,
          },
          line6: {
            tagName: "line",
            selector: "line6",
            x1: 15.1919439,
            y1: 32.4671399,
            x2: 25.1919439,
            y2: 32.4671399,
          },
          line7: {
            tagName: "line",
            selector: "line7",
            x1: 17.1919439,
            y1: 34.4671399,
            x2: 23.1919439,
            y2: 34.4671399,
          },
          line8: {
            tagName: "line",
            selector: "line8",
            x1: 17,
            y1: 11.9476648,
            x2: 23.1151832,
            y2: 11.9476648,
          },
        },
        markup: [
          {
            tagName: "rect",
            selector: "wrapper",
          },
          {
            tagName: "g",
            selector: "g1",
            children: [
              {
                tagName: "circle",
                selector: "circle1",
              },
              {
                tagName: "line",
                selector: "line1",
              },
              {
                tagName: "line",
                selector: "line2",
              },
              {
                tagName: "path",
                selector: "path1",
              },
              {
                tagName: "line",
                selector: "line3",
              },
              {
                tagName: "line",
                selector: "line4",
              },
              {
                tagName: "line",
                selector: "line5",
              },
              {
                tagName: "line",
                selector: "line6",
              },
              {
                tagName: "line",
                selector: "line7",
              },
              {
                tagName: "line",
                selector: "line8",
              },
            ],
          },
        ],
      },
      true
    );
    Graph.registerNode(
      "3WT",
      {
        width: 40,
        height: 40,
        attrs: {
          g1: {
            tagName: "g",
            selector: "g1",
            transform: "translate(7.000000, 7.230447)",
            stroke: "#525F7C",
            fill: "none",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          wrapper: {
            ...wrapper,
          },
          circle1: {
            tagName: "circle",
            selector: "circle1",
            cx: 13.728725,
            cy: 8,
            r: 8,
          },
          circle2: {
            tagName: "circle",
            selector: "circle2",
            cx: 8,
            cy: 16.6691621,
            r: 8,
          },
          circle3: {
            tagName: "circle",
            selector: "circle3",
            cx: 19,
            cy: 16.6691621,
            r: 8,
          },
        },
        markup: [
          {
            tagName: "rect",
            selector: "wrapper",
          },
          {
            tagName: "g",
            selector: "g1",
            children: [
              {
                tagName: "circle",
                selector: "circle1",
              },
              {
                tagName: "circle",
                selector: "circle2",
              },
              {
                tagName: "circle",
                selector: "circle3",
              },
            ],
          },
        ],
      },
      true
    );
    Graph.registerNode(
      "2WT",
      {
        width: 40,
        height: 40,
        attrs: {
          wrapper: {
            ...wrapper,
          },
          g1: {
            tagName: "g",
            selector: "g1",
            stroke: "#525F7C",
            refWidth: 1,
            refHeight: 1,
            transform: "translate(12.000000, 1.000000)",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          g2: {
            tagName: "g",
            selector: "g2",
            transform: "translate(0.000000, 5.420830)",
          },
          circle1: {
            tagName: "circle",
            selector: "circle1",
            cx: 8,
            cy: 8,
            r: 8,
            fill: "transparent",
          },
          circle2: {
            tagName: "circle",
            selector: "circle2",
            cx: 8,
            cy: 19,
            r: 8,
            fill: "transparent",
          },
        },
        markup: [
          {
            tagName: "rect",
            selector: "wrapper",
          },
          {
            tagName: "g",
            selector: "g1",
            children: [
              {
                tagName: "g",
                selector: "g2",
                children: [
                  {
                    tagName: "circle",
                    selector: "circle1",
                  },
                  {
                    tagName: "circle",
                    selector: "circle2",
                  },
                ],
              },
            ],
          },
        ],
      },
      true
    );
    Graph.registerNode("2WT-onload", WT_ONLOAD, true);
    Graph.registerNode("2WT-Y-Y", WT_Y_Y, true);
    Graph.registerNode("2WT-Y-D", WT_Y_D, true);
    Graph.registerNode("2WT-D-Y", WT_D_Y, true);
    Graph.registerNode("2WT-D-D", WT_D_D, true);
    Graph.registerNode(
      "placeholder",
      {
        width: 40,
        height: 40,
        attrs: {
          g1: {
            refWidth: 1,
            refHeight: 1,
            stroke: "#000",
            transform: "translate(6.000000, 6.000000)",
          },
          wrapper: {
            ...wrapper,
          },
          rect: {
            fill: "#0000",
            width: 28,
            height: 28,
            x: 0,
            y: 0,
            rx: 1.47368421,
          },
          line1: {
            x1: 1.10526316,
            y1: 26.8947368,
            x2: 26.8947368,
            y2: 1.10526316,
            strokeLinecap: "round",
          },
          line2: {
            strokeWidth: "inherit",
            stroke: "inherit",
            x1: 1.10526316,
            y1: 26.8947368,
            x2: 26.8947368,
            y2: 1.10526316,
            strokeLinecap: "round",
            transform:
              "translate(14.000000, 14.000000) scale(-1, 1) translate(-14.000000, -14.000000) ",
          },
          text: {
            strokeWidth: 0,
            text: "",
            refX: 0,
            refY: 20 - 7,
            fontSize: 12,
            fill: "rgba(0,0,0,0.6)",
            "text-anchor": "start",
          },
        },
        markup: [
          {
            tagName: "rect",
            selector: "wrapper",
          },
          {
            tagName: "g",
            selector: "g1",
            children: [
              {
                tagName: "rect",
                selector: "rect",
              },
              {
                tagName: "line",
                selector: "line1",
              },
              {
                tagName: "line",
                selector: "line2",
              },
              {
                tagName: "text",
                selector: "text",
              },
            ],
          },
        ],
      },
      true
    );
    Graph.registerNode(
      "load",
      {
        width: 40,
        height: 40,
        attrs: {
          g1: {
            stroke: "#000",
            refWidth: 1,
            refHeight: 1,
            transform: "translate(7.000000, 4.000000)",
          },
          wrapper: {
            ...wrapper,
          },
          polygon: {
            fill: "#0000",
            points: "13 15 26 33 0 33",
            transform:
              "translate(13.000000, 24.000000) scale(1, -1) translate(-13.000000, -24.000000) ",
          },
          line1: {
            stroke: "inherit",
            x1: 13,
            y1: 32,
            x2: 13,
            y2: 1.38777878e-17,
          },
        },
        markup: [
          {
            tagName: "rect",
            selector: "wrapper",
          },
          {
            tagName: "g",
            selector: "g1",
            children: [
              {
                tagName: "polygon",
                selector: "polygon",
              },
              {
                tagName: "line",
                selector: "line1",
              },
            ],
          },
        ],
      },
      true
    );
    Graph.registerNode(
      "breaker-closed",
      {
        width: 40,
        height: 40,
        attrs: {
          g1: {
            stroke: "#000",
            strokeWidth: 2,
            fill: "#000",
            refWidth: 1,
            refHeight: 1,
            transform: "translate(13, 3.000000)",
          },
          wrapper: {
            ...wrapper,
          },
          rect1: {
            x: 0.894736842,
            y: 4.89473684,
            width: 12.2105263,
            height: 23.2105263,
          },
          line1: {
            x1: 6.5,
            y1: 0,
            x2: 6.5,
            y2: 4.47368421,
          },
          line2: {
            x1: 6.5,
            y1: 28.5,
            x2: 6.5,
            y2: 34,
          },
        },
        markup: [
          {
            tagName: "rect",
            selector: "wrapper",
          },
          {
            tagName: "g",
            selector: "g1",
            children: [
              {
                tagName: "rect",
                selector: "rect1",
              },
              {
                tagName: "line",
                selector: "line1",
              },
              {
                tagName: "line",
                selector: "line2",
              },
            ],
          },
        ],
      },
      true
    );
    Graph.registerNode(
      "breaker-open",
      {
        width: 40,
        height: 40,
        attrs: {
          g1: {
            stroke: "#000",
            strokeWidth: 2,
            fill: "#0000",
            refWidth: 1,
            refHeight: 1,
            transform: "translate(13, 3.000000)",
          },
          wrapper: {
            ...wrapper,
          },
          rect1: {
            x: "0.894736842",
            y: "4.89473684",
            width: "12.2105263",
            height: "23.2105263",
            fill: "inherit",
          },
          line1: {
            x1: 6.5,
            y1: 0,
            x2: 6.5,
            y2: 4.47368421,
          },
          line2: {
            x1: 6.5,
            y1: 28.5,
            x2: 6.5,
            y2: 34,
          },
        },
        markup: [
          {
            tagName: "rect",
            selector: "wrapper",
          },
          {
            tagName: "g",
            selector: "g1",
            children: [
              {
                tagName: "rect",
                selector: "rect1",
              },
              {
                tagName: "line",
                selector: "line1",
              },
              {
                tagName: "line",
                selector: "line2",
              },
            ],
          },
        ],
      },
      true
    );
    Graph.registerNode(
      "charge-pile",
      {
        width: 40,
        height: 40,
        attrs: {
          g1: {
            stroke: "#000",
            fill: "#0000",
            refWidth: 1,
            refHeight: 1,
            transform: "translate(7, 6.000000)",
          },
          wrapper: {
            ...wrapper,
          },
          path1: {
            d: "M17.6721311,0.5 C18.0863447,0.5 18.4613447,0.667893219 18.7327913,0.939339828 C19.0042379,1.21078644 19.1721311,1.58578644 19.1721311,2 L19.1721311,2 L19.1721311,23.5 L2.46721311,23.5 L2.46721311,2 C2.46721311,1.58578644 2.63510633,1.21078644 2.90655294,0.939339828 C3.17799955,0.667893219 3.55299955,0.5 3.96721311,0.5 L3.96721311,0.5 Z",
          },
          line1: {
            x1: 3.44262295,
            y1: 4.5,
            x2: 18.1967213,
            y2: 4.5,
            strokeLinecap: "square",
          },
          rect1: {
            x: 0.5,
            y: 23.5,
            width: 20.6393,
            height: 3,
          },
          path2: {
            strokeLinecap: "round",
            d: "M11.4031081,7.56442831 L10.8139884,11.7849901 L10.8088185,11.8308487 C10.7950538,12.0070434 10.8430958,12.182119 10.9411293,12.3130191 C11.0391628,12.4439191 11.1780916,12.5184977 11.3237488,12.5184136 L13.821368,12.5180995 L9.96119962,19.1506352 L10.5402378,15.0063997 L10.5454078,14.9605411 C10.5592457,14.7843494 10.5112727,14.6092394 10.4132876,14.4782785 C10.3153025,14.3473176 10.1763976,14.2726581 10.0307359,14.2726621 L7.17354438,14.2726621 L11.4031081,7.56442831 L11.4031081,7.56442831 Z",
          },
          path3: {
            fill: "#0000",
            d: "M18.7622437,14.0170915 L22.2789532,14.0170915 C23.0788139,14.0170915 23.7272291,14.6655066 23.7272291,15.4653673 L23.7272291,19.3321234 C23.7272291,20.1319841 24.3756443,20.7803993 25.1755049,20.7803993 L25.8489242,20.7803993 C26.6487849,20.7803993 27.2972001,20.1319841 27.2972001,19.3321234 L27.2972001,10.9202916 L27.2972001,10.9202916",
          },
          rect2: {
            x: 25.5,
            y: 8.5,
            width: 4,
            height: 2,
            rx: 1,
          },
          rect3: {
            x: 26.5656,
            y: 6.5,
            width: 1.95082,
            height: 2,
            rx: 0.97541,
          },
        },
        markup: [
          {
            tagName: "rect",
            selector: "wrapper",
          },
          {
            tagName: "g",
            selector: "g1",
            children: [
              {
                tagName: "path",
                selector: "path1",
              },
              {
                tagName: "line",
                selector: "line1",
              },
              {
                tagName: "rect",
                selector: "rect1",
              },
              {
                tagName: "path",
                selector: "path2",
              },
              {
                tagName: "path",
                selector: "path3",
              },
              {
                tagName: "rect",
                selector: "rect2",
              },
              {
                tagName: "rect",
                selector: "rect3",
              },
            ],
          },
        ],
      },
      true
    );
    Graph.registerNode(
      "charging-pile",
      {
        width: 40,
        height: 40,
        attrs: {
          g1: {
            stroke: "#000",
            fill: "#0000",
            refWidth: 1,
            refHeight: 1,
            transform: "translate(7, 6.000000)",
          },
          wrapper: {
            ...wrapper,
          },
          path1: {
            d: "M17.6721311,0.5 C18.0863447,0.5 18.4613447,0.667893219 18.7327913,0.939339828 C19.0042379,1.21078644 19.1721311,1.58578644 19.1721311,2 L19.1721311,2 L19.1721311,23.5 L2.46721311,23.5 L2.46721311,2 C2.46721311,1.58578644 2.63510633,1.21078644 2.90655294,0.939339828 C3.17799955,0.667893219 3.55299955,0.5 3.96721311,0.5 L3.96721311,0.5 Z",
          },
          line1: {
            x1: 3.44262295,
            y1: 4.5,
            x2: 18.1967213,
            y2: 4.5,
            strokeLinecap: "square",
          },
          rect1: {
            x: 0.5,
            y: 23.5,
            width: 20.6393,
            height: 3,
          },
          path2: {
            strokeLinecap: "round",
            d: "M11.4031081,7.56442831 L10.8139884,11.7849901 L10.8088185,11.8308487 C10.7950538,12.0070434 10.8430958,12.182119 10.9411293,12.3130191 C11.0391628,12.4439191 11.1780916,12.5184977 11.3237488,12.5184136 L13.821368,12.5180995 L9.96119962,19.1506352 L10.5402378,15.0063997 L10.5454078,14.9605411 C10.5592457,14.7843494 10.5112727,14.6092394 10.4132876,14.4782785 C10.3153025,14.3473176 10.1763976,14.2726581 10.0307359,14.2726621 L7.17354438,14.2726621 L11.4031081,7.56442831 L11.4031081,7.56442831 Z",
          },
          path3: {
            fill: "#0000",
            d: "M18.7622437,14.0170915 L22.2789532,14.0170915 C23.0788139,14.0170915 23.7272291,14.6655066 23.7272291,15.4653673 L23.7272291,19.3321234 C23.7272291,20.1319841 24.3756443,20.7803993 25.1755049,20.7803993 L25.8489242,20.7803993 C26.6487849,20.7803993 27.2972001,20.1319841 27.2972001,19.3321234 L27.2972001,10.9202916 L27.2972001,10.9202916",
          },
          rect2: {
            x: 25.5,
            y: 8.5,
            width: 4,
            height: 2,
            rx: 1,
          },
          rect3: {
            x: 26.5656,
            y: 6.5,
            width: 1.95082,
            height: 2,
            rx: 0.97541,
          },
        },
        markup: [
          {
            tagName: "rect",
            selector: "wrapper",
          },
          {
            tagName: "g",
            selector: "g1",
            children: [
              {
                tagName: "path",
                selector: "path1",
              },
              {
                tagName: "line",
                selector: "line1",
              },
              {
                tagName: "rect",
                selector: "rect1",
              },
              {
                tagName: "path",
                selector: "path2",
              },
              {
                tagName: "path",
                selector: "path3",
              },
              {
                tagName: "rect",
                selector: "rect2",
              },
              {
                tagName: "rect",
                selector: "rect3",
              },
            ],
          },
        ],
      },
      true
    );
    Graph.registerNode(
      "inverter",
      {
        width: 40,
        height: 40,
        attrs: {
          g1: {
            stroke: "#000",
            fill: "#0000",
            refWidth: 1,
            refHeight: 1,
            transform: "translate(6, 7.000000)",
          },
          wrapper: {
            ...wrapper,
          },
          line1: {
            x1: 3.87462687,
            y1: 9.64900814,
            x2: 3.87462687,
            y2: 16.9823415,
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          line2: {
            x1: 24.4099502,
            y1: 9.08447044,
            x2: 27.0766169,
            y2: 9.08447044,
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },

          line3: {
            x1: 24.4099502,
            y1: 12.1773879,
            x2: 27.0766169,
            y2: 12.1773879,
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },

          line4: {
            x1: 24.4099502,
            y1: 15.2703054,
            x2: 27.0766169,
            y2: 15.2703054,
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          line5: {
            x1: 24.4099502,
            y1: 18.3632229,
            x2: 27.0766169,
            y2: 18.3632229,
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          line6: {
            x1: 6.54129353,
            y1: 9.64900814,
            x2: 6.54129353,
            y2: 16.9823415,
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          line7: {
            x1: 9.2079602,
            y1: 9.64900814,
            x2: 9.2079602,
            y2: 16.9823415,
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          path1: {
            d: "M5.85015182,24 L8.81651485,24 C9.05831115,24 9.25432579,24.1960146 9.25432579,24.4378109 C9.25432579,24.4619259 9.25233338,24.4859997 9.2483689,24.5097866 L9.01083398,25.9349961 C8.94046492,26.3572105 8.57516414,26.6666667 8.14712588,26.6666667 L6.51954079,26.6666667 C6.09150253,26.6666667 5.72620175,26.3572105 5.65583269,25.9349961 L5.41829777,24.5097866 C5.3785467,24.2712802 5.53966974,24.045708 5.77817614,24.0059569 C5.80196304,24.0019924 5.82603681,24 5.85015182,24 Z",
          },
          path2: {
            d: "M19.1834852,24 L22.1498482,24 C22.3916445,24 22.5876591,24.1960146 22.5876591,24.4378109 C22.5876591,24.4619259 22.5856667,24.4859997 22.5817022,24.5097866 L22.3441673,25.9349961 C22.2737983,26.3572105 21.9084975,26.6666667 21.4804592,26.6666667 L19.8528741,26.6666667 C19.4248359,26.6666667 19.0595351,26.3572105 18.989166,25.9349961 L18.7516311,24.5097866 C18.71188,24.2712802 18.8730031,24.045708 19.1115095,24.0059569 C19.1352964,24.0019924 19.1593701,24 19.1834852,24 Z",
          },
          path3: {
            fill: "inherit",
            d: "M0.875621875,3.8602989 L27.1243781,3.8602989 C27.6079707,3.8602989 28,4.25232816 28,4.73592077 L28,22.984677 C28,23.4682696 27.6079707,23.8602989 27.1243781,23.8602989 L0.875621875,23.8602989 C0.392029267,23.8602989 6.14334526e-16,23.4682696 0,22.984677 L0,4.73592077 C1.62821591e-16,4.25232816 0.392029267,3.8602989 0.875621875,3.8602989 Z",
          },
          path4: {
            d: "M 0 0 L 28 0 L 25.8539 2.92657 C 25.359 3.60134 24.5723 4 23.7355 4 L 4.26447 4 C 3.4277 4 2.64099 3.60134 2.14615 2.92657 L 0 0 L 0 0 Z",
            strokeLinejoin: "round",
            fill: "inherit",
            transform: "translate(14, 2) scale(1, -1) translate(-14, -2)",
          },
          g2: {
            transform: "translate(14.066667, 11.592593)",
          },
          path5: {
            strokeWidth: 0,
            fill: "#FF1B1B",
            stroke: "#FF1B1B",
            d: "M1.94885789,2.58663464 L1.10461268,3.40308959 L1.10461268,0.503432694 C1.10461268,0.225921281 0.861767715,2.15347709e-05 0.563113175,2.15347709e-05 L0.541422318,2.15347709e-05 C0.242844969,2.15347709e-05 0,0.225921281 0,0.503432694 L0,4.67464602 C0,4.85604057 0.103977169,5.01475183 0.258978026,5.10347509 C0.264072676,5.10641818 0.269244517,5.10914591 0.274184784,5.11201722 C0.278970667,5.11460139 0.283679358,5.11711378 0.288465241,5.11955439 C0.374147986,5.16420314 0.471332289,5.18738891 0.572607749,5.18502009 C0.593758265,5.18451761 0.614677205,5.18293839 0.635441762,5.18028244 C0.759025613,5.16449027 0.872265781,5.11086869 0.958720443,5.02623705 L2.74933543,3.29448256 C2.85061089,3.19542261 2.90433629,3.06513725 2.90063109,2.92760185 C2.89684869,2.78999466 2.83617605,2.66250882 2.72957436,2.56833009 C2.62312706,2.47422314 2.482947,2.42426247 2.33512497,2.42777982 C2.18714855,2.43136894 2.05005616,2.48764648 1.94885789,2.58663464 Z",
          },
          path6: {
            strokeWidth: 0,
            fill: "#FF1B1B",
            stroke: "#FF1B1B",
            d: "M5.3034763,0 C5.00505333,0 4.76205398,0.225827963 4.76205398,0.503482942 L4.76205398,3.40313983 L3.91780877,2.58654132 C3.81661051,2.48769673 3.67951811,2.43141919 3.5315417,2.42775828 C3.38371966,2.42424093 3.24353961,2.4742016 3.1370923,2.56838033 C3.03049062,2.6624155 2.96981797,2.79004491 2.96611277,2.92765209 C2.96233038,3.06511571 3.01605578,3.19547286 3.11733124,3.29453281 L4.90794622,5.02614373 C4.99455527,5.11091894 5.10764105,5.16446874 5.2312249,5.1802609 C5.25198946,5.18298864 5.2729084,5.18456786 5.29405892,5.18499855 C5.39533438,5.18743916 5.49267306,5.16418161 5.57820143,5.11946107 C5.58298731,5.11716403 5.58754162,5.11465164 5.59217312,5.11206746 C5.59742215,5.10919616 5.60267118,5.10646842 5.60768864,5.10338177 C5.76284388,5.0147303 5.86666667,4.85601904 5.86666667,4.67462449 L5.86666667,0.503482942 C5.86666667,0.225827963 5.6238217,0 5.32524435,0 L5.3034763,0 Z",
          },
        },
        markup: [
          {
            tagName: "rect",
            selector: "wrapper",
          },
          {
            tagName: "g",
            selector: "g1",
            children: [
              {
                tagName: "path",
                selector: "path3",
              },
              {
                tagName: "path",
                selector: "path4",
              },
              {
                tagName: "line",
                selector: "line1",
              },
              {
                tagName: "line",
                selector: "line2",
              },
              {
                tagName: "line",
                selector: "line3",
              },
              {
                tagName: "line",
                selector: "line4",
              },
              {
                tagName: "line",
                selector: "line5",
              },
              {
                tagName: "line",
                selector: "line6",
              },
              {
                tagName: "line",
                selector: "line7",
              },
              {
                tagName: "path",
                selector: "path1",
              },
              {
                tagName: "path",
                selector: "path2",
              },
              {
                tagName: "g",
                selector: "g2",
                children: [
                  {
                    tagName: "path",
                    selector: "path5",
                  },
                  {
                    tagName: "path",
                    selector: "path6",
                  },
                ],
              },
            ],
          },
        ],
      },
      true
    );
    Graph.registerNode(
      "inverter-other",
      {
        width: 40,
        height: 40,
        attrs: {
          g1: {
            stroke: "#000",
            fill: "#0000",
            refWidth: 1,
            refHeight: 1,
            transform: "translate(6, 7.000000)",
          },
          wrapper: {
            ...wrapper,
          },
          line1: {
            x1: 3.87462687,
            y1: 9.64900814,
            x2: 3.87462687,
            y2: 16.9823415,
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          line2: {
            x1: 24.4099502,
            y1: 9.08447044,
            x2: 27.0766169,
            y2: 9.08447044,
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },

          line3: {
            x1: 24.4099502,
            y1: 12.1773879,
            x2: 27.0766169,
            y2: 12.1773879,
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },

          line4: {
            x1: 24.4099502,
            y1: 15.2703054,
            x2: 27.0766169,
            y2: 15.2703054,
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          line5: {
            x1: 24.4099502,
            y1: 18.3632229,
            x2: 27.0766169,
            y2: 18.3632229,
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          line6: {
            x1: 6.54129353,
            y1: 9.64900814,
            x2: 6.54129353,
            y2: 16.9823415,
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          line7: {
            x1: 9.2079602,
            y1: 9.64900814,
            x2: 9.2079602,
            y2: 16.9823415,
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          path1: {
            d: "M5.85015182,24 L8.81651485,24 C9.05831115,24 9.25432579,24.1960146 9.25432579,24.4378109 C9.25432579,24.4619259 9.25233338,24.4859997 9.2483689,24.5097866 L9.01083398,25.9349961 C8.94046492,26.3572105 8.57516414,26.6666667 8.14712588,26.6666667 L6.51954079,26.6666667 C6.09150253,26.6666667 5.72620175,26.3572105 5.65583269,25.9349961 L5.41829777,24.5097866 C5.3785467,24.2712802 5.53966974,24.045708 5.77817614,24.0059569 C5.80196304,24.0019924 5.82603681,24 5.85015182,24 Z",
          },
          path2: {
            d: "M19.1834852,24 L22.1498482,24 C22.3916445,24 22.5876591,24.1960146 22.5876591,24.4378109 C22.5876591,24.4619259 22.5856667,24.4859997 22.5817022,24.5097866 L22.3441673,25.9349961 C22.2737983,26.3572105 21.9084975,26.6666667 21.4804592,26.6666667 L19.8528741,26.6666667 C19.4248359,26.6666667 19.0595351,26.3572105 18.989166,25.9349961 L18.7516311,24.5097866 C18.71188,24.2712802 18.8730031,24.045708 19.1115095,24.0059569 C19.1352964,24.0019924 19.1593701,24 19.1834852,24 Z",
          },
          path3: {
            fill: "inherit",
            d: "M0.875621875,3.8602989 L27.1243781,3.8602989 C27.6079707,3.8602989 28,4.25232816 28,4.73592077 L28,22.984677 C28,23.4682696 27.6079707,23.8602989 27.1243781,23.8602989 L0.875621875,23.8602989 C0.392029267,23.8602989 6.14334526e-16,23.4682696 0,22.984677 L0,4.73592077 C1.62821591e-16,4.25232816 0.392029267,3.8602989 0.875621875,3.8602989 Z",
          },
          path4: {
            d: "M 0 0 L 28 0 L 25.8539 2.92657 C 25.359 3.60134 24.5723 4 23.7355 4 L 4.26447 4 C 3.4277 4 2.64099 3.60134 2.14615 2.92657 L 0 0 L 0 0 Z",
            strokeLinejoin: "round",
            fill: "inherit",
            transform: "translate(14, 2) scale(1, -1) translate(-14, -2)",
          },
          g2: {
            transform: "translate(14.066667, 10.592593)",
          },
        },
        markup: [
          {
            tagName: "rect",
            selector: "wrapper",
          },
          {
            tagName: "g",
            selector: "g1",
            children: [
              {
                tagName: "path",
                selector: "path3",
              },
              {
                tagName: "path",
                selector: "path4",
              },

              {
                tagName: "line",
                selector: "line1",
              },
              {
                tagName: "line",
                selector: "line2",
              },
              {
                tagName: "line",
                selector: "line3",
              },
              {
                tagName: "line",
                selector: "line4",
              },
              {
                tagName: "line",
                selector: "line5",
              },
              {
                tagName: "line",
                selector: "line6",
              },
              {
                tagName: "line",
                selector: "line7",
              },
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
      true
    );
    Graph.registerNode(
      "photovoltaic",
      {
        width: 40,
        height: 40,
        attrs: {
          g1: {
            stroke: "#000",
            fill: "#0000",
            refWidth: 1,
            refHeight: 1,
            transform: "translate(6.000000, 5.000000)",
          },
          wrapper: {
            ...wrapper,
          },
          path1: {
            fill: "inherit",
            d: "M3.12386393,24.3253706 L3.97855397,27.3429683 C4.08865259,27.7316862 4.44351705,28 4.84752616,28 L25.7676051,28 C26.266404,28 26.6707604,27.5956436 26.6707604,27.0968447 C26.6707604,27.0194016 26.6607997,26.9422801 26.6411236,26.8673783 L23.0140656,13.0601201 C22.9097887,12.6631652 22.5509699,12.3864313 22.1405471,12.3864313 L1.19445307,12.3864313 C0.69565418,12.3864313 0.291297783,12.7907877 0.291297783,13.2895866 C0.291297783,13.3728022 0.302798612,13.4556186 0.325473861,13.5356853 L2.05232394,19.6332241 L2.05232394,19.6332241 L0,28",
          },
          line1: {
            x1: 24.4080121,
            y1: 19.827415,
            x2: 4.49049554,
            y2: 19.827415,
          },
          line2: {
            x1: 16.2599371,
            y1: 15.2981516,
            x2: 18.9759621,
            y2: 25.262531,
          },
          line3: {
            x1: 8.11186218,
            y1: 15.2981516,
            x2: 10.8278872,
            y2: 25.262531,
          },
          path2: {
            fill: "#0000",
            d: "M21.7650911,10.7121556 C20.7978989,7.84838848 18.0905427,5.78669853 14.9019246,5.78669853 C11.7824404,5.78669853 9.12357533,7.7599569 8.10410979,10.5270279 C8.06248613,10.6400044 8.02359535,10.7543042 7.98751767,10.869847",
          },
          line4: {
            x1: 24.8878736,
            y1: 12.9040593,
            x2: 28,
            y2: 12.9040593,
          },
          line5: {
            x1: 23.5579306,
            y1: 8.03188801,
            x2: 26.2531111,
            y2: 6.47494653,
          },
          line6: {
            x1: 19.9227083,
            y1: 4.4043119,
            x2: 21.4787715,
            y2: 1.70761015,
          },
          line7: {
            x1: 14.9892156,
            y1: 3.11388297,
            x2: 14.9892156,
            y2: 0,
          },
          line8: {
            x1: 10.0582973,
            y1: 4.33676589,
            x2: 8.50223416,
            y2: 1.64006413,
          },
          line9: {
            x1: 6.50899268,
            y1: 7.93464482,
            x2: 3.81381219,
            y2: 6.37770334,
          },
        },
        markup: [
          {
            tagName: "rect",
            selector: "wrapper",
          },
          {
            tagName: "g",
            selector: "g1",
            children: [
              {
                tagName: "path",
                selector: "path1",
              },
              {
                tagName: "line",
                selector: "line1",
              },
              {
                tagName: "line",
                selector: "line2",
              },
              {
                tagName: "line",
                selector: "line3",
              },
              {
                tagName: "path",
                selector: "path2",
              },
              {
                tagName: "line",
                selector: "line4",
              },
              {
                tagName: "line",
                selector: "line5",
              },
              {
                tagName: "line",
                selector: "line6",
              },
              {
                tagName: "line",
                selector: "line7",
              },
              {
                tagName: "line",
                selector: "line8",
              },
              {
                tagName: "line",
                selector: "line9",
              },
            ],
          },
        ],
      },
      true
    );
    Graph.registerNode(
      "vehicle",
      {
        width: 40,
        height: 40,
        attrs: {
          g1: {
            stroke: "#000",
            fill: "#000",
            refWidth: 1,
            refHeight: 1,
            transform: "translate(6, 6.000000)",
          },
          wrapper: {
            ...wrapper,
          },
          g2: {
            transform: "translate(9.500000, 9.000000)",
          },
          path1: {
            fill: "#0000",
            stroke: "#525F7C",
            strokeWidth: 2,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M7.40109373,17.2460666 C2.83530542,18.4998091 0,20.2513929 0,22.1895487 C0,26.0017231 10.9690236,29.092101 24.5,29.092101 C38.0309764,29.092101 49,26.0017231 49,22.1895487 C49,20.1707094 45.9237191,18.354299 41.0197814,17.092101",
          },
          path11: {
            fill: "#0000",
            strokeWidth: 2.5,
            stroke: "#24F7AD",
            strokeDasharray: 74,
            strokeDashoffset: 74,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M7.40109373,17.2460666 C2.83530542,18.4998091 0,20.2513929 0,22.1895487 C0,26.0017231 10.9690236,29.092101 24.5,29.092101 C38.0309764,29.092101 49,26.0017231 49,22.1895487 C49,20.1707094 45.9237191,18.354299 41.0197814,17.092101",
          },
          line1: {
            x1: 11.212301,
            y1: 8.02498895,
            x2: 17.2568512,
            y2: 8.02498895,
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          line2: {
            x1: 27.4568154,
            y1: 6.99203554,
            x2: 28.4072903,
            y2: 6.99203554,
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          ellipse1: {
            fill: "#0000",
            cx: 23.3014015,
            cy: 10.227624,
            rx: 2.14449073,
            ry: 2.06974091,
          },
          line3: {
            x1: 21.7902639,
            y1: 14.6328942,
            x2: 27.8348142,
            y2: 14.6328942,
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          line4: {
            x1: 5.92331953,
            y1: 14.6328942,
            x2: 19.5235576,
            y2: 14.6328942,
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          ellipse2: {
            fill: "#0000",
            cx: 5.92331953,
            cy: 10.227624,
            rx: 2.14449073,
            ry: 2.06974091,
          },
          path2: {
            fill: "#0000",
            d: "M8.21252119,10.325706 C8.49974173,10.343531 8.76060699,10.3524436 8.99511694,10.3524436 C9.92930229,10.3524436 13.9591186,10.3137755 21.0845657,10.2364393 M25.3492159,10.1896341 L25.6303295,10.1896341 L28.8903981,10.1896341 C29.4735909,8.85978607 29.2599612,7.4837885 28.2495091,6.06164135 C27.0737469,4.79508002 24.5335324,4.08400645 20.6288657,3.92842062 C18.0549312,1.3329752 16.2199431,0.0352524821 15.1239013,0.0352524821 C12.832429,-0.0440656026 11.7466981,0.0352524821 9.65468179,0.0352524821 C6.58099864,0.201364422 6.1393272,1.81431678 4.46189649,2.49991682 C2.78446577,3.18551686 1.17123601,3.07374774 0.71462559,3.37616923 C0.125906597,3.78463909 -0.238553234,5.53720443 0.181081547,8.00297821 C0.486085372,8.77300274 1.73041027,9.3576629 3.91405624,9.75695869",
          },
          line5: {
            x1: 12.7234386,
            y1: 0.142713807,
            x2: 12.7234386,
            y2: 3.61971881,
            strokeLinecap: "square",
          },
          path3: {
            fill: "#0000",
            d: "M5.44437157,1.85959074 C6.02882288,3.32742775 7.28524164,4.06134625 9.21362786,4.06134625 C11.1420141,4.06134625 14.9470933,4.01703771 20.6288657,3.92842062",
          },
          line6: {
            x1: 0.562427817,
            y1: 4.74318911,
            x2: 1.3519015,
            y2: 4.74318911,
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          line7: {
            x1: 1.92816922,
            y1: 14.6052632,
            x2: 4.46241249,
            y2: 14.6052632,
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          text: {
            strokeWidth: 1,
            text: "0",
            x: 25,
            y: 10 + 28,
            fontSize: 10,
            stroke: "rgb(8, 175, 60)",
            fill: "rgba(0,0,0,0.6)",
            "text-anchor": "middle",
          },
        },
        markup: [
          {
            tagName: "rect",
            selector: "wrapper",
          },
          {
            tagName: "g",
            selector: "g1",
            children: [
              {
                tagName: "path",
                selector: "path1",
              },
              {
                tagName: "path",
                selector: "path11",
              },
              {
                tagName: "text",
                selector: "text",
              },
              {
                tagName: "g",
                selector: "g2",
                children: [
                  {
                    tagName: "line",
                    selector: "line1",
                  },
                  {
                    tagName: "line",
                    selector: "line2",
                  },
                  {
                    tagName: "ellipse",
                    selector: "ellipse1",
                  },
                  {
                    tagName: "line",
                    selector: "line3",
                  },
                  {
                    tagName: "line",
                    selector: "line4",
                  },
                  {
                    tagName: "ellipse",
                    selector: "ellipse2",
                  },
                  {
                    tagName: "path",
                    selector: "path2",
                  },
                  {
                    tagName: "line",
                    selector: "line5",
                  },
                  {
                    tagName: "path",
                    selector: "path3",
                  },
                  {
                    tagName: "line",
                    selector: "line6",
                  },
                  {
                    tagName: "line",
                    selector: "line7",
                  },
                ],
              },
            ],
          },
        ],
      },
      true
    );
    Graph.registerNode(
      "mppt",
      {
        width: 30,
        height: 23,
        attrs: {
          g1: {
            stroke: "#000",
            fill: "#000",
            refWidth: 1,
            refHeight: 1,
          },
          wrapper: {
            ...wrapper,
            width: 30,
            height: 23,
          },
          polygon: {
            strokeLinejoin: "round",
            stroke: "inherit",
            fill: "#0000",
            strokeWidth: 1,
            points:
              "1.07142857 3.14285714 28.9285714 3.14285714 25.6231165 0 4.37688348 0",
          },
          g2: {
            transform: "translate(0.000000, 2.095238)",
          },
          rect1: {
            stroke: "inherit",
            fill: "#0000",
            x: 0.5,
            y: 0.5,
            width: 29,
            height: 18.9047619,
            rx: 2.16216216,
          },
          line1: {
            strokeLinejoin: "round",
            strokeLinecap: "round",
            stroke: "inherit",
            x1: 22.5,
            y1: 2.03571429,
            x2: 22.5,
            y2: 7.39285714,
            transform:
              "translate(22.500000, 4.714286) rotate(90.000000) translate(-22.500000, -4.714286) ",
          },
          line2: {
            strokeLinejoin: "round",
            strokeLinecap: "round",
            stroke: "inherit",
            x1: 22.5,
            y1: 6.22619048,
            x2: 22.5,
            y2: 11.5833333,
            transform:
              "translate(22.500000, 8.904762) rotate(90.000000) translate(-22.500000, -8.904762) ",
          },
          rect2: {
            stroke: "inherit",
            fill: "#0000",
            x: 5.85714286,
            y: 4.69047619,
            width: 8.64285714,
            height: 4.23809524,
            rx: 1.08108108,
          },
          ellipse1: {
            fill: "#0000",
            cx: 7.5,
            cy: 14.6667,
            rx: 1.64286,
            ry: 1.59524,
          },
          ellipse2: {
            fill: "#0000",
            cx: 13.9286,
            cy: 14.6667,
            rx: 1.64286,
            ry: 1.59524,
          },
        },
        markup: [
          {
            tagName: "g",
            selector: "g1",
            children: [
              {
                tagName: "rect",
                selector: "wrapper",
              },
              {
                tagName: "polygon",
                selector: "polygon",
              },
              {
                tagName: "g",
                selector: "g2",
                children: [
                  {
                    tagName: "rect",
                    selector: "rect1",
                  },
                  {
                    tagName: "line",
                    selector: "line1",
                  },
                  {
                    tagName: "line",
                    selector: "line2",
                  },
                  {
                    tagName: "rect",
                    selector: "rect2",
                  },
                  {
                    tagName: "ellipse",
                    selector: "ellipse1",
                  },
                  {
                    tagName: "ellipse",
                    selector: "ellipse2",
                  },
                ],
              },
            ],
          },
        ],
      },
      true
    );
    Graph.registerNode(
      "battery",
      {
        width: 40,
        height: 40,
        attrs: {
          g1: {
            stroke: "#000",
            fill: "#0000",
            refWidth: 1,
            refHeight: 1,
            transform: "translate(6, 6.000000)",
          },
          wrapper: {
            ...wrapper,
          },
          rect1: {
            x: 0.5,
            y: 0.5,
            width: 15,
            height: 8,
            rx: 2,
            fill: "inherit",
          },
          path1: {
            transform:
              "translate(16.500000, 4.500000) scale(-1, 1) translate(-16.500000, -4.500000) ",
            d: "M16.5045045,3 L17,3 L17,3 L17,6 L16.5045045,6 C16.2258744,6 16,5.77412564 16,5.4954955 L16,3.5045045 C16,3.22587436 16.2258744,3 16.5045045,3 Z",
          },
          rect2: {
            x: 0.5,
            y: 11.5,
            width: 25,
            height: 15,
            rx: 2,
            fill: "#0000",
          },
          rect3: {
            x: 0.5,
            y: 11.5,
            width: 25,
            height: 15,
            rx: 2,
            fill: "#0000",
          },
          path2: {
            transform:
              "translate(27.000000, 19.000000) scale(-1, 1) translate(-27.000000, -19.000000) ",
            d: "M27.009009,15 L28,15 L28,15 L28,23 L27.009009,23 C26.4517487,23 26,22.5482513 26,21.990991 L26,16.009009 C26,15.4517487 26.4517487,15 27.009009,15 Z",
          },
          text: {
            strokeWidth: 1,
            text: "0",
            x: 12.5,
            y: 22,
            fontSize: 10,
            stroke: "rgb(8, 175, 60)",
            fill: "rgba(0,0,0,0.6)",
            "text-anchor": "middle",
          },
        },
        markup: [
          {
            tagName: "rect",
            selector: "wrapper",
          },
          {
            tagName: "g",
            selector: "g1",
            children: [
              {
                tagName: "rect",
                selector: "rect1",
              },
              {
                tagName: "path",
                selector: "path1",
              },
              {
                tagName: "g",
                selector: "g2",
                children: [
                  { tagName: "rect", selector: "rect2" },
                  {
                    tagName: "text",
                    selector: "text",
                  },
                ],
              },
              {
                tagName: "rect",
                selector: "rect3",
              },
              {
                tagName: "path",
                selector: "path2",
              },
            ],
          },
        ],
      },
      true
    );
    Graph.registerNode(
      "air-conditioner",
      {
        width: 40,
        height: 40,
        attrs: {
          g1: {
            stroke: "#000",
            fill: "#000",
            refWidth: 1,
            refHeight: 1,
            transform: "translate(5, 10.000000)",
          },
          wrapper: {
            ...wrapper,
          },
          line1: {
            x1: 4.70671054,
            y1: 16.6,
            x2: 3.5,
            y2: 21.4,
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          line2: {
            x1: 15.7067105,
            y1: 16.6,
            x2: 14.5,
            y2: 21.4,
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          line3: {
            x1: 25.7067105,
            y1: 16.6,
            x2: 24.5,
            y2: 21.4,
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          line4: {
            x1: 20.7067105,
            y1: 16.6,
            x2: 19.8301085,
            y2: 20.0869089,
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          line5: {
            x1: 9.70671054,
            y1: 16.6,
            x2: 8.83010851,
            y2: 20.0869089,
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          line6: {
            x1: 3.5,
            y1: 4.5,
            x2: 6.5,
            y2: 4.5,
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          rect1: {
            x: 0.5,
            y: 0.5,
            width: 29,
            height: 14,
            rx: 2,
            fill: "#0000",
          },
          rect2: { x: 5.5, y: 9.5, width: 19, height: 5, rx: 1, fill: "#0000" },
          circle1: {
            cx: 25,
            cy: 5,
            r: 1.5,
            fill: "#0000",
          },
        },
        markup: [
          {
            tagName: "rect",
            selector: "wrapper",
          },
          {
            tagName: "g",
            selector: "g1",
            children: [
              {
                tagName: "line",
                selector: "line1",
              },
              {
                tagName: "line",
                selector: "line2",
              },
              {
                tagName: "line",
                selector: "line3",
              },
              {
                tagName: "line",
                selector: "line4",
              },
              {
                tagName: "line",
                selector: "line5",
              },
              {
                tagName: "line",
                selector: "line6",
              },
              {
                tagName: "rect",
                selector: "rect1",
              },
              {
                tagName: "rect",
                selector: "rect2",
              },
              {
                tagName: "circle",
                selector: "circle1",
              },
            ],
          },
        ],
      },
      true
    );
    Graph.registerNode(
      "string-inverter",
      {
        width: 22,
        height: 30,
        attrs: {
          g1: {
            stroke: "#000",
            fill: "#0000",
            refWidth: 1,
            refHeight: 1,
          },
          wrapper: {
            ...wrapper,
            width: 22,
            height: 30,
          },
          rect1: {
            fill: "#0000",
            x: 0.5,
            y: 0.5,
            width: 21,
            height: 29,
            rx: 1.84615,
          },
          polyline1: {
            fill: "inherit",
            points:
              "0.923076923 1.07142857 11.002611 13.9655172 21.1358549 1.07142857",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
        },
        markup: [
          {
            tagName: "g",
            selector: "g1",
            children: [
              {
                tagName: "rect",
                selector: "wrapper",
              },
              {
                tagName: "rect",
                selector: "rect1",
              },
              {
                tagName: "polyline",
                selector: "polyline1",
              },
            ],
          },
        ],
      },
      true
    );
    Graph.registerNode(
      "parking",
      {
        width: 40,
        height: 40,
        attrs: {
          g1: {
            stroke: "#000",
            fill: "#000",
            refWidth: 1,
            refHeight: 1,
            transform: "translate(6, 6.000000)",
          },
          wrapper: {
            ...wrapper,
          },
          path1: {
            fill: "#0000",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeDasharray: "3, 3",
            d: "M2,0 L26,0 C27.1045695,1.53715886e-15 28,0.8954305 28,2 L28,26 C28,27.1045695 27.1045695,28 26,28 L2,28 C0.8954305,28 1.87533573e-15,27.1045695 0,26 L0,2 C-3.57315355e-16,0.8954305 0.8954305,-1.91384796e-17 2,0 Z",
          },
          text1: {
            text: "p",
            fontFamily: 'PingFangSC-Semibold, "PingFang SC"',
            fontSize: 14,
            fontWeight: 500,
            x: 10,
            y: 16,
            "text-anchor": "start",
          },
        },
        markup: [
          {
            tagName: "rect",
            selector: "wrapper",
          },
          {
            tagName: "g",
            selector: "g1",
            children: [
              {
                tagName: "path",
                selector: "path1",
              },
              {
                tagName: "text",
                selector: "text1",
              },
            ],
          },
        ],
      },
      true
    );
    Graph.registerNode(
      "transformer",
      {
        width: 40,
        height: 40,
        attrs: {
          g1: {
            stroke: "#000",
            fill: "#000",
            refWidth: 1,
            refHeight: 1,
            transform: "matrix(0.5, 0, 0, 0.5, 10, 0)",
          },
          wrapper: {
            ...wrapper,
          },
          path1: {
            d: "M20,0 C31.045695,0 40,9.11711055 40,20.3636364 C40,31.6101622 31.045695,40.7272727 20,40.7272727 C8.954305,40.7272727 0,31.6101622 0,20.3636364 C0,9.11711055 8.954305,0 20,0 Z M20,1.45454545 C9.74328322,1.45454545 1.42857143,9.92043382 1.42857143,20.3636364 C1.42857143,30.8068389 9.74328322,39.2727273 20,39.2727273 C30.2567168,39.2727273 38.5714286,30.8068389 38.5714286,20.3636364 C38.5714286,9.92043382 30.2567168,1.45454545 20,1.45454545 Z",
          },
          g2: {
            transform: "translate(0.000000, 39.272727)",
          },
          g3: {},
          g4: { transform: "translate(10.000000, 10.181818)" },
          g5: { transform: "translate(10.000000, 10.181818)" },
          path3: {
            d: "M9.58955532,1.71941148 C9.44506973,1.79965472 9.3263284,1.92055498 9.24751808,2.06766758 L0.916738395,17.6184563 C0.690056055,18.0415967 0.843191342,18.5717232 1.25877563,18.802527 C1.38468015,18.8724509 1.52580404,18.9090909 1.66922032,18.9090909 L18.3307797,18.9090909 C18.8041666,18.9090909 19.1879225,18.5183576 19.1879225,18.0363636 C19.1879225,17.8903398 19.1519368,17.74665 19.0832616,17.6184563 L10.7524819,2.06766758 C10.5484678,1.68684125 10.1063318,1.52246376 9.71698382,1.66165253 L9.58955532,1.71941148 Z M10,3.70036364 L17.3685714,17.4545455 L2.63,17.4545455 L10,3.70036364 Z",
          },
          path2: {
            d: "M20,0 C31.045695,0 40,9.11711055 40,20.3636364 C40,31.6101622 31.045695,40.7272727 20,40.7272727 C8.954305,40.7272727 0,31.6101622 0,20.3636364 C0,9.11711055 8.954305,0 20,0 Z M20,1.45454545 C9.74328322,1.45454545 1.42857143,9.92043382 1.42857143,20.3636364 C1.42857143,30.8068389 9.74328322,39.2727273 20,39.2727273 C30.2567168,39.2727273 38.5714286,30.8068389 38.5714286,20.3636364 C38.5714286,9.92043382 30.2567168,1.45454545 20,1.45454545 Z",
          },
          path4: {
            d: "M14.5547057,0.879581077 C14.8336516,0.605616331 15.2818742,0.609654373 15.555839,0.888600296 C15.8362449,1.17410449 15.8362449,1.63161506 15.555839,1.91711925 L15.555839,1.91711925 L10.7138566,6.84572028 L10.7142857,19.6493506 C10.7142857,20.0438398 10.3944891,20.3636364 10,20.3636364 C9.60551089,20.3636364 9.28571429,20.0438398 9.28571429,19.6493506 L9.28485658,6.84472028 L4.444161,1.91711925 C4.19179569,1.66016548 4.16655916,1.26388654 4.36845141,0.979067733 L4.444161,0.888600296 L4.444161,0.888600296 L4.45318022,0.879581077 C4.73212615,0.605616331 5.1803488,0.609654373 5.45431355,0.888600296 L5.45431355,0.888600296 L9.99985658,5.51672028 L14.5456865,0.888600296 C14.5471761,0.887083581 14.5486725,0.885573592 14.5501757,0.884070373 Z",
          },
        },
        markup: [
          {
            tagName: "rect",
            selector: "wrapper",
          },
          {
            tagName: "g",
            selector: "g1",
            children: [
              {
                tagName: "g",
                selector: "g2",
                children: [
                  {
                    tagName: "path",
                    selector: "path1",
                  },
                  {
                    tagName: "g",
                    selector: "g4",
                    children: [
                      {
                        tagName: "path",
                        selector: "path3",
                      },
                    ],
                  },
                ],
              },
              {
                tagName: "g",
                selector: "g3",
                children: [
                  {
                    tagName: "path",
                    selector: "path2",
                  },
                  {
                    tagName: "g",
                    selector: "g5",
                    children: [
                      {
                        tagName: "path",
                        selector: "path4",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      true
    );
    Graph.registerNode(
      "retransformer",
      {
        width: 40,
        height: 40,
        attrs: {
          g1: {
            stroke: "#000",
            fill: "#000",
            refWidth: 1,
            refHeight: 1,
            transform: "matrix(0.5, 0, 0, 0.5, 10, 0)",
          },
          wrapper: {
            ...wrapper,
          },
          path1: {
            d: "M20,0 C31.045695,0 40,9.11711055 40,20.3636364 C40,31.6101622 31.045695,40.7272727 20,40.7272727 C8.954305,40.7272727 0,31.6101622 0,20.3636364 C0,9.11711055 8.954305,0 20,0 Z M20,1.45454545 C9.74328322,1.45454545 1.42857143,9.92043382 1.42857143,20.3636364 C1.42857143,30.8068389 9.74328322,39.2727273 20,39.2727273 C30.2567168,39.2727273 38.5714286,30.8068389 38.5714286,20.3636364 C38.5714286,9.92043382 30.2567168,1.45454545 20,1.45454545 Z",
          },
          g2: {},
          g3: { transform: "translate(0.000000, 39.272727)" },
          g4: { transform: "translate(10.000000, 10.181818)" },
          g5: { transform: "translate(10.000000, 10.181818)" },
          path3: {
            d: "M9.58955532,1.71941148 C9.44506973,1.79965472 9.3263284,1.92055498 9.24751808,2.06766758 L0.916738395,17.6184563 C0.690056055,18.0415967 0.843191342,18.5717232 1.25877563,18.802527 C1.38468015,18.8724509 1.52580404,18.9090909 1.66922032,18.9090909 L18.3307797,18.9090909 C18.8041666,18.9090909 19.1879225,18.5183576 19.1879225,18.0363636 C19.1879225,17.8903398 19.1519368,17.74665 19.0832616,17.6184563 L10.7524819,2.06766758 C10.5484678,1.68684125 10.1063318,1.52246376 9.71698382,1.66165253 L9.58955532,1.71941148 Z M10,3.70036364 L17.3685714,17.4545455 L2.63,17.4545455 L10,3.70036364 Z",
          },
          path2: {
            d: "M20,0 C31.045695,0 40,9.11711055 40,20.3636364 C40,31.6101622 31.045695,40.7272727 20,40.7272727 C8.954305,40.7272727 0,31.6101622 0,20.3636364 C0,9.11711055 8.954305,0 20,0 Z M20,1.45454545 C9.74328322,1.45454545 1.42857143,9.92043382 1.42857143,20.3636364 C1.42857143,30.8068389 9.74328322,39.2727273 20,39.2727273 C30.2567168,39.2727273 38.5714286,30.8068389 38.5714286,20.3636364 C38.5714286,9.92043382 30.2567168,1.45454545 20,1.45454545 Z",
          },
          path4: {
            d: "M14.5547057,0.879581077 C14.8336516,0.605616331 15.2818742,0.609654373 15.555839,0.888600296 C15.8362449,1.17410449 15.8362449,1.63161506 15.555839,1.91711925 L15.555839,1.91711925 L10.7138566,6.84572028 L10.7142857,19.6493506 C10.7142857,20.0438398 10.3944891,20.3636364 10,20.3636364 C9.60551089,20.3636364 9.28571429,20.0438398 9.28571429,19.6493506 L9.28485658,6.84472028 L4.444161,1.91711925 C4.19179569,1.66016548 4.16655916,1.26388654 4.36845141,0.979067733 L4.444161,0.888600296 L4.444161,0.888600296 L4.45318022,0.879581077 C4.73212615,0.605616331 5.1803488,0.609654373 5.45431355,0.888600296 L5.45431355,0.888600296 L9.99985658,5.51672028 L14.5456865,0.888600296 C14.5471761,0.887083581 14.5486725,0.885573592 14.5501757,0.884070373 Z",
          },
        },
        markup: [
          {
            tagName: "rect",
            selector: "wrapper",
          },
          {
            tagName: "g",
            selector: "g1",
            children: [
              {
                tagName: "g",
                selector: "g2",
                children: [
                  {
                    tagName: "path",
                    selector: "path1",
                  },
                  {
                    tagName: "g",
                    selector: "g4",
                    children: [
                      {
                        tagName: "path",
                        selector: "path3",
                      },
                    ],
                  },
                ],
              },
              {
                tagName: "g",
                selector: "g3",
                children: [
                  {
                    tagName: "path",
                    selector: "path2",
                  },
                  {
                    tagName: "g",
                    selector: "g5",
                    children: [
                      {
                        tagName: "path",
                        selector: "path4",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      true
    );
    Graph.registerNode(
      "wind",
      {
        width: 40,
        height: 40,
        attrs: {
          g1: {
            stroke: "#000",
            fill: "#0000",
            refWidth: 1,
            refHeight: 1,
            transform: "matrix(1, 0, 0, 1, 0, 0)",
          },
          wrapper: {
            ...wrapper,
          },
          circle1: {
            cx: 20.5,
            cy: 17.5,
            r: 2.5,
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          path1: {
            stroke: "inherit",
            fill: "#0000",
            d: "M 22.9957 17.6388 C 22.9188 10.0316 21.8309 4 20.5 4 C 19.1664 4 18.0768 10.056 18.0039 17.685",
          },
          line1: {
            x1: 10.0556426,
            y1: 35.044434,
            x2: 31.0127381,
            y2: 35.044434,
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          polygon1: {
            points: "19 21.3774061 22 21.3774061 23.4624046 35 17.5375954 35",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          path2: {
            stroke: "inherit",
            fill: "#0000",
            d: "M 28.7612 27.625 C 28.6844 20.0178 27.5964 13.9862 26.2656 13.9862 C 24.932 13.9862 23.8423 20.0423 23.7694 27.6713",
            transform:
              "translate(26.2653, 20.8287) rotate(120) translate(-26.2653, -20.8287)",
          },
          path3: {
            stroke: "inherit",
            fill: "#0000",
            d: "M 17.2301 27.625 C 17.1533 20.0178 16.0653 13.9862 14.7344 13.9862 C 13.4009 13.9862 12.3112 20.0423 12.2383 27.6713",
            transform:
              "translate(14.7342, 20.8287) rotate(240) translate(-14.7342, -20.8287)",
          },
        },
        markup: [
          {
            tagName: "rect",
            selector: "wrapper",
          },
          {
            tagName: "g",
            selector: "g1",
            children: [
              {
                tagName: "circle",
                selector: "circle1",
              },
              {
                tagName: "path",
                selector: "path1",
              },
              {
                tagName: "line",
                selector: "line1",
              },
              {
                tagName: "polygon",
                selector: "polygon1",
              },
              {
                tagName: "path",
                selector: "path2",
              },
              {
                tagName: "path",
                selector: "path3",
              },
            ],
          },
        ],
      },
      true
    );
    Graph.registerNode(
      "charge-gun",
      {
        width: 40,
        height: 40,
        attrs: {
          g1: {
            stroke: "#00f",
            fill: "#0000",
            refWidth: 1,
            refHeight: 1,
            transform: "matrix(1, 0, 0, 1, 5, 8)",
          },
          wrapper: {
            ...wrapper,
          },
          polygon1: {
            points:
              "5.20046212 15.0811226 7.210517 15.1688406 7.31737959 17.0247116 5.26975796 17.2866923",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          path1: {
            stroke: "inherit",
            fill: "inherit",
            strokeLinecap: "round",
            d: "M 21.4596 5.59603 L 27.9932 5.59603 C 29.0977 5.59603 29.9932 6.49146 29.9932 7.59603 L 29.9932 22.596 C 29.9932 23.7006 29.0977 24.596 27.9932 24.596 L 14.9932 24.596 C 13.8886 24.596 12.9932 23.7006 12.9932 22.596 L 12.9932 9.78382 L 12.9932 9.24649",
          },
          path2: {
            stroke: "inherit",
            fill: "inherit",
            d: "M 17.8694 0.0960266 L 17.8694 9.09603 L 12.9661 9.09603 C 12.0033 9.68257 11.3349 10.3381 10.9428 11.0469 C 10.6941 11.4965 10.3426 12.4989 9.90074 14.0601 C 9.78779 14.4586 9.524 14.7736 9.18881 14.9608 C 8.8607 15.1441 8.46416 15.2048 8.07372 15.1013 L 8.07372 15.1013 L 5.36958 13.9953 C 4.99487 13.84 4.71584 13.5499 4.56655 13.2037 C 4.41726 12.8576 4.3977 12.4555 4.54191 12.0764 L 4.54191 12.0764 L 8.24106 2.35166 C 8.49934 1.67266 8.95394 1.10875 9.52559 0.714595 C 10.0972 0.320436 10.7859 0.0960266 11.5124 0.0960266 L 11.5124 0.0960266 L 17.8694 0.0960266 Z",
          },
          rect1: {
            x: 17.8794,
            y: 1.10094,
            width: 3,
            height: 6,
          },
          path3: {
            stroke: "inherit",
            fill: "inherit",
            d: "M 22.445 11.0425 C 23.631 11.0021 24.729 10.9118 25.5775 11.7007 C 26.7559 12.7963 27.4932 14.3601 27.4932 16.096 C 27.4932 17.7529 26.8216 19.2529 25.7358 20.3387 C 24.65 21.4245 23.15 22.096 21.4932 22.096 C 19.8363 22.096 18.3363 21.4245 17.2505 20.3387 C 16.1647 19.2529 15.4932 17.7529 15.4932 16.096 C 15.4932 14.4065 16.1915 12.8801 17.3152 11.7897 C 18.1983 10.9328 19.3658 11.0173 20.6307 11.0493 C 20.913 11.0565 21.2009 11.0638 21.4932 11.0638 C 21.8164 11.0638 22.1342 11.053 22.445 11.0425 Z",
          },
          circle1: {
            fill: "#0000",
            cx: 21.5108,
            cy: 16.0513,
            r: 1.15,
          },
          circle2: {
            fill: "#0000",
            cx: 19.7957,
            cy: 13.2981,
            r: 1,
          },
          circle3: {
            fill: "#0000",
            cx: 23.4448,
            cy: 13.2543,
            r: 1,
          },
          circle4: {
            fill: "#0000",
            cx: 17.8839,
            cy: 16.003,
            r: 1.15,
          },
          circle5: {
            fill: "#0000",
            cx: 25.1321,
            cy: 15.9811,
            r: 1.15,
          },
          circle6: {
            fill: "#0000",
            cx: 19.7002,
            cy: 19.1987,
            r: 1.15,
          },
          circle7: {
            fill: "#0000",
            cx: 23.324,
            cy: 19.1366,
            r: 1.15,
          },
          path4: {
            fill: "#0000",
            d: "M 6.00846 17.3664 C 5.8 19.3196 5.54645 20.6378 5.24781 21.3212 C 4.76758 22.4202 4.65454 23.1352 3.72632 23.7034 C 2.54357 24.4273 0.93337 23.669 0.398676 22.596 C -0.283222 21.2277 0.116316 19.469 0.116316 18.2938 C 0.116316 16.8959 0.116316 10.798 0.116316 0",
          },
        },
        markup: [
          {
            tagName: "rect",
            selector: "wrapper",
          },
          {
            tagName: "g",
            selector: "g1",
            children: [
              {
                tagName: "polygon",
                selector: "polygon1",
              },
              {
                tagName: "path",
                selector: "path1",
              },
              {
                tagName: "path",
                selector: "path2",
              },
              {
                tagName: "rect",
                selector: "rect1",
              },
              {
                tagName: "path",
                selector: "path3",
              },
              {
                tagName: "circle",
                selector: "circle1",
              },
              {
                tagName: "circle",
                selector: "circle2",
              },
              {
                tagName: "circle",
                selector: "circle3",
              },
              {
                tagName: "circle",
                selector: "circle4",
              },
              {
                tagName: "circle",
                selector: "circle5",
              },
              {
                tagName: "circle",
                selector: "circle6",
              },
              {
                tagName: "circle",
                selector: "circle7",
              },
              {
                tagName: "path",
                selector: "path4",
              },
            ],
          },
        ],
      },
      true
    );
  };

  return [registerCustomNode];
};
