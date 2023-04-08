import { useEffect, useState } from "react";
import cx from "classnames";
import styles from "./index.module.scss";

const itemList = [
  {
    title: "CBSE",
    description: [
      { title: "CBSE Class 11", description: "Class 11 Syllabus" },
      { title: "CBSE Class 12", description: "Class 12 Syllabus" },
    ],
  },
  { title: "ICSE", description: "ICSE Syllabus" },
  {
    title: "NCERT",
    description: [
      { title: "NCERT Concepts", description: "Ncert Concepts are available" },
      {
        title: "NCERT Books",
        description: [
          {
            title: "NCERT Books Class 12",
            description: "Available NCERT Books for class 12",
          },
        ],
      },
    ],
  },
  { title: "UPSC", description: "UPSC Exam are here!" },
];

function AccordionItem({ accordionItem, level }) {
  const [showDescription, setShowDescription] = useState(false);
  const { title, description } = accordionItem;

  const handleAccordionItemClick = (event) => {
    event.stopPropagation();
    setShowDescription((prev) => !prev);
  };

  if (!description || description.length === 0) return null;
  return (
    <div
      className={cx(styles.accordionItem, {
        [styles.accordionOpen]: showDescription,
      })}
      onClick={handleAccordionItemClick}
      style={{ width: `calc(100% - ${level === 0 ? 0 : 20}px)` }}
    >
      <div className={styles.title}>{title}</div>
      {showDescription ? (
        Array.isArray(description) ? (
          description.map((accordionItem) => (
            <AccordionItem accordionItem={accordionItem} level={level + 1} />
          ))
        ) : (
          <div class={styles.description}> {description} </div>
        )
      ) : null}
    </div>
  );
}

export default function Accordion() {
  return (
    <div className={styles.wrapper}>
      {itemList.map((accordionItem) => (
        <AccordionItem accordionItem={accordionItem} level={0} />
      ))}
    </div>
  );
}
