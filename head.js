const headScriptPaths = ["/js/IdTabMap.js"];

headScriptPaths.forEach((src) => {
  const script = document.createElement("script");
  script.src = src;
  // script.async = false; // Load scripts in order
  document.head.appendChild(script);
});
