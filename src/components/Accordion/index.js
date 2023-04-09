import { useState } from "react";
import cx from "classnames";
import Button from "../Widgets/Button";

import { defaultMenuList, validateMenuList } from "./accordion.constants";

import styles from "./index.module.scss";

function AccordionItem({ accordionItem, level }) {
  const [showDescription, setShowDescription] = useState(false);
  const { title, menuDescription } = accordionItem;

  const handleAccordionItemClick = (event) => {
    event.stopPropagation();
    setShowDescription((prev) => !prev);
  };

  if (!menuDescription || menuDescription.length === 0) return null;
  return (
    <div
      className={cx(styles.accordionItem, {
        [styles.accordionOpen]: showDescription,
      })}
      onClick={handleAccordionItemClick}
      style={{ width: `calc(100% - ${level === 0 ? 0 : 20}px)` }}
    >
      <div className={styles.title}>{title}</div>
      <div className={styles.listWrapper}>
        {Array.isArray(menuDescription) ? (
          menuDescription.map((accordionItem) => (
            <AccordionItem
              accordionItem={accordionItem}
              level={level + 1}
              key={accordionItem.title}
            />
          ))
        ) : (
          <div
            className={styles.description}
            onClick={(event) => event.stopPropagation()}
          >
            {menuDescription}
          </div>
        )}
      </div>
    </div>
  );
}

export default function Accordion() {
  const [isLoading, setIsLoading] = useState(false);
  const [text, setText] = useState(
    JSON.stringify(defaultMenuList, undefined, 1)
  );
  const [menuList, setMenuList] = useState(defaultMenuList);
  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleTextSubmit = () => {
    setIsLoading(true);
    setMenuList(validateMenuList(text));
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  };
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.lhs}>
        <textarea
          aria-label="objectInput"
          value={text}
          onChange={handleTextChange}
          className={styles.textArea}
        ></textarea>
        <Button
          onClick={handleTextSubmit}
          label={"Submit"}
          isLoading={isLoading}
        />
      </div>
      <div className={styles.verticalLine}></div>
      <div className={styles.rhs}>
        {menuList?.length ? (
          <div className={styles.wrapper}>
            {menuList.map((accordionItem) => (
              <AccordionItem
                accordionItem={accordionItem}
                level={0}
                key={accordionItem.title}
              />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
