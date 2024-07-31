// Create a mapping of tab ids to script source & set loaded to false
const tabInfo = {
  src: "",
  isLoaded: false,
  new: function (src) {
    const newTabInfo = Object.create(this);
    newTabInfo.src = src;
    newTabInfo.isLoaded = false
    return newTabInfo;
  },
};

window.tabScriptMap = {
  tab1: tabInfo.new("exercise_preloads/level1.js"),
  tab2: tabInfo.new("exercise_preloads/level2.js"),
  tab3: tabInfo.new("exercise_preloads/level3.js"),
  tab4: tabInfo.new("exercise_preloads/level4.js"),
  tab5: tabInfo.new("exercise_preloads/level5.js"),
  tab6: tabInfo.new("exercise_preloads/level6.js"),
  tab7: tabInfo.new("exercise_preloads/level7.js"),
  tab8: tabInfo.new("exercise_preloads/level8.js"),
  tab9: tabInfo.new("exercise_preloads/level9.js"),
  tab10: tabInfo.new("exercise_preloads/level10.js"),
  tab11: tabInfo.new("exercise_preloads/level11.js"),
  tab12: tabInfo.new("exercise_preloads/level12.js"),
  tab13: tabInfo.new("exercise_preloads/level13.js"),
  bonus1: tabInfo.new("exercise_preloads/bonus1.js"),
  bonus2: tabInfo.new("exercise_preloads/bonus2.js"),
};
