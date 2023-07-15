const ADD = "ADD";
const CLOSE = "CLOSE";
const CLICK = "CLICK";

const CIRCLE = "CIRCLE";
const RECT = "RECT";

const TAB_ACTIONS = {
  ADD,
  CLOSE,
  CLICK,
};

const TAB_DATA = [
  {
    id: 1,
    title: "1",
    subTitle: "A",
    type: CIRCLE,
    isPinned: false,
    breadcrumbList: [
      {
        id: "A1",
        title: "A1 Breadcrumb",
      },
      {
        id: "A2",
        title: "A2 Breadcrumb",
      },
      {
        id: "A3",
        title: "A3 Breadcrumb",
      },
    ],
  },
  {
    id: 2,
    title: "2",
    subTitle: "B",
    type: RECT,
    isPinned: false,
  },
  {
    id: 3,
    title: "3",
    subTitle: "C",
    type: RECT,
    isPinned: false,
    breadcrumbList: [
      {
        id: "C1",
        title: "C1 Breadcrumb",
      },
      {
        id: "C2",
        title: "C2 Breadcrumb",
      },
    ],
  },
  {
    id: 4,
    title: "4",
    subTitle: "D",
    type: CIRCLE,
    isPinned: false,
    breadcrumbList: [
      {
        id: "D1",
        title: "D1 Breadcrumb",
      },
    ],
  },
];

export { TAB_ACTIONS, TAB_DATA };
