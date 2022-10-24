import parseNavObjectInput from "./parseNavObjectInput";

/**
 * @param {string} navObjectString - The nested input config used for navigation
 * @returns {boolean} - whether the navObject input is valid
 */

export default function validateNavObject(navObjectString) {
  if (typeof navObjectString !== "string") return {};
  const plainText = navObjectString.replace(/\n/g, "");
  const parsedNavObj = parseNavObjectInput(plainText);

  if (validateNavObjectUtil(parsedNavObj)) return parsedNavObj;
  return {};
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
    if (navObj.listItems) {
      navObj.listItems?.forEach((item) => {
        ans = ans && validateNavObjectUtil(item);
      });
    }
    return ans;
  }
  return false;
}
