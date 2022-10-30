import { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./NestedNavItem.module.scss";

export const defaultNavObject = {
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
    },
  ],
};

export default function NestedNavItem({ navObject }) {
  const [showListItems, setShowListItems] = useState(false);
  const [style, setStyle] = useState(null);

  const handleNavItemClick = (event) => {
    event.stopPropagation();
    const left =
      event.currentTarget.offsetLeft + event.currentTarget.clientWidth;
    setStyle({
      left,
    });
    setShowListItems(true);
  };

  if (!navObject.label) return null;

  return (
    <div
      className={styles.wrapper}
      onMouseOver={handleNavItemClick}
      onMouseLeave={() => setShowListItems(false)}
      onClick={handleNavItemClick}
    >
      {navObject.label}
      {navObject.listItems &&
      Array.isArray(navObject.listItems) &&
      navObject.listItems?.length > 0 ? (
        <>
          <span className={styles.arrow}> {">"} </span>
          {showListItems ? (
            <div className={styles.listWrapper} style={style}>
              {navObject.listItems.map((navObject) => (
                <NestedNavItem key={navObject.label} navObject={navObject} />
              ))}
            </div>
          ) : null}
        </>
      ) : null}
    </div>
  );
}
