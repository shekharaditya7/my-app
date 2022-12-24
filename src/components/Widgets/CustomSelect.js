import { useRef, useState } from "react";
import cx from "classnames";
import useOutsideClick from "./../../utils/hooks/useOutsideClick";
import styles from "./CustomSelect.module.scss";

export default function CustomSelect({ options, placeholder = "", onChange }) {
  const ref = useRef(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showItems, setShowItems] = useState(false);

  const handleLabelWrapperClick = () => {
    setShowItems((prev) => !prev);
  };

  const handleItemClick = (option) => {
    setSelectedOption(option);
    onChange && onChange({ option });
  };

  useOutsideClick({ ref, onOutsideClick: () => setShowItems(false) });

  return (
    <div className={styles.wrapper} ref={ref}>
      <div className={styles.labelWrapper} onClick={handleLabelWrapperClick}>
        {selectedOption?.label ?? placeholder}
        <span>^</span>
        {showItems ? (
          <div className={styles.itemsWrapper}>
            {options?.map((option) => {
              const isActive = option.label === selectedOption?.label;
              return (
                <div
                  onClick={() => handleItemClick(option)}
                  key={option.label}
                  className={cx(styles.item, {
                    [styles.activeItem]: isActive,
                  })}
                >
                  {option.label}
                  {isActive ? (
                    <img
                      src={"/images/Tick.webp"}
                      alt={"tick"}
                      className={styles.tick}
                    />
                  ) : null}
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
}
