const headerElem = document.getElementById("header");
const headerTargetText = "NG5M";

const darkMode = {
    bgcolor: "#121113",
    bglight: "#312F2F",
    text: "#F7F7F2",

    hover: "#413333"
};

const lightMode = {
    bgcolor: "#DBDBDB",
    bglight: "#EBF5EE",
    text: "#02111B",

    hover: "#E3E7DE"
};

let isLightMode = false;

const vantaNet = VANTA.NET({
    backgroundAlpha: 0,
    el: "#net",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: darkMode["text"],
    backgroundColor: darkMode["bgcolor"]
});

let headerIndex = 0;
function juggleHeaderText() {
    const interval = setInterval(function() {
        headerElem.textContent = headerTargetText.substring(0, headerIndex) + "_";

        headerIndex += 1;

        if (headerIndex > headerTargetText.length) {
            clearInterval(interval);
            headerElem.textContent = headerTargetText;
        }
    }, 300);
}

function switchMode() {
    isLightMode = !isLightMode;

    let dict = darkMode;

    if (isLightMode) {
        dict = lightMode;
    }

    document.documentElement.style.cssText = 
`--bgcolor: ${dict["bgcolor"]};\n` +
`--bglight: ${dict["bglight"]};\n` +
`--text: ${dict["text"]};\n` +
`--hover: ${dict["hover"]};\n`;

    vantaNet.setOptions({
        color: dict["text"],
        backgroundColor: dict["bgcolor"]
    });
}

juggleHeaderText();
