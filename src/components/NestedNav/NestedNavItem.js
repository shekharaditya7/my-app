import { useState } from "react";
import styles from "./NestedNavItem.module.scss";

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
