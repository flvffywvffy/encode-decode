const optionsDropdown = document.getElementById("encode-type")
const textArea = document.getElementById("textarea");
const convertBtn = document.getElementById("convert");

convertBtn.addEventListener("click", () => {
    const currentOption = optionsDropdown.value;
    if (currentOption == "encode") {
        const newVal = btoa(textArea.value);
        textArea.value = newVal;
    } else if (currentOption == "decode") {
        const newVal = atob(textArea.value);
        textArea.value = newVal;
    }
})