// import { image_encode } from './image.js';

var args = document.getElementsByTagName("script")[0];
start = parseInt(args.getAttribute("start"));
end = parseInt(args.getAttribute("end"));
ans = args.getAttribute("answers") === "true";
console.log("start", start, "end", end, "display answers", ans);

// structure used to create a hidden element to allow us to copy the embedded p5.js code to the clipboard on button press. Then initiate the load of the paste code for ease of change.

var mainTextContent = "Text in Copy Buffer";
var levelTextContent = [];
for (var i = 0; i < 20; i++) {
  levelTextContent.push("Level" + i);
}
var xhttps = new Array(20);
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    mainTextContent = this.responseText; // save read data for paste
    // document.getElementById("RCbutton").style.display = "block";

    for (var i = start; i < end + 1; i++) {
      getLevel(i);
    }
  }
};
xhttp.open("GET", "main.js", true);
xhttp.send();

function getLevel(i) {
  var xhttps1 = new XMLHttpRequest();
  xhttps1.onreadystatechange = function () {
    text = this.responseText;
    if (!ans) {
      text = text.replace(/\/\*\*[\s\S]*\*\//, "");
    }
    levelTextContent[i] = text;
    // document.getElementById("RCbutton"+i).style.display = "block";
  };
  xhttps1.open("GET", "level" + i + ".js", true);
  xhttps1.send();
}

function textToClipboard(level) {
  var dummy = document.createElement("textarea");
  document.body.appendChild(dummy);
  dummy.value = mainTextContent + levelTextContent[level];
  console.log(dummy.value);
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);
  alert("Copied!");
}

function p5jsLoaded() {
  //alert("Loaded");
  for (i = 1; i < 14; i++) {
    // document.getElementById("RCbutton" + i).style.backgroundColor = "#30BE60";
    // document.getElementById("RCbutton" + i).style.Color = "white";
  }
}

function openTab(evt, tabName) {
  var tab_content, tab_links;

  tab_content = document.getElementsByClassName("tabcontent");
  tab_links = document.getElementsByClassName("tablinks");

  var isActive = evt.currentTarget.className.includes(" active");

  if (isActive) {
    // Tab already active, so close it & hide everything
    for (i = 0; i < tab_content.length; i++) {
      tab_content[i].style.display = "none";
    }
    for (i = 0; i < tab_links.length; i++) {
      tab_links[i].className = tab_links[i].className.replace(" active", "");
    }
  } else {
    // No tabs active, so hide everything except the active tab
    for (i = 0; i < tab_content.length; i++) {
      tab_content[i].style.display = "none";
    }
    for (i = 0; i < tab_links.length; i++) {
      tab_links[i].className = tab_links[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "flex";
    if (tabName === "Instructions") {
      document.getElementById(tabName).style.height = "800px";
    }
    evt.currentTarget.className += " active";
  }
}

// Show the instruction tab on load
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("Instructions").style.display = "flex";
  document.getElementById("Instructions").style.height = "800px";
});
