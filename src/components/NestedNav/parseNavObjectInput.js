/**
 *
 * @param {string} navObjectString - The Navobject String inpiut from user
 * @returns {object} parsed Nav Object
 */
export default function parseNavObjectInput(navObjectString) {
  let parsedNavObject = {};
  try {
    parsedNavObject = JSON.parse(navObjectString);
  } catch (error) {
    console.log("Error Parsing JSON ", error);
  }
  return parsedNavObject;
}
