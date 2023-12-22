//Handles copying item based on the input id to clipboard
export const handleCopyElement = (elementById, setCopy) => {
  if (typeof elementById === "string") {
    let copy = document.getElementById(elementById);
    copy.select();
    copy.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copy.value);
    setCopy(true);
  }
};
