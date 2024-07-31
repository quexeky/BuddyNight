function openTab(evt, tabId) {
  const closeDelay = 100;
  const tab_content = document.getElementsByClassName("tabcontent");
  const tab_links = document.getElementsByClassName("tablinks");

  const isCurrentlyActive = evt.currentTarget.className.includes(" active");
  hideAllContentAndDeactivateTabs(tab_content, tab_links);
  if (isCurrentlyActive) {
    return;
  }

  // Not an active tab, so activate it & show or create the widget
  activateTab(evt);
  if (!window.tabScriptMap[tabId].isLoaded) {
    // Inject the p5.js widget script code into the DOM
    loadWidget(window.tabScriptMap[tabId].src, tabId);
    window.tabScriptMap[tabId].isLoaded = true;
  } else {
    showContent(tabId);
  }
}

function hideAllContentAndDeactivateTabs(tab_content, tab_links) {
  for (i = 0; i < tab_content.length; i++) {
    tab_content[i].style.display = "none";
  }
  for (i = 0; i < tab_links.length; i++) {
    tab_links[i].className = tab_links[i].className.replace(" active", "");
  }
}

function activateTab(evt) {
  evt.currentTarget.className += " active";
}

function loadWidget(scr, tabId) {
  const widget = document.createElement("script");
  widget.type = "text/p5";
  widget.src = `${scr}`;
  widget.dataset.height = "800";
  widget.dataset.previewWidth = "700";

  const container = document.getElementById(`${tabId}`);
  container.style.display = "flex";
  container.appendChild(widget);

  const widgetScript = document.createElement("script");
  widgetScript.src = "//toolness.github.io/p5.js-widget/p5-widget.js";
  container.appendChild(widgetScript);
  console.log(container);
}

function showContent(tabName) {
  document.getElementById(tabName).style.display = "flex";
  if (tabName === "Instructions") {
    document.getElementById(tabName).style.height = "800px";
  }
}
