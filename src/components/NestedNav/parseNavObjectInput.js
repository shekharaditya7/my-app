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
    alert("Error Parsing JSON ", error);
    console.log(error);
  }
  return parsedNavObject;
}
