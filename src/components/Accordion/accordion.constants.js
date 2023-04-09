export const defaultMenuList = [
  {
    title: "CBSE",
    menuDescription: [
      { title: "CBSE Class 11", menuDescription: "Class 11 Syllabus" },
      { title: "CBSE Class 12", menuDescription: "Class 12 Syllabus" },
    ],
  },
  { title: "ICSE", menuDescription: "ICSE Syllabus" },
  {
    title: "NCERT",
    menuDescription: [
      {
        title: "NCERT Concepts",
        menuDescription: "Ncert Concepts are available",
      },
      {
        title: "NCERT Books",
        menuDescription: [
          {
            title: "NCERT Books Class 12",
            menuDescription: "Available NCERT Books for class 12",
          },
        ],
      },
    ],
  },
  { title: "UPSC", menuDescription: "UPSC Exam are here!" },
];

/**
 *
 * @param {string} menuList - The MenuList String inpiut from user
 * @returns {object} parsed Nav Object
 */
export function parseNavObjectInput(menuList) {
  let parsedNavObject = [];
  try {
    parsedNavObject = JSON.parse(menuList);
  } catch (error) {
    alert("Error Parsing JSON ", error);
    console.log(error);
  }
  return parsedNavObject;
}

/**
 * @param {string} menuList - The nested input config used for navigation
 * @returns {boolean} - whether the navObject input is valid
 */

export function validateMenuList(menuList) {
  if (typeof menuList !== "string") return [];
  const plainText = menuList.replace(/\n/g, "");
  const parsedMenuList = parseNavObjectInput(plainText);

  let ans = false;
  if (parsedMenuList && Array.isArray(parsedMenuList)) {
    ans = true;
    parsedMenuList.forEach((item) => {
      ans = ans && validateMenuListUtil(item);
    });
  }
  if (ans) return parsedMenuList;
  alert("Incorrect input format.");
  return [];
}

/**
 *
 * @param {object} menuList - The parsed Nested Config Object
 * @returns {boolean} - whether the navObject input is valid
 */

function validateMenuListUtil(menuList) {
  if (typeof menuList !== "object") return false;
  if (
    menuList.title &&
    typeof menuList.title === "string" &&
    (Array.isArray(menuList.menuDescription) ||
      typeof menuList.menuDescription === "string")
  ) {
    let ans = true;
    if (menuList.menuDescription && Array.isArray(menuList.menuDescription)) {
      menuList.menuDescription?.forEach((item) => {
        ans = ans && validateMenuListUtil(item);
      });
    }
    return ans;
  }
  return false;
}
