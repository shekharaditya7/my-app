import parseNavObjectInput from "./parseNavObjectInput";

/**
 * @param {string} navObjectString - The nested input config used for navigation
 * @returns {boolean} - whether the navObject input is valid
 */

export default function validateNavObject(navObjectString) {
  const parsedNavObj = parseNavObjectInput(navObjectString);

  return validateNavObjectUtil(parsedNavObj);
}

/**
 *
 * @param {object} navObj - The parsed Nested Config Object
 * @returns {boolean} - whether the navObject input is valid
 */

function validateNavObjectUtil(navObj) {
  if (typeof navObj !== "object") return false;
  if (
    navObj.label &&
    typeof navObj.label === "string" &&
    ((navObj.listItems && Array.isArray(navObj.listItems)) || !navObj.listItems)
  ) {
    let ans = true;
    navObj.listItems.forEach((item) => {
      ans = ans && validateNavObjectUtil(item);
    });
    return ans;
  }
  return false;
}
