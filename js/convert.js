const encoderDropdown = document.getElementById("encoder");
const functionDropdown = document.getElementById("encoderFunction");
const textArea = document.getElementById("textarea");
const convertBtn = document.getElementById("convert");

convertBtn.addEventListener("click", () => {
  const encoderType = encoderDropdown.value;
  if (encoderType == "base64") {
    const currentOption = functionDropdown.value;
    if (currentOption == "encode") {
      const newVal = btoa(textArea.value);
      textArea.value = newVal;
    } else if (currentOption == "decode") {
      const newVal = atob(textArea.value);
      textArea.value = newVal;
    }
  } else if (encoderType == "url") {
    const currentOption = functionDropdown.value;
    if (currentOption == "encode") {
      const newVal = encodeURI(textArea.value);
      textArea.value = newVal;
    } else if (currentOption == "decode") {
      const newVal = decodeURI(textArea.value);
      textArea.value = newVal;
    }
  }
});
