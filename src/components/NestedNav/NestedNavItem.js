import styles from "./NestedNavItem.module.scss";

const defaultNavObject = {
  label: "1",
  listItems: [
    {
      label: "2",
      listItems: [
        {
          label: "6",
          listItems: [
            { label: "7", listItems: [] },
            { label: "8", listItems: [] },
          ],
        },
        { label: "9", listItems: [] },
      ],
    },
    {
      label: "3",
      listItems: [
        { label: "10", listItems: [] },
        { label: "11", listItems: [] },
        {
          label: "12",
          listItems: [
            { label: "13", listItems: [{ label: "14", listItems: [] }] },
          ],
        },
      ],
    },
    {
      label: "4",
      listItems: [
        {
          label: "15",
          listItems: [
            { label: "16", listItems: [] },
            { label: "17", listItems: [] },
          ],
        },
      ],
    },
    {
      label: "5",
      listItems: [],
    },
  ],
};

export default function NestedNavItem({ navObject = defaultNavObject }) {
  return (
    <div className={styles.wrapper}>
      {navObject.label}
      {navObject.listItems?.length > 0 ? (
        <span className={styles.arrow}> {">"} </span>
      ) : null}
    </div>
  );
}
