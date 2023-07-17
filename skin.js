// Garden Gnome Software - Skin
// Pano2VR 7.0/19876
// Filename: Unifilaw.ggsk
// Generated 2023-01-31T17:40:30

function pano2vrSkin(player, base) {
  player.addVariable("open_tag_nhamau", 2, false, { ignoreInState: 0 });
  player.addVariable("open_tag_media", 2, false, { ignoreInState: 0 });
  player.addVariable("open_setting", 2, false, { ignoreInState: 0 });
  player.addVariable("open_list_tongthe", 2, false, { ignoreInState: 0 });
  player.addVariable("open_floorplan", 2, true, { ignoreInState: 0 });
  player.addVariable("scale_floorplan", 2, false, { ignoreInState: 0 });
  player.addVariable("var_select", 1, 1, { ignoreInState: 0 });
  player.addVariable("var_intro", 2, true, { ignoreInState: 0 });
  player.addVariable("sound", 2, false, { ignoreInState: 0 });
  player.addVariable("menu_muado", 2, false, { ignoreInState: 0 });
  player.addVariable("open_info", 2, false, { ignoreInState: 0 });
  player.addVariable("var_hs_ani", 2, false, { ignoreInState: 0 });
  player.addVariable("var_show_menu", 2, true, { ignoreInState: 0 });
  player.addVariable("open_tag", 2, false, { ignoreInState: 0 });
  player.addVariable("open_list_gianhang", 2, false, { ignoreInState: 0 });
  player.addVariable("show_cloner", 2, false, { ignoreInState: 0 });
  player.addVariable("text_info", 1, 1, { ignoreInState: 0 });
  player.addVariable("open_catalog", 2, false, { ignoreInState: 0 });
  player.addVariable("language", 2, false, { ignoreInState: 1 });
  player.addVariable("hs_info_voice", 2, false, { ignoreInState: 0 });
  player.addVariable("start_intro", 2, false, { ignoreInState: 0 });
  player.addVariable("tran_en", 2, false, { ignoreInState: 0 });
  player.addVariable("audio_voice_1", 2, false, { ignoreInState: 0 });
  player.addVariable("tooltip_hover", 2, false, { ignoreInState: 0 });
  player.addVariable("hs_info_voice_1", 2, false, { ignoreInState: 0 });
  player.addVariable("show_bot", 2, true, { ignoreInState: 0 });
  player.addVariable("link", 0, "", { ignoreInState: 0 });
  var me = this;
  var skin = this;
  var flag = false;
  var hotspotTemplates = {};
  var skinKeyPressed = 0;
  this.player = player;
  player.setApiVersion(7);
  this.player.skinObj = this;
  this.divSkin = player.divSkin;
  this.ggUserdata = player.userdata;
  this.lastSize = { w: -1, h: -1 };
  var basePath = "";
  var cssPrefix = "";
  // auto detect base path
  if (base == "?") {
    var scripts = document.getElementsByTagName("script");
    for (var i = 0; i < scripts.length; i++) {
      var src = scripts[i].src;
      if (src.indexOf("skin.js") >= 0) {
        var p = src.lastIndexOf("/");
        if (p >= 0) {
          basePath = src.substr(0, p + 1);
        }
      }
    }
  } else if (base) {
    basePath = base;
  }
  this.elementMouseDown = {};
  this.elementMouseOver = {};
  var i;
  var hs,
    el,
    els,
    elo,
    ela,
    elHorScrollFg,
    elHorScrollBg,
    elVertScrollFg,
    elVertScrollBg,
    elCornerBg;
  var prefixes = "Webkit,Moz,O,ms,Ms".split(",");
  for (var i = 0; i < prefixes.length; i++) {
    if (typeof document.body.style[prefixes[i] + "Transform"] !== "undefined") {
      cssPrefix = "-" + prefixes[i].toLowerCase() + "-";
    }
  }

  player.setMargins(0, 0, 0, 0);

  this.updateSize = function (startElement) {
    var stack = [];
    stack.push(startElement);
    while (stack.length > 0) {
      var e = stack.pop();
      if (e.ggUpdatePosition) {
        e.ggUpdatePosition();
      }
      if (e.hasChildNodes()) {
        for (var i = 0; i < e.childNodes.length; i++) {
          stack.push(e.childNodes[i]);
        }
      }
    }
  };

  player.addListener("changenode", function () {
    me.ggUserdata = player.userdata;
  });

  var parameterToTransform = function (p) {
    return (
      p.def +
      "translate(" +
      p.rx +
      "px," +
      p.ry +
      "px) rotate(" +
      p.a +
      "deg) scale(" +
      p.sx +
      "," +
      p.sy +
      ")"
    );
  };

  this.findElements = function (id, regex) {
    var r = [];
    var stack = [];
    var pat = new RegExp(id, "");
    stack.push(me.divSkin);
    while (stack.length > 0) {
      var e = stack.pop();
      if (regex) {
        if (pat.test(e.ggId)) r.push(e);
      } else {
        if (e.ggId == id) r.push(e);
      }
      if (e.hasChildNodes()) {
        for (var i = 0; i < e.childNodes.length; i++) {
          stack.push(e.childNodes[i]);
        }
      }
    }
    return r;
  };

  this._ = function (text, params) {
    return player._(text, params);
  };

  this.languageChanged = function () {
    var stack = [];
    stack.push(me.divSkin);
    while (stack.length > 0) {
      var e = stack.pop();
      if (e.ggUpdateText) {
        e.ggUpdateText();
      }
      if (e.hasChildNodes()) {
        for (var i = 0; i < e.childNodes.length; i++) {
          stack.push(e.childNodes[i]);
        }
      }
    }
  };
  player.addListener("sizechanged", function () {
    me.updateSize(me.divSkin);
  });
  player.addListener("languagechanged", this.languageChanged);

  this.addSkin = function () {
    var hs = "";
    this.ggCurrentTime = new Date().getTime();
    el = me._power_by_vr360 = document.createElement("div");
    els = me._power_by_vr360__img = document.createElement("img");
    els.className = "ggskin ggskin_svg";
    me._power_by_vr360__img.setAttribute(
      "src",
      basePath + "images/power_by_vr360.svg"
    );
    hs = "";
    hs +=
      "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;";
    els.setAttribute("style", hs);
    els["ondragstart"] = function () {
      return false;
    };
    el.appendChild(els);
    el.ggSubElement = els;
    el.ggId = "power_by_vr360";
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1, def: "" };
    el.ggVisible = true;
    el.className = "ggskin ggskin_svg ";
    el.ggType = "svg";
    hs = "";
    hs += "bottom : 5px;";
    hs += "cursor : pointer;";
    hs += "height : 30px;";
    hs += "left : 5px;";
    hs += "opacity : 0.5;";
    hs += "position : absolute;";
    hs += "visibility : inherit;";
    hs += "width : 150px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "0% 100%";
    me._power_by_vr360.ggIsActive = function () {
      return false;
    };
    el.ggElementNodeId = function () {
      return player.getCurrentNode();
    };
    me._power_by_vr360.logicBlock_scaling = function () {
      var newLogicStateScaling;
      if (
        player.getIsMobile() == true &&
        player.getViewerSize().width / player.getViewerSize().height <= 1 &&
        player.getViewerSize().width < 500
      ) {
        newLogicStateScaling = 0;
      } else {
        newLogicStateScaling = -1;
      }
      if (
        me._power_by_vr360.ggCurrentLogicStateScaling != newLogicStateScaling
      ) {
        me._power_by_vr360.ggCurrentLogicStateScaling = newLogicStateScaling;
        me._power_by_vr360.style.transition =
          "transform 0s, opacity 500ms ease 0ms";
        if (me._power_by_vr360.ggCurrentLogicStateScaling == 0) {
          me._power_by_vr360.ggParameter.sx = 0.5;
          me._power_by_vr360.ggParameter.sy = 0.5;
          me._power_by_vr360.style.transform = parameterToTransform(
            me._power_by_vr360.ggParameter
          );
          skin.updateSize(me._power_by_vr360);
        } else {
          me._power_by_vr360.ggParameter.sx = 1;
          me._power_by_vr360.ggParameter.sy = 1;
          me._power_by_vr360.style.transform = parameterToTransform(
            me._power_by_vr360.ggParameter
          );
          skin.updateSize(me._power_by_vr360);
        }
      }
    };
    me._power_by_vr360.logicBlock_scaling();
    me._power_by_vr360.logicBlock_alpha = function () {
      var newLogicStateAlpha;
      if (me.elementMouseOver["power_by_vr360"] == true) {
        newLogicStateAlpha = 0;
      } else {
        newLogicStateAlpha = -1;
      }
      if (me._power_by_vr360.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
        me._power_by_vr360.ggCurrentLogicStateAlpha = newLogicStateAlpha;
        me._power_by_vr360.style.transition =
          "transform 0s, opacity 500ms ease 0ms";
        if (me._power_by_vr360.ggCurrentLogicStateAlpha == 0) {
          me._power_by_vr360.style.visibility = me._power_by_vr360.ggVisible
            ? "inherit"
            : "hidden";
          me._power_by_vr360.style.opacity = 1;
        } else {
          me._power_by_vr360.style.visibility = me._power_by_vr360.ggVisible
            ? "inherit"
            : "hidden";
          me._power_by_vr360.style.opacity = 0.5;
        }
      }
    };
    me._power_by_vr360.logicBlock_alpha();
    me._power_by_vr360.onclick = function (e) {
      player.openUrl("https://vr360.com.vn", "");
    };
    me._power_by_vr360.onmouseover = function (e) {
      me.elementMouseOver["power_by_vr360"] = true;
      me._power_by_vr360.logicBlock_alpha();
    };
    me._power_by_vr360.onmouseout = function (e) {
      me.elementMouseOver["power_by_vr360"] = false;
      me._power_by_vr360.logicBlock_alpha();
    };
    me._power_by_vr360.ggUpdatePosition = function (useTransition) {};
    me.divSkin.appendChild(me._power_by_vr360);
    el = me._timer_1 = document.createElement("div");
    el.ggTimestamp = this.ggCurrentTime;
    el.ggLastIsActive = true;
    el.ggTimeout = 500;
    el.ggId = "Timer 1";
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1, def: "" };
    el.ggVisible = true;
    el.className = "ggskin ggskin_timer ";
    el.ggType = "timer";
    hs = "";
    hs += "height : 20px;";
    hs += "left : 384px;";
    hs += "position : absolute;";
    hs += "top : 98px;";
    hs += "visibility : inherit;";
    hs += "width : 100px;";
    hs += "pointer-events:none;";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "50% 50%";
    me._timer_1.ggIsActive = function () {
      return me._timer_1.ggTimestamp == 0
        ? false
        : Math.floor(
            (me.ggCurrentTime - me._timer_1.ggTimestamp) / me._timer_1.ggTimeout
          ) %
            2 ==
            0;
    };
    el.ggElementNodeId = function () {
      return player.getCurrentNode();
    };
    me._timer_1.logicBlock_visible = function () {
      var newLogicStateVisible;
      if (me._timer_1.ggIsActive() == false) {
        newLogicStateVisible = 0;
      } else {
        newLogicStateVisible = -1;
      }
      if (me._timer_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
        me._timer_1.ggCurrentLogicStateVisible = newLogicStateVisible;
        me._timer_1.style.transition = "";
        if (me._timer_1.ggCurrentLogicStateVisible == 0) {
          me._timer_1.style.visibility = "hidden";
          me._timer_1.ggVisible = false;
        } else {
          me._timer_1.style.visibility =
            Number(me._timer_1.style.opacity) > 0 || !me._timer_1.style.opacity
              ? "inherit"
              : "hidden";
          me._timer_1.ggVisible = true;
        }
      }
    };
    me._timer_1.logicBlock_visible();
    me._timer_1.ggActivate = function () {
      player.setVariableValue(
        "var_hs_ani",
        !player.getVariableValue("var_hs_ani")
      );
    };
    me._timer_1.ggCurrentLogicStateVisible = -1;
    me._timer_1.ggUpdateConditionTimer = function () {
      me._timer_1.logicBlock_visible();
    };
    me._timer_1.ggUpdatePosition = function (useTransition) {};
    me.divSkin.appendChild(me._timer_1);
    el = me._cont_control = document.createElement("div");
    el.ggId = "Cont_control";
    el.ggDy = 0;
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1, def: "" };
    el.ggVisible = true;
    el.className = "ggskin ggskin_container ";
    el.ggType = "container";
    hs = "";
    hs += "height : 250px;";
    hs += "position : absolute;";
    hs += "right : 0px;";
    hs += "top : calc(50% - ((250px + 0px) / 2) + 0px);";
    hs += "visibility : inherit;";
    hs += "width : 50px;";
    hs += "pointer-events:none;";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "100% 50%";
    me._cont_control.ggIsActive = function () {
      return false;
    };
    el.ggElementNodeId = function () {
      return player.getCurrentNode();
    };
    me._cont_control.logicBlock_scaling = function () {
      var newLogicStateScaling;
      if (player.getIsMobile() == true && player.getViewerSize().width < 500) {
        newLogicStateScaling = 0;
      } else if (player.getViewerSize().height <= 800) {
        newLogicStateScaling = 1;
      } else {
        newLogicStateScaling = -1;
      }
      if (me._cont_control.ggCurrentLogicStateScaling != newLogicStateScaling) {
        me._cont_control.ggCurrentLogicStateScaling = newLogicStateScaling;
        me._cont_control.style.transition = "transform 0s";
        if (me._cont_control.ggCurrentLogicStateScaling == 0) {
          me._cont_control.ggParameter.sx = 0.8;
          me._cont_control.ggParameter.sy = 0.8;
          me._cont_control.style.transform = parameterToTransform(
            me._cont_control.ggParameter
          );
          skin.updateSize(me._cont_control);
        } else if (me._cont_control.ggCurrentLogicStateScaling == 1) {
          me._cont_control.ggParameter.sx = 0.85;
          me._cont_control.ggParameter.sy = 0.85;
          me._cont_control.style.transform = parameterToTransform(
            me._cont_control.ggParameter
          );
          skin.updateSize(me._cont_control);
        } else {
          me._cont_control.ggParameter.sx = 1;
          me._cont_control.ggParameter.sy = 1;
          me._cont_control.style.transform = parameterToTransform(
            me._cont_control.ggParameter
          );
          skin.updateSize(me._cont_control);
        }
      }
    };
    me._cont_control.logicBlock_scaling();
    me._cont_control.logicBlock_visible = function () {
      var newLogicStateVisible;
      if (
        player.getVariableValue("var_show_menu") == true &&
        player.getIsMobile() == true &&
        player.getViewerSize().width / player.getViewerSize().height <= 1
      ) {
        newLogicStateVisible = 0;
      } else {
        newLogicStateVisible = -1;
      }
      if (me._cont_control.ggCurrentLogicStateVisible != newLogicStateVisible) {
        me._cont_control.ggCurrentLogicStateVisible = newLogicStateVisible;
        me._cont_control.style.transition = "transform 0s";
        if (me._cont_control.ggCurrentLogicStateVisible == 0) {
          me._cont_control.style.visibility = "hidden";
          me._cont_control.ggVisible = false;
        } else {
          me._cont_control.style.visibility =
            Number(me._cont_control.style.opacity) > 0 ||
            !me._cont_control.style.opacity
              ? "inherit"
              : "hidden";
          me._cont_control.ggVisible = true;
        }
      }
    };
    me._cont_control.logicBlock_visible();
    me._cont_control.ggUpdatePosition = function (useTransition) {};
    el = me._pad_gyro = document.createElement("div");
    el.ggId = "pad_gyro";
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1, def: "" };
    el.ggVisible = false;
    el.className = "ggskin ggskin_rectangle ";
    el.ggType = "rectangle";
    hs = "";
    hs += "border : 0px solid #000000;";
    hs += "border-radius : 999px;";
    hs += "bottom : 55px;";
    hs += "cursor : pointer;";
    hs += "height : 40px;";
    hs += "position : absolute;";
    hs += "right : 5px;";
    hs += "visibility : hidden;";
    hs += "width : 40px;";
    hs += "pointer-events:auto;";
    hs +=
      "background: rgba(19, 73, 157, 0.5); box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "50% 50%";
    me._pad_gyro.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._pad_gyro.onclick = function (e) {
      player.setUseGyro(!player.getUseGyro());
    };
    me._pad_gyro.ggUpdatePosition = function (useTransition) {};
    el = me._off_gyro = document.createElement("div");
    els = me._off_gyro__img = document.createElement("img");
    els.className = "ggskin ggskin_svg";
    hs =
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIj4KIDxjaXJjbGUgY3g9IjEwIiBzdHJva2U9IndoaXRlIiBjeT0iMTAiIHI9IjkuNSIvPgogPHBhdGggZmlsbD0id2hpdGUiIGQ9Ik0xNi42ODE4IDkuMzAzMDNDMTYuNSA4LjkwOTA5IDE2LjE2NjcgOC41NzU3NiAxNS43NTc2IDguMjg3ODhDMTUuMTM2NCA3Ljg0ODQ5IDE0LjI4NzkgNy41IDEzLjI4NzkgNy4yNTc1OEMxMi44NjM2IDcuMTUxNTIgMTIuMzkzOSA3LjA3NTc2IDExLjkyNDIgN0MxMS43MTIxIDYuNSAxMS40ODQ4ID" +
      "YuMDQ1NDUgMTEuMjI3MyA1LjY1MTUyQzEwLjkwOTEgNS4xNjY2NyAxMC41NzU4IDQuNzU3NTggMTAuMjEyMSA0LjQ2OTdDMTAuMDMwMyA0LjMxODE4IDkuODMzMzMgNC4yMTIxMiA5LjYzNjM2IDQuMTIxMjFDOS40MzkzOSA0LjA0NTQ1IDkuMjI3MjcgNCA5LjAxNTE1IDRDOC45MjQyNCA0IDguODMzMzMgNC4wMTUxNSA4Ljc0MjQzIDQuMDMwM0M4LjQyNDI0IDQuMDkwOTEgOC4xMzYzNiA0LjI3MjczIDcuOTA5MDkgNC41QzcuNTYwNjEgNC44NjM2NCA3LjMzMzMzIDUuMzYzNjQgNy4xNjY2NyA1Ljk2OTdDNyA2LjU3NTc2IDYuOTI0MjQgNy4yODc4OCA2LjkyNDI0IDguMDYwNjFDNi45MjQyNCA4" +
      "LjgzMzMzIDcgOS42ODE4MiA3LjE4MTgyIDEwLjU0NTVDNy4zMDMwMyAxMS4xNjY3IDcuNDY5NyAxMS43NTc2IDcuNjUxNTIgMTIuMzAzQzYuNzg3ODggMTIuMTY2NyA2LjAxNTE1IDExLjk1NDUgNS4zOTM5NCAxMS42ODE4QzQuODMzMzMgMTEuNDM5NCA0LjM3ODc5IDExLjE1MTUgNC4wOTA5MSAxMC44NjM2QzMuOTM5MzkgMTAuNzEyMSAzLjgzMzMzIDEwLjU3NTggMy43NzI3MyAxMC40MjQyQzMuNzEyMTIgMTAuMjg3OSAzLjY2NjY3IDEwLjE1MTUgMy42NjY2NyAxMEMzLjY2NjY3IDkuODYzNjQgMy42OTY5NyA5LjcyNzI3IDMuNzcyNzMgOS41NzU3NkMzLjg5Mzk0IDkuMzMzMzMgNC4xMjEyMS" +
      "A5LjA2MDYxIDQuNDg0ODUgOC44MTgxOEM1IDguNDU0NTUgNS43NTc1OCA4LjEzNjM2IDYuNjY2NjcgNy45MDkwOUM2LjY2NjY3IDcuNjY2NjcgNi42ODE4MiA3LjQyNDI0IDYuNjk2OTcgNy4xOTY5N0M2LjEyMTIxIDcuMzMzMzMgNS42MDYwNiA3LjUgNS4xMzYzNiA3LjY5Njk3QzQuNTE1MTUgNy45Njk3IDQgOC4yODc4OCAzLjYyMTIxIDguNjY2NjdDMy40MzkzOSA4Ljg2MzY0IDMuMjcyNzMgOS4wNjA2MSAzLjE2NjY3IDkuMjg3ODhDMy4wNjA2MSA5LjUxNTE1IDMgOS43NTc1OCAzIDEwQzMgMTAuMjQyNCAzLjA2MDYxIDEwLjQ4NDggMy4xNjY2NyAxMC43MTIxQzMuMzQ4NDggMTEuMTA2MSAz" +
      "LjY4MTgyIDExLjQzOTQgNC4xMDYwNiAxMS43MjczQzQuNzI3MjcgMTIuMTY2NyA1LjU3NTc2IDEyLjUxNTIgNi41NzU3NiAxMi43NTc2QzcgMTIuODYzNiA3LjQ2OTcgMTIuOTU0NSA3LjkzOTM5IDEzLjAxNTJDOC4xNTE1MiAxMy41MTUyIDguMzc4NzkgMTMuOTY5NyA4LjYzNjM2IDE0LjM2MzZDOC45NTQ1NSAxNC44NDg1IDkuMjg3ODggMTUuMjU3NiA5LjY1MTUyIDE1LjU0NTVDOS44MzMzMyAxNS42OTcgMTAuMDMwMyAxNS44MDMgMTAuMjI3MyAxNS44OTM5QzEwLjQyNDIgMTUuOTY5NyAxMC42MzY0IDE2LjAxNTIgMTAuODQ4NSAxNi4wMTUyQzEwLjkzOTQgMTYuMDE1MiAxMS4wMzAzIDE2ID" +
      "ExLjEyMTIgMTUuOTg0OUMxMS40Mzk0IDE1LjkyNDIgMTEuNzI3MyAxNS43NDI0IDExLjk1NDUgMTUuNTE1MkMxMi4zMDMgMTUuMTUxNSAxMi41MzAzIDE0LjY1MTUgMTIuNjk3IDE0LjA0NTVDMTIuNzcyNyAxMy43NzI3IDEyLjgzMzMgMTMuNDY5NyAxMi44NjM2IDEzLjE1MTVDMTIuNzg3OSAxMy4xNjY3IDEyLjY5NyAxMy4xODE4IDEyLjYyMTIgMTMuMTk3QzEyLjQ2OTcgMTMuMjI3MyAxMi4zMTgyIDEzLjI0MjQgMTIuMTY2NyAxMy4yNzI3QzEyLjEwNjEgMTMuNjgxOCAxMiAxNC4wNjA2IDExLjg3ODggMTQuMzYzNkMxMS43NTc2IDE0LjY2NjcgMTEuNjIxMiAxNC44OTM5IDExLjQ2OTcgMTUu" +
      "MDQ1NUMxMS4zNzg4IDE1LjEzNjQgMTEuMjg3OSAxNS4xOTcgMTEuMTk3IDE1LjI0MjRMMTAuODMzMyAxMy4zOTM5QzEwLjY5NyAxMy4zOTM5IDEwLjU2MDYgMTMuNDA5MSAxMC40MjQyIDEzLjQwOTFMMTAuODAzIDE1LjMxODJDMTAuNzEyMSAxNS4zMTgyIDEwLjYwNjEgMTUuMjg3OSAxMC41IDE1LjI0MjRDMTAuMjcyNyAxNS4xNTE1IDEwLjAxNTIgMTQuOTY5NyA5Ljc3MjczIDE0LjY5N0M5LjQwOTA5IDE0LjMxODIgOS4wNjA2MSAxMy43NzI3IDguNzQyNDMgMTMuMDkwOUM5LjEzNjM2IDEzLjEyMTIgOS41NDU0NiAxMy4xMzY0IDkuOTU0NTUgMTMuMTM2NEMxMS44MTgyIDEzLjEzNjQgMTMuNS" +
      "AxMi44MTgyIDE0Ljc0MjQgMTIuMjg3OUMxNS4zNjM2IDEyLjAxNTIgMTUuODc4OCAxMS42OTcgMTYuMjU3NiAxMS4zMTgyQzE2LjQzOTQgMTEuMTIxMiAxNi42MDYxIDEwLjkyNDIgMTYuNzEyMSAxMC42OTdDMTYuODE4MiAxMC40Njk3IDE2Ljg3ODggMTAuMjI3MyAxNi44Nzg4IDkuOTg0ODVDMTYuODYzNiA5Ljc3MjczIDE2LjgwMyA5LjUzMDMgMTYuNjgxOCA5LjMwMzAzWk0xNi4wNzU4IDEwLjQzOTRDMTUuOTU0NSAxMC42ODE4IDE1LjcyNzMgMTAuOTU0NSAxNS4zNjM2IDExLjE5N0MxNC44MzMzIDExLjU3NTggMTQuMDYwNiAxMS44OTM5IDEzLjEyMTIgMTIuMTIxMkMxMi4xODE4IDEyLjM0" +
      "ODUgMTEuMDkwOSAxMi40ODQ5IDkuOTI0MjQgMTIuNDg0OUM5LjQwOTA5IDEyLjQ4NDkgOC44OTM5NCAxMi40NTQ1IDguNDA5MDkgMTIuNDA5MUM4LjE4MTgyIDExLjgwMyA3Ljk4NDg1IDExLjEzNjQgNy44NDg0OSAxMC40MjQyQzcuNjgxODIgOS41OTA5MSA3LjYwNjA2IDguODAzMDMgNy42MDYwNiA4LjA3NTc2QzcuNjA2MDYgNy4xMDYwNiA3Ljc0MjQzIDYuMjU3NTggNy45ODQ4NSA1LjY2NjY3QzguMTA2MDYgNS4zNjM2NCA4LjI0MjQzIDUuMTM2MzYgOC4zOTM5NCA0Ljk4NDg1QzguNDg0ODUgNC44OTM5NCA4LjU3NTc2IDQuODE4MTggOC42NjY2NyA0Ljc3MjczTDkuNzEyMTIgMTAuMDYwNk" +
      "wxMC4xMzY0IDEyLjIxMjFDMTAuMjcyNyAxMi4yMTIxIDEwLjQwOTEgMTIuMjEyMSAxMC41NDU1IDEyLjE5N0wxMC4xMDYxIDkuOTY5N0w5LjA2MDYxIDQuNjgxODJDOS4xNTE1MiA0LjY4MTgyIDkuMjU3NTggNC43MTIxMiA5LjM0ODQ5IDQuNzU3NThDOS41NzU3NiA0Ljg0ODQ4IDkuODMzMzMgNS4wMzAzIDEwLjA3NTggNS4zMDMwM0MxMC40Mzk0IDUuNjgxODIgMTAuNzg3OSA2LjIyNzI3IDExLjEwNjEgNi45MDkwOUMxMC43MTIxIDYuODc4NzkgMTAuMzAzIDYuODYzNjQgOS44OTM5NCA2Ljg2MzY0QzkuODQ4NDkgNi44NjM2NCA5LjgwMzAzIDYuODYzNjQgOS43NTc1OCA2Ljg2MzY0TDkuODkz" +
      "OTQgNy41NDU0NkMxMC40MDkxIDcuNTQ1NDYgMTAuOTI0MiA3LjU3NTc2IDExLjQwOTEgNy42MjEyMUMxMS42MzY0IDguMjI3MjcgMTEuODMzMyA4Ljg5Mzk0IDExLjk2OTcgOS42MDYwNkMxMi4xMzY0IDEwLjQzOTQgMTIuMjEyMSAxMS4yMjczIDEyLjIxMjEgMTEuOTU0NUMxMi4yMTIxIDExLjk4NDkgMTIuMjEyMSAxMiAxMi4yMTIxIDEyLjAxNTJDMTIuMzc4OCAxMS45ODQ4IDEyLjUzMDMgMTEuOTU0NSAxMi42ODE4IDExLjkyNDJDMTIuNzU3NiAxMS45MDkxIDEyLjgxODIgMTEuODkzOSAxMi44OTM5IDExLjg3ODhDMTIuODkzOSAxMS4xMjEyIDEyLjgwMyAxMC4zMDMgMTIuNjM2NCA5LjQ2OT" +
      "dDMTIuNTE1MiA4Ljg0ODQ5IDEyLjM0ODUgOC4yNTc1OCAxMi4xNjY3IDcuNzEyMTJDMTMuMDMwMyA3Ljg0ODQ5IDEzLjc4NzkgOC4wNjA2MSAxNC40MjQyIDguMzMzMzNDMTQuOTg0OCA4LjU3NTc2IDE1LjQzOTQgOC44NjM2NCAxNS43MjczIDkuMTUxNTJDMTUuODc4OCA5LjMwMzAzIDE1Ljk4NDkgOS40MzkzOSAxNi4wNDU1IDkuNTkwOTFDMTYuMTA2MSA5LjcyNzI3IDE2LjE1MTUgOS44NjM2NCAxNi4xNTE1IDEwLjAxNTJDMTYuMTY2NyAxMC4xNTE1IDE2LjEzNjQgMTAuMjg3OSAxNi4wNzU4IDEwLjQzOTRaIi8+CiA8bGluZSB4Mj0iNC43MDcwMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiB4" +
      "MT0iMTYuMDQxNSIgc3Ryb2tlPSJ3aGl0ZSIgeTE9IjQuNzA3MTEiIHkyPSIxNi4wNDE2Ii8+Cjwvc3ZnPgo=";
    me._off_gyro__img.setAttribute("src", hs);
    hs = "";
    hs +=
      "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;";
    els.setAttribute("style", hs);
    els["ondragstart"] = function () {
      return false;
    };
    el.appendChild(els);
    el.ggSubElement = els;
    el.ggId = "off_gyro";
    el.ggDx = 0;
    el.ggDy = 0;
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1, def: "" };
    el.ggVisible = false;
    el.className = "ggskin ggskin_svg ";
    el.ggType = "svg";
    hs = "";
    hs += "cursor : pointer;";
    hs += "height : 30px;";
    hs += "left : calc(50% - ((30px + 0px) / 2) + 0px);";
    hs += "position : absolute;";
    hs += "top : calc(50% - ((30px + 0px) / 2) + 0px);";
    hs += "visibility : hidden;";
    hs += "width : 30px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "50% 50%";
    me._off_gyro.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._off_gyro.logicBlock_visible = function () {
      var newLogicStateVisible;
      if (player.getUseGyro() == true) {
        newLogicStateVisible = 0;
      } else {
        newLogicStateVisible = -1;
      }
      if (me._off_gyro.ggCurrentLogicStateVisible != newLogicStateVisible) {
        me._off_gyro.ggCurrentLogicStateVisible = newLogicStateVisible;
        me._off_gyro.style.transition = "";
        if (me._off_gyro.ggCurrentLogicStateVisible == 0) {
          me._off_gyro.style.visibility =
            Number(me._off_gyro.style.opacity) > 0 ||
            !me._off_gyro.style.opacity
              ? "inherit"
              : "hidden";
          me._off_gyro.ggVisible = true;
        } else {
          me._off_gyro.style.visibility = "hidden";
          me._off_gyro.ggVisible = false;
        }
      }
    };
    me._off_gyro.logicBlock_visible();
    me._off_gyro.ggUpdatePosition = function (useTransition) {};
    me._pad_gyro.appendChild(me._off_gyro);
    el = me._gyro = document.createElement("div");
    els = me._gyro__img = document.createElement("img");
    els.className = "ggskin ggskin_svg";
    hs =
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIj4KIDxjaXJjbGUgY3g9IjEwIiBzdHJva2U9IndoaXRlIiBjeT0iMTAiIHI9IjkuNSIvPgogPHBhdGggZmlsbD0id2hpdGUiIGQ9Ik0xNi42ODE4IDkuMzAzMDNDMTYuNSA4LjkwOTA5IDE2LjE2NjcgOC41NzU3NiAxNS43NTc2IDguMjg3ODhDMTUuMTM2NCA3Ljg0ODQ5IDE0LjI4NzkgNy41IDEzLjI4NzkgNy4yNTc1OEMxMi44NjM2IDcuMTUxNTIgMTIuMzkzOSA3LjA3NTc2IDExLjkyNDIgN0MxMS43MTIxIDYuNSAxMS40ODQ4ID" +
      "YuMDQ1NDUgMTEuMjI3MyA1LjY1MTUyQzEwLjkwOTEgNS4xNjY2NyAxMC41NzU4IDQuNzU3NTggMTAuMjEyMSA0LjQ2OTdDMTAuMDMwMyA0LjMxODE4IDkuODMzMzMgNC4yMTIxMiA5LjYzNjM2IDQuMTIxMjFDOS40MzkzOSA0LjA0NTQ1IDkuMjI3MjcgNCA5LjAxNTE1IDRDOC45MjQyNCA0IDguODMzMzMgNC4wMTUxNSA4Ljc0MjQzIDQuMDMwM0M4LjQyNDI0IDQuMDkwOTEgOC4xMzYzNiA0LjI3MjczIDcuOTA5MDkgNC41QzcuNTYwNjEgNC44NjM2NCA3LjMzMzMzIDUuMzYzNjQgNy4xNjY2NyA1Ljk2OTdDNyA2LjU3NTc2IDYuOTI0MjQgNy4yODc4OCA2LjkyNDI0IDguMDYwNjFDNi45MjQyNCA4" +
      "LjgzMzMzIDcgOS42ODE4MiA3LjE4MTgyIDEwLjU0NTVDNy4zMDMwMyAxMS4xNjY3IDcuNDY5NyAxMS43NTc2IDcuNjUxNTIgMTIuMzAzQzYuNzg3ODggMTIuMTY2NyA2LjAxNTE1IDExLjk1NDUgNS4zOTM5NCAxMS42ODE4QzQuODMzMzMgMTEuNDM5NCA0LjM3ODc5IDExLjE1MTUgNC4wOTA5MSAxMC44NjM2QzMuOTM5MzkgMTAuNzEyMSAzLjgzMzMzIDEwLjU3NTggMy43NzI3MyAxMC40MjQyQzMuNzEyMTIgMTAuMjg3OSAzLjY2NjY3IDEwLjE1MTUgMy42NjY2NyAxMEMzLjY2NjY3IDkuODYzNjQgMy42OTY5NyA5LjcyNzI3IDMuNzcyNzMgOS41NzU3NkMzLjg5Mzk0IDkuMzMzMzMgNC4xMjEyMS" +
      "A5LjA2MDYxIDQuNDg0ODUgOC44MTgxOEM1IDguNDU0NTUgNS43NTc1OCA4LjEzNjM2IDYuNjY2NjcgNy45MDkwOUM2LjY2NjY3IDcuNjY2NjcgNi42ODE4MiA3LjQyNDI0IDYuNjk2OTcgNy4xOTY5N0M2LjEyMTIxIDcuMzMzMzMgNS42MDYwNiA3LjUgNS4xMzYzNiA3LjY5Njk3QzQuNTE1MTUgNy45Njk3IDQgOC4yODc4OCAzLjYyMTIxIDguNjY2NjdDMy40MzkzOSA4Ljg2MzY0IDMuMjcyNzMgOS4wNjA2MSAzLjE2NjY3IDkuMjg3ODhDMy4wNjA2MSA5LjUxNTE1IDMgOS43NTc1OCAzIDEwQzMgMTAuMjQyNCAzLjA2MDYxIDEwLjQ4NDggMy4xNjY2NyAxMC43MTIxQzMuMzQ4NDggMTEuMTA2MSAz" +
      "LjY4MTgyIDExLjQzOTQgNC4xMDYwNiAxMS43MjczQzQuNzI3MjcgMTIuMTY2NyA1LjU3NTc2IDEyLjUxNTIgNi41NzU3NiAxMi43NTc2QzcgMTIuODYzNiA3LjQ2OTcgMTIuOTU0NSA3LjkzOTM5IDEzLjAxNTJDOC4xNTE1MiAxMy41MTUyIDguMzc4NzkgMTMuOTY5NyA4LjYzNjM2IDE0LjM2MzZDOC45NTQ1NSAxNC44NDg1IDkuMjg3ODggMTUuMjU3NiA5LjY1MTUyIDE1LjU0NTVDOS44MzMzMyAxNS42OTcgMTAuMDMwMyAxNS44MDMgMTAuMjI3MyAxNS44OTM5QzEwLjQyNDIgMTUuOTY5NyAxMC42MzY0IDE2LjAxNTIgMTAuODQ4NSAxNi4wMTUyQzEwLjkzOTQgMTYuMDE1MiAxMS4wMzAzIDE2ID" +
      "ExLjEyMTIgMTUuOTg0OUMxMS40Mzk0IDE1LjkyNDIgMTEuNzI3MyAxNS43NDI0IDExLjk1NDUgMTUuNTE1MkMxMi4zMDMgMTUuMTUxNSAxMi41MzAzIDE0LjY1MTUgMTIuNjk3IDE0LjA0NTVDMTIuNzcyNyAxMy43NzI3IDEyLjgzMzMgMTMuNDY5NyAxMi44NjM2IDEzLjE1MTVDMTIuNzg3OSAxMy4xNjY3IDEyLjY5NyAxMy4xODE4IDEyLjYyMTIgMTMuMTk3QzEyLjQ2OTcgMTMuMjI3MyAxMi4zMTgyIDEzLjI0MjQgMTIuMTY2NyAxMy4yNzI3QzEyLjEwNjEgMTMuNjgxOCAxMiAxNC4wNjA2IDExLjg3ODggMTQuMzYzNkMxMS43NTc2IDE0LjY2NjcgMTEuNjIxMiAxNC44OTM5IDExLjQ2OTcgMTUu" +
      "MDQ1NUMxMS4zNzg4IDE1LjEzNjQgMTEuMjg3OSAxNS4xOTcgMTEuMTk3IDE1LjI0MjRMMTAuODMzMyAxMy4zOTM5QzEwLjY5NyAxMy4zOTM5IDEwLjU2MDYgMTMuNDA5MSAxMC40MjQyIDEzLjQwOTFMMTAuODAzIDE1LjMxODJDMTAuNzEyMSAxNS4zMTgyIDEwLjYwNjEgMTUuMjg3OSAxMC41IDE1LjI0MjRDMTAuMjcyNyAxNS4xNTE1IDEwLjAxNTIgMTQuOTY5NyA5Ljc3MjczIDE0LjY5N0M5LjQwOTA5IDE0LjMxODIgOS4wNjA2MSAxMy43NzI3IDguNzQyNDMgMTMuMDkwOUM5LjEzNjM2IDEzLjEyMTIgOS41NDU0NiAxMy4xMzY0IDkuOTU0NTUgMTMuMTM2NEMxMS44MTgyIDEzLjEzNjQgMTMuNS" +
      "AxMi44MTgyIDE0Ljc0MjQgMTIuMjg3OUMxNS4zNjM2IDEyLjAxNTIgMTUuODc4OCAxMS42OTcgMTYuMjU3NiAxMS4zMTgyQzE2LjQzOTQgMTEuMTIxMiAxNi42MDYxIDEwLjkyNDIgMTYuNzEyMSAxMC42OTdDMTYuODE4MiAxMC40Njk3IDE2Ljg3ODggMTAuMjI3MyAxNi44Nzg4IDkuOTg0ODVDMTYuODYzNiA5Ljc3MjczIDE2LjgwMyA5LjUzMDMgMTYuNjgxOCA5LjMwMzAzWk0xNi4wNzU4IDEwLjQzOTRDMTUuOTU0NSAxMC42ODE4IDE1LjcyNzMgMTAuOTU0NSAxNS4zNjM2IDExLjE5N0MxNC44MzMzIDExLjU3NTggMTQuMDYwNiAxMS44OTM5IDEzLjEyMTIgMTIuMTIxMkMxMi4xODE4IDEyLjM0" +
      "ODUgMTEuMDkwOSAxMi40ODQ5IDkuOTI0MjQgMTIuNDg0OUM5LjQwOTA5IDEyLjQ4NDkgOC44OTM5NCAxMi40NTQ1IDguNDA5MDkgMTIuNDA5MUM4LjE4MTgyIDExLjgwMyA3Ljk4NDg1IDExLjEzNjQgNy44NDg0OSAxMC40MjQyQzcuNjgxODIgOS41OTA5MSA3LjYwNjA2IDguODAzMDMgNy42MDYwNiA4LjA3NTc2QzcuNjA2MDYgNy4xMDYwNiA3Ljc0MjQzIDYuMjU3NTggNy45ODQ4NSA1LjY2NjY3QzguMTA2MDYgNS4zNjM2NCA4LjI0MjQzIDUuMTM2MzYgOC4zOTM5NCA0Ljk4NDg1QzguNDg0ODUgNC44OTM5NCA4LjU3NTc2IDQuODE4MTggOC42NjY2NyA0Ljc3MjczTDkuNzEyMTIgMTAuMDYwNk" +
      "wxMC4xMzY0IDEyLjIxMjFDMTAuMjcyNyAxMi4yMTIxIDEwLjQwOTEgMTIuMjEyMSAxMC41NDU1IDEyLjE5N0wxMC4xMDYxIDkuOTY5N0w5LjA2MDYxIDQuNjgxODJDOS4xNTE1MiA0LjY4MTgyIDkuMjU3NTggNC43MTIxMiA5LjM0ODQ5IDQuNzU3NThDOS41NzU3NiA0Ljg0ODQ4IDkuODMzMzMgNS4wMzAzIDEwLjA3NTggNS4zMDMwM0MxMC40Mzk0IDUuNjgxODIgMTAuNzg3OSA2LjIyNzI3IDExLjEwNjEgNi45MDkwOUMxMC43MTIxIDYuODc4NzkgMTAuMzAzIDYuODYzNjQgOS44OTM5NCA2Ljg2MzY0QzkuODQ4NDkgNi44NjM2NCA5LjgwMzAzIDYuODYzNjQgOS43NTc1OCA2Ljg2MzY0TDkuODkz" +
      "OTQgNy41NDU0NkMxMC40MDkxIDcuNTQ1NDYgMTAuOTI0MiA3LjU3NTc2IDExLjQwOTEgNy42MjEyMUMxMS42MzY0IDguMjI3MjcgMTEuODMzMyA4Ljg5Mzk0IDExLjk2OTcgOS42MDYwNkMxMi4xMzY0IDEwLjQzOTQgMTIuMjEyMSAxMS4yMjczIDEyLjIxMjEgMTEuOTU0NUMxMi4yMTIxIDExLjk4NDkgMTIuMjEyMSAxMiAxMi4yMTIxIDEyLjAxNTJDMTIuMzc4OCAxMS45ODQ4IDEyLjUzMDMgMTEuOTU0NSAxMi42ODE4IDExLjkyNDJDMTIuNzU3NiAxMS45MDkxIDEyLjgxODIgMTEuODkzOSAxMi44OTM5IDExLjg3ODhDMTIuODkzOSAxMS4xMjEyIDEyLjgwMyAxMC4zMDMgMTIuNjM2NCA5LjQ2OT" +
      "dDMTIuNTE1MiA4Ljg0ODQ5IDEyLjM0ODUgOC4yNTc1OCAxMi4xNjY3IDcuNzEyMTJDMTMuMDMwMyA3Ljg0ODQ5IDEzLjc4NzkgOC4wNjA2MSAxNC40MjQyIDguMzMzMzNDMTQuOTg0OCA4LjU3NTc2IDE1LjQzOTQgOC44NjM2NCAxNS43MjczIDkuMTUxNTJDMTUuODc4OCA5LjMwMzAzIDE1Ljk4NDkgOS40MzkzOSAxNi4wNDU1IDkuNTkwOTFDMTYuMTA2MSA5LjcyNzI3IDE2LjE1MTUgOS44NjM2NCAxNi4xNTE1IDEwLjAxNTJDMTYuMTY2NyAxMC4xNTE1IDE2LjEzNjQgMTAuMjg3OSAxNi4wNzU4IDEwLjQzOTRaIi8+Cjwvc3ZnPgo=";
    me._gyro__img.setAttribute("src", hs);
    hs = "";
    hs +=
      "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;";
    els.setAttribute("style", hs);
    els["ondragstart"] = function () {
      return false;
    };
    el.appendChild(els);
    el.ggSubElement = els;
    el.ggId = "gyro";
    el.ggDx = 0;
    el.ggDy = 0;
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1, def: "" };
    el.ggVisible = true;
    el.className = "ggskin ggskin_svg ";
    el.ggType = "svg";
    hs = "";
    hs += "cursor : pointer;";
    hs += "height : 30px;";
    hs += "left : calc(50% - ((30px + 0px) / 2) + 0px);";
    hs += "position : absolute;";
    hs += "top : calc(50% - ((30px + 0px) / 2) + 0px);";
    hs += "visibility : inherit;";
    hs += "width : 30px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "50% 50%";
    me._gyro.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._gyro.logicBlock_visible = function () {
      var newLogicStateVisible;
      if (player.getUseGyro() == true) {
        newLogicStateVisible = 0;
      } else {
        newLogicStateVisible = -1;
      }
      if (me._gyro.ggCurrentLogicStateVisible != newLogicStateVisible) {
        me._gyro.ggCurrentLogicStateVisible = newLogicStateVisible;
        me._gyro.style.transition = "";
        if (me._gyro.ggCurrentLogicStateVisible == 0) {
          me._gyro.style.visibility = "hidden";
          me._gyro.ggVisible = false;
        } else {
          me._gyro.style.visibility =
            Number(me._gyro.style.opacity) > 0 || !me._gyro.style.opacity
              ? "inherit"
              : "hidden";
          me._gyro.ggVisible = true;
        }
      }
    };
    me._gyro.logicBlock_visible();
    me._gyro.ggUpdatePosition = function (useTransition) {};
    me._pad_gyro.appendChild(me._gyro);
    me._cont_control.appendChild(me._pad_gyro);
    el = me._pad_auto_rotate = document.createElement("div");
    el.ggId = "pad_auto_rotate";
    el.ggDx = 0;
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1, def: "" };
    el.ggVisible = true;
    el.className = "ggskin ggskin_rectangle ";
    el.ggType = "rectangle";
    hs = "";
    hs += "border : 0px solid #000000;";
    hs += "bottom : 0px;";
    hs += "cursor : pointer;";
    hs += "height : 50px;";
    hs += "left : calc(50% - ((30px + 0px) / 2) + 0px);";
    hs += "position : absolute;";
    hs += "visibility : inherit;";
    hs += "width : 30px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "50% 50%";
    me._pad_auto_rotate.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._pad_auto_rotate.onclick = function (e) {
      player.toggleAutorotate();
    };
    me._pad_auto_rotate.ggUpdatePosition = function (useTransition) {};
    el = me._off_rotate = document.createElement("div");
    els = me._off_rotate__img = document.createElement("img");
    els.className = "ggskin ggskin_svg";
    hs =
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNyAzNyIgZmlsbD0ibm9uZSIgd2lkdGg9IjM3IiBoZWlnaHQ9IjM3Ij4KIDxwYXRoIGZpbGw9IndoaXRlIiBkPSJNMTguNTU1NSAwLjAwMDI1ODkzMUMxNS42NjA1IC0wLjAxNTE1NTIgMTIuNzYzOCAwLjY1NzYyMiAxMC4xMTU0IDIuMDIwNUwxMS4yNzc0IDQuMjc4NDFDMTUuNTExMSAyLjA5OTcgMjAuNDc4OCAxLjk2NTM1IDI0Ljc5ODUgMy44NzE3M0wyMy40NzgxIDUuNDYxNTFMMzEuNTUzNyA3LjcxNjc4TDI3Ljg1MzkgMC4xOTMwNEwyNi40NzI4IDEuODU2NzdDMjMuOTc2NCAwLjYzNTc2MyAyMS" +
      "4yNjY5IDAuMDE0Njk1NCAxOC41NTU1IDAuMDAwMjU4OTMxWiIvPgogPHBhdGggZmlsbD0id2hpdGUiIGQ9Ik0zNC44OTY5IDEwLjExNzJMMzIuNjM5IDExLjI3OTJDMzQuODE3NyAxNS41MTI4IDM0Ljk1MjEgMjAuNDgwNiAzMy4wNDU3IDI0LjgwMDJMMzEuNDU1OSAyMy40Nzk4TDI5LjIwMDYgMzEuNTU1NUwzNi43MjQ0IDI3Ljg1NTdMMzUuMDYwNyAyNi40NzQ1QzM3LjU4NTQgMjEuMzEyOCAzNy41MzYyIDE1LjI0NTkgMzQuODk2OSAxMC4xMTcyWiIvPgogPHBhdGggZmlsbD0id2hpdGUiIGQ9Ik01LjM2MjE0IDI5LjIwMjFMOS4wNjE5NiAzNi43MjU5TDEwLjQ0MzEgMzUuMDYyMkMxNS42MDQ5" +
      "IDM3LjU4NjkgMjEuNjcxOCAzNy41Mzc3IDI2LjgwMDUgMzQuODk4NEwyNS42Mzg1IDMyLjY0MDVDMjEuNDA0OCAzNC44MTkyIDE2LjQzNyAzNC45NTM2IDEyLjExNzQgMzMuMDQ3MkwxMy40Mzc4IDMxLjQ1NzRMNS4zNjIxNCAyOS4yMDIxWiIvPgogPHBhdGggZmlsbD0id2hpdGUiIGQ9Ik03LjcxNTQ4IDUuMzYyNzlMMC4xOTE3MzMgOS4wNjI2MUwxLjg1NTQ2IDEwLjQ0MzhDLTAuNjY5MjQxIDE1LjYwNTUgLTAuNjIwMTE3IDIxLjY3MjQgMi4wMTkxOSAyNi44MDExTDQuMjc3MTEgMjUuNjM5MUMyLjA5ODM5IDIxLjQwNTUgMS45NjQwNCAxNi40Mzc3IDMuODcwNDIgMTIuMTE4MUw1LjQ2MDIgMT" +
      "MuNDM4NUw3LjcxNTQ4IDUuMzYyNzlaIi8+CiA8cGF0aCBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlPSJ3aGl0ZSIgZD0iTTM1IDM1TDIgMiIvPgo8L3N2Zz4K";
    me._off_rotate__img.setAttribute("src", hs);
    hs = "";
    hs +=
      "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;";
    els.setAttribute("style", hs);
    els["ondragstart"] = function () {
      return false;
    };
    el.appendChild(els);
    el.ggSubElement = els;
    el.ggId = "off_rotate";
    el.ggDx = 0;
    el.ggDy = 0;
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1, def: "" };
    el.ggVisible = false;
    el.className = "ggskin ggskin_svg ";
    el.ggType = "svg";
    hs = "";
    hs += "cursor : pointer;";
    hs += "height : 35px;";
    hs += "left : calc(50% - ((35px + 0px) / 2) + 0px);";
    hs += "position : absolute;";
    hs += "top : calc(50% - ((35px + 0px) / 2) + 0px);";
    hs += "visibility : hidden;";
    hs += "width : 35px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "50% 50%";
    me._off_rotate.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._off_rotate.logicBlock_visible = function () {
      var newLogicStateVisible;
      if (player.getIsAutorotating() == true) {
        newLogicStateVisible = 0;
      } else {
        newLogicStateVisible = -1;
      }
      if (me._off_rotate.ggCurrentLogicStateVisible != newLogicStateVisible) {
        me._off_rotate.ggCurrentLogicStateVisible = newLogicStateVisible;
        me._off_rotate.style.transition = "";
        if (me._off_rotate.ggCurrentLogicStateVisible == 0) {
          me._off_rotate.style.visibility =
            Number(me._off_rotate.style.opacity) > 0 ||
            !me._off_rotate.style.opacity
              ? "inherit"
              : "hidden";
          me._off_rotate.ggVisible = true;
        } else {
          me._off_rotate.style.visibility = "hidden";
          me._off_rotate.ggVisible = false;
        }
      }
    };
    me._off_rotate.logicBlock_visible();
    me._off_rotate.ggUpdatePosition = function (useTransition) {};
    me._pad_auto_rotate.appendChild(me._off_rotate);
    el = me._rotate = document.createElement("div");
    els = me._rotate__img = document.createElement("img");
    els.className = "ggskin ggskin_svg";
    hs =
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNyAzNyIgZmlsbD0ibm9uZSIgd2lkdGg9IjM3IiBoZWlnaHQ9IjM3Ij4KIDxwYXRoIGZpbGw9IndoaXRlIiBkPSJNMTguNTU1NSAwLjAzNDQzODZDMTUuNjYwNSAwLjAxOTAyNDUgMTIuNzYzOCAwLjY5MTgwMiAxMC4xMTU0IDIuMDU0NjhMMTEuMjc3NCA0LjMxMjU5QzE1LjUxMTEgMi4xMzM4OCAyMC40Nzg4IDEuOTk5NTMgMjQuNzk4NSAzLjkwNTlMMjMuNDc4MSA1LjQ5NTY5TDMxLjU1MzcgNy43NTA5NkwyNy44NTM5IDAuMjI3MjJMMjYuNDcyOCAxLjg5MDk1QzIzLjk3NjQgMC42Njk5NDIgMjEuMj" +
      "Y2OSAwLjA0ODg3NTEgMTguNTU1NSAwLjAzNDQzODZaIi8+CiA8cGF0aCBmaWxsPSJ3aGl0ZSIgZD0iTTM0Ljg5NjkgMTAuMTUxNEwzMi42MzkgMTEuMzEzM0MzNC44MTc3IDE1LjU0NyAzNC45NTIxIDIwLjUxNDggMzMuMDQ1NyAyNC44MzQ0TDMxLjQ1NTkgMjMuNTE0TDI5LjIwMDYgMzEuNTg5N0wzNi43MjQ0IDI3Ljg4OTlMMzUuMDYwNyAyNi41MDg3QzM3LjU4NTQgMjEuMzQ2OSAzNy41MzYyIDE1LjI4MDEgMzQuODk2OSAxMC4xNTE0WiIvPgogPHBhdGggZmlsbD0id2hpdGUiIGQ9Ik01LjM2MjE1IDI5LjIzNjNMOS4wNjE5NiAzNi43NjAxTDEwLjQ0MzEgMzUuMDk2M0MxNS42MDQ5IDM3LjYy" +
      "MSAyMS42NzE4IDM3LjU3MTkgMjYuODAwNSAzNC45MzI2TDI1LjYzODUgMzIuNjc0N0MyMS40MDQ4IDM0Ljg1MzQgMTYuNDM3IDM0Ljk4NzggMTIuMTE3NCAzMy4wODE0TDEzLjQzNzggMzEuNDkxNkw1LjM2MjE1IDI5LjIzNjNaIi8+CiA8cGF0aCBmaWxsPSJ3aGl0ZSIgZD0iTTcuNzE1NDggNS4zOTY5N0wwLjE5MTczMyA5LjA5Njc4TDEuODU1NDYgMTAuNDc3OUMtMC42NjkyNDEgMTUuNjM5NyAtMC42MjAxMTcgMjEuNzA2NiAyLjAxOTE5IDI2LjgzNTNMNC4yNzcxMSAyNS42NzMzQzIuMDk4MzkgMjEuNDM5NiAxLjk2NDA0IDE2LjQ3MTkgMy44NzA0MiAxMi4xNTIyTDUuNDYwMiAxMy40NzI3TD" +
      "cuNzE1NDggNS4zOTY5N1oiLz4KPC9zdmc+Cg==";
    me._rotate__img.setAttribute("src", hs);
    hs = "";
    hs +=
      "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;";
    els.setAttribute("style", hs);
    els["ondragstart"] = function () {
      return false;
    };
    el.appendChild(els);
    el.ggSubElement = els;
    el.ggId = "rotate";
    el.ggDx = 0;
    el.ggDy = 0;
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1, def: "" };
    el.ggVisible = true;
    el.className = "ggskin ggskin_svg ";
    el.ggType = "svg";
    hs = "";
    hs += "cursor : pointer;";
    hs += "height : 30px;";
    hs += "left : calc(50% - ((30px + 0px) / 2) + 0px);";
    hs += "position : absolute;";
    hs += "top : calc(50% - ((30px + 0px) / 2) + 0px);";
    hs += "visibility : inherit;";
    hs += "width : 30px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "50% 50%";
    me._rotate.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._rotate.logicBlock_visible = function () {
      var newLogicStateVisible;
      if (player.getIsAutorotating() == true) {
        newLogicStateVisible = 0;
      } else {
        newLogicStateVisible = -1;
      }
      if (me._rotate.ggCurrentLogicStateVisible != newLogicStateVisible) {
        me._rotate.ggCurrentLogicStateVisible = newLogicStateVisible;
        me._rotate.style.transition = "";
        if (me._rotate.ggCurrentLogicStateVisible == 0) {
          me._rotate.style.visibility = "hidden";
          me._rotate.ggVisible = false;
        } else {
          me._rotate.style.visibility =
            Number(me._rotate.style.opacity) > 0 || !me._rotate.style.opacity
              ? "inherit"
              : "hidden";
          me._rotate.ggVisible = true;
        }
      }
    };
    me._rotate.logicBlock_visible();
    me._rotate.ggUpdatePosition = function (useTransition) {};
    me._pad_auto_rotate.appendChild(me._rotate);
    me._cont_control.appendChild(me._pad_auto_rotate);
    el = me._pad_full_screen = document.createElement("div");
    el.ggId = "pad_full_screen";
    el.ggDx = 0;
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1, def: "" };
    el.ggVisible = false;
    el.className = "ggskin ggskin_rectangle ";
    el.ggType = "rectangle";
    hs = "";
    hs += "border : 0px solid #000000;";
    hs += "bottom : 50px;";
    hs += "cursor : pointer;";
    hs += "height : 50px;";
    hs += "left : calc(50% - ((30px + 0px) / 2) + 0px);";
    hs += "position : absolute;";
    hs += "visibility : hidden;";
    hs += "width : 30px;";
    hs += "pointer-events:auto;";
    hs += "border-bottom: 1px solid white;";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "50% 50%";
    me._pad_full_screen.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._pad_full_screen.logicBlock_alpha = function () {
      var newLogicStateAlpha;
      if (player.getOS() == 4) {
        newLogicStateAlpha = 0;
      } else {
        newLogicStateAlpha = -1;
      }
      if (me._pad_full_screen.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
        me._pad_full_screen.ggCurrentLogicStateAlpha = newLogicStateAlpha;
        me._pad_full_screen.style.transition = "opacity 0s";
        if (me._pad_full_screen.ggCurrentLogicStateAlpha == 0) {
          me._pad_full_screen.style.visibility = me._pad_full_screen.ggVisible
            ? "inherit"
            : "hidden";
          me._pad_full_screen.style.opacity = 0.5;
        } else {
          me._pad_full_screen.style.visibility = me._pad_full_screen.ggVisible
            ? "inherit"
            : "hidden";
          me._pad_full_screen.style.opacity = 1;
        }
      }
    };
    me._pad_full_screen.logicBlock_alpha();
    me._pad_full_screen.onclick = function (e) {
      if (player.getOS() != 4) {
        player.toggleFullscreen();
      }
    };
    me._pad_full_screen.ggUpdatePosition = function (useTransition) {};
    el = me._full_screen = document.createElement("div");
    els = me._full_screen__img = document.createElement("img");
    els.className = "ggskin ggskin_svg";
    hs =
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNCAyNyIgZmlsbD0ibm9uZSIgd2lkdGg9IjM0IiBoZWlnaHQ9IjI3Ij4KIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBmaWxsPSJ3aGl0ZSIgZD0iTTMzLjY3MzYgMEgzMy40MDc5SDIyLjQ2NDZWMC41MzEzODlIMzMuMTQyMlY3LjkyNjA1SDMzLjY3MzZWMC4yNjU2OTVWMFpNMC41Nzc0NjIgNi4wMDM0NWUtMDZIMC4zMTE3NjhWMC4yNjU3MDFWNy45MjYwNUgwLjg0MzE1N1YwLjUzMTM5NUgxMS41MjA4VjYuMDAzNDVlLTA2SDAuNTc3NDYyWk0wLjU3NzUyOSAyNi" +
      "43OTRIMC4zMTE4MzRWMjYuNTI4M1YxOC44Njc5SDAuODQzMjIzVjI2LjI2MjZIMTEuNTIwOVYyNi43OTRIMC41Nzc1MjlaTTMzLjQwNzkgMjYuNzk0SDMzLjY3MzZWMjYuNTI4M1YxOC44Njc5SDMzLjE0MjJWMjYuMjYyNkgyMi40NjQ2VjI2Ljc5NEgzMy40MDc5Wk02LjQ1NzUgNi4xNDYxNEgxNy4wNDczSDE5LjQwMTNIMjguODE0M1YyMS40NDMzSDE5LjQwMTNIMTcuMDQ3M0g2LjQ1NzVWNi4xNDYxNFoiLz4KPC9zdmc+Cg==";
    me._full_screen__img.setAttribute("src", hs);
    hs = "";
    hs +=
      "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;";
    els.setAttribute("style", hs);
    els["ondragstart"] = function () {
      return false;
    };
    el.appendChild(els);
    el.ggSubElement = els;
    el.ggId = "full_screen";
    el.ggDx = 0;
    el.ggDy = 0;
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1, def: "" };
    el.ggVisible = true;
    el.className = "ggskin ggskin_svg ";
    el.ggType = "svg";
    hs = "";
    hs += "cursor : pointer;";
    hs += "height : 30px;";
    hs += "left : calc(50% - ((30px + 0px) / 2) + 0px);";
    hs += "position : absolute;";
    hs += "top : calc(50% - ((30px + 0px) / 2) + 0px);";
    hs += "visibility : inherit;";
    hs += "width : 30px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "50% 50%";
    me._full_screen.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._full_screen.logicBlock_visible = function () {
      var newLogicStateVisible;
      if (player.getIsFullscreen() == true) {
        newLogicStateVisible = 0;
      } else {
        newLogicStateVisible = -1;
      }
      if (me._full_screen.ggCurrentLogicStateVisible != newLogicStateVisible) {
        me._full_screen.ggCurrentLogicStateVisible = newLogicStateVisible;
        me._full_screen.style.transition = "";
        if (me._full_screen.ggCurrentLogicStateVisible == 0) {
          me._full_screen.style.visibility = "hidden";
          me._full_screen.ggVisible = false;
        } else {
          me._full_screen.style.visibility =
            Number(me._full_screen.style.opacity) > 0 ||
            !me._full_screen.style.opacity
              ? "inherit"
              : "hidden";
          me._full_screen.ggVisible = true;
        }
      }
    };
    me._full_screen.logicBlock_visible();
    me._full_screen.ggUpdatePosition = function (useTransition) {};
    me._pad_full_screen.appendChild(me._full_screen);
    el = me._svg_1 = document.createElement("div");
    els = me._svg_1__img = document.createElement("img");
    els.className = "ggskin ggskin_svg";
    hs =
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNSAyOSIgZmlsbD0ibm9uZSIgd2lkdGg9IjM1IiBoZWlnaHQ9IjI5Ij4KIDxyZWN0IHk9IjgiIHg9IjciIGZpbGw9IndoaXRlIiB3aWR0aD0iMjAiIGhlaWdodD0iMTMiLz4KIDxwYXRoIHN0cm9rZS13aWR0aD0iMC41IiBzdHJva2U9IndoaXRlIiBkPSJNNiAxVjdIMCIvPgogPHBhdGggc3Ryb2tlLXdpZHRoPSIwLjUiIHN0cm9rZT0id2hpdGUiIGQ9Ik0wLjAxMzU5OTEgMjJMNi4wMTM1OCAyMi4wMTM2TDUuOTk5OTggMjguMDEzNiIvPgogPHBhdGggc3Ryb2tlLXdpZHRoPSIwLjUiIHN0cm9rZT0id2" +
      "hpdGUiIGQ9Ik0yOC4wMzIzIDAuOTk5OTlMMjguMDAwMSA2Ljk5OTlMMzQgNy4wMzIxNCIvPgogPHBhdGggc3Ryb2tlLXdpZHRoPSIwLjUiIHN0cm9rZT0id2hpdGUiIGQ9Ik0yOC4wMDY4IDI4LjAwNjhMMjggMjIuMDA2OUwzNCAyMiIvPgo8L3N2Zz4K";
    me._svg_1__img.setAttribute("src", hs);
    hs = "";
    hs +=
      "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;";
    els.setAttribute("style", hs);
    els["ondragstart"] = function () {
      return false;
    };
    el.appendChild(els);
    el.ggSubElement = els;
    el.ggId = "Svg 1";
    el.ggDx = 0;
    el.ggDy = 0;
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1, def: "" };
    el.ggVisible = false;
    el.className = "ggskin ggskin_svg ";
    el.ggType = "svg";
    hs = "";
    hs += "height : 30px;";
    hs += "left : calc(50% - ((30px + 0px) / 2) + 0px);";
    hs += "position : absolute;";
    hs += "top : calc(50% - ((30px + 0px) / 2) + 0px);";
    hs += "visibility : hidden;";
    hs += "width : 30px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "50% 50%";
    me._svg_1.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._svg_1.logicBlock_visible = function () {
      var newLogicStateVisible;
      if (player.getIsFullscreen() == true) {
        newLogicStateVisible = 0;
      } else {
        newLogicStateVisible = -1;
      }
      if (me._svg_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
        me._svg_1.ggCurrentLogicStateVisible = newLogicStateVisible;
        me._svg_1.style.transition = "";
        if (me._svg_1.ggCurrentLogicStateVisible == 0) {
          me._svg_1.style.visibility =
            Number(me._svg_1.style.opacity) > 0 || !me._svg_1.style.opacity
              ? "inherit"
              : "hidden";
          me._svg_1.ggVisible = true;
        } else {
          me._svg_1.style.visibility = "hidden";
          me._svg_1.ggVisible = false;
        }
      }
    };
    me._svg_1.logicBlock_visible();
    me._svg_1.ggUpdatePosition = function (useTransition) {};
    me._pad_full_screen.appendChild(me._svg_1);
    me._cont_control.appendChild(me._pad_full_screen);
    el = me._pad_vr = document.createElement("div");
    el.ggId = "pad_vr";
    el.ggDx = 0;
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1, def: "" };
    el.ggVisible = true;
    el.className = "ggskin ggskin_rectangle ";
    el.ggType = "rectangle";
    hs = "";
    hs += "border : 0px solid #000000;";
    hs += "cursor : pointer;";
    hs += "height : 50px;";
    hs += "left : calc(50% - ((30px + 0px) / 2) + 0px);";
    hs += "position : absolute;";
    hs += "top : 150px;";
    hs += "visibility : inherit;";
    hs += "width : 30px;";
    hs += "pointer-events:auto;";
    hs += "border-bottom: 1px solid white;";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "50% 50%";
    me._pad_vr.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._pad_vr.logicBlock_alpha = function () {
      var newLogicStateAlpha;
      if (player.getIsMobile() == true || player.getOS() == 4) {
        newLogicStateAlpha = 0;
      } else {
        newLogicStateAlpha = -1;
      }
      if (me._pad_vr.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
        me._pad_vr.ggCurrentLogicStateAlpha = newLogicStateAlpha;
        me._pad_vr.style.transition = "opacity 0s";
        if (me._pad_vr.ggCurrentLogicStateAlpha == 0) {
          me._pad_vr.style.visibility = me._pad_vr.ggVisible
            ? "inherit"
            : "hidden";
          me._pad_vr.style.opacity = 0.5;
        } else {
          me._pad_vr.style.visibility = me._pad_vr.ggVisible
            ? "inherit"
            : "hidden";
          me._pad_vr.style.opacity = 1;
        }
      }
    };
    me._pad_vr.logicBlock_alpha();
    me._pad_vr.onclick = function (e) {
      if (player.hasVR() == true && player.getOS() != 4) {
        player.enterVR();
      }
    };
    me._pad_vr.ggUpdatePosition = function (useTransition) {};
    el = me._vr = document.createElement("div");
    els = me._vr__img = document.createElement("img");
    els.className = "ggskin ggskin_svg";
    hs =
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzOSAyNSIgZmlsbD0ibm9uZSIgd2lkdGg9IjM5IiBoZWlnaHQ9IjI1Ij4KIDxwYXRoIHN0cm9rZS13aWR0aD0iMi4wODkyOSIgc3Ryb2tlPSJ3aGl0ZSIgZD0iTTMzLjc3NjggNC45MTczOVY1Ljk2MjAzSDM0LjgyMTRIMzcuNjA3MUMzNy43MzEyIDUuOTYyMDMgMzcuNzgzNyA2LjAwMDgyIDM3LjgyMDkgNi4wNDQ2QzM3Ljg3MSA2LjEwMzU5IDM3Ljk1NTQgNi4yNTYxMSAzNy45NTU0IDYuNTU2NTJWMTguMDMwNEMzNy45NTU0IDE4LjMzMDggMzcuODcxIDE4LjQ4MzQgMzcuODIwOSAxOC41NDI0QzM3Lj" +
      "c4MzcgMTguNTg2MSAzNy43MzEyIDE4LjYyNDkgMzcuNjA3MSAxOC42MjQ5SDM0LjgyMTRIMzMuNzc2OFYxOS42Njk2QzMzLjc3NjggMjIuMDQ1MSAzMi4yODA4IDIzLjU0MjMgMzAuNjQyOSAyMy41NDIzSDI0LjkzMjFDMjQuMTc0NSAyMy41NDIzIDIzLjQ3NTMgMjMuMjI2MyAyMi44MDMyIDIyLjQzNTNMMjEuMTMxOCAyMC40NjgzQzIwLjY4MjEgMTkuOTM5MiAyMC4wNTU0IDE5LjYwODQgMTkuMzYwNyAxOS42MDg0QzE4LjY2NiAxOS42MDg0IDE4LjAzOTMgMTkuOTM5MiAxNy41ODk3IDIwLjQ2ODNMMTUuOTE4MiAyMi40MzUzTDE1Ljg4ODQgMjIuNDcwNEwxNS44NjE3IDIyLjUwOEMxNS4zODI1" +
      "IDIzLjE4NDggMTQuNjAzNSAyMy41NDIzIDEzLjc4OTMgMjMuNTQyM0g4LjM1NzE0QzYuNzE5MjMgMjMuNTQyMyA1LjIyMzIxIDIyLjA0NTEgNS4yMjMyMSAxOS42Njk2VjE4LjYyNDlINC4xNzg1N0gxLjM5Mjg2QzEuMjY4ODMgMTguNjI0OSAxLjIxNjI5IDE4LjU4NjEgMS4xNzkwOSAxOC41NDI0QzEuMTI4OTYgMTguNDgzNCAxLjA0NDY0IDE4LjMzMDggMS4wNDQ2NCAxOC4wMzA0VjYuNTU2NTJDMS4wNDQ2NCA2LjI1NjExIDEuMTI4OTYgNi4xMDM1OSAxLjE3OTA5IDYuMDQ0NkMxLjIxNjI5IDYuMDAwODIgMS4yNjg4MyA1Ljk2MjAzIDEuMzkyODYgNS45NjIwM0g0LjE3ODU3SDUuMjIzMjFWNC" +
      "45MTczOUM1LjIyMzIxIDIuNTQxODcgNi43MTkyMyAxLjA0NDY0IDguMzU3MTQgMS4wNDQ2NEgzMC42NDI5QzMyLjI4MDggMS4wNDQ2NCAzMy43NzY4IDIuNTQxODcgMzMuNzc2OCA0LjkxNzM5Wk0xMi41MzU3IDEwLjg3OTRIMjYuNDY0M0MyNy4xNzYgMTAuODc5NCAyNy44MTk5IDEwLjU5MDQgMjguMjcwMiAxMC4wNjA1QzI4LjcwNzUgOS41NDU3NiAyOC45MDE4IDguODc4NzIgMjguOTAxOCA4LjE5NTY1QzI4LjkwMTggNy41MTI1OCAyOC43MDc1IDYuODQ1NTQgMjguMjcwMiA2LjMzMDgzQzI3LjgxOTkgNS44MDA5MiAyNy4xNzYgNS41MTE4OCAyNi40NjQzIDUuNTExODhIMTIuNTM1N0MxMS44" +
      "MjQgNS41MTE4OCAxMS4xODAxIDUuODAwOTIgMTAuNzI5OCA2LjMzMDgzQzEwLjI5MjUgNi44NDU1NCAxMC4wOTgyIDcuNTEyNTggMTAuMDk4MiA4LjE5NTY1QzEwLjA5ODIgOC44Nzg3MiAxMC4yOTI1IDkuNTQ1NzYgMTAuNzI5OCAxMC4wNjA1QzExLjE4MDEgMTAuNTkwNCAxMS44MjQgMTAuODc5NCAxMi41MzU3IDEwLjg3OTRaIi8+Cjwvc3ZnPgo=";
    me._vr__img.setAttribute("src", hs);
    hs = "";
    hs +=
      "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;";
    els.setAttribute("style", hs);
    els["ondragstart"] = function () {
      return false;
    };
    el.appendChild(els);
    el.ggSubElement = els;
    el.ggId = "vr";
    el.ggDx = 0;
    el.ggDy = 0;
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1, def: "" };
    el.ggVisible = true;
    el.className = "ggskin ggskin_svg ";
    el.ggType = "svg";
    hs = "";
    hs += "cursor : pointer;";
    hs += "height : 30px;";
    hs += "left : calc(50% - ((30px + 0px) / 2) + 0px);";
    hs += "position : absolute;";
    hs += "top : calc(50% - ((30px + 0px) / 2) + 0px);";
    hs += "visibility : inherit;";
    hs += "width : 30px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "50% 50%";
    me._vr.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._vr.ggUpdatePosition = function (useTransition) {};
    me._pad_vr.appendChild(me._vr);
    me._cont_control.appendChild(me._pad_vr);
    el = me._pad_sound = document.createElement("div");
    el.ggId = "pad_sound";
    el.ggDx = 0;
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1, def: "" };
    el.ggVisible = true;
    el.className = "ggskin ggskin_rectangle ";
    el.ggType = "rectangle";
    hs = "";
    hs += "border : 0px solid #000000;";
    hs += "cursor : pointer;";
    hs += "height : 50px;";
    hs += "left : calc(50% - ((30px + 0px) / 2) + 0px);";
    hs += "position : absolute;";
    hs += "top : 100px;";
    hs += "visibility : inherit;";
    hs += "width : 30px;";
    hs += "pointer-events:auto;";
    hs += "border-bottom: 1px solid white;";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "50% 50%";
    me._pad_sound.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._pad_sound.onclick = function (e) {
      player.setVariableValue("sound", !player.getVariableValue("sound"));
    };
    me._pad_sound.ggUpdatePosition = function (useTransition) {};
    el = me._mute = document.createElement("div");
    els = me._mute__img = document.createElement("img");
    els.className = "ggskin ggskin_svg";
    hs =
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNiAzMiIgZmlsbD0ibm9uZSIgd2lkdGg9IjM2IiBoZWlnaHQ9IjMyIj4KIDxwYXRoIHN0cm9rZS13aWR0aD0iMi4wNjg1MyIgc3Ryb2tlPSJ3aGl0ZSIgZD0iTTIzLjQ4NjkgMjMuNjMzNEwyMy40ODg5IDIzLjYzNTVMMjMuNzA0MSAyMy44Njk2QzIzLjcwNDIgMjMuODY5NyAyMy43MDQzIDIzLjg2OTggMjMuNzA0NCAyMy44Njk5QzIzLjgyMDUgMjMuOTk1NyAyMy45NTk3IDI0LjA0ODkgMjQuMDg1OSAyNC4wNDg5QzI0LjA5MTUgMjQuMDQ4OSAyNC4wOTgzIDI0LjA0ODcgMjQuMTA3MyAyNC4wNDgzTD" +
      "IzLjQ4NjkgMjMuNjMzNFpNMjMuNDg2OSAyMy42MzM0QzIzLjI1MzQgMjMuMzgwOCAyMy4yMTU3IDIyLjk0NDYgMjMuNDI0OSAyMi42MzkxTDIzLjQyNSAyMi42Mzg5QzI0Ljc1NjEgMjAuNjk0MSAyNS40NTQzIDE4LjM5MzggMjUuNDU0MyAxNS45OTNDMjUuNDU0MyAxMy40MTI5IDI0LjY2MTYgMTAuOTc1NyAyMy4xNTA3IDguOTU4ODZMMjMuMTUwMiA4Ljk1ODIxQzIyLjkyMzggOC42NTY0MiAyMi45NTE0IDguMjAyMDUgMjMuMTk0MSA3LjkzOTI3TDIzLjE5NDkgNy45MzgzNkwyMy40MSA3LjcwNDg5QzIzLjQxMDIgNy43MDQ3MiAyMy40MTAzIDcuNzA0NTUgMjMuNDEwNSA3LjcwNDM3QzIzLjU0" +
      "MjUgNy41NjE1OSAyMy42Nzk2IDcuNTE3MjcgMjMuODA2NSA3LjUyNTQ3TDIzLjgwNjUgNy41MjU1MkwyMy44MTY5IDcuNTI2MDlDMjMuOTUyIDcuNTMzNDYgMjQuMTAyNiA3LjYwMzQzIDI0LjIxODQgNy43NTY4MUMyNS45ODEgMTAuMDk0MiAyNi45MTgxIDEyLjkzNzYgMjYuOTE4MSAxNS45OTM0QzI2LjkxODEgMTguODM3MyAyNi4wODk0IDIxLjUzMTggMjQuNTI5OCAyMy43OTI5QzI0LjQxNDQgMjMuOTU5NSAyNC4yNjAzIDI0LjAzNjMgMjQuMTI0MSAyNC4wNDczTDIzLjQ4NjkgMjMuNjMzNFpNMS44MDg1NSAyMS4yMzA1SDYuNTEyOTZIMS44MDg1NVpNMS44MDg1NSAyMS4yMzA1QzAuOTE2Mz" +
      "kxIDIxLjIzMTMgMC4xOTI4NzEgMjAuNDQ2OSAwLjE5Mjg3MSAxOS40ODAxVjEyLjUwNDZDMC4xOTI4NzEgMTEuNTM3NCAwLjkxNjM5MSAxMC43NTMzIDEuODA4NTUgMTAuNzUzM0g2LjUxMzM1TDEuODA4NTUgMjEuMjMwNVpNMTYuNTk1NSAyOC40NzY2TDE2LjU5MjMgMjguNDc4MkMxNi41MjEzIDI4LjUxNDYgMTYuNDQ4NSAyOC41MzEgMTYuMzc2OSAyOC41MzFDMTYuMjY3NiAyOC41MzEgMTYuMTQ2NiAyOC40OTExIDE2LjAzNzIgMjguMzkyN0wxNi4wMzY5IDI4LjM5MjVMNy4yMDM5OCAyMC40NjFMNi45MDkxOCAyMC4xOTYySDYuNTEyOTZIMS44MDg1NUgxLjgwNzU5QzEuNTY0NTcgMjAuMTk2" +
      "NSAxLjIyNzE0IDE5Ljk1NjEgMS4yMjcxNCAxOS40ODAxVjEyLjUwNDZDMS4yMjcxNCAxMi4wMjg2IDEuNTY0NDEgMTEuNzg3NiAxLjgwODU1IDExLjc4NzZINi41MTMzNUg2LjkwOTU2TDcuMjA0MzYgMTEuNTIyOUwxNi4wMzczIDMuNTkxMzZMMTYuMDM3NCAzLjU5MTI4QzE2LjIxMDQgMy40MzU4NiAxNi40MTg5IDMuNDE3NDUgMTYuNTkyOSAzLjUwNjU3TDE2LjU5NTYgMy41MDc5M0MxNi43ODcxIDMuNjA1MyAxNi45NTkgMy44NDgzMSAxNi45NTkgNC4xNzAyNkwxNi45NTg3IDI3LjgxNDRDMTYuOTU4NyAyOC4xMzcgMTYuNzg2OSAyOC4zNzkzIDE2LjU5NTUgMjguNDc2NlpNMjkuMDUyNSAyOS" +
      "42NjY1TDI5LjA1MjIgMjkuNjY2M0MyOC44MDYzIDI5LjM5OTkgMjguNzgyMyAyOC45Mzc5IDI5LjAxNTQgMjguNjM3QzMxLjc2NjYgMjUuMDkxMyAzMy4yNzM5IDIwLjYwMTUgMzMuMjczOSAxNS45OTNDMzMuMjczOSAxMS4yMDA3IDMxLjY2MDIgNi41NzQ5NCAyOC43MTQyIDIuOTcwNDdDMjguNDcxNSAyLjY3MzEzIDI4LjQ4ODMgMi4yMDE3OSAyOC43Mzg5IDEuOTI4NTdDMjguNzM5MSAxLjkyODM5IDI4LjczOTMgMS45MjgyIDI4LjczOTQgMS45MjgwMkwyOC45NTA2IDEuNjk4NzlMMjguOTUxNyAxLjY5NzYzQzI5LjA4IDEuNTU3OSAyOS4yMDQ4IDEuNTEyMTggMjkuMzQ1NCAxLjUxNzA0TDI5" +
      "LjM0OTMgMS41MTcxNkMyOS40NzkgMS41MjExNSAyOS42MjU0IDEuNTgzNzkgMjkuNzQyMyAxLjcyNjM1QzMyLjk1NyA1LjY0ODU2IDM0LjczNzMgMTAuNzE0NyAzNC43MzczIDE1Ljk5M1YxNS45OTMxQzM0LjczOCAyMS4wNzAzIDMzLjA3MzYgMjUuOTkyOSAzMC4wNjY3IDI5Ljg1MzFDMjkuOTUwOCAzMC4wMDE0IDI5LjgwNDMgMzAuMDY4MyAyOS42NzE1IDMwLjA3NTVMMjkuNjUyOSAzMC4wNzYxQzI5LjY0NzkgMzAuMDc2MyAyOS42NDY1IDMwLjA3NjMgMjkuNjQ3MyAzMC4wNzYzQzI5LjUyMDUgMzAuMDc2MyAyOS4zODE1IDMwLjAyMzEgMjkuMjY0NyAyOS44OTY1TDI4LjUwNDYgMzAuNTk3OU" +
      "wyOS4yNjQ3IDI5Ljg5NjVMMjkuMDUyNSAyOS42NjY1WiIvPgo8L3N2Zz4K";
    me._mute__img.setAttribute("src", hs);
    hs = "";
    hs +=
      "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;";
    els.setAttribute("style", hs);
    els["ondragstart"] = function () {
      return false;
    };
    el.appendChild(els);
    el.ggSubElement = els;
    el.ggId = "mute";
    el.ggDx = 0;
    el.ggDy = 0;
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1, def: "" };
    el.ggVisible = false;
    el.className = "ggskin ggskin_svg ";
    el.ggType = "svg";
    hs = "";
    hs += "height : 35px;";
    hs += "left : calc(50% - ((35px + 0px) / 2) + 0px);";
    hs += "position : absolute;";
    hs += "top : calc(50% - ((35px + 0px) / 2) + 0px);";
    hs += "visibility : hidden;";
    hs += "width : 35px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "50% 50%";
    me._mute.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._mute.logicBlock_visible = function () {
      var newLogicStateVisible;
      if (player.getVariableValue("sound") == false) {
        newLogicStateVisible = 0;
      } else {
        newLogicStateVisible = -1;
      }
      if (me._mute.ggCurrentLogicStateVisible != newLogicStateVisible) {
        me._mute.ggCurrentLogicStateVisible = newLogicStateVisible;
        me._mute.style.transition = "";
        if (me._mute.ggCurrentLogicStateVisible == 0) {
          me._mute.style.visibility =
            Number(me._mute.style.opacity) > 0 || !me._mute.style.opacity
              ? "inherit"
              : "hidden";
          me._mute.ggVisible = true;
        } else {
          me._mute.style.visibility = "hidden";
          me._mute.ggVisible = false;
        }
      }
    };
    me._mute.logicBlock_visible();
    me._mute.onclick = function (e) {
      player.setVolume("_main", 0);
    };
    me._mute.ggUpdatePosition = function (useTransition) {};
    me._pad_sound.appendChild(me._mute);
    el = me._sound = document.createElement("div");
    els = me._sound__img = document.createElement("img");
    els.className = "ggskin ggskin_svg";
    hs =
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNiAzMSIgZmlsbD0ibm9uZSIgd2lkdGg9IjM2IiBoZWlnaHQ9IjMxIj4KIDxwYXRoIHN0cm9rZS13aWR0aD0iMi4wNjg1MyIgc3Ryb2tlPSJ3aGl0ZSIgZD0iTTIzLjI5NCAyMy4xNTFMMjMuMjk2IDIzLjE1MzFMMjMuNTExMiAyMy4zODcyQzIzLjUxMTMgMjMuMzg3MyAyMy41MTE0IDIzLjM4NzQgMjMuNTExNSAyMy4zODc0QzIzLjYyNzYgMjMuNTEzMyAyMy43NjY4IDIzLjU2NjUgMjMuODkzIDIzLjU2NjVDMjMuODk4NiAyMy41NjY1IDIzLjkwNTQgMjMuNTY2MyAyMy45MTQ0IDIzLjU2NTlMMjMuMj" +
      "k0IDIzLjE1MVpNMjMuMjk0IDIzLjE1MUMyMy4wNjA1IDIyLjg5ODQgMjMuMDIyOSAyMi40NjIxIDIzLjIzMiAyMi4xNTY2TDIzLjIzMjEgMjIuMTU2NUMyNC41NjMyIDIwLjIxMTcgMjUuMjYxNSAxNy45MTE0IDI1LjI2MTUgMTUuNTEwNUMyNS4yNjE1IDEyLjkzMDQgMjQuNDY4NyAxMC40OTMzIDIyLjk1NzggOC40NzY0NEwyMi45NTc0IDguNDc1NzlDMjIuNzMwOSA4LjE3NCAyMi43NTg2IDcuNzE5NjMgMjMuMDAxMiA3LjQ1Njg1TDIzLjAwMjEgNy40NTU5M0wyMy4yMTcxIDcuMjIyNDdDMjMuMjE3MyA3LjIyMjMgMjMuMjE3NCA3LjIyMjEzIDIzLjIxNzYgNy4yMjE5NUMyMy4zNDk2IDcuMDc5" +
      "MTYgMjMuNDg2OCA3LjAzNDg1IDIzLjYxMzcgNy4wNDMwNUwyMy42MTM3IDcuMDQzMUwyMy42MjQgNy4wNDM2N0MyMy43NTkxIDcuMDUxMDMgMjMuOTA5NyA3LjEyMTAxIDI0LjAyNTUgNy4yNzQzOUMyNS43ODgxIDkuNjExNzUgMjYuNzI1MyAxMi40NTUxIDI2LjcyNTMgMTUuNTExQzI2LjcyNTMgMTguMzU0OSAyNS44OTY1IDIxLjA0OTQgMjQuMzM2OSAyMy4zMTA1QzI0LjIyMTUgMjMuNDc3MSAyNC4wNjc1IDIzLjU1MzkgMjMuOTMxMyAyMy41NjQ4TDIzLjI5NCAyMy4xNTFaTTEuNjE1NjggMjAuNzQ4MUg2LjMyMDA5SDEuNjE1NjhaTTEuNjE1NjggMjAuNzQ4MUMwLjcyMzUyIDIwLjc0ODkgMC" +
      "AxOS45NjQ1IDAgMTguOTk3N1YxMi4wMjIyQzAgMTEuMDU1IDAuNzIzNTIgMTAuMjcwOSAxLjYxNTY4IDEwLjI3MDlINi4zMjA0OEwxLjYxNTY4IDIwLjc0ODFaTTE2LjQwMjYgMjcuOTk0MkwxNi4zOTk1IDI3Ljk5NThDMTYuMzI4NCAyOC4wMzIyIDE2LjI1NTYgMjguMDQ4NiAxNi4xODQgMjguMDQ4NkMxNi4wNzQ3IDI4LjA0ODYgMTUuOTUzNyAyOC4wMDg3IDE1Ljg0NDMgMjcuOTEwM0wxNS44NDQgMjcuOTEwMUw3LjAxMTExIDE5Ljk3ODVMNi43MTYzMSAxOS43MTM4SDYuMzIwMDlIMS42MTU2OEgxLjYxNDcyQzEuMzcxNyAxOS43MTQgMS4wMzQyNiAxOS40NzM2IDEuMDM0MjYgMTguOTk3N1Yx" +
      "Mi4wMjIyQzEuMDM0MjYgMTEuNTQ2MiAxLjM3MTU0IDExLjMwNTIgMS42MTU2OCAxMS4zMDUySDYuMzIwNDhINi43MTY2OUw3LjAxMTQ5IDExLjA0MDVMMTUuODQ0NCAzLjEwODk0TDE1Ljg0NDUgMy4xMDg4NkMxNi4wMTc1IDIuOTUzNDQgMTYuMjI2MSAyLjkzNTAzIDE2LjQwMDEgMy4wMjQxNUwxNi40MDI3IDMuMDI1NTFDMTYuNTk0MiAzLjEyMjg3IDE2Ljc2NjIgMy4zNjU4OSAxNi43NjYyIDMuNjg3ODRMMTYuNzY1OCAyNy4zMzJDMTYuNzY1OCAyNy42NTQ2IDE2LjU5NCAyNy44OTY5IDE2LjQwMjYgMjcuOTk0MlpNMjguODU5NiAyOS4xODQxTDI4Ljg1OTQgMjkuMTgzOEMyOC42MTM0IDI4Lj" +
      "kxNzUgMjguNTg5NCAyOC40NTU1IDI4LjgyMjYgMjguMTU0NkMzMS41NzM4IDI0LjYwODkgMzMuMDgxIDIwLjExOTEgMzMuMDgxIDE1LjUxMDVDMzMuMDgxIDEwLjcxODMgMzEuNDY3NCA2LjA5MjUyIDI4LjUyMTQgMi40ODgwNUMyOC4yNzg2IDIuMTkwNyAyOC4yOTU0IDEuNzE5MzcgMjguNTQ2MSAxLjQ0NjE1QzI4LjU0NjIgMS40NDU5NyAyOC41NDY0IDEuNDQ1NzggMjguNTQ2NiAxLjQ0NTZMMjguNzU3NyAxLjIxNjM3TDI4Ljc1ODggMS4yMTUyMUMyOC44ODcxIDEuMDc1NDggMjkuMDExOSAxLjAyOTc2IDI5LjE1MjYgMS4wMzQ2MkwyOS4xNTY0IDEuMDM0NzRDMjkuMjg2MiAxLjAzODcyIDI5" +
      "LjQzMjUgMS4xMDEzNiAyOS41NDk0IDEuMjQzOTNDMzIuNzY0MiA1LjE2NjE0IDM0LjU0NDQgMTAuMjMyMyAzNC41NDQ0IDE1LjUxMDVWMTUuNTEwN0MzNC41NDUyIDIwLjU4NzkgMzIuODgwNyAyNS41MTA1IDI5Ljg3MzggMjkuMzcwNkMyOS43NTc5IDI5LjUxOSAyOS42MTE0IDI5LjU4NTggMjkuNDc4NyAyOS41OTMxTDI5LjQ2IDI5LjU5MzdDMjkuNDU1IDI5LjU5MzkgMjkuNDUzNiAyOS41OTM4IDI5LjQ1NDQgMjkuNTkzOEMyOS4zMjc2IDI5LjU5MzggMjkuMTg4NyAyOS41NDA3IDI5LjA3MTggMjkuNDE0MUwyOC4zMTE3IDMwLjExNTVMMjkuMDcxOCAyOS40MTQxTDI4Ljg1OTYgMjkuMTg0MV" +
      "oiLz4KIDxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2U9IndoaXRlIiBkPSJNMzQgMjlMMiAyIi8+Cjwvc3ZnPgo=";
    me._sound__img.setAttribute("src", hs);
    hs = "";
    hs +=
      "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;";
    els.setAttribute("style", hs);
    els["ondragstart"] = function () {
      return false;
    };
    el.appendChild(els);
    el.ggSubElement = els;
    el.ggId = "sound";
    el.ggDx = 0;
    el.ggDy = 0;
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1, def: "" };
    el.ggVisible = true;
    el.className = "ggskin ggskin_svg ";
    el.ggType = "svg";
    hs = "";
    hs += "cursor : pointer;";
    hs += "height : 35px;";
    hs += "left : calc(50% - ((35px + 0px) / 2) + 0px);";
    hs += "position : absolute;";
    hs += "top : calc(50% - ((35px + 0px) / 2) + 0px);";
    hs += "visibility : inherit;";
    hs += "width : 35px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "50% 50%";
    me._sound.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._sound.logicBlock_visible = function () {
      var newLogicStateVisible;
      if (player.getVariableValue("sound") == false) {
        newLogicStateVisible = 0;
      } else {
        newLogicStateVisible = -1;
      }
      if (me._sound.ggCurrentLogicStateVisible != newLogicStateVisible) {
        me._sound.ggCurrentLogicStateVisible = newLogicStateVisible;
        me._sound.style.transition = "";
        if (me._sound.ggCurrentLogicStateVisible == 0) {
          me._sound.style.visibility = "hidden";
          me._sound.ggVisible = false;
        } else {
          me._sound.style.visibility =
            Number(me._sound.style.opacity) > 0 || !me._sound.style.opacity
              ? "inherit"
              : "hidden";
          me._sound.ggVisible = true;
        }
      }
    };
    me._sound.logicBlock_visible();
    me._sound.onclick = function (e) {
      player.setVolume("_main", 1);
    };
    me._sound.ggUpdatePosition = function (useTransition) {};
    me._pad_sound.appendChild(me._sound);
    me._cont_control.appendChild(me._pad_sound);
    el = me._pad_info = document.createElement("div");
    el.ggId = "pad_info";
    el.ggDx = 0;
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1, def: "" };
    el.ggVisible = true;
    el.className = "ggskin ggskin_rectangle ";
    el.ggType = "rectangle";
    hs = "";
    hs += "border : 0px solid #000000;";
    hs += "cursor : pointer;";
    hs += "height : 50px;";
    hs += "left : calc(50% - ((30px + 0px) / 2) + 0px);";
    hs += "position : absolute;";
    hs += "top : 50px;";
    hs += "visibility : inherit;";
    hs += "width : 30px;";
    hs += "pointer-events:auto;";
    hs += "border-bottom: 1px solid white;";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "50% 50%";
    me._pad_info.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._pad_info.onclick = function (e) {
      player.setVariableValue("open_info", true);
      player.setVariableValue("var_show_menu", false);
    };
    me._pad_info.ggUpdatePosition = function (useTransition) {};
    el = me._info = document.createElement("div");
    els = me._info__img = document.createElement("img");
    els.className = "ggskin ggskin_svg";
    hs =
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNyAyOSIgZmlsbD0ibm9uZSIgd2lkdGg9IjE3IiBoZWlnaHQ9IjI5Ij4KIDxwYXRoIGZpbGw9IndoaXRlIiBkPSJNNy4wMTQ3NiAwQzUuMDcxOSAwIDMuNTk5NTggMS40NzA4NSAzLjU5OTU4IDMuNDExNzZDMy41OTk1OCA1LjM1MjY4IDUuMDcxOSA2LjgyMzUzIDcuMDE0NzYgNi44MjM1M0M4Ljk1NzYyIDYuODIzNTMgMTAuNDI5OSA1LjM1MjY4IDEwLjQyOTkgMy40MTE3NkMxMC40Mjk5IDEuNDcwODUgOC45NTc2MiAwIDcuMDE0NzYgMFpNMCA5LjU5MDg1VjEyLjAxN0MwIDEyLjAxNyA0Ljg1NzE0ID" +
      "EwLjk1NTYgNC44NTcxNCAxNS44MDc4VjIxLjI5OTJDNC44NTcxNCAyNi4xNTE1IDAgMjYuNTczOSAwIDI2LjU3MzlWMjlIMTdWMjYuNTczOUMxNyAyNi41NzM5IDExLjYzMTkgMjYuNTczOSAxMS42MzE5IDIxLjcyMTZWMTIuMDE3QzExLjYzMTkgMTAuODAzOSAxMC45Mjg2IDkuNTkwODUgOS43MTQyOCA5LjU5MDg1SDBaIi8+Cjwvc3ZnPgo=";
    me._info__img.setAttribute("src", hs);
    hs = "";
    hs +=
      "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;";
    els.setAttribute("style", hs);
    els["ondragstart"] = function () {
      return false;
    };
    el.appendChild(els);
    el.ggSubElement = els;
    el.ggId = "info";
    el.ggDx = 0;
    el.ggDy = 0;
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1, def: "" };
    el.ggVisible = true;
    el.className = "ggskin ggskin_svg ";
    el.ggType = "svg";
    hs = "";
    hs += "cursor : pointer;";
    hs += "height : 28px;";
    hs += "left : calc(50% - ((28px + 0px) / 2) + 0px);";
    hs += "position : absolute;";
    hs += "top : calc(50% - ((28px + 0px) / 2) + 0px);";
    hs += "visibility : inherit;";
    hs += "width : 28px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "50% 50%";
    me._info.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._info.ggUpdatePosition = function (useTransition) {};
    me._pad_info.appendChild(me._info);
    me._cont_control.appendChild(me._pad_info);
    el = me._pad_home = document.createElement("div");
    el.ggId = "pad_home";
    el.ggDx = 0;
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1, def: "" };
    el.ggVisible = true;
    el.className = "ggskin ggskin_rectangle ";
    el.ggType = "rectangle";
    hs = "";
    hs += "border : 0px solid #000000;";
    hs += "cursor : pointer;";
    hs += "height : 50px;";
    hs += "left : calc(50% - ((30px + 0px) / 2) + 0px);";
    hs += "position : absolute;";
    hs += "top : 0px;";
    hs += "visibility : inherit;";
    hs += "width : 30px;";
    hs += "pointer-events:auto;";
    hs += "border-bottom: 1px solid white;";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "50% 50%";
    me._pad_home.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._pad_home.onclick = function (e) {
      player.openNext("{node5}", "");
    };
    me._pad_home.ggUpdatePosition = function (useTransition) {};
    el = me._home = document.createElement("div");
    els = me._home__img = document.createElement("img");
    els.className = "ggskin ggskin_svg";
    hs =
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGwtb3BhY2l0eT0iMSIgdmlld0JveD0iMCAwIDY0IDY0IiBmaWxsPSIjZmZmZmZmIiB3aWR0aD0iNDhweCIgaGVpZ2h0PSI0OHB4Ij4KIDxwYXRoIGQ9Ik0gMzIgOCBDIDMxLjA4ODc1IDggMzAuMTc4MDQ3IDguMzA5MTg3NSAyOS40MzU1NDcgOC45Mjk2ODc1IEwgOC44MDA3ODEyIDI2LjE3MTg3NSBDIDguMDM1NzgxMiAyNi44MTA4NzUgNy43NjM0ODQ0IDI3LjkyNTIwMyA4LjI3MTQ4NDQgMjguNzgzMjAzIEMgOC45MTg0ODQ0IDI5Ljg3NTIwMyAxMC4zNTAyNSAzMC4wODg1NDcgMTEuMjgxMjUgMjkuMzEwNTQ3IEwgMT" +
      "IgMjguNzEwOTM4IEwgMTIgNDcgQyAxMiA0OS43NjEgMTQuMjM5IDUyIDE3IDUyIEwgNDcgNTIgQyA0OS43NjEgNTIgNTIgNDkuNzYxIDUyIDQ3IEwgNTIgMjguNzEyODkxIEwgNTIuNzE4NzUgMjkuMzEyNSBDIDUzLjA5Mjc1IDI5LjYyNTUgNTMuNTQ2MDQ3IDI5Ljc3NzM0NCA1My45OTgwNDcgMjkuNzc3MzQ0IEMgNTQuNjkzMDQ3IDI5Ljc3NzM0NCA1NS4zODI2NzIgMjkuNDE2NjU2IDU1Ljc2MzY3MiAyOC43MjI2NTYgQyA1Ni4yMjg2NzIgMjcuODc0NjU2IDU1Ljk1NDg5MSAyNi44MDM1OTQgNTUuMjEyODkxIDI2LjE4MzU5NCBMIDUyIDIzLjQ5ODA0NyBMIDUyIDE1IEMgNTIgMTMuODk1IDUx" +
      "LjEwNSAxMyA1MCAxMyBMIDQ4IDEzIEMgNDYuODk1IDEzIDQ2IDEzLjg5NSA0NiAxNSBMIDQ2IDE4LjQ4NDM3NSBMIDM0LjU2NDQ1MyA4LjkyOTY4NzUgQyAzMy44MjE5NTMgOC4zMDkxODc1IDMyLjkxMTI1IDggMzIgOCB6IE0gMzIgMTIuMTUyMzQ0IEMgMzIuMTE0NzUgMTIuMTUyMzQ0IDMyLjIyODc2NiAxMi4xOTE1MzEgMzIuMzIyMjY2IDEyLjI2OTUzMSBMIDQ4IDI1LjM2OTE0MSBMIDQ4IDQ2IEMgNDggNDcuMTA1IDQ3LjEwNSA0OCA0NiA0OCBMIDM4IDQ4IEwgMzggMzQgQyAzOCAzMi44OTUgMzcuMTA1IDMyIDM2IDMyIEwgMjggMzIgQyAyNi44OTUgMzIgMjYgMzIuODk1IDI2IDM0IEwgMj" +
      "YgNDggTCAxOCA0OCBDIDE2Ljg5NSA0OCAxNiA0Ny4xMDUgMTYgNDYgTCAxNiAyNS4zNjcxODggTCAzMS42Nzc3MzQgMTIuMjY5NTMxIEMgMzEuNzcxMjM0IDEyLjE5MTUzMSAzMS44ODUyNSAxMi4xNTIzNDQgMzIgMTIuMTUyMzQ0IHoiLz4KPC9zdmc+Cg==";
    me._home__img.setAttribute("src", hs);
    hs = "";
    hs +=
      "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;";
    els.setAttribute("style", hs);
    els["ondragstart"] = function () {
      return false;
    };
    el.appendChild(els);
    el.ggSubElement = els;
    el.ggId = "home";
    el.ggDx = 0;
    el.ggDy = 0;
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1, def: "" };
    el.ggVisible = true;
    el.className = "ggskin ggskin_svg ";
    el.ggType = "svg";
    hs = "";
    hs += "cursor : pointer;";
    hs += "height : 42px;";
    hs += "left : calc(50% - ((42px + 0px) / 2) + 0px);";
    hs += "position : absolute;";
    hs += "top : calc(50% - ((42px + 0px) / 2) + 0px);";
    hs += "visibility : inherit;";
    hs += "width : 42px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "50% 50%";
    me._home.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._home.ggUpdatePosition = function (useTransition) {};
    me._pad_home.appendChild(me._home);
    me._cont_control.appendChild(me._pad_home);
    el = me._svg_4 = document.createElement("div");
    els = me._svg_4__img = document.createElement("img");
    els.className = "ggskin ggskin_svg";
    hs =
      "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0naXNvLTg4NTktMSc/Pgo8IS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgNTEyLjA2MyA1MTIuMDYzIiB2ZXJzaW9uPSIxLjEiPgogPGc+CiAgPHBhdGggZD0iTTE4LjA2NCwxOTMuMDA3bDEyLjg2NCw0OS4zNmMyLjgsMT" +
      "AuODMyLDUuNDA4LDIwLjg4LDcuMjE2LDMwLjkxMmgwLjYwOCAgIGMyLjIwOC05Ljg0LDUuNDA4LTIwLjI3Miw4LjYwOC0zMC43MDRsMTUuODcyLTQ5LjU1MmgxNC44MTZsMTUuMDcyLDQ4LjU2YzMuNiwxMS42MzIsNi40MTYsMjEuODcyLDguNjA4LDMxLjcxMmgwLjYwOCAgIGMxLjYtOS44NCw0LjI0LTIwLjA4LDcuNDU2LTMxLjUwNGwxMy44MjQtNDguNzUyaDE3LjQ3MmwtMzEuMjk2LDk3LjEyaC0xNi4wOGwtMTQuODY0LTQ2LjM1MiAgIGMtMy40MDgtMTAuODE2LTYuMjA4LTIwLjQ0OC04LjYwOC0zMS44ODhoLTAuNDE2Yy0yLjQsMTEuNjMyLTUuNDA4LDIxLjY4LTguODE2LDMyLjA5NmwtMTUu" +
      "NjY0LDQ2LjE2SDI5LjMyOEwwLDE5My4wMDdIMTguMDY0eiIgc3R5bGU9ImZpbGw6IzAwMDA3Zjs7IGZpbGwtb3BhY2l0eToxIi8+CiAgPHBhdGggZD0iTTE2OC4wNjQsMTkzLjAwN2wxMi44NjQsNDkuMzZjMi44LDEwLjgzMiw1LjQwOCwyMC44OCw3LjIxNiwzMC45MTJoMC42MDggICBjMi4yMDgtOS44NCw1LjQwOC0yMC4yNzIsOC42MDgtMzAuNzA0bDE1Ljg3Mi00OS41NTJoMTQuODE2bDE1LjA3Miw0OC41NmMzLjYsMTEuNjMyLDYuNDE2LDIxLjg3Miw4LjYwOCwzMS43MTJoMC42MDggICBjMS42LTkuODQsNC4yNC0yMC4wOCw3LjQ1Ni0zMS41MDRsMTMuODI0LTQ4Ljc1MmgxNy40NzJsLTMxLj" +
      "I5Niw5Ny4xMmgtMTYuMDY0bC0xNC44NjQtNDYuMzUyICAgYy0zLjQwOC0xMC44MTYtNi4yMDgtMjAuNDQ4LTguNjA4LTMxLjg4OGgtMC40Yy0yLjQsMTEuNjMyLTUuNDA4LDIxLjY4LTguODE2LDMyLjA5NmwtMTUuNjY0LDQ2LjE2aC0xNi4wMzJsLTI5LjMyOC05Ny4xMmgxOC4wNDggICBWMTkzLjAwN3oiIHN0eWxlPSJmaWxsOiMwMDAwN2Y7OyBmaWxsLW9wYWNpdHk6MSIvPgogIDxwYXRoIGQ9Ik0zMTguMTEyLDE5My4wMDdsMTIuODE2LDQ5LjM2YzIuOCwxMC44MzIsNS40MDgsMjAuODgsNy4yMTYsMzAuOTEyaDAuNjA4ICAgYzIuMjA4LTkuODQsNS40NTYtMjAuMjcyLDguNjU2LTMwLjcwNGwx" +
      "NS44MjQtNDkuNTUyaDE0Ljg2NGwxNS4wNzIsNDguNTZjMy42LDExLjYzMiw2LjQxNiwyMS44NzIsOC42MDgsMzEuNzEyaDAuNjA4ICAgYzEuNi05Ljg0LDQuMjA4LTIwLjA4LDcuNDA4LTMxLjUwNGwxMy44NTYtNDguNzUyaDE3LjQyNGwtMzEuMjk2LDk3LjEyaC0xNi4wMzJsLTE0Ljg2NC00Ni4zNTIgICBjLTMuNDA4LTEwLjgxNi02LjIwOC0yMC40NDgtOC42MDgtMzEuODg4aC0wLjRjLTIuNCwxMS42MzItNS40NTYsMjEuNjgtOC44NDgsMzIuMDk2bC0xNS42MzIsNDYuMTZoLTE2LjA2NGwtMjkuMjgtOTcuMTJoMTguMDY0ICAgVjE5My4wMDd6IiBzdHlsZT0iZmlsbDojMDAwMDdmOzsgZmlsbC" +
      "1vcGFjaXR5OjEiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGQ9Ik0zNjYuNDQ4LDM2OS4wMDdjLTQxLjYzMiwwLTgxLjA4OC0yMC4xMjgtMTA1LjU2OC01My44NGwxMS42MTYtOC40NDggICBjMjEuNzkyLDMwLjAzMiw1Ni45MTIsNDcuOTUyLDkzLjk1Miw0Ny45NTJjNjMuOTY4LDAsMTE2LjAzMi01Mi4wNjQsMTE2LjAzMi0xMTYuMDMycy01Mi4wNjQtMTE2LjAzMi0xMTYuMDMyLTExNi4wMzIgICBjLTQyLjkyOCwwLTgyLjE3NiwyMy41NTItMTAyLjQzMiw2MS40NzJsLTEyLjY1Ni02Ljc2OGMyMi43NTItNDIuNTkyLDY2Ljg0OC02OS4wNTYsMTE1LjA4OC02OS4wNTYgICBjNzEuODg4LDAsMTMwLjM2" +
      "OCw1OC40OCwxMzAuMzY4LDEzMC4zNjhTNDM4LjMzNiwzNjkuMDA3LDM2Ni40NDgsMzY5LjAwN3oiIHN0eWxlPSJmaWxsOiNmZjAwMDA7OyBmaWxsLW9wYWNpdHk6MSIvPgogIDxyZWN0IHk9IjM2MC45MzkiIHg9IjQzMy4xNDEiIHRyYW5zZm9ybT0ibWF0cml4KC0wLjcwNjMgLTAuNzA3OSAwLjcwNzkgLTAuNzA2MyA1NTIuMzMzNCA5NjUuMzY0MykiIHdpZHRoPSI4Ni41NTkiIHN0eWxlPSJmaWxsOiNmZjAwMDA7OyBmaWxsLW9wYWNpdHk6MSIgaGVpZ2h0PSIxNC4zMzYiLz4KIDwvZz4KPC9zdmc+Cg==";
    me._svg_4__img.setAttribute("src", hs);
    hs = "";
    hs +=
      "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;";
    els.setAttribute("style", hs);
    els["ondragstart"] = function () {
      return false;
    };
    el.appendChild(els);
    el.ggSubElement = els;
    el.ggId = "Svg 4";
    el.ggDx = 0;
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1, def: "" };
    el.ggVisible = true;
    el.className = "ggskin ggskin_svg ";
    el.ggType = "svg";
    hs = "";
    hs += "cursor : pointer;";
    hs += "height : 40px;";
    hs += "left : calc(50% - ((40px + 0px) / 2) + 0px);";
    hs += "position : absolute;";
    hs += "top : -50px;";
    hs += "visibility : inherit;";
    hs += "width : 40px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "50% 50%";
    me._svg_4.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._svg_4.onclick = function (e) {
      if (player._(me.ggUserdata.description) == "a") {
        player.openUrl("https://unichari.com/", "_blank");
      }
      if (player._(me.ggUserdata.description) == "b") {
        player.openUrl("https://ninideas.com/", "_blank");
      }
      if (player._(me.ggUserdata.description) == "c") {
        player.openUrl("https://ionmedi.com/", "_blank");
      }
      if (player._(me.ggUserdata.description) == "d") {
        player.openUrl("https://fititans.com/", "_blank");
      }
    };
    me._svg_4.ggUpdatePosition = function (useTransition) {};
    me._cont_control.appendChild(me._svg_4);
    me.divSkin.appendChild(me._cont_control);
    el = me._button_call = document.createElement("div");
    els = me._button_call__img = document.createElement("img");
    els.className = "ggskin ggskin_svg";
    hs =
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0OCA0OCIgd2lkdGg9IjI0MHB4IiBoZWlnaHQ9IjI0MHB4Ij4KIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzAwZmYwMCIgZD0iTTEzLDQyaDIyYzMuODY2LDAsNy0zLjEzNCw3LTdWMTNjMC0zLjg2Ni0zLjEzNC03LTctN0gxM2MtMy44NjYsMC03LDMuMTM0LTcsN3YyMiYjeDk7QzYsMzguODY2LDkuMTM0LDQyLDEzLDQyeiIvPgogPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTM1LjQ1LDMxLjA0MWwtNC42MTItMy4wNTFjLTAuNTYzLTAuMzQxLTEuMjY3LTAuMzQ3LTEuODM2LTAuMDE3YzAsMCwwLD" +
      "AtMS45NzgsMS4xNTMmI3g5O2MtMC4yNjUsMC4xNTQtMC41MiwwLjE4My0wLjcyNiwwLjE0NWMtMC4yNjItMC4wNDgtMC40NDItMC4xOTEtMC40NTQtMC4yMDFjLTEuMDg3LTAuNzk3LTIuMzU3LTEuODUyLTMuNzExLTMuMjA1JiN4OTtjLTEuMzUzLTEuMzUzLTIuNDA4LTIuNjIzLTMuMjA1LTMuNzExYy0wLjAwOS0wLjAxMy0wLjE1My0wLjE5My0wLjIwMS0wLjQ1NGMtMC4wMzctMC4yMDYtMC4wMDktMC40NiwwLjE0NS0wLjcyNiYjeDk7YzEuMTUzLTEuOTc4LDEuMTUzLTEuOTc4LDEuMTUzLTEuOTc4YzAuMzMxLTAuNTY5LDAuMzI0LTEuMjc0LTAuMDE3LTEuODM2bC0zLjA1MS00LjYxMmMtMC4z" +
      "NzgtMC41NzEtMS4xNTEtMC43MjItMS43MTQtMC4zMzImI3g5O2MwLDAtMS40NDUsMC45ODktMS45MjIsMS4zMjVjLTAuNzY0LDAuNTM4LTEuMDEsMS4zNTYtMS4wMTEsMi40OTZjLTAuMDAyLDEuNjA0LDEuMzgsNi42MjksNy4yMDEsMTIuNDVsMCwwbDAsMGwwLDBsMCwwJiN4OTtjNS44MjIsNS44MjIsMTAuODQ2LDcuMjAzLDEyLjQ1LDcuMjAxYzEuMTQtMC4wMDEsMS45NTgtMC4yNDgsMi40OTYtMS4wMTFjMC4zMzYtMC40NzcsMS4zMjUtMS45MjIsMS4zMjUtMS45MjImI3g5O0MzNi4xNzIsMzIuMTkyLDM2LjAyMiwzMS40MTksMzUuNDUsMzEuMDQxeiIvPgo8L3N2Zz4K";
    me._button_call__img.setAttribute("src", hs);
    hs = "";
    hs +=
      "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;";
    els.setAttribute("style", hs);
    els["ondragstart"] = function () {
      return false;
    };
    el.appendChild(els);
    el.ggSubElement = els;
    el.ggId = "button_call";
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1, def: "" };
    el.ggVisible = false;
    el.className = "ggskin ggskin_svg ";
    el.ggType = "svg";
    hs = "";
    hs += "bottom : 185px;";
    hs += "cursor : pointer;";
    hs += "height : 65px;";
    hs += "position : absolute;";
    hs += "right : 25px;";
    hs += "visibility : hidden;";
    hs += "width : 65px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "50% 50%";
    me._button_call.ggIsActive = function () {
      return false;
    };
    el.ggElementNodeId = function () {
      return player.getCurrentNode();
    };
    me._button_call.onclick = function (e) {
      player.openUrl("tel: +84913820539", "_blank");
    };
    me._button_call.ggUpdatePosition = function (useTransition) {};
    me.divSkin.appendChild(me._button_call);
    el = me._floorplan_box = document.createElement("div");
    el.ggId = "Floorplan_box";
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1, def: "" };
    el.ggVisible = false;
    el.className = "ggskin ggskin_container ";
    el.ggType = "container";
    hs = "";
    hs += "z-index: 0;";
    hs += "height : 140px;";
    hs += "position : absolute;";
    hs += "right : 0px;";
    hs += "top : 0px;";
    hs += "visibility : hidden;";
    hs += "width : 240px;";
    hs += "pointer-events:none;";
    hs += "box-shadow: 0 3px 12px 0 rgb(0 0 0 / 35%);";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "50% 50%";
    me._floorplan_box.ggIsActive = function () {
      return false;
    };
    el.ggElementNodeId = function () {
      return player.getCurrentNode();
    };
    me._floorplan_box.logicBlock_size = function () {
      var newLogicStateSize;
      if (
        player.getVariableValue("scale_floorplan") == true &&
        player.getIsMobile() == false
      ) {
        newLogicStateSize = 0;
      } else if (
        player.getIsMobile() == true &&
        player.getVariableValue("scale_floorplan") == true
      ) {
        newLogicStateSize = 1;
      } else {
        newLogicStateSize = -1;
      }
      if (me._floorplan_box.ggCurrentLogicStateSize != newLogicStateSize) {
        me._floorplan_box.ggCurrentLogicStateSize = newLogicStateSize;
        me._floorplan_box.style.transition =
          "width 500ms ease 0ms, height 500ms ease 0ms";
        if (me._floorplan_box.ggCurrentLogicStateSize == 0) {
          me._floorplan_box.style.width = "690px";
          me._floorplan_box.style.height = "360px";
          setTimeout(function () {
            skin.updateSize(me._floorplan_box);
          }, 550);
        } else if (me._floorplan_box.ggCurrentLogicStateSize == 1) {
          me._floorplan_box.style.width = "calc(100%-0px)";
          me._floorplan_box.style.height = "calc(100%-0px)";
          setTimeout(function () {
            skin.updateSize(me._floorplan_box);
          }, 550);
        } else {
          me._floorplan_box.style.width = "240px";
          me._floorplan_box.style.height = "140px";
          setTimeout(function () {
            skin.updateSize(me._floorplan_box);
          }, 550);
        }
      }
    };
    me._floorplan_box.logicBlock_size();
    me._floorplan_box.logicBlock_visible = function () {
      var newLogicStateVisible;
      if (player.getVariableValue("open_floorplan") == false) {
        newLogicStateVisible = 0;
      } else {
        newLogicStateVisible = -1;
      }
      if (
        me._floorplan_box.ggCurrentLogicStateVisible != newLogicStateVisible
      ) {
        me._floorplan_box.ggCurrentLogicStateVisible = newLogicStateVisible;
        me._floorplan_box.style.transition =
          "width 500ms ease 0ms, height 500ms ease 0ms";
        if (me._floorplan_box.ggCurrentLogicStateVisible == 0) {
          me._floorplan_box.style.visibility = "hidden";
          me._floorplan_box.ggVisible = false;
        } else {
          me._floorplan_box.style.visibility = "hidden";
          me._floorplan_box.ggVisible = false;
        }
      }
    };
    me._floorplan_box.logicBlock_visible();
    me._floorplan_box.ggUpdatePosition = function (useTransition) {};
    el = me._floorplan = document.createElement("div");
    el.ggFilter = "";
    el.ggFilteredIds = [];
    el.ggMapNotLoaded = true;
    el.ggMapId = "FloorPlan01";
    el.ggId = "floorplan";
    el.ggDx = 0;
    el.ggDy = 0;
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1, def: "" };
    el.ggVisible = true;
    el.className = "ggskin ggskin_map ";
    el.ggType = "map";
    hs = "";
    hs += "z-index: 0;";
    hs += "background : #ffffff;";
    hs += "border : 0px solid #13499d;";
    hs += "cursor : pointer;";
    hs += "height : 100%;";
    hs += "left : calc(50% - ((100% + 0px) / 2) + 0px);";
    hs += "overflow : hidden;";
    hs += "position : absolute;";
    hs += "top : calc(50% - ((100% + 0px) / 2) + 0px);";
    hs += "visibility : inherit;";
    hs += "width : 100%;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "50% 50%";
    me._floorplan.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._floorplan.ggUpdatePosition = function (useTransition) {
      if (me._floorplan.ggMapNotLoaded == false) {
        me._floorplan.ggMap.invalidateSize(false);
      }
    };
    me._floorplan_box.appendChild(me._floorplan);
    el = me._tang_tret = document.createElement("div");
    els = me._tang_tret__text = document.createElement("div");
    el.className = "ggskin ggskin_textdiv";
    el.ggTextDiv = els;
    el.ggId = "Tang_tret";
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1, def: "" };
    el.ggVisible = false;
    el.className = "ggskin ggskin_text ";
    el.ggType = "text";
    hs = "";
    hs += "z-index: 999;";
    hs += "background : #267dc1;";
    hs += "border : 0px solid #2866c5;";
    hs += "border-radius : 5px;";
    hs += "bottom : 3px;";
    hs += "color : rgba(255,255,255,1);";
    hs += "cursor : pointer;";
    hs += "height : 25px;";
    hs += "position : absolute;";
    hs += "right : 1px;";
    hs += "visibility : hidden;";
    hs += "width : 90px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "50% 50%";
    hs = "";
    hs += "box-sizing: border-box;";
    hs += "width: 100%;";
    hs += "height: 100%;";
    hs += "text-align: center;";
    hs += "white-space: pre;";
    hs += "padding: 6px 1px 6px 1px;";
    hs += "overflow: hidden;";
    hs +=
      "font-family: Serif; text-shadow: 2px 2px 4px #000000; box-shadow: 0 3px 12px 0 rgb(0 0 0 / 35%);";
    els.setAttribute("style", hs);
    me._tang_tret.ggUpdateText = function () {
      var params = [];
      var hs = player._("T\u1ea6NG TR\u1ec6T", params);
      if (hs != this.ggText) {
        this.ggText = hs;
        this.ggTextDiv.innerHTML = hs;
        if (this.ggUpdatePosition) this.ggUpdatePosition();
      }
    };
    me._tang_tret.ggUpdateText();
    el.appendChild(els);
    me._tang_tret.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._tang_tret.logicBlock_alpha = function () {
      var newLogicStateAlpha;
      if (me.ggUserdata.tags.indexOf("flycam") != -1) {
        newLogicStateAlpha = 0;
      } else {
        newLogicStateAlpha = -1;
      }
      if (me._tang_tret.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
        me._tang_tret.ggCurrentLogicStateAlpha = newLogicStateAlpha;
        me._tang_tret.style.transition = "opacity 0s, background-color 0s";
        if (me._tang_tret.ggCurrentLogicStateAlpha == 0) {
          me._tang_tret.style.visibility = "hidden";
          me._tang_tret.style.opacity = 0;
        } else {
          me._tang_tret.style.visibility = me._tang_tret.ggVisible
            ? "inherit"
            : "hidden";
          me._tang_tret.style.opacity = 1;
        }
      }
    };
    me._tang_tret.logicBlock_alpha();
    me._tang_tret.logicBlock_backgroundcolor = function () {
      var newLogicStateBackgroundColor;
      if (
        me.elementMouseOver["tang_tret"] == true ||
        player.getVariableValue("var_select") == Number("1")
      ) {
        newLogicStateBackgroundColor = 0;
      } else {
        newLogicStateBackgroundColor = -1;
      }
      if (
        me._tang_tret.ggCurrentLogicStateBackgroundColor !=
        newLogicStateBackgroundColor
      ) {
        me._tang_tret.ggCurrentLogicStateBackgroundColor =
          newLogicStateBackgroundColor;
        me._tang_tret.style.transition = "opacity 0s, background-color 0s";
        if (me._tang_tret.ggCurrentLogicStateBackgroundColor == 0) {
          me._tang_tret.style.backgroundColor = "rgba(250,171,71,1)";
        } else {
          me._tang_tret.style.backgroundColor = "rgba(38,125,193,1)";
        }
      }
    };
    me._tang_tret.logicBlock_backgroundcolor();
    me._tang_tret.onclick = function (e) {
      player.setVariableValue("var_select", Number("1"));
    };
    me._tang_tret.onmouseover = function (e) {
      me.elementMouseOver["tang_tret"] = true;
      me._tang_tret.logicBlock_backgroundcolor();
    };
    me._tang_tret.onmouseout = function (e) {
      if (e && e.toElement) {
        var current = e.toElement;
        while ((current = current.parentNode)) {
          if (current == me._tang_tret__text) return;
        }
      }
      me.elementMouseOver["tang_tret"] = false;
      me._tang_tret.logicBlock_backgroundcolor();
    };
    me._tang_tret.ggUpdatePosition = function (useTransition) {};
    me._floorplan_box.appendChild(me._tang_tret);
    el = me._tang_1 = document.createElement("div");
    els = me._tang_1__text = document.createElement("div");
    el.className = "ggskin ggskin_textdiv";
    el.ggTextDiv = els;
    el.ggId = "Tang_1";
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1, def: "" };
    el.ggVisible = false;
    el.className = "ggskin ggskin_text ";
    el.ggType = "text";
    hs = "";
    hs += "z-index: 999;";
    hs += "background : #267dc1;";
    hs += "border : 0px solid #2866c5;";
    hs += "border-radius : 5px;";
    hs += "bottom : 32px;";
    hs += "color : rgba(255,255,255,1);";
    hs += "cursor : pointer;";
    hs += "height : 25px;";
    hs += "position : absolute;";
    hs += "right : 1px;";
    hs += "visibility : hidden;";
    hs += "width : 90px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "50% 50%";
    hs = "";
    hs += "box-sizing: border-box;";
    hs += "width: 100%;";
    hs += "height: 100%;";
    hs += "text-align: center;";
    hs += "white-space: pre;";
    hs += "padding: 6px 1px 6px 1px;";
    hs += "overflow: hidden;";
    hs +=
      "font-family: Serif; text-shadow: 2px 2px 4px #000000; box-shadow: 0 3px 12px 0 rgb(0 0 0 / 35%);";
    els.setAttribute("style", hs);
    me._tang_1.ggUpdateText = function () {
      var params = [];
      var hs = player._("T\u1ea6NG 1", params);
      if (hs != this.ggText) {
        this.ggText = hs;
        this.ggTextDiv.innerHTML = hs;
        if (this.ggUpdatePosition) this.ggUpdatePosition();
      }
    };
    me._tang_1.ggUpdateText();
    el.appendChild(els);
    me._tang_1.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._tang_1.logicBlock_alpha = function () {
      var newLogicStateAlpha;
      if (me.ggUserdata.tags.indexOf("flycam") != -1) {
        newLogicStateAlpha = 0;
      } else {
        newLogicStateAlpha = -1;
      }
      if (me._tang_1.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
        me._tang_1.ggCurrentLogicStateAlpha = newLogicStateAlpha;
        me._tang_1.style.transition =
          "opacity 0s, background-color 200ms ease 0ms";
        if (me._tang_1.ggCurrentLogicStateAlpha == 0) {
          me._tang_1.style.visibility = "hidden";
          me._tang_1.style.opacity = 0;
        } else {
          me._tang_1.style.visibility = me._tang_1.ggVisible
            ? "inherit"
            : "hidden";
          me._tang_1.style.opacity = 1;
        }
      }
    };
    me._tang_1.logicBlock_alpha();
    me._tang_1.logicBlock_backgroundcolor = function () {
      var newLogicStateBackgroundColor;
      if (
        me.elementMouseOver["tang_1"] == true ||
        player.getVariableValue("var_select") == Number("2")
      ) {
        newLogicStateBackgroundColor = 0;
      } else {
        newLogicStateBackgroundColor = -1;
      }
      if (
        me._tang_1.ggCurrentLogicStateBackgroundColor !=
        newLogicStateBackgroundColor
      ) {
        me._tang_1.ggCurrentLogicStateBackgroundColor =
          newLogicStateBackgroundColor;
        me._tang_1.style.transition =
          "opacity 0s, background-color 200ms ease 0ms";
        if (me._tang_1.ggCurrentLogicStateBackgroundColor == 0) {
          me._tang_1.style.backgroundColor = "rgba(250,171,71,1)";
        } else {
          me._tang_1.style.backgroundColor = "rgba(38,125,193,1)";
        }
      }
    };
    me._tang_1.logicBlock_backgroundcolor();
    me._tang_1.onclick = function (e) {
      player.setVariableValue("var_select", Number("2"));
    };
    me._tang_1.onmouseover = function (e) {
      me.elementMouseOver["tang_1"] = true;
      me._tang_1.logicBlock_backgroundcolor();
    };
    me._tang_1.onmouseout = function (e) {
      if (e && e.toElement) {
        var current = e.toElement;
        while ((current = current.parentNode)) {
          if (current == me._tang_1__text) return;
        }
      }
      me.elementMouseOver["tang_1"] = false;
      me._tang_1.logicBlock_backgroundcolor();
    };
    me._tang_1.ggUpdatePosition = function (useTransition) {};
    me._floorplan_box.appendChild(me._tang_1);
    el = me._rectangle_1 = document.createElement("div");
    el.ggId = "Rectangle 1";
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1, def: "" };
    el.ggVisible = true;
    el.className = "ggskin ggskin_rectangle ";
    el.ggType = "rectangle";
    hs = "";
    hs += "background : rgba(19,73,157,0.6);";
    hs += "border : 0px solid #000000;";
    hs += "bottom : 0px;";
    hs += "cursor : pointer;";
    hs += "height : 40px;";
    hs += "left : 0px;";
    hs += "position : absolute;";
    hs += "visibility : inherit;";
    hs += "width : 40px;";
    hs += "pointer-events:auto;";
    hs +=
      "box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.35); border-radius: 0px 5px 0px 0px;";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "50% 50%";
    me._rectangle_1.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._rectangle_1.onclick = function (e) {
      player.setVariableValue(
        "scale_floorplan",
        !player.getVariableValue("scale_floorplan")
      );
      player.setVariableValue("open_setting", false);
      player.setVariableValue("open_tag_nhamau", false);
      player.setVariableValue("open_tag_media", false);
      player.setVariableValue("open_list_tongthe", false);
    };
    me._rectangle_1.ggUpdatePosition = function (useTransition) {};
    el = me._box_zoom = document.createElement("div");
    els = me._box_zoom__img = document.createElement("img");
    els.className = "ggskin ggskin_svg";
    me._box_zoom__img.setAttribute("src", basePath + "images/box_zoom.svg");
    hs = "";
    hs +=
      "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;";
    els.setAttribute("style", hs);
    els["ondragstart"] = function () {
      return false;
    };
    el.appendChild(els);
    el.ggSubElement = els;
    el.ggId = "box_zoom";
    el.ggDx = 0;
    el.ggDy = 0;
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1, def: "" };
    el.ggVisible = false;
    el.className = "ggskin ggskin_svg ";
    el.ggType = "svg";
    hs = "";
    hs += "z-index: 1;";
    hs += "cursor : pointer;";
    hs += "height : 30px;";
    hs += "left : calc(50% - ((32px + 0px) / 2) + 0px);";
    hs += "position : absolute;";
    hs += "top : calc(50% - ((30px + 0px) / 2) + 0px);";
    hs += "visibility : hidden;";
    hs += "width : 32px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "50% 50%";
    me._box_zoom.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._box_zoom.onclick = function (e) {
      player.setVariableValue(
        "scale_floorplan",
        !player.getVariableValue("scale_floorplan")
      );
      player.setVariableValue("open_setting", false);
      player.setVariableValue("open_tag_nhamau", false);
      player.setVariableValue("open_tag_media", false);
      player.setVariableValue("open_list_tongthe", false);
    };
    me._box_zoom.ggUpdatePosition = function (useTransition) {};
    el = me._arrow_zoom = document.createElement("div");
    els = me._arrow_zoom__img = document.createElement("img");
    els.className = "ggskin ggskin_svg";
    me._arrow_zoom__img.setAttribute("src", basePath + "images/arrow_zoom.svg");
    hs = "";
    hs +=
      "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;";
    els.setAttribute("style", hs);
    els["ondragstart"] = function () {
      return false;
    };
    el.appendChild(els);
    el.ggSubElement = els;
    el.ggId = "arrow_zoom";
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1, def: "" };
    el.ggVisible = true;
    el.className = "ggskin ggskin_svg ";
    el.ggType = "svg";
    hs = "";
    hs += "cursor : pointer;";
    hs += "height : 17px;";
    hs += "position : absolute;";
    hs += "right : 1px;";
    hs += "top : 0px;";
    hs += "visibility : inherit;";
    hs += "width : 15px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "50% 50%";
    me._arrow_zoom.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._arrow_zoom.logicBlock_angle = function () {
      var newLogicStateAngle;
      if (player.getVariableValue("scale_floorplan") == true) {
        newLogicStateAngle = 0;
      } else {
        newLogicStateAngle = -1;
      }
      if (me._arrow_zoom.ggCurrentLogicStateAngle != newLogicStateAngle) {
        me._arrow_zoom.ggCurrentLogicStateAngle = newLogicStateAngle;
        me._arrow_zoom.style.transition = "transform 500ms ease 0ms";
        if (me._arrow_zoom.ggCurrentLogicStateAngle == 0) {
          me._arrow_zoom.ggParameter.a = 180;
          me._arrow_zoom.style.transform = parameterToTransform(
            me._arrow_zoom.ggParameter
          );
        } else {
          me._arrow_zoom.ggParameter.a = 0;
          me._arrow_zoom.style.transform = parameterToTransform(
            me._arrow_zoom.ggParameter
          );
        }
      }
    };
    me._arrow_zoom.logicBlock_angle();
    me._arrow_zoom.ggUpdatePosition = function (useTransition) {};
    me._box_zoom.appendChild(me._arrow_zoom);
    me._rectangle_1.appendChild(me._box_zoom);
    el = me._svg_2 = document.createElement("div");
    els = me._svg_2__img = document.createElement("img");
    els.className = "ggskin ggskin_svg";
    hs =
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgd2lkdGg9IjE4IiBoZWlnaHQ9IjE4Ij4KIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iI2ZmZmZmZiIgZD0iTTIuMDUxMTEgNC44Nzc3N0wwLjAwOTUxOTA4IDE3LjE4NDlDLTAuMDI3NjgwNyAxNy40MDgxIDAuMDQ1NTE4OSAxNy42MzQ5IDAuMjA1MTE4IDE3Ljc5NDVDMC4yMDU5MTggMTcuNzk1NyAwLjIwNTkxOCAxNy43OTU3IDAuMjA1OTE4IDE3Ljc5NTdDMC4zNjcxMTcgMTcuOTU1NyAwLjU5NDcxNiAxOC4wMjgxIDAuODE4MzE0IDE3Ljk5MDFMMTMuMDkyMi" +
      "AxNS45MTU3QzEzLjM1MSAxNS44NzI1IDEzLjU2MzQgMTUuNjg2OSAxMy42NDI2IDE1LjQzNjlDMTMuNzIzIDE1LjE4ODEgMTMuNjU2MiAxNC45MTM3IDEzLjQ3MDIgMTQuNzI4NUwxMS4wNzAzIDEyLjMyODlMMTcuNTEzOCA1Ljg4NTc2QzE3Ljc4NzggNS42MTE3NiAxNy43ODc4IDUuMTY4NTYgMTcuNTEzOCA0Ljg5NDU3TDEzLjA3MzQgMC40NTM3OUMxMi43OTk0IDAuMTc5NzkxIDEyLjM1NjIgMC4xNzk3OTEgMTIuMDgxOSAwLjQ1Mzc5TDUuNjM5MDkgNi44OTY5NUwzLjIzODMgNC40OTYxN0MzLjA1MjcgNC4zMTEzNyAyLjc3ODcgNC4yNDUzNyAyLjUyODcgNC4zMjQ5N0MyLjI3ODcxIDQuNDA0" +
      "OTcgMi4wOTQzMSA0LjYxODE3IDIuMDUxMTEgNC44Nzc3N1oiLz4KPC9zdmc+Cg==";
    me._svg_2__img.setAttribute("src", hs);
    hs = "";
    hs +=
      "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;";
    els.setAttribute("style", hs);
    els["ondragstart"] = function () {
      return false;
    };
    el.appendChild(els);
    el.ggSubElement = els;
    el.ggId = "Svg 2";
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1, def: "" };
    el.ggVisible = true;
    el.className = "ggskin ggskin_svg ";
    el.ggType = "svg";
    hs = "";
    hs += "bottom : 7px;";
    hs += "cursor : pointer;";
    hs += "height : 12px;";
    hs += "left : 7px;";
    hs += "position : absolute;";
    hs += "visibility : inherit;";
    hs += "width : 12px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "50% 50%";
    me._svg_2.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._svg_2.logicBlock_angle = function () {
      var newLogicStateAngle;
      if (player.getVariableValue("scale_floorplan") == true) {
        newLogicStateAngle = 0;
      } else {
        newLogicStateAngle = -1;
      }
      if (me._svg_2.ggCurrentLogicStateAngle != newLogicStateAngle) {
        me._svg_2.ggCurrentLogicStateAngle = newLogicStateAngle;
        me._svg_2.style.transition = "transform 500ms ease 0ms";
        if (me._svg_2.ggCurrentLogicStateAngle == 0) {
          me._svg_2.ggParameter.a = 180;
          me._svg_2.style.transform = parameterToTransform(
            me._svg_2.ggParameter
          );
        } else {
          me._svg_2.ggParameter.a = 0;
          me._svg_2.style.transform = parameterToTransform(
            me._svg_2.ggParameter
          );
        }
      }
    };
    me._svg_2.logicBlock_angle();
    me._svg_2.ggUpdatePosition = function (useTransition) {};
    me._rectangle_1.appendChild(me._svg_2);
    el = me._svg_3 = document.createElement("div");
    els = me._svg_3__img = document.createElement("img");
    els.className = "ggskin ggskin_svg";
    hs =
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgd2lkdGg9IjE4IiBoZWlnaHQ9IjE4Ij4KIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iI2ZmZmZmZiIgZD0iTTE1Ljk0OSAxMy4xMjI2TDE3Ljk5MDYgMC44MTU0NzJDMTguMDI3OCAwLjU5MjI3NCAxNy45NTQ2IDAuMzY1NDc1IDE3Ljc5NSAwLjIwNTg3NkMxNy43OTQyIDAuMjA0Njc2IDE3Ljc5NDIgMC4yMDQ2NzYgMTcuNzk0MiAwLjIwNDY3NkMxNy42MzI2IDAuMDQ1MDc2NSAxNy40MDU0IC0wLjAyNzcyMzEgMTcuMTgxOCAwLjAwOTg3NjczTDQuOTA3ODMgMi" +
      "4wODQyN0M0LjY0OTQ0IDIuMTI3ODcgNC40MzcwNCAyLjMxMzA2IDQuMzU3MDQgMi41NjMwNkM0LjI3NzA0IDIuODEyMjYgNC4zNDM4NCAzLjA4NjI2IDQuNTI5NDQgMy4yNzE4Nkw2LjkyOTgyIDUuNjcxMDVMMC40ODYyNjEgMTIuMTE0NkMwLjIxMjI2MiAxMi4zODkgMC4yMTIyNjIgMTIuODMyMiAwLjQ4NjI2MSAxMy4xMDY2TDQuOTI3MDQgMTcuNTQ3QzUuMjAxMDMgMTcuODIxIDUuNjQ0NjMgMTcuODIxIDUuOTE4NjMgMTcuNTQ3TDEyLjM2MTQgMTEuMTAzOEwxNC43NjE4IDEzLjUwNDJDMTQuOTQ3OCAxMy42ODk0IDE1LjIyMTggMTMuNzU1OCAxNS40NzE4IDEzLjY3NjJDMTUuNzIxNCAxMy41" +
      "OTU0IDE1LjkwNjIgMTMuMzgyMiAxNS45NDkgMTMuMTIyNloiLz4KPC9zdmc+Cg==";
    me._svg_3__img.setAttribute("src", hs);
    hs = "";
    hs +=
      "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;";
    els.setAttribute("style", hs);
    els["ondragstart"] = function () {
      return false;
    };
    el.appendChild(els);
    el.ggSubElement = els;
    el.ggId = "Svg 3";
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1, def: "" };
    el.ggVisible = true;
    el.className = "ggskin ggskin_svg ";
    el.ggType = "svg";
    hs = "";
    hs += "cursor : pointer;";
    hs += "height : 12px;";
    hs += "position : absolute;";
    hs += "right : 7px;";
    hs += "top : 7px;";
    hs += "visibility : inherit;";
    hs += "width : 12px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "50% 50%";
    me._svg_3.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._svg_3.logicBlock_angle = function () {
      var newLogicStateAngle;
      if (player.getVariableValue("scale_floorplan") == true) {
        newLogicStateAngle = 0;
      } else {
        newLogicStateAngle = -1;
      }
      if (me._svg_3.ggCurrentLogicStateAngle != newLogicStateAngle) {
        me._svg_3.ggCurrentLogicStateAngle = newLogicStateAngle;
        me._svg_3.style.transition = "transform 500ms ease 0ms";
        if (me._svg_3.ggCurrentLogicStateAngle == 0) {
          me._svg_3.ggParameter.a = 180;
          me._svg_3.style.transform = parameterToTransform(
            me._svg_3.ggParameter
          );
        } else {
          me._svg_3.ggParameter.a = 0;
          me._svg_3.style.transform = parameterToTransform(
            me._svg_3.ggParameter
          );
        }
      }
    };
    me._svg_3.logicBlock_angle();
    me._svg_3.ggUpdatePosition = function (useTransition) {};
    me._rectangle_1.appendChild(me._svg_3);
    me._floorplan_box.appendChild(me._rectangle_1);
    me.divSkin.appendChild(me._floorplan_box);
    el = me._image_1 = document.createElement("div");
    els = me._image_1__img = document.createElement("img");
    els.className = "ggskin ggskin_image_1";
    hs = basePath + "images/image_1.png";
    els.setAttribute("src", hs);
    els.ggNormalSrc = hs;
    hs = "";
    hs +=
      "position: absolute;top: 0px;left: 0px;width: 200px;height: 100%;-webkit-user-drag:none;pointer-events:none;;";
    els.setAttribute("style", hs);
    els.className = "ggskin ggskin_image";
    els["ondragstart"] = function () {
      return false;
    };
    player.checkLoaded.push(els);
    el.appendChild(els);
    el.ggSubElement = els;
    el.ggId = "Image 1";
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1, def: "" };
    el.ggVisible = true;
    el.className = "ggskin ggskin_image ";
    el.ggType = "image";
    hs = "";
    hs += "height : 120px;";
    hs += "left : 10px;";
    hs += "position : absolute;";
    hs += "top : 10px;";
    hs += "visibility : inherit;";
    hs += "width : 120px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "50% 50%";
    me._image_1.ggIsActive = function () {
      return false;
    };
    el.ggElementNodeId = function () {
      return player.getCurrentNode();
    };
    me._image_1.logicBlock_size = function () {
      var newLogicStateSize;
      if (
        player.getIsMobile() == true &&
        player.getViewerSize().width / player.getViewerSize().height <= 1
      ) {
        newLogicStateSize = 0;
      } else {
        newLogicStateSize = -1;
      }
      if (me._image_1.ggCurrentLogicStateSize != newLogicStateSize) {
        me._image_1.ggCurrentLogicStateSize = newLogicStateSize;
        me._image_1.style.transition =
          "width 0s, height 0s, opacity 300ms ease 0ms";
        if (me._image_1.ggCurrentLogicStateSize == 0) {
          me._image_1.style.width = "60px";
          me._image_1.style.height = "60px";
          skin.updateSize(me._image_1);
        } else {
          me._image_1.style.width = "120px";
          me._image_1.style.height = "120px";
          skin.updateSize(me._image_1);
        }
      }
    };
    me._image_1.logicBlock_size();
    me._image_1.logicBlock_alpha = function () {
      var newLogicStateAlpha;
      if (player.getVariableValue("var_show_menu") == true) {
        newLogicStateAlpha = 0;
      } else {
        newLogicStateAlpha = -1;
      }
      if (me._image_1.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
        me._image_1.ggCurrentLogicStateAlpha = newLogicStateAlpha;
        me._image_1.style.transition =
          "width 0s, height 0s, opacity 300ms ease 0ms";
        if (me._image_1.ggCurrentLogicStateAlpha == 0) {
          setTimeout(function () {
            if (me._image_1.style.opacity == 0.0) {
              me._image_1.style.visibility = "hidden";
            }
          }, 305);
          me._image_1.style.opacity = 0;
        } else {
          me._image_1.style.visibility = me._image_1.ggVisible
            ? "inherit"
            : "hidden";
          me._image_1.style.opacity = 1;
        }
      }
    };
    me._image_1.logicBlock_alpha();
    me._image_1.ggUpdatePosition = function (useTransition) {};
    me.divSkin.appendChild(me._image_1);
    el = me._button_map = document.createElement("div");
    el.ggId = "button_map";
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1, def: "" };
    el.ggVisible = false;
    el.className = "ggskin ggskin_rectangle ";
    el.ggType = "rectangle";
    hs = "";
    hs += "background : #118944;";
    hs += "border : 0px solid #000000;";
    hs += "cursor : pointer;";
    hs += "height : 40px;";
    hs += "position : absolute;";
    hs += "right : 0px;";
    hs += "top : 0px;";
    hs += "visibility : hidden;";
    hs += "width : 40px;";
    hs += "pointer-events:auto;";
    hs +=
      "background: rgba(19, 73, 157, 0.6); box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.35); border-radius: 5px 0px 0px 5px;";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "50% 50%";
    me._button_map.ggIsActive = function () {
      return false;
    };
    el.ggElementNodeId = function () {
      return player.getCurrentNode();
    };
    me._button_map.onclick = function (e) {
      player.setVariableValue(
        "open_floorplan",
        !player.getVariableValue("open_floorplan")
      );
      player.setVariableValue("scale_floorplan", true);
    };
    me._button_map.onmouseover = function (e) {
      me.elementMouseOver["button_map"] = true;
      me._icon_map.logicBlock_scaling();
    };
    me._button_map.onmouseout = function (e) {
      me.elementMouseOver["button_map"] = false;
      me._icon_map.logicBlock_scaling();
    };
    me._button_map.ggUpdatePosition = function (useTransition) {};
    el = me._icon_map = document.createElement("div");
    els = me._icon_map__img = document.createElement("img");
    els.className = "ggskin ggskin_svg";
    hs =
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1OCA0NyIgZmlsbD0ibm9uZSIgd2lkdGg9IjU4IiBoZWlnaHQ9IjQ3Ij4KIDxwYXRoIGZpbGw9IndoaXRlIiBkPSJNMjAuNjIyMSAyNC40NDJDMjAuNjIyMSAyMS4zMjQzIDIxLjk5NjkgMTguMjk1NyAyNC40NTIgMTYuMDY4OEMyNi41MTQyIDE0LjE5ODIgMjkuMTY1NyAxMy4wNDAyIDMxLjkxNTQgMTIuNjgzOVY2LjUzNzY1TDE4LjE2NyAwLjQ4MDQ2OVY0MC4zODY2TDMxLjkxNTQgNDYuNDQzOFYzNi4xMTA5QzI5LjE2NTcgMzUuNzU0NiAyNi41MTQyIDM0LjY4NTcgMjQuNDUyIDMyLjcyNkMyMS44OT" +
      "g3IDMwLjU4ODIgMjAuNjIyMSAyNy41NTk2IDIwLjYyMjEgMjQuNDQyWiIvPgogPHBhdGggZmlsbD0id2hpdGUiIGQ9Ik01MS4wNjQ4IDAuMjEzMjM4QzUwLjU3MzggLTAuMDUzOTkwOSA0OS45ODQ2IC0wLjA1Mzk5MTMgNDkuNDkzNiAwLjEyNDE2MUwzNS4yNTQyIDYuNTM3NjRWMTIuNjgzOUMzOC4xMDIxIDEzLjA0MDIgNDAuODUxNyAxNC4xOTgyIDQyLjkxNCAxNi4wNjg4QzQ1LjM2OTEgMTguMjk1NyA0Ni43NDM5IDIxLjIzNTIgNDYuNzQzOSAyNC40NDJDNDYuNzQzOSAyNy4xMTQyIDQ1Ljc2MTkgMjkuNjA4NCA0My45OTQyIDMxLjY1NzFMNTIuMTQ1MSAzOS4wNTA0TDUxLjg1MDQgMS40NjAz" +
      "QzUxLjg1MDQgMC45MjU4NDcgNTEuNTU1OCAwLjQ4MDQ2NiA1MS4wNjQ4IDAuMjEzMjM4WiIvPgogPHBhdGggZmlsbD0id2hpdGUiIGQ9Ik0xNC44Mjg2IDAuNTY5MDkyTDAuODgzODI1IDcuNjA2MTFDMC4zOTI4MTIgNy44NzMzNCAwIDguNDA3OCAwIDguOTQyMjVWNDUuNDYzNUMwIDQ1Ljk5NzkgMC4yOTQ2MDkgNDYuNTMyNCAwLjc4NTYyMiA0Ni43OTk2QzEuMjc2NjQgNDcuMDY2OSAxLjk2NDA1IDQ3LjA2NjkgMi40NTUwNyA0Ni43OTk2TDE0LjczMDQgNDAuNTY0M1YwLjU2OTA5MkgxNC44Mjg2WiIvPgogPHBhdGggZmlsbD0id2hpdGUiIGQ9Ik0zNS4yNTQyIDM2LjExMTFWNDYuNDQzOUw0OS" +
      "43ODgyIDQxLjA5OTRMNDEuNjM3NCAzMy43MDYxQzM5LjY3MzMgMzUuMTMxMyAzNy41MTI5IDM1LjkzMyAzNS4yNTQyIDM2LjExMTFaIi8+CiA8cGF0aCBmaWxsPSJ3aGl0ZSIgZD0iTTMzLjY4MyAxNS42MjRDMzEuMTI5OCAxNS42MjQgMjguNjc0NyAxNi41MTQ4IDI2LjgwODggMTguMjA3MkMyNC45NDMgMTkuODk5NyAyMy45NjEgMjIuMTI2NiAyMy45NjEgMjQuNDQyNkMyMy45NjEgMjYuNzU4NSAyNC45NDMgMjguOTg1NSAyNi44MDg4IDMwLjY3NzlDMzAuNjM4NyAzNC4xNTE5IDM2LjgyNTUgMzQuMTUxOSA0MC41NTcyIDMwLjY3NzlDNDIuNDIzMSAyOC45ODU1IDQzLjQwNTEgMjYuNzU4NSA0" +
      "My40MDUxIDI0LjQ0MjZDNDMuNDA1MSAyMi4xMjY2IDQyLjQyMzEgMTkuODk5NyA0MC41NTcyIDE4LjIwNzJDMzguNjkxNCAxNi41MTQ4IDM2LjIzNjMgMTUuNjI0IDMzLjY4MyAxNS42MjRaIi8+CiA8cGF0aCBmaWxsPSJ3aGl0ZSIgZD0iTTUyLjE0NiAzOS4yMjgyQzUyLjE0NiAzOS44NTE3IDUxLjc1MzIgNDAuMzg2MiA1MS4xNjQgNDAuNjUzNEw0OS44ODczIDQxLjA5ODhMNTUuMzg2NyA0Ni4wODdMNTcuNzQzNSA0My45NDkyTDUyLjI0NDIgMzguOTYwOUw1Mi4xNDYgMzkuMjI4MloiLz4KPC9zdmc+Cg==";
    me._icon_map__img.setAttribute("src", hs);
    hs = "";
    hs +=
      "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;";
    els.setAttribute("style", hs);
    els["ondragstart"] = function () {
      return false;
    };
    el.appendChild(els);
    el.ggSubElement = els;
    el.ggId = "icon_map";
    el.ggDx = 0;
    el.ggDy = 0;
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1, def: "" };
    el.ggVisible = true;
    el.className = "ggskin ggskin_svg ";
    el.ggType = "svg";
    hs = "";
    hs += "cursor : pointer;";
    hs += "height : 28px;";
    hs += "left : calc(50% - ((28px + 0px) / 2) + 0px);";
    hs += "position : absolute;";
    hs += "top : calc(50% - ((28px + 0px) / 2) + 0px);";
    hs += "visibility : inherit;";
    hs += "width : 28px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "50% 50%";
    me._icon_map.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._icon_map.logicBlock_scaling = function () {
      var newLogicStateScaling;
      if (me.elementMouseOver["button_map"] == true) {
        newLogicStateScaling = 0;
      } else {
        newLogicStateScaling = -1;
      }
      if (me._icon_map.ggCurrentLogicStateScaling != newLogicStateScaling) {
        me._icon_map.ggCurrentLogicStateScaling = newLogicStateScaling;
        me._icon_map.style.transition = "transform 0s";
        if (me._icon_map.ggCurrentLogicStateScaling == 0) {
          me._icon_map.ggParameter.sx = 1.05;
          me._icon_map.ggParameter.sy = 1.05;
          me._icon_map.style.transform = parameterToTransform(
            me._icon_map.ggParameter
          );
          skin.updateSize(me._icon_map);
        } else {
          me._icon_map.ggParameter.sx = 1;
          me._icon_map.ggParameter.sy = 1;
          me._icon_map.style.transform = parameterToTransform(
            me._icon_map.ggParameter
          );
          skin.updateSize(me._icon_map);
        }
      }
    };
    me._icon_map.logicBlock_scaling();
    me._icon_map.logicBlock_visible = function () {
      var newLogicStateVisible;
      if (player.getVariableValue("open_floorplan") == true) {
        newLogicStateVisible = 0;
      } else {
        newLogicStateVisible = -1;
      }
      if (me._icon_map.ggCurrentLogicStateVisible != newLogicStateVisible) {
        me._icon_map.ggCurrentLogicStateVisible = newLogicStateVisible;
        me._icon_map.style.transition = "transform 0s";
        if (me._icon_map.ggCurrentLogicStateVisible == 0) {
          me._icon_map.style.visibility = "hidden";
          me._icon_map.ggVisible = false;
        } else {
          me._icon_map.style.visibility =
            Number(me._icon_map.style.opacity) > 0 ||
            !me._icon_map.style.opacity
              ? "inherit"
              : "hidden";
          me._icon_map.ggVisible = true;
        }
      }
    };
    me._icon_map.logicBlock_visible();
    me._icon_map.ggUpdatePosition = function (useTransition) {};
    me._button_map.appendChild(me._icon_map);
    el = me._close_map = document.createElement("div");
    els = me._close_map__img = document.createElement("img");
    els.className = "ggskin ggskin_svg";
    hs =
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NyA1NyIgZmlsbD0ibm9uZSIgd2lkdGg9IjU3IiBoZWlnaHQ9IjU3Ij4KIDxwYXRoIGZpbGw9IndoaXRlIiBkPSJNMjguNSAwQzIyLjg2MzIgMCAxNy4zNTMxIDEuNjcxNSAxMi42NjYzIDQuODAzMTFDNy45Nzk0NiA3LjkzNDczIDQuMzI2NTQgMTIuMzg1OCAyLjE2OTQ1IDE3LjU5MzVDMC4wMTIzNDg2IDIyLjgwMTIgLTAuNTUyMDQ2IDI4LjUzMTYgMC41NDc2MzIgMzQuMDYwMUMxLjY0NzMxIDM5LjU4ODUgNC4zNjE2NyA0NC42NjY3IDguMzQ3NDcgNDguNjUyNUMxMi4zMzMzIDUyLjYzODMgMTcuND" +
      "ExNSA1NS4zNTI3IDIyLjkzOTkgNTYuNDUyNEMyOC40Njg0IDU3LjU1MiAzNC4xOTg4IDU2Ljk4NzcgMzkuNDA2NSA1NC44MzA2QzQ0LjYxNDIgNTIuNjczNSA0OS4wNjUzIDQ5LjAyMDUgNTIuMTk2OSA0NC4zMzM3QzU1LjMyODUgMzkuNjQ2OSA1NyAzNC4xMzY4IDU3IDI4LjVDNTYuOTkxNiAyMC45NDM5IDUzLjk4NjIgMTMuNjk5NyA0OC42NDMyIDguMzU2NzZDNDMuMzAwMyAzLjAxMzggMzYuMDU2MSAwLjAwODQyMzUyIDI4LjUgMFpNMzkuNjc5MSAzNi4zMjA5QzM5LjkwNiAzNi41NCA0MC4wODY5IDM2LjgwMiA0MC4yMTE0IDM3LjA5MThDNDAuMzM1OCAzNy4zODE1IDQwLjQwMTQgMzcuNjkz" +
      "MiA0MC40MDQxIDM4LjAwODVDNDAuNDA2OCAzOC4zMjM5IDQwLjM0NjggMzguNjM2NiA0MC4yMjczIDM4LjkyODVDNDAuMTA3OSAzOS4yMjA0IDM5LjkzMTYgMzkuNDg1NiAzOS43MDg2IDM5LjcwODZDMzkuNDg1NiAzOS45MzE1IDM5LjIyMDQgNDAuMTA3OSAzOC45Mjg1IDQwLjIyNzNDMzguNjM2NiA0MC4zNDY3IDM4LjMyMzkgNDAuNDA2OCAzOC4wMDg2IDQwLjQwNDFDMzcuNjkzMiA0MC40MDEzIDM3LjM4MTYgNDAuMzM1OCAzNy4wOTE4IDQwLjIxMTRDMzYuODAyIDQwLjA4NjkgMzYuNTQgMzkuOTA2IDM2LjMyMDkgMzkuNjc5MUwyOC41IDMxLjg1ODVMMjAuNjc5MSAzOS42NzkxQzIwLjIzMT" +
      "IgNDAuMTExNyAxOS42MzEzIDQwLjM1MTEgMTkuMDA4NiA0MC4zNDU3QzE4LjM4NTggNDAuMzQwMyAxNy43OTAyIDQwLjA5MDUgMTcuMzQ5OCAzOS42NTAyQzE2LjkwOTUgMzkuMjA5OCAxNi42NTk3IDM4LjYxNDIgMTYuNjU0MyAzNy45OTE0QzE2LjY0ODkgMzcuMzY4NyAxNi44ODgzIDM2Ljc2ODggMTcuMzIwOSAzNi4zMjA5TDI1LjE0MTUgMjguNUwxNy4zMjA5IDIwLjY3OTFDMTYuODg4MyAyMC4yMzEyIDE2LjY0ODkgMTkuNjMxMyAxNi42NTQzIDE5LjAwODVDMTYuNjU5NyAxOC4zODU4IDE2LjkwOTUgMTcuNzkwMSAxNy4zNDk4IDE3LjM0OThDMTcuNzkwMiAxNi45MDk1IDE4LjM4NTggMTYu" +
      "NjU5NyAxOS4wMDg2IDE2LjY1NDNDMTkuNjMxMyAxNi42NDg5IDIwLjIzMTIgMTYuODg4MiAyMC42NzkxIDE3LjMyMDlMMjguNSAyNS4xNDE1TDM2LjMyMDkgMTcuMzIwOUMzNi43Njg4IDE2Ljg4ODIgMzcuMzY4NyAxNi42NDg5IDM3Ljk5MTUgMTYuNjU0M0MzOC42MTQyIDE2LjY1OTcgMzkuMjA5OSAxNi45MDk1IDM5LjY1MDIgMTcuMzQ5OEM0MC4wOTA1IDE3Ljc5MDEgNDAuMzQwMyAxOC4zODU4IDQwLjM0NTcgMTkuMDA4NUM0MC4zNTExIDE5LjYzMTMgNDAuMTExOCAyMC4yMzEyIDM5LjY3OTEgMjAuNjc5MUwzMS44NTg1IDI4LjVMMzkuNjc5MSAzNi4zMjA5WiIvPgo8L3N2Zz4K";
    me._close_map__img.setAttribute("src", hs);
    hs = "";
    hs +=
      "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;";
    els.setAttribute("style", hs);
    els["ondragstart"] = function () {
      return false;
    };
    el.appendChild(els);
    el.ggSubElement = els;
    el.ggId = "close_map";
    el.ggDx = 0;
    el.ggDy = 0;
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1, def: "" };
    el.ggVisible = false;
    el.className = "ggskin ggskin_svg ";
    el.ggType = "svg";
    hs = "";
    hs += "height : 28px;";
    hs += "left : calc(50% - ((28px + 0px) / 2) + 0px);";
    hs += "position : absolute;";
    hs += "top : calc(50% - ((28px + 0px) / 2) + 0px);";
    hs += "visibility : hidden;";
    hs += "width : 28px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "50% 50%";
    me._close_map.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._close_map.logicBlock_visible = function () {
      var newLogicStateVisible;
      if (player.getVariableValue("open_floorplan") == true) {
        newLogicStateVisible = 0;
      } else {
        newLogicStateVisible = -1;
      }
      if (me._close_map.ggCurrentLogicStateVisible != newLogicStateVisible) {
        me._close_map.ggCurrentLogicStateVisible = newLogicStateVisible;
        me._close_map.style.transition = "";
        if (me._close_map.ggCurrentLogicStateVisible == 0) {
          me._close_map.style.visibility =
            Number(me._close_map.style.opacity) > 0 ||
            !me._close_map.style.opacity
              ? "inherit"
              : "hidden";
          me._close_map.ggVisible = true;
        } else {
          me._close_map.style.visibility = "hidden";
          me._close_map.ggVisible = false;
        }
      }
    };
    me._close_map.logicBlock_visible();
    me._close_map.ggUpdatePosition = function (useTransition) {};
    me._button_map.appendChild(me._close_map);
    me.divSkin.appendChild(me._button_map);
    el = me._pad_menu = document.createElement("div");
    el.ggId = "pad_menu";
    el.ggDy = 0;
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1, def: "" };
    el.ggVisible = true;
    el.className = "ggskin ggskin_rectangle ";
    el.ggType = "rectangle";
    hs = "";
    hs += "background : rgba(1,9,71,0.705882);";
    hs += "border : 0px solid #000000;";
    hs += "cursor : default;";
    hs += "height : 100%;";
    hs += "left : 0px;";
    hs += "position : absolute;";
    hs += "top : calc(50% - ((100% + 0px) / 2) + 0px);";
    hs += "visibility : inherit;";
    hs += "width : 320px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "50% 50%";
    me._pad_menu.ggIsActive = function () {
      return false;
    };
    el.ggElementNodeId = function () {
      return player.getCurrentNode();
    };
    me._pad_menu.logicBlock_position = function () {
      var newLogicStatePosition;
      if (player.getVariableValue("var_show_menu") == false) {
        newLogicStatePosition = 0;
      } else {
        newLogicStatePosition = -1;
      }
      if (me._pad_menu.ggCurrentLogicStatePosition != newLogicStatePosition) {
        me._pad_menu.ggCurrentLogicStatePosition = newLogicStatePosition;
        me._pad_menu.style.transition =
          "left 300ms ease 0ms, top 300ms ease 0ms";
        if (me._pad_menu.ggCurrentLogicStatePosition == 0) {
          me._pad_menu.style.left = "-320px";
          me._pad_menu.style.top = "calc(50% - (100% / 2))";
        } else {
          me._pad_menu.style.left = "0px";
          me._pad_menu.style.top = "calc(50% - ((100% + 0px) / 2) + 0px)";
        }
      }
    };
    me._pad_menu.logicBlock_position();
    me._pad_menu.ggUpdatePosition = function (useTransition) {};
    el = me._container_1 = document.createElement("div");
    el.ggId = "Container 1";
    el.ggDx = 0;
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1, def: "" };
    el.ggVisible = true;
    el.className = "ggskin ggskin_container ";
    el.ggType = "container";
    hs = "";
    hs += "bottom : 0px;";
    hs += "height : calc(100% - 180px);";
    hs += "left : calc(50% - ((100% + 0px) / 2) + 0px);";
    hs += "position : absolute;";
    hs += "visibility : inherit;";
    hs += "width : 100%;";
    hs += "pointer-events:none;";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "50% 50%";
    me._container_1.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._container_1.ggUpdatePosition = function (useTransition) {};
    el = me._container_lienhe = document.createElement("div");
    el.ggId = "Container_lienhe";
    el.ggDx = 0;
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1, def: "" };
    el.ggVisible = true;
    el.className = "ggskin ggskin_container ";
    el.ggType = "container";
    hs = "";
    hs += "bottom : 10px;";
    hs += "cursor : pointer;";
    hs += "height : 40px;";
    hs += "left : calc(50% - ((190px + 0px) / 2) + 0px);";
    hs += "position : absolute;";
    hs += "visibility : inherit;";
    hs += "width : 190px;";
    hs += "pointer-events:none;";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "50% 50%";
    me._container_lienhe.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._container_lienhe.ggUpdatePosition = function (useTransition) {};
    el = me._pad_mail = document.createElement("div");
    el.ggId = "pad_mail";
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1, def: "" };
    el.ggVisible = true;
    el.className = "ggskin ggskin_rectangle ";
    el.ggType = "rectangle";
    hs = "";
    hs += "border : 0px solid #000000;";
    hs += "bottom : 0px;";
    hs += "cursor : pointer;";
    hs += "height : 40px;";
    hs += "position : absolute;";
    hs += "right : 0px;";
    hs += "visibility : inherit;";
    hs += "width : 40px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "50% 50%";
    me._pad_mail.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._pad_mail.onclick = function (e) {
      player.openUrl("mailto: achisonjsc@achison.com", "_blank");
    };
    me._pad_mail.ggUpdatePosition = function (useTransition) {};
    el = me._mail = document.createElement("div");
    els = me._mail__img = document.createElement("img");
    els.className = "ggskin ggskin_svg";
    hs =
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzOCAzOCIgZmlsbD0ibm9uZSIgd2lkdGg9IjM4IiBoZWlnaHQ9IjM4Ij4KIDxwYXRoIGZpbGw9IndoaXRlIiBkPSJNOS42NTY0OCAxMi42MzMyQzEyLjQzOCAxNC45ODg4IDE3LjMxODcgMTkuMTMzMSAxOC43NTMyIDIwLjQyNTNDMTguOTQ1OCAyMC41OTk3IDE5LjE1MjMgMjAuNjg4NCAxOS4zNjY3IDIwLjY4ODRDMTkuNTgwNyAyMC42ODg0IDE5Ljc4NjkgMjAuNjAwNSAxOS45NzkxIDIwLjQyN0MyMS40MTQ4IDE5LjEzMzUgMjYuMjk1NSAxNC45ODg4IDI5LjA3NyAxMi42MzMyQzI5LjI1MDIgMTIuND" +
      "g2OCAyOS4yNzY2IDEyLjIyOTUgMjkuMTM2NCAxMi4wNTA1QzI4LjgxMjMgMTEuNjM3IDI4LjMyOTEgMTEuMzk5OSAyNy44MTEyIDExLjM5OTlIMTAuOTIyM0MxMC40MDQ0IDExLjM5OTkgOS45MjExNyAxMS42MzcgOS41OTcxMSAxMi4wNTA2QzkuNDU2OSAxMi4yMjk1IDkuNDgzMyAxMi40ODY4IDkuNjU2NDggMTIuNjMzMloiLz4KIDxwYXRoIGZpbGw9IndoaXRlIiBkPSJNMjkuMjU1MiAxMy45MUMyOS4xMDU1IDEzLjg0MDMgMjguOTI5NCAxMy44NjQ2IDI4LjgwNDkgMTMuOTcxQzI1LjcyMDIgMTYuNTg2IDIxLjc4MzQgMTkuOTM3OCAyMC41NDQ3IDIxLjA1MzlDMTkuODQ5NSAyMS42ODE1IDE4" +
      "Ljg4NDcgMjEuNjgxNSAxOC4xODc5IDIxLjA1MzFDMTYuODY3NiAxOS44NjM1IDEyLjQ0NjYgMTYuMTA1MiA5LjkyODU2IDEzLjk3MUM5LjgwMzIgMTMuODY0NiA5LjYyNjc0IDEzLjg0MTEgOS40NzgzIDEzLjkwOTlDOS4zMjkwNyAxMy45NzkyIDkuMjMzNCAxNC4xMjg1IDkuMjMzNCAxNC4yOTNWMjQuOTExMkM5LjIzMzQgMjUuODQyNyA5Ljk5MDgzIDI2LjYwMDEgMTAuOTIyMyAyNi42MDAxSDI3LjgxMTJDMjguNzQyNiAyNi42MDAxIDI5LjUwMDEgMjUuODQyNyAyOS41MDAxIDI0LjkxMTJWMTQuMjkzQzI5LjUwMDEgMTQuMTI4NSAyOS40MDQ0IDEzLjk3ODggMjkuMjU1MiAxMy45MVoiLz4KID" +
      "xnIG9wYWNpdHk9IjAuOSI+CiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IndoaXRlIiBkPSJNMzEuMzkzNSA2LjYxNzQzQzI4LjIxNiAzLjQ1MDc1IDIzLjgzOTYgMS40ODMxNCAxOSAxLjQ4MzE0QzE0LjE3MTEgMS40ODMxNCA5Ljc4NDI3IDMuNDUwNzUgNi42MTc1OSA2LjYxNzQzQzMuNDUwOTIgOS43ODQxIDEuNDgzNjkgMTQuMTYwNiAxLjQ4MzY5IDE5LjAwMDJDMS40ODM2OSAyMy44Mzk4IDMuNDUwOTIgMjguMjE1OSA2LjYxNzU5IDMxLjM5MzNDOS43ODQyNyAzNC41NiAxNC4xNzExIDM2LjUxNjggMTkgMzYuNTE2OEMyMy44Mzk2IDM2LjUx" +
      "NjggMjguMjE2IDM0LjU2IDMxLjM5MzUgMzEuMzkzM0MzNC41NjAxIDI4LjIxNTkgMzYuNTE2NiAyMy44Mzk4IDM2LjUxNjYgMTkuMDAwMkMzNi41MTY2IDE0LjE2MDYgMzQuNTYwMSA5Ljc4NDEgMzEuMzkzNSA2LjYxNzQzWk0zMi40MzQ5IDUuNTY1NTZDMzUuODc1MiA5LjAwNTgxIDM4LjAwMDEgMTMuNzUwMyAzOC4wMDAxIDE5QzM4LjAwMDEgMjQuMjQ5NCAzNS44NzUyIDI4Ljk5NDMgMzIuNDM0OSAzMi40MzQ1QzI5LjAwNSAzNS44NzQ4IDI0LjI0OTggMzcuOTk5NyAxOSAzNy45OTk3QzEzLjc2MSAzNy45OTk3IDkuMDA2MiAzNS44NzQ4IDUuNTY1NTYgMzIuNDM0NUMyLjEyNTMxIDI4Ljk5ND" +
      "MgMCAyNC4yNDk0IDAgMTlDMCAxMy43NTAzIDIuMTI1MzEgOS4wMDU4MSA1LjU2NTU2IDUuNTY1NTZDOS4wMDYyIDIuMTI0OTMgMTMuNzYxIDAgMTkgMEMyNC4yNDk4IDAgMjkuMDA1IDIuMTI0OTMgMzIuNDM0OSA1LjU2NTU2WiIvPgogPC9nPgo8L3N2Zz4K";
    me._mail__img.setAttribute("src", hs);
    hs = "";
    hs +=
      "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;";
    els.setAttribute("style", hs);
    els["ondragstart"] = function () {
      return false;
    };
    el.appendChild(els);
    el.ggSubElement = els;
    el.ggId = "mail";
    el.ggDx = 0;
    el.ggDy = 0;
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1, def: "" };
    el.ggVisible = true;
    el.className = "ggskin ggskin_svg ";
    el.ggType = "svg";
    hs = "";
    hs += "cursor : pointer;";
    hs += "height : 35px;";
    hs += "left : calc(50% - ((35px + 0px) / 2) + 0px);";
    hs += "position : absolute;";
    hs += "top : calc(50% - ((35px + 0px) / 2) + 0px);";
    hs += "visibility : inherit;";
    hs += "width : 35px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "50% 50%";
    me._mail.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._mail.ggUpdatePosition = function (useTransition) {};
    me._pad_mail.appendChild(me._mail);
    me._container_lienhe.appendChild(me._pad_mail);
    el = me._pad_call = document.createElement("div");
    el.ggId = "pad_call";
    el.ggDx = 0;
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1, def: "" };
    el.ggVisible = true;
    el.className = "ggskin ggskin_rectangle ";
    el.ggType = "rectangle";
    hs = "";
    hs += "border : 0px solid #000000;";
    hs += "bottom : 0px;";
    hs += "cursor : pointer;";
    hs += "height : 40px;";
    hs += "left : calc(50% - ((40px + 0px) / 2) + 0px);";
    hs += "position : absolute;";
    hs += "visibility : inherit;";
    hs += "width : 40px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "50% 50%";
    me._pad_call.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._pad_call.onclick = function (e) {
      player.openUrl("tel: +84913820539", "_blank");
    };
    me._pad_call.ggUpdatePosition = function (useTransition) {};
    el = me._call = document.createElement("div");
    els = me._call__img = document.createElement("img");
    els.className = "ggskin ggskin_svg";
    hs =
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzOCAzOCIgZmlsbD0ibm9uZSIgd2lkdGg9IjM4IiBoZWlnaHQ9IjM4Ij4KIDxnIG9wYWNpdHk9IjAuOSI+CiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IndoaXRlIiBkPSJNMzEuMzkzNSA2LjYxNzQzQzI4LjIxNjEgMy40NTA3NSAyMy44Mzk3IDEuNDgzMTQgMTkgMS40ODMxNEMxNC4xNzEyIDEuNDgzMTQgOS43ODQzNSAzLjQ1MDc1IDYuNjE3NjggNi42MTc0M0MzLjQ1MSA5Ljc4NDEgMS40ODM3NyAxNC4xNjA2IDEuNDgzNzcgMTkuMDAwMkMxLjQ4Mz" +
      "c3IDIzLjgzOTggMy40NTEgMjguMjE1OSA2LjYxNzY4IDMxLjM5MzNDOS43ODQzNSAzNC41NiAxNC4xNzEyIDM2LjUxNjggMTkgMzYuNTE2OEMyMy44Mzk3IDM2LjUxNjggMjguMjE2MSAzNC41NiAzMS4zOTM1IDMxLjM5MzNDMzQuNTYwMiAyOC4yMTU5IDM2LjUxNjcgMjMuODM5OCAzNi41MTY3IDE5LjAwMDJDMzYuNTE2NyAxNC4xNjA2IDM0LjU2MDIgOS43ODQxIDMxLjM5MzUgNi42MTc0M1pNMzIuNDM0OSA1LjU2NTU2QzM1Ljg3NTIgOS4wMDU4MSAzOC4wMDAxIDEzLjc1MDMgMzguMDAwMSAxOUMzOC4wMDAxIDI0LjI0OTQgMzUuODc1MiAyOC45OTQzIDMyLjQzNDkgMzIuNDM0NUMyOS4wMDUg" +
      "MzUuODc0OCAyNC4yNDk4IDM3Ljk5OTcgMTkgMzcuOTk5N0MxMy43NjEgMzcuOTk5NyA5LjAwNjIgMzUuODc0OCA1LjU2NTU2IDMyLjQzNDVDMi4xMjUzMSAyOC45OTQzIDAgMjQuMjQ5NCAwIDE5QzAgMTMuNzUwMyAyLjEyNTMxIDkuMDA1ODEgNS41NjU1NiA1LjU2NTU2QzkuMDA2MiAyLjEyNDkzIDEzLjc2MSAwIDE5IDBDMjQuMjQ5OCAwIDI5LjAwNSAyLjEyNDkzIDMyLjQzNDkgNS41NjU1NloiLz4KIDwvZz4KIDxwYXRoIGZpbGw9IndoaXRlIiBkPSJNMjYuNzA4OSAyMS4zMzhDMjUuNTQ1NiAyMS4zMzggMjQuNDAzNCAyMS4xNTYxIDIzLjMyMTEgMjAuNzk4NEMyMi43OTA3IDIwLjYxNzUgMj" +
      "IuMTM4NyAyMC43ODM1IDIxLjgxNSAyMS4xMTU5TDE5LjY3ODcgMjIuNzI4N0MxNy4yMDExIDIxLjQwNjEgMTUuNjc1IDE5Ljg4MDUgMTQuMzcwNSAxNy40MjE1TDE1LjkzNTggMTUuMzQwOEMxNi4zNDI0IDE0LjkzNDcgMTYuNDg4MyAxNC4zNDE0IDE2LjMxMzUgMTMuNzg0OEMxNS45NTQzIDEyLjY5NjcgMTUuNzcxOCAxMS41NTUxIDE1Ljc3MTggMTAuMzkxNEMxNS43NzE5IDkuNTUwNjUgMTUuMDg3OSA4Ljg2NjcgMTQuMjQ3MyA4Ljg2NjdIMTAuNzU4QzkuOTE3MzUgOC44NjY3IDkuMjMzNCA5LjU1MDY1IDkuMjMzNCAxMC4zOTEzQzkuMjMzNCAyMC4wMjc0IDE3LjA3MjggMjcuODY2NyAyNi43" +
      "MDg5IDI3Ljg2NjdDMjcuNTQ5NSAyNy44NjY3IDI4LjIzMzUgMjcuMTgyOCAyOC4yMzM1IDI2LjM0MjFWMjIuODYyNkMyOC4yMzM0IDIyLjAyMiAyNy41NDk1IDIxLjMzOCAyNi43MDg5IDIxLjMzOFoiLz4KPC9zdmc+Cg==";
    me._call__img.setAttribute("src", hs);
    hs = "";
    hs +=
      "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;";
    els.setAttribute("style", hs);
    els["ondragstart"] = function () {
      return false;
    };
    el.appendChild(els);
    el.ggSubElement = els;
    el.ggId = "call";
    el.ggDx = 0;
    el.ggDy = 0;
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1, def: "" };
    el.ggVisible = true;
    el.className = "ggskin ggskin_svg ";
    el.ggType = "svg";
    hs = "";
    hs += "cursor : pointer;";
    hs += "height : 35px;";
    hs += "left : calc(50% - ((35px + 0px) / 2) + 0px);";
    hs += "position : absolute;";
    hs += "top : calc(50% - ((35px + 0px) / 2) + 0px);";
    hs += "visibility : inherit;";
    hs += "width : 35px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "50% 50%";
    me._call.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._call.ggUpdatePosition = function (useTransition) {};
    me._pad_call.appendChild(me._call);
    me._container_lienhe.appendChild(me._pad_call);
    el = me._pad_fb = document.createElement("div");
    el.ggId = "pad_fb";
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1, def: "" };
    el.ggVisible = true;
    el.className = "ggskin ggskin_rectangle ";
    el.ggType = "rectangle";
    hs = "";
    hs += "border : 0px solid #000000;";
    hs += "bottom : 0px;";
    hs += "cursor : pointer;";
    hs += "height : 40px;";
    hs += "left : 0px;";
    hs += "position : absolute;";
    hs += "visibility : inherit;";
    hs += "width : 40px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "50% 50%";
    me._pad_fb.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._pad_fb.onclick = function (e) {
      player.openUrl(
        "https://www.facebook.com/omgeventsmanagement/ ",
        "_blank"
      );
    };
    me._pad_fb.ggUpdatePosition = function (useTransition) {};
    el = me._facebook = document.createElement("div");
    els = me._facebook__img = document.createElement("img");
    els.className = "ggskin ggskin_svg";
    hs =
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzOCAzOCIgZmlsbD0ibm9uZSIgd2lkdGg9IjM4IiBoZWlnaHQ9IjM4Ij4KIDxnIG9wYWNpdHk9IjAuOSI+CiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IndoaXRlIiBkPSJNMzEuMDkwNiA2LjU1MzcxQzI3Ljk0MzggMy40MTc1NiAyMy42MDk1IDEuNDY4OTIgMTguODE2NiAxLjQ2ODkyQzE0LjAyNDQgMS40Njg5MiA5LjY4OTc0IDMuNDE3NTYgNi41NTM1OSA2LjU1MzcxQzMuNDE3MDcgOS42ODk4NSAxLjQ2ODggMTQuMDI0MSAxLjQ2ODggMTguODE3MU" +
      "MxLjQ2ODggMjMuNjEgMy40MTcwNyAyNy45NDQgNi41NTM1OSAzMS4wOTA3QzkuNjg5NzQgMzQuMjI2OSAxNC4wMjQ0IDM2LjE2NDkgMTguODE2NiAzNi4xNjQ5QzIzLjYwOTUgMzYuMTY0OSAyNy45NDM4IDM0LjIyNjkgMzEuMDkwNiAzMS4wOTA3QzM0LjIyNjggMjcuOTQ0IDM2LjE2NDggMjMuNjEgMzYuMTY0OCAxOC44MTcxQzM2LjE2NDggMTQuMDI0MSAzNC4yMjY4IDkuNjg5ODUgMzEuMDkwNiA2LjU1MzcxWk0xOC44MTY1IDBDMjQuMDE1NyAwIDI4LjcxNDggMi4xMDQ0NCAzMi4xMjE4IDUuNTExOTFDMzUuNTI4OSA4LjkxOSAzNy42MzM0IDEzLjYxNzcgMzcuNjMzNCAxOC44MTY5QzM3LjYz" +
      "MzQgMjQuMDE1NyAzNS41Mjg5IDI4LjcxNDggMzIuMTIxOCAzMi4xMjE4QzI4LjcxNDggMzUuNTI4OSAyNC4wMTU3IDM3LjYzMzQgMTguODE2NSAzNy42MzM0QzEzLjYxNzcgMzcuNjMzNCA4LjkxODYyIDM1LjUyODkgNS41MTE1MyAzMi4xMjE4QzIuMTA0NDQgMjguNzE0OCAwIDI0LjAxNTcgMCAxOC44MTY5QzAgMTMuNjE3NyAyLjEwNDQ0IDguOTE5IDUuNTExNTMgNS41MTE5MUM4LjkxODYyIDIuMTA0NDQgMTMuNjE3NyAwIDE4LjgxNjUgMFoiLz4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0id2hpdGUiIGQ9Ik0yMC4yNTQ2IDE0Ljk3MlYxMy" +
      "40M0MyMC4yNTQ2IDEyLjY5MDUgMjAuNzQ0NCAxMi41MTM0IDIxLjA5ODkgMTIuNTEzNEMyMS40NDI0IDEyLjUxMzQgMjMuMjU1NCAxMi41MTM0IDIzLjI1NTQgMTIuNTEzNFY5LjIyMDdIMjAuMjg2MUMxNi45ODMxIDkuMjIwNyAxNi4yNDMzIDExLjY1ODggMTYuMjQzMyAxMy4yNDI2VjE0Ljk3MkgxNC4zMjYyVjE4LjgxNjlIMTYuMjY0MkMxNi4yNjQyIDIzLjE4MjMgMTYuMjY0MiAyOC40MjMzIDE2LjI2NDIgMjguNDIzM0gyMC4xMDlDMjAuMTA5IDI4LjQyMzMgMjAuMTA5IDIzLjEwOTQgMjAuMTA5IDE4LjgxNjlIMjIuOTUzM0wyMy4wNzg0IDE3LjMwNkwyMy4zMDc1IDE0Ljk3MkgyMC4yNTQ2" +
      "WiIvPgogPC9nPgo8L3N2Zz4K";
    me._facebook__img.setAttribute("src", hs);
    hs = "";
    hs +=
      "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;";
    els.setAttribute("style", hs);
    els["ondragstart"] = function () {
      return false;
    };
    el.appendChild(els);
    el.ggSubElement = els;
    el.ggId = "facebook";
    el.ggDx = 0;
    el.ggDy = 0;
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1, def: "" };
    el.ggVisible = true;
    el.className = "ggskin ggskin_svg ";
    el.ggType = "svg";
    hs = "";
    hs += "cursor : pointer;";
    hs += "height : 35px;";
    hs += "left : calc(50% - ((35px + 0px) / 2) + 0px);";
    hs += "position : absolute;";
    hs += "top : calc(50% - ((35px + 0px) / 2) + 0px);";
    hs += "visibility : inherit;";
    hs += "width : 35px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "50% 50%";
    me._facebook.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._facebook.ggUpdatePosition = function (useTransition) {};
    me._pad_fb.appendChild(me._facebook);
    me._container_lienhe.appendChild(me._pad_fb);
    el = me._pad_zalo = document.createElement("div");
    el.ggId = "pad_zalo";
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1, def: "" };
    el.ggVisible = false;
    el.className = "ggskin ggskin_rectangle ";
    el.ggType = "rectangle";
    hs = "";
    hs += "border : 0px solid #000000;";
    hs += "bottom : 0px;";
    hs += "cursor : pointer;";
    hs += "height : 40px;";
    hs += "left : 0px;";
    hs += "position : absolute;";
    hs += "visibility : hidden;";
    hs += "width : 40px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "50% 50%";
    me._pad_zalo.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._pad_zalo.ggUpdatePosition = function (useTransition) {};
    el = me._zalo = document.createElement("div");
    els = me._zalo__img = document.createElement("img");
    els.className = "ggskin ggskin_svg";
    hs =
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzOCAzOCIgZmlsbD0ibm9uZSIgd2lkdGg9IjM4IiBoZWlnaHQ9IjM4Ij4KIDxnIG9wYWNpdHk9IjAuOSI+CiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IndoaXRlIiBkPSJNMzEuMzkzNSA2LjYxNzQzQzI4LjIxNjEgMy40NTA3NSAyMy44Mzk2IDEuNDgzMTQgMTkgMS40ODMxNEMxNC4xNzEyIDEuNDgzMTQgOS43ODQzNCAzLjQ1MDc1IDYuNjE3NjYgNi42MTc0M0MzLjQ1MDk5IDkuNzg0MSAxLjQ4Mzc2IDE0LjE2MDYgMS40ODM3NiAxOS4wMDAyQzEuND" +
      "gzNzYgMjMuODM5OCAzLjQ1MDk5IDI4LjIxNTkgNi42MTc2NiAzMS4zOTMzQzkuNzg0MzQgMzQuNTYgMTQuMTcxMiAzNi41MTY4IDE5IDM2LjUxNjhDMjMuODM5NiAzNi41MTY4IDI4LjIxNjEgMzQuNTYgMzEuMzkzNSAzMS4zOTMzQzM0LjU2MDIgMjguMjE1OSAzNi41MTY3IDIzLjgzOTggMzYuNTE2NyAxOS4wMDAyQzM2LjUxNjcgMTQuMTYwNiAzNC41NjAyIDkuNzg0MSAzMS4zOTM1IDYuNjE3NDNaTTMyLjQzNDkgNS41NjU1NkMzNS44NzUyIDkuMDA1ODEgMzguMDAwMSAxMy43NTAzIDM4LjAwMDEgMTlDMzguMDAwMSAyNC4yNDk0IDM1Ljg3NTIgMjguOTk0MyAzMi40MzQ5IDMyLjQzNDVDMjku" +
      "MDA1IDM1Ljg3NDggMjQuMjQ5OCAzNy45OTk3IDE5IDM3Ljk5OTdDMTMuNzYxIDM3Ljk5OTcgOS4wMDYyIDM1Ljg3NDggNS41NjU1NiAzMi40MzQ1QzIuMTI1MzEgMjguOTk0MyAwIDI0LjI0OTQgMCAxOUMwIDEzLjc1MDMgMi4xMjUzMSA5LjAwNTgxIDUuNTY1NTYgNS41NjU1NkM5LjAwNjIgMi4xMjQ5MyAxMy43NjEgMCAxOSAwQzI0LjI0OTggMCAyOS4wMDUgMi4xMjQ5MyAzMi40MzQ5IDUuNTY1NTZaIi8+CiA8L2c+CiA8cGF0aCBmaWxsPSJ3aGl0ZSIgZD0iTTEyLjg4MzkgMjAuNjkzN1YyMkg3LjQwMDMzVjIwLjY5MzdIMTIuODgzOVpNMTIuNzM0MiAxNS42NTkyTDcuOTU4MjEgMjJINi44OT" +
      "Y4OFYyMC45NDU1TDExLjY0NTcgMTQuNjM4N0gxMi43MzQyVjE1LjY1OTJaTTEyLjEwMTUgMTQuNjM4N1YxNS45NDVINi45Nzg1MlYxNC42Mzg3SDEyLjEwMTVaTTE4LjM0NyAyMC41MjM3VjE3LjAxMzFDMTguMzQ3IDE2Ljc1IDE4LjI5OTQgMTYuNTIzMyAxOC4yMDQxIDE2LjMzMjhDMTguMTA4OSAxNi4xNDIzIDE3Ljk2MzcgMTUuOTk0OSAxNy43Njg3IDE1Ljg5MDVDMTcuNTc4MiAxNS43ODYyIDE3LjMzNzggMTUuNzM0MSAxNy4wNDc2IDE1LjczNDFDMTYuNzggMTUuNzM0MSAxNi41NDg2IDE1Ljc3OTQgMTYuMzUzNiAxNS44NzAxQzE2LjE1ODYgMTUuOTYwOCAxNi4wMDY2IDE2LjA4MzMgMTUu" +
      "ODk3OCAxNi4yMzc1QzE1Ljc4ODkgMTYuMzkxNyAxNS43MzQ1IDE2LjU2NjQgMTUuNzM0NSAxNi43NjE0SDE0LjEwMTdDMTQuMTAxNyAxNi40NzExIDE0LjE3MiAxNi4xODk5IDE0LjMxMjYgMTUuOTE3OEMxNC40NTMyIDE1LjY0NTYgMTQuNjU3MyAxNS40MDMgMTQuOTI0OSAxNS4xODk4QzE1LjE5MjUgMTQuOTc2NiAxNS41MTIzIDE0LjgwODggMTUuODg0MiAxNC42ODYzQzE2LjI1NjEgMTQuNTYzOSAxNi42NzM0IDE0LjUwMjcgMTcuMTM2IDE0LjUwMjdDMTcuNjg5MyAxNC41MDI3IDE4LjE3OTIgMTQuNTk1NiAxOC42MDU1IDE0Ljc4MTZDMTkuMDM2NCAxNC45Njc2IDE5LjM3NDMgMTUuMjQ4OC" +
      "AxOS42MTkyIDE1LjYyNTJDMTkuODY4NyAxNS45OTcxIDE5Ljk5MzQgMTYuNDY0MyAxOS45OTM0IDE3LjAyNjdWMjAuMjk5MkMxOS45OTM0IDIwLjYzNDggMjAuMDE2MSAyMC45MzY0IDIwLjA2MTUgMjEuMjA0QzIwLjExMTQgMjEuNDY3MSAyMC4xODE3IDIxLjY5NjEgMjAuMjcyNCAyMS44OTExVjIySDE4LjU5MTlDMTguNTE0OCAyMS44MjMxIDE4LjQ1MzYgMjEuNTk4NiAxOC40MDgyIDIxLjMyNjVDMTguMzY3NCAyMS4wNDk4IDE4LjM0NyAyMC43ODIyIDE4LjM0NyAyMC41MjM3Wk0xOC41ODUxIDE3LjUyMzRMMTguNTk4NyAxOC41MzcxSDE3LjQyMTdDMTcuMTE3OSAxOC41MzcxIDE2Ljg1MDMg" +
      "MTguNTY2NiAxNi42MTg5IDE4LjYyNTVDMTYuMzg3NiAxOC42Nzk5IDE2LjE5NDkgMTguNzYxNiAxNi4wNDA3IDE4Ljg3MDRDMTUuODg2NCAxOC45NzkzIDE1Ljc3MDggMTkuMTEwOCAxNS42OTM3IDE5LjI2NUMxNS42MTY2IDE5LjQxOTIgMTUuNTc4IDE5LjU5MzkgMTUuNTc4IDE5Ljc4ODlDMTUuNTc4IDE5Ljk4MzkgMTUuNjIzNCAyMC4xNjMxIDE1LjcxNDEgMjAuMzI2NEMxNS44MDQ4IDIwLjQ4NTEgMTUuOTM2MyAyMC42MDk4IDE2LjEwODcgMjAuNzAwNkMxNi4yODU2IDIwLjc5MTMgMTYuNDk4NyAyMC44MzY2IDE2Ljc0ODIgMjAuODM2NkMxNy4wODM4IDIwLjgzNjYgMTcuMzc2NCAyMC43Nj" +
      "g2IDE3LjYyNTggMjAuNjMyNUMxNy44Nzk4IDIwLjQ5MTkgMTguMDc5NCAyMC4zMjE4IDE4LjIyNDUgMjAuMTIyM0MxOC4zNjk3IDE5LjkxODIgMTguNDQ2OCAxOS43MjU0IDE4LjQ1NTkgMTkuNTQ0TDE4Ljk4NjUgMjAuMjcxOUMxOC45MzIxIDIwLjQ1NzkgMTguODM5MSAyMC42NTc1IDE4LjcwNzYgMjAuODcwNkMxOC41NzYxIDIxLjA4MzggMTguNDAzNyAyMS4yODc5IDE4LjE5MDUgMjEuNDgyOUMxNy45ODE5IDIxLjY3MzQgMTcuNzMwMiAyMS44Mjk5IDE3LjQzNTMgMjEuOTUyNEMxNy4xNDUxIDIyLjA3NDggMTYuODA5NCAyMi4xMzYxIDE2LjQyODQgMjIuMTM2MUMxNS45NDc3IDIyLjEzNjEg" +
      "MTUuNTE5MSAyMi4wNDA4IDE1LjE0MjYgMjEuODUwM0MxNC43NjYxIDIxLjY1NTMgMTQuNDcxMyAyMS4zOTQ1IDE0LjI1ODIgMjEuMDY3OUMxNC4wNDUgMjAuNzM2OCAxMy45Mzg0IDIwLjM2MjYgMTMuOTM4NCAxOS45NDU0QzEzLjkzODQgMTkuNTU1MyAxNC4wMTEgMTkuMjEwNiAxNC4xNTYxIDE4LjkxMTNDMTQuMzA1OCAxOC42MDc0IDE0LjUyMzUgMTguMzUzNCAxNC44MDkyIDE4LjE0OTNDMTUuMDk5NSAxNy45NDUyIDE1LjQ1MzMgMTcuNzkxIDE1Ljg3MDYgMTcuNjg2NkMxNi4yODc4IDE3LjU3NzggMTYuNzY0MSAxNy41MjM0IDE3LjI5OTMgMTcuNTIzNEgxOC41ODUxWk0yMy40NjMyIDExLj" +
      "U1VjIySDIxLjgxNjdWMTEuNTVIMjMuNDYzMlpNMjQuOTQ2MyAxOC40MDFWMTguMjQ0NUMyNC45NDYzIDE3LjcxMzkgMjUuMDIzNCAxNy4yMjE3IDI1LjE3NzYgMTYuNzY4MkMyNS4zMzE4IDE2LjMxMDEgMjUuNTU0MSAxNS45MTMyIDI1Ljg0NDQgMTUuNTc3NkMyNi4xMzkyIDE1LjIzNzQgMjYuNDk3NSAxNC45NzQ0IDI2LjkxOTMgMTQuNzg4NEMyNy4zNDU2IDE0LjU5NzkgMjcuODI2NCAxNC41MDI3IDI4LjM2MTYgMTQuNTAyN0MyOC45MDEzIDE0LjUwMjcgMjkuMzgyMSAxNC41OTc5IDI5LjgwMzkgMTQuNzg4NEMzMC4yMzAzIDE0Ljk3NDQgMzAuNTkwOSAxNS4yMzc0IDMwLjg4NTcgMTUuNTc3" +
      "NkMzMS4xODA1IDE1LjkxMzIgMzEuNDA1IDE2LjMxMDEgMzEuNTU5MiAxNi43NjgyQzMxLjcxMzQgMTcuMjIxNyAzMS43OTA1IDE3LjcxMzkgMzEuNzkwNSAxOC4yNDQ1VjE4LjQwMUMzMS43OTA1IDE4LjkzMTcgMzEuNzEzNCAxOS40MjM4IDMxLjU1OTIgMTkuODc3M0MzMS40MDUgMjAuMzMwOSAzMS4xODA1IDIwLjcyNzggMzAuODg1NyAyMS4wNjc5QzMwLjU5MDkgMjEuNDAzNiAzMC4yMzI1IDIxLjY2NjYgMjkuODEwNyAyMS44NTcxQzI5LjM4ODkgMjIuMDQzMSAyOC45MTA0IDIyLjEzNjEgMjguMzc1MiAyMi4xMzYxQzI3LjgzNTUgMjIuMTM2MSAyNy4zNTI0IDIyLjA0MzEgMjYuOTI2MSAyMS" +
      "44NTcxQzI2LjUwNDMgMjEuNjY2NiAyNi4xNDYgMjEuNDAzNiAyNS44NTEyIDIxLjA2NzlDMjUuNTU2MyAyMC43Mjc4IDI1LjMzMTggMjAuMzMwOSAyNS4xNzc2IDE5Ljg3NzNDMjUuMDIzNCAxOS40MjM4IDI0Ljk0NjMgMTguOTMxNyAyNC45NDYzIDE4LjQwMVpNMjYuNTg1OSAxOC4yNDQ1VjE4LjQwMUMyNi41ODU5IDE4LjczMjEgMjYuNjE5OSAxOS4wNDUxIDI2LjY4OCAxOS4zMzk5QzI2Ljc1NiAxOS42MzQ3IDI2Ljg2MjYgMTkuODkzMiAyNy4wMDc3IDIwLjExNTVDMjcuMTUyOSAyMC4zMzc3IDI3LjMzODggMjAuNTEyMyAyNy41NjU2IDIwLjYzOTNDMjcuNzkyNCAyMC43NjYzIDI4LjA2MjMg" +
      "MjAuODI5OCAyOC4zNzUyIDIwLjgyOThDMjguNjc5MSAyMC44Mjk4IDI4Ljk0MjIgMjAuNzY2MyAyOS4xNjQ0IDIwLjYzOTNDMjkuMzkxMiAyMC41MTIzIDI5LjU3NzEgMjAuMzM3NyAyOS43MjIzIDIwLjExNTVDMjkuODY3NCAxOS44OTMyIDI5Ljk3NCAxOS42MzQ3IDMwLjA0MiAxOS4zMzk5QzMwLjExNDYgMTkuMDQ1MSAzMC4xNTA5IDE4LjczMjEgMzAuMTUwOSAxOC40MDFWMTguMjQ0NUMzMC4xNTA5IDE3LjkxOCAzMC4xMTQ2IDE3LjYwOTUgMzAuMDQyIDE3LjMxOTNDMjkuOTc0IDE3LjAyNDQgMjkuODY1MiAxNi43NjM2IDI5LjcxNTUgMTYuNTM2OUMyOS41NzAzIDE2LjMxMDEgMjkuMzg0NC" +
      "AxNi4xMzMyIDI5LjE1NzYgMTYuMDA2MkMyOC45MzU0IDE1Ljg3NDcgMjguNjcgMTUuODA4OSAyOC4zNjE2IDE1LjgwODlDMjguMDUzMiAxNS44MDg5IDI3Ljc4NTYgMTUuODc0NyAyNy41NTg4IDE2LjAwNjJDMjcuMzM2NiAxNi4xMzMyIDI3LjE1MjkgMTYuMzEwMSAyNy4wMDc3IDE2LjUzNjlDMjYuODYyNiAxNi43NjM2IDI2Ljc1NiAxNy4wMjQ0IDI2LjY4OCAxNy4zMTkzQzI2LjYxOTkgMTcuNjA5NSAyNi41ODU5IDE3LjkxOCAyNi41ODU5IDE4LjI0NDVaIi8+Cjwvc3ZnPgo=";
    me._zalo__img.setAttribute("src", hs);
    hs = "";
    hs +=
      "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;";
    els.setAttribute("style", hs);
    els["ondragstart"] = function () {
      return false;
    };
    el.appendChild(els);
    el.ggSubElement = els;
    el.ggId = "zalo";
    el.ggDx = 0;
    el.ggDy = 0;
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1, def: "" };
    el.ggVisible = true;
    el.className = "ggskin ggskin_svg ";
    el.ggType = "svg";
    hs = "";
    hs += "cursor : pointer;";
    hs += "height : 35px;";
    hs += "left : calc(50% - ((35px + 0px) / 2) + 0px);";
    hs += "position : absolute;";
    hs += "top : calc(50% - ((35px + 0px) / 2) + 0px);";
    hs += "visibility : inherit;";
    hs += "width : 35px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "50% 50%";
    me._zalo.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._zalo.ggUpdatePosition = function (useTransition) {};
    me._pad_zalo.appendChild(me._zalo);
    me._container_lienhe.appendChild(me._pad_zalo);
    me._container_1.appendChild(me._container_lienhe);
    el = me._cont_thongtin_lienhe = document.createElement("div");
    el.ggId = "cont_thongtin_lienhe";
    el.ggDx = 0;
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1, def: "" };
    el.ggVisible = true;
    el.className = "ggskin ggskin_container ";
    el.ggType = "container";
    hs = "";
    hs += "bottom : 92px;";
    hs += "cursor : pointer;";
    hs += "height : 170px;";
    hs += "left : calc(50% - ((100% + 0px) / 2) + 0px);";
    hs += "position : absolute;";
    hs += "visibility : inherit;";
    hs += "width : 100%;";
    hs += "pointer-events:none;";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "50% 50%";
    me._cont_thongtin_lienhe.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._cont_thongtin_lienhe.ggUpdatePosition = function (useTransition) {};
    el = me._info_location = document.createElement("div");
    els = me._info_location__text = document.createElement("div");
    el.className = "ggskin ggskin_textdiv";
    el.ggTextDiv = els;
    el.ggId = "info_location";
    el.ggDx = 0;
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1, def: "" };
    el.ggVisible = true;
    el.className = "ggskin ggskin_text ";
    el.ggType = "text";
    hs = "";
    hs += "border : 0px solid #000000;";
    hs += "bottom : -40px;";
    hs += "color : rgba(255,255,255,1);";
    hs += "cursor : default;";
    hs += "height : 111px;";
    hs += "left : calc(50% - ((100% + 0px) / 2) + 0px);";
    hs += "position : absolute;";
    hs += "visibility : inherit;";
    hs += "width : 100%;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "50% 50%";
    hs = "";
    hs += "box-sizing: border-box;";
    hs += "cursor: default;";
    hs += "width: 100%;";
    hs += "height: 100%;";
    hs += "text-align: left;";
    hs += "white-space: pre;";
    hs += "padding: 10px 60px 10px 60px;";
    hs += "overflow: hidden;";
    els.setAttribute("style", hs);
    me._info_location.ggUpdateText = function () {
      var params = [];
      var hs = player._(
        "222 Điện Biên Phủ, \nPhường Võ Thị Sáu, Quận 3, \nThành phố Hồ Chí Minh, \nViệt Nam",
        params
      );
      if (hs != this.ggText) {
        this.ggText = hs;
        this.ggTextDiv.innerHTML = hs;
        if (this.ggUpdatePosition) this.ggUpdatePosition();
      }
    };
    me._info_location.ggUpdateText();
    el.appendChild(els);
    me._info_location.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._info_location.ggUpdatePosition = function (useTransition) {};
    el = me._location_mini = document.createElement("div");
    els = me._location_mini__img = document.createElement("img");
    els.className = "ggskin ggskin_svg";
    hs =
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNCAzOSIgZmlsbD0ibm9uZSIgd2lkdGg9IjM0IiBoZWlnaHQ9IjM5Ij4KIDxnIGZpbHRlcj0idXJsKCNmaWx0ZXIwX2RkZF8zXzIwNykiPgogIDxwYXRoIGZpbGw9IndoaXRlIiBkPSJNMTYuNjc2NSAzMS45NDM2QzE0LjkzMDUgMzAuNDU0MyAxMy4zMTIxIDI4LjgyMTYgMTEuODM4MyAyNy4wNjI1QzkuNjI2NDggMjQuNDIwOCA3IDIwLjQ4NjcgNyAxNi43Mzc3QzYuOTk5MDQgMTQuODIzMSA3LjU2NjA5IDEyLjk1MTIgOC42MjkzOCAxMS4zNTlDOS42OTI2NyA5Ljc2Njc1IDExLjIwNDQgOC41MjU3NC" +
      "AxMi45NzMzIDcuNzkzQzE0Ljc0MjEgNy4wNjAyNyAxNi42ODg2IDYuODY4NzUgMTguNTY2NCA3LjI0MjY4QzIwLjQ0NDEgNy42MTY2MSAyMi4xNjg3IDguNTM5MTggMjMuNTIxOSA5Ljg5MzY0QzI0LjQyMjkgMTAuNzkwNiAyNS4xMzcgMTEuODU3MyAyNS42MjMgMTMuMDMyMUMyNi4xMDg5IDE0LjIwNjkgMjYuMzU3MSAxNS40NjY0IDI2LjM1MyAxNi43Mzc3QzI2LjM1MyAyMC40ODY3IDIzLjcyNjUgMjQuNDIwOCAyMS41MTQ4IDI3LjA2MjVDMjAuMDQwOSAyOC44MjE2IDE4LjQyMjUgMzAuNDU0MyAxNi42NzY1IDMxLjk0MzZaTTE2LjY3NjUgMTIuNTkwNkMxNS41NzY2IDEyLjU5MDYgMTQuNTIx" +
      "OCAxMy4wMjc1IDEzLjc0NDEgMTMuODA1M0MxMi45NjY0IDE0LjU4MyAxMi41Mjk0IDE1LjYzNzggMTIuNTI5NCAxNi43Mzc3QzEyLjUyOTQgMTcuODM3NiAxMi45NjY0IDE4Ljg5MjQgMTMuNzQ0MSAxOS42NzAxQzE0LjUyMTggMjAuNDQ3OCAxNS41NzY2IDIwLjg4NDggMTYuNjc2NSAyMC44ODQ4QzE3Ljc3NjQgMjAuODg0OCAxOC44MzEyIDIwLjQ0NzggMTkuNjA4OSAxOS42NzAxQzIwLjM4NjcgMTguODkyNCAyMC44MjM2IDE3LjgzNzYgMjAuODIzNiAxNi43Mzc3QzIwLjgyMzYgMTUuNjM3OCAyMC4zODY3IDE0LjU4MyAxOS42MDg5IDEzLjgwNTNDMTguODMxMiAxMy4wMjc1IDE3Ljc3NjQgMT" +
      "IuNTkwNiAxNi42NzY1IDEyLjU5MDZaIi8+CiA8L2c+CiA8ZGVmcz4KICA8ZmlsdGVyIGlkPSJmaWx0ZXIwX2RkZF8zXzIwNyIgeT0iMC4yNjg4OTEiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiIgeD0iMC4yMTI1NTUiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjMyLjkyNzkiIGhlaWdodD0iMzguNDYyMiI+CiAgIDxmZUZsb29kIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4IiBmbG9vZC1vcGFjaXR5PSIwIi8+CiAgIDxmZUNvbG9yTWF0cml4IHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMTI3IDAiIHJlc3VsdD0iaGFy" +
      "ZEFscGhhIiBpbj0iU291cmNlQWxwaGEiIHR5cGU9Im1hdHJpeCIvPgogICA8ZmVPZmZzZXQvPgogICA8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIzLjM5MzcyIi8+CiAgIDxmZUNvbXBvc2l0ZSBpbjI9ImhhcmRBbHBoYSIgb3BlcmF0b3I9Im91dCIvPgogICA8ZmVDb2xvck1hdHJpeCB2YWx1ZXM9IjAgMCAwIDAgMSAwIDAgMCAwIDEgMCAwIDAgMCAxIDAgMCAwIDAuMjUgMCIgdHlwZT0ibWF0cml4Ii8+CiAgIDxmZUJsZW5kIHJlc3VsdD0iZWZmZWN0MV9kcm9wU2hhZG93XzNfMjA3IiBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgbW9kZT0ibm9ybWFsIi8+CiAgIDxmZUNvbG9yTWF0cm" +
      "l4IHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMTI3IDAiIHJlc3VsdD0iaGFyZEFscGhhIiBpbj0iU291cmNlQWxwaGEiIHR5cGU9Im1hdHJpeCIvPgogICA8ZmVPZmZzZXQvPgogICA8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIyLjI2MjQ4Ii8+CiAgIDxmZUNvbXBvc2l0ZSBpbjI9ImhhcmRBbHBoYSIgb3BlcmF0b3I9Im91dCIvPgogICA8ZmVDb2xvck1hdHJpeCB2YWx1ZXM9IjAgMCAwIDAgMSAwIDAgMCAwIDEgMCAwIDAgMCAxIDAgMCAwIDAuMyAwIiB0eXBlPSJtYXRyaXgiLz4KICAgPGZlQmxlbmQgcmVzdWx0PSJlZmZlY3QyX2Ryb3BTaGFkb3df" +
      "M18yMDciIGluMj0iZWZmZWN0MV9kcm9wU2hhZG93XzNfMjA3IiBtb2RlPSJub3JtYWwiLz4KICAgPGZlQ29sb3JNYXRyaXggdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAxMjcgMCIgcmVzdWx0PSJoYXJkQWxwaGEiIGluPSJTb3VyY2VBbHBoYSIgdHlwZT0ibWF0cml4Ii8+CiAgIDxmZU9mZnNldC8+CiAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjEuMTMxMjQiLz4KICAgPGZlQ29tcG9zaXRlIGluMj0iaGFyZEFscGhhIiBvcGVyYXRvcj0ib3V0Ii8+CiAgIDxmZUNvbG9yTWF0cml4IHZhbHVlcz0iMCAwIDAgMCAxIDAgMCAwIDAgMSAwIDAgMCAwID" +
      "EgMCAwIDAgMC4zNSAwIiB0eXBlPSJtYXRyaXgiLz4KICAgPGZlQmxlbmQgcmVzdWx0PSJlZmZlY3QzX2Ryb3BTaGFkb3dfM18yMDciIGluMj0iZWZmZWN0Ml9kcm9wU2hhZG93XzNfMjA3IiBtb2RlPSJub3JtYWwiLz4KICAgPGZlQmxlbmQgcmVzdWx0PSJzaGFwZSIgaW4yPSJlZmZlY3QzX2Ryb3BTaGFkb3dfM18yMDciIGluPSJTb3VyY2VHcmFwaGljIiBtb2RlPSJub3JtYWwiLz4KICA8L2ZpbHRlcj4KIDwvZGVmcz4KPC9zdmc+Cg==";
    me._location_mini__img.setAttribute("src", hs);
    hs = "";
    hs +=
      "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;";
    els.setAttribute("style", hs);
    els["ondragstart"] = function () {
      return false;
    };
    el.appendChild(els);
    el.ggSubElement = els;
    el.ggId = "location_mini";
    el.ggDy = 0;
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1, def: "" };
    el.ggVisible = true;
    el.className = "ggskin ggskin_svg ";
    el.ggType = "svg";
    hs = "";
    hs += "height : 25px;";
    hs += "left : 30px;";
    hs += "position : absolute;";
    hs += "top : calc(50% - ((25px + 0px) / 2) + 0px);";
    hs += "visibility : inherit;";
    hs += "width : 25px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "50% 50%";
    me._location_mini.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._location_mini.ggUpdatePosition = function (useTransition) {};
    me._info_location.appendChild(me._location_mini);
    me._cont_thongtin_lienhe.appendChild(me._info_location);
    el = me._info_mall = document.createElement("div");
    els = me._info_mall__text = document.createElement("div");
    el.className = "ggskin ggskin_textdiv";
    el.ggTextDiv = els;
    el.ggId = "info_mall";
    el.ggDx = 0;
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1, def: "" };
    el.ggVisible = true;
    el.className = "ggskin ggskin_text ";
    el.ggType = "text";
    hs = "";
    hs += "border : 0px solid #000000;";
    hs += "bottom : 70px;";
    hs += "color : rgba(255,255,255,1);";
    hs += "cursor : default;";
    hs += "height : 30px;";
    hs += "left : calc(50% - ((100% + 0px) / 2) + 0px);";
    hs += "position : absolute;";
    hs += "visibility : inherit;";
    hs += "width : 100%;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "50% 50%";
    hs = "";
    hs += "box-sizing: border-box;";
    hs += "cursor: default;";
    hs += "width: 100%;";
    hs += "height: 100%;";
    hs += "text-align: left;";
    hs += "white-space: pre;";
    hs += "padding: 7px 60px 7px 60px;";
    hs += "overflow: hidden;";
    els.setAttribute("style", hs);
    me._info_mall.ggUpdateText = function () {
      var params = [];
      var hs = player._("Abcde.blog@gmail.com", params);
      if (hs != this.ggText) {
        this.ggText = hs;
        this.ggTextDiv.innerHTML = hs;
        if (this.ggUpdatePosition) this.ggUpdatePosition();
      }
    };
    me._info_mall.ggUpdateText();
    el.appendChild(els);
    me._info_mall.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._info_mall.ggUpdatePosition = function (useTransition) {};
    el = me._mail_mini = document.createElement("div");
    els = me._mail_mini__img = document.createElement("img");
    els.className = "ggskin ggskin_svg";
    hs =
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMyAyOSIgZmlsbD0ibm9uZSIgd2lkdGg9IjMzIiBoZWlnaHQ9IjI5Ij4KIDxnIGZpbHRlcj0idXJsKCNmaWx0ZXIwX2RkZF8zXzIwNCkiPgogIDxwYXRoIGZpbGw9IndoaXRlIiBkPSJNMjUuODI1NiAyMy45MzU1SDcuMzEzOTVDNi43MDAyNSAyMy45MzU1IDYuMTExNjkgMjMuNjkxNyA1LjY3Nzc0IDIzLjI1NzhDNS4yNDM3OSAyMi44MjM4IDUgMjIuMjM1MyA1IDIxLjYyMTZWNy42MzcxOUM1LjAyNTk1IDcuMDQxMSA1LjI4MTE2IDYuNDc4MDggNS43MTIzMyA2LjA2NTY3QzYuMTQzNDkgNS42NTMyNS" +
      "A2LjcxNzMgNS40MjMzMyA3LjMxMzk1IDUuNDIzODlIMjUuODI1NkMyNi40MzkzIDUuNDIzODkgMjcuMDI3OCA1LjY2NzY4IDI3LjQ2MTggNi4xMDE2M0MyNy44OTU3IDYuNTM1NTggMjguMTM5NSA3LjEyNDE1IDI4LjEzOTUgNy43Mzc4NFYyMS42MjE2QzI4LjEzOTUgMjIuMjM1MyAyNy44OTU3IDIyLjgyMzggMjcuNDYxOCAyMy4yNTc4QzI3LjAyNzggMjMuNjkxNyAyNi40MzkzIDIzLjkzNTUgMjUuODI1NiAyMy45MzU1Wk03LjMxMzk1IDkuODk5MDhWMjEuNjIxNkgyNS44MjU2VjkuODk5MDhMMTYuNTY5OCAxNi4wNjgxTDcuMzEzOTUgOS44OTkwOFpNOC4yMzk1NCA3LjczNzg0TDE2LjU2OTgg" +
      "MTMuMjkxM0wyNC45IDcuNzM3ODRIOC4yMzk1NFoiLz4KIDwvZz4KIDxkZWZzPgogIDxmaWx0ZXIgaWQ9ImZpbHRlcjBfZGRkXzNfMjA0IiB5PSIwLjk0OTc2MiIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIiB4PSIwLjUyNTg3MyIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB3aWR0aD0iMzIuMDg3OCIgaGVpZ2h0PSIyNy40NTk5Ij4KICAgPGZlRmxvb2QgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIGZsb29kLW9wYWNpdHk9IjAiLz4KICAgPGZlQ29sb3JNYXRyaXggdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAxMjcgMCIgcmVzdW" +
      "x0PSJoYXJkQWxwaGEiIGluPSJTb3VyY2VBbHBoYSIgdHlwZT0ibWF0cml4Ii8+CiAgIDxmZU9mZnNldC8+CiAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjIuMjM3MDYiLz4KICAgPGZlQ29tcG9zaXRlIGluMj0iaGFyZEFscGhhIiBvcGVyYXRvcj0ib3V0Ii8+CiAgIDxmZUNvbG9yTWF0cml4IHZhbHVlcz0iMCAwIDAgMCAxIDAgMCAwIDAgMSAwIDAgMCAwIDEgMCAwIDAgMC4yNSAwIiB0eXBlPSJtYXRyaXgiLz4KICAgPGZlQmxlbmQgcmVzdWx0PSJlZmZlY3QxX2Ryb3BTaGFkb3dfM18yMDQiIGluMj0iQmFja2dyb3VuZEltYWdlRml4IiBtb2RlPSJub3JtYWwiLz4KICAgPGZlQ29s" +
      "b3JNYXRyaXggdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAxMjcgMCIgcmVzdWx0PSJoYXJkQWxwaGEiIGluPSJTb3VyY2VBbHBoYSIgdHlwZT0ibWF0cml4Ii8+CiAgIDxmZU9mZnNldC8+CiAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjEuNDkxMzgiLz4KICAgPGZlQ29tcG9zaXRlIGluMj0iaGFyZEFscGhhIiBvcGVyYXRvcj0ib3V0Ii8+CiAgIDxmZUNvbG9yTWF0cml4IHZhbHVlcz0iMCAwIDAgMCAxIDAgMCAwIDAgMSAwIDAgMCAwIDEgMCAwIDAgMC4zIDAiIHR5cGU9Im1hdHJpeCIvPgogICA8ZmVCbGVuZCByZXN1bHQ9ImVmZmVjdDJfZHJvcF" +
      "NoYWRvd18zXzIwNCIgaW4yPSJlZmZlY3QxX2Ryb3BTaGFkb3dfM18yMDQiIG1vZGU9Im5vcm1hbCIvPgogICA8ZmVDb2xvck1hdHJpeCB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIiByZXN1bHQ9ImhhcmRBbHBoYSIgaW49IlNvdXJjZUFscGhhIiB0eXBlPSJtYXRyaXgiLz4KICAgPGZlT2Zmc2V0Lz4KICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMC43NDU2ODgiLz4KICAgPGZlQ29tcG9zaXRlIGluMj0iaGFyZEFscGhhIiBvcGVyYXRvcj0ib3V0Ii8+CiAgIDxmZUNvbG9yTWF0cml4IHZhbHVlcz0iMCAwIDAgMCAxIDAgMCAwIDAgMSAw" +
      "IDAgMCAwIDEgMCAwIDAgMC4zNSAwIiB0eXBlPSJtYXRyaXgiLz4KICAgPGZlQmxlbmQgcmVzdWx0PSJlZmZlY3QzX2Ryb3BTaGFkb3dfM18yMDQiIGluMj0iZWZmZWN0Ml9kcm9wU2hhZG93XzNfMjA0IiBtb2RlPSJub3JtYWwiLz4KICAgPGZlQmxlbmQgcmVzdWx0PSJzaGFwZSIgaW4yPSJlZmZlY3QzX2Ryb3BTaGFkb3dfM18yMDQiIGluPSJTb3VyY2VHcmFwaGljIiBtb2RlPSJub3JtYWwiLz4KICA8L2ZpbHRlcj4KIDwvZGVmcz4KPC9zdmc+Cg==";
    me._mail_mini__img.setAttribute("src", hs);
    hs = "";
    hs +=
      "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;";
    els.setAttribute("style", hs);
    els["ondragstart"] = function () {
      return false;
    };
    el.appendChild(els);
    el.ggSubElement = els;
    el.ggId = "mail_mini";
    el.ggDy = 0;
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1, def: "" };
    el.ggVisible = true;
    el.className = "ggskin ggskin_svg ";
    el.ggType = "svg";
    hs = "";
    hs += "height : 25px;";
    hs += "left : 30px;";
    hs += "position : absolute;";
    hs += "top : calc(50% - ((25px + 0px) / 2) + 0px);";
    hs += "visibility : inherit;";
    hs += "width : 25px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "50% 50%";
    me._mail_mini.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._mail_mini.ggUpdatePosition = function (useTransition) {};
    me._info_mall.appendChild(me._mail_mini);
    me._cont_thongtin_lienhe.appendChild(me._info_mall);
    el = me._info_call = document.createElement("div");
    els = me._info_call__text = document.createElement("div");
    el.className = "ggskin ggskin_textdiv";
    el.ggTextDiv = els;
    el.ggId = "info_call";
    el.ggDx = 0;
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1, def: "" };
    el.ggVisible = true;
    el.className = "ggskin ggskin_text ";
    el.ggType = "text";
    hs = "";
    hs += "border : 0px solid #000000;";
    hs += "bottom : 100px;";
    hs += "color : rgba(255,255,255,1);";
    hs += "cursor : default;";
    hs += "height : 30px;";
    hs += "left : calc(50% - ((100% + 0px) / 2) + 0px);";
    hs += "position : absolute;";
    hs += "visibility : inherit;";
    hs += "width : 100%;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "50% 50%";
    hs = "";
    hs += "box-sizing: border-box;";
    hs += "cursor: default;";
    hs += "width: 100%;";
    hs += "height: 100%;";
    hs += "text-align: left;";
    hs += "white-space: pre;";
    hs += "padding: 7px 60px 7px 60px;";
    hs += "overflow: hidden;";
    els.setAttribute("style", hs);
    me._info_call.ggUpdateText = function () {
      var params = [];
      var hs = player._("0945 781 663 ", params);
      if (hs != this.ggText) {
        this.ggText = hs;
        this.ggTextDiv.innerHTML = hs;
        if (this.ggUpdatePosition) this.ggUpdatePosition();
      }
    };
    me._info_call.ggUpdateText();
    el.appendChild(els);
    me._info_call.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._info_call.ggUpdatePosition = function (useTransition) {};
    el = me._call_mini = document.createElement("div");
    els = me._call_mini__img = document.createElement("img");
    els.className = "ggskin ggskin_svg";
    hs =
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNSAyNiIgZmlsbD0ibm9uZSIgd2lkdGg9IjI1IiBoZWlnaHQ9IjI2Ij4KIDxnIGZpbHRlcj0idXJsKCNmaWx0ZXIwX2RkZF8zXzIwMSkiPgogIDxwYXRoIGZpbGw9IndoaXRlIiBkPSJNMy44NjI5NiA2LjY1NTU5TDYuMjU1NSA0LjI2NTI5QzYuNDI0MjcgNC4wOTU3OCA2LjYyNDg3IDMuOTYxMjggNi44NDU3OCAzLjg2OTUyQzcuMDY2NjkgMy43Nzc3NyA3LjMwMzU1IDMuNzMwNTYgNy41NDI3NSAzLjczMDYyQzguMDMwMjUgMy43MzA2MiA4LjQ4ODU0IDMuOTIxNTggOC44MzIyNSA0LjI2NTI5TDExLj" +
      "QwNjggNi44Mzk4QzExLjU3NjMgNy4wMDg1NyAxMS43MTA4IDcuMjA5MTcgMTEuODAyNSA3LjQzMDA4QzExLjg5NDMgNy42NTA5OSAxMS45NDE1IDcuODg3ODUgMTEuOTQxNCA4LjEyNzA2QzExLjk0MTQgOC42MTQ1NSAxMS43NTA1IDkuMDcyODQgMTEuNDA2OCA5LjQxNjU2TDkuNTI0MTggMTEuMjk5MUM5Ljk2NDg1IDEyLjI3MDQgMTAuNTc3NSAxMy4xNTQxIDExLjMzMjYgMTMuOTA3M0MxMi4wODU4IDE0LjY2NDMgMTIuOTY5NCAxNS4yNzkyIDEzLjk0MDggMTUuNzIyNUwxNS44MjM0IDEzLjgzOTlDMTUuOTkyMiAxMy42NzA0IDE2LjE5MjggMTMuNTM1OSAxNi40MTM3IDEzLjQ0NDJDMTYuNjM0" +
      "NiAxMy4zNTI0IDE2Ljg3MTUgMTMuMzA1MiAxNy4xMTA3IDEzLjMwNTNDMTcuNTk4MiAxMy4zMDUzIDE4LjA1NjUgMTMuNDk2MiAxOC40MDAyIDEzLjgzOTlMMjAuOTc2OSAxNi40MTIyQzIxLjE0NjYgMTYuNTgxMyAyMS4yODEzIDE2Ljc4MjMgMjEuMzczIDE3LjAwMzZDMjEuNDY0OCAxNy4yMjQ5IDIxLjUxMTkgMTcuNDYyMSAyMS41MTE2IDE3LjcwMTdDMjEuNTExNiAxOC4xODkyIDIxLjMyMDYgMTguNjQ3NSAyMC45NzY5IDE4Ljk5MTJMMTguNTg4OSAyMS4zNzkzQzE4LjA0MDcgMjEuOTI5NyAxNy4yODM3IDIyLjI0MTkgMTYuNTA2NCAyMi4yNDE5QzE2LjM0MjQgMjIuMjQxOSAxNi4xODUxID" +
      "IyLjIyODQgMTYuMDMwMSAyMi4yMDE1QzEzLjAwMTggMjEuNzAyOCA5Ljk5ODIgMjAuMDkyIDcuNTc0MiAxNy42NzAzQzUuMTUyNDYgMTUuMjUwOCAzLjU0Mzk1IDEyLjI0OTQgMy4wMzg0OSA5LjIxMjEyQzIuODg1NzMgOC4yODQzMSAzLjE5MzUgNy4zMjk1NCAzLjg2Mjk2IDYuNjU1NTlaIi8+CiA8L2c+CiA8ZGVmcz4KICA8ZmlsdGVyIGlkPSJmaWx0ZXIwX2RkZF8zXzIwMSIgeT0iMC44MDc3MzYiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiIgeD0iMC4wNzcxMTUxIiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSIyNC4zNTc0IiBoZWlnaHQ9IjI0LjM1NzEi" +
      "PgogICA8ZmVGbG9vZCByZXN1bHQ9IkJhY2tncm91bmRJbWFnZUZpeCIgZmxvb2Qtb3BhY2l0eT0iMCIvPgogICA8ZmVDb2xvck1hdHJpeCB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIiByZXN1bHQ9ImhhcmRBbHBoYSIgaW49IlNvdXJjZUFscGhhIiB0eXBlPSJtYXRyaXgiLz4KICAgPGZlT2Zmc2V0Lz4KICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMS40NjE0NCIvPgogICA8ZmVDb21wb3NpdGUgaW4yPSJoYXJkQWxwaGEiIG9wZXJhdG9yPSJvdXQiLz4KICAgPGZlQ29sb3JNYXRyaXggdmFsdWVzPSIwIDAgMCAwIDEgMCAwIDAgMCAxID" +
      "AgMCAwIDAgMSAwIDAgMCAwLjI1IDAiIHR5cGU9Im1hdHJpeCIvPgogICA8ZmVCbGVuZCByZXN1bHQ9ImVmZmVjdDFfZHJvcFNoYWRvd18zXzIwMSIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIG1vZGU9Im5vcm1hbCIvPgogICA8ZmVDb2xvck1hdHJpeCB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIiByZXN1bHQ9ImhhcmRBbHBoYSIgaW49IlNvdXJjZUFscGhhIiB0eXBlPSJtYXRyaXgiLz4KICAgPGZlT2Zmc2V0Lz4KICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMC45NzQyOTUiLz4KICAgPGZlQ29tcG9zaXRlIGluMj0iaGFyZEFscGhh" +
      "IiBvcGVyYXRvcj0ib3V0Ii8+CiAgIDxmZUNvbG9yTWF0cml4IHZhbHVlcz0iMCAwIDAgMCAxIDAgMCAwIDAgMSAwIDAgMCAwIDEgMCAwIDAgMC4zIDAiIHR5cGU9Im1hdHJpeCIvPgogICA8ZmVCbGVuZCByZXN1bHQ9ImVmZmVjdDJfZHJvcFNoYWRvd18zXzIwMSIgaW4yPSJlZmZlY3QxX2Ryb3BTaGFkb3dfM18yMDEiIG1vZGU9Im5vcm1hbCIvPgogICA8ZmVDb2xvck1hdHJpeCB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIiByZXN1bHQ9ImhhcmRBbHBoYSIgaW49IlNvdXJjZUFscGhhIiB0eXBlPSJtYXRyaXgiLz4KICAgPGZlT2Zmc2V0Lz4KICAgPG" +
      "ZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMC40ODcxNDciLz4KICAgPGZlQ29tcG9zaXRlIGluMj0iaGFyZEFscGhhIiBvcGVyYXRvcj0ib3V0Ii8+CiAgIDxmZUNvbG9yTWF0cml4IHZhbHVlcz0iMCAwIDAgMCAxIDAgMCAwIDAgMSAwIDAgMCAwIDEgMCAwIDAgMC4zNSAwIiB0eXBlPSJtYXRyaXgiLz4KICAgPGZlQmxlbmQgcmVzdWx0PSJlZmZlY3QzX2Ryb3BTaGFkb3dfM18yMDEiIGluMj0iZWZmZWN0Ml9kcm9wU2hhZG93XzNfMjAxIiBtb2RlPSJub3JtYWwiLz4KICAgPGZlQmxlbmQgcmVzdWx0PSJzaGFwZSIgaW4yPSJlZmZlY3QzX2Ryb3BTaGFkb3dfM18yMDEiIGluPSJTb3VyY2VH" +
      "cmFwaGljIiBtb2RlPSJub3JtYWwiLz4KICA8L2ZpbHRlcj4KIDwvZGVmcz4KPC9zdmc+Cg==";
    me._call_mini__img.setAttribute("src", hs);
    hs = "";
    hs +=
      "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;";
    els.setAttribute("style", hs);
    els["ondragstart"] = function () {
      return false;
    };
    el.appendChild(els);
    el.ggSubElement = els;
    el.ggId = "call_mini";
    el.ggDy = 0;
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1, def: "" };
    el.ggVisible = true;
    el.className = "ggskin ggskin_svg ";
    el.ggType = "svg";
    hs = "";
    hs += "height : 25px;";
    hs += "left : 30px;";
    hs += "position : absolute;";
    hs += "top : calc(50% - ((25px + 0px) / 2) + 0px);";
    hs += "visibility : inherit;";
    hs += "width : 25px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "50% 50%";
    me._call_mini.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._call_mini.ggUpdatePosition = function (useTransition) {};
    me._info_call.appendChild(me._call_mini);
    me._cont_thongtin_lienhe.appendChild(me._info_call);
    el = me._lienhvoichungtoi = document.createElement("div");
    els = me._lienhvoichungtoi__text = document.createElement("div");
    el.className = "ggskin ggskin_textdiv";
    el.ggTextDiv = els;
    el.ggId = "lienhvoichungtoi";
    el.ggDx = 0;
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1, def: "" };
    el.ggVisible = true;
    el.className = "ggskin ggskin_text ";
    el.ggType = "text";
    hs = "";
    hs += "border : 0px solid #000000;";
    hs += "color : rgba(255,255,255,1);";
    hs += "cursor : default;";
    hs += "height : 40px;";
    hs += "left : calc(50% - ((100% + 0px) / 2) + 0px);";
    hs += "position : absolute;";
    hs += "top : 10px;";
    hs += "visibility : inherit;";
    hs += "width : 100%;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "50% 50%";
    hs = "";
    hs += "box-sizing: border-box;";
    hs += "cursor: default;";
    hs += "width: 100%;";
    hs += "height: 100%;";
    hs += "font-size: 18px;";
    hs += "font-weight: bold;";
    hs += "text-align: left;";
    hs += "white-space: pre;";
    hs += "padding: 0px 30px 0px 30px;";
    hs += "overflow: hidden;";
    hs += "overflow-y: auto;";
    hs += "text-shadow: 2px 2px 4px #000000;";
    els.setAttribute("style", hs);
    me._lienhvoichungtoi.ggUpdateText = function () {
      var params = [];
      var hs = player._("CONTACT US", params);
      if (hs != this.ggText) {
        this.ggText = hs;
        this.ggTextDiv.innerHTML = hs;
        if (this.ggUpdatePosition) this.ggUpdatePosition();
      }
    };
    me._lienhvoichungtoi.ggUpdateText();
    el.appendChild(els);
    me._lienhvoichungtoi.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._lienhvoichungtoi.ggUpdatePosition = function (useTransition) {};
    me._cont_thongtin_lienhe.appendChild(me._lienhvoichungtoi);
    me._container_1.appendChild(me._cont_thongtin_lienhe);
    el = me._list_node_menu = document.createElement("div");
    el.ggId = "list_node_menu";
    el.ggDx = 0;
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1, def: "" };
    el.ggVisible = true;
    el.className = "ggskin ggskin_container ";
    el.ggType = "container";
    hs = "";
    hs += "height : calc(100%  - 240px);";
    hs += "left : calc(50% - ((100% + 0px) / 2) + 0px);";
    hs += "position : absolute;";
    hs += "top : 0px;";
    hs += "visibility : inherit;";
    hs += "width : 100%;";
    hs += "pointer-events:none;";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "50% 50%";
    me._list_node_menu.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._list_node_menu.ggUpdatePosition = function (useTransition) {};
    el = me._scrollarea_1 = document.createElement("div");
    els = me._scrollarea_1__content = document.createElement("div");
    els.className = "ggskin ggskin_subelement ggskin_scrollarea";
    el.ggContent = els;
    el.appendChild(els);
    el.ggHorScrollVisible = false;
    el.ggVertScrollVisible = false;
    el.ggContentLeftOffset = 0;
    el.ggContentTopOffset = 0;
    el.ggContentWidth = 0;
    el.ggContentHeight = 0;
    el.ggDragInertiaX = 0;
    el.ggDragInertiaY = 0;
    el.ggVPercentVisible = 1.0;
    el.ggHPercentVisible = 1.0;
    el.ggIsDragging = false;
    hs = "";
    hs += "height : 399px;";
    hs += "left : 0px;";
    hs += "overflow-x : visible;";
    hs += "overflow-y : visible;";
    hs += "position : absolute;";
    hs += "top : 0px;";
    hs += "width : 319px;";
    hs += "overflow-y: hidden;";
    els.setAttribute("style", hs);
    me._scrollarea_1.ggScrollByX = function (diffX) {
      if (
        !me._scrollarea_1.ggHorScrollVisible ||
        diffX == 0 ||
        me._scrollarea_1.ggHPercentVisible >= 1.0
      )
        return;
      me._scrollarea_1.ggScrollPosX =
        me._scrollarea_1__horScrollFg.offsetLeft + diffX;
      me._scrollarea_1.ggScrollPosX = Math.max(
        me._scrollarea_1.ggScrollPosX,
        0
      );
      me._scrollarea_1.ggScrollPosX = Math.min(
        me._scrollarea_1.ggScrollPosX,
        me._scrollarea_1__horScrollBg.offsetWidth -
          me._scrollarea_1__horScrollFg.offsetWidth
      );
      me._scrollarea_1__horScrollFg.style.left =
        me._scrollarea_1.ggScrollPosX + "px";
      let percentScrolled =
        me._scrollarea_1.ggScrollPosX /
        (me._scrollarea_1__horScrollBg.offsetWidth -
          me._scrollarea_1__horScrollFg.offsetWidth);
      me._scrollarea_1__content.style.left =
        -Math.round(
          me._scrollarea_1.ggContentWidth *
            (1.0 - me._scrollarea_1.ggHPercentVisible) *
            percentScrolled
        ) +
        me._scrollarea_1.ggContentLeftOffset +
        "px";
      me._scrollarea_1.ggScrollPosXPercent =
        me._scrollarea_1__horScrollFg.offsetLeft /
        me._scrollarea_1__horScrollBg.offsetWidth;
    };
    me._scrollarea_1.ggScrollByXSmooth = function (diffX) {
      if (
        !me._scrollarea_1.ggHorScrollVisible ||
        diffX == 0 ||
        me._scrollarea_1.ggHPercentVisible >= 1.0
      )
        return;
      var scrollPerInterval = diffX / 25;
      var scrollCurrX = 0;
      var id = setInterval(function () {
        scrollCurrX += scrollPerInterval;
        me._scrollarea_1.ggScrollPosX += scrollPerInterval;
        if (
          diffX > 0 &&
          (scrollCurrX >= diffX ||
            me._scrollarea_1.ggScrollPosX >=
              me._scrollarea_1__horScrollBg.offsetWidth -
                me._scrollarea_1__horScrollFg.offsetWidth)
        ) {
          me._scrollarea_1.ggScrollPosX = Math.min(
            me._scrollarea_1.ggScrollPosX,
            me._scrollarea_1__horScrollBg.offsetWidth -
              me._scrollarea_1__horScrollFg.offsetWidth
          );
          clearInterval(id);
        }
        if (
          diffX < 0 &&
          (scrollCurrX <= diffX || me._scrollarea_1.ggScrollPosX <= 0)
        ) {
          me._scrollarea_1.ggScrollPosX = Math.max(
            me._scrollarea_1.ggScrollPosX,
            0
          );
          clearInterval(id);
        }
        me._scrollarea_1__horScrollFg.style.left =
          me._scrollarea_1.ggScrollPosX + "px";
        let percentScrolled =
          me._scrollarea_1.ggScrollPosX /
          (me._scrollarea_1__horScrollBg.offsetWidth -
            me._scrollarea_1__horScrollFg.offsetWidth);
        me._scrollarea_1__content.style.left =
          -Math.round(
            me._scrollarea_1.ggContentWidth *
              (1.0 - me._scrollarea_1.ggHPercentVisible) *
              percentScrolled
          ) +
          me._scrollarea_1.ggContentLeftOffset +
          "px";
        me._scrollarea_1.ggScrollPosXPercent =
          me._scrollarea_1__horScrollFg.offsetLeft /
          me._scrollarea_1__horScrollBg.offsetWidth;
      }, 10);
    };
    me._scrollarea_1.ggScrollByY = function (diffY) {
      if (
        !me._scrollarea_1.ggVertScrollVisible ||
        diffY == 0 ||
        me._scrollarea_1.ggVPercentVisible >= 1.0
      )
        return;
      me._scrollarea_1.ggScrollPosY =
        me._scrollarea_1__vertScrollFg.offsetTop + diffY;
      me._scrollarea_1.ggScrollPosY = Math.max(
        me._scrollarea_1.ggScrollPosY,
        0
      );
      me._scrollarea_1.ggScrollPosY = Math.min(
        me._scrollarea_1.ggScrollPosY,
        me._scrollarea_1__vertScrollBg.offsetHeight -
          me._scrollarea_1__vertScrollFg.offsetHeight
      );
      me._scrollarea_1__vertScrollFg.style.top =
        me._scrollarea_1.ggScrollPosY + "px";
      let percentScrolled =
        me._scrollarea_1.ggScrollPosY /
        (me._scrollarea_1__vertScrollBg.offsetHeight -
          me._scrollarea_1__vertScrollFg.offsetHeight);
      me._scrollarea_1__content.style.top =
        -Math.round(
          me._scrollarea_1.ggContentHeight *
            (1.0 - me._scrollarea_1.ggVPercentVisible) *
            percentScrolled
        ) +
        me._scrollarea_1.ggContentTopOffset +
        "px";
      me._scrollarea_1.ggScrollPosYPercent =
        me._scrollarea_1__vertScrollFg.offsetTop /
        me._scrollarea_1__vertScrollBg.offsetHeight;
    };
    me._scrollarea_1.ggScrollByYSmooth = function (diffY) {
      if (
        !me._scrollarea_1.ggVertScrollVisible ||
        diffY == 0 ||
        me._scrollarea_1.ggVPercentVisible >= 1.0
      )
        return;
      var scrollPerInterval = diffY / 25;
      var scrollCurrY = 0;
      var id = setInterval(function () {
        scrollCurrY += scrollPerInterval;
        me._scrollarea_1.ggScrollPosY += scrollPerInterval;
        if (
          diffY > 0 &&
          (scrollCurrY >= diffY ||
            me._scrollarea_1.ggScrollPosY >=
              me._scrollarea_1__vertScrollBg.offsetHeight -
                me._scrollarea_1__vertScrollFg.offsetHeight)
        ) {
          me._scrollarea_1.ggScrollPosY = Math.min(
            me._scrollarea_1.ggScrollPosY,
            me._scrollarea_1__vertScrollBg.offsetHeight -
              me._scrollarea_1__vertScrollFg.offsetHeight
          );
          clearInterval(id);
        }
        if (
          diffY < 0 &&
          (scrollCurrY <= diffY || me._scrollarea_1.ggScrollPosY <= 0)
        ) {
          me._scrollarea_1.ggScrollPosY = Math.max(
            me._scrollarea_1.ggScrollPosY,
            0
          );
          clearInterval(id);
        }
        me._scrollarea_1__vertScrollFg.style.top =
          me._scrollarea_1.ggScrollPosY + "px";
        let percentScrolled =
          me._scrollarea_1.ggScrollPosY /
          (me._scrollarea_1__vertScrollBg.offsetHeight -
            me._scrollarea_1__vertScrollFg.offsetHeight);
        me._scrollarea_1__content.style.top =
          -Math.round(
            me._scrollarea_1.ggContentHeight *
              (1.0 - me._scrollarea_1.ggVPercentVisible) *
              percentScrolled
          ) +
          me._scrollarea_1.ggContentTopOffset +
          "px";
        me._scrollarea_1.ggScrollPosYPercent =
          me._scrollarea_1__vertScrollFg.offsetTop /
          me._scrollarea_1__vertScrollBg.offsetHeight;
      }, 10);
    };
    me._scrollarea_1.ggScrollIntoView = function (posX, posY, width, height) {
      if (me._scrollarea_1.ggHorScrollVisible) {
        if (posX < 0) {
          var diffX = Math.floor(posX * me._scrollarea_1.ggHPercentVisible);
          me._scrollarea_1.ggScrollByXSmooth(diffX);
        } else if (
          posX + width >
          me._scrollarea_1.clientWidth -
            (me._scrollarea_1.ggVertScrollVisible ? 5 : 0)
        ) {
          var diffX = Math.ceil(
            (posX +
              width -
              (me._scrollarea_1.clientWidth -
                (me._scrollarea_1.ggVertScrollVisible ? 5 : 0))) *
              me._scrollarea_1.ggHPercentVisible
          );
          me._scrollarea_1.ggScrollByXSmooth(diffX);
        }
      }
      if (me._scrollarea_1.ggVertScrollVisible) {
        if (posY < 0) {
          var diffY = Math.floor(posY * me._scrollarea_1.ggVPercentVisible);
          me._scrollarea_1.ggScrollByYSmooth(diffY);
        } else if (
          posY + height >
          me._scrollarea_1.clientHeight -
            (me._scrollarea_1.ggHorScrollVisible ? 5 : 0)
        ) {
          var diffY = Math.ceil(
            (posY +
              height -
              (me._scrollarea_1.clientHeight -
                (me._scrollarea_1.ggHorScrollVisible ? 5 : 0))) *
              me._scrollarea_1.ggVPercentVisible
          );
          me._scrollarea_1.ggScrollByYSmooth(diffY);
        }
      }
    };
    me._scrollarea_1__content.mousetouchend = (e) => {
      let inertiaInterval = setInterval(function () {
        me._scrollarea_1.ggDragInertiaX *= 0.65;
        me._scrollarea_1.ggDragInertiaY *= 0.65;
        me._scrollarea_1.ggScrollByX(me._scrollarea_1.ggDragInertiaX);
        me._scrollarea_1.ggScrollByY(me._scrollarea_1.ggDragInertiaY);
        if (
          Math.abs(me._scrollarea_1.ggDragInertiaX) < 1.0 &&
          Math.abs(me._scrollarea_1.ggDragInertiaY) < 1.0
        ) {
          clearInterval(inertiaInterval);
        }
      }, 50);
      me._scrollarea_1__content.onmouseup = null;
      me._scrollarea_1__content.onmousemove = null;
      me._scrollarea_1__content.ontouchend = null;
      me._scrollarea_1__content.ontouchmove = null;
      me._scrollarea_1__content.onpointerup = null;
      me._scrollarea_1__content.onpointermove = null;
      setTimeout(function () {
        me._scrollarea_1.ggIsDragging = false;
      }, 100);
    };
    me._scrollarea_1__content.mousetouchmove = (e) => {
      e = e || window.event;
      e.preventDefault();
      var t = e.touches;
      var eventX = t ? t[0].clientX : e.clientX;
      var eventY = t ? t[0].clientY : e.clientY;
      if (
        Math.abs(eventX - me._scrollarea_1.ggDragStartX) > 10 ||
        Math.abs(eventY - me._scrollarea_1.ggDragStartY) > 10
      )
        me._scrollarea_1.ggIsDragging = true;
      var diffX =
        (eventX - me._scrollarea_1.ggDragLastX) *
        me._scrollarea_1.ggHPercentVisible;
      var diffY =
        (eventY - me._scrollarea_1.ggDragLastY) *
        me._scrollarea_1.ggVPercentVisible;
      me._scrollarea_1.ggDragInertiaX = -diffX;
      me._scrollarea_1.ggDragInertiaY = -diffY;
      me._scrollarea_1.ggDragLastX = eventX;
      me._scrollarea_1.ggDragLastY = eventY;
      me._scrollarea_1.ggScrollByX(-diffX);
      me._scrollarea_1.ggScrollByY(-diffY);
    };
    me._scrollarea_1__content.mousetouchstart = (e) => {
      e = e || window.event;
      var t = e.touches;
      me._scrollarea_1.ggDragLastX = me._scrollarea_1.ggDragStartX = t
        ? t[0].clientX
        : e.clientX;
      me._scrollarea_1.ggDragLastY = me._scrollarea_1.ggDragStartY = t
        ? t[0].clientY
        : e.clientY;
      me._scrollarea_1__content.onmouseup =
        me._scrollarea_1__content.mousetouchend;
      me._scrollarea_1__content.ontouchend =
        me._scrollarea_1__content.mousetouchend;
      me._scrollarea_1__content.onmousemove =
        me._scrollarea_1__content.mousetouchmove;
      me._scrollarea_1__content.ontouchmove =
        me._scrollarea_1__content.mousetouchmove;
      if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
        me._scrollarea_1__content.onpointerup =
          me._scrollarea_1__content.ontouchend;
        me._scrollarea_1__content.onpointermove =
          me._scrollarea_1__content.ontouchmove;
      }
    };
    els.onmousedown = me._scrollarea_1__content.mousetouchstart;
    els.ontouchstart = me._scrollarea_1__content.mousetouchstart;
    if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
      els.onpointerdown = me._scrollarea_1__content.mousetouchstart;
    }
    elVertScrollBg = me._scrollarea_1__vertScrollBg =
      document.createElement("div");
    el.appendChild(elVertScrollBg);
    elVertScrollBg.setAttribute(
      "style",
      "position: absolute; right: 0px; top: 0px; visibility: hidden; width: 5px; height: 300px; background-color: rgba(128,128,128,0); pointer-events: auto;"
    );
    elVertScrollBg.className = "ggskin ggskin_scrollarea_vscrollbg";
    elVertScrollFg = me._scrollarea_1__vertScrollFg =
      document.createElement("div");
    elVertScrollBg.appendChild(elVertScrollFg);
    elVertScrollFg.setAttribute(
      "style",
      "position: absolute; left: 0px; top: 0px; visibility: hidden; width: 5px; height: 300px; background-color: rgba(255,255,255,0.705882); pointer-events: auto;"
    );
    elVertScrollFg.className = "ggskin ggskin_scrollarea_vscrollfg";
    me._scrollarea_1.ggScrollPosY = 0;
    me._scrollarea_1.ggScrollPosYPercent = 0.0;
    elVertScrollFg.onmousedown = function (e) {
      if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
      e = e || window.event;
      e.preventDefault();
      e.stopPropagation();
      me._scrollarea_1.ggDragLastY = e.clientY;
      document.onmouseup = function () {
        let inertiaInterval = setInterval(function () {
          me._scrollarea_1.ggDragInertiaY *= 0.65;
          me._scrollarea_1.ggScrollByY(me._scrollarea_1.ggDragInertiaY);
          if (Math.abs(me._scrollarea_1.ggDragInertiaY) < 1.0) {
            clearInterval(inertiaInterval);
          }
        }, 50);
        document.onmouseup = null;
        document.onmousemove = null;
      };
      document.onmousemove = function (e) {
        e = e || window.event;
        e.preventDefault();
        var diffY = e.clientY - me._scrollarea_1.ggDragLastY;
        me._scrollarea_1.ggDragInertiaY = diffY;
        me._scrollarea_1.ggDragLastY = e.clientY;
        me._scrollarea_1.ggScrollByY(diffY);
      };
    };
    elVertScrollFg.ontouchstart = function (e) {
      e = e || window.event;
      e.preventDefault();
      e.stopPropagation();
      var t = e.touches;
      me._scrollarea_1.ggDragLastY = t ? t[0].clientY : e.clientY;
      document.ontouchend = function () {
        let inertiaInterval = setInterval(function () {
          me._scrollarea_1.ggDragInertiaY *= 0.65;
          me._scrollarea_1.ggScrollByY(me._scrollarea_1.ggDragInertiaY);
          if (Math.abs(me._scrollarea_1.ggDragInertiaY) < 1.0) {
            clearInterval(inertiaInterval);
          }
        }, 50);
        document.ontouchend = null;
        document.ontouchmove = null;
        document.onpointerup = null;
        document.onpointermove = null;
      };
      if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
        document.onpointerup = document.ontouchend;
      }
      document.ontouchmove = function (e) {
        e = e || window.event;
        e.preventDefault();
        var t = e.touches;
        var diffY =
          (t ? t[0].clientY : e.clientY) - me._scrollarea_1.ggDragLastY;
        me._scrollarea_1.ggDragInertiaY = diffY;
        me._scrollarea_1.ggDragLastY = t ? t[0].clientY : e.clientY;
        me._scrollarea_1.ggScrollByY(diffY);
      };
      if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
        document.onpointermove = document.ontouchmove;
      }
    };
    if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
      elVertScrollFg.onpointerdown = elVertScrollFg.ontouchstart;
    }
    elVertScrollBg.onmousedown = function (e) {
      e = e || window.event;
      e.preventDefault();
      var diffY = me._scrollarea_1.ggScrollHeight;
      if (e.offsetY < me._scrollarea_1.ggScrollPosY) {
        diffY = diffY * -1;
      }
      me._scrollarea_1.ggScrollByYSmooth(diffY);
    };
    elVertScrollBg.ontouchstart = function (e) {
      e = e || window.event;
      e.preventDefault();
      e.stopPropagation();
      var t = e.touches;
      var rect = me._scrollarea_1__vertScrollBg.getBoundingClientRect();
      var diffY = me._scrollarea_1.ggScrollHeight;
      if (t[0].clientY - rect.top < me._scrollarea_1.ggScrollPosY) {
        diffY = diffY * -1;
      }
      me._scrollarea_1.ggScrollByYSmooth(diffY);
    };
    el.addEventListener("wheel", function (e) {
      e.preventDefault();
      var wheelDelta = Math.sign(e.deltaY);
      me._scrollarea_1.ggScrollByYSmooth(
        30 * me._scrollarea_1.ggVPercentVisible * wheelDelta
      );
    });
    elCornerBg = me._scrollarea_1__cornerBg = document.createElement("div");
    el.appendChild(elCornerBg);
    elCornerBg.setAttribute(
      "style",
      "position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 5px; height: 5px; background-color: rgba(255,255,255,1);"
    );
    elCornerBg.className = "ggskin ggskin_scrollarea_scrollcorner";
    el.ggId = "Scrollarea 1";
    el.ggDx = 0;
    el.ggDy = 0;
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1, def: "" };
    el.ggVisible = true;
    el.className = "ggskin ggskin_scrollarea ";
    el.ggType = "scrollarea";
    hs = "";
    hs += "border : 0px solid #000000;";
    hs += "height : 100%;";
    hs += "left : calc(50% - ((100% + 0px) / 2) + 0px);";
    hs += "overflow : hidden;";
    hs += "position : absolute;";
    hs += "top : calc(50% - ((100% + 0px) / 2) + 0px);";
    hs += "visibility : inherit;";
    hs += "width : 100%;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "50% 50%";
    me._scrollarea_1.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._scrollarea_1.ggUpdatePosition = function (useTransition) {
      {
        var horScrollWasVisible = this.ggHorScrollVisible;
        var vertScrollWasVisible = this.ggVertScrollVisible;
        this.ggContent.style.left = "0px";
        this.ggContent.style.top = "0px";
        this.ggContentLeftOffset = 0;
        this.ggContentTopOffset = 0;
        var offsetWidthWithScale = this.getBoundingClientRect().width;
        var offsetHeightWithScale = this.getBoundingClientRect().height;
        var domRectContent = this.ggContent.getBoundingClientRect();
        var minX = 0;
        var minY = 0;
        var maxX = 0;
        var maxY = 0;
        var stack = [];
        stack.push(this.ggContent);
        while (stack.length > 0) {
          var e = stack.pop();
          if (
            e != this.ggContent &&
            e.getBoundingClientRect &&
            e.style["display"] != "none" &&
            (e.offsetWidth != 0 || e.offsetHeight != 0)
          ) {
            var domRectChild = e.getBoundingClientRect();
            var diffX = domRectChild.left - domRectContent.left;
            minX = Math.min(minX, diffX);
            maxX = Math.max(maxX, diffX + domRectChild.width);
            var diffY = domRectChild.top - domRectContent.top;
            minY = Math.min(minY, diffY);
            maxY = Math.max(maxY, diffY + domRectChild.height);
          }
          if (
            e.hasChildNodes() &&
            e.style["display"] != "none" &&
            e.style["overflow"] != "hidden"
          ) {
            for (var i = 0; i < e.childNodes.length; i++) {
              stack.push(e.childNodes[i]);
            }
          }
        }
        if (minX < 0) this.ggContentLeftOffset = -minX;
        if (minY < 0) this.ggContentTopOffset = -minY;
        this.ggContent.style.left = this.ggContentLeftOffset + "px";
        this.ggContent.style.top = this.ggContentTopOffset + "px";
        var contentWidth = maxX - minX;
        this.ggContent.style.width = contentWidth + "px";
        var contentHeight = maxY - minY;
        this.ggContent.style.height = contentHeight + "px";
        var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
        this.ggContentWidth = contentWidth / scaleX;
        var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
        this.ggContentHeight = contentHeight / scaleY;
        this.ggContent.style.left = this.ggContentLeftOffset + "px";
        this.ggContent.style.marginLeft = "0px";
        this.ggContent.style.top =
          -Math.round(
            me._scrollarea_1.ggScrollPosY / me._scrollarea_1.ggVPercentVisible
          ) +
          this.ggContentTopOffset +
          "px";
        this.ggContent.style.marginTop = "0px";
        if (
          (me._scrollarea_1.ggHorScrollVisible &&
            contentHeight > this.clientHeight - 5) ||
          (!me._scrollarea_1.ggHorScrollVisible &&
            contentHeight > this.clientHeight)
        ) {
          me._scrollarea_1__vertScrollBg.style.visibility = "inherit";
          me._scrollarea_1__vertScrollFg.style.visibility = "inherit";
          me._scrollarea_1.ggVertScrollVisible = true;
        } else {
          me._scrollarea_1__vertScrollBg.style.visibility = "hidden";
          me._scrollarea_1__vertScrollFg.style.visibility = "hidden";
          me._scrollarea_1.ggVertScrollVisible = false;
        }
        if (me._scrollarea_1.ggVertScrollVisible) {
          me._scrollarea_1.ggAvailableWidth = me._scrollarea_1.clientWidth - 5;
          if (me._scrollarea_1.ggHorScrollVisible) {
            me._scrollarea_1.ggAvailableHeight =
              me._scrollarea_1.clientHeight - 5;
            me._scrollarea_1.ggAvailableHeightWithScale =
              me._scrollarea_1.getBoundingClientRect().height -
              me._scrollarea_1__vertScrollBg.getBoundingClientRect().width;
            me._scrollarea_1__cornerBg.style.visibility = "inherit";
          } else {
            me._scrollarea_1.ggAvailableHeight = me._scrollarea_1.clientHeight;
            me._scrollarea_1.ggAvailableHeightWithScale =
              me._scrollarea_1.getBoundingClientRect().height;
            me._scrollarea_1__cornerBg.style.visibility = "hidden";
          }
          me._scrollarea_1__vertScrollBg.style.height =
            me._scrollarea_1.ggAvailableHeight + "px";
          me._scrollarea_1.ggVPercentVisible =
            contentHeight != 0
              ? me._scrollarea_1.ggAvailableHeightWithScale / contentHeight
              : 0.0;
          if (me._scrollarea_1.ggVPercentVisible > 1.0)
            me._scrollarea_1.ggVPercentVisible = 1.0;
          me._scrollarea_1.ggScrollHeight = Math.round(
            me._scrollarea_1__vertScrollBg.offsetHeight *
              me._scrollarea_1.ggVPercentVisible
          );
          me._scrollarea_1__vertScrollFg.style.height =
            me._scrollarea_1.ggScrollHeight + "px";
          me._scrollarea_1.ggScrollPosY =
            me._scrollarea_1.ggScrollPosYPercent *
            me._scrollarea_1.ggAvailableHeight;
          me._scrollarea_1.ggScrollPosY = Math.min(
            me._scrollarea_1.ggScrollPosY,
            me._scrollarea_1__vertScrollBg.offsetHeight -
              me._scrollarea_1__vertScrollFg.offsetHeight
          );
          me._scrollarea_1__vertScrollFg.style.top =
            me._scrollarea_1.ggScrollPosY + "px";
          if (me._scrollarea_1.ggVPercentVisible < 1.0) {
            let percentScrolled =
              me._scrollarea_1.ggScrollPosY /
              (me._scrollarea_1__vertScrollBg.offsetHeight -
                me._scrollarea_1__vertScrollFg.offsetHeight);
            me._scrollarea_1__content.style.top =
              -Math.round(
                me._scrollarea_1.ggContentHeight *
                  (1.0 - me._scrollarea_1.ggVPercentVisible) *
                  percentScrolled
              ) +
              me._scrollarea_1.ggContentTopOffset +
              "px";
          }
        } else {
          me._scrollarea_1.ggAvailableWidth = me._scrollarea_1.clientWidth;
          me._scrollarea_1.ggScrollPosY = 0;
          me._scrollarea_1.ggScrollPosYPercent = 0.0;
          me._scrollarea_1__content.style.top = this.ggContentTopOffset + "px";
          me._scrollarea_1__cornerBg.style.visibility = "hidden";
        }
        if (
          horScrollWasVisible != me._scrollarea_1.ggHorScrollVisible ||
          vertScrollWasVisible != me._scrollarea_1.ggVertScrollVisible
        ) {
          skin.updateSize(me._scrollarea_1);
          me._scrollarea_1.ggUpdatePosition();
        }
      }
    };
    el = me._cloner_node = document.createElement("div");
    el.isDragging = function () {
      let scrollerParent = me._cloner_node;
      while ((scrollerParent = scrollerParent.parentNode) != null) {
        if (
          scrollerParent.hasOwnProperty("ggIsDragging") &&
          scrollerParent.ggIsDragging == true
        )
          return true;
      }
      return false;
    };
    el.ggNumRepeat = 1;
    el.ggNumRows = 0;
    el.ggNumCols = 0;
    el.ggCloneOffset = 0;
    el.ggCloneOffsetChanged = false;
    el.ggWidth = 295;
    el.ggHeight = 160;
    el.ggUpdating = false;
    el.ggFilter = [];
    el.ggFilterHsSkinId = "";
    el.ggInstances = [];
    el.ggNumFilterPassed = 0;
    el.getFilteredNodes = function (tourNodes, filter) {
      var filteredNodes = [];
      for (var i = 0; i < tourNodes.length; i++) {
        var nodeId = tourNodes[i];
        var passed = true;
        var nodeData = player.getNodeUserdata(nodeId);
        if (filter.length > 0) {
          for (var j = 0; j < filter.length; j++) {
            if (nodeData["tags"].indexOf(filter[j].trim()) == -1)
              passed = false;
          }
        }
        if (passed) {
          filteredNodes.push(nodeId);
        }
      }
      return filteredNodes;
    };
    el.ggUpdate = function (filter) {
      if (me._cloner_node.ggUpdating == true) return;
      me._cloner_node.ggUpdating = true;
      var el = me._cloner_node;
      var curNumCols = 0;
      curNumCols = me._cloner_node.ggNumRepeat;
      if (curNumCols < 1) curNumCols = 1;
      if (typeof filter == "object") {
        el.ggFilter = filter;
      } else {
        filter = el.ggFilter;
      }
      filter = filter.sort();
      if (
        el.ggNumCols == curNumCols &&
        el.ggInstances.length > 0 &&
        filter.length === el.ggCurrentFilter.length &&
        filter.every(function (value, index) {
          return value === el.ggCurrentFilter[index];
        })
      ) {
        me._cloner_node.ggUpdating = false;
        return;
      } else {
        el.ggNumRows = 1;
        el.ggNumCols = curNumCols;
        var centerOffsetHor = 0;
        var centerOffsetVert = 0;
        me._cloner_node.ggCloneOffsetChanged = false;
      }
      el.ggCurrentFilter = filter;
      el.ggInstances = [];
      if (el.hasChildNodes() == true) {
        while (el.firstChild) {
          el.removeChild(el.firstChild);
        }
      }
      var tourNodes = player.getNodeIds();
      var row = 0;
      var column = 0;
      var currentIndex = 0;
      var keepCloning = true;
      tourNodes = me._cloner_node.getFilteredNodes(tourNodes, filter);
      me._cloner_node.ggNumFilterPassed = tourNodes.length;
      for (var i = 0; i < tourNodes.length; i++) {
        var nodeId = tourNodes[i];
        var nodeData = player.getNodeUserdata(nodeId);
        if (!keepCloning || i < me._cloner_node.ggCloneOffset) continue;
        var parameter = {};
        parameter.top =
          centerOffsetVert + row * me._cloner_node.ggHeight + "px";
        parameter.left =
          centerOffsetHor + column * me._cloner_node.ggWidth + "px";
        parameter.width = me._cloner_node.ggWidth + "px";
        parameter.height = me._cloner_node.ggHeight + "px";
        parameter.index = currentIndex;
        parameter.title = nodeData["title"];
        var inst = new SkinCloner_cloner_node_Class(nodeId, me, el, parameter);
        currentIndex++;
        el.ggInstances.push(inst);
        el.appendChild(inst.__div);
        inst.__div.ggObj = inst;
        skin.updateSize(inst.__div);
        column++;
        if (column >= el.ggNumCols) {
          column = 0;
          row++;
          el.ggNumRows++;
        }
      }
      me._cloner_node.ggNodeCount = me._cloner_node.ggNumFilterPassed;
      me._cloner_node.ggUpdating = false;
      player.triggerEvent("clonerchanged");
      if (
        me._cloner_node.parentNode &&
        me._cloner_node.parentNode.classList.contains("ggskin_subelement") &&
        me._cloner_node.parentNode.parentNode.classList.contains(
          "ggskin_scrollarea"
        )
      )
        me._cloner_node.parentNode.parentNode.ggUpdatePosition();
    };
    el.ggFilter = [];
    el.ggFilter[0] = "_nop_";
    el.ggId = "cloner_node";
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1, def: "" };
    el.ggVisible = false;
    el.className = "ggskin ggskin_cloner ";
    el.ggType = "cloner";
    hs = "";
    hs += "height : 160px;";
    hs += "left : 10px;";
    hs += "overflow : visible;";
    hs += "position : absolute;";
    hs += "top : 240px;";
    hs += "visibility : hidden;";
    hs += "width : 295px;";
    hs += "pointer-events:none;";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "50% 50%";
    me._cloner_node.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._cloner_node.ggUpdateConditionNodeChange = function () {
      var cnode = player.getCurrentNode();
      for (var i = 0; i < me._cloner_node.childNodes.length; i++) {
        var child = me._cloner_node.childNodes[i];
        if (child.ggObj && child.ggObj.ggNodeId == cnode) {
          var childOffX = child.offsetLeft;
          var childOffY = child.offsetTop;
          var p = child.parentElement;
          while (p != null && p !== this.divSkin) {
            if (p.ggType && p.ggType == "scrollarea") {
              p.ggScrollIntoView(
                childOffX,
                childOffY,
                child.clientWidth,
                child.clientHeight
              );
            }
            childOffX += p.offsetLeft;
            childOffY += p.offsetTop;
            p = p.parentElement;
          }
        }
      }
    };
    me._cloner_node.ggUpdatePosition = function (useTransition) {
      me._cloner_node.ggUpdate();
    };
    me._scrollarea_1__content.appendChild(me._cloner_node);
    el = me._node_gianhang_4 = document.createElement("div");
    el.isDragging = function () {
      let scrollerParent = me._node_gianhang_4;
      while ((scrollerParent = scrollerParent.parentNode) != null) {
        if (
          scrollerParent.hasOwnProperty("ggIsDragging") &&
          scrollerParent.ggIsDragging == true
        )
          return true;
      }
      return false;
    };
    els = me._node_gianhang_4__text = document.createElement("div");
    el.className = "ggskin ggskin_textdiv";
    el.ggTextDiv = els;
    el.ggId = "node_gianhang_4";
    el.ggDx = 0;
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1, def: "" };
    el.ggVisible = true;
    el.className = "ggskin ggskin_text ";
    el.ggType = "text";
    hs = "";
    hs += "background : rgba(255,255,255,0);";
    hs += "border : 0px solid #000000;";
    hs += "color : rgba(255,255,255,1);";
    hs += "cursor : pointer;";
    hs += "height : 60px;";
    hs += "left : calc(50% - ((100% + 0px) / 2) + 0px);";
    hs += "position : absolute;";
    hs += "top : 240px;";
    hs += "visibility : inherit;";
    hs += "width : 100%;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "50% 50%";
    hs = "";
    hs += "box-sizing: border-box;";
    hs += "width: 100%;";
    hs += "height: 100%;";
    hs += "font-size: 18px;";
    hs += "font-weight: inherit;";
    hs += "text-align: left;";
    hs += "white-space: pre;";
    hs += "padding: 20px 70px 20px 70px;";
    hs += "overflow: hidden;";
    hs += "text-shadow: 2px 2px 4px #000000;";
    els.setAttribute("style", hs);
    me._node_gianhang_4.ggUpdateText = function () {
      var params = [];
      var hs = player._("N - NATION CAPITAL ", params);
      if (hs != this.ggText) {
        this.ggText = hs;
        this.ggTextDiv.innerHTML = hs;
        if (this.ggUpdatePosition) this.ggUpdatePosition();
      }
    };
    me._node_gianhang_4.ggUpdateText();
    el.appendChild(els);
    me._node_gianhang_4.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._node_gianhang_4.logicBlock_backgroundcolor = function () {
      var newLogicStateBackgroundColor;
      if (me.elementMouseOver["node_gianhang_4"] == true) {
        newLogicStateBackgroundColor = 0;
      } else {
        newLogicStateBackgroundColor = -1;
      }
      if (
        me._node_gianhang_4.ggCurrentLogicStateBackgroundColor !=
        newLogicStateBackgroundColor
      ) {
        me._node_gianhang_4.ggCurrentLogicStateBackgroundColor =
          newLogicStateBackgroundColor;
        me._node_gianhang_4.style.transition = "background-color 0s";
        if (me._node_gianhang_4.ggCurrentLogicStateBackgroundColor == 0) {
          me._node_gianhang_4.style.backgroundColor =
            "rgba(23,83,175,0.392157)";
        } else {
          me._node_gianhang_4.style.backgroundColor = "rgba(255,255,255,0)";
        }
      }
    };
    me._node_gianhang_4.logicBlock_backgroundcolor();
    me._node_gianhang_4.onclick = function (e) {
      if (me._node_gianhang_4.isDragging()) return;
      player.openNext("{node1}", "");
      player.setVariableValue(
        "show_cloner",
        !player.getVariableValue("show_cloner")
      );
      if (player.getVariableValue("show_cloner") == true) {
        me._cloner_node.ggText = "gianhang";
        if (me._cloner_node.ggText == "") {
          me._cloner_node.ggUpdate([]);
        } else {
          me._cloner_node.ggUpdate(me._cloner_node.ggText.split(","));
        }
        skin.updateSize(skin.divSkin);
      }
      if (player.getVariableValue("show_cloner") == false) {
        me._cloner_node.ggText = "_nop_";
        if (me._cloner_node.ggText == "") {
          me._cloner_node.ggUpdate([]);
        } else {
          me._cloner_node.ggUpdate(me._cloner_node.ggText.split(","));
        }
        skin.updateSize(skin.divSkin);
      }
      if (player.getVariableValue("show_cloner") == true) {
        me._cloner_node.style["display"] = "inline";
        var p = me._cloner_node.parentElement;
        while (p != null && p !== this.divSkin) {
          if (p.ggType && p.ggType == "cloner") {
            if (p.ggAutoPosition) {
              p.ggAutoPosition(false);
            }
          }
          if (p.ggType && p.ggType == "scrollarea") {
            if (p.ggUpdatePosition) {
              p.ggUpdatePosition();
            }
          }
          p = p.parentElement;
        }
      }
      if (player.getVariableValue("show_cloner") == false) {
        me._cloner_node.style["display"] = "none";
        var p = me._cloner_node.parentElement;
        while (p != null && p !== this.divSkin) {
          if (p.ggType && p.ggType == "cloner") {
            if (p.ggAutoPosition) {
              p.ggAutoPosition(false);
            }
          }
          if (p.ggType && p.ggType == "scrollarea") {
            if (p.ggUpdatePosition) {
              p.ggUpdatePosition();
            }
          }
          p = p.parentElement;
        }
      }
    };
    me._node_gianhang_4.onmouseover = function (e) {
      me.elementMouseOver["node_gianhang_4"] = true;
      me._node_gianhang_4.logicBlock_backgroundcolor();
    };
    me._node_gianhang_4.onmouseout = function (e) {
      if (e && e.toElement) {
        var current = e.toElement;
        while ((current = current.parentNode)) {
          if (current == me._node_gianhang_4__text) return;
        }
      }
      me.elementMouseOver["node_gianhang_4"] = false;
      me._node_gianhang_4.logicBlock_backgroundcolor();
    };
    me._node_gianhang_4.ggUpdatePosition = function (useTransition) {};
    el = me._icon_gianhang_4 = document.createElement("div");
    el.isDragging = function () {
      let scrollerParent = me._icon_gianhang_4;
      while ((scrollerParent = scrollerParent.parentNode) != null) {
        if (
          scrollerParent.hasOwnProperty("ggIsDragging") &&
          scrollerParent.ggIsDragging == true
        )
          return true;
      }
      return false;
    };
    els = me._icon_gianhang_4__img = document.createElement("img");
    els.className = "ggskin ggskin_external";
    hs = "";
    hs += "position: absolute;-webkit-user-drag:none;pointer-events:none;;";
    els.setAttribute("style", hs);
    els.onload = function () {
      me._icon_gianhang_4.ggUpdatePosition();
    };
    el.appendChild(els);
    el.ggSubElement = els;
    hs = "";
    el.ggAltText = "";
    el.ggScrollbars = false;
    el.ggUpdateText = function () {
      me._icon_gianhang_4.ggSubElement.setAttribute(
        "alt",
        player._(me._icon_gianhang_4.ggAltText)
      );
      if (me._icon_gianhang_4.ggUpdateImageInternal)
        me._icon_gianhang_4.ggUpdateImageInternal();
    };
    el.ggUpdateImage = function () {
      me._icon_gianhang_4.ggSubElement.style.width = "0px";
      me._icon_gianhang_4.ggSubElement.style.height = "0px";
      me._icon_gianhang_4.ggSubElement.src = "";
      me._icon_gianhang_4.ggSubElement.src = me._icon_gianhang_4.ggText;
    };
    el.ggText = basePath + "assets/logo/LAPACIFI.png";
    el.ggUpdateImage();
    els["ondragstart"] = function () {
      return false;
    };
    player.checkLoaded.push(els);
    el.ggUpdateText();
    el.ggId = "icon_gianhang_4";
    el.ggDy = 0;
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1, def: "" };
    el.ggVisible = true;
    el.className = "ggskin ggskin_external ";
    el.ggType = "external";
    hs = "";
    hs += "border : 0px solid #000000;";
    hs += "cursor : pointer;";
    hs += "height : 40px;";
    hs += "left : 10px;";
    hs += "position : absolute;";
    hs += "top : calc(50% - ((40px + 0px) / 2) + 0px);";
    hs += "visibility : inherit;";
    hs += "width : 40px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "50% 50%";
    me._icon_gianhang_4.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._icon_gianhang_4.ggUpdatePosition = function (useTransition) {
      var parentWidth = me._icon_gianhang_4.clientWidth;
      var parentHeight = me._icon_gianhang_4.clientHeight;
      var img = me._icon_gianhang_4__img;
      var aspectRatioDiv =
        me._icon_gianhang_4.clientWidth / me._icon_gianhang_4.clientHeight;
      var aspectRatioImg = img.naturalWidth / img.naturalHeight;
      var currentWidth, currentHeight;
      currentWidth = parentWidth;
      currentHeight = parentHeight;
      img.style.width = parentWidth + "px";
      img.style.height = parentHeight + "px";
      if (
        !me._icon_gianhang_4.ggScrollbars ||
        currentWidth < me._icon_gianhang_4.clientWidth
      ) {
        img.style.right = "";
        img.style.left = "50%";
        img.style.marginLeft = "-" + currentWidth / 2 + "px";
      } else {
        img.style.right = "";
        img.style.left = "0px";
        img.style.marginLeft = "0px";
        me._icon_gianhang_4.scrollLeft =
          currentWidth / 2 - me._icon_gianhang_4.clientWidth / 2;
      }
      if (
        !me._icon_gianhang_4.ggScrollbars ||
        currentHeight < me._icon_gianhang_4.clientHeight
      ) {
        img.style.bottom = "";
        img.style.top = "50%";
        img.style.marginTop = "-" + currentHeight / 2 + "px";
      } else {
        img.style.bottom = "";
        img.style.top = "0px";
        img.style.marginTop = "0px";
        me._icon_gianhang_4.scrollTop =
          currentHeight / 2 - me._icon_gianhang_4.clientHeight / 2;
      }
    };
    me._node_gianhang_4.appendChild(me._icon_gianhang_4);
    me._scrollarea_1__content.appendChild(me._node_gianhang_4);
    el = me._node_gianhang = document.createElement("div");
    el.isDragging = function () {
      let scrollerParent = me._node_gianhang;
      while ((scrollerParent = scrollerParent.parentNode) != null) {
        if (
          scrollerParent.hasOwnProperty("ggIsDragging") &&
          scrollerParent.ggIsDragging == true
        )
          return true;
      }
      return false;
    };
    els = me._node_gianhang__text = document.createElement("div");
    el.className = "ggskin ggskin_textdiv";
    el.ggTextDiv = els;
    el.ggId = "node_gianhang";
    el.ggDx = 0;
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1, def: "" };
    el.ggVisible = true;
    el.className = "ggskin ggskin_text ";
    el.ggType = "text";
    hs = "";
    hs += "background : rgba(255,255,255,0);";
    hs += "border : 0px solid #000000;";
    hs += "color : rgba(255,255,255,1);";
    hs += "cursor : pointer;";
    hs += "height : 60px;";
    hs += "left : calc(50% - ((100% + 0px) / 2) + 0px);";
    hs += "position : absolute;";
    hs += "top : 180px;";
    hs += "visibility : inherit;";
    hs += "width : 100%;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "50% 50%";
    hs = "";
    hs += "box-sizing: border-box;";
    hs += "width: 100%;";
    hs += "height: 100%;";
    hs += "font-size: 18px;";
    hs += "font-weight: inherit;";
    hs += "text-align: left;";
    hs += "white-space: pre;";
    hs += "padding: 20px 70px 20px 70px;";
    hs += "overflow: hidden;";
    hs += "text-shadow: 2px 2px 4px #000000;";
    els.setAttribute("style", hs);
    me._node_gianhang.ggUpdateText = function () {
      var params = [];
      var hs = player._("I - ITSURU ACADEMY", params);
      if (hs != this.ggText) {
        this.ggText = hs;
        this.ggTextDiv.innerHTML = hs;
        if (this.ggUpdatePosition) this.ggUpdatePosition();
      }
    };
    me._node_gianhang.ggUpdateText();
    el.appendChild(els);
    me._node_gianhang.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._node_gianhang.logicBlock_backgroundcolor = function () {
      var newLogicStateBackgroundColor;
      if (me.elementMouseOver["node_gianhang"] == true) {
        newLogicStateBackgroundColor = 0;
      } else {
        newLogicStateBackgroundColor = -1;
      }
      if (
        me._node_gianhang.ggCurrentLogicStateBackgroundColor !=
        newLogicStateBackgroundColor
      ) {
        me._node_gianhang.ggCurrentLogicStateBackgroundColor =
          newLogicStateBackgroundColor;
        me._node_gianhang.style.transition = "background-color 0s";
        if (me._node_gianhang.ggCurrentLogicStateBackgroundColor == 0) {
          me._node_gianhang.style.backgroundColor = "rgba(23,83,175,0.392157)";
        } else {
          me._node_gianhang.style.backgroundColor = "rgba(255,255,255,0)";
        }
      }
    };
    me._node_gianhang.logicBlock_backgroundcolor();
    me._node_gianhang.onclick = function (e) {
      if (me._node_gianhang.isDragging()) return;
      player.openNext("{node3}", "");
      player.setVariableValue(
        "show_cloner",
        !player.getVariableValue("show_cloner")
      );
      if (player.getVariableValue("show_cloner") == true) {
        me._cloner_node.ggText = "gianhang";
        if (me._cloner_node.ggText == "") {
          me._cloner_node.ggUpdate([]);
        } else {
          me._cloner_node.ggUpdate(me._cloner_node.ggText.split(","));
        }
        skin.updateSize(skin.divSkin);
      }
      if (player.getVariableValue("show_cloner") == false) {
        me._cloner_node.ggText = "_nop_";
        if (me._cloner_node.ggText == "") {
          me._cloner_node.ggUpdate([]);
        } else {
          me._cloner_node.ggUpdate(me._cloner_node.ggText.split(","));
        }
        skin.updateSize(skin.divSkin);
      }
      if (player.getVariableValue("show_cloner") == true) {
        me._cloner_node.style["display"] = "inline";
        var p = me._cloner_node.parentElement;
        while (p != null && p !== this.divSkin) {
          if (p.ggType && p.ggType == "cloner") {
            if (p.ggAutoPosition) {
              p.ggAutoPosition(false);
            }
          }
          if (p.ggType && p.ggType == "scrollarea") {
            if (p.ggUpdatePosition) {
              p.ggUpdatePosition();
            }
          }
          p = p.parentElement;
        }
      }
      if (player.getVariableValue("show_cloner") == false) {
        me._cloner_node.style["display"] = "none";
        var p = me._cloner_node.parentElement;
        while (p != null && p !== this.divSkin) {
          if (p.ggType && p.ggType == "cloner") {
            if (p.ggAutoPosition) {
              p.ggAutoPosition(false);
            }
          }
          if (p.ggType && p.ggType == "scrollarea") {
            if (p.ggUpdatePosition) {
              p.ggUpdatePosition();
            }
          }
          p = p.parentElement;
        }
      }
    };
    me._node_gianhang.onmouseover = function (e) {
      me.elementMouseOver["node_gianhang"] = true;
      me._node_gianhang.logicBlock_backgroundcolor();
    };
    me._node_gianhang.onmouseout = function (e) {
      if (e && e.toElement) {
        var current = e.toElement;
        while ((current = current.parentNode)) {
          if (current == me._node_gianhang__text) return;
        }
      }
      me.elementMouseOver["node_gianhang"] = false;
      me._node_gianhang.logicBlock_backgroundcolor();
    };
    me._node_gianhang.ggUpdatePosition = function (useTransition) {};
    el = me._icon_gianhang = document.createElement("div");
    el.isDragging = function () {
      let scrollerParent = me._icon_gianhang;
      while ((scrollerParent = scrollerParent.parentNode) != null) {
        if (
          scrollerParent.hasOwnProperty("ggIsDragging") &&
          scrollerParent.ggIsDragging == true
        )
          return true;
      }
      return false;
    };
    els = me._icon_gianhang__img = document.createElement("img");
    els.className = "ggskin ggskin_external";
    hs = "";
    hs += "position: absolute;-webkit-user-drag:none;pointer-events:none;;";
    els.setAttribute("style", hs);
    els.onload = function () {
      me._icon_gianhang.ggUpdatePosition();
    };
    el.appendChild(els);
    el.ggSubElement = els;
    hs = "";
    el.ggAltText = "";
    el.ggScrollbars = false;
    el.ggUpdateText = function () {
      me._icon_gianhang.ggSubElement.setAttribute(
        "alt",
        player._(me._icon_gianhang.ggAltText)
      );
      if (me._icon_gianhang.ggUpdateImageInternal)
        me._icon_gianhang.ggUpdateImageInternal();
    };
    el.ggUpdateImage = function () {
      me._icon_gianhang.ggSubElement.style.width = "0px";
      me._icon_gianhang.ggSubElement.style.height = "0px";
      me._icon_gianhang.ggSubElement.src = "";
      me._icon_gianhang.ggSubElement.src = me._icon_gianhang.ggText;
    };
    el.ggText = basePath + "assets/logo/FITITANS.png";
    el.ggUpdateImage();
    els["ondragstart"] = function () {
      return false;
    };
    player.checkLoaded.push(els);
    el.ggUpdateText();
    el.ggId = "icon_gianhang";
    el.ggDy = 0;
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1, def: "" };
    el.ggVisible = true;
    el.className = "ggskin ggskin_external ";
    el.ggType = "external";
    hs = "";
    hs += "border : 0px solid #000000;";
    hs += "cursor : pointer;";
    hs += "height : 40px;";
    hs += "left : 10px;";
    hs += "position : absolute;";
    hs += "top : calc(50% - ((40px + 0px) / 2) + 0px);";
    hs += "visibility : inherit;";
    hs += "width : 40px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "50% 50%";
    me._icon_gianhang.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._icon_gianhang.ggUpdatePosition = function (useTransition) {
      var parentWidth = me._icon_gianhang.clientWidth;
      var parentHeight = me._icon_gianhang.clientHeight;
      var img = me._icon_gianhang__img;
      var aspectRatioDiv =
        me._icon_gianhang.clientWidth / me._icon_gianhang.clientHeight;
      var aspectRatioImg = img.naturalWidth / img.naturalHeight;
      var currentWidth, currentHeight;
      currentWidth = parentWidth;
      currentHeight = parentHeight;
      img.style.width = parentWidth + "px";
      img.style.height = parentHeight + "px";
      if (
        !me._icon_gianhang.ggScrollbars ||
        currentWidth < me._icon_gianhang.clientWidth
      ) {
        img.style.right = "";
        img.style.left = "50%";
        img.style.marginLeft = "-" + currentWidth / 2 + "px";
      } else {
        img.style.right = "";
        img.style.left = "0px";
        img.style.marginLeft = "0px";
        me._icon_gianhang.scrollLeft =
          currentWidth / 2 - me._icon_gianhang.clientWidth / 2;
      }
      if (
        !me._icon_gianhang.ggScrollbars ||
        currentHeight < me._icon_gianhang.clientHeight
      ) {
        img.style.bottom = "";
        img.style.top = "50%";
        img.style.marginTop = "-" + currentHeight / 2 + "px";
      } else {
        img.style.bottom = "";
        img.style.top = "0px";
        img.style.marginTop = "0px";
        me._icon_gianhang.scrollTop =
          currentHeight / 2 - me._icon_gianhang.clientHeight / 2;
      }
    };
    me._node_gianhang.appendChild(me._icon_gianhang);
    me._scrollarea_1__content.appendChild(me._node_gianhang);
    el = me._node_phonghoithao = document.createElement("div");
    el.isDragging = function () {
      let scrollerParent = me._node_phonghoithao;
      while ((scrollerParent = scrollerParent.parentNode) != null) {
        if (
          scrollerParent.hasOwnProperty("ggIsDragging") &&
          scrollerParent.ggIsDragging == true
        )
          return true;
      }
      return false;
    };
    els = me._node_phonghoithao__text = document.createElement("div");
    el.className = "ggskin ggskin_textdiv";
    el.ggTextDiv = els;
    el.ggId = "node_phonghoithao";
    el.ggDx = 0;
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1, def: "" };
    el.ggVisible = true;
    el.className = "ggskin ggskin_text ";
    el.ggType = "text";
    hs = "";
    hs += "background : rgba(255,255,255,0);";
    hs += "border : 0px solid #000000;";
    hs += "color : rgba(255,255,255,1);";
    hs += "cursor : pointer;";
    hs += "height : 60px;";
    hs += "left : calc(50% - ((100% + 0px) / 2) + 0px);";
    hs += "position : absolute;";
    hs += "top : 120px;";
    hs += "visibility : inherit;";
    hs += "width : 100%;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "50% 50%";
    hs = "";
    hs += "box-sizing: border-box;";
    hs += "width: 100%;";
    hs += "height: 100%;";
    hs += "font-size: 18px;";
    hs += "font-weight: inherit;";
    hs += "text-align: left;";
    hs += "white-space: pre;";
    hs += "padding: 20px 70px 20px 70px;";
    hs += "overflow: hidden;";
    hs += "text-shadow: 2px 2px 4px #000000;";
    els.setAttribute("style", hs);
    me._node_phonghoithao.ggUpdateText = function () {
      var params = [];
      var hs = player._("A - AUTOBIZNET", params);
      if (hs != this.ggText) {
        this.ggText = hs;
        this.ggTextDiv.innerHTML = hs;
        if (this.ggUpdatePosition) this.ggUpdatePosition();
      }
    };
    me._node_phonghoithao.ggUpdateText();
    el.appendChild(els);
    me._node_phonghoithao.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._node_phonghoithao.logicBlock_backgroundcolor = function () {
      var newLogicStateBackgroundColor;
      if (me.elementMouseOver["node_phonghoithao"] == true) {
        newLogicStateBackgroundColor = 0;
      } else {
        newLogicStateBackgroundColor = -1;
      }
      if (
        me._node_phonghoithao.ggCurrentLogicStateBackgroundColor !=
        newLogicStateBackgroundColor
      ) {
        me._node_phonghoithao.ggCurrentLogicStateBackgroundColor =
          newLogicStateBackgroundColor;
        me._node_phonghoithao.style.transition = "background-color 0s";
        if (me._node_phonghoithao.ggCurrentLogicStateBackgroundColor == 0) {
          me._node_phonghoithao.style.backgroundColor =
            "rgba(23,83,175,0.392157)";
        } else {
          me._node_phonghoithao.style.backgroundColor = "rgba(255,255,255,0)";
        }
      }
    };
    me._node_phonghoithao.logicBlock_backgroundcolor();
    me._node_phonghoithao.onclick = function (e) {
      if (me._node_phonghoithao.isDragging()) return;
      player.openNext("{node1}", "");
      player.setVariableValue("var_show_menu", false);
      me._cloner_node.style["display"] = "none";
      var p = me._cloner_node.parentElement;
      while (p != null && p !== this.divSkin) {
        if (p.ggType && p.ggType == "cloner") {
          if (p.ggAutoPosition) {
            p.ggAutoPosition(false);
          }
        }
        if (p.ggType && p.ggType == "scrollarea") {
          if (p.ggUpdatePosition) {
            p.ggUpdatePosition();
          }
        }
        p = p.parentElement;
      }
      player.setVariableValue("var_show_menu", false);
      player.setVariableValue("show_cloner", false);
    };
    me._node_phonghoithao.onmouseover = function (e) {
      me.elementMouseOver["node_phonghoithao"] = true;
      me._node_phonghoithao.logicBlock_backgroundcolor();
    };
    me._node_phonghoithao.onmouseout = function (e) {
      if (e && e.toElement) {
        var current = e.toElement;
        while ((current = current.parentNode)) {
          if (current == me._node_phonghoithao__text) return;
        }
      }
      me.elementMouseOver["node_phonghoithao"] = false;
      me._node_phonghoithao.logicBlock_backgroundcolor();
    };
    me._node_phonghoithao.ggUpdatePosition = function (useTransition) {};
    el = me._icon_meeting = document.createElement("div");
    el.isDragging = function () {
      let scrollerParent = me._icon_meeting;
      while ((scrollerParent = scrollerParent.parentNode) != null) {
        if (
          scrollerParent.hasOwnProperty("ggIsDragging") &&
          scrollerParent.ggIsDragging == true
        )
          return true;
      }
      return false;
    };
    els = me._icon_meeting__img = document.createElement("img");
    els.className = "ggskin ggskin_external";
    hs = "";
    hs += "position: absolute;-webkit-user-drag:none;pointer-events:none;;";
    els.setAttribute("style", hs);
    els.onload = function () {
      me._icon_meeting.ggUpdatePosition();
    };
    el.appendChild(els);
    el.ggSubElement = els;
    hs = "";
    el.ggAltText = "";
    el.ggScrollbars = false;
    el.ggUpdateText = function () {
      me._icon_meeting.ggSubElement.setAttribute(
        "alt",
        player._(me._icon_meeting.ggAltText)
      );
      if (me._icon_meeting.ggUpdateImageInternal)
        me._icon_meeting.ggUpdateImageInternal();
    };
    el.ggUpdateImage = function () {
      me._icon_meeting.ggSubElement.style.width = "0px";
      me._icon_meeting.ggSubElement.style.height = "0px";
      me._icon_meeting.ggSubElement.src = "";
      me._icon_meeting.ggSubElement.src = me._icon_meeting.ggText;
    };
    el.ggText = basePath + "assets/logo/IONMEDI.png";
    el.ggUpdateImage();
    els["ondragstart"] = function () {
      return false;
    };
    player.checkLoaded.push(els);
    el.ggUpdateText();
    el.ggId = "icon_meeting";
    el.ggDy = 0;
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1, def: "" };
    el.ggVisible = true;
    el.className = "ggskin ggskin_external ";
    el.ggType = "external";
    hs = "";
    hs += "border : 0px solid #000000;";
    hs += "cursor : pointer;";
    hs += "height : 40px;";
    hs += "left : 10px;";
    hs += "position : absolute;";
    hs += "top : calc(50% - ((40px + 0px) / 2) + 0px);";
    hs += "visibility : inherit;";
    hs += "width : 40px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "50% 50%";
    me._icon_meeting.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._icon_meeting.ggUpdatePosition = function (useTransition) {
      var parentWidth = me._icon_meeting.clientWidth;
      var parentHeight = me._icon_meeting.clientHeight;
      var img = me._icon_meeting__img;
      var aspectRatioDiv =
        me._icon_meeting.clientWidth / me._icon_meeting.clientHeight;
      var aspectRatioImg = img.naturalWidth / img.naturalHeight;
      var currentWidth, currentHeight;
      currentWidth = parentWidth;
      currentHeight = parentHeight;
      img.style.width = parentWidth + "px";
      img.style.height = parentHeight + "px";
      if (
        !me._icon_meeting.ggScrollbars ||
        currentWidth < me._icon_meeting.clientWidth
      ) {
        img.style.right = "";
        img.style.left = "50%";
        img.style.marginLeft = "-" + currentWidth / 2 + "px";
      } else {
        img.style.right = "";
        img.style.left = "0px";
        img.style.marginLeft = "0px";
        me._icon_meeting.scrollLeft =
          currentWidth / 2 - me._icon_meeting.clientWidth / 2;
      }
      if (
        !me._icon_meeting.ggScrollbars ||
        currentHeight < me._icon_meeting.clientHeight
      ) {
        img.style.bottom = "";
        img.style.top = "50%";
        img.style.marginTop = "-" + currentHeight / 2 + "px";
      } else {
        img.style.bottom = "";
        img.style.top = "0px";
        img.style.marginTop = "0px";
        me._icon_meeting.scrollTop =
          currentHeight / 2 - me._icon_meeting.clientHeight / 2;
      }
    };
    me._node_phonghoithao.appendChild(me._icon_meeting);
    me._scrollarea_1__content.appendChild(me._node_phonghoithao);
    el = me._node_bantiepkhach = document.createElement("div");
    el.isDragging = function () {
      let scrollerParent = me._node_bantiepkhach;
      while ((scrollerParent = scrollerParent.parentNode) != null) {
        if (
          scrollerParent.hasOwnProperty("ggIsDragging") &&
          scrollerParent.ggIsDragging == true
        )
          return true;
      }
      return false;
    };
    els = me._node_bantiepkhach__text = document.createElement("div");
    el.className = "ggskin ggskin_textdiv";
    el.ggTextDiv = els;
    el.ggId = "node_bantiepkhach";
    el.ggDx = 0;
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1, def: "" };
    el.ggVisible = true;
    el.className = "ggskin ggskin_text ";
    el.ggType = "text";
    hs = "";
    hs += "background : rgba(255,255,255,0);";
    hs += "border : 0px solid #000000;";
    hs += "color : rgba(255,255,255,1);";
    hs += "cursor : pointer;";
    hs += "height : 60px;";
    hs += "left : calc(50% - ((100% + 0px) / 2) + 0px);";
    hs += "position : absolute;";
    hs += "top : 60px;";
    hs += "visibility : inherit;";
    hs += "width : 100%;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "50% 50%";
    hs = "";
    hs += "box-sizing: border-box;";
    hs += "width: 100%;";
    hs += "height: 100%;";
    hs += "font-size: 18px;";
    hs += "font-weight: inherit;";
    hs += "text-align: left;";
    hs += "white-space: pre;";
    hs += "padding: 20px 70px 20px 70px;";
    hs += "overflow: hidden;";
    hs += "text-shadow: 2px 2px 4px #000000;";
    els.setAttribute("style", hs);
    me._node_bantiepkhach.ggUpdateText = function () {
      var params = [];
      var hs = player._("L - LEADERSHIP UNI", params);
      if (hs != this.ggText) {
        this.ggText = hs;
        this.ggTextDiv.innerHTML = hs;
        if (this.ggUpdatePosition) this.ggUpdatePosition();
      }
    };
    me._node_bantiepkhach.ggUpdateText();
    el.appendChild(els);
    me._node_bantiepkhach.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._node_bantiepkhach.logicBlock_backgroundcolor = function () {
      var newLogicStateBackgroundColor;
      if (me.elementMouseOver["node_bantiepkhach"] == true) {
        newLogicStateBackgroundColor = 0;
      } else {
        newLogicStateBackgroundColor = -1;
      }
      if (
        me._node_bantiepkhach.ggCurrentLogicStateBackgroundColor !=
        newLogicStateBackgroundColor
      ) {
        me._node_bantiepkhach.ggCurrentLogicStateBackgroundColor =
          newLogicStateBackgroundColor;
        me._node_bantiepkhach.style.transition = "background-color 0s";
        if (me._node_bantiepkhach.ggCurrentLogicStateBackgroundColor == 0) {
          me._node_bantiepkhach.style.backgroundColor =
            "rgba(23,83,175,0.392157)";
        } else {
          me._node_bantiepkhach.style.backgroundColor = "rgba(255,255,255,0)";
        }
      }
    };
    me._node_bantiepkhach.logicBlock_backgroundcolor();
    me._node_bantiepkhach.onclick = function (e) {
      if (me._node_bantiepkhach.isDragging()) return;
      player.openNext("{node4}", "");
      player.setVariableValue("var_show_menu", false);
      me._cloner_node.style["display"] = "none";
      var p = me._cloner_node.parentElement;
      while (p != null && p !== this.divSkin) {
        if (p.ggType && p.ggType == "cloner") {
          if (p.ggAutoPosition) {
            p.ggAutoPosition(false);
          }
        }
        if (p.ggType && p.ggType == "scrollarea") {
          if (p.ggUpdatePosition) {
            p.ggUpdatePosition();
          }
        }
        p = p.parentElement;
      }
      player.setVariableValue("var_show_menu", false);
      player.setVariableValue("show_cloner", false);
    };
    me._node_bantiepkhach.onmouseover = function (e) {
      me.elementMouseOver["node_bantiepkhach"] = true;
      me._node_bantiepkhach.logicBlock_backgroundcolor();
    };
    me._node_bantiepkhach.onmouseout = function (e) {
      if (e && e.toElement) {
        var current = e.toElement;
        while ((current = current.parentNode)) {
          if (current == me._node_bantiepkhach__text) return;
        }
      }
      me.elementMouseOver["node_bantiepkhach"] = false;
      me._node_bantiepkhach.logicBlock_backgroundcolor();
    };
    me._node_bantiepkhach.ggUpdatePosition = function (useTransition) {};
    el = me._icon_bantiepkhach = document.createElement("div");
    el.isDragging = function () {
      let scrollerParent = me._icon_bantiepkhach;
      while ((scrollerParent = scrollerParent.parentNode) != null) {
        if (
          scrollerParent.hasOwnProperty("ggIsDragging") &&
          scrollerParent.ggIsDragging == true
        )
          return true;
      }
      return false;
    };
    els = me._icon_bantiepkhach__img = document.createElement("img");
    els.className = "ggskin ggskin_external";
    hs = "";
    hs += "position: absolute;-webkit-user-drag:none;pointer-events:none;;";
    els.setAttribute("style", hs);
    els.onload = function () {
      me._icon_bantiepkhach.ggUpdatePosition();
    };
    el.appendChild(els);
    el.ggSubElement = els;
    hs = "";
    el.ggAltText = "";
    el.ggScrollbars = false;
    el.ggUpdateText = function () {
      me._icon_bantiepkhach.ggSubElement.setAttribute(
        "alt",
        player._(me._icon_bantiepkhach.ggAltText)
      );
      if (me._icon_bantiepkhach.ggUpdateImageInternal)
        me._icon_bantiepkhach.ggUpdateImageInternal();
    };
    el.ggUpdateImage = function () {
      me._icon_bantiepkhach.ggSubElement.style.width = "0px";
      me._icon_bantiepkhach.ggSubElement.style.height = "0px";
      me._icon_bantiepkhach.ggSubElement.src = "";
      me._icon_bantiepkhach.ggSubElement.src = me._icon_bantiepkhach.ggText;
    };
    el.ggText = basePath + "assets/logo/NINIDEAS.png";
    el.ggUpdateImage();
    els["ondragstart"] = function () {
      return false;
    };
    player.checkLoaded.push(els);
    el.ggUpdateText();
    el.ggId = "icon_bantiepkhach";
    el.ggDy = 0;
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1, def: "" };
    el.ggVisible = true;
    el.className = "ggskin ggskin_external ";
    el.ggType = "external";
    hs = "";
    hs += "border : 0px solid #000000;";
    hs += "cursor : pointer;";
    hs += "height : 40px;";
    hs += "left : 10px;";
    hs += "position : absolute;";
    hs += "top : calc(50% - ((40px + 0px) / 2) + 0px);";
    hs += "visibility : inherit;";
    hs += "width : 40px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "50% 50%";
    me._icon_bantiepkhach.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._icon_bantiepkhach.ggUpdatePosition = function (useTransition) {
      var parentWidth = me._icon_bantiepkhach.clientWidth;
      var parentHeight = me._icon_bantiepkhach.clientHeight;
      var img = me._icon_bantiepkhach__img;
      var aspectRatioDiv =
        me._icon_bantiepkhach.clientWidth / me._icon_bantiepkhach.clientHeight;
      var aspectRatioImg = img.naturalWidth / img.naturalHeight;
      var currentWidth, currentHeight;
      currentWidth = parentWidth;
      currentHeight = parentHeight;
      img.style.width = parentWidth + "px";
      img.style.height = parentHeight + "px";
      if (
        !me._icon_bantiepkhach.ggScrollbars ||
        currentWidth < me._icon_bantiepkhach.clientWidth
      ) {
        img.style.right = "";
        img.style.left = "50%";
        img.style.marginLeft = "-" + currentWidth / 2 + "px";
      } else {
        img.style.right = "";
        img.style.left = "0px";
        img.style.marginLeft = "0px";
        me._icon_bantiepkhach.scrollLeft =
          currentWidth / 2 - me._icon_bantiepkhach.clientWidth / 2;
      }
      if (
        !me._icon_bantiepkhach.ggScrollbars ||
        currentHeight < me._icon_bantiepkhach.clientHeight
      ) {
        img.style.bottom = "";
        img.style.top = "50%";
        img.style.marginTop = "-" + currentHeight / 2 + "px";
      } else {
        img.style.bottom = "";
        img.style.top = "0px";
        img.style.marginTop = "0px";
        me._icon_bantiepkhach.scrollTop =
          currentHeight / 2 - me._icon_bantiepkhach.clientHeight / 2;
      }
    };
    me._node_bantiepkhach.appendChild(me._icon_bantiepkhach);
    me._scrollarea_1__content.appendChild(me._node_bantiepkhach);
    el = me._node_letan = document.createElement("div");
    el.isDragging = function () {
      let scrollerParent = me._node_letan;
      while ((scrollerParent = scrollerParent.parentNode) != null) {
        if (
          scrollerParent.hasOwnProperty("ggIsDragging") &&
          scrollerParent.ggIsDragging == true
        )
          return true;
      }
      return false;
    };
    els = me._node_letan__text = document.createElement("div");
    el.className = "ggskin ggskin_textdiv";
    el.ggTextDiv = els;
    el.ggId = "node_letan";
    el.ggDx = 0;
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1, def: "" };
    el.ggVisible = true;
    el.className = "ggskin ggskin_text ";
    el.ggType = "text";
    hs = "";
    hs += "background : rgba(255,255,255,0);";
    hs += "border : 0px solid #000000;";
    hs += "color : rgba(255,255,255,1);";
    hs += "cursor : pointer;";
    hs += "height : 60px;";
    hs += "left : calc(50% - ((100% + 0px) / 2) + 0px);";
    hs += "position : absolute;";
    hs += "top : 0px;";
    hs += "visibility : inherit;";
    hs += "width : 100%;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "50% 50%";
    hs = "";
    hs += "box-sizing: border-box;";
    hs += "width: 100%;";
    hs += "height: 100%;";
    hs += "font-size: 18px;";
    hs += "font-weight: inherit;";
    hs += "text-align: left;";
    hs += "white-space: pre;";
    hs += "padding: 20px 70px 20px 70px;";
    hs += "overflow: hidden;";
    hs += "text-shadow: 2px 2px 4px #000000;";
    els.setAttribute("style", hs);
    me._node_letan.ggUpdateText = function () {
      var params = [];
      var hs = player._("P - PRIMO EMPIRE", params);
      if (hs != this.ggText) {
        this.ggText = hs;
        this.ggTextDiv.innerHTML = hs;
        if (this.ggUpdatePosition) this.ggUpdatePosition();
      }
    };
    me._node_letan.ggUpdateText();
    el.appendChild(els);
    me._node_letan.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._node_letan.logicBlock_backgroundcolor = function () {
      var newLogicStateBackgroundColor;
      if (me.elementMouseOver["node_letan"] == true) {
        newLogicStateBackgroundColor = 0;
      } else {
        newLogicStateBackgroundColor = -1;
      }
      if (
        me._node_letan.ggCurrentLogicStateBackgroundColor !=
        newLogicStateBackgroundColor
      ) {
        me._node_letan.ggCurrentLogicStateBackgroundColor =
          newLogicStateBackgroundColor;
        me._node_letan.style.transition = "background-color 0s";
        if (me._node_letan.ggCurrentLogicStateBackgroundColor == 0) {
          me._node_letan.style.backgroundColor = "rgba(23,83,175,0.392157)";
        } else {
          me._node_letan.style.backgroundColor = "rgba(255,255,255,0)";
        }
      }
    };
    me._node_letan.logicBlock_backgroundcolor();
    me._node_letan.onclick = function (e) {
      if (me._node_letan.isDragging()) return;
      player.openNext("{node5}", "");
      player.setVariableValue("var_show_menu", false);
      me._cloner_node.style["display"] = "none";
      var p = me._cloner_node.parentElement;
      while (p != null && p !== this.divSkin) {
        if (p.ggType && p.ggType == "cloner") {
          if (p.ggAutoPosition) {
            p.ggAutoPosition(false);
          }
        }
        if (p.ggType && p.ggType == "scrollarea") {
          if (p.ggUpdatePosition) {
            p.ggUpdatePosition();
          }
        }
        p = p.parentElement;
      }
      player.setVariableValue("var_show_menu", false);
      player.setVariableValue("show_cloner", false);
    };
    me._node_letan.onmouseover = function (e) {
      me.elementMouseOver["node_letan"] = true;
      me._node_letan.logicBlock_backgroundcolor();
    };
    me._node_letan.onmouseout = function (e) {
      if (e && e.toElement) {
        var current = e.toElement;
        while ((current = current.parentNode)) {
          if (current == me._node_letan__text) return;
        }
      }
      me.elementMouseOver["node_letan"] = false;
      me._node_letan.logicBlock_backgroundcolor();
    };
    me._node_letan.ggUpdatePosition = function (useTransition) {};
    el = me._icon_letan = document.createElement("div");
    el.isDragging = function () {
      let scrollerParent = me._icon_letan;
      while ((scrollerParent = scrollerParent.parentNode) != null) {
        if (
          scrollerParent.hasOwnProperty("ggIsDragging") &&
          scrollerParent.ggIsDragging == true
        )
          return true;
      }
      return false;
    };
    els = me._icon_letan__img = document.createElement("img");
    els.className = "ggskin ggskin_external";
    hs = "";
    hs += "position: absolute;-webkit-user-drag:none;pointer-events:none;;";
    els.setAttribute("style", hs);
    els.onload = function () {
      me._icon_letan.ggUpdatePosition();
    };
    el.appendChild(els);
    el.ggSubElement = els;
    hs = "";
    el.ggAltText = "";
    el.ggScrollbars = false;
    el.ggUpdateText = function () {
      me._icon_letan.ggSubElement.setAttribute(
        "alt",
        player._(me._icon_letan.ggAltText)
      );
      if (me._icon_letan.ggUpdateImageInternal)
        me._icon_letan.ggUpdateImageInternal();
    };
    el.ggUpdateImage = function () {
      me._icon_letan.ggSubElement.style.width = "0px";
      me._icon_letan.ggSubElement.style.height = "0px";
      me._icon_letan.ggSubElement.src = "";
      me._icon_letan.ggSubElement.src = me._icon_letan.ggText;
    };
    el.ggText = basePath + "assets/logo/UNICHARI.png";
    el.ggUpdateImage();
    els["ondragstart"] = function () {
      return false;
    };
    player.checkLoaded.push(els);
    el.ggUpdateText();
    el.ggId = "icon_letan";
    el.ggDy = 0;
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1, def: "" };
    el.ggVisible = true;
    el.className = "ggskin ggskin_external ";
    el.ggType = "external";
    hs = "";
    hs += "border : 0px solid #000000;";
    hs += "cursor : pointer;";
    hs += "height : 40px;";
    hs += "left : 10px;";
    hs += "position : absolute;";
    hs += "top : calc(50% - ((40px + 0px) / 2) + 0px);";
    hs += "visibility : inherit;";
    hs += "width : 40px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "50% 50%";
    me._icon_letan.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._icon_letan.ggUpdatePosition = function (useTransition) {
      var parentWidth = me._icon_letan.clientWidth;
      var parentHeight = me._icon_letan.clientHeight;
      var img = me._icon_letan__img;
      var aspectRatioDiv =
        me._icon_letan.clientWidth / me._icon_letan.clientHeight;
      var aspectRatioImg = img.naturalWidth / img.naturalHeight;
      var currentWidth, currentHeight;
      currentWidth = parentWidth;
      currentHeight = parentHeight;
      img.style.width = parentWidth + "px";
      img.style.height = parentHeight + "px";
      if (
        !me._icon_letan.ggScrollbars ||
        currentWidth < me._icon_letan.clientWidth
      ) {
        img.style.right = "";
        img.style.left = "50%";
        img.style.marginLeft = "-" + currentWidth / 2 + "px";
      } else {
        img.style.right = "";
        img.style.left = "0px";
        img.style.marginLeft = "0px";
        me._icon_letan.scrollLeft =
          currentWidth / 2 - me._icon_letan.clientWidth / 2;
      }
      if (
        !me._icon_letan.ggScrollbars ||
        currentHeight < me._icon_letan.clientHeight
      ) {
        img.style.bottom = "";
        img.style.top = "50%";
        img.style.marginTop = "-" + currentHeight / 2 + "px";
      } else {
        img.style.bottom = "";
        img.style.top = "0px";
        img.style.marginTop = "0px";
        me._icon_letan.scrollTop =
          currentHeight / 2 - me._icon_letan.clientHeight / 2;
      }
    };
    me._node_letan.appendChild(me._icon_letan);
    me._scrollarea_1__content.appendChild(me._node_letan);
    me._list_node_menu.appendChild(me._scrollarea_1);
    me._container_1.appendChild(me._list_node_menu);
    me._pad_menu.appendChild(me._container_1);
    el = me._button_search = document.createElement("div");
    el.ggId = "button_search";
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1, def: "" };
    el.ggVisible = false;
    el.className = "ggskin ggskin_rectangle external-product-icon";
    el.ggType = "rectangle";
    hs = "";
    hs += "background : #ffffff;";
    hs += "border : 0px solid #000000;";
    hs += "cursor : pointer;";
    hs += "height : 40px;";
    hs += "opacity : 0;";
    hs += "position : absolute;";
    hs += "right : -40px;";
    hs += "top : 180px;";
    hs += "visibility : hidden;";
    hs += "width : 40px;";
    hs += "pointer-events:auto;";
    hs +=
      "background: rgba(17, 137, 68, 0.7); box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.35); border-radius: 0px 5px 5px 0px;";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "50% 50%";
    me._button_search.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._button_search.logicBlock_alpha = function () {
      var newLogicStateAlpha;
      if (player.getVariableValue("var_show_menu") == false) {
        newLogicStateAlpha = 0;
      } else {
        newLogicStateAlpha = -1;
      }
      if (me._button_search.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
        me._button_search.ggCurrentLogicStateAlpha = newLogicStateAlpha;
        me._button_search.style.transition = "opacity 300ms ease 0ms";
        if (me._button_search.ggCurrentLogicStateAlpha == 0) {
          me._button_search.style.visibility = me._button_search.ggVisible
            ? "inherit"
            : "hidden";
          me._button_search.style.opacity = 1;
        } else {
          setTimeout(function () {
            if (me._button_search.style.opacity == 0.0) {
              me._button_search.style.visibility = "hidden";
            }
          }, 305);
          me._button_search.style.opacity = 0;
        }
      }
    };
    me._button_search.logicBlock_alpha();
    me._button_search.ggUpdatePosition = function (useTransition) {};
    el = me._search = document.createElement("div");
    els = me._search__img = document.createElement("img");
    els.className = "ggskin ggskin_search";
    hs =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAETElEQVRYhe3YXYgWVRjA8TNmkVFmYIIZtiqBFln0hZRlFiFGdaFQQlEmRYpEUoJ9IBopChZR9G2imRp24UWEpX24GBJkdFFCJNW7XpReZJvislS4vy5m1j3vvPO+O/uuu0b43AxzzvPxn5nnPPOcE8JpOS2DJxiBVajgbbScaqa6gtF4Dh1qZSPGn2rGE4JReAtHIsh2vI+2HPxmTD2VsGPxOo7mYJdjRKYzEvMK4D/HnYMJOwkb0FUPtsBmKOZmeR7LD3hgIGGvwDb8lYNdVg+2jp/ZGWwsv2QPdcbJgr0+y8VYfs/e7PB++L0LX+T8VrJ0Gtms0xvxcc7pH3gG5zYLWxBnKrbk4rRhKS4p62Q8Ps05OYzFfUmDJuDH472Cl7SoN8MLVC+WDryEsw" +
      "YKtoBhLv6JGDo1qvFYo1Z+wwKcPcCwN2BnLvbx7LqrntEdkfIreDXnoIJ5AwA7Fu/mYn2DaZgTjT2aN7woSotKNN6C9QXwc08C7AhpBeqMfB/E3Tm97grTjovjiZcjw5r8wTi1ZW8/ZjcBO0RagdojX+1YgvMK9Mfgz0xvU/fg9Mh4eS8BJ+OjHPwu3FQCNpF+7p8j26NYrZeqhEWRzYwQOflbyTYSs7A3B78Zk+roT0drTn+9knVYmr7db3t/wL7I0SE8hqSkszlq+4mN3Q+Pq/BZwZe5uYz/zMfTqlPp+4AzpQviWDRRwT19cPxQAfwO1U3V17i1Dz5vx0+RfTtWiPNeWik25AJ/omTzLs3Z+Wrb0MN4GENL+plS8HW2YHQjoz1q5U2MKRl0dc72tZJ2o/BCQewuDOnNuBu6VfUn/xVLerF9qiAozG9gcw6eVJ23" +
      "B6Ultc/Qz2MYnlWb7zX1WdqtHVcsnbiuwOY21b310Sze+djeFHQ01oJ1OZBWTIjmu3O5oucvtl3P1zqop6pcI60isWzBhVHM/kFHc1OwOwrUhbX4KrvvwERsyu434Uo9+8i90qYsriqtCkqg6l6+eehIp2i/Bwuz+RPQ2f2CAt0K7m0QY1umd1zuv9H4CepIkiQbQgiXhRBWhBCOZcOrkiQprBRJkrwRQngxuz0SQlgZQpicJMnWBmHkriekVO2sA9IZQliKdSGEiSGEnb3oL8buEMKeJEkONxs3hH5ARzBtIYS2krof9sH1sHoTjdLjfix0srb1JQW3SHcqM7OhH5MkqUmRvNGi3Oqu4JE+Bq5aiCVtLlW7+2/FuLIOWvBOwWq/72RDSzfTa1RvZr/DjFKwBQ4nYGsOfh9m9Rcaw6WnU/kdzOP5Etcs/NVqz0J24d" +
      "pmoKVr5VDkq0ODs8D+ws/Etzn4D2S/896gpUdhsX2X9OR1wA6B4uAPqt7rkW6fWoqgpc1U/txuBy4fcNgC+KLf+Vo9/clutWcaX2LaoMPmwIdKe4sDGssBfdjCDYpIS9cy1dVAdv+EwcjbZkV6zLVG2l+v/E/Dnpb/o/wL0RFhRILSunQAAAAASUVORK5CYII=";
    els.setAttribute("src", hs);
    els.ggNormalSrc = hs;
    hs = "";
    hs +=
      "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;";
    els.setAttribute("style", hs);
    els.className = "ggskin ggskin_button";
    els["ondragstart"] = function () {
      return false;
    };
    player.checkLoaded.push(els);
    el.appendChild(els);
    el.ggSubElement = els;
    el.ggId = "search";
    el.ggDx = 0;
    el.ggDy = 0;
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1, def: "" };
    el.ggVisible = true;
    el.className = "ggskin ggskin_button ";
    el.ggType = "button";
    hs = "";
    hs += "height : 30px;";
    hs += "left : calc(50% - ((30px + 0px) / 2) + 0px);";
    hs += "position : absolute;";
    hs += "top : calc(50% - ((30px + 0px) / 2) + 0px);";
    hs += "visibility : inherit;";
    hs += "width : 30px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "50% 50%";
    me._search.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._search.ggUpdatePosition = function (useTransition) {};
    me._button_search.appendChild(me._search);
    me._pad_menu.appendChild(me._button_search);
    el = me._button_open_menu = document.createElement("div");
    el.ggId = "button_open_menu";
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1, def: "" };
    el.ggVisible = true;
    el.className = "ggskin ggskin_rectangle ";
    el.ggType = "rectangle";
    hs = "";
    hs += "background : #ffffff;";
    hs += "border : 0px solid #000000;";
    hs += "cursor : pointer;";
    hs += "height : 40px;";
    hs += "position : absolute;";
    hs += "right : -40px;";
    hs += "top : 125px;";
    hs += "visibility : inherit;";
    hs += "width : 40px;";
    hs += "pointer-events:auto;";
    hs +=
      "background: rgba(19, 73, 157, 0.65); box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.35); border-radius: 0px 5px 5px 0px;";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "50% 50%";
    me._button_open_menu.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._button_open_menu.onclick = function (e) {
      player.setVariableValue(
        "var_show_menu",
        !player.getVariableValue("var_show_menu")
      );
      if (player.getIsMobile() == true) {
        player.setVariableValue("open_floorplan", false);
      }
    };
    me._button_open_menu.ggUpdatePosition = function (useTransition) {};
    el = me._close_menu = document.createElement("div");
    els = me._close_menu__img = document.createElement("img");
    els.className = "ggskin ggskin_svg";
    hs =
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNSAyOSIgZmlsbD0ibm9uZSIgd2lkdGg9IjM1IiBoZWlnaHQ9IjI5Ij4KIDxwYXRoIGZpbGw9IndoaXRlIiBkPSJNMTMuMzkxNSAxNC40OTc5TDAuODYxOTE2IDQuMTM4OThDMC4zMTMyMjUgMy42ODQyOCAwLjAwNDk3NDM3IDMuMDY3NTkgMC4wMDQ5NzQzNyAyLjQyNDU2QzAuMDA0OTc0MzcgMS43ODE1MiAwLjMxMzIyNSAxLjE2NDgzIDAuODYxOTE2IDAuNzEwMTM2QzEuNDEwNjEgMC4yNTU0NDQgMi4xNTQ3OCAwIDIuOTMwNzQgMEMzLjcwNjcxIDAgNC40NTA4OSAwLjI1NTQ0NCA0Ljk5OTU4IDAuNz" +
      "EwMTM2TDE3LjUgMTEuMDkzMkwzMC4wMDA0IDAuNzEwMTM2QzMwLjU0OTEgMC4yNTU0NDQgMzEuMjkzMyAtNC43OTA5NmUtMDkgMzIuMDY5MyAwQzMyLjg0NTIgNC43OTA5N2UtMDkgMzMuNTg5NCAwLjI1NTQ0NCAzNC4xMzgxIDAuNzEwMTM2QzM0LjY4NjggMS4xNjQ4MyAzNC45OTUgMS43ODE1MiAzNC45OTUgMi40MjQ1NkMzNC45OTUgMy4wNjc1OSAzNC42ODY4IDMuNjg0MjggMzQuMTM4MSA0LjEzODk4TDIxLjYwODUgMTQuNDk3OUwzNC4xMzgxIDI0Ljg1NjlDMzQuNDExMiAyNS4wODE0IDM0LjYyOCAyNS4zNDg0IDM0Ljc3NTkgMjUuNjQyN0MzNC45MjM4IDI1LjkzNjkgMzUgMjYuMjUyNiAz" +
      "NSAyNi41NzEzQzM1IDI2Ljg5MDEgMzQuOTIzOCAyNy4yMDU3IDM0Ljc3NTkgMjcuNUMzNC42MjggMjcuNzk0MiAzNC40MTEyIDI4LjA2MTMgMzQuMTM4MSAyOC4yODU3QzMzLjg2NzIgMjguNTEyMSAzMy41NDQ5IDI4LjY5MTcgMzMuMTg5OSAyOC44MTQzQzMyLjgzNDggMjguOTM2OSAzMi40NTM5IDI5IDMyLjA2OTMgMjlDMzEuNjg0NiAyOSAzMS4zMDM3IDI4LjkzNjkgMzAuOTQ4NyAyOC44MTQzQzMwLjU5MzYgMjguNjkxNyAzMC4yNzEzIDI4LjUxMjEgMzAuMDAwNCAyOC4yODU3TDE3LjUgMTcuOTAyNkw0Ljk5OTU4IDI4LjI4NTdDNC43Mjg3IDI4LjUxMjEgNC40MDY0MyAyOC42OTE3IDQuMD" +
      "UxMzUgMjguODE0M0MzLjY5NjI3IDI4LjkzNjkgMy4zMTU0MSAyOSAyLjkzMDc0IDI5QzIuNTQ2MDggMjkgMi4xNjUyMyAyOC45MzY5IDEuODEwMTUgMjguODE0M0MxLjQ1NTA3IDI4LjY5MTcgMS4xMzI4IDI4LjUxMjEgMC44NjE5MTYgMjguMjg1N0MwLjU4ODgwNiAyOC4wNjEzIDAuMzcyMDI4IDI3Ljc5NDIgMC4yMjQwOTQgMjcuNUMwLjA3NjE2MDQgMjcuMjA1NyAwIDI2Ljg5MDEgMCAyNi41NzEzQzAgMjYuMjUyNiAwLjA3NjE2MDQgMjUuOTM2OSAwLjIyNDA5NCAyNS42NDI3QzAuMzcyMDI4IDI1LjM0ODQgMC41ODg4MDYgMjUuMDgxNCAwLjg2MTkxNiAyNC44NTY5TDEzLjM5MTUgMTQuNDk3" +
      "OVoiLz4KPC9zdmc+Cg==";
    me._close_menu__img.setAttribute("src", hs);
    hs = "";
    hs +=
      "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;";
    els.setAttribute("style", hs);
    els["ondragstart"] = function () {
      return false;
    };
    el.appendChild(els);
    el.ggSubElement = els;
    el.ggId = "close_menu";
    el.ggDx = 0;
    el.ggDy = 0;
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1, def: "" };
    el.ggVisible = false;
    el.className = "ggskin ggskin_svg ";
    el.ggType = "svg";
    hs = "";
    hs += "height : 30px;";
    hs += "left : calc(50% - ((25px + 0px) / 2) + 0px);";
    hs += "position : absolute;";
    hs += "top : calc(50% - ((30px + 0px) / 2) + 0px);";
    hs += "visibility : hidden;";
    hs += "width : 25px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "50% 50%";
    me._close_menu.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._close_menu.logicBlock_visible = function () {
      var newLogicStateVisible;
      if (player.getVariableValue("var_show_menu") == true) {
        newLogicStateVisible = 0;
      } else {
        newLogicStateVisible = -1;
      }
      if (me._close_menu.ggCurrentLogicStateVisible != newLogicStateVisible) {
        me._close_menu.ggCurrentLogicStateVisible = newLogicStateVisible;
        me._close_menu.style.transition = "";
        if (me._close_menu.ggCurrentLogicStateVisible == 0) {
          me._close_menu.style.visibility =
            Number(me._close_menu.style.opacity) > 0 ||
            !me._close_menu.style.opacity
              ? "inherit"
              : "hidden";
          me._close_menu.ggVisible = true;
        } else {
          me._close_menu.style.visibility = "hidden";
          me._close_menu.ggVisible = false;
        }
      }
    };
    me._close_menu.logicBlock_visible();
    me._close_menu.ggUpdatePosition = function (useTransition) {};
    me._button_open_menu.appendChild(me._close_menu);
    el = me._open_menu = document.createElement("div");
    els = me._open_menu__img = document.createElement("img");
    els.className = "ggskin ggskin_svg";
    hs =
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NCAyOSIgZmlsbD0ibm9uZSIgd2lkdGg9IjQ0IiBoZWlnaHQ9IjI5Ij4KIDxwYXRoIGZpbGw9IndoaXRlIiBkPSJNMCAyOUgyMlYyNC4xNjY3SDBWMjlaTTAgMTYuOTE2N0g0NFYxMi4wODMzSDBWMTYuOTE2N1pNMCA0LjgzMzMzSDQ0VjBIMFY0LjgzMzMzWiIvPgo8L3N2Zz4K";
    me._open_menu__img.setAttribute("src", hs);
    hs = "";
    hs +=
      "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;";
    els.setAttribute("style", hs);
    els["ondragstart"] = function () {
      return false;
    };
    el.appendChild(els);
    el.ggSubElement = els;
    el.ggId = "open_menu";
    el.ggDx = 0;
    el.ggDy = -1;
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1, def: "" };
    el.ggVisible = false;
    el.className = "ggskin ggskin_svg ";
    el.ggType = "svg";
    hs = "";
    hs += "height : 30px;";
    hs += "left : calc(50% - ((30px + 0px) / 2) + 0px);";
    hs += "position : absolute;";
    hs += "top : calc(50% - ((30px + 0px) / 2) - 1px);";
    hs += "visibility : hidden;";
    hs += "width : 30px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "50% 50%";
    me._open_menu.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._open_menu.logicBlock_visible = function () {
      var newLogicStateVisible;
      if (player.getVariableValue("var_show_menu") == false) {
        newLogicStateVisible = 0;
      } else {
        newLogicStateVisible = -1;
      }
      if (me._open_menu.ggCurrentLogicStateVisible != newLogicStateVisible) {
        me._open_menu.ggCurrentLogicStateVisible = newLogicStateVisible;
        me._open_menu.style.transition = "";
        if (me._open_menu.ggCurrentLogicStateVisible == 0) {
          me._open_menu.style.visibility =
            Number(me._open_menu.style.opacity) > 0 ||
            !me._open_menu.style.opacity
              ? "inherit"
              : "hidden";
          me._open_menu.ggVisible = true;
        } else {
          me._open_menu.style.visibility = "hidden";
          me._open_menu.ggVisible = false;
        }
      }
    };
    me._open_menu.logicBlock_visible();
    me._open_menu.ggUpdatePosition = function (useTransition) {};
    me._button_open_menu.appendChild(me._open_menu);
    me._pad_menu.appendChild(me._button_open_menu);
    el = me._logo_menu = document.createElement("div");
    els = me._logo_menu__img = document.createElement("img");
    els.className = "ggskin ggskin_logo_menu";
    hs = basePath + "images/logo_menu.png";
    els.setAttribute("src", hs);
    els.ggNormalSrc = hs;
    hs = "";
    hs +=
      "position: absolute;top: 0px;left: -45px;width: 200px;height: 100%;-webkit-user-drag:none;pointer-events:none;;";
    els.setAttribute("style", hs);
    els.className = "ggskin ggskin_image";
    els["ondragstart"] = function () {
      return false;
    };
    player.checkLoaded.push(els);
    el.appendChild(els);
    el.ggSubElement = els;
    el.ggId = "logo menu";
    el.ggDx = 0;
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1, def: "" };
    el.ggVisible = true;
    el.className = "ggskin ggskin_image ";
    el.ggType = "image";
    hs = "";
    hs += "height : 120px;";
    hs += "left : calc(50% - ((120px + 0px) / 2) + 0px);";
    hs += "position : absolute;";
    hs += "top : 5px;";
    hs += "visibility : inherit;";
    hs += "width : 120px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "50% 50%";
    me._logo_menu.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._logo_menu.ggUpdatePosition = function (useTransition) {};
    me._pad_menu.appendChild(me._logo_menu);
    me.divSkin.appendChild(me._pad_menu);
    el = me._tint_popup = document.createElement("div");
    el.ggId = "tint_popup";
    el.ggDx = 0;
    el.ggDy = 0;
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1, def: "" };
    el.ggVisible = false;
    el.className = "ggskin ggskin_rectangle ";
    el.ggType = "rectangle";
    hs = "";
    hs += "background : rgba(0,0,0,0.313726);";
    hs += "border : 0px solid #000000;";
    hs += "cursor : default;";
    hs += "height : 101%;";
    hs += "left : calc(50% - ((101% + 0px) / 2) + 0px);";
    hs += "position : absolute;";
    hs += "top : calc(50% - ((101% + 0px) / 2) + 0px);";
    hs += "visibility : hidden;";
    hs += "width : 101%;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "50% 50%";
    me._tint_popup.ggIsActive = function () {
      return false;
    };
    el.ggElementNodeId = function () {
      return player.getCurrentNode();
    };
    me._tint_popup.logicBlock_visible = function () {
      var newLogicStateVisible;
      if (
        player.getVariableValue("open_info") == true ||
        player.getVariableValue("open_list_gianhang") == true ||
        player.getVariableValue("open_catalog") == true
      ) {
        newLogicStateVisible = 0;
      } else {
        newLogicStateVisible = -1;
      }
      if (me._tint_popup.ggCurrentLogicStateVisible != newLogicStateVisible) {
        me._tint_popup.ggCurrentLogicStateVisible = newLogicStateVisible;
        me._tint_popup.style.transition = "";
        if (me._tint_popup.ggCurrentLogicStateVisible == 0) {
          me._tint_popup.style.visibility =
            Number(me._tint_popup.style.opacity) > 0 ||
            !me._tint_popup.style.opacity
              ? "inherit"
              : "hidden";
          me._tint_popup.ggVisible = true;
        } else {
          me._tint_popup.style.visibility = "hidden";
          me._tint_popup.ggVisible = false;
        }
      }
    };
    me._tint_popup.logicBlock_visible();
    me._tint_popup.ggUpdatePosition = function (useTransition) {};
    me.divSkin.appendChild(me._tint_popup);
    el = me._popup_info = document.createElement("div");
    el.ggId = "popup_info";
    el.ggDx = 0;
    el.ggDy = 0;
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1, def: "" };
    el.ggVisible = false;
    el.className = "ggskin ggskin_rectangle ";
    el.ggType = "rectangle";
    hs = "";
    hs += "background : rgba(1,9,71,0.705882);";
    hs += "border : 0px solid #000000;";
    hs += "border-radius : 10px;";
    hs += "cursor : default;";
    hs += "height : 500px;";
    hs += "left : calc(50% - ((730px + 0px) / 2) + 0px);";
    hs += "position : absolute;";
    hs += "top : calc(50% - ((500px + 0px) / 2) + 0px);";
    hs += "visibility : hidden;";
    hs += "width : 730px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "50% 50%";
    me._popup_info.ggIsActive = function () {
      return false;
    };
    el.ggElementNodeId = function () {
      return player.getCurrentNode();
    };
    me._popup_info.logicBlock_size = function () {
      var newLogicStateSize;
      if (
        player.getIsMobile() == true &&
        player.getViewerSize().width / player.getViewerSize().height <= 1 &&
        player.getViewerSize().width <= 700
      ) {
        newLogicStateSize = 0;
      } else {
        newLogicStateSize = -1;
      }
      if (me._popup_info.ggCurrentLogicStateSize != newLogicStateSize) {
        me._popup_info.ggCurrentLogicStateSize = newLogicStateSize;
        me._popup_info.style.transition = "width 0s, height 0s";
        if (me._popup_info.ggCurrentLogicStateSize == 0) {
          me._popup_info.style.width = "340px";
          me._popup_info.style.height = "85%";
          me._popup_info.style.left = "calc(50% - (340px / 2))";
          me._popup_info.style.top = "calc(50% - (85% / 2))";
          skin.updateSize(me._popup_info);
        } else {
          me._popup_info.style.width = "730px";
          me._popup_info.style.height = "500px";
          me._popup_info.style.left = "calc(50% - (730px / 2))";
          me._popup_info.style.top = "calc(50% - (500px / 2))";
          skin.updateSize(me._popup_info);
        }
      }
    };
    me._popup_info.logicBlock_size();
    me._popup_info.logicBlock_visible = function () {
      var newLogicStateVisible;
      if (player.getVariableValue("open_info") == true) {
        newLogicStateVisible = 0;
      } else {
        newLogicStateVisible = -1;
      }
      if (me._popup_info.ggCurrentLogicStateVisible != newLogicStateVisible) {
        me._popup_info.ggCurrentLogicStateVisible = newLogicStateVisible;
        me._popup_info.style.transition = "width 0s, height 0s";
        if (me._popup_info.ggCurrentLogicStateVisible == 0) {
          me._popup_info.style.visibility =
            Number(me._popup_info.style.opacity) > 0 ||
            !me._popup_info.style.opacity
              ? "inherit"
              : "hidden";
          me._popup_info.ggVisible = true;
        } else {
          me._popup_info.style.visibility = "hidden";
          me._popup_info.ggVisible = false;
        }
      }
    };
    me._popup_info.logicBlock_visible();
    me._popup_info.ggUpdatePosition = function (useTransition) {};
    el = me._text_info = document.createElement("div");
    els = me._text_info__text = document.createElement("div");
    el.className = "ggskin ggskin_textdiv";
    el.ggTextDiv = els;
    el.ggId = "text_info";
    el.ggDx = 1;
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1, def: "" };
    el.ggVisible = true;
    el.className = "ggskin ggskin_text ";
    el.ggType = "text";
    hs = "";
    hs += "border : 0px solid #000000;";
    hs += "border-radius : 10px;";
    hs += "bottom : 10px;";
    hs += "color : rgba(255,255,255,1);";
    hs += "cursor : default;";
    hs += "height : calc(100% - 60px);";
    hs += "left : calc(50% - ((calc(100% - 20px) + 0px) / 2) + 1px);";
    hs += "position : absolute;";
    hs += "visibility : inherit;";
    hs += "width : calc(100% - 20px);";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "50% 50%";
    hs = "";
    hs += "box-sizing: border-box;";
    hs += "cursor: default;";
    hs += "width: 100%;";
    hs += "height: 100%;";
    hs += "text-align: left;";
    hs += "white-space: pre-line;";
    hs += "padding: 12px 12px 12px 12px;";
    hs += "overflow: hidden;";
    hs += "overflow-y: auto;";
    els.setAttribute("style", hs);
    me._text_info.ggUpdateText = function () {
      var params = [];
      var hs = player._("", params);
      if (hs != this.ggText) {
        this.ggText = hs;
        this.ggTextDiv.innerHTML = hs;
        if (this.ggUpdatePosition) this.ggUpdatePosition();
      }
    };
    me._text_info.ggUpdateText();
    el.appendChild(els);
    me._text_info.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._text_info.logicBlock_text = function () {
      var newLogicStateText;
      if (player.getVariableValue("text_info") == Number("1")) {
        newLogicStateText = 0;
      } else if (player.getVariableValue("text_info") == Number("2")) {
        newLogicStateText = 1;
      } else {
        newLogicStateText = -1;
      }
      if (me._text_info.ggCurrentLogicStateText != newLogicStateText) {
        me._text_info.ggCurrentLogicStateText = newLogicStateText;
        me._text_info.style.transition = "";
        if (me._text_info.ggCurrentLogicStateText == 0) {
          if (me._text_info.ggUpdateText) {
            me._text_info.ggUpdateText = function () {
              var params = [];
              var hs = player._(
                '<div class="ggmarkdown"><p>Nếu bạn là doanh nhân, chủ doanh nghiệp, nhà lãnh đạo,.. hoặc bất kỳ ai sở hữu một ý tưởng kinh doanh và khát vọng hiện thực hóa ý tưởng của mình. Bạn đang tìm kiếm một phương pháp ĐÚNG để giúp biến ước mơ của mình thành một kỳ lân trong lĩnh vực. Tác quyền <strong style="color: red">PLAIN - NGÔI NHÀ DOANH NGHIỆP TỶ ĐÔ</strong> chính là một bản đồ có thể giúp cho bạn kiến tạo doanh nghiệp thành công thịnh vượng và bền vững.\n<p><strong style="color: red">ABCDE COMMUNITY</strong> là tổ chức kết nối cộng đồng các doanh nhân, chủ doanh nghiệp ở nhiều lĩnh vực, đặc biệt các doanh nghiệp có nhu cầu ứng dụng công nghệ nhằm phát triển công ty phù hợp với thời kỳ chuyển đổi số. Công ty đã kết nối được hơn hàng chục các doanh nghiệp ở nhiều lĩnh vực từ F&B, nông nghiệp, giáo dục, bất động sản và hỗ trợ về pháp lý, tài chính & vận hành cho các đối tác trên.</p><p><strong>TẦM NHÌN: <span style="color: red">ABCDE COMMUNITY</span> </strong>định hướng trở thành một “Vườn ươm kỳ lân” – nơi ươm mầm khởi nghiệp, giúp bạn nắm rõ từng bước đi trên con đường khởi nghiệp tiến đến Vốn hóa (IPO) – vươn tầm quốc tế, sánh với những Người Khổng Lồ thế giới. Đây cũng sẽ là môi trường Sandbox lý tưởng – “thung lũng Silicon 5.0” đầu tiên của Việt Nam - nơi những người trẻ ít nguồn lực, chưa nhiều mối quan hệ đối tác chiến lược sẽ tìm được cho mình một môi trường hoàn hảo để phát triển bản thân một cách toàn diện và thịnh vượng nhất để cùng trở thành những “Startup Kỳ lân” hợp xu thế xã hội 5.0. </p><p><strong>SỨ MỆNH:</strong> Sứ mệnh của ABCDE là tạo ra một lộ trình lý tưởng, bản đồ pháp lý “chắp thêm đôi cánh” cho các doanh nghiệp start-up non trẻ có khả năng phát triển, vươn tầm quốc tế dựa trên <strong>tiến trình 5 bước gồm: DẤN TH N, SẴN SÀNG, LẤY ĐÀ, TĂNG TỐC, NHẢY VỌT.</strong></p>\n<p style="text-align: center"><strong>GIÁ TRỊ CỐT LÕI: </strong></p><p style="text-align: center">Plainwow: Khơi Nguồn Dòng Vốn Thịnh Vượng Bền Vững\nNơi Ươm Mầm Khởi Nghiệp - Biến Ước Mơ Của Bạn Thành Hiện Thực</p></div>',
                params
              );
              if (hs != this.ggText) {
                this.ggText = hs;
                this.ggTextDiv.innerHTML = hs;
                if (this.ggUpdatePosition) this.ggUpdatePosition();
              }
            };
            me._text_info.ggUpdateText();
          } else {
            if (me._text_info.ggUpdatePosition)
              me._text_info.ggUpdatePosition();
          }
        } else if (me._text_info.ggCurrentLogicStateText == 1) {
          if (me._text_info.ggUpdateText) {
            me._text_info.ggUpdateText = function () {
              var params = [];
              var hs = player._(
                "UNIFILAW l\xe0 t\u1ed5 ch\u1ee9c k\u1ebft n\u1ed1i c\u1ed9ng \u0111\u1ed3ng c\xe1c doanh nh\xe2n, ch\u1ee7 doanh nghi\u1ec7p \u1edf nhi\u1ec1u l\u0129nh v\u1ef1c, \u0111\u1eb7c bi\u1ec7t c\xe1c doanh nghi\u1ec7p c\xf3 nhu c\u1ea7u \u1ee9ng d\u1ee5ng c\xf4ng ngh\u1ec7 nh\u1eb1m ph\xe1t tri\u1ec3n c\xf4ng ty ph\xf9 h\u1ee3p v\u1edbi th\u1eddi k\u1ef3 chuy\u1ec3n \u0111\u1ed5i s\u1ed1. C\xf4ng ty \u0111\xe3 k\u1ebft n\u1ed1i \u0111\u01b0\u1ee3c h\u01a1n h\xe0ng ch\u1ee5c c\xe1c doanh nghi\u1ec7p \u1edf nhi\u1ec1u l\u0129nh v\u1ef1c t\u1eeb F&B, n\xf4ng nghi\u1ec7p, gi\xe1o d\u1ee5c, b\u1ea5t \u0111\u1ed9ng s\u1ea3n v\xe0 h\u1ed7 tr\u1ee3 v\u1ec1 ph\xe1p l\xfd, t\xe0i ch\xednh & v\u1eadn h\xe0nh cho c\xe1c \u0111\u1ed1i t\xe1c tr\xean\nT\u1ea6M NH\xccN: UNIFILAW \u0111\u1ecbnh h\u01b0\u1edbng tr\u1edf th\xe0nh m\u1ed9t \u201cV\u01b0\u1eddn \u01b0\u01a1m k\u1ef3 l\xe2n\u201d \u2013 n\u01a1i \u01b0\u01a1m m\u1ea7m kh\u1edfi nghi\u1ec7p, gi\xfap b\u1ea1n n\u1eafm r\xf5 t\u1eebng b\u01b0\u1edbc \u0111i tr\xean con \u0111\u01b0\u1eddng kh\u1edfi nghi\u1ec7p ti\u1ebfn \u0111\u1ebfn V\u1ed1n h\xf3a (IPO) \u2013 v\u01b0\u01a1n t\u1ea7m qu\u1ed1c t\u1ebf, s\xe1nh v\u1edbi nh\u1eefng Ng\u01b0\u1eddi Kh\u1ed5ng L\u1ed3 th\u1ebf gi\u1edbi. \u0110\xe2y c\u0169ng s\u1ebd l\xe0 m\xf4i tr\u01b0\u1eddng Sandbox l\xfd t\u01b0\u1edfng \u2013 \u201cthung l\u0169ng Sillicon 5.0\u201d \u0111\u1ea7u ti\xean c\u1ee7a Vi\u1ec7t Nam - n\u01a1i nh\u1eefng ng\u01b0\u1eddi tr\u1ebb \xedt ngu\u1ed3n l\u1ef1c, ch\u01b0a nhi\u1ec1u m\u1ed1i quan h\u1ec7 \u0111\u1ed1i t\xe1c chi\u1ebfn l\u01b0\u1ee3c s\u1ebd t\xecm \u0111\u01b0\u1ee3c cho m\xecnh m\u1ed9t m\xf4i tr\u01b0\u1eddng ho\xe0n h\u1ea3o \u0111\u1ec3 ph\xe1t tri\u1ec3n b\u1ea3n th\xe2n m\u1ed9t c\xe1ch to\xe0n di\u1ec7n v\xe0 th\u1ecbnh v\u01b0\u1ee3ng nh\u1ea5t \u0111\u1ec3 c\xf9ng tr\u1edf th\xe0nh nh\u1eefng \u201cStart-up K\u1ef3 l\xe2n\u201d h\u1ee3p xu th\u1ebf x\xe3 h\u1ed9i 5.0. \nS\u1ee8 M\u1ec6NH: S\u1ee9 m\u1ec7nh c\u1ee7a UNIFILAW l\xe0 t\u1ea1o ra m\u1ed9t l\u1ed9 tr\xecnh l\xfd t\u01b0\u1edfng, b\u1ea3n \u0111\u1ed3 ph\xe1p l\xfd \u201cch\u1eafp th\xeam \u0111\xf4i c\xe1nh\u201d cho c\xe1c doanh nghi\u1ec7p start-up non tr\u1ebb c\xf3 kh\u1ea3 n\u0103ng ph\xe1t tri\u1ec3n, v\u01b0\u01a1n t\u1ea7m qu\u1ed1c t\u1ebf. \nGI\xc1 TR\u1eca C\u1ed0T L\xd5I: D\u1ef1a tr\xean 5 ti\xeau ch\xed: L\xe0m \u0110\xfang \u2013 Minh B\u1ea1ch \u2013 Quy Tr\xecnh \u2013 V\u1ed1n H\xf3a \u2013 Th\u1ecbnh V\u01b0\u1ee3ng.\nUniFiLaw: Kh\u01a1i Ngu\u1ed3n D\xf2ng V\u1ed1n Th\u1ecbnh V\u01b0\u1ee3ng B\u1ec1n V\u1eefng\nN\u01a1i \u01af\u01a1m M\u1ea7m Kh\u1edfi Nghi\u1ec7p - Bi\u1ebfn \u01af\u1edbc M\u01a1 C\u1ee7a B\u1ea1n Th\xe0nh Hi\u1ec7n Th\u1ef1c\n",
                params
              );
              if (hs != this.ggText) {
                this.ggText = hs;
                this.ggTextDiv.innerHTML = hs;
                if (this.ggUpdatePosition) this.ggUpdatePosition();
              }
            };
            me._text_info.ggUpdateText();
          } else {
            if (me._text_info.ggUpdatePosition)
              me._text_info.ggUpdatePosition();
          }
        } else {
          if (me._text_info.ggUpdateText) {
            me._text_info.ggUpdateText = function () {
              var params = [];
              var hs = player._("", params);
              if (hs != this.ggText) {
                this.ggText = hs;
                this.ggTextDiv.innerHTML = hs;
                if (this.ggUpdatePosition) this.ggUpdatePosition();
              }
            };
            me._text_info.ggUpdateText();
          } else {
            if (me._text_info.ggUpdatePosition)
              me._text_info.ggUpdatePosition();
          }
        }
      }
    };
    me._text_info.logicBlock_text();
    me._text_info.ggUpdatePosition = function (useTransition) {};
    me._popup_info.appendChild(me._text_info);
    el = me._pad_title = document.createElement("div");
    el.ggId = "pad_title";
    el.ggDx = 0;
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1, def: "" };
    el.ggVisible = true;
    el.className = "ggskin ggskin_rectangle ";
    el.ggType = "rectangle";
    hs = "";
    hs += "background : #010947;";
    hs += "border : 0px solid #000000;";
    hs += "cursor : default;";
    hs += "height : 45px;";
    hs += "left : calc(50% - ((100% + 0px) / 2) + 0px);";
    hs += "position : absolute;";
    hs += "top : 0px;";
    hs += "visibility : inherit;";
    hs += "width : 100%;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "50% 50%";
    me._pad_title.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._pad_title.ggUpdatePosition = function (useTransition) {};
    me._popup_info.appendChild(me._pad_title);
    el = me._info_2 = document.createElement("div");
    els = me._info_2__text = document.createElement("div");
    el.className = "ggskin ggskin_textdiv";
    el.ggTextDiv = els;
    el.ggId = "info_2";
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1, def: "" };
    el.ggVisible = false;
    el.className = "ggskin ggskin_text ";
    el.ggType = "text";
    hs = "";
    hs += cssPrefix + "background-clip : padding-box;";
    hs += "background-clip : padding-box;";
    hs += "background : #ffffff;";
    hs += "border : 2px solid rgba(0,0,0,0);";
    hs += "border-radius : 5px;";
    hs += "color : rgba(255,255,255,1);";
    hs += "cursor : pointer;";
    hs += "height : 25px;";
    hs += "left : 165px;";
    hs += "position : absolute;";
    hs += "top : 10px;";
    hs += "visibility : hidden;";
    hs += "width : 150px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "50% 50%";
    hs = "";
    hs += "box-sizing: border-box;";
    hs += "width: 100%;";
    hs += "height: 100%;";
    hs += "font-size: 14px;";
    hs += "font-weight: 300;";
    hs += "text-align: center;";
    hs += "white-space: pre;";
    hs += "padding: 4px 1px 4px 1px;";
    hs += "overflow: hidden;";
    hs +=
      "background: rgb(30,82,214); background: linear-gradient(180deg, rgba(30,82,214,1) 41%, rgba(34,90,209,1) 100%); text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);";
    els.setAttribute("style", hs);
    me._info_2.ggUpdateText = function () {
      var params = [];
      var hs = player._("Gi\u1edbi thi\u1ec7u OMG Event", params);
      if (hs != this.ggText) {
        this.ggText = hs;
        this.ggTextDiv.innerHTML = hs;
        if (this.ggUpdatePosition) this.ggUpdatePosition();
      }
    };
    me._info_2.ggUpdateText();
    el.appendChild(els);
    me._info_2.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._info_2.logicBlock_bordercolor = function () {
      var newLogicStateBorderColor;
      if (player.getVariableValue("text_info") == Number("2")) {
        newLogicStateBorderColor = 0;
      } else {
        newLogicStateBorderColor = -1;
      }
      if (
        me._info_2.ggCurrentLogicStateBorderColor != newLogicStateBorderColor
      ) {
        me._info_2.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
        me._info_2.style.transition = "border-color 0s";
        if (me._info_2.ggCurrentLogicStateBorderColor == 0) {
          me._info_2.style.borderColor = "rgba(255,255,255,1)";
        } else {
          me._info_2.style.borderColor = "rgba(0,0,0,0)";
        }
      }
    };
    me._info_2.logicBlock_bordercolor();
    me._info_2.onclick = function (e) {
      player.setVariableValue("text_info", Number("2"));
    };
    me._info_2.ggUpdatePosition = function (useTransition) {};
    me._popup_info.appendChild(me._info_2);
    el = me._info_1 = document.createElement("div");
    els = me._info_1__text = document.createElement("div");
    el.className = "ggskin ggskin_textdiv";
    el.ggTextDiv = els;
    el.ggId = "info_1";
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1, def: "" };
    el.ggVisible = true;
    el.className = "ggskin ggskin_text ";
    el.ggType = "text";
    hs = "";
    hs += cssPrefix + "background-clip : padding-box;";
    hs += "background-clip : padding-box;";
    hs += "background : #ffffff;";
    hs += "border : 2px solid rgba(0,0,0,0);";
    hs += "border-radius : 5px;";
    hs += "color : rgba(255,255,255,1);";
    hs += "cursor : pointer;";
    hs += "height : 25px;";
    hs += "left : 5px;";
    hs += "position : absolute;";
    hs += "top : 10px;";
    hs += "visibility : inherit;";
    hs += "width : 154px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "50% 50%";
    hs = "";
    hs += "box-sizing: border-box;";
    hs += "width: 100%;";
    hs += "height: 100%;";
    hs += "font-size: 14px;";
    hs += "font-weight: 300;";
    hs += "text-align: center;";
    hs += "white-space: pre;";
    hs += "padding: 4px 1px 4px 1px;";
    hs += "overflow: hidden;";
    hs +=
      "background: rgba(19, 73, 157, 0.65); text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);";
    els.setAttribute("style", hs);
    me._info_1.ggUpdateText = function () {
      var params = [];
      var hs = player._("ABOUT US", params);
      if (hs != this.ggText) {
        this.ggText = hs;
        this.ggTextDiv.innerHTML = hs;
        if (this.ggUpdatePosition) this.ggUpdatePosition();
      }
    };
    me._info_1.ggUpdateText();
    el.appendChild(els);
    me._info_1.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._info_1.logicBlock_bordercolor = function () {
      var newLogicStateBorderColor;
      if (player.getVariableValue("text_info") == Number("1")) {
        newLogicStateBorderColor = 0;
      } else {
        newLogicStateBorderColor = -1;
      }
      if (
        me._info_1.ggCurrentLogicStateBorderColor != newLogicStateBorderColor
      ) {
        me._info_1.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
        me._info_1.style.transition = "border-color 0s";
        if (me._info_1.ggCurrentLogicStateBorderColor == 0) {
          me._info_1.style.borderColor = "rgba(255,255,255,1)";
        } else {
          me._info_1.style.borderColor = "rgba(0,0,0,0)";
        }
      }
    };
    me._info_1.logicBlock_bordercolor();
    me._info_1.onclick = function (e) {
      player.setVariableValue("text_info", Number("1"));
    };
    me._info_1.ggUpdatePosition = function (useTransition) {};
    me._popup_info.appendChild(me._info_1);
    el = me._close_popup = document.createElement("div");
    els = me._close_popup__img = document.createElement("img");
    els.className = "ggskin ggskin_svg";
    hs =
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NyA1NyIgZmlsbD0ibm9uZSIgd2lkdGg9IjU3IiBoZWlnaHQ9IjU3Ij4KIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iI2ZmZmZmZiIgZD0iTTI4LjUgMEMyMi44NjMyIDAgMTcuMzUzMSAxLjY3MTUgMTIuNjY2MyA0LjgwMzExQzcuOTc5NDYgNy45MzQ3MyA0LjMyNjU0IDEyLjM4NTggMi4xNjk0NSAxNy41OTM1QzAuMDEyMzQ4NiAyMi44MDEyIC0wLjU1MjA0NiAyOC41MzE2IDAuNTQ3NjMyIDM0LjA2MDFDMS42NDczMSAzOS41ODg1IDQuMzYxNjcgNDQuNjY2NyA4LjM0NzQ3IDQ4LjY1MjVDMT" +
      "IuMzMzMyA1Mi42MzgzIDE3LjQxMTUgNTUuMzUyNyAyMi45Mzk5IDU2LjQ1MjRDMjguNDY4NCA1Ny41NTIgMzQuMTk4OCA1Ni45ODc3IDM5LjQwNjUgNTQuODMwNkM0NC42MTQyIDUyLjY3MzUgNDkuMDY1MyA0OS4wMjA1IDUyLjE5NjkgNDQuMzMzN0M1NS4zMjg1IDM5LjY0NjkgNTcgMzQuMTM2OCA1NyAyOC41QzU2Ljk5MTYgMjAuOTQzOSA1My45ODYyIDEzLjY5OTcgNDguNjQzMiA4LjM1Njc2QzQzLjMwMDMgMy4wMTM4IDM2LjA1NjEgMC4wMDg0MjM1MiAyOC41IDBaTTM5LjY3OTEgMzYuMzIwOUMzOS45MDYgMzYuNTQgNDAuMDg2OSAzNi44MDIgNDAuMjExNCAzNy4wOTE4QzQwLjMzNTggMzcu" +
      "MzgxNSA0MC40MDE0IDM3LjY5MzIgNDAuNDA0MSAzOC4wMDg1QzQwLjQwNjggMzguMzIzOSA0MC4zNDY4IDM4LjYzNjYgNDAuMjI3MyAzOC45Mjg1QzQwLjEwNzkgMzkuMjIwNCAzOS45MzE2IDM5LjQ4NTYgMzkuNzA4NiAzOS43MDg2QzM5LjQ4NTYgMzkuOTMxNSAzOS4yMjA0IDQwLjEwNzkgMzguOTI4NSA0MC4yMjczQzM4LjYzNjYgNDAuMzQ2NyAzOC4zMjM5IDQwLjQwNjggMzguMDA4NiA0MC40MDQxQzM3LjY5MzIgNDAuNDAxMyAzNy4zODE2IDQwLjMzNTggMzcuMDkxOCA0MC4yMTE0QzM2LjgwMiA0MC4wODY5IDM2LjU0IDM5LjkwNiAzNi4zMjA5IDM5LjY3OTFMMjguNSAzMS44NTg1TDIwLj" +
      "Y3OTEgMzkuNjc5MUMyMC4yMzEyIDQwLjExMTcgMTkuNjMxMyA0MC4zNTExIDE5LjAwODYgNDAuMzQ1N0MxOC4zODU4IDQwLjM0MDMgMTcuNzkwMiA0MC4wOTA1IDE3LjM0OTggMzkuNjUwMkMxNi45MDk1IDM5LjIwOTggMTYuNjU5NyAzOC42MTQyIDE2LjY1NDMgMzcuOTkxNEMxNi42NDg5IDM3LjM2ODcgMTYuODg4MyAzNi43Njg4IDE3LjMyMDkgMzYuMzIwOUwyNS4xNDE1IDI4LjVMMTcuMzIwOSAyMC42NzkxQzE2Ljg4ODMgMjAuMjMxMiAxNi42NDg5IDE5LjYzMTMgMTYuNjU0MyAxOS4wMDg1QzE2LjY1OTcgMTguMzg1OCAxNi45MDk1IDE3Ljc5MDEgMTcuMzQ5OCAxNy4zNDk4QzE3Ljc5MDIg" +
      "MTYuOTA5NSAxOC4zODU4IDE2LjY1OTcgMTkuMDA4NiAxNi42NTQzQzE5LjYzMTMgMTYuNjQ4OSAyMC4yMzEyIDE2Ljg4ODIgMjAuNjc5MSAxNy4zMjA5TDI4LjUgMjUuMTQxNUwzNi4zMjA5IDE3LjMyMDlDMzYuNzY4OCAxNi44ODgyIDM3LjM2ODcgMTYuNjQ4OSAzNy45OTE1IDE2LjY1NDNDMzguNjE0MiAxNi42NTk3IDM5LjIwOTkgMTYuOTA5NSAzOS42NTAyIDE3LjM0OThDNDAuMDkwNSAxNy43OTAxIDQwLjM0MDMgMTguMzg1OCA0MC4zNDU3IDE5LjAwODVDNDAuMzUxMSAxOS42MzEzIDQwLjExMTggMjAuMjMxMiAzOS42NzkxIDIwLjY3OTFMMzEuODU4NSAyOC41TDM5LjY3OTEgMzYuMzIwOV" +
      "oiLz4KPC9zdmc+Cg==";
    me._close_popup__img.setAttribute("src", hs);
    hs = "";
    hs +=
      "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;";
    els.setAttribute("style", hs);
    els["ondragstart"] = function () {
      return false;
    };
    el.appendChild(els);
    el.ggSubElement = els;
    el.ggId = "close_popup";
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1, def: "" };
    el.ggVisible = true;
    el.className = "ggskin ggskin_svg ";
    el.ggType = "svg";
    hs = "";
    hs += "cursor : pointer;";
    hs += "height : 35px;";
    hs += "position : absolute;";
    hs += "right : -12px;";
    hs += "top : -12px;";
    hs += "visibility : inherit;";
    hs += "width : 35px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "50% 50%";
    me._close_popup.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._close_popup.onclick = function (e) {
      player.setVariableValue("open_info", false);
    };
    me._close_popup.ggUpdatePosition = function (useTransition) {};
    me._popup_info.appendChild(me._close_popup);
    me.divSkin.appendChild(me._popup_info);
    el = me._popup_catalog = document.createElement("div");
    el.ggId = "popup_catalog";
    el.ggDx = 0;
    el.ggDy = 0;
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1, def: "" };
    el.ggVisible = false;
    el.className = "ggskin ggskin_rectangle ";
    el.ggType = "rectangle";
    hs = "";
    hs += "background : #ffffff;";
    hs += "border : 0px solid #000000;";
    hs += "border-radius : 10px;";
    hs += "cursor : default;";
    hs += "height : 85%;";
    hs += "left : calc(50% - ((70% + 0px) / 2) + 0px);";
    hs += "position : absolute;";
    hs += "top : calc(50% - ((85% + 0px) / 2) + 0px);";
    hs += "visibility : hidden;";
    hs += "width : 70%;";
    hs += "pointer-events:auto;";
    hs +=
      "background: linear-gradient(131.74deg, rgba(19, 73, 157, 0.8) 20.69%, rgba(17, 137, 68, 0.5) 56.99%, rgba(255, 255, 255, 0.4) 91.81%);";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "50% 50%";
    me._popup_catalog.ggIsActive = function () {
      return false;
    };
    el.ggElementNodeId = function () {
      return player.getCurrentNode();
    };
    me._popup_catalog.logicBlock_visible = function () {
      var newLogicStateVisible;
      if (player.getVariableValue("open_catalog") == true) {
        newLogicStateVisible = 0;
      } else {
        newLogicStateVisible = -1;
      }
      if (
        me._popup_catalog.ggCurrentLogicStateVisible != newLogicStateVisible
      ) {
        me._popup_catalog.ggCurrentLogicStateVisible = newLogicStateVisible;
        me._popup_catalog.style.transition = "";
        if (me._popup_catalog.ggCurrentLogicStateVisible == 0) {
          me._popup_catalog.style.visibility =
            Number(me._popup_catalog.style.opacity) > 0 ||
            !me._popup_catalog.style.opacity
              ? "inherit"
              : "hidden";
          me._popup_catalog.ggVisible = true;
        } else {
          me._popup_catalog.style.visibility = "hidden";
          me._popup_catalog.ggVisible = false;
        }
      }
    };
    me._popup_catalog.logicBlock_visible();
    me._popup_catalog.ggUpdatePosition = function (useTransition) {};
    el = me._iframe_catalog = document.createElement("div");
    els = me._iframe_catalog__text = document.createElement("div");
    el.className = "ggskin ggskin_textdiv";
    el.ggTextDiv = els;
    el.ggId = "iframe_catalog";
    el.ggDx = 0;
    el.ggDy = 0;
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1, def: "" };
    el.ggVisible = true;
    el.className = "ggskin ggskin_text ";
    el.ggType = "text";
    hs = "";
    hs += "border : 0px solid #000000;";
    hs += "border-radius : 10px;";
    hs += "color : #000000;";
    hs += "cursor : default;";
    hs += "height : calc(100% - 20px);";
    hs += "left : calc(50% - ((calc(100% - 20px) + 0px) / 2) + 0px);";
    hs += "position : absolute;";
    hs += "top : calc(50% - ((calc(100% - 20px) + 0px) / 2) + 0px);";
    hs += "visibility : inherit;";
    hs += "width : calc(100% - 20px);";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "50% 50%";
    hs = "";
    hs += "box-sizing: border-box;";
    hs += "cursor: default;";
    hs += "width: 100%;";
    hs += "height: 100%;";
    hs += "text-align: center;";
    hs += "white-space: pre;";
    hs += "padding: 2px;";
    hs += "overflow: hidden;";
    els.setAttribute("style", hs);
    me._iframe_catalog.ggUpdateText = function () {
      var params = [];
      var hs = player._("", params);
      if (hs != this.ggText) {
        this.ggText = hs;
        this.ggTextDiv.innerHTML = hs;
        if (this.ggUpdatePosition) this.ggUpdatePosition();
      }
    };
    me._iframe_catalog.ggUpdateText();
    el.appendChild(els);
    me._iframe_catalog.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._iframe_catalog.ggUpdatePosition = function (useTransition) {};
    me._popup_catalog.appendChild(me._iframe_catalog);
    el = me._close_catalog = document.createElement("div");
    els = me._close_catalog__img = document.createElement("img");
    els.className = "ggskin ggskin_svg";
    hs =
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NyA1NyIgZmlsbD0ibm9uZSIgd2lkdGg9IjU3IiBoZWlnaHQ9IjU3Ij4KIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iI2ZmZmZmZiIgZD0iTTI4LjUgMEMyMi44NjMyIDAgMTcuMzUzMSAxLjY3MTUgMTIuNjY2MyA0LjgwMzExQzcuOTc5NDYgNy45MzQ3MyA0LjMyNjU0IDEyLjM4NTggMi4xNjk0NSAxNy41OTM1QzAuMDEyMzQ4NiAyMi44MDEyIC0wLjU1MjA0NiAyOC41MzE2IDAuNTQ3NjMyIDM0LjA2MDFDMS42NDczMSAzOS41ODg1IDQuMzYxNjcgNDQuNjY2NyA4LjM0NzQ3IDQ4LjY1MjVDMT" +
      "IuMzMzMyA1Mi42MzgzIDE3LjQxMTUgNTUuMzUyNyAyMi45Mzk5IDU2LjQ1MjRDMjguNDY4NCA1Ny41NTIgMzQuMTk4OCA1Ni45ODc3IDM5LjQwNjUgNTQuODMwNkM0NC42MTQyIDUyLjY3MzUgNDkuMDY1MyA0OS4wMjA1IDUyLjE5NjkgNDQuMzMzN0M1NS4zMjg1IDM5LjY0NjkgNTcgMzQuMTM2OCA1NyAyOC41QzU2Ljk5MTYgMjAuOTQzOSA1My45ODYyIDEzLjY5OTcgNDguNjQzMiA4LjM1Njc2QzQzLjMwMDMgMy4wMTM4IDM2LjA1NjEgMC4wMDg0MjM1MiAyOC41IDBaTTM5LjY3OTEgMzYuMzIwOUMzOS45MDYgMzYuNTQgNDAuMDg2OSAzNi44MDIgNDAuMjExNCAzNy4wOTE4QzQwLjMzNTggMzcu" +
      "MzgxNSA0MC40MDE0IDM3LjY5MzIgNDAuNDA0MSAzOC4wMDg1QzQwLjQwNjggMzguMzIzOSA0MC4zNDY4IDM4LjYzNjYgNDAuMjI3MyAzOC45Mjg1QzQwLjEwNzkgMzkuMjIwNCAzOS45MzE2IDM5LjQ4NTYgMzkuNzA4NiAzOS43MDg2QzM5LjQ4NTYgMzkuOTMxNSAzOS4yMjA0IDQwLjEwNzkgMzguOTI4NSA0MC4yMjczQzM4LjYzNjYgNDAuMzQ2NyAzOC4zMjM5IDQwLjQwNjggMzguMDA4NiA0MC40MDQxQzM3LjY5MzIgNDAuNDAxMyAzNy4zODE2IDQwLjMzNTggMzcuMDkxOCA0MC4yMTE0QzM2LjgwMiA0MC4wODY5IDM2LjU0IDM5LjkwNiAzNi4zMjA5IDM5LjY3OTFMMjguNSAzMS44NTg1TDIwLj" +
      "Y3OTEgMzkuNjc5MUMyMC4yMzEyIDQwLjExMTcgMTkuNjMxMyA0MC4zNTExIDE5LjAwODYgNDAuMzQ1N0MxOC4zODU4IDQwLjM0MDMgMTcuNzkwMiA0MC4wOTA1IDE3LjM0OTggMzkuNjUwMkMxNi45MDk1IDM5LjIwOTggMTYuNjU5NyAzOC42MTQyIDE2LjY1NDMgMzcuOTkxNEMxNi42NDg5IDM3LjM2ODcgMTYuODg4MyAzNi43Njg4IDE3LjMyMDkgMzYuMzIwOUwyNS4xNDE1IDI4LjVMMTcuMzIwOSAyMC42NzkxQzE2Ljg4ODMgMjAuMjMxMiAxNi42NDg5IDE5LjYzMTMgMTYuNjU0MyAxOS4wMDg1QzE2LjY1OTcgMTguMzg1OCAxNi45MDk1IDE3Ljc5MDEgMTcuMzQ5OCAxNy4zNDk4QzE3Ljc5MDIg" +
      "MTYuOTA5NSAxOC4zODU4IDE2LjY1OTcgMTkuMDA4NiAxNi42NTQzQzE5LjYzMTMgMTYuNjQ4OSAyMC4yMzEyIDE2Ljg4ODIgMjAuNjc5MSAxNy4zMjA5TDI4LjUgMjUuMTQxNUwzNi4zMjA5IDE3LjMyMDlDMzYuNzY4OCAxNi44ODgyIDM3LjM2ODcgMTYuNjQ4OSAzNy45OTE1IDE2LjY1NDNDMzguNjE0MiAxNi42NTk3IDM5LjIwOTkgMTYuOTA5NSAzOS42NTAyIDE3LjM0OThDNDAuMDkwNSAxNy43OTAxIDQwLjM0MDMgMTguMzg1OCA0MC4zNDU3IDE5LjAwODVDNDAuMzUxMSAxOS42MzEzIDQwLjExMTggMjAuMjMxMiAzOS42NzkxIDIwLjY3OTFMMzEuODU4NSAyOC41TDM5LjY3OTEgMzYuMzIwOV" +
      "oiLz4KPC9zdmc+Cg==";
    me._close_catalog__img.setAttribute("src", hs);
    hs = "";
    hs +=
      "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;";
    els.setAttribute("style", hs);
    els["ondragstart"] = function () {
      return false;
    };
    el.appendChild(els);
    el.ggSubElement = els;
    el.ggId = "close_catalog";
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1, def: "" };
    el.ggVisible = true;
    el.className = "ggskin ggskin_svg ";
    el.ggType = "svg";
    hs = "";
    hs += "cursor : pointer;";
    hs += "height : 35px;";
    hs += "position : absolute;";
    hs += "right : -12px;";
    hs += "top : -12px;";
    hs += "visibility : inherit;";
    hs += "width : 35px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "50% 50%";
    me._close_catalog.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._close_catalog.onclick = function (e) {
      player.setVariableValue("open_catalog", false);
      me._iframe_catalog.ggUpdateText = function () {
        var params = [];
        var hs = player._("", params);
        if (hs != this.ggText) {
          this.ggText = hs;
          this.ggTextDiv.innerHTML = hs;
          if (this.ggUpdatePosition) this.ggUpdatePosition();
        }
      };
      me._iframe_catalog.ggUpdateText();
      me._iframe_catalog.ggTextDiv.scrollTop = 0;
    };
    me._close_catalog.ggUpdatePosition = function (useTransition) {};
    me._popup_catalog.appendChild(me._close_catalog);
    me.divSkin.appendChild(me._popup_catalog);
    el = me._voice_con = document.createElement("div");
    el.ggId = "voice_con";
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1, def: "" };
    el.ggVisible = false;
    el.className = "ggskin ggskin_container ";
    el.ggType = "container";
    hs = "";
    hs += "bottom : 5px;";
    hs += "height : 80px;";
    hs += "position : absolute;";
    hs += "right : 120px;";
    hs += "visibility : hidden;";
    hs += "width : 80px;";
    hs += "pointer-events:none;";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "50% 50%";
    me._voice_con.ggIsActive = function () {
      return false;
    };
    el.ggElementNodeId = function () {
      return player.getCurrentNode();
    };
    me._voice_con.logicBlock_position = function () {
      var newLogicStatePosition;
      if (player.getIsMobile() == true && player.getViewerSize().width <= 480) {
        newLogicStatePosition = 0;
      } else {
        newLogicStatePosition = -1;
      }
      if (me._voice_con.ggCurrentLogicStatePosition != newLogicStatePosition) {
        me._voice_con.ggCurrentLogicStatePosition = newLogicStatePosition;
        me._voice_con.style.transition =
          "right 0s, bottom 0s, width 0s, height 0s";
        if (me._voice_con.ggCurrentLogicStatePosition == 0) {
          me._voice_con.style.right = "43px";
          me._voice_con.style.bottom = "5px";
        } else {
          me._voice_con.style.right = "120px";
          me._voice_con.style.bottom = "5px";
        }
      }
    };
    me._voice_con.logicBlock_position();
    me._voice_con.logicBlock_size = function () {
      var newLogicStateSize;
      if (player.getIsMobile() == true && player.getViewerSize().width <= 480) {
        newLogicStateSize = 0;
      } else {
        newLogicStateSize = -1;
      }
      if (me._voice_con.ggCurrentLogicStateSize != newLogicStateSize) {
        me._voice_con.ggCurrentLogicStateSize = newLogicStateSize;
        me._voice_con.style.transition =
          "right 0s, bottom 0s, width 0s, height 0s";
        if (me._voice_con.ggCurrentLogicStateSize == 0) {
          me._voice_con.style.width = "64px";
          me._voice_con.style.height = "64px";
          skin.updateSize(me._voice_con);
        } else {
          me._voice_con.style.width = "80px";
          me._voice_con.style.height = "80px";
          skin.updateSize(me._voice_con);
        }
      }
    };
    me._voice_con.logicBlock_size();
    me._voice_con.onclick = function (e) {
      player.setVariableValue(
        "audio_voice_1",
        !player.getVariableValue("audio_voice_1")
      );
      player.setVariableValue("tooltip_hover", false);
    };
    me._voice_con.onmouseover = function (e) {
      player.setVariableValue("tooltip_hover", true);
      if (player.getVariableValue("tran_en") == false) {
      }
      if (player.getVariableValue("tran_en") == true) {
      }
      me.elementMouseOver["voice_con"] = true;
    };
    me._voice_con.onmouseout = function (e) {
      player.setVariableValue("tooltip_hover", false);
      me.elementMouseOver["voice_con"] = false;
    };
    me._voice_con.ggUpdatePosition = function (useTransition) {};
    el = me._video_mc_ios = document.createElement("div");
    me._video_mc_ios.seekbars = [];
    me._video_mc_ios.ggInitMedia = function (media) {
      var notifySeekbars = function () {
        for (var i = 0; i < me._video_mc_ios.seekbars.length; i++) {
          var seekbar = me.findElements(me._video_mc_ios.seekbars[i]);
          if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
        }
      };
      while (me._video_mc_ios.hasChildNodes()) {
        me._video_mc_ios.removeChild(me._video_mc_ios.lastChild);
      }
      if (me._video_mc_ios__vid) {
        me._video_mc_ios__vid.pause();
      }
      if (media == "") {
        notifySeekbars();
        if (
          me._video_mc_ios.ggVideoNotLoaded == false &&
          me._video_mc_ios.ggDeactivate &&
          player.isPlaying("video_mc_ios")
        ) {
          me._video_mc_ios.ggDeactivate();
        }
        me._video_mc_ios.ggVideoNotLoaded = true;
        var mediaObj = player.getMediaObject("video_mc_ios");
        if (mediaObj) {
          mediaObj.autoplay = false;
        }
        return;
      }
      me._video_mc_ios.ggVideoNotLoaded = false;
      me._video_mc_ios__vid = document.createElement("video");
      me._video_mc_ios__vid.className = "ggskin ggskin_video";
      me._video_mc_ios__vid.setAttribute("width", "100%");
      me._video_mc_ios__vid.setAttribute("height", "100%");
      me._video_mc_ios__vid.setAttribute("controlsList", "nodownload");
      me._video_mc_ios__vid.setAttribute("oncontextmenu", "return false;");
      me._video_mc_ios__vid.setAttribute("autoplay", "");
      me._video_mc_ios__vid.setAttribute("loop", "");
      me._video_mc_ios__vid.muted = true;
      me._video_mc_ios__vid.volume = 0.0;
      me._video_mc_ios__source = document.createElement("source");
      me._video_mc_ios__source.setAttribute("src", media);
      me._video_mc_ios__vid.setAttribute("playsinline", "playsinline");
      me._video_mc_ios__vid.setAttribute("style", ";");
      me._video_mc_ios__vid.style.outline = "none";
      me._video_mc_ios__vid.appendChild(me._video_mc_ios__source);
      me._video_mc_ios.appendChild(me._video_mc_ios__vid);
      var videoEl = player.registerVideoElement(
        "Video_MC_ios",
        me._video_mc_ios__vid
      );
      videoEl.autoplay = true;
      player.changeVolume("Video_MC_ios", 0.0);
      notifySeekbars();
      me._video_mc_ios.ggVideoSource = media;
    };
    el.ggId = "Video_MC_ios";
    el.ggDx = 0;
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1, def: "" };
    el.ggVisible = true;
    el.className = "ggskin ggskin_video ";
    el.ggType = "video";
    hs = "";
    hs += "bottom : 0px;";
    hs += "cursor : pointer;";
    hs += "height : 250px;";
    hs += "left : calc(50% - ((170px + 0px) / 2) + 0px);";
    hs += "position : absolute;";
    hs += "visibility : inherit;";
    hs += "width : 170px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "50% 100%";
    me._video_mc_ios.ggIsActive = function () {
      if (me._video_mc_ios__vid != null) {
        return (
          me._video_mc_ios__vid.paused == false &&
          me._video_mc_ios__vid.ended == false
        );
      } else {
        return false;
      }
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._video_mc_ios.logicBlock_scaling = function () {
      var newLogicStateScaling;
      if (player.getViewerSize().width <= 1366) {
        newLogicStateScaling = 0;
      } else if (player.getViewerSize().width <= 720) {
        newLogicStateScaling = 1;
      } else if (player.getViewerSize().width <= 480) {
        newLogicStateScaling = 2;
      } else {
        newLogicStateScaling = -1;
      }
      if (me._video_mc_ios.ggCurrentLogicStateScaling != newLogicStateScaling) {
        me._video_mc_ios.ggCurrentLogicStateScaling = newLogicStateScaling;
        me._video_mc_ios.style.transition = "transform 0s";
        if (me._video_mc_ios.ggCurrentLogicStateScaling == 0) {
          me._video_mc_ios.ggParameter.sx = 0.8;
          me._video_mc_ios.ggParameter.sy = 0.8;
          me._video_mc_ios.style.transform = parameterToTransform(
            me._video_mc_ios.ggParameter
          );
          skin.updateSize(me._video_mc_ios);
        } else if (me._video_mc_ios.ggCurrentLogicStateScaling == 1) {
          me._video_mc_ios.ggParameter.sx = 0.7;
          me._video_mc_ios.ggParameter.sy = 0.7;
          me._video_mc_ios.style.transform = parameterToTransform(
            me._video_mc_ios.ggParameter
          );
          skin.updateSize(me._video_mc_ios);
        } else if (me._video_mc_ios.ggCurrentLogicStateScaling == 2) {
          me._video_mc_ios.ggParameter.sx = 0.4;
          me._video_mc_ios.ggParameter.sy = 0.4;
          me._video_mc_ios.style.transform = parameterToTransform(
            me._video_mc_ios.ggParameter
          );
          skin.updateSize(me._video_mc_ios);
        } else {
          me._video_mc_ios.ggParameter.sx = 1;
          me._video_mc_ios.ggParameter.sy = 1;
          me._video_mc_ios.style.transform = parameterToTransform(
            me._video_mc_ios.ggParameter
          );
          skin.updateSize(me._video_mc_ios);
        }
      }
    };
    me._video_mc_ios.logicBlock_scaling();
    me._video_mc_ios.logicBlock_visible = function () {
      var newLogicStateVisible;
      if (player.getVariableValue("show_bot") == true && player.getOS() == 4) {
        newLogicStateVisible = 0;
      } else if (
        player.getVariableValue("show_bot") == false &&
        player.getOS() == 4
      ) {
        newLogicStateVisible = 1;
      } else if (player.getOS() == 5 || player.getOS() == 1) {
        newLogicStateVisible = 2;
      } else {
        newLogicStateVisible = -1;
      }
      if (me._video_mc_ios.ggCurrentLogicStateVisible != newLogicStateVisible) {
        me._video_mc_ios.ggCurrentLogicStateVisible = newLogicStateVisible;
        me._video_mc_ios.style.transition = "transform 0s";
        if (me._video_mc_ios.ggCurrentLogicStateVisible == 0) {
          me._video_mc_ios.style.visibility =
            Number(me._video_mc_ios.style.opacity) > 0 ||
            !me._video_mc_ios.style.opacity
              ? "inherit"
              : "hidden";
          if (me._video_mc_ios.ggVideoNotLoaded) {
            me._video_mc_ios.ggInitMedia(me._video_mc_ios.ggVideoSource);
          }
          me._video_mc_ios.ggVisible = true;
        } else if (me._video_mc_ios.ggCurrentLogicStateVisible == 1) {
          me._video_mc_ios.style.visibility = "hidden";
          me._video_mc_ios.ggInitMedia("");
          me._video_mc_ios.ggVisible = false;
        } else if (me._video_mc_ios.ggCurrentLogicStateVisible == 2) {
          me._video_mc_ios.style.visibility = "hidden";
          me._video_mc_ios.ggInitMedia("");
          me._video_mc_ios.ggVisible = false;
        } else {
          me._video_mc_ios.style.visibility =
            Number(me._video_mc_ios.style.opacity) > 0 ||
            !me._video_mc_ios.style.opacity
              ? "inherit"
              : "hidden";
          if (me._video_mc_ios.ggVideoNotLoaded) {
            me._video_mc_ios.ggInitMedia(me._video_mc_ios.ggVideoSource);
          }
          me._video_mc_ios.ggVisible = true;
        }
      }
    };
    me._video_mc_ios.logicBlock_visible();
    me._video_mc_ios.onclick = function (e) {
      player.setVariableValue("show_bot", false);
      player.stopSound("letan");
    };
    me._video_mc_ios.ggUpdatePosition = function (useTransition) {};
    me._voice_con.appendChild(me._video_mc_ios);
    el = me._video_mc = document.createElement("div");
    me._video_mc.seekbars = [];
    me._video_mc.ggInitMedia = function (media) {
      var notifySeekbars = function () {
        for (var i = 0; i < me._video_mc.seekbars.length; i++) {
          var seekbar = me.findElements(me._video_mc.seekbars[i]);
          if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
        }
      };
      while (me._video_mc.hasChildNodes()) {
        me._video_mc.removeChild(me._video_mc.lastChild);
      }
      if (me._video_mc__vid) {
        me._video_mc__vid.pause();
      }
      if (media == "") {
        notifySeekbars();
        if (
          me._video_mc.ggVideoNotLoaded == false &&
          me._video_mc.ggDeactivate &&
          player.isPlaying("video_mc")
        ) {
          me._video_mc.ggDeactivate();
        }
        me._video_mc.ggVideoNotLoaded = true;
        var mediaObj = player.getMediaObject("video_mc");
        if (mediaObj) {
          mediaObj.autoplay = false;
        }
        return;
      }
      me._video_mc.ggVideoNotLoaded = false;
      me._video_mc__vid = document.createElement("video");
      me._video_mc__vid.className = "ggskin ggskin_video";
      me._video_mc__vid.setAttribute("width", "100%");
      me._video_mc__vid.setAttribute("height", "100%");
      me._video_mc__vid.setAttribute("controlsList", "nodownload");
      me._video_mc__vid.setAttribute("oncontextmenu", "return false;");
      me._video_mc__vid.setAttribute("autoplay", "");
      me._video_mc__vid.setAttribute("loop", "");
      me._video_mc__vid.muted = true;
      me._video_mc__vid.volume = 0.0;
      me._video_mc__source = document.createElement("source");
      me._video_mc__source.setAttribute("src", media);
      me._video_mc__vid.setAttribute("playsinline", "playsinline");
      me._video_mc__vid.setAttribute("style", ";");
      me._video_mc__vid.style.outline = "none";
      me._video_mc__vid.appendChild(me._video_mc__source);
      me._video_mc.appendChild(me._video_mc__vid);
      var videoEl = player.registerVideoElement("Video_MC", me._video_mc__vid);
      videoEl.autoplay = true;
      player.changeVolume("Video_MC", 0.0);
      notifySeekbars();
      me._video_mc.ggVideoSource = media;
    };
    el.ggId = "Video_MC";
    el.ggDx = 0;
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1, def: "" };
    el.ggVisible = true;
    el.className = "ggskin ggskin_video ";
    el.ggType = "video";
    hs = "";
    hs += "bottom : 0px;";
    hs += "cursor : pointer;";
    hs += "height : 250px;";
    hs += "left : calc(50% - ((170px + 0px) / 2) + 0px);";
    hs += "position : absolute;";
    hs += "visibility : inherit;";
    hs += "width : 170px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "50% 100%";
    me._video_mc.ggIsActive = function () {
      if (me._video_mc__vid != null) {
        return (
          me._video_mc__vid.paused == false && me._video_mc__vid.ended == false
        );
      } else {
        return false;
      }
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._video_mc.logicBlock_scaling = function () {
      var newLogicStateScaling;
      if (player.getViewerSize().width <= 1366) {
        newLogicStateScaling = 0;
      } else if (player.getViewerSize().width <= 720) {
        newLogicStateScaling = 1;
      } else if (player.getViewerSize().width <= 480) {
        newLogicStateScaling = 2;
      } else {
        newLogicStateScaling = -1;
      }
      if (me._video_mc.ggCurrentLogicStateScaling != newLogicStateScaling) {
        me._video_mc.ggCurrentLogicStateScaling = newLogicStateScaling;
        me._video_mc.style.transition = "transform 0s";
        if (me._video_mc.ggCurrentLogicStateScaling == 0) {
          me._video_mc.ggParameter.sx = 0.8;
          me._video_mc.ggParameter.sy = 0.8;
          me._video_mc.style.transform = parameterToTransform(
            me._video_mc.ggParameter
          );
          skin.updateSize(me._video_mc);
        } else if (me._video_mc.ggCurrentLogicStateScaling == 1) {
          me._video_mc.ggParameter.sx = 0.7;
          me._video_mc.ggParameter.sy = 0.7;
          me._video_mc.style.transform = parameterToTransform(
            me._video_mc.ggParameter
          );
          skin.updateSize(me._video_mc);
        } else if (me._video_mc.ggCurrentLogicStateScaling == 2) {
          me._video_mc.ggParameter.sx = 0.4;
          me._video_mc.ggParameter.sy = 0.4;
          me._video_mc.style.transform = parameterToTransform(
            me._video_mc.ggParameter
          );
          skin.updateSize(me._video_mc);
        } else {
          me._video_mc.ggParameter.sx = 1;
          me._video_mc.ggParameter.sy = 1;
          me._video_mc.style.transform = parameterToTransform(
            me._video_mc.ggParameter
          );
          skin.updateSize(me._video_mc);
        }
      }
    };
    me._video_mc.logicBlock_scaling();
    me._video_mc.logicBlock_visible = function () {
      var newLogicStateVisible;
      if (player.getVariableValue("show_bot") == false && player.getOS() != 4) {
        newLogicStateVisible = 0;
      } else if (player.getOS() == 4) {
        newLogicStateVisible = 1;
      } else {
        newLogicStateVisible = -1;
      }
      if (me._video_mc.ggCurrentLogicStateVisible != newLogicStateVisible) {
        me._video_mc.ggCurrentLogicStateVisible = newLogicStateVisible;
        me._video_mc.style.transition = "transform 0s";
        if (me._video_mc.ggCurrentLogicStateVisible == 0) {
          me._video_mc.style.visibility = "hidden";
          me._video_mc.ggInitMedia("");
          me._video_mc.ggVisible = false;
        } else if (me._video_mc.ggCurrentLogicStateVisible == 1) {
          me._video_mc.style.visibility = "hidden";
          me._video_mc.ggInitMedia("");
          me._video_mc.ggVisible = false;
        } else {
          me._video_mc.style.visibility =
            Number(me._video_mc.style.opacity) > 0 ||
            !me._video_mc.style.opacity
              ? "inherit"
              : "hidden";
          if (me._video_mc.ggVideoNotLoaded) {
            me._video_mc.ggInitMedia(me._video_mc.ggVideoSource);
          }
          me._video_mc.ggVisible = true;
        }
      }
    };
    me._video_mc.logicBlock_visible();
    me._video_mc.onclick = function (e) {
      player.setVariableValue("show_bot", false);
      player.stopSound("letan");
    };
    me._video_mc.ggUpdatePosition = function (useTransition) {};
    me._voice_con.appendChild(me._video_mc);
    el = me._chatbox = document.createElement("div");
    els = me._chatbox__img = document.createElement("img");
    els.className = "ggskin ggskin_external";
    hs = "";
    hs += "position: absolute;-webkit-user-drag:none;pointer-events:none;;";
    els.setAttribute("style", hs);
    els.onload = function () {
      me._chatbox.ggUpdatePosition();
    };
    el.appendChild(els);
    el.ggSubElement = els;
    hs = "";
    el.ggAltText = "";
    el.ggScrollbars = false;
    el.ggUpdateText = function () {
      me._chatbox.ggSubElement.setAttribute(
        "alt",
        player._(me._chatbox.ggAltText)
      );
      if (me._chatbox.ggUpdateImageInternal)
        me._chatbox.ggUpdateImageInternal();
    };
    el.ggUpdateImage = function () {
      me._chatbox.ggSubElement.style.width = "0px";
      me._chatbox.ggSubElement.style.height = "0px";
      me._chatbox.ggSubElement.src = "";
      me._chatbox.ggSubElement.src = me._chatbox.ggText;
    };
    el.ggText = basePath + "assets/icon/chatbox.png";
    el.ggUpdateImage();
    els["ondragstart"] = function () {
      return false;
    };
    player.checkLoaded.push(els);
    el.ggUpdateText();
    el.ggId = "chatbox";
    el.ggDx = 0;
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1, def: "" };
    el.ggVisible = false;
    el.className = "ggskin ggskin_external ";
    el.ggType = "external";
    hs = "";
    hs += "border : 0px solid #000000;";
    hs += "bottom : 0px;";
    hs += "cursor : pointer;";
    hs += "height : 64px;";
    hs += "left : calc(50% - ((64px + 0px) / 2) + 0px);";
    hs += "position : absolute;";
    hs += "visibility : hidden;";
    hs += "width : 64px;";
    hs += "pointer-events:auto;";
    hs += "animation: shake 1.5s; animation-iteration-count: infinite;";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "50% 50%";
    me._chatbox.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._chatbox.logicBlock_scaling = function () {
      var newLogicStateScaling;
      if (player.getIsMobile() == true) {
        newLogicStateScaling = 0;
      } else {
        newLogicStateScaling = -1;
      }
      if (me._chatbox.ggCurrentLogicStateScaling != newLogicStateScaling) {
        me._chatbox.ggCurrentLogicStateScaling = newLogicStateScaling;
        me._chatbox.style.transition = "transform 0s";
        if (me._chatbox.ggCurrentLogicStateScaling == 0) {
          me._chatbox.ggParameter.sx = 0.85;
          me._chatbox.ggParameter.sy = 0.85;
          me._chatbox.style.transform = parameterToTransform(
            me._chatbox.ggParameter
          );
          skin.updateSize(me._chatbox);
        } else {
          me._chatbox.ggParameter.sx = 1;
          me._chatbox.ggParameter.sy = 1;
          me._chatbox.style.transform = parameterToTransform(
            me._chatbox.ggParameter
          );
          skin.updateSize(me._chatbox);
        }
      }
    };
    me._chatbox.logicBlock_scaling();
    me._chatbox.logicBlock_visible = function () {
      var newLogicStateVisible;
      if (player.getVariableValue("show_bot") == false) {
        newLogicStateVisible = 0;
      } else {
        newLogicStateVisible = -1;
      }
      if (me._chatbox.ggCurrentLogicStateVisible != newLogicStateVisible) {
        me._chatbox.ggCurrentLogicStateVisible = newLogicStateVisible;
        me._chatbox.style.transition = "transform 0s";
        if (me._chatbox.ggCurrentLogicStateVisible == 0) {
          me._chatbox.style.visibility =
            Number(me._chatbox.style.opacity) > 0 || !me._chatbox.style.opacity
              ? "inherit"
              : "hidden";
          me._chatbox.ggSubElement.src = me._chatbox.ggText;
          me._chatbox.ggVisible = true;
        } else {
          me._chatbox.style.visibility = "hidden";
          me._chatbox.ggSubElement.src = "";
          me._chatbox.ggVisible = false;
        }
      }
    };
    me._chatbox.logicBlock_visible();
    me._chatbox.onclick = function (e) {
      player.setVariableValue("show_bot", true);
      player.playSound("letan", "1");
    };
    me._chatbox.ggUpdatePosition = function (useTransition) {
      var parentWidth = me._chatbox.clientWidth;
      var parentHeight = me._chatbox.clientHeight;
      var img = me._chatbox__img;
      var aspectRatioDiv = me._chatbox.clientWidth / me._chatbox.clientHeight;
      var aspectRatioImg = img.naturalWidth / img.naturalHeight;
      if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
      if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
      var currentWidth, currentHeight;
      if (aspectRatioDiv > aspectRatioImg) {
        currentHeight = parentHeight;
        currentWidth = Math.round(parentHeight * aspectRatioImg);
        img.style.width = "";
        img.style.height = parentHeight + "px";
      } else {
        currentWidth = parentWidth;
        currentHeight = Math.round(parentWidth / aspectRatioImg);
        img.style.width = parentWidth + "px";
        img.style.height = "";
      }
      if (!me._chatbox.ggScrollbars || currentWidth < me._chatbox.clientWidth) {
        img.style.right = "";
        img.style.left = "50%";
        img.style.marginLeft = "-" + currentWidth / 2 + "px";
      } else {
        img.style.right = "";
        img.style.left = "0px";
        img.style.marginLeft = "0px";
        me._chatbox.scrollLeft = currentWidth / 2 - me._chatbox.clientWidth / 2;
      }
      if (
        !me._chatbox.ggScrollbars ||
        currentHeight < me._chatbox.clientHeight
      ) {
        img.style.bottom = "";
        img.style.top = "50%";
        img.style.marginTop = "-" + currentHeight / 2 + "px";
      } else {
        img.style.bottom = "";
        img.style.top = "0px";
        img.style.marginTop = "0px";
        me._chatbox.scrollTop =
          currentHeight / 2 - me._chatbox.clientHeight / 2;
      }
    };
    me._voice_con.appendChild(me._chatbox);
    me.divSkin.appendChild(me._voice_con);
    el = me._bg_intro = document.createElement("div");
    els = me._bg_intro__img = document.createElement("img");
    els.className = "ggskin ggskin_external";
    hs = "";
    hs += "position: absolute;-webkit-user-drag:none;pointer-events:none;;";
    els.setAttribute("style", hs);
    els.onload = function () {
      me._bg_intro.ggUpdatePosition();
    };
    el.appendChild(els);
    el.ggSubElement = els;
    hs = "";
    el.ggAltText = "";
    el.ggScrollbars = false;
    el.ggUpdateText = function () {
      me._bg_intro.ggSubElement.setAttribute(
        "alt",
        player._(me._bg_intro.ggAltText)
      );
      if (me._bg_intro.ggUpdateImageInternal)
        me._bg_intro.ggUpdateImageInternal();
    };
    el.ggUpdateImage = function () {
      me._bg_intro.ggSubElement.style.width = "0px";
      me._bg_intro.ggSubElement.style.height = "0px";
      me._bg_intro.ggSubElement.src = "";
      me._bg_intro.ggSubElement.src = me._bg_intro.ggText;
    };
    el.ggText = basePath + "assets/intro/introOMG.png";
    el.ggUpdateImage();
    els["ondragstart"] = function () {
      return false;
    };
    player.checkLoaded.push(els);
    el.ggUpdateText();
    el.ggId = "bg_intro";
    el.ggDx = 0;
    el.ggDy = 0;
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1, def: "" };
    el.ggVisible = false;
    el.className = "ggskin ggskin_external ";
    el.ggType = "external";
    hs = "";
    hs += "border : 0px solid #000000;";
    hs += "cursor : default;";
    hs += "height : 102%;";
    hs += "left : calc(50% - ((102% + 0px) / 2) + 0px);";
    hs += "position : absolute;";
    hs += "top : calc(50% - ((102% + 0px) / 2) + 0px);";
    hs += "visibility : hidden;";
    hs += "width : 102%;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "50% 50%";
    me._bg_intro.ggIsActive = function () {
      return false;
    };
    el.ggElementNodeId = function () {
      return player.getCurrentNode();
    };
    me._bg_intro.logicBlock_scaling = function () {
      var newLogicStateScaling;
      if (player.getVariableValue("var_intro") == false) {
        newLogicStateScaling = 0;
      } else {
        newLogicStateScaling = -1;
      }
      if (me._bg_intro.ggCurrentLogicStateScaling != newLogicStateScaling) {
        me._bg_intro.ggCurrentLogicStateScaling = newLogicStateScaling;
        me._bg_intro.style.transition =
          "transform 400ms ease 0ms, opacity 400ms ease 0ms";
        if (me._bg_intro.ggCurrentLogicStateScaling == 0) {
          me._bg_intro.ggParameter.sx = 1.5;
          me._bg_intro.ggParameter.sy = 1.5;
          me._bg_intro.style.transform = parameterToTransform(
            me._bg_intro.ggParameter
          );
          setTimeout(function () {
            skin.updateSize(me._bg_intro);
          }, 450);
        } else {
          me._bg_intro.ggParameter.sx = 1;
          me._bg_intro.ggParameter.sy = 1;
          me._bg_intro.style.transform = parameterToTransform(
            me._bg_intro.ggParameter
          );
          setTimeout(function () {
            skin.updateSize(me._bg_intro);
          }, 450);
        }
      }
    };
    me._bg_intro.logicBlock_scaling();
    me._bg_intro.logicBlock_alpha = function () {
      var newLogicStateAlpha;
      if (player.getVariableValue("var_intro") == false) {
        newLogicStateAlpha = 0;
      } else {
        newLogicStateAlpha = -1;
      }
      if (me._bg_intro.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
        me._bg_intro.ggCurrentLogicStateAlpha = newLogicStateAlpha;
        me._bg_intro.style.transition =
          "transform 400ms ease 0ms, opacity 400ms ease 0ms";
        if (me._bg_intro.ggCurrentLogicStateAlpha == 0) {
          setTimeout(function () {
            if (me._bg_intro.style.opacity == 0.0) {
              me._bg_intro.style.visibility = "hidden";
            }
          }, 405);
          me._bg_intro.ggSubElement.src = "";
          me._bg_intro.style.opacity = 0;
        } else {
          me._bg_intro.style.visibility = me._bg_intro.ggVisible
            ? "inherit"
            : "hidden";
          me._bg_intro.ggSubElement.src = me._bg_intro.ggText;
          me._bg_intro.style.opacity = 1;
        }
      }
    };
    me._bg_intro.logicBlock_alpha();
    me._bg_intro.logicBlock_externalurl = function () {
      var newLogicStateExternalUrl;
      if (
        player.getIsMobile() == true &&
        player.getViewerSize().width / player.getViewerSize().height <= 1
      ) {
        newLogicStateExternalUrl = 0;
      } else {
        newLogicStateExternalUrl = -1;
      }
      if (
        me._bg_intro.ggCurrentLogicStateExternalUrl != newLogicStateExternalUrl
      ) {
        me._bg_intro.ggCurrentLogicStateExternalUrl = newLogicStateExternalUrl;
        me._bg_intro.style.transition =
          "transform 400ms ease 0ms, opacity 400ms ease 0ms";
        if (me._bg_intro.ggCurrentLogicStateExternalUrl == 0) {
          me._bg_intro.ggText = "assets/intro/introOMG_m.png";
          me._bg_intro__img.style.width = "0px";
          me._bg_intro__img.style.height = "0px";
          me._bg_intro__img.src = me._bg_intro.ggText;
        } else {
          me._bg_intro.ggText = "assets/intro/introOMG.png";
          me._bg_intro__img.style.width = "0px";
          me._bg_intro__img.style.height = "0px";
          me._bg_intro__img.src = me._bg_intro.ggText;
        }
      }
    };
    me._bg_intro.logicBlock_externalurl();
    me._bg_intro.ggUpdatePosition = function (useTransition) {
      var parentWidth = me._bg_intro.clientWidth;
      var parentHeight = me._bg_intro.clientHeight;
      var img = me._bg_intro__img;
      var aspectRatioDiv = me._bg_intro.clientWidth / me._bg_intro.clientHeight;
      var aspectRatioImg = img.naturalWidth / img.naturalHeight;
      var currentWidth, currentHeight;
      currentWidth = parentWidth;
      currentHeight = parentHeight;
      img.style.width = parentWidth + "px";
      img.style.height = parentHeight + "px";
      if (
        !me._bg_intro.ggScrollbars ||
        currentWidth < me._bg_intro.clientWidth
      ) {
        img.style.right = "";
        img.style.left = "50%";
        img.style.marginLeft = "-" + currentWidth / 2 + "px";
      } else {
        img.style.right = "";
        img.style.left = "0px";
        img.style.marginLeft = "0px";
        me._bg_intro.scrollLeft =
          currentWidth / 2 - me._bg_intro.clientWidth / 2;
      }
      if (
        !me._bg_intro.ggScrollbars ||
        currentHeight < me._bg_intro.clientHeight
      ) {
        img.style.bottom = "";
        img.style.top = "50%";
        img.style.marginTop = "-" + currentHeight / 2 + "px";
      } else {
        img.style.bottom = "";
        img.style.top = "0px";
        img.style.marginTop = "0px";
        me._bg_intro.scrollTop =
          currentHeight / 2 - me._bg_intro.clientHeight / 2;
      }
    };
    el = me._button_thamquan = document.createElement("div");
    el.ggId = "button_thamquan";
    el.ggDx = -30;
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1, def: "" };
    el.ggVisible = true;
    el.className = "ggskin ggskin_rectangle ";
    el.ggType = "rectangle";
    hs = "";
    hs += "background : #ffffff;";
    hs += "border : 0px solid #000000;";
    hs += "border-radius : 35px;";
    hs += "bottom : 10%;";
    hs += "cursor : pointer;";
    hs += "height : 70px;";
    hs += "left : calc(50% - ((305px + 0px) / 2) - 30%);";
    hs += "position : absolute;";
    hs += "visibility : inherit;";
    hs += "width : 305px;";
    hs += "pointer-events:auto;";
    hs +=
      "background: rgb(239,224,227); background: linear-gradient(180deg, rgba(239,224,227,0.3897934173669467) 0%, rgba(191,39,44,0.44021358543417366) 100%); box-shadow: 0px 8.53333px 8.53333px rgba(0, 0, 0, 0.25);";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "50% 50%";
    me._button_thamquan.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._button_thamquan.logicBlock_position = function () {
      var newLogicStatePosition;
      if (
        player.getIsMobile() == true &&
        player.getViewerSize().width / player.getViewerSize().height <= 1
      ) {
        newLogicStatePosition = 0;
      } else {
        newLogicStatePosition = -1;
      }
      if (
        me._button_thamquan.ggCurrentLogicStatePosition != newLogicStatePosition
      ) {
        me._button_thamquan.ggCurrentLogicStatePosition = newLogicStatePosition;
        me._button_thamquan.style.transition =
          "left 0s, bottom 0s, transform 0s";
        if (me._button_thamquan.ggCurrentLogicStatePosition == 0) {
          me._button_thamquan.style.left = "calc(50% - (305px / 2))";
          me._button_thamquan.style.bottom = "5%";
        } else {
          me._button_thamquan.style.left =
            "calc(50% - ((305px + 0px) / 2) - 30%)";
          me._button_thamquan.style.bottom = "10%";
        }
      }
    };
    me._button_thamquan.logicBlock_position();
    me._button_thamquan.logicBlock_scaling = function () {
      var newLogicStateScaling;
      if (player.getIsMobile() == true) {
        newLogicStateScaling = 0;
      } else if (me.elementMouseOver["button_thamquan"] == true) {
        newLogicStateScaling = 1;
      } else {
        newLogicStateScaling = -1;
      }
      if (
        me._button_thamquan.ggCurrentLogicStateScaling != newLogicStateScaling
      ) {
        me._button_thamquan.ggCurrentLogicStateScaling = newLogicStateScaling;
        me._button_thamquan.style.transition =
          "left 0s, bottom 0s, transform 0s";
        if (me._button_thamquan.ggCurrentLogicStateScaling == 0) {
          me._button_thamquan.ggParameter.sx = 0.7;
          me._button_thamquan.ggParameter.sy = 0.7;
          me._button_thamquan.style.transform = parameterToTransform(
            me._button_thamquan.ggParameter
          );
          skin.updateSize(me._button_thamquan);
        } else if (me._button_thamquan.ggCurrentLogicStateScaling == 1) {
          me._button_thamquan.ggParameter.sx = 1.1;
          me._button_thamquan.ggParameter.sy = 1.1;
          me._button_thamquan.style.transform = parameterToTransform(
            me._button_thamquan.ggParameter
          );
          skin.updateSize(me._button_thamquan);
        } else {
          me._button_thamquan.ggParameter.sx = 1;
          me._button_thamquan.ggParameter.sy = 1;
          me._button_thamquan.style.transform = parameterToTransform(
            me._button_thamquan.ggParameter
          );
          skin.updateSize(me._button_thamquan);
        }
      }
    };
    me._button_thamquan.logicBlock_scaling();
    me._button_thamquan.onclick = function (e) {
      player.setVariableValue("var_intro", false);
      if (
        player.getIsMobile() == true &&
        player.getViewerSize().width / player.getViewerSize().height <= 1 &&
        player.getViewerSize().width < 500
      ) {
        player.setVariableValue("var_show_menu", false);
      }
    };
    me._button_thamquan.onmouseover = function (e) {
      me.elementMouseOver["button_thamquan"] = true;
      me._button_thamquan.logicBlock_scaling();
    };
    me._button_thamquan.onmouseout = function (e) {
      me.elementMouseOver["button_thamquan"] = false;
      me._button_thamquan.logicBlock_scaling();
    };
    me._button_thamquan.ggUpdatePosition = function (useTransition) {};
    el = me._text_thamquan = document.createElement("div");
    els = me._text_thamquan__text = document.createElement("div");
    el.className = "ggskin ggskin_textdiv";
    el.ggTextDiv = els;
    el.ggId = "text_thamquan";
    el.ggDx = 0;
    el.ggDy = 0;
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1, def: "" };
    el.ggVisible = true;
    el.className = "ggskin ggskin_text ";
    el.ggType = "text";
    hs = "";
    hs += "border : 0px solid #000000;";
    hs += "border-radius : 35px;";
    hs += "color : rgba(255,255,255,1);";
    hs += "cursor : pointer;";
    hs += "height : 64px;";
    hs += "left : calc(50% - ((299px + 0px) / 2) + 0px);";
    hs += "position : absolute;";
    hs += "top : calc(50% - ((64px + 0px) / 2) + 0px);";
    hs += "visibility : inherit;";
    hs += "width : 299px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "50% 50%";
    hs = "";
    hs += "box-sizing: border-box;";
    hs += "width: 100%;";
    hs += "height: 100%;";
    hs += "font-size: 18px;";
    hs += "font-weight: bold;";
    hs += "text-align: center;";
    hs += "white-space: pre;";
    hs += "padding: 20px 8px 20px 8px;";
    hs += "overflow: hidden;";
    els.setAttribute("style", hs);
    me._text_thamquan.ggUpdateText = function () {
      var params = [];
      var hs = player._("START TOUR", params);
      if (hs != this.ggText) {
        this.ggText = hs;
        this.ggTextDiv.innerHTML = hs;
        if (this.ggUpdatePosition) this.ggUpdatePosition();
      }
    };
    me._text_thamquan.ggUpdateText();
    el.appendChild(els);
    me._text_thamquan.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._text_thamquan.ggUpdatePosition = function (useTransition) {};
    me._button_thamquan.appendChild(me._text_thamquan);
    me._bg_intro.appendChild(me._button_thamquan);
    me.divSkin.appendChild(me._bg_intro);
    me._power_by_vr360.logicBlock_scaling();
    me._power_by_vr360.logicBlock_alpha();
    me._timer_1.logicBlock_visible();
    me._cont_control.logicBlock_scaling();
    me._cont_control.logicBlock_visible();
    me._off_gyro.logicBlock_visible();
    me._gyro.logicBlock_visible();
    me._off_rotate.logicBlock_visible();
    me._rotate.logicBlock_visible();
    me._pad_full_screen.logicBlock_alpha();
    me._full_screen.logicBlock_visible();
    me._svg_1.logicBlock_visible();
    me._pad_vr.logicBlock_alpha();
    me._mute.logicBlock_visible();
    me._sound.logicBlock_visible();
    me._floorplan_box.logicBlock_size();
    me._floorplan_box.logicBlock_visible();
    me._floorplan.ggMarkerInstances = [];
    me._floorplan.ggLastNodeId = null;
    me._floorplan.ggMarkerArray = [];
    me._floorplan.ggGoogleMarkerArray = [];
    me._floorplan.ggLastZoom = -1;
    me._floorplan.ggLastLat = 0.0;
    me._floorplan.ggLastLng = 0.0;
    me._floorplan.ggRadar = {
      lastFov: -1,
      lastPan: -1,
      lastZoom: -1,
      activeNodeLatLng: null,
      poly: null,
    };
    me._floorplan.ggRadar.update = function () {
      var radar = me._floorplan.ggRadar;
      var map = me._floorplan.ggMap;
      if (!map) return;
      var d2r = Math.PI / 180;
      var r2d = 180 / Math.PI;
      var fov = player.getFov();
      var pan = player.getPanNorth();
      var zoom = map.getZoom();
      var gps;
      if (player.getMapType(me._floorplan.ggMapId) == "web") {
        gps = player.getNodeLatLng();
      } else {
        gps = player.getNodeMapCoords(null, me._floorplan.ggMapId);
        pan -= me._floorplan.ggFloorplanNorth;
      }
      var filterpassed = true;
      var currentId = player.getCurrentNode();
      if (
        me._floorplan.ggFilteredIds.length > 0 &&
        me._floorplan.ggFilteredIds.indexOf(currentId) == -1
      )
        filterpassed = false;
      if (gps.length >= 2 && (gps[0] != 0 || gps[1] != 0) && filterpassed) {
        if (zoom < 6) zoom = 6; // avoid large radar beams on world map
        if (
          radar.poly &&
          fov == radar.lastFov &&
          pan == radar.lastPan &&
          zoom == radar.lastZoom &&
          gps[0] == radar.activeNodeLatLng.lat &&
          gps[1] == radar.activeNodeLatLng.lng
        )
          return;
        radar.lastPan = pan;
        radar.lastFov = fov;
        radar.lastZoom = zoom;
        radar.activeNodeLatLng = L.latLng(gps[0], gps[1]);
        var tileDeg = 360.0 / Math.pow(2, zoom);
        var rLng = tileDeg * 0.234375;
        var rLat = rLng * Math.cos(radar.activeNodeLatLng.lat * d2r);
        var radar_path = [];
        radar_path.push(radar.activeNodeLatLng);
        var segments = 8;
        for (i = -segments; i <= segments; i++) {
          var angle = (fov / (2 * segments)) * i;
          var x =
            -rLng * Math.sin((pan + angle) * d2r) + radar.activeNodeLatLng.lng;
          var y =
            rLat * Math.cos((pan + angle) * d2r) + radar.activeNodeLatLng.lat;
          radar_path.push(L.latLng(y, x));
        }
        if (radar.poly) {
          radar.poly.removeFrom(map);
          radar.poly = null;
        }
        radar.poly = L.polygon(radar_path, {
          color: "#ff0000",
          opacity: 0.8,
          weight: 1,
          fill: true,
          fillColor: "#ff0000",
          fillOpacity: 0.35,
        }).addTo(map);
      } else {
        if (radar) {
          activeNodeLatLng = L.latLng(0, 0);
          if (radar.poly) {
            radar.poly.removeFrom(map);
            radar.poly = null;
          }
        }
      }
    };
    me._floorplan.ggTileAvailable = function (x, y, z) {
      var mapDetails = player.getMapDetails(me._floorplan.ggMapId);
      if (z < 7 || z > 7 + (mapDetails["zoomlevels"] - 1)) return false;
      var mapAR = mapDetails["width"] / mapDetails["height"];
      if (mapDetails["width"] >= mapDetails["height"]) {
        var tilesInX = Math.pow(2, z - 7);
        var tilesInY = Math.ceil(tilesInX / mapAR);
      } else {
        var tilesInY = Math.pow(2, z - 7);
        var tilesInX = Math.ceil(tilesInY * mapAR);
      }
      var tilesXStart = Math.pow(2, z - 1);
      var tilesYStart = tilesXStart;
      var tilesXEnd = tilesXStart + tilesInX - 1;
      var tilesYEnd = tilesYStart + tilesInY - 1;
      if (x < tilesXStart || x > tilesXEnd || y < tilesYStart || y > tilesYEnd)
        return false;
      return true;
    };
    me._floorplan.ggInitMap = function (keepZoom) {
      var mapType = player.getMapType(me._floorplan.ggMapId);
      var mapDetails = player.getMapDetails(me._floorplan.ggMapId);
      if (!me._floorplan.ggMapId) return;
      if (
        !me._floorplan.ggMapId.startsWith("google") &&
        Object.keys(mapDetails).length === 0
      )
        return;
      if (mapType == "file") {
        me._floorplan.style.backgroundColor = mapDetails["bgcolor"];
        me._floorplan.ggFloorplanNorth = mapDetails["floorplannorth"];
      } else {
        me._floorplan.style.backgroundColor = "#fff";
      }
      var gps;
      if (player.getMapType(me._floorplan.ggMapId) == "web") {
        gps = player.getNodeLatLng();
      } else {
        gps = player.getNodeMapCoords(null, me._floorplan.ggMapId);
      }
      if (gps.length >= 2 && (gps[0] != 0 || gps[1] != 0)) {
        activeNodeLatLng = L.latLng(gps[0], gps[1]);
      } else {
        activeNodeLatLng = L.latLng(
          me._floorplan.ggLastLat,
          me._floorplan.ggLastLng
        );
      }
      if (mapType == "web") {
        if (me._floorplan.ggLastZoom == -1) me._floorplan.ggLastZoom = 2;
        var initZoom = keepZoom ? me._floorplan.ggLastZoom : 2;
        var maxZoom =
          mapDetails["mapprovider"] == "openstreetmap" &&
          mapDetails["mapstyle"] == "outdoors"
            ? 17
            : 18;
        if (mapDetails["mapprovider"] == "custom")
          maxZoom = mapDetails["mapmaxzoom"];
        var mapOptions = {
          zoom: initZoom,
          zoomControl: false,
          maxBoundsViscosity: 1.0,
          attributionControl: false,
          maxZoom: maxZoom,
        };
        me._floorplan.ggMap = L.map(me._floorplan, mapOptions).setView(
          activeNodeLatLng,
          initZoom
        );
        if (
          mapDetails.hasOwnProperty("maplimits") &&
          mapDetails["maplimits"].length == 4
        ) {
          var maxBounds = [
            [
              parseFloat(mapDetails["maplimits"][0]),
              parseFloat(mapDetails["maplimits"][1]),
            ],
            [
              parseFloat(mapDetails["maplimits"][2]),
              parseFloat(mapDetails["maplimits"][3]),
            ],
          ];
          me._floorplan.ggMap.setMaxBounds(maxBounds);
          me._floorplan.ggMap.setMinZoom(
            me._floorplan.ggMap.getBoundsZoom(maxBounds) - 1
          );
        }
        if (mapDetails["mapprovider"] == "openstreetmap") {
          if (mapDetails["mapstyle"] == "streets") {
            L.tileLayer(
              "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
              {}
            ).addTo(me._floorplan.ggMap);
          } else if (mapDetails["mapstyle"] == "outdoors") {
            L.tileLayer(
              "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",
              {}
            ).addTo(me._floorplan.ggMap);
          }
        } else if (mapDetails["mapprovider"] == "mapbox") {
          if (mapDetails.hasOwnProperty("mapboxlayerstyleurls")) {
            var custMaps = {};
            var firstCustMap;
            for (
              var layerIndex = 0;
              layerIndex < mapDetails["mapboxlayerstyleurls"].length;
              layerIndex++
            ) {
              var layerStyle = mapDetails["mapboxlayerstyleurls"][layerIndex];
              var custMap;
              if (!layerStyle.startsWith("mapbox:")) {
                if (layerStyle == "satellite") {
                  custMap = L.tileLayer(
                    "https://api.mapbox.com/v4/mapbox." +
                      layerStyle +
                      "/{z}/{x}/{y}@2x.png?access_token=" +
                      mapDetails["mapkey"],
                    {}
                  );
                } else {
                  custMap = L.tileLayer(
                    "https://api.mapbox.com/styles/v1/mapbox/" +
                      layerStyle +
                      "-v11/tiles/{z}/{x}/{y}@2x?access_token=" +
                      mapDetails["mapkey"],
                    { tileSize: 512, zoomOffset: -1 }
                  );
                }
              } else {
                layerStyle = layerStyle.slice(
                  layerStyle.indexOf("styles/") + 7
                );
                custMap = L.tileLayer(
                  "https://api.mapbox.com/styles/v1/" +
                    layerStyle +
                    "/tiles/256/{z}/{x}/{y}@2x?access_token=" +
                    mapDetails["mapkey"],
                  {}
                );
              }
              custMaps[mapDetails["mapboxlayernames"][layerIndex]] = custMap;
              if (layerIndex == 0) {
                firstCustMap = custMap;
              }
            }
            var overlayMaps = {};
            L.control.layers(custMaps, overlayMaps).addTo(me._floorplan.ggMap);
            firstCustMap.addTo(me._floorplan.ggMap);
          } else {
            var styleUrl = mapDetails["styleurl"];
            var layer;
            if (styleUrl == "") {
              if (mapDetails["mapstyle"] == "satellite") {
                layer = L.tileLayer(
                  "https://api.mapbox.com/v4/mapbox." +
                    mapDetails["mapstyle"] +
                    "/{z}/{x}/{y}@2x.png?access_token=" +
                    mapDetails["mapkey"],
                  {}
                );
              } else {
                layer = L.tileLayer(
                  "https://api.mapbox.com/styles/v1/mapbox/" +
                    mapDetails["mapstyle"] +
                    "-v11/tiles/{z}/{x}/{y}@2x?access_token=" +
                    mapDetails["mapkey"],
                  { tileSize: 512, zoomOffset: -1 }
                );
              }
            } else {
              styleUrl = styleUrl.slice(styleUrl.indexOf("styles/") + 7);
              layer = L.tileLayer(
                "https://api.mapbox.com/styles/v1/" +
                  styleUrl +
                  "/tiles/256/{z}/{x}/{y}@2x?access_token=" +
                  mapDetails["mapkey"],
                {}
              );
            }
            layer.addTo(me._floorplan.ggMap);
          }
        } else if (mapDetails["mapprovider"] == "custom") {
          if (mapDetails.hasOwnProperty("customlayerurltemplates")) {
            var custMaps = {};
            var firstCustMap;
            for (
              var layerIndex = 0;
              layerIndex < mapDetails["customlayerurltemplates"].length;
              layerIndex++
            ) {
              var custMap = L.tileLayer(
                mapDetails["customlayerurltemplates"][layerIndex],
                {
                  maxZoom: parseInt(
                    mapDetails["customlayermaxzooms"][layerIndex]
                  ),
                }
              );
              custMaps[mapDetails["customlayernames"][layerIndex]] = custMap;
              if (layerIndex == 0) {
                firstCustMap = custMap;
              }
            }
            var overlayMaps = {};
            L.control.layers(custMaps, overlayMaps).addTo(me._floorplan.ggMap);
            firstCustMap.addTo(me._floorplan.ggMap);
            me._floorplan.ggMap.on("baselayerchange", function (event) {
              me._floorplan.ggMap.setMaxZoom(
                mapDetails["customlayermaxzooms"][
                  mapDetails["customlayernames"].indexOf(event.name)
                ]
              );
            });
          } else {
            L.tileLayer(mapDetails["mapurltemplate"], {
              maxZoom: mapDetails["mapmaxzoom"],
            }).addTo(me._floorplan.ggMap);
          }
        }
        me._floorplan.ggMap.on("zoom", function () {
          me._floorplan.ggRadar.update();
        });
      } else if (mapType == "file") {
        me._floorplan.ggCalculateFloorplanDimInDeg(mapDetails);
        var mapCenter = activeNodeLatLng;
        if (mapCenter.lat == 0.0 && mapCenter.lng == 0.0) {
          mapCenter.lat = -me._floorplan.mapHeightInDeg / 2;
          mapCenter.lng = me._floorplan.mapWidthInDeg / 2;
        }
        if (me._floorplan.ggLastZoom == -1) me._floorplan.ggLastZoom = 7;
        var initZoom = keepZoom ? me._floorplan.ggLastZoom : 9;
        var mapOptions = {
          zoom: initZoom,
          minZoom: 7,
          maxZoom: 7 + (mapDetails["zoomlevels"] - 1) + 0,
          center: mapCenter,
          zoomControl: false,
          attributionControl: false,
        };
        me._floorplan.ggMap = L.map(me._floorplan, mapOptions).setView(
          activeNodeLatLng,
          initZoom
        );
        var MapLayer = L.TileLayer.extend({
          getTileUrl: function (coords) {
            if (me._floorplan.ggTileAvailable(coords.x, coords.y, coords.z)) {
              return (
                basePath +
                "images/maptiles/" +
                me._floorplan.ggMapId +
                "/" +
                coords.z +
                "/" +
                coords.x +
                "_" +
                coords.y +
                "." +
                mapDetails["tileformat"]
              );
            } else {
              return "";
            }
          },
        });
        var mapLayer = new MapLayer();
        mapLayer.addTo(me._floorplan.ggMap);
        me._floorplan.ggMap.on("move zoom", function () {
          me._floorplan.ggCheckBounds(mapDetails);
          me._floorplan.ggRadar.update();
        });
        me._floorplan.ggCheckBounds(mapDetails);
      }
      me._floorplan.ggMapNotLoaded = false;
    };
    me._floorplan.ggClearMap = function () {
      me._floorplan.ggClearMapMarkers();
      if (me._floorplan.ggMap) me._floorplan.ggMap.remove();
      me._floorplan.ggMap = null;
      me._floorplan.ggMapNotLoaded = true;
    };
    me._floorplan.ggClearMapMarkers = function () {
      me._floorplan.ggLastActivMarker = null;
      var id, marker;
      var markers = me._floorplan.ggMarkerArray;
      for (id in markers) {
        if (markers.hasOwnProperty(id)) {
          marker = markers[id];
          marker.removeFrom(me._floorplan.ggMap);
        }
      }
      me._floorplan.ggMarkerArray = [];
      me._floorplan.ggMarkerInstances = [];
      me._floorplan.ggLastActivMarker = null;
    };
    me._floorplan.ggCenterNode = function (nodeId) {
      if (!me._floorplan.ggMap) return;
      var gps;
      if (player.getMapType(me._floorplan.ggMapId) == "web") {
        gps = player.getNodeLatLng(nodeId);
      } else {
        gps = player.getNodeMapCoords(nodeId, me._floorplan.ggMapId);
      }
      if (gps.length >= 2 && (gps[0] != 0 || gps[1] != 0)) {
        var markerLocation = L.latLng(gps[0], gps[1]);
        me._floorplan.ggMap.panTo(markerLocation, { animate: false });
      }
    };
    me._floorplan.ggFitBounds = function (force) {
      if (me._floorplan.ggMapNotLoaded) return;
      if (!me._floorplan.ggMap) return;
      if (me._floorplan.ggMarkerBounds.isValid()) {
        if (
          me._floorplan.ggMarkerInstances.length > 1 ||
          Object.getOwnPropertyNames(me._floorplan.ggGoogleMarkerArray).length >
            1
        ) {
          if (force) {
            me._floorplan.ggMap.zoomOut(1, { animate: false });
            me._floorplan.ggMap.fitBounds(me._floorplan.ggMarkerBounds, {
              padding: [30, 30],
              animate: false,
            });
          } else {
            if (player.getMapType(me._floorplan.ggMapId) == "web") {
              me._floorplan.ggMap.setZoom(2);
            } else {
              me._floorplan.ggMap.setZoom(7 + 2);
            }
          }
        } else {
          me._floorplan.ggMap.setView(
            me._floorplan.ggMarkerBounds.getCenter(),
            me._floorplan.ggMap.getZoom()
          );
          if (player.getMapType(me._floorplan.ggMapId) == "web") {
            if (force) {
              me._floorplan.ggMap.setZoom(18);
            } else {
              me._floorplan.ggMap.setZoom(2);
            }
          } else {
            if (force) {
              me._floorplan.ggMap.setZoom(7);
            } else {
              me._floorplan.ggMap.setZoom(7 + 2);
            }
          }
        }
      }
    };
    me._floorplan.ggInitMapMarkers = function (updateMapBounds) {
      if (!me._floorplan.ggMap) return;
      L.SkinMarkerLayer = L.Layer.extend({
        initialize: function (div, pos) {
          div.style.left = -12 + "px";
          div.style.top = -41 + "px";
          this._div = document.createElement("div");
          this._div.appendChild(div);
          this._pos = pos;
        },
        onAdd: function (map) {
          this.options.pane = "markerPane";
          var pane = map.getPane(this.options.pane);
          pane.appendChild(this._div);
          this._update();
          map.on("zoomstart", this._zoomStart, this);
          map.on("zoomend", this._zoomEnd, this);
          map.on("zoomend viewreset", this._update, this);
        },
        onRemove: function (map) {
          L.DomUtil.remove(this._div);
          map.off("zoomend viewreset", this._update, this);
        },
        _zoomStart: function () {
          this._div.style.visibility = "hidden";
        },
        _zoomEnd: function () {
          this._div.style.visibility = "inherit";
        },
        _update: function () {
          var point = this._map.latLngToLayerPoint(this._pos);
          L.DomUtil.setPosition(this._div, point);
        },
      });
      me._floorplan.ggClearMapMarkers();
      var ids = player.getNodeIds();
      me._floorplan.ggFilteredIds = [];
      if (me._floorplan.ggFilter != "") {
        var filter = me._floorplan.ggFilter.split(",");
        for (i = 0; i < ids.length; i++) {
          var nodeId = ids[i];
          var nodeData = player.getNodeUserdata(nodeId);
          for (var j = 0; j < filter.length; j++) {
            if (nodeData["tags"].indexOf(filter[j].trim()) != -1)
              me._floorplan.ggFilteredIds.push(nodeId);
          }
        }
        if (me._floorplan.ggFilteredIds.length > 0)
          ids = me._floorplan.ggFilteredIds;
      }
      var marker;
      var markerLocation;
      me._floorplan.ggMarkerBounds = L.latLngBounds();
      var currentId = player.getCurrentNode();
      for (var i = 0; i < ids.length; i++) {
        var id = ids[i];
        var gps;
        if (player.getMapType(me._floorplan.ggMapId) == "web") {
          gps = player.getNodeLatLng(id);
        } else {
          gps = player.getNodeMapCoords(id, me._floorplan.ggMapId);
        }
        if (gps.length >= 2 && (gps[0] != 0 || gps[1] != 0)) {
          markerLocation = L.latLng(gps[0], gps[1]);
          var markerParent = new Object();
          markerParent.ggElementNodeId = function () {
            return id;
          };
          var div = new SkinElement_map_pin_Class(me, markerParent);
          marker = new L.SkinMarkerLayer(div._map_pin, markerLocation);
          marker.addTo(me._floorplan.ggMap);
          me._floorplan.ggMarkerArray[id] = marker;
          me._floorplan.ggMarkerInstances.push(div);
          me._floorplan.ggMarkerBounds.extend(markerLocation);
        }
      }
      if (
        ids.length > 1 &&
        me._floorplan.ggMarkerBounds.isValid() &&
        updateMapBounds
      ) {
        me._floorplan.ggFitBounds(false);
      }
      skin.updateSize(me._floorplan);
      this.ggLastActivMarker = null;
      if (this.ggUpdateConditionNodeChange) this.ggUpdateConditionNodeChange();
      this.ggRadar.lastFov = -1;
      this.ggRadar.update();
    };
    me._floorplan.ggChangeMap = function (mapId) {
      var newMapType = player.getMapType(mapId);
      if (newMapType == "web") {
        return;
      }
      me._floorplan.ggMapId = mapId;
      if (!me._floorplan.ggMapNotLoaded) {
        me._floorplan.ggLastZoom = me._floorplan.ggMap.getZoom();
        me._floorplan.ggLastLat = me._floorplan.ggMap.getCenter().lat;
        me._floorplan.ggLastLng = me._floorplan.ggMap.getCenter().lng;
        me._floorplan.ggClearMap();
        me._floorplan.ggInitMap(true);
        me._floorplan.ggInitMapMarkers(false);
        var mapDetails = player.getMapDetails(me._floorplan.ggMapId);
        me._floorplan.ggCalculateFloorplanDimInDeg(mapDetails);
        me._floorplan.ggCheckBounds(mapDetails);
      }
    };
    me._floorplan.ggCalculateFloorplanDimInDeg = function (mapDetails) {
      var mapAR = mapDetails["width"] / mapDetails["height"];
      var tileInDeg = 360.0 / Math.pow(2, 7);
      if (mapDetails["width"] >= mapDetails["height"]) {
        var tmpWidth = mapDetails["width"];
        while (tmpWidth > 256) {
          tmpWidth /= 2;
        }
        me._floorplan.mapWidthInDeg = tileInDeg * (tmpWidth / 256);
        me._floorplan.mapHeightInDeg = me._floorplan.mapWidthInDeg / mapAR;
      } else {
        var tmpHeight = mapDetails["height"];
        while (tmpHeight > 256) {
          tmpHeight /= 2;
        }
        me._floorplan.mapHeightInDeg = tileInDeg * (tmpHeight / 256);
        me._floorplan.mapWidthInDeg = me._floorplan.mapHeightInDeg * mapAR;
      }
    };
    me._floorplan.ggInCheckBounds = false;
    me._floorplan.ggCheckBounds = function (mapDetails) {
      if (me._floorplan.ggInCheckBounds) return;
      me._floorplan.ggInCheckBounds = true;
      var mapCenter = me._floorplan.ggMap.getCenter();
      var currentZoom = me._floorplan.ggMap.getZoom();
      var pixelInDeg = 360.0 / (Math.pow(2, currentZoom) * 256);
      var xOffset = (me._floorplan.clientWidth / 2.0) * pixelInDeg;
      var yOffset = (me._floorplan.clientHeight / 2.0) * pixelInDeg;
      var x = mapCenter.lng;
      var y = mapCenter.lat;
      var xTemp = x;
      var yTemp = y;
      if (
        me._floorplan.mapWidthInDeg <
        me._floorplan.clientWidth * pixelInDeg
      ) {
        var xMargin =
          (me._floorplan.clientWidth * pixelInDeg -
            me._floorplan.mapWidthInDeg) /
          2;
        if (x < me._floorplan.mapWidthInDeg / 2 - xMargin)
          x = me._floorplan.mapWidthInDeg / 2 - xMargin;
        if (x > me._floorplan.mapWidthInDeg / 2 + xMargin)
          x = me._floorplan.mapWidthInDeg / 2 + xMargin;
      } else {
        if (x > me._floorplan.mapWidthInDeg - xOffset)
          x = me._floorplan.mapWidthInDeg - xOffset;
        if (x < xOffset) x = xOffset;
      }
      if (
        me._floorplan.mapHeightInDeg <
        me._floorplan.clientHeight * pixelInDeg
      ) {
        var yMargin =
          (me._floorplan.clientHeight * pixelInDeg -
            me._floorplan.mapHeightInDeg) /
          2;
        if (y < -me._floorplan.mapHeightInDeg / 2 - yMargin)
          y = -me._floorplan.mapHeightInDeg / 2 - yMargin;
        if (y > -me._floorplan.mapHeightInDeg / 2 + yMargin)
          y = -me._floorplan.mapHeightInDeg / 2 + yMargin;
      } else {
        if (y < -me._floorplan.mapHeightInDeg + yOffset)
          y = -me._floorplan.mapHeightInDeg + yOffset;
        if (y > -yOffset) y = -yOffset;
      }
      if (x != xTemp || y != yTemp) {
        var newCenter = L.latLng(y, x);
        me._floorplan.ggMap.setView(newCenter, me._floorplan.ggMap.getZoom(), {
          animate: false,
        });
      }
      me._floorplan.ggInCheckBounds = false;
    };
    me._tang_tret.logicBlock_alpha();
    me._tang_tret.logicBlock_backgroundcolor();
    me._tang_1.logicBlock_alpha();
    me._tang_1.logicBlock_backgroundcolor();
    me._arrow_zoom.logicBlock_angle();
    me._svg_2.logicBlock_angle();
    me._svg_3.logicBlock_angle();
    me._image_1.logicBlock_size();
    me._image_1.logicBlock_alpha();
    me._icon_map.logicBlock_scaling();
    me._icon_map.logicBlock_visible();
    me._close_map.logicBlock_visible();
    me._pad_menu.logicBlock_position();
    me._node_gianhang_4.logicBlock_backgroundcolor();
    me._cloner_node.style["display"] = "none";
    var p = me._cloner_node.parentElement;
    while (p != null && p !== this.divSkin) {
      if (p.ggType && p.ggType == "cloner") {
        if (p.ggAutoPosition) {
          p.ggAutoPosition(false);
        }
      }
      if (p.ggType && p.ggType == "scrollarea") {
        if (p.ggUpdatePosition) {
          p.ggUpdatePosition();
        }
      }
      p = p.parentElement;
    }
    me._node_gianhang.logicBlock_backgroundcolor();
    me._cloner_node.style["display"] = "none";
    var p = me._cloner_node.parentElement;
    while (p != null && p !== this.divSkin) {
      if (p.ggType && p.ggType == "cloner") {
        if (p.ggAutoPosition) {
          p.ggAutoPosition(false);
        }
      }
      if (p.ggType && p.ggType == "scrollarea") {
        if (p.ggUpdatePosition) {
          p.ggUpdatePosition();
        }
      }
      p = p.parentElement;
    }
    me._node_phonghoithao.logicBlock_backgroundcolor();
    me._node_bantiepkhach.logicBlock_backgroundcolor();
    me._node_letan.logicBlock_backgroundcolor();
    me._button_search.logicBlock_alpha();
    me._close_menu.logicBlock_visible();
    me._open_menu.logicBlock_visible();
    me._tint_popup.logicBlock_visible();
    me._popup_info.logicBlock_size();
    me._popup_info.logicBlock_visible();
    me._text_info.logicBlock_text();
    me._info_2.logicBlock_bordercolor();
    me._info_1.logicBlock_bordercolor();
    me._popup_catalog.logicBlock_visible();
    me._voice_con.logicBlock_position();
    me._voice_con.logicBlock_size();
    me._video_mc_ios.logicBlock_scaling();
    me._video_mc_ios.logicBlock_visible();
    me._video_mc_ios.ggInitMedia("assets/MC ao/mc2.mov");
    me._video_mc.logicBlock_scaling();
    me._video_mc.logicBlock_visible();
    me._video_mc.ggInitMedia("assets/MC ao/mc.webm");
    me._chatbox.logicBlock_scaling();
    me._chatbox.logicBlock_visible();
    me._bg_intro.logicBlock_scaling();
    me._bg_intro.logicBlock_alpha();
    me._bg_intro.logicBlock_externalurl();
    me._button_thamquan.logicBlock_position();
    me._button_thamquan.logicBlock_scaling();
    player.addListener("activehotspotchanged", function (event) {
      if (hotspotTemplates.hasOwnProperty("ht_node")) {
        for (var i = 0; i < hotspotTemplates["ht_node"].length; i++) {
          hotspotTemplates["ht_node"][i].ggEvent_activehotspotchanged();
        }
      }
    });
    player.addListener("autorotatechanged", function (event) {
      me._off_rotate.logicBlock_visible();
      me._rotate.logicBlock_visible();
    });
    player.addListener("changenode", function (event) {
      for (var i = 0; i < me._cloner_node.ggInstances.length; i++) {
        me._cloner_node.ggInstances[i].ggEvent_changenode(event);
      }
      if (hotspotTemplates.hasOwnProperty("ht_node")) {
        for (var i = 0; i < hotspotTemplates["ht_node"].length; i++) {
          hotspotTemplates["ht_node"][i].ggEvent_changenode();
        }
      }
      if (hotspotTemplates.hasOwnProperty("hs_sanpham")) {
        for (var i = 0; i < hotspotTemplates["hs_sanpham"].length; i++) {
          hotspotTemplates["hs_sanpham"][i].ggEvent_changenode();
        }
      }
      me._timer_1.logicBlock_visible();
      me._cont_control.logicBlock_visible();
      me._off_gyro.logicBlock_visible();
      me._gyro.logicBlock_visible();
      me._off_rotate.logicBlock_visible();
      me._rotate.logicBlock_visible();
      me._mute.logicBlock_visible();
      me._sound.logicBlock_visible();
      me._floorplan_box.logicBlock_size();
      me._floorplan_box.logicBlock_visible();
      if (me.ggUserdata.tags.indexOf("t1") != -1) {
        player.setVariableValue("var_select", Number("1"));
      }
      if (me.ggUserdata.tags.indexOf("t2") != -1) {
        player.setVariableValue("var_select", Number("2"));
      }
      for (var i = 0; i < me._floorplan.ggMarkerInstances.length; i++) {
        me._floorplan.ggMarkerInstances[i].ggEvent_changenode();
      }
      if (me._floorplan.ggLastActivMarker) {
        if (me._floorplan.ggLastActivMarker._div.ggDeactivate)
          me._floorplan.ggLastActivMarker._div.ggDeactivate();
      }
      var id = player.getCurrentNode();
      if (me.ggMarkerArray) {
        var marker = me._floorplan.ggMarkerArray[id];
        if (marker) {
          if (marker._div.ggActivate) marker._div.ggActivate();
        }
        me._floorplan.ggLastActivMarker = marker;
      }
      if (!me._floorplan.ggMapNotLoaded) {
        me._floorplan.ggCenterNode();
      }
      if (player.getMapType(me._floorplan.ggMapId) == "file") {
        var coords = player.getNodeMapCoords(id, me._floorplan.ggMapId);
        if (coords.length < 2) {
          var mapId = player.getMapContainingNode(id);
          if (mapId != "") {
            me._floorplan.ggChangeMap(mapId);
          }
        }
      }
      me._floorplan.ggLastNodeId = id;
      me._floorplan.ggRadar.update();
      if (me.ggUserdata.tags.indexOf("trienlam") != -1) {
        me._floorplan.ggChangeMap("FloorPlan01");
      }
      if (me.ggUserdata.tags.indexOf("hoithao") != -1) {
        me._floorplan.ggChangeMap("FloorPlan02");
      }
      me._tang_tret.logicBlock_alpha();
      me._tang_tret.logicBlock_backgroundcolor();
      me._tang_1.logicBlock_alpha();
      me._tang_1.logicBlock_backgroundcolor();
      me._arrow_zoom.logicBlock_angle();
      me._svg_2.logicBlock_angle();
      me._svg_3.logicBlock_angle();
      me._image_1.logicBlock_alpha();
      me._icon_map.logicBlock_visible();
      me._close_map.logicBlock_visible();
      me._pad_menu.logicBlock_position();
      me._cloner_node.ggUpdateConditionNodeChange();
      me._button_search.logicBlock_alpha();
      me._close_menu.logicBlock_visible();
      me._open_menu.logicBlock_visible();
      me._tint_popup.logicBlock_visible();
      me._popup_info.logicBlock_visible();
      me._text_info.logicBlock_text();
      me._info_2.logicBlock_bordercolor();
      me._info_1.logicBlock_bordercolor();
      me._popup_catalog.logicBlock_visible();
      player.setVariableValue("hs_info_voice_1", false);
      me._video_mc_ios.logicBlock_visible();
      me._video_mc.logicBlock_visible();
      me._chatbox.logicBlock_visible();
      me._bg_intro.logicBlock_scaling();
      me._bg_intro.logicBlock_alpha();
    });
    player.addListener("changevisitednodes", function (event) {
      for (var i = 0; i < me._cloner_node.ggInstances.length; i++) {
        me._cloner_node.ggInstances[i].ggEvent_changevisitednodes(event);
      }
    });
    player.addListener("configloaded", function (event) {
      if (hotspotTemplates.hasOwnProperty("ht_node")) {
        for (var i = 0; i < hotspotTemplates["ht_node"].length; i++) {
          hotspotTemplates["ht_node"][i].ggEvent_configloaded();
        }
      }
      if (hotspotTemplates.hasOwnProperty("hs_sanpham")) {
        for (var i = 0; i < hotspotTemplates["hs_sanpham"].length; i++) {
          hotspotTemplates["hs_sanpham"][i].ggEvent_configloaded();
        }
      }
      if (hotspotTemplates.hasOwnProperty("hs_info")) {
        for (var i = 0; i < hotspotTemplates["hs_info"].length; i++) {
          hotspotTemplates["hs_info"][i].ggEvent_configloaded();
        }
      }
      me._power_by_vr360.logicBlock_scaling();
      me._cont_control.logicBlock_scaling();
      me._cont_control.logicBlock_visible();
      me._pad_full_screen.logicBlock_alpha();
      me._pad_vr.logicBlock_alpha();
      me._mute.logicBlock_visible();
      me._sound.logicBlock_visible();
      me._floorplan_box.logicBlock_size();
      me._floorplan_box.logicBlock_visible();
      for (var i = 0; i < me._floorplan.ggMarkerInstances.length; i++) {
        me._floorplan.ggMarkerInstances[i].ggEvent_configloaded();
      }
      me._floorplan.ggClearMap();
      me._floorplan.ggInitMap(false);
      me._floorplan.ggInitMapMarkers(true);
      me._tang_tret.logicBlock_backgroundcolor();
      me._tang_1.logicBlock_backgroundcolor();
      me._arrow_zoom.logicBlock_angle();
      me._svg_2.logicBlock_angle();
      me._svg_3.logicBlock_angle();
      me._image_1.logicBlock_size();
      me._image_1.logicBlock_alpha();
      me._icon_map.logicBlock_visible();
      me._close_map.logicBlock_visible();
      me._pad_menu.logicBlock_position();
      me._scrollarea_1.ggUpdatePosition();
      me._button_search.logicBlock_alpha();
      me._close_menu.logicBlock_visible();
      me._open_menu.logicBlock_visible();
      me._tint_popup.logicBlock_visible();
      me._popup_info.logicBlock_size();
      me._popup_info.logicBlock_visible();
      me._text_info.logicBlock_text();
      me._info_2.logicBlock_bordercolor();
      me._info_1.logicBlock_bordercolor();
      me._popup_catalog.logicBlock_visible();
      me._voice_con.logicBlock_position();
      me._voice_con.logicBlock_size();
      me._video_mc_ios.logicBlock_visible();
      me._video_mc.logicBlock_visible();
      me._chatbox.logicBlock_scaling();
      me._chatbox.logicBlock_visible();
      me._bg_intro.logicBlock_scaling();
      me._bg_intro.logicBlock_alpha();
      me._bg_intro.logicBlock_externalurl();
      me._button_thamquan.logicBlock_position();
      me._button_thamquan.logicBlock_scaling();
    });
    player.addListener("fullscreenenter", function (event) {
      me._full_screen.logicBlock_visible();
      me._svg_1.logicBlock_visible();
    });
    player.addListener("fullscreenexit", function (event) {
      me._full_screen.logicBlock_visible();
      me._svg_1.logicBlock_visible();
    });
    player.addListener("gyrochanged", function (event) {
      me._off_gyro.logicBlock_visible();
      me._gyro.logicBlock_visible();
    });
    player.addListener("hastouch", function (event) {
      if (hotspotTemplates.hasOwnProperty("ht_node")) {
        for (var i = 0; i < hotspotTemplates["ht_node"].length; i++) {
          hotspotTemplates["ht_node"][i].ggEvent_hastouch();
        }
      }
      for (var i = 0; i < me._floorplan.ggMarkerInstances.length; i++) {
        me._floorplan.ggMarkerInstances[i].ggEvent_hastouch();
      }
    });
    player.addListener("imagesready", function (event) {
      player.stopSound("Element03");
      player.stopSound("Element04");
    });
    player.addListener("positionchanged", function (event) {
      me._floorplan.ggRadar.update();
    });
    player.addListener("sizechanged", function (event) {
      me._power_by_vr360.logicBlock_scaling();
      me._cont_control.logicBlock_scaling();
      me._cont_control.logicBlock_visible();
      me._image_1.logicBlock_size();
      me._popup_info.logicBlock_size();
      me._voice_con.logicBlock_position();
      me._voice_con.logicBlock_size();
      me._video_mc_ios.logicBlock_scaling();
      me._video_mc.logicBlock_scaling();
      me._bg_intro.logicBlock_externalurl();
      me._button_thamquan.logicBlock_position();
    });
    player.addListener("varchanged_audio_voice", function (event) {
      if (
        player.getVariableValue(
          "audio_voice",
          me.hotspot ? me.hotspot.id : player.hotspot ? player.hotspot.id : ""
        ) == true &&
        player.getVariableValue("tran_en") == true
      ) {
        player.playSound("Element02", "1");
      }
      if (
        player.getVariableValue(
          "audio_voice",
          me.hotspot ? me.hotspot.id : player.hotspot ? player.hotspot.id : ""
        ) == false
      ) {
        player.pauseSound("Element01");
      }
      if (
        player.getVariableValue(
          "audio_voice",
          me.hotspot ? me.hotspot.id : player.hotspot ? player.hotspot.id : ""
        ) == false
      ) {
        player.pauseSound("Element02");
      }
    });
    player.addListener("varchanged_open_catalog", function (event) {
      me._tint_popup.logicBlock_visible();
      me._popup_catalog.logicBlock_visible();
    });
    player.addListener("varchanged_open_floorplan", function (event) {
      me._floorplan_box.logicBlock_visible();
      me._icon_map.logicBlock_visible();
      me._close_map.logicBlock_visible();
    });
    player.addListener("varchanged_open_info", function (event) {
      me._tint_popup.logicBlock_visible();
      me._popup_info.logicBlock_visible();
    });
    player.addListener("varchanged_open_list_gianhang", function (event) {
      me._tint_popup.logicBlock_visible();
    });
    player.addListener("varchanged_open_tag_nhamau", function (event) {
      if (
        player.getVariableValue(
          "audio_voice",
          me.hotspot ? me.hotspot.id : player.hotspot ? player.hotspot.id : ""
        ) == true &&
        player.getVariableValue("tran_en") == false
      ) {
        player.playSound("Element01", "1");
      }
    });
    player.addListener("varchanged_scale_floorplan", function (event) {
      me._floorplan_box.logicBlock_size();
      me._arrow_zoom.logicBlock_angle();
      me._svg_2.logicBlock_angle();
      me._svg_3.logicBlock_angle();
    });
    player.addListener("varchanged_show_bot", function (event) {
      me._video_mc_ios.logicBlock_visible();
      me._video_mc.logicBlock_visible();
      me._chatbox.logicBlock_visible();
    });
    player.addListener("varchanged_sound", function (event) {
      me._mute.logicBlock_visible();
      me._sound.logicBlock_visible();
    });
    player.addListener("varchanged_text_info", function (event) {
      me._text_info.logicBlock_text();
      me._info_2.logicBlock_bordercolor();
      me._info_1.logicBlock_bordercolor();
    });
    player.addListener("varchanged_tran_en", function (event) {
      if (
        player.getVariableValue("tran_en") == false &&
        player.getVariableValue(
          "audio_voice",
          me.hotspot ? me.hotspot.id : player.hotspot ? player.hotspot.id : ""
        ) == true
      ) {
        player.playSound("Element01", "1");
      }
      if (
        player.getVariableValue("tran_en") == true &&
        player.getVariableValue(
          "audio_voice",
          me.hotspot ? me.hotspot.id : player.hotspot ? player.hotspot.id : ""
        ) == true
      ) {
        player.pauseSound("Element01");
      }
      if (
        player.getVariableValue("tran_en") == true &&
        player.getVariableValue(
          "audio_voice",
          me.hotspot ? me.hotspot.id : player.hotspot ? player.hotspot.id : ""
        ) == true
      ) {
        player.playSound("Element02", "1");
      }
      if (
        player.getVariableValue("tran_en") == false &&
        player.getVariableValue(
          "audio_voice",
          me.hotspot ? me.hotspot.id : player.hotspot ? player.hotspot.id : ""
        ) == true
      ) {
        player.pauseSound("Element02");
      }
    });
    player.addListener("varchanged_var_hs_ani", function (event) {
      if (hotspotTemplates.hasOwnProperty("hs_sanpham")) {
        for (var i = 0; i < hotspotTemplates["hs_sanpham"].length; i++) {
          hotspotTemplates["hs_sanpham"][i].ggEvent_varchanged_var_hs_ani();
        }
      }
    });
    player.addListener("varchanged_var_intro", function (event) {
      me._bg_intro.logicBlock_scaling();
      me._bg_intro.logicBlock_alpha();
    });
    player.addListener("varchanged_var_select", function (event) {
      me._tang_tret.logicBlock_backgroundcolor();
      me._tang_1.logicBlock_backgroundcolor();
    });
    player.addListener("varchanged_var_show_menu", function (event) {
      me._cont_control.logicBlock_visible();
      me._image_1.logicBlock_alpha();
      me._pad_menu.logicBlock_position();
      me._button_search.logicBlock_alpha();
      me._close_menu.logicBlock_visible();
      me._open_menu.logicBlock_visible();
    });
    player.addListener("viewerinit", function (event) {
      me._cloner_node.ggUpdate();
    });
  };
  function SkinCloner_cloner_node_Class(
    nodeId,
    parentScope,
    ggParent,
    parameter
  ) {
    var me = this;
    var hs = "";
    me.parentScope = parentScope;
    me.ggParent = ggParent;
    me.findElements = skin.findElements;
    me.ggIndex = parameter.index;
    me.ggNodeId = nodeId;
    me.ggTitle = parameter.title;
    me.ggUserdata = skin.player.getNodeUserdata(me.ggNodeId);
    me.ggUserdata.nodeid = me.ggNodeId;
    me.elementMouseDown = {};
    me.elementMouseOver = {};
    me.__div = document.createElement("div");
    me.__div.setAttribute("style", "visibility: inherit; overflow: visible;");
    me.__div.style.position = "absolute";
    me.__div.style.left = parameter.left;
    me.__div.style.top = parameter.top;
    me.__div.style.width = "";
    me.__div.style.height = "";
    me.__div.style.width = parameter.width;
    me.__div.style.height = parameter.height;
    me.__div.ggIsActive = function () {
      return player.getCurrentNode() == me.ggNodeId;
    };
    me.__div.ggElementNodeId = function () {
      return me.ggNodeId;
    };
    el = me._nodeimage_1 = document.createElement("div");
    el.isDragging = function () {
      let scrollerParent = me._nodeimage_1;
      while ((scrollerParent = scrollerParent.parentNode) != null) {
        if (
          scrollerParent.hasOwnProperty("ggIsDragging") &&
          scrollerParent.ggIsDragging == true
        )
          return true;
      }
      return false;
    };
    els = me._nodeimage_1__img = document.createElement("img");
    els.className = "ggskin ggskin_nodeimage";
    els.setAttribute("src", basePath + "images/nodeimage_1_" + nodeId + ".jpg");
    el.ggNodeId = nodeId;
    hs = "";
    hs +=
      "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;";
    els.setAttribute("style", hs);
    els.className = "ggskin ggskin_nodeimage";
    els["ondragstart"] = function () {
      return false;
    };
    el.appendChild(els);
    el.ggSubElement = els;
    el.ggId = "NodeImage 1";
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1, def: "" };
    el.ggVisible = true;
    el.className = "ggskin ggskin_nodeimage ";
    el.ggType = "nodeimage";
    hs = "";
    hs += "cursor : pointer;";
    hs += "height : 150px;";
    hs += "left : 5px;";
    hs += "position : absolute;";
    hs += "top : 5px;";
    hs += "visibility : inherit;";
    hs += "width : 286px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "50% 50%";
    me._nodeimage_1.ggIsActive = function () {
      return player.getCurrentNode() == this.ggElementNodeId();
    };
    el.ggElementNodeId = function () {
      return this.ggNodeId;
    };
    me._nodeimage_1.onclick = function (e) {
      if (me._nodeimage_1.isDragging()) return;
      player.openNext("{" + me.ggNodeId + "}", "");
      player.setVariableValue("show_cloner", false);
      skin._cloner_node.ggText = "_nop_";
      if (skin._cloner_node.ggText == "") {
        skin._cloner_node.ggUpdate([]);
      } else {
        skin._cloner_node.ggUpdate(skin._cloner_node.ggText.split(","));
      }
      skin.updateSize(skin.divSkin);
      skin._cloner_node.style["display"] = "none";
      var p = skin._cloner_node.parentElement;
      while (p != null && p !== this.divSkin) {
        if (p.ggType && p.ggType == "cloner") {
          if (p.ggAutoPosition) {
            p.ggAutoPosition(false);
          }
        }
        if (p.ggType && p.ggType == "scrollarea") {
          if (p.ggUpdatePosition) {
            p.ggUpdatePosition();
          }
        }
        p = p.parentElement;
      }
      player.setVariableValue("var_show_menu", false);
    };
    me._nodeimage_1.onmouseover = function (e) {
      me.elementMouseOver["nodeimage_1"] = true;
      me._title_node_listmenu.logicBlock_backgroundcolor();
    };
    me._nodeimage_1.onmouseout = function (e) {
      me.elementMouseOver["nodeimage_1"] = false;
      me._title_node_listmenu.logicBlock_backgroundcolor();
    };
    me._nodeimage_1.ggUpdatePosition = function (useTransition) {};
    el = me._title_node_listmenu = document.createElement("div");
    el.isDragging = function () {
      let scrollerParent = me._title_node_listmenu;
      while ((scrollerParent = scrollerParent.parentNode) != null) {
        if (
          scrollerParent.hasOwnProperty("ggIsDragging") &&
          scrollerParent.ggIsDragging == true
        )
          return true;
      }
      return false;
    };
    els = me._title_node_listmenu__text = document.createElement("div");
    el.className = "ggskin ggskin_textdiv";
    el.ggTextDiv = els;
    el.ggId = "title_node_listmenu";
    el.ggDx = 0;
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1, def: "" };
    el.ggVisible = true;
    el.className = "ggskin ggskin_text ";
    el.ggType = "text";
    hs = "";
    hs += "background : rgba(0,62,106,0.784314);";
    hs += "border : 0px solid #000000;";
    hs += "bottom : 0px;";
    hs += "color : rgba(255,255,255,1);";
    hs += "cursor : pointer;";
    hs += "height : 22px;";
    hs += "left : calc(50% - ((286px + 0px) / 2) + 0px);";
    hs += "position : absolute;";
    hs += "visibility : inherit;";
    hs += "width : 286px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "0% 0%";
    hs = "";
    hs += "box-sizing: border-box;";
    hs += "width: 100%;";
    hs += "height: 100%;";
    hs += "font-size: 12px;";
    hs += "font-weight: inherit;";
    hs += "text-align: center;";
    hs += "white-space: pre;";
    hs += "padding: 0px;";
    hs += "overflow: hidden;";
    hs +=
      "background: linear-gradient(90deg, #13499D 20.44%, rgba(19, 73, 157, 0) 67.03%); line-height: 22px;";
    els.setAttribute("style", hs);
    me._title_node_listmenu.ggUpdateText = function () {
      var params = [];
      params.push(String(player._(me.ggUserdata.title)));
      var hs = player._("%1", params);
      if (hs != this.ggText) {
        this.ggText = hs;
        this.ggTextDiv.innerHTML = hs;
        if (this.ggUpdatePosition) this.ggUpdatePosition();
      }
    };
    me._title_node_listmenu.ggUpdateText();
    player.addListener("changenode", function () {
      me._title_node_listmenu.ggUpdateText();
    });
    el.appendChild(els);
    me._title_node_listmenu.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._title_node_listmenu.logicBlock_backgroundcolor = function () {
      var newLogicStateBackgroundColor;
      if (
        me.elementMouseOver["nodeimage_1"] == true ||
        me._title_node_listmenu.ggIsActive() == true
      ) {
        newLogicStateBackgroundColor = 0;
      } else {
        newLogicStateBackgroundColor = -1;
      }
      if (
        me._title_node_listmenu.ggCurrentLogicStateBackgroundColor !=
        newLogicStateBackgroundColor
      ) {
        me._title_node_listmenu.ggCurrentLogicStateBackgroundColor =
          newLogicStateBackgroundColor;
        me._title_node_listmenu.style.transition =
          "background-color 200ms ease 0ms";
        if (me._title_node_listmenu.ggCurrentLogicStateBackgroundColor == 0) {
          me._title_node_listmenu.style.backgroundColor =
            "rgba(17,137,68,0.784314)";
        } else {
          me._title_node_listmenu.style.backgroundColor =
            "rgba(0,62,106,0.784314)";
        }
      }
    };
    me._title_node_listmenu.logicBlock_backgroundcolor();
    me._title_node_listmenu.ggUpdatePosition = function (useTransition) {};
    me._nodeimage_1.appendChild(me._title_node_listmenu);
    el = me._daxem_listmenu_ = document.createElement("div");
    el.isDragging = function () {
      let scrollerParent = me._daxem_listmenu_;
      while ((scrollerParent = scrollerParent.parentNode) != null) {
        if (
          scrollerParent.hasOwnProperty("ggIsDragging") &&
          scrollerParent.ggIsDragging == true
        )
          return true;
      }
      return false;
    };
    els = me._daxem_listmenu___text = document.createElement("div");
    el.className = "ggskin ggskin_textdiv";
    el.ggTextDiv = els;
    el.ggId = "daxem_listmenu_";
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1, def: "" };
    el.ggVisible = false;
    el.className = "ggskin ggskin_text ";
    el.ggType = "text";
    hs = "";
    hs += "background : #bc9865;";
    hs += "border : 0px solid #000000;";
    hs += "color : rgba(255,255,255,1);";
    hs += "cursor : default;";
    hs += "height : 25px;";
    hs += "position : absolute;";
    hs += "right : 0px;";
    hs += "top : 0px;";
    hs += "visibility : hidden;";
    hs += "width : 110px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "50% 50%";
    hs = "";
    hs += "box-sizing: border-box;";
    hs += "cursor: default;";
    hs += "width: 100%;";
    hs += "height: 100%;";
    hs += "text-align: center;";
    hs += "white-space: pre;";
    hs += "padding: 2px 0px 2px 0px;";
    hs += "overflow: hidden;";
    hs +=
      "background: linear-gradient(90deg, #118944 16.07%, rgba(17, 137, 68, 0.3) 59.35%, rgba(17, 137, 68, 0.3) 100%); box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);";
    els.setAttribute("style", hs);
    me._daxem_listmenu_.ggUpdateText = function () {
      var params = [];
      var hs = player._("\u0110\xe3 tham quan", params);
      if (hs != this.ggText) {
        this.ggText = hs;
        this.ggTextDiv.innerHTML = hs;
        if (this.ggUpdatePosition) this.ggUpdatePosition();
      }
    };
    me._daxem_listmenu_.ggUpdateText();
    el.appendChild(els);
    me._daxem_listmenu_.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._daxem_listmenu_.logicBlock_visible = function () {
      var newLogicStateVisible;
      if (player.nodeVisited(me._daxem_listmenu_.ggElementNodeId()) == true) {
        newLogicStateVisible = 0;
      } else {
        newLogicStateVisible = -1;
      }
      if (
        me._daxem_listmenu_.ggCurrentLogicStateVisible != newLogicStateVisible
      ) {
        me._daxem_listmenu_.ggCurrentLogicStateVisible = newLogicStateVisible;
        me._daxem_listmenu_.style.transition = "";
        if (me._daxem_listmenu_.ggCurrentLogicStateVisible == 0) {
          me._daxem_listmenu_.style.visibility =
            Number(me._daxem_listmenu_.style.opacity) > 0 ||
            !me._daxem_listmenu_.style.opacity
              ? "inherit"
              : "hidden";
          me._daxem_listmenu_.ggVisible = true;
        } else {
          me._daxem_listmenu_.style.visibility = "hidden";
          me._daxem_listmenu_.ggVisible = false;
        }
      }
    };
    me._daxem_listmenu_.logicBlock_visible();
    me._daxem_listmenu_.ggUpdatePosition = function (useTransition) {};
    me._nodeimage_1.appendChild(me._daxem_listmenu_);
    me.__div.appendChild(me._nodeimage_1);
    me._title_node_listmenu.logicBlock_backgroundcolor();
    me._daxem_listmenu_.logicBlock_visible();
    me.ggEvent_changenode = function (event) {
      me._title_node_listmenu.logicBlock_backgroundcolor();
      me._daxem_listmenu_.logicBlock_visible();
    };
    me.ggEvent_changevisitednodes = function (event) {
      me._daxem_listmenu_.logicBlock_visible();
    };
  }
  function SkinElement_map_pin_Class(parentScope, ggParent) {
    var me = this;
    var flag = false;
    me.parentScope = parentScope;
    me.ggParent = ggParent;
    var nodeId = ggParent.ggElementNodeId();
    me.ggNodeId = nodeId;
    me.ggUserdata = skin.player.getNodeUserdata(nodeId);
    me.ggUserdata.nodeid = nodeId;
    me.elementMouseDown = {};
    me.elementMouseOver = {};

    me.findElements = function (id, regex) {
      return skin.findElements(id, regex);
    };

    el = me._map_pin = document.createElement("div");
    el.ggId = "map_pin";
    el.ggDx = -308;
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1, def: "" };
    el.ggVisible = true;
    el.className = "ggskin ggskin_container ";
    el.ggType = "container";
    hs = "";
    hs += "bottom : 439px;";
    hs += "height : 41px;";
    hs += "left : calc(50% - ((24px + 0px) / 2) - 308px);";
    hs += "position : absolute;";
    hs += "visibility : inherit;";
    hs += "width : 24px;";
    hs += "pointer-events:none;";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "50% 50%";
    me._map_pin.ggIsActive = function () {
      return player.getCurrentNode() == this.ggElementNodeId();
    };
    el.ggElementNodeId = function () {
      return me.ggNodeId;
    };
    me._map_pin.onclick = function (e) {
      if (me._map_pin.ggIsActive() == false) {
        player.openNext("{" + me.ggNodeId + "}", "");
      }
    };
    me._map_pin.onmouseover = function (e) {
      me.elementMouseOver["map_pin"] = true;
      me._map_pin_tt.logicBlock_alpha();
    };
    me._map_pin.onmouseout = function (e) {
      me.elementMouseOver["map_pin"] = false;
      me._map_pin_tt.logicBlock_alpha();
    };
    me._map_pin.ggUpdatePosition = function (useTransition) {};
    el = me._map_pin_active = document.createElement("div");
    els = me._map_pin_active__img = document.createElement("img");
    els.className = "ggskin ggskin_map_pin_active";
    hs =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAABSCAYAAAAWy4frAAATIUlEQVR4nMWba3Bcx3Xnf6e77wxmQFLiA5Yl0SQlK5JsQpJtWCJVVhKwnCwp26mkolBVydbWVqKqPKryIZ9clVQSM0pixS57vYmTKEqZ5Yo363VZeViJYlMVe4lNLJESRclLgqHEOLT4BgmAIDDPe293n3y4M8AIJEGAguSDupiZO7cf/z6nz/n36R7hOuTrO7EAjz5NAFAwz2299wNC/EiEB1DuBt1kRNYqCICARtVJkDcQXjPwkmKe377/0PcE4pXqXYrIUh5WMCPDw2bbyIgH2HP/+zeLMf9VhZ8xIu/rdxYAr5DHSFB9U3krQmIMrtNqwwei6lFRvqEx/u8dB/7tCMDe4WE3PDISuwCXFchTQ0PJrxw8mAP80wODHzaG3xL4mZXOSY6ShqgxBO" +
      "+9F9UgghgRI7MtKKhGVTSKWHXOqbHWla2RBKHmvSp8I0Y+/fGXRl+e3+ZyAJG9w8N228iI/8ehO9clSemzVuQXK9bQjEoIIc/z1AjG9q9YwapVN7ByxQoq5RIll4B0mlAl8zmtNKNWrzMzM02jXkeJIUnK0VqbVI3QCpGg+uU8zz75UwePTewdHnbbRkZCMRTXCWQXmE+BCuieLff8NKK7Vzq7thFUYww+S1NX6e+Xd990E+9as5ZV/VVKzmGMKfp+lcZijGTeM9NocuHiJGPnz9NqNrRUKntjrOu3IjUfJlF5bMeLh59RkN8D2bWAqV0ViILp2uhzWwY/3efMb3oFr5qlabtUqVTZ9J4N3DKwjkq53OmgoqrowoOHIIgIxhTNt9KUs+MTvHHyJK12k3K5L3MiJSfQ9vGJ7S+O/tb8Pi0KSG+BPVvu+eoNifn5magh" +
      "hojPU7thw0beu3491b4+YoyEWNQtsiTfgXacgTUGYwzNdpv/OH2akydP4JJyMNawyoidzuP/2fHi4V9YCMxlLWth1QqwZ+vg39zg7CMzIWbe50niEnn/nXdx89q1RJTYBbA053c5IOYACcK5yUn+7djr5D5X55J8lTWlaR/+dsf+0Z+b38eumPmVPr2zuPfc1sEv3eDsI7WoaZ7npWp1hTxw333csm4tPgRiiMjsSOhburr1hBDxwXPLurU8cN99VKsrJM/zUi1qeoOzjzy3dfBLvX3sFdv74eWhoeQnv33O73lw82+scu43a0HzPM9KK/r7uX/zIP2VCrn3GOkC6PGtl32Wea+93zPvOTqACt36EKiUy7xrzRomLl2i1W47LyZf6eyHd966bvqnnxvf9/LQUPKX587NmthszR035/c8uPkBi3kxAsF77euryP2Dg1" +
      "TLZXwIS54H1yuqirOWZppyYHSUdrul1jkxQCBu2bHvyEvdPkPHtBSkewOV3YkRVNWLEbnvrruolsvkwXdCwlszo0Wbm0AePNVymXvvuhMREVX1iRFQ2Q2wbWTEdymQAfjLoSEHsGfr5k+ucnYwjWRZlrq7b7+D1StWFOaELKkvqoU77r10iXgMgveeNStWcvd77yDLUpdGslXODu7ZuvmTvX2XXWB2QXz2oXtWO6//nhiztpmm8V3rBsyH7ryT2JmMizeJwgtZMTgz5w5A8VEJGjtxZAl1UoB65dgxLkyMx2q5bPIYJ72TH/nEdw9P7QJjfnx42AA4r7+20tm1PmpurTF3rF+PEYGoix7BGBUnQtk6fIycrTc5MT3DiekZztab+BgpW4cTIS6hXqJiRLhj/XqsNcZHzVc6u9Z5/TWAHx8eLkLrNx++o2ymyq+VrdtU" +
      "b7fCe25Zb+/ZtAkfw6JjRFSl7BxT7TYjp87yT8dPsPvYDwoVAYjw2J238fHbNzL8nltY3ddH6n0xWIvSiuKM5fAbb3Dq7Omwoq9i0+DfiKvTuz/2re+nDsBcrOyoOtnUitEbY9yt69YVJtLrHRdqRJWytXzvwgS//p3v8vz45Ox3a2zh8i+GyO7Xj7P79eN8ZGAtf/rRh/jAwFrSRXrCbn9uXbeOM2NnbRajr1q7qXmxsgN4phNY9GetMeR5zpobV7OqUiHEUGDo1nCVK8ZI2VqePzPGB7/2DM+PT3J3f4UBZymJMB0i0yFSEmHAWe7ur/D8+GTx7JkxytYWDOEa7QgQYmBVpcKaG1eT5znWGEB/FsC88OCDFYThrKDkZuDGNThjCh50rTmhSp+1fH9qmof+7psAbCyXeK3RYtwHclUiBTHKVRn3gdcaLTaWSwjw0N" +
      "99k3+fmqbPWuIi2lNVnDEM3LiGEILJooIw/MKDD1ZMLdbfb0Q2pCFQShJZ3V9d1AihigFSH/iTVw8DcFtfiRNp9qb43nvRsdQTacamvhIAX3z1MKkPnYB27TZjjKzur1JKEklDwIhs6GDgnqo1xBh9pVKRSqmEql6TQ0WNlIzhtYtTfPHIMW4rl/hBO8P0dPqKtk4RvH7QzritXOKLR47x2sUpSsYQNS7YplBopVIqUalUJMboq9Ygwj0mwvuMCCFGqn0VEmvRK7nG3p50w6kqr1yYeFNHF7PInv/MKxcmZufBZe313lPQqCTWUu2rEGLEiBDhfU7RDcXDqtVSaRb1ZY5kXuVCkWA4OjkFgNeF9HBl6ZY5OjlFHmOPFVwBTLcbWiwbqqUS3QWNohucwE2hmEhSTkpznmpR8UNJvZ99v3QpyqTed+bAYooUmisnJVRV" +
      "QmEdNzlFk+4zZna5sshKL+/T9ZdZLJBO33oDqaKJE5lXXAtyJ3L1WrvfWAwDlT5g6cvc3jIDlb6CINJdcS4AQ7v/eupR1KHiu6VDjJ34odekilEV64R7160FILkOIN0y965bixUhCwWnWlAxWiQ4QoxziEWCQ2XMCIiIplk6mxCYj3o+riLSRj44sAaAsSwjEcHrtXIoRVknwliWAfDBgTWE7mSf5WYUqr/CAlNVSbMUEdFOIua8QfS4UNhcM02JehVdzHPHAmQhsL6/ypd/bAsNhburfbNtLwRCKZ5tKHz5x7awvr9KFsKby+m81573qkoryxApKK0ox40gR6MqxlhppG1y72dd8GL4jw+RR27fyGN3bOJwo8W9/RVKC5hZSYR7+yscbrR47I5NPHL7Rnzo0cYi2ETuPY20jRhrYmEBR11UPVz3ASPi2mmqrSyTUq" +
      "XSddgLiiD4GKlayxNbPwQou79/AgfcXk6I82zMCJxMcw41Wjx2x0ae2PohqtaSdQLbtdyWdrxVO89pp6laEdvwgWjiqNM17ddlqu8HJWtum8kzrbVasrpS6WTSrzWBixHKQmBNucT//MgDPPTum/jF5w9wPL1K7lmEL3/kfn7uvRupOEtW8KXL5+RVkAhQa7XIvdcV5bKkMZ6xDXfMfexb30/3bB08UBJzmzEmTjXqZv3q1XNDsAgxImQhUjaG/37Xe/mJ9TdzaOIiR6YuMZMWE3pVucTm1Tdy77o13NpfxcdIFuLiQfSAmWo2EJFYMsZkGl7efuhQw3W+/WdFH7XGcqlRJ81zStZxbf8zV7kBgirBe26uVli/cT3bN9w66wVFBCtC0A4bEJljvIuUgm17LtXrOGu1cNTm2wAOIDGyt+6Dd8a4ZprqdKspN61chY9L" +
      "Szx0n81DIFO9LEh2773JzS5SlCKlWm+3aaZtdc4lNR8QY0YAjIJ89IXR/wD291kDQhiv1eYC47UdyWUXHWJ3ucsu7l1Pnd2F3kS9RtAY+4xB0Ve3v3BoFIqtNAsgyjMWsMYyWa/RznNEpGNeP9xLUQxC6nPGazMk1sVEBFGehSJLasYHRrQwi/BMrWNerTTVqWazZ9XW+9p9r/Pam/95Md/pFeqb307xagSmWy0a7ZYaMUk9BBD7DYDxgQEVKHamdkHcs3Xzt/ud++h0mvl3rbrB3XfresLVIv07KN21+pGxc5yemgyrSmXbjOHlh/eN3t99xkCR4AIQ+F8COFuYVz1NsXTt84dzqRZEspXnTNRrJMZFJyCRr0GxYToLZLjYbKTqzD/Ucj+RGOPy4OOFWq0zQRcym7f7KubHRL1OK0ujNZLUfGgHG/4G4NzBg2EWiI" +
      "DuHR52P/rdw1Mi8nSfMSTWhbGZaTKfFwnsHxKS7n7JuZlprLGxYg0K3/r4C0dPfH0ndlcnBTC78zM+MFBMepXdjRCwYlwtbTHZbBZrhB+CVlQVK8J0q8WlVgNnrQRVUPkSwMD48Oz0nc+cjUDcs3Xw//Zbu20mz/2aar/74C23LjV+LYsoYI0wen6MszNTYWVSsu0Qj27fP7p5wT3Ekc6kNyJPKsWO0WSzwaVWC9vVyjukjkIbUE9TxjuTPClyCrsFtDvJrwikO+mT8tq/b4ZwrGzEKTGcmZmhw/vfOYcFgHCuViPzPjpjknoeLjn4a5ib5FcE0kW6bWTEC+YvEhFKxsUL9RlqaYoV5rQyXzvLqa0OCW3nOWO1aRJrQ6XYgf3qT7w4en7v8LDbNS/Pd9k27y8fPOgBVOJf1byfcMYkeQzxXG0G0R7+xLz2539ehkl+" +
      "vl6jlWdqjElqPpCb8CRAl40sCKSrlR37jlxU4UsVI5SsC2P1GZp5NqeVtzkAZt5ztjaDM9b3W4PA33/ihaOjX9+5017pPNdlQDpaKYKMlz+fyUPDiiRtn8cztZmetfXyaeDNV2FWFxoNamlbjYhNY0Sj+QLAwPj4FRnTFYEIxL3Dw277gdFTCF+pWkPJuHC2Nk0rzzu5p7cHSTehcbo2jTEmVK01edSRHS8d+tddMHvobVFAAIZHRiKAWvPHNR+CMZKkPtdzjXpxXOJt0Ep3bky0mkynLZwx4lVB9DMwxwmXBKSrlYefP/Q68JV+a3DG+dMz0zTzgrYst1YE8DFyauYSRoyvGGPTGF/ase/IHu091LAUIDDnHaLq52o+RGskaflcz9Zr2CL5tayT3Iow2WwyVWijA5DPA3QXgAsM/MIyd0Zl8Csrrf1vNR9yKya5/6" +
      "abi41MfXN2cynSLdNb9tXxMS5laVjhrG2F+P937B/9wGLqWlAj0OOzTfxMzQc1hQfTs406QkFbuia21L/ZMh2Xe6HV5GLaIjFGO2cmnugO5rX6uahBnNXKlsHdKxP7SzUfciOS3D9wM2U3p5W3Kq9MnKeWpb7fWdcK8cCO/aMP9PRTFyp7TY3AnFbUmc/WfAhGJEmD1zONWk9uSudee9/3zgXm3WOOHF5oNbiUtjqn6AAtPFVHGwuC6CJdlHTP4O7ZOvjkSmd/teZDLpB8eODdVK0r1vbXeZZLVXll8gK1POvOjZd27B/dolc48nc1WZRGAFbffrCIK7jP1HxoW5EkiyGertfmRuN6PBVwvtXkUtbueCoQ4ffh2p7quoA8+jThqaGh5OH933tD0Cer1pAYG862GtTybC5JsYS4YYAsBk42ZnCduNHy8V+27xt9dtcC" +
      "UfwtAYG5NYAPfHbGh5oTSXwMerLRq5XFXV1tjDWbxUAYI0EVY8zjsHAUf8tAdkF8amgo+fiBI2Oi+oWKNZSM9YVpLD51pJ3MSDt4TjVrOLG+aoxNY/jWf9l36Dtf34ldijaWDATmtGJ963/UfDjvjEmCajzZqMFi3XBHG2eaTZo+VyfYNEai2sfhzUmFxcqSgeyC+PLQUPKTB49PK/qZPiOUjA0X0haTaRtDseOrC1xGhIbPOd2qkxjrq85Krvq1j714aH/vydG3FQjAUGcVWavxZzN5OF4ykggSTjRrhKjI/MX3PLMShVPNBmkomELdhxjgcbjy6u9tA9JdRT565EhmRB93IjgxejFLmUi7GZfu03P9UgWLUPMZZ9tNEmN8vzUg8uQn9o8e3Ts87K7n1zzXDQSg8wMV2b7/yF81Qnilz4ozRsKJVmPugMz8id5xWS" +
      "ebDXyM6kSSmg91nP9DgP/XWQO9o0AA9nb3VoRPATgxTOcZ59utnoxLIarFIYFLWcb5tEXJmOKsFXxux78ePffy0FCyawk/RVpWINtGRvwuMNv3jT7bCvHbVWOsM8afbDVIQ+gcei60IRSn30606iiExEgy4/3ZUp9+HuDZeXmqdxQIzAUuNfK7aYxYMI3gOdsuNoq6nsoijGcpE3lKSUwsGQPI728bOVJ/6i1qA5aHfffQ/Hu+uiIxP1/3ITeQDK1aQ58xs87r1doUtRhCvzG2FePhh/eP3rsc7cMyaATmXKYYHq93aX6MerrdRBSswFja4lLIcVIcJxeV34HFLZoWI8sCpEsot+87/Brok/3WkBjjz2YtGsGTx8gbaZNEjK8aY1shfGfHi4ef2bVEYriQLAsQmKMu5cAfzhFKjafTFqfSFu0Y1DBLRX4b4P07dy7b" +
      "9uSyAdnVIZTbDhwZAz5fEEoTxvKUU2mLkhjf76wE1b/uUpFHn376LXmqXlk2IDCXADdN87m6D2ecSCLFYWwFkroPWR7kU3D9VORqsqxABPTloaFk+6FDDVV9onOSIgr4lc4C+oVPHDh8/KmhoeR6qcjVZFmBwByhnNlw5C9mvD+WiDgRkhkfLpT7kj+CyzdplkOWHcgsoXyaICp/YI3QZwwon9428r1LyxH83mkRgD1bBl/bs3Xw1Pz7yy3LrpGuzBFKfQKV3+3cW1SO6nrkPwHZ1w2h+2jlNgAAAABJRU5ErkJggg==";
    els.setAttribute("src", hs);
    els.ggNormalSrc = hs;
    hs = "";
    hs +=
      "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;";
    els.setAttribute("style", hs);
    els.className = "ggskin ggskin_image";
    els["ondragstart"] = function () {
      return false;
    };
    player.checkLoaded.push(els);
    el.appendChild(els);
    el.ggSubElement = els;
    el.ggId = "map_pin_active";
    el.ggDx = 0;
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1, def: "" };
    el.ggVisible = true;
    el.className = "ggskin ggskin_image ";
    el.ggType = "image";
    hs = "";
    hs += "bottom : 0px;";
    hs += "cursor : pointer;";
    hs += "height : 41px;";
    hs += "left : calc(50% - ((24px + 0px) / 2) + 0px);";
    hs += "opacity : 0;";
    hs += "position : absolute;";
    hs += "visibility : hidden;";
    hs += "width : 24px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "50% 100%";
    me._map_pin_active.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return me.ggNodeId;
    };
    me._map_pin_active.logicBlock_scaling = function () {
      var newLogicStateScaling;
      if (me.elementMouseOver["map_pin_active"] == true) {
        newLogicStateScaling = 0;
      } else {
        newLogicStateScaling = -1;
      }
      if (
        me._map_pin_active.ggCurrentLogicStateScaling != newLogicStateScaling
      ) {
        me._map_pin_active.ggCurrentLogicStateScaling = newLogicStateScaling;
        me._map_pin_active.style.transition =
          "transform 200ms ease 0ms, opacity 500ms ease 0ms";
        if (me._map_pin_active.ggCurrentLogicStateScaling == 0) {
          me._map_pin_active.ggParameter.sx = 1.1;
          me._map_pin_active.ggParameter.sy = 1.1;
          me._map_pin_active.style.transform = parameterToTransform(
            me._map_pin_active.ggParameter
          );
          setTimeout(function () {
            skin.updateSize(me._map_pin_active);
          }, 250);
        } else {
          me._map_pin_active.ggParameter.sx = 1;
          me._map_pin_active.ggParameter.sy = 1;
          me._map_pin_active.style.transform = parameterToTransform(
            me._map_pin_active.ggParameter
          );
          setTimeout(function () {
            skin.updateSize(me._map_pin_active);
          }, 250);
        }
      }
    };
    me._map_pin_active.logicBlock_scaling();
    me._map_pin_active.logicBlock_alpha = function () {
      var newLogicStateAlpha;
      if (me._map_pin_active.ggIsActive() == true) {
        newLogicStateAlpha = 0;
      } else {
        newLogicStateAlpha = -1;
      }
      if (me._map_pin_active.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
        me._map_pin_active.ggCurrentLogicStateAlpha = newLogicStateAlpha;
        me._map_pin_active.style.transition =
          "transform 200ms ease 0ms, opacity 500ms ease 0ms";
        if (me._map_pin_active.ggCurrentLogicStateAlpha == 0) {
          me._map_pin_active.style.visibility = me._map_pin_active.ggVisible
            ? "inherit"
            : "hidden";
          me._map_pin_active.style.opacity = 1;
        } else {
          setTimeout(function () {
            if (me._map_pin_active.style.opacity == 0.0) {
              me._map_pin_active.style.visibility = "hidden";
            }
          }, 505);
          me._map_pin_active.style.opacity = 0;
        }
      }
    };
    me._map_pin_active.logicBlock_alpha();
    me._map_pin_active.onmouseover = function (e) {
      me.elementMouseOver["map_pin_active"] = true;
      me._map_pin_active.logicBlock_scaling();
    };
    me._map_pin_active.onmouseout = function (e) {
      me.elementMouseOver["map_pin_active"] = false;
      me._map_pin_active.logicBlock_scaling();
    };
    me._map_pin_active.ggUpdatePosition = function (useTransition) {};
    me._map_pin.appendChild(me._map_pin_active);
    el = me._map_pin_normal = document.createElement("div");
    els = me._map_pin_normal__img = document.createElement("img");
    els.className = "ggskin ggskin_map_pin_normal";
    hs =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEXklEQVRYhb2Xb0yVVRzHP+fcC3j/AU6UJFIwLvcSQzMtXaVT2wwIZn+5reVaq9xambCZlW61VDRtY22+Kdfaams1E8lymOKf+aaWLCekXS4XAiohwVLhucDlXp7Ti8sVReV5cuD33Tnn+/y+33Oec36/cwRmMac1hYRICYjlwFwgC0gdGb0EtAMNCHGcqDhAi7vXTFhhyHA35yHUBgQ+wGbS7gCor4EdBLyBWzOwoNOOpm0D9RpgNSk8FlEEu9Dsm/jrrgHzBjxNGSC+Be6/ReGxOI3Vuoqzd/9hbCAveB+6fgCYOUHicXQiZSl+96mbG8gJZmLRT06CeBw9CP1hmvKa4x3yylDmnzYsevUkigNMR5f7WNBpv96AY2A78MAkiscgyEfr3TjahNhRk6" +
      "qRW9/t/xOqH3AT8HbGVkCot26fOICwo8R7AIKcYDIW/W9MJpk7062UvzCVkmUO3LMTEQKCHUN8fzzER59f5Nz5qEkTqh+4Q2IZLjUr/uxjLvy1WeRmJfDmzh48RW14CtvY8OEFvHMS8ddm4St2mTQg7ChRbB3J7YZ4+lEXn25Np6y8i9oTIYSAnFmJDOuK2hMhvjumUbrcwVdVM4lGFdWHNTNhVwg8gXpg4XisaakWgoezeGnTeWrqNHzFLqrenk5qsgWAfy4Os35nD3sO9vHUSie7t6TjXtnOv5eHDRaBnyWxqjYuXn4mhdP+MDV1GqsecfLJ++m8vqUb5/wgzvlByrd1s3tzOiXLHFQf1mgMhHmlLMV4/opsCSQb8YqWOthzsA+Ayoo01lV2U1OnUZCbxFxPEvvqNCq2d1NZkQbANz9oFC6xjxcyjhRpzIHszAQa" +
      "msKkuCT5OYnUHNGYMc1C/d5Z1O+dRcYMKzVHYoaSnZLGQJjszAQzobECvUDaeKRIROFySMJDCqXAliToDem0dESwWKBX00l2xuYSHlI47ZKIudN4WQJtRqzfWocoyE1iMKw4+lM/a1dPZWBQkV/SjreoHa1fZ+3zqdT92E94SFGQm4i/dchYXvG7BBqMeNWH+ljjS0FKWLetm6KlDlyOq8qITbJisZ03tnYjJazxpbL3UJ+xAWgUeJufQ6kvx2MlWAUN+2ez/6jGO1UXEAKUupYT79uxPo2SZU7ufbyDSFTdOOAVKJ8kKg6MpMWbIhJVlJV3sWShDdsUcZ04xMSnJAkWz7Phq+gyI96Pdbg2Vg09TZ+BeNHgiwmG+piA99X4j9wBmK0iE4EQUt8M8QtJwBtAsOv26Ysq/Pd0jRoAGEzcCJy8DeJncDo/iLdGDbRnD6" +
      "J4EuicRPUerPIJfsm4sumvTcXNnnNIWQpcmBRxKQs5m9Nydef1tcDvPoXQHwJxZgLFf8VqeXDsm+DGBgCa8ppxOheBqjTKEQYIgdpKyL5o7MzjMH6cepoygHeB1SBM1dgR018g9c3x3X4zGBsYNeJCiWJgBZJ5KOYA8VvHJQRtKHUaOIZ1uJaz+abuZP8BjNN6MKZ/9yIAAAAASUVORK5CYII=";
    els.setAttribute("src", hs);
    els.ggNormalSrc = hs;
    hs = "";
    hs +=
      "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;";
    els.setAttribute("style", hs);
    els.className = "ggskin ggskin_image";
    els["ondragstart"] = function () {
      return false;
    };
    player.checkLoaded.push(els);
    el.appendChild(els);
    el.ggSubElement = els;
    el.ggId = "map_pin_normal";
    el.ggDx = 0;
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1, def: "" };
    el.ggVisible = true;
    el.className = "ggskin ggskin_image ";
    el.ggType = "image";
    hs = "";
    hs += "bottom : -5px;";
    hs += "cursor : pointer;";
    hs += "height : 25px;";
    hs += "left : calc(50% - ((25px + 0px) / 2) + 0px);";
    hs += "position : absolute;";
    hs += "visibility : inherit;";
    hs += "width : 25px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "50% 50%";
    me._map_pin_normal.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return me.ggNodeId;
    };
    me._map_pin_normal.logicBlock_scaling = function () {
      var newLogicStateScaling;
      if (me.elementMouseOver["map_pin_normal"] == true) {
        newLogicStateScaling = 0;
      } else {
        newLogicStateScaling = -1;
      }
      if (
        me._map_pin_normal.ggCurrentLogicStateScaling != newLogicStateScaling
      ) {
        me._map_pin_normal.ggCurrentLogicStateScaling = newLogicStateScaling;
        me._map_pin_normal.style.transition =
          "transform 200ms ease 0ms, opacity 500ms ease 0ms";
        if (me._map_pin_normal.ggCurrentLogicStateScaling == 0) {
          me._map_pin_normal.ggParameter.sx = 1.1;
          me._map_pin_normal.ggParameter.sy = 1.1;
          me._map_pin_normal.style.transform = parameterToTransform(
            me._map_pin_normal.ggParameter
          );
          setTimeout(function () {
            skin.updateSize(me._map_pin_normal);
          }, 250);
        } else {
          me._map_pin_normal.ggParameter.sx = 1;
          me._map_pin_normal.ggParameter.sy = 1;
          me._map_pin_normal.style.transform = parameterToTransform(
            me._map_pin_normal.ggParameter
          );
          setTimeout(function () {
            skin.updateSize(me._map_pin_normal);
          }, 250);
        }
      }
    };
    me._map_pin_normal.logicBlock_scaling();
    me._map_pin_normal.logicBlock_alpha = function () {
      var newLogicStateAlpha;
      if (me._map_pin_normal.ggIsActive() == true) {
        newLogicStateAlpha = 0;
      } else {
        newLogicStateAlpha = -1;
      }
      if (me._map_pin_normal.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
        me._map_pin_normal.ggCurrentLogicStateAlpha = newLogicStateAlpha;
        me._map_pin_normal.style.transition =
          "transform 200ms ease 0ms, opacity 500ms ease 0ms";
        if (me._map_pin_normal.ggCurrentLogicStateAlpha == 0) {
          setTimeout(function () {
            if (me._map_pin_normal.style.opacity == 0.0) {
              me._map_pin_normal.style.visibility = "hidden";
            }
          }, 505);
          me._map_pin_normal.style.opacity = 0;
        } else {
          me._map_pin_normal.style.visibility = me._map_pin_normal.ggVisible
            ? "inherit"
            : "hidden";
          me._map_pin_normal.style.opacity = 1;
        }
      }
    };
    me._map_pin_normal.logicBlock_alpha();
    me._map_pin_normal.onmouseover = function (e) {
      me.elementMouseOver["map_pin_normal"] = true;
      me._map_pin_normal.logicBlock_scaling();
    };
    me._map_pin_normal.onmouseout = function (e) {
      me.elementMouseOver["map_pin_normal"] = false;
      me._map_pin_normal.logicBlock_scaling();
    };
    me._map_pin_normal.ggUpdatePosition = function (useTransition) {};
    me._map_pin.appendChild(me._map_pin_normal);
    el = me._map_pin_tt = document.createElement("div");
    els = me._map_pin_tt__text = document.createElement("div");
    el.className = "ggskin ggskin_textdiv";
    el.ggTextDiv = els;
    el.ggId = "map_pin_tt";
    el.ggDx = 0;
    el.ggDy = 38;
    el.ggParameter = {
      rx: 0,
      ry: 0,
      a: 0,
      sx: 1,
      sy: 1,
      def: "translate(-50%, -50%) ",
    };
    el.ggVisible = false;
    el.className = "ggskin ggskin_text ";
    el.ggType = "text";
    hs = "";
    hs += "color : #000000;";
    hs += "height : auto;";
    hs += "left : calc(50% - ((0px + 0px) / 2) + 0px);";
    hs += "opacity : 0;";
    hs += "position : absolute;";
    hs += "top : calc(50% - ((0px + 0px) / 2) + 38px);";
    hs += "transform : translate(-50%, -50%);;";
    hs += "visibility : hidden;";
    hs += "width : auto;";
    hs += "pointer-events:none;";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "50% 50%";
    hs = "";
    hs += "box-sizing: border-box;";
    hs += "cursor: default;";
    hs += "width: auto;";
    hs += "height: auto;";
    hs += "pointer-events: none;";
    hs += "background : #ffffff;";
    hs += "border : 0px solid #000000;";
    hs += "border-radius : 10px;";
    hs += "cursor : default;";
    hs += "text-align: center;";
    hs += "white-space: pre;";
    hs += "padding: 2px 4px 2px 4px;";
    hs += "overflow: hidden;";
    els.setAttribute("style", hs);
    me._map_pin_tt.ggUpdateText = function () {
      var params = [];
      params.push(String(player._(me.ggUserdata.title)));
      var hs = player._("%1", params);
      if (hs != this.ggText) {
        this.ggText = hs;
        this.ggTextDiv.innerHTML = hs;
        if (this.ggUpdatePosition) this.ggUpdatePosition();
      }
    };
    me._map_pin_tt.ggUpdateText();
    player.addListener("changenode", function () {
      me._map_pin_tt.ggUpdateText();
    });
    el.appendChild(els);
    me._map_pin_tt.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return me.ggNodeId;
    };
    me._map_pin_tt.logicBlock_position = function () {
      var newLogicStatePosition;
      if (player.getHasTouch() == true) {
        newLogicStatePosition = 0;
      } else {
        newLogicStatePosition = -1;
      }
      if (me._map_pin_tt.ggCurrentLogicStatePosition != newLogicStatePosition) {
        me._map_pin_tt.ggCurrentLogicStatePosition = newLogicStatePosition;
        me._map_pin_tt.style.transition =
          "left 0s, top 0s, opacity 500ms ease 0ms";
        if (me._map_pin_tt.ggCurrentLogicStatePosition == 0) {
          me._map_pin_tt.style.left = "calc(50% - (0px / 2))";
          me._map_pin_tt.style.top =
            "calc(50% - (0px / 2) + (0px / 2) + -38px)";
        } else {
          me._map_pin_tt.style.left = "calc(50% - ((0px + 0px) / 2) + 0px)";
          me._map_pin_tt.style.top = "calc(50% - ((0px + 0px) / 2) + 38px)";
        }
      }
    };
    me._map_pin_tt.logicBlock_position();
    me._map_pin_tt.logicBlock_alpha = function () {
      var newLogicStateAlpha;
      if (
        me.elementMouseOver["map_pin"] == true &&
        player._(me.ggUserdata.title) != ""
      ) {
        newLogicStateAlpha = 0;
      } else {
        newLogicStateAlpha = -1;
      }
      if (me._map_pin_tt.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
        me._map_pin_tt.ggCurrentLogicStateAlpha = newLogicStateAlpha;
        me._map_pin_tt.style.transition =
          "left 0s, top 0s, opacity 500ms ease 0ms";
        if (me._map_pin_tt.ggCurrentLogicStateAlpha == 0) {
          me._map_pin_tt.style.visibility = me._map_pin_tt.ggVisible
            ? "inherit"
            : "hidden";
          me._map_pin_tt.style.opacity = 1;
        } else {
          setTimeout(function () {
            if (me._map_pin_tt.style.opacity == 0.0) {
              me._map_pin_tt.style.visibility = "hidden";
            }
          }, 505);
          me._map_pin_tt.style.opacity = 0;
        }
      }
    };
    me._map_pin_tt.logicBlock_alpha();
    me._map_pin_tt.ggUpdatePosition = function (useTransition) {};
    me._map_pin.appendChild(me._map_pin_tt);
    me._map_pin_active.logicBlock_scaling();
    me._map_pin_active.logicBlock_alpha();
    me._map_pin_normal.logicBlock_scaling();
    me._map_pin_normal.logicBlock_alpha();
    me._map_pin_tt.logicBlock_position();
    me._map_pin_tt.logicBlock_alpha();
    me.ggEvent_activehotspotchanged = function () {
      me._map_pin_tt.logicBlock_alpha();
    };
    me.ggEvent_changenode = function () {
      me._map_pin_active.logicBlock_alpha();
      me._map_pin_normal.logicBlock_alpha();
      me._map_pin_tt.logicBlock_alpha();
    };
    me.ggEvent_configloaded = function () {
      me._map_pin_tt.logicBlock_position();
      me._map_pin_tt.logicBlock_alpha();
    };
    me.ggEvent_hastouch = function () {
      me._map_pin_tt.logicBlock_position();
    };
  }
  function SkinHotspotClass_infoclick(parentScope, hotspot) {
    var me = this;
    var flag = false;
    var hs = "";
    me.parentScope = parentScope;
    me.hotspot = hotspot;
    var nodeId = String(hotspot.url);
    nodeId = nodeId.charAt(0) == "{" ? nodeId.substr(1, nodeId.length - 2) : ""; // }
    me.ggUserdata = skin.player.getNodeUserdata(nodeId);
    me.ggUserdata.nodeid = nodeId;
    me.elementMouseDown = {};
    me.elementMouseOver = {};
    me.findElements = function (id, regex) {
      return skin.findElements(id, regex);
    };
    el = me._infoclick = document.createElement("div");
    el.ggId = "infoclick";
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1, def: "" };
    el.ggVisible = true;
    el.className = "ggskin ggskin_hotspot ";
    el.ggType = "hotspot";
    hs = "";
    hs += "cursor : pointer;";
    hs += "height : 0px;";
    hs += "left : 30px;";
    hs += "position : absolute;";
    hs += "top : 34px;";
    hs += "visibility : inherit;";
    hs += "width : 0px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "50% 50%";
    me._infoclick.ggIsActive = function () {
      return player.getCurrentNode() == this.ggElementNodeId();
    };
    el.ggElementNodeId = function () {
      if (me.hotspot.url != "" && me.hotspot.url.charAt(0) == "{") {
        // }
        return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
      } else {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        } else {
          return player.getCurrentNode();
        }
      }
    };
    me._infoclick.onclick = function (e) {
      player.triggerEvent("hsproxyclick", {
        id: me.hotspot.id,
        url: me.hotspot.url,
      });
    };
    me._infoclick.ondblclick = function (e) {
      player.triggerEvent("hsproxydblclick", {
        id: me.hotspot.id,
        url: me.hotspot.url,
      });
    };
    me._infoclick.onmouseover = function (e) {
      player.setActiveHotspot(me.hotspot);
      me.elementMouseOver["infoclick"] = true;
      player.triggerEvent("hsproxyover", {
        id: me.hotspot.id,
        url: me.hotspot.url,
      });
    };
    me._infoclick.onmouseout = function (e) {
      player.setActiveHotspot(null);
      me.elementMouseOver["infoclick"] = false;
      player.triggerEvent("hsproxyout", {
        id: me.hotspot.id,
        url: me.hotspot.url,
      });
    };
    me._infoclick.ggUpdatePosition = function (useTransition) {};
    el = me._external_1 = document.createElement("div");
    els = me._external_1__img = document.createElement("img");
    els.className = "ggskin ggskin_external";
    hs = "";
    hs += "position: absolute;-webkit-user-drag:none;pointer-events:none;;";
    els.setAttribute("style", hs);
    els.onload = function () {
      me._external_1.ggUpdatePosition();
    };
    el.appendChild(els);
    el.ggSubElement = els;
    hs = "";
    el.ggAltText = "";
    el.ggScrollbars = false;
    el.ggUpdateText = function () {
      me._external_1.ggSubElement.setAttribute(
        "alt",
        player._(me._external_1.ggAltText)
      );
      if (me._external_1.ggUpdateImageInternal)
        me._external_1.ggUpdateImageInternal();
    };
    el.ggUpdateImage = function () {
      me._external_1.ggSubElement.style.width = "0px";
      me._external_1.ggSubElement.style.height = "0px";
      me._external_1.ggSubElement.src = "";
      me._external_1.ggSubElement.src = me._external_1.ggText;
    };
    el.ggText = basePath + "assets/icon/click1.gif";
    el.ggUpdateImage();
    els["ondragstart"] = function () {
      return false;
    };
    player.checkLoaded.push(els);
    el.ggUpdateText();
    el.ggId = "External 1";
    el.ggDx = 0;
    el.ggDy = 0;
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1, def: "" };
    el.ggVisible = true;
    el.className = "ggskin ggskin_external ";
    el.ggType = "external";
    hs = "";
    hs += "border : 0px solid #000000;";
    hs += "cursor : pointer;";
    hs += "height : 30px;";
    hs += "left : calc(50% - ((30px + 0px) / 2) + 0px);";
    hs += "position : absolute;";
    hs += "top : calc(50% - ((30px + 0px) / 2) + 0px);";
    hs += "visibility : inherit;";
    hs += "width : 30px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "50% 50%";
    me._external_1.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return me.ggNodeId;
    };
    me._external_1.ggUpdatePosition = function (useTransition) {
      var parentWidth = me._external_1.clientWidth;
      var parentHeight = me._external_1.clientHeight;
      var img = me._external_1__img;
      var aspectRatioDiv =
        me._external_1.clientWidth / me._external_1.clientHeight;
      var aspectRatioImg = img.naturalWidth / img.naturalHeight;
      if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
      if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
      var currentWidth, currentHeight;
      currentWidth = img.naturalWidth;
      currentHeight = img.naturalHeight;
      img.style.width = currentWidth + "px";
      img.style.height = currentHeight + "px";
      if (
        !me._external_1.ggScrollbars ||
        currentWidth < me._external_1.clientWidth
      ) {
        img.style.right = "";
        img.style.left = "0px";
      } else {
        img.style.right = "";
        img.style.left = "0px";
        img.style.marginLeft = "0px";
      }
      if (
        !me._external_1.ggScrollbars ||
        currentHeight < me._external_1.clientHeight
      ) {
        img.style.bottom = "";
        img.style.top = "0px";
      } else {
        img.style.bottom = "";
        img.style.top = "0px";
        img.style.marginTop = "0px";
      }
    };
    me._infoclick.appendChild(me._external_1);
    me.__div = me._infoclick;
  }
  function SkinHotspotClass_ht_arrow(parentScope, hotspot) {
    var me = this;
    var flag = false;
    var hs = "";
    me.parentScope = parentScope;
    me.hotspot = hotspot;
    var nodeId = String(hotspot.url);
    nodeId = nodeId.charAt(0) == "{" ? nodeId.substr(1, nodeId.length - 2) : ""; // }
    me.ggUserdata = skin.player.getNodeUserdata(nodeId);
    me.ggUserdata.nodeid = nodeId;
    me.elementMouseDown = {};
    me.elementMouseOver = {};
    me.findElements = function (id, regex) {
      return skin.findElements(id, regex);
    };
    el = me._ht_arrow = document.createElement("div");
    el.ggId = "ht_arrow";
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1, def: "" };
    el.ggVisible = true;
    el.className = "ggskin ggskin_hotspot ";
    el.ggType = "hotspot";
    hs = "";
    hs += "height : 0px;";
    hs += "left : 43px;";
    hs += "position : absolute;";
    hs += "top : 43px;";
    hs += "visibility : inherit;";
    hs += "width : 0px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "50% 50%";
    me._ht_arrow.ggIsActive = function () {
      return player.getCurrentNode() == this.ggElementNodeId();
    };
    el.ggElementNodeId = function () {
      if (me.hotspot.url != "" && me.hotspot.url.charAt(0) == "{") {
        // }
        return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
      } else {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        } else {
          return player.getCurrentNode();
        }
      }
    };
    me._ht_arrow.onclick = function (e) {
      player.openUrl(player._(me.hotspot.url), player._(me.hotspot.target));
      player.triggerEvent("hsproxyclick", {
        id: me.hotspot.id,
        url: me.hotspot.url,
      });
    };
    me._ht_arrow.ondblclick = function (e) {
      player.triggerEvent("hsproxydblclick", {
        id: me.hotspot.id,
        url: me.hotspot.url,
      });
    };
    me._ht_arrow.onmouseover = function (e) {
      player.setActiveHotspot(me.hotspot);
      me.elementMouseOver["ht_arrow"] = true;
      player.triggerEvent("hsproxyover", {
        id: me.hotspot.id,
        url: me.hotspot.url,
      });
    };
    me._ht_arrow.onmouseout = function (e) {
      player.setActiveHotspot(null);
      me.elementMouseOver["ht_arrow"] = false;
      player.triggerEvent("hsproxyout", {
        id: me.hotspot.id,
        url: me.hotspot.url,
      });
    };
    me._ht_arrow.ggUpdatePosition = function (useTransition) {};
    el = me._external1 = document.createElement("div");
    els = me._external1__img = document.createElement("img");
    els.className = "ggskin ggskin_external";
    hs = "";
    hs += "position: absolute;-webkit-user-drag:none;pointer-events:none;;";
    els.setAttribute("style", hs);
    els.onload = function () {
      me._external1.ggUpdatePosition();
    };
    el.appendChild(els);
    el.ggSubElement = els;
    hs = "";
    el.ggAltText = "";
    el.ggScrollbars = false;
    el.ggUpdateText = function () {
      me._external1.ggSubElement.setAttribute(
        "alt",
        player._(me._external1.ggAltText)
      );
      if (me._external1.ggUpdateImageInternal)
        me._external1.ggUpdateImageInternal();
    };
    el.ggUpdateImage = function () {
      me._external1.ggSubElement.style.width = "0px";
      me._external1.ggSubElement.style.height = "0px";
      me._external1.ggSubElement.src = "";
      me._external1.ggSubElement.src = me._external1.ggText;
    };
    el.ggText = basePath + "assets/icon/arrow.png";
    el.ggUpdateImage();
    els["ondragstart"] = function () {
      return false;
    };
    player.checkLoaded.push(els);
    el.ggUpdateText();
    el.ggId = "External1";
    el.ggDx = 0;
    el.ggDy = 0;
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1, def: "" };
    el.ggVisible = true;
    el.className = "ggskin ggskin_external ";
    el.ggType = "external";
    hs = "";
    hs += "border : 0px solid #000000;";
    hs += "cursor : pointer;";
    hs += "height : 85px;";
    hs += "left : calc(50% - ((85px + 0px) / 2) + 0px);";
    hs += "position : absolute;";
    hs += "top : calc(50% - ((85px + 0px) / 2) + 0px);";
    hs += "visibility : inherit;";
    hs += "width : 85px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "50% 50%";
    me._external1.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return me.ggNodeId;
    };
    me._external1.ggUpdatePosition = function (useTransition) {
      var parentWidth = me._external1.clientWidth;
      var parentHeight = me._external1.clientHeight;
      var img = me._external1__img;
      var aspectRatioDiv =
        me._external1.clientWidth / me._external1.clientHeight;
      var aspectRatioImg = img.naturalWidth / img.naturalHeight;
      if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
      if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
      var currentWidth, currentHeight;
      currentWidth = parentWidth;
      currentHeight = parentHeight;
      img.style.width = parentWidth + "px";
      img.style.height = parentHeight + "px";
      if (
        !me._external1.ggScrollbars ||
        currentWidth < me._external1.clientWidth
      ) {
        img.style.right = "";
        img.style.left = "50%";
        img.style.marginLeft = "-" + currentWidth / 2 + "px";
      } else {
        img.style.right = "";
        img.style.left = "0px";
        img.style.marginLeft = "0px";
        me._external1.scrollLeft =
          currentWidth / 2 - me._external1.clientWidth / 2;
      }
      if (
        !me._external1.ggScrollbars ||
        currentHeight < me._external1.clientHeight
      ) {
        img.style.bottom = "";
        img.style.top = "50%";
        img.style.marginTop = "-" + currentHeight / 2 + "px";
      } else {
        img.style.bottom = "";
        img.style.top = "0px";
        img.style.marginTop = "0px";
        me._external1.scrollTop =
          currentHeight / 2 - me._external1.clientHeight / 2;
      }
    };
    me._ht_arrow.appendChild(me._external1);
    el = me._ht_node_ring = document.createElement("div");
    els = me._ht_node_ring__img = document.createElement("img");
    els.className = "ggskin ggskin_svg";
    hs =
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJMYXllcl8xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDY0IDM3LjEiIGRhdGEtbmFtZT0iTGF5ZXIgMSI+CiA8ZGVmcz4KICA8Y2xpcFBhdGggaWQ9ImNsaXAtcGF0aCI+CiAgIDxyZWN0IHk9Ii05LjQiIHg9Ii0zNS4yIiBmaWxsPSJub25lIiB3aWR0aD0iMTMyLjUiIGhlaWdodD0iNTUuOTkiLz4KICA8L2NsaXBQYXRoPgogIDxjbGlwUGF0aCBpZD0iY2xpcC1wYXRoLTIiPgogICA8cGF0aCBmaWxsPSJub25lIiBkPSJNMzIsOC43Yy0xMS43LDAtMjEuMiw0LT" +
      "IxLjIsOXM5LjUsOC45LDIxLjIsOC45LDIxLjItNCwyMS4yLTguOS05LjUtOS0yMS4yLTltMCwyMS42Yy0xNi41LDAtMjkuOS01LjYtMjkuOS0xMi42UzE1LjUsNS4xLDMyLDUuMXMyOS45LDUuNiwyOS45LDEyLjZTNDguNSwzMC4zLDMyLDMwLjNNOTctOS4zSC0zNVY0Ni41SDk3Vi05LjMiLz4KICA8L2NsaXBQYXRoPgogIDxjbGlwUGF0aCBpZD0iY2xpcC1wYXRoLTMiPgogICA8cG9seWxpbmUgcG9pbnRzPSI5Ny4yIDQ2LjYgLTM1LjIgNDYuNiAtMzUuMiAtOS40IDk3LjIgLTkuNCA5Ny4yIDQ2LjYiIGZpbGw9Im5vbmUiLz4KICA8L2NsaXBQYXRoPgogPC9kZWZzPgogPGcgc3R5bGU9Imlzb2xh" +
      "dGlvbjppc29sYXRlIj4KICA8ZyBjbGlwLXBhdGg9InVybCgjY2xpcC1wYXRoKSI+CiAgIDxnIGNsaXAtcGF0aD0idXJsKCNjbGlwLXBhdGgtMikiPgogICAgPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAtcGF0aC0zKSI+CiAgICAgPGltYWdlIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBSVVBQUFBNENBWUFBQURUamp1WEFBQUFDWEJJV1hNQUFBc1NBQUFMRWdIUzNYNzhBQUFNV0VsRVFWUjRYdTJhVzJ3ZDEzV0d2My9QekxueElsS2tMRkhVelpKbFdWWm9TYlpjSjdZTEowRml4QzNRRkFnS0dINXBnTFJBKzlCbm8wWFJGbWpUQUNtSytLSH" +
      "ZSWkVpYnkwQ05FVUNCR2lCUHFTeVlWdVNyUnNsU3haRlhVaFJ2QitTNXpLelZ4LzJPU2JUWTFsdVlVbEg5bnpBOEpERTRNek1ubTltcjczV2twbVJrN01SZDdjZGNyNTQ1RkxrZEpCTGtkTkJMa1ZPQjdrVU9SM2tVdVIwa0V1UjAwRXVSVTRIdVJRNUhlUlM1SFNRUzVIVFFTNUZUZ2U1RkRrZHhIZmI0ZlBFdDE5NVdaTlhyK3BxTGRPQndUNHRWaHRLZTRwcTFtb2Y3WlBFQ1VsOTFaTGVQbHU2TlVWL1g1L2Z2bjI3L2V5WC8vR0ZLU2ZyODFZNjM3dDdsNFlHK3FONm94RVRGd3BwbGhYVExDc0p5cUJLNXEyTStaS1RTczZwNkNFMmNBNEU0STNNUVFZMHZLaGoxSnkwWmo1YmxZdld6S2RyVVp6VXkwNk50" +
      "YlRaN0MrWHN6ZFB2dS92Y2xvUEZRKzlGQzgrKzdTYnZIVTdMaFVySmNYcXRjd0d3SWE4OTFza2JRVWVFUXdCZ3diOWh2VUNaYUVpVUFBaWZtMGFOUS95aGpXRkdzQWFzQW9zQVF2QUxEQUQzSks0WmJnWk16K2ZaZGt5U2FIbVZwY2FmL2hIZit4Zi83TS9mMmdIOXFHVDRnKys5ejJkZXUrVVcxMWFMRFNNWHNHUXBGRnY3QlRzQVhZQjI0RXR3QURRQTVTQWhIVUIyaElJa0xFK0Jnby8yLzh3d0FQZXdBdFNvQTYyS3JSa2NCdTRDVXdDRTg1cHdveHJPRzVIYUdrVlZ5dG5qZlRjaFE4ZXFrRithS1I0K2FVWDNYUzFYbGhiV2VxUlp3dGlsNW50Qng0SDlnRTdnR0dnMTZDb0VDODV3bjIyRFpzblRBOCtiT1" +
      "piRXJRSFFxeUxFN0V1a3NKbTJyQi9CalRBVmtEendBM0VGWXdMd0VXa0R5Vk5sV0N4MGNqcTV5NWZ6SGdJNkhvcG5qMzhKYmZXVEl0TnVVM1d6RWJCRGdDSGdDZUJ2Y0FqUUM5UUJLTFdUV3ZkY0pwQWpmRDZYd1lXdzJhTG9CVmdCYWkzOXZNR2FzbFVNS2dvZkc4L3NLbjEyUS8wR0pRVnBwNjJPQkFFYWJhT05RdGNCY1lGNzJmWXVVanhWUnl6dFpYbDFZbXIxN3BhanE2Vll2ZU9VU1hsVWlGMlViK2hIZDc3ZzVLT0dueEpRWVl0aGxXRUVqQVplRkNxRUFNc0V1Yjk2OENrWWRjazNjQ1lNWmgzVHN1RzFpU2FwTDdwWXVjdGlpMnJyZUxpZ2lQTFlwd1NvR3hHajZSTlpqWnNzRTJ3QTJ3bmFBZXdqVEJG" +
      "VlZpWFJHQXBxQTdNZ1UwQ1owQW5FYWNUNlVxRW43MTJjN28ydDdqVWxRRnFWMHB4NU5BVFVUV2o0bnkyRmZTNFlVOExQUTBjQUVZSWNVSk1lS1Zuckl0d0E3Z01YQUM3SUxrSjBEUnh0R0QxMVpWaVlUQWxXOHBPWDdqazdWTmMrRk5qWXpwN2Zsekhqb3hGeTlWcTdLV1NaZGJ2elErYnNWUFNmdUNBd1Q3QlRva2hiMVRVZVc2endDV3dVNkMzRmVsTTV2MjFvWEpsK2ZpSms2bWt1NTdML2FUcnBQaU53MlB4YXByMTE5TjBwOHpHaEo3ejJCR2h2WVNuc2toNElqUEMxREFITmdFNkEvYWVtYzRsU1RRWkpjbXN5OUxWa1MzRDZTLys4Nzgrc3lleVVDaG8xN1l0VVU5bG9GVHo2WUNaMzQ3MHVNR1lZSXdRM3" +
      "p4Q2VIdTA4MEFwWWZWeURYZ2ZlQXZ4TGhtWGxkWG1ubi9oeGVZLy92TlB1dVpHZEpVVWp4NDhHQmN0NjBkdXQ4LzhFY08rTEhTVXNLcm9KNndnTUdocWZaRFBBTzhBcDZJNHVteHlzNzVhVy91ckgveTFmKzIxMSs3cHhYMzlONTkzMHpkbkM0M0lEemk1bldaMkNMTm5RSWVCUjRITnJFdWNFbUtZRzhBWnNPTklienZwWXIzWm5IdjFPOTlwL09DSGYzZFB6L2ZUMGpWU2pCMDlHdFZXcWowdWluWlk1ZytEUFE4NlJvZ2ZCbGgvNmhyQVBIQUpPSUU0anRscDU2SkpLNWFxNDZkT051OXdpSHZHN3UzYlhLRi9zQktSYmZYR0FZeG5nV2VCSndodmpUSllCTXJBcXFEcndDbmdWNEszemV4eUlZa1hUcDg5ZDkv" +
      "UC9lUG9pdHJIZC8veWgzS3BUK1RVTCs5SGdmMkdIZ05HTEt3QUlzTkVlTm9XZ1NzR0o4enN2L0djTE1USmhNc2FTdzlDQ0lDSkcxTitmbVo2UlhIaHB1VE9TTHhwOEpiQkJjUXNVRyt0aUJ5b1FzaWhQQW84N3MxMkcyeXVaMWI2NnZQUGRjWDk2SXFUT1AxdlAxRWpheGJ3MnVSRFJEK3E4SVQxQ1JMRG5NS2cxb0Jad3o0VWpEdTRWQ3pFdHhiV2FpdG5MMTUrb011ODI3TnpGalZydFRXWU5jOFZpWEhCSll3cHdqSTFhNGtkRWVLTllXQlUwcWpFa1BOV1hsaGNhaTl2SHloZElVV3ByOTk1VVhDaUYyT1E5VXhrd3ZvNVpzQ2FZUXRDMDJCVG1iZTVhcjIrZG5EWDZBTVZvczNwOFE5OEhNVU5JaTBCTTJCVG" +
      "hzMFJwRWdWa2w2T01CV1dnVTFnZ3liMTRTaG1Qbk03dG8vb0V3NXhYK2dLS2M2ZFBrM3N2Zk5CZ29RUW5HM01TQUpna0FrMUVEWEoxU0twMlpkRS9zYnR1VHQ4OC8xbmRuN0JSMFNwNU9wSU5hR0doV25QQUF6RFFrclVtVmtFaWlNVVdlVGNxdUlITGdSMGlSU2JoN2ZnUThxNVFhZ3QxQkJwU0VpdHA1OFZLcG9sakI3REt1WlVSSW9tcjA1OHdyZmZYeDdic2puS0xDMlk5MlVMNTFuUytodFBRcWFRZHMwa05ZRzZOMnRhTTAxN0xiVS8rZHNmM2VVSTk1NnVrR0xIMElDUEkxZVhVUlhNZ2VZd2xoVldHdTBjZ3dOS2drRmdHOFoySnczVlVpcTdSN2QzUlYvSVMxOTdLVnF1MTB1Q0FUTWJFV3dIRFJPbXdz" +
      "amFMd3RvR3JaaU1DOHhKN1NFYy9WcVp2NzE3Nzc2d0plRFhTSEZTeSsvWW9xVGhqa1dKTjAwN0NyWVRXRFJvQkdDVEhPRWF1Y1FZWmw2eUpzOUljZG8wMXpmVTJPSEhxZ1lMeHc3Nm1hbjU4dk8ySUt4VDlJaFlMK0RiUllDeTZnVlU2VEFpdENNNEpxaDZ4NmJqYU40TFYxZFRULzVLUGVIcnNsVHZIRHNxSnRiV2F0a2FUYUNOR2J3RllXMS9uNUNFaWdoeEJmdFplbUU0SlNKdDV4MEVybUpRcW0wVUZ0YWJGeTRkUG0rWHRTUmd3ZmlGYUplbDJVamhqOEVlaFo0QnRodk1Dd290bFpRN2N6bVZiQ1RvRjhaOW82VEpnWUhCNWVPSDM4emwrSi9zMy9YZ2NoVjZQVm1vektlQXI1TUdOeDloR21qME5vMUE2cU" +
      "NLWVB6d0FuZ2hLU0xTWkxjR3VpcFZNOWYvQ0M5UFRkM3p5NU9rbDc1K2t2UmxhbVprcGtmOG1tMmg1RG1mc1pDRlhjWG9icTZVZVpsUWhiMlBZUGpRdTlJK3REaWFPSENtVE9OT3h6cXZ0TlZVZ0I4KzF2ZmpDNWR1OUZUYXpSR0luVElteDJUT0FiYVQxamJsMXJaUVUrSU9aYUE2OVlxVTRPZGtZcy96UERUaHBaVjlZMVhmLy8zL045OC8vdWZ5WVh1R1IxeHcwTkR5YkxSb3l3YnRqVGI1ZUdnZ3pFUFR3amJEUm9rTERrajFrdjRDOEFWNEJUWVcwS253Q1lLc1Z0OC8rejRBMG02M1ltdWt3TGd0Ny94TlhkMjhucXBLQTE3czcxbUhGRjRZendKakxMK0JEckNvRGVBS3FGY2Z0WGdvdUFpNGtOTTE4SFBK" +
      "bkZTelJwcnRTUkptcEdVN2R1NzEvN2xaeisvNDhWLzlZV3ZhR3BxU3NPYk43c3Jjd3Z4WUtWY1ROTzB4OHdHdmJkdHdCN0RIaE42bkpDZDNHclFyeEQzUklTQXNsM3ZtQVl1QUNjazNoVnV2QkluVTVOWnRqSnovbXhYVEJrYjZVb3BBTjU0NHczOXc0LytQbzdLbFI2aGJUN0w5aU1kQnA0aWRGdU5BSDJzOXpHWVlWbXJyN0pLcUkvY0loU2cydHMwWXRZYmkwNWFGVll6byttY3ZEbG5saGxPMWtvdXFZajVzb2Mrak0xZ2o0QkdDSzErbzRUTTZ4RFFaMkZWMU83UU1nc0Z1eFhCaklWUy9tbkVLZEE1RjBmWGszTFA0cFh6NStyTDFXcFhEbjdYU3RIbXVhZVBLRzAwa3JxcHQ1R21Xd1Y3emV4SndyejlHT0" +
      "VtRGZKUkg2YTVWcjZyM1hhM3NmdXEydDRNcXdxdEdWWnZCWUFHaGxEc3pSSkpaYUFDMWd2cWs5UnJadTErendLZDdYNnQvazJXSktiTnVBeWNSWnlSY1RFdUZtNW11TVdLTmV2dm5qNzNtWlh5N3dWZEwwV2JBL3YyYW5FK2pZWjNiS28wYW8xQlpDUEFYalAyQzNzTXRCdll5cTkzUWtVUStpb05hQzBKelREZit0Mkh2OWs0Q0JMdGZzeU52WmtmYmJEZXpOdFVFRzdKWUVZaGlMeGsySVZJN3BLSHlVUnV0aEN6OHVqdTNjMS8vZmRmZExVTWJSNGFLVGJ5M05OSFhIMXRMVjV0WmlVbDhRRG10MkNNbXJITHNGMEtyWEpiQ2EvM2ZxQmlXREcwN24xc1IvZkhZYTNORTRwWlRhRjJEK2JHNmVrNk1JbVlFRnlU" +
      "TkczbTV5TnpLNFdZNXNtejQxMVJsL20vOEZCS3NaRy8rTlBYOVU4Ly9yR0xldm9LUmFkU2xtVzlNZzFtMkdZbkRSTjZPWWVBelVLYkNIRklqMkZGb0NBVXN5RWVJQWlRQ3BxRVBzdFZzR1hRRWtHRU9UT2JFZHdtMGl5bWVSZEh5OFdNMWJwOFkvejhlUHBwV3YyNm1ZZGVpbzlqZUdpekRqeTZKN3EydUJ6M0ZBcEpQVTBMOGxrUmM2WElVVFNzWkZKQjNpZUdZb25JRERubnlMelBJcEdhbE1xc1lZcHE1ck1hb2k2am5zU2xSa05abzVTbWFhRVFaZTkwZVh6dy8rRnpLY1VuRVVXUmZ1ZGIzOVJQSjI0eGxpNUxFdU5OMFpja3lnemJvUVlDM2p2L2dmM3ViNzNNVDMvK1MxdGJYYUZVS24xaEJ1b0xKMFhPM2" +
      "VtS2dsaE9kNUZMa2ROQkxrVk9CN2tVT1Iza1V1UjBrRXVSMDBFdVJVNEh1UlE1SGVSUzVIU1FTNUhUUVM1RlRnZTVGRGtkL0ErcnBiUVZFNE5aandBQUFBQkpSVTVFcmtKZ2dnPT0iIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zNS4yIC05LjQpIiB3aWR0aD0iMTMzIiBoZWlnaHQ9IjU2Ii8+CiAgICA8L2c+CiAgIDwvZz4KICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTMyLDI2LjZjLTExLjcsMC0yMS4yLTQtMjEuMi04LjlzOS41LTksMjEuMi05LDIxLjIsNCwyMS4yLDlTNDMuNywyNi42LDMyLDI2LjZNMzIsNS4xQzE1LjUsNS4xLDIuMSwxMC43LDIuMSwxNy43UzE1LjUsMzAuMywzMiwzMC4zczI5" +
      "LjktNS42LDI5LjktMTIuNlM0OC41LDUuMSwzMiw1LjEiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=";
    me._ht_node_ring__img.setAttribute("src", hs);
    hs = "";
    hs +=
      "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;transform: rotateX(70deg); animation: pulse 3s infinite ease-out;;";
    els.setAttribute("style", hs);
    els["ondragstart"] = function () {
      return false;
    };
    el.appendChild(els);
    el.ggSubElement = els;
    el.ggId = "ht_node_ring";
    el.ggDx = 0;
    el.ggDy = 0;
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1, def: "" };
    el.ggVisible = false;
    el.className = "ggskin ggskin_svg ";
    el.ggType = "svg";
    hs = "";
    hs += "cursor : pointer;";
    hs += "height : 60px;";
    hs += "left : calc(50% - ((60px + 0px) / 2) + 0px);";
    hs += "position : absolute;";
    hs += "top : calc(50% - ((60px + 0px) / 2) + 0px);";
    hs += "visibility : hidden;";
    hs += "width : 60px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "50% 50%";
    me._ht_node_ring.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return me.ggNodeId;
    };
    me._ht_node_ring.ggUpdatePosition = function (useTransition) {};
    me._ht_arrow.appendChild(me._ht_node_ring);
    me.__div = me._ht_arrow;
  }
  function SkinHotspotClass_hs_info(parentScope, hotspot) {
    var me = this;
    var flag = false;
    var hs = "";
    me.parentScope = parentScope;
    me.hotspot = hotspot;
    var nodeId = String(hotspot.url);
    nodeId = nodeId.charAt(0) == "{" ? nodeId.substr(1, nodeId.length - 2) : ""; // }
    me.ggUserdata = skin.player.getNodeUserdata(nodeId);
    me.ggUserdata.nodeid = nodeId;
    me.elementMouseDown = {};
    me.elementMouseOver = {};
    me.findElements = function (id, regex) {
      return skin.findElements(id, regex);
    };
    el = me._hs_info = document.createElement("div");
    el.ggId = "hs_info";
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1, def: "" };
    el.ggVisible = true;
    el.className = "ggskin ggskin_hotspot ";
    el.ggType = "hotspot";
    hs = "";
    hs += "cursor : pointer;";
    hs += "height : 0px;";
    hs += "left : 481px;";
    hs += "position : absolute;";
    hs += "top : 130px;";
    hs += "visibility : inherit;";
    hs += "width : 0px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "50% 50%";
    me._hs_info.ggIsActive = function () {
      return player.getCurrentNode() == this.ggElementNodeId();
    };
    el.ggElementNodeId = function () {
      if (me.hotspot.url != "" && me.hotspot.url.charAt(0) == "{") {
        // }
        return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
      } else {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        } else {
          return player.getCurrentNode();
        }
      }
    };
    me._hs_info.logicBlock_scaling = function () {
      var newLogicStateScaling;
      if (player.getIsMobile() == true) {
        newLogicStateScaling = 0;
      } else {
        newLogicStateScaling = -1;
      }
      if (me._hs_info.ggCurrentLogicStateScaling != newLogicStateScaling) {
        me._hs_info.ggCurrentLogicStateScaling = newLogicStateScaling;
        me._hs_info.style.transition = "transform 0s";
        if (me._hs_info.ggCurrentLogicStateScaling == 0) {
          me._hs_info.ggParameter.sx = 0.7;
          me._hs_info.ggParameter.sy = 0.7;
          me._hs_info.style.transform = parameterToTransform(
            me._hs_info.ggParameter
          );
          skin.updateSize(me._hs_info);
        } else {
          me._hs_info.ggParameter.sx = 1;
          me._hs_info.ggParameter.sy = 1;
          me._hs_info.style.transform = parameterToTransform(
            me._hs_info.ggParameter
          );
          skin.updateSize(me._hs_info);
        }
      }
    };
    me._hs_info.logicBlock_scaling();
    me._hs_info.onclick = function (e) {
      if (player._(me.hotspot.description) != "") {
        player.setVariableValue("open_catalog", true);
      }
      if (player._(me.hotspot.description) != "") {
        skin._iframe_catalog.ggUpdateText = function () {
          var params = [];
          params.push(String(player._(me.hotspot.description)));
          var hs = player._("%1", params);
          if (hs != this.ggText) {
            this.ggText = hs;
            this.ggTextDiv.innerHTML = hs;
            if (this.ggUpdatePosition) this.ggUpdatePosition();
          }
        };
        skin._iframe_catalog.ggUpdateText();
        skin._iframe_catalog.ggTextDiv.scrollTop = 0;
      }
      if (player._(me.hotspot.description) == "") {
        player.setVariableValue("open_info", true);
      }
      player.setVariableValue("var_show_menu", false);
      player.triggerEvent("hsproxyclick", {
        id: me.hotspot.id,
        url: me.hotspot.url,
      });
    };
    me._hs_info.ondblclick = function (e) {
      player.triggerEvent("hsproxydblclick", {
        id: me.hotspot.id,
        url: me.hotspot.url,
      });
    };
    me._hs_info.onmouseover = function (e) {
      player.setActiveHotspot(me.hotspot);
      me.elementMouseOver["hs_info"] = true;
      player.triggerEvent("hsproxyover", {
        id: me.hotspot.id,
        url: me.hotspot.url,
      });
    };
    me._hs_info.onmouseout = function (e) {
      player.setActiveHotspot(null);
      me.elementMouseOver["hs_info"] = false;
      player.triggerEvent("hsproxyout", {
        id: me.hotspot.id,
        url: me.hotspot.url,
      });
    };
    me._hs_info.ggUpdatePosition = function (useTransition) {};
    el = me._point_hs_info = document.createElement("div");
    el.ggId = "point_hs_info";
    el.ggDx = 0;
    el.ggDy = 0;
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1, def: "" };
    el.ggVisible = true;
    el.className = "ggskin ggskin_rectangle ";
    el.ggType = "rectangle";
    hs = "";
    hs += "background : rgba(19,73,157,0.588235);";
    hs += "border : 0px solid #ffffff;";
    hs += "border-radius : 999px;";
    hs += "cursor : pointer;";
    hs += "height : 46px;";
    hs += "left : calc(50% - ((46px + 0px) / 2) + 0px);";
    hs += "position : absolute;";
    hs += "top : calc(50% - ((46px + 0px) / 2) + 0px);";
    hs += "visibility : inherit;";
    hs += "width : 46px;";
    hs += "pointer-events:auto;";
    hs += "animation: pulse 2s infinite ease-out;";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "50% 50%";
    me._point_hs_info.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return me.ggNodeId;
    };
    me._point_hs_info.ggUpdatePosition = function (useTransition) {};
    el = me._icon_info = document.createElement("div");
    els = me._icon_info__img = document.createElement("img");
    els.className = "ggskin ggskin_svg";
    hs =
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA5ODAgOTgwIj4KIDxnIGlkPSJMYXllcl8yIiBkYXRhLW5hbWU9IkxheWVyIDIiPgogIDxnIGlkPSJMYXllcl8xLTIiIGRhdGEtbmFtZT0iTGF5ZXIgMSI+CiAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iI2ZmZmZmZiIgZD0iTTQ5MCwzNTBjMzguMywwLDcwLTMxLjcsNzAtNzBzLTMxLjctNzAtNzAtNzAtNzAsMzEuNy03MCw3MFM0NTEuNywzNTAsNDkwLDM1MFpNNDkwLDBDMjE5LjgsMCwwLDIxOS44LDAsNDkwUzIxOS44LDk4MCw0OTAsOTgwLDk4MCw3NjAuMiw5ODAsNDkwLDc2MC4yLDAsND" +
      "kwLDBabTAsODQwYy0xOTMuNiwwLTM1MC0xNTYuNC0zNTAtMzUwUzI5Ni40LDE0MCw0OTAsMTQwLDg0MCwyOTYuNCw4NDAsNDkwLDY4My42LDg0MCw0OTAsODQwWm03MC0zNTBjMC0zNS0zNS03MC03MC03MEg0MjBjLTM1LDAtNzAsMzUtNzAsNzBoNzBWNzAwYzAsMzUsMzUsNzAsNzAsNzBoNzBjMzUsMCw3MC0zNSw3MC03MEg1NjBaIi8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K";
    me._icon_info__img.setAttribute("src", hs);
    hs = "";
    hs +=
      "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;";
    els.setAttribute("style", hs);
    els["ondragstart"] = function () {
      return false;
    };
    el.appendChild(els);
    el.ggSubElement = els;
    el.ggId = "icon_info";
    el.ggDx = 0;
    el.ggDy = 0;
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1, def: "" };
    el.ggVisible = true;
    el.className = "ggskin ggskin_svg ";
    el.ggType = "svg";
    hs = "";
    hs += "cursor : pointer;";
    hs += "height : 40px;";
    hs += "left : calc(50% - ((40px + 0px) / 2) + 0px);";
    hs += "position : absolute;";
    hs += "top : calc(50% - ((40px + 0px) / 2) + 0px);";
    hs += "visibility : inherit;";
    hs += "width : 40px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "50% 50%";
    me._icon_info.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return me.ggNodeId;
    };
    me._icon_info.ggUpdatePosition = function (useTransition) {};
    me._point_hs_info.appendChild(me._icon_info);
    me._hs_info.appendChild(me._point_hs_info);
    me._hs_info.logicBlock_scaling();
    me.ggEvent_configloaded = function () {
      me._hs_info.logicBlock_scaling();
    };
    me.__div = me._hs_info;
  }
  function SkinHotspotClass_hs_sanpham(parentScope, hotspot) {
    var me = this;
    var flag = false;
    var hs = "";
    me.parentScope = parentScope;
    me.hotspot = hotspot;
    var nodeId = String(hotspot.url);
    nodeId = nodeId.charAt(0) == "{" ? nodeId.substr(1, nodeId.length - 2) : ""; // }
    me.ggUserdata = skin.player.getNodeUserdata(nodeId);
    me.ggUserdata.nodeid = nodeId;
    me.elementMouseDown = {};
    me.elementMouseOver = {};
    me.findElements = function (id, regex) {
      return skin.findElements(id, regex);
    };
    el = me._hs_sanpham = document.createElement("div");
    el.ggId = "hs_sanpham";
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1, def: "" };
    el.ggVisible = true;
    el.className = "ggskin ggskin_hotspot ";
    el.ggType = "hotspot";
    hs = "";
    hs += "cursor : pointer;";
    hs += "height : 0px;";
    hs += "left : 425px;";
    hs += "position : absolute;";
    hs += "top : 130px;";
    hs += "visibility : inherit;";
    hs += "width : 0px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "50% 50%";
    me._hs_sanpham.ggIsActive = function () {
      return player.getCurrentNode() == this.ggElementNodeId();
    };
    el.ggElementNodeId = function () {
      if (me.hotspot.url != "" && me.hotspot.url.charAt(0) == "{") {
        // }
        return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
      } else {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        } else {
          return player.getCurrentNode();
        }
      }
    };
    me._hs_sanpham.logicBlock_scaling = function () {
      var newLogicStateScaling;
      if (player.getIsMobile() == true) {
        newLogicStateScaling = 0;
      } else {
        newLogicStateScaling = -1;
      }
      if (me._hs_sanpham.ggCurrentLogicStateScaling != newLogicStateScaling) {
        me._hs_sanpham.ggCurrentLogicStateScaling = newLogicStateScaling;
        me._hs_sanpham.style.transition = "transform 0s";
        if (me._hs_sanpham.ggCurrentLogicStateScaling == 0) {
          me._hs_sanpham.ggParameter.sx = 0.7;
          me._hs_sanpham.ggParameter.sy = 0.7;
          me._hs_sanpham.style.transform = parameterToTransform(
            me._hs_sanpham.ggParameter
          );
          skin.updateSize(me._hs_sanpham);
        } else {
          me._hs_sanpham.ggParameter.sx = 1;
          me._hs_sanpham.ggParameter.sy = 1;
          me._hs_sanpham.style.transform = parameterToTransform(
            me._hs_sanpham.ggParameter
          );
          skin.updateSize(me._hs_sanpham);
        }
      }
    };
    me._hs_sanpham.logicBlock_scaling();
    me._hs_sanpham.onclick = function (e) {
      player.triggerEvent("hsproxyclick", {
        id: me.hotspot.id,
        url: me.hotspot.url,
      });
    };
    me._hs_sanpham.ondblclick = function (e) {
      player.triggerEvent("hsproxydblclick", {
        id: me.hotspot.id,
        url: me.hotspot.url,
      });
    };
    me._hs_sanpham.onmouseover = function (e) {
      player.setActiveHotspot(me.hotspot);
      me.elementMouseOver["hs_sanpham"] = true;
      player.triggerEvent("hsproxyover", {
        id: me.hotspot.id,
        url: me.hotspot.url,
      });
    };
    me._hs_sanpham.onmouseout = function (e) {
      player.setActiveHotspot(null);
      me.elementMouseOver["hs_sanpham"] = false;
      player.triggerEvent("hsproxyout", {
        id: me.hotspot.id,
        url: me.hotspot.url,
      });
    };
    me._hs_sanpham.ggUpdatePosition = function (useTransition) {};
    el = me._point_hs_sanpham2 = document.createElement("div");
    el.ggId = "point_hs_sanpham2";
    el.ggDx = 0;
    el.ggDy = 0;
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1, def: "" };
    el.ggVisible = true;
    el.className = "ggskin ggskin_rectangle ";
    el.ggType = "rectangle";
    hs = "";
    hs += "border : 3px solid #ffffff;";
    hs += "border-radius : 999px;";
    hs += "cursor : pointer;";
    hs += "height : 35px;";
    hs += "left : calc(50% - ((35px + 6px) / 2) + 0px);";
    hs += "opacity : 0;";
    hs += "position : absolute;";
    hs += "top : calc(50% - ((35px + 6px) / 2) + 0px);";
    hs += "visibility : hidden;";
    hs += "width : 35px;";
    hs += "pointer-events:auto;";
    hs += "animation: pulse 2s infinite ease-out;";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "50% 50%";
    me._point_hs_sanpham2.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return me.ggNodeId;
    };
    me._point_hs_sanpham2.logicBlock_scaling = function () {
      var newLogicStateScaling;
      if (player.getVariableValue("var_hs_ani") == true) {
        newLogicStateScaling = 0;
      } else {
        newLogicStateScaling = -1;
      }
      if (
        me._point_hs_sanpham2.ggCurrentLogicStateScaling != newLogicStateScaling
      ) {
        me._point_hs_sanpham2.ggCurrentLogicStateScaling = newLogicStateScaling;
        me._point_hs_sanpham2.style.transition =
          "transform 500ms ease 0ms, opacity 500ms ease 0ms";
        if (me._point_hs_sanpham2.ggCurrentLogicStateScaling == 0) {
          me._point_hs_sanpham2.ggParameter.sx = 0.5;
          me._point_hs_sanpham2.ggParameter.sy = 0.5;
          me._point_hs_sanpham2.style.transform = parameterToTransform(
            me._point_hs_sanpham2.ggParameter
          );
          setTimeout(function () {
            skin.updateSize(me._point_hs_sanpham2);
          }, 550);
        } else {
          me._point_hs_sanpham2.ggParameter.sx = 1;
          me._point_hs_sanpham2.ggParameter.sy = 1;
          me._point_hs_sanpham2.style.transform = parameterToTransform(
            me._point_hs_sanpham2.ggParameter
          );
          setTimeout(function () {
            skin.updateSize(me._point_hs_sanpham2);
          }, 550);
        }
      }
    };
    me._point_hs_sanpham2.logicBlock_scaling();
    me._point_hs_sanpham2.logicBlock_alpha = function () {
      var newLogicStateAlpha;
      if (player.getVariableValue("var_hs_ani") == true) {
        newLogicStateAlpha = 0;
      } else {
        newLogicStateAlpha = -1;
      }
      if (
        me._point_hs_sanpham2.ggCurrentLogicStateAlpha != newLogicStateAlpha
      ) {
        me._point_hs_sanpham2.ggCurrentLogicStateAlpha = newLogicStateAlpha;
        me._point_hs_sanpham2.style.transition =
          "transform 500ms ease 0ms, opacity 500ms ease 0ms";
        if (me._point_hs_sanpham2.ggCurrentLogicStateAlpha == 0) {
          me._point_hs_sanpham2.style.visibility = me._point_hs_sanpham2
            .ggVisible
            ? "inherit"
            : "hidden";
          me._point_hs_sanpham2.style.opacity = 1;
        } else {
          setTimeout(function () {
            if (me._point_hs_sanpham2.style.opacity == 0.0) {
              me._point_hs_sanpham2.style.visibility = "hidden";
            }
          }, 505);
          me._point_hs_sanpham2.style.opacity = 0;
        }
      }
    };
    me._point_hs_sanpham2.logicBlock_alpha();
    me._point_hs_sanpham2.ggUpdatePosition = function (useTransition) {};
    me._hs_sanpham.appendChild(me._point_hs_sanpham2);
    el = me._point_hs_sanpham = document.createElement("div");
    el.ggId = "point_hs_sanpham";
    el.ggDx = 0;
    el.ggDy = 0;
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 0.5, sy: 0.5, def: "" };
    el.ggVisible = true;
    el.className = "ggskin ggskin_rectangle ";
    el.ggType = "rectangle";
    hs = "";
    hs += "border : 3px solid #ffffff;";
    hs += "border-radius : 999px;";
    hs += "cursor : pointer;";
    hs += "height : 35px;";
    hs += "left : calc(50% - ((35px + 6px) / 2) + 0px);";
    hs += "position : absolute;";
    hs += "top : calc(50% - ((35px + 6px) / 2) + 0px);";
    hs += "visibility : inherit;";
    hs += "width : 35px;";
    hs += "pointer-events:auto;";
    hs += "animation: pulse 2s infinite ease-out;";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "50% 50%";
    el.style.transform = parameterToTransform(el.ggParameter);
    me._point_hs_sanpham.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return me.ggNodeId;
    };
    me._point_hs_sanpham.logicBlock_scaling = function () {
      var newLogicStateScaling;
      if (player.getVariableValue("var_hs_ani") == true) {
        newLogicStateScaling = 0;
      } else {
        newLogicStateScaling = -1;
      }
      if (
        me._point_hs_sanpham.ggCurrentLogicStateScaling != newLogicStateScaling
      ) {
        me._point_hs_sanpham.ggCurrentLogicStateScaling = newLogicStateScaling;
        me._point_hs_sanpham.style.transition =
          "transform 500ms ease 0ms, opacity 500ms ease 0ms";
        if (me._point_hs_sanpham.ggCurrentLogicStateScaling == 0) {
          me._point_hs_sanpham.ggParameter.sx = 1;
          me._point_hs_sanpham.ggParameter.sy = 1;
          me._point_hs_sanpham.style.transform = parameterToTransform(
            me._point_hs_sanpham.ggParameter
          );
          setTimeout(function () {
            skin.updateSize(me._point_hs_sanpham);
          }, 550);
        } else {
          me._point_hs_sanpham.ggParameter.sx = 0.5;
          me._point_hs_sanpham.ggParameter.sy = 0.5;
          me._point_hs_sanpham.style.transform = parameterToTransform(
            me._point_hs_sanpham.ggParameter
          );
          setTimeout(function () {
            skin.updateSize(me._point_hs_sanpham);
          }, 550);
        }
      }
    };
    me._point_hs_sanpham.logicBlock_scaling();
    me._point_hs_sanpham.logicBlock_alpha = function () {
      var newLogicStateAlpha;
      if (player.getVariableValue("var_hs_ani") == true) {
        newLogicStateAlpha = 0;
      } else {
        newLogicStateAlpha = -1;
      }
      if (me._point_hs_sanpham.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
        me._point_hs_sanpham.ggCurrentLogicStateAlpha = newLogicStateAlpha;
        me._point_hs_sanpham.style.transition =
          "transform 500ms ease 0ms, opacity 500ms ease 0ms";
        if (me._point_hs_sanpham.ggCurrentLogicStateAlpha == 0) {
          setTimeout(function () {
            if (me._point_hs_sanpham.style.opacity == 0.0) {
              me._point_hs_sanpham.style.visibility = "hidden";
            }
          }, 505);
          me._point_hs_sanpham.style.opacity = 0;
        } else {
          me._point_hs_sanpham.style.visibility = me._point_hs_sanpham.ggVisible
            ? "inherit"
            : "hidden";
          me._point_hs_sanpham.style.opacity = 1;
        }
      }
    };
    me._point_hs_sanpham.logicBlock_alpha();
    me._point_hs_sanpham.ggUpdatePosition = function (useTransition) {};
    me._hs_sanpham.appendChild(me._point_hs_sanpham);
    el = me._point_hs_ani = document.createElement("div");
    el.ggId = "point_hs_ani";
    el.ggDx = 0;
    el.ggDy = 0;
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 0.5, sy: 0.5, def: "" };
    el.ggVisible = true;
    el.className = "ggskin ggskin_rectangle ";
    el.ggType = "rectangle";
    hs = "";
    hs += "background : #ffffff;";
    hs += "border : 0px solid #ffffff;";
    hs += "border-radius : 999px;";
    hs += "cursor : pointer;";
    hs += "height : 25px;";
    hs += "left : calc(50% - ((25px + 0px) / 2) + 0px);";
    hs += "position : absolute;";
    hs += "top : calc(50% - ((25px + 0px) / 2) + 0px);";
    hs += "visibility : inherit;";
    hs += "width : 25px;";
    hs += "pointer-events:auto;";
    hs += "animation: pulse 2s infinite ease-out;";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "50% 50%";
    el.style.transform = parameterToTransform(el.ggParameter);
    me._point_hs_ani.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return me.ggNodeId;
    };
    me._point_hs_ani.ggUpdatePosition = function (useTransition) {};
    me._hs_sanpham.appendChild(me._point_hs_ani);
    me._hs_sanpham.logicBlock_scaling();
    me._point_hs_sanpham2.logicBlock_scaling();
    me._point_hs_sanpham2.logicBlock_alpha();
    me._point_hs_sanpham.logicBlock_scaling();
    me._point_hs_sanpham.logicBlock_alpha();
    me.ggEvent_changenode = function () {
      me._point_hs_sanpham2.logicBlock_scaling();
      me._point_hs_sanpham2.logicBlock_alpha();
      me._point_hs_sanpham.logicBlock_scaling();
      me._point_hs_sanpham.logicBlock_alpha();
    };
    me.ggEvent_configloaded = function () {
      me._hs_sanpham.logicBlock_scaling();
      me._point_hs_sanpham2.logicBlock_scaling();
      me._point_hs_sanpham2.logicBlock_alpha();
      me._point_hs_sanpham.logicBlock_scaling();
      me._point_hs_sanpham.logicBlock_alpha();
    };
    me.ggEvent_varchanged_var_hs_ani = function () {
      me._point_hs_sanpham2.logicBlock_scaling();
      me._point_hs_sanpham2.logicBlock_alpha();
      me._point_hs_sanpham.logicBlock_scaling();
      me._point_hs_sanpham.logicBlock_alpha();
    };
    me.__div = me._hs_sanpham;
  }
  function SkinHotspotClass_ht_node(parentScope, hotspot) {
    var me = this;
    var flag = false;
    var hs = "";
    me.parentScope = parentScope;
    me.hotspot = hotspot;
    var nodeId = String(hotspot.url);
    nodeId = nodeId.charAt(0) == "{" ? nodeId.substr(1, nodeId.length - 2) : ""; // }
    me.ggUserdata = skin.player.getNodeUserdata(nodeId);
    me.ggUserdata.nodeid = nodeId;
    me.elementMouseDown = {};
    me.elementMouseOver = {};
    me.findElements = function (id, regex) {
      return skin.findElements(id, regex);
    };
    el = me._ht_node = document.createElement("div");
    el.ggId = "ht_node";
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1, def: "" };
    el.ggVisible = true;
    el.className = "ggskin ggskin_hotspot ";
    el.ggType = "hotspot";
    hs = "";
    hs += "cursor : pointer;";
    hs += "height : 0px;";
    hs += "left : 60px;";
    hs += "position : absolute;";
    hs += "top : 56px;";
    hs += "visibility : inherit;";
    hs += "width : 0px;";
    hs += "pointer-events:none;";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "50% 50%";
    me._ht_node.ggIsActive = function () {
      return player.getCurrentNode() == this.ggElementNodeId();
    };
    el.ggElementNodeId = function () {
      if (me.hotspot.url != "" && me.hotspot.url.charAt(0) == "{") {
        // }
        return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
      } else {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        } else {
          return player.getCurrentNode();
        }
      }
    };
    me._ht_node.onclick = function (e) {
      player.openUrl(player._(me.hotspot.url), player._(me.hotspot.target));
      player.triggerEvent("hsproxyclick", {
        id: me.hotspot.id,
        url: me.hotspot.url,
      });
    };
    me._ht_node.ondblclick = function (e) {
      player.triggerEvent("hsproxydblclick", {
        id: me.hotspot.id,
        url: me.hotspot.url,
      });
    };
    me._ht_node.onmouseover = function (e) {
      player.setActiveHotspot(me.hotspot);
      me.elementMouseOver["ht_node"] = true;
      me._tt_ht_node.logicBlock_alpha();
      player.triggerEvent("hsproxyover", {
        id: me.hotspot.id,
        url: me.hotspot.url,
      });
    };
    me._ht_node.onmouseout = function (e) {
      player.setActiveHotspot(null);
      me.elementMouseOver["ht_node"] = false;
      me._tt_ht_node.logicBlock_alpha();
      player.triggerEvent("hsproxyout", {
        id: me.hotspot.id,
        url: me.hotspot.url,
      });
    };
    me._ht_node.ggUpdatePosition = function (useTransition) {};
    el = me._tt_ht_node = document.createElement("div");
    els = me._tt_ht_node__text = document.createElement("div");
    el.className = "ggskin ggskin_textdiv";
    el.ggTextDiv = els;
    el.ggId = "tt_ht_node";
    el.ggDx = 0;
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1, def: "" };
    el.ggVisible = false;
    el.className = "ggskin ggskin_text title2";
    el.ggType = "text";
    hs = "";
    hs += "bottom : 28px;";
    hs += "color : rgba(255,255,255,1);";
    hs += "height : auto;";
    hs += "left : calc(50% - ((120px + 0px) / 2) + 0px);";
    hs += "opacity : 0;";
    hs += "position : absolute;";
    hs += "visibility : hidden;";
    hs += "width : 120px;";
    hs += "pointer-events:none;";
    hs += "text-shadow: 1px 1px 4px #000000;";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "50% 50%";
    hs = "";
    hs += "box-sizing: border-box;";
    hs += "cursor: default;";
    hs += "width: 100%;";
    hs += "height: auto;";
    hs += "pointer-events: none;";
    hs += "background : rgba(38,125,193,0.862745);";
    hs += "border : 0px solid #ffffff;";
    hs += "border-radius : 6px;";
    hs += "cursor : default;";
    hs += "font-size: 14px;";
    hs += "font-weight: 500;";
    hs += "text-align: center;";
    hs += "white-space: pre-line;";
    hs += "padding: 1px;";
    hs += "overflow: hidden;";
    hs +=
      "padding: 5px 10px; background-color: rgba(37, 46, 64, 0.8); box-shadow: rgba(0, 0, 0, 0.5) 0px 0.1em 0.25em 0px; border-radius: 8.8px; overflow: hidden; -webkit-line-clamp: 2; text-overflow: ellipsis; display: flex; justify-content: center; align-items: center;";
    els.setAttribute("style", hs);
    me._tt_ht_node.ggUpdateText = function () {
      var params = [];
      params.push(player._(String(me.ggUserdata.customnodeid)));
      var hs = player._("%1", params);
      if (hs != this.ggText) {
        this.ggText = hs;
        this.ggTextDiv.innerHTML = hs;
        if (this.ggUpdatePosition) this.ggUpdatePosition();
      }
    };
    me._tt_ht_node.ggUpdateText();
    player.addListener("changenode", function () {
      me._tt_ht_node.ggUpdateText();
    });
    el.appendChild(els);
    me._tt_ht_node.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return me.ggNodeId;
    };
    me._tt_ht_node.logicBlock_visible = function () {
      var newLogicStateVisible;
      if (player.getHasTouch() == true) {
        newLogicStateVisible = 0;
      } else {
        newLogicStateVisible = -1;
      }
      if (me._tt_ht_node.ggCurrentLogicStateVisible != newLogicStateVisible) {
        me._tt_ht_node.ggCurrentLogicStateVisible = newLogicStateVisible;
        me._tt_ht_node.style.transition = "opacity 200ms ease 0ms";
        if (me._tt_ht_node.ggCurrentLogicStateVisible == 0) {
          me._tt_ht_node.style.visibility = "hidden";
          me._tt_ht_node.ggVisible = false;
        } else {
          me._tt_ht_node.style.visibility = "hidden";
          me._tt_ht_node.ggVisible = false;
        }
      }
    };
    me._tt_ht_node.logicBlock_visible();
    me._tt_ht_node.logicBlock_alpha = function () {
      var newLogicStateAlpha;
      if (
        me.elementMouseOver["ht_node"] == true &&
        player._(me.hotspot.title) != ""
      ) {
        newLogicStateAlpha = 0;
      } else {
        newLogicStateAlpha = -1;
      }
      if (me._tt_ht_node.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
        me._tt_ht_node.ggCurrentLogicStateAlpha = newLogicStateAlpha;
        me._tt_ht_node.style.transition = "opacity 200ms ease 0ms";
        if (me._tt_ht_node.ggCurrentLogicStateAlpha == 0) {
          me._tt_ht_node.style.visibility = me._tt_ht_node.ggVisible
            ? "inherit"
            : "hidden";
          me._tt_ht_node.style.opacity = 1;
        } else {
          setTimeout(function () {
            if (me._tt_ht_node.style.opacity == 0.0) {
              me._tt_ht_node.style.visibility = "hidden";
            }
          }, 205);
          me._tt_ht_node.style.opacity = 0;
        }
      }
    };
    me._tt_ht_node.logicBlock_alpha();
    me._tt_ht_node.ggUpdatePosition = function (useTransition) {};
    me._ht_node.appendChild(me._tt_ht_node);
    me._tt_ht_node.logicBlock_visible();
    me._tt_ht_node.logicBlock_alpha();
    me.ggEvent_activehotspotchanged = function () {
      me._tt_ht_node.logicBlock_alpha();
    };
    me.ggEvent_changenode = function () {
      me._tt_ht_node.logicBlock_alpha();
    };
    me.ggEvent_configloaded = function () {
      me._tt_ht_node.logicBlock_visible();
      me._tt_ht_node.logicBlock_alpha();
    };
    me.ggEvent_hastouch = function () {
      me._tt_ht_node.logicBlock_visible();
    };
    me.hotspotTimerEvent = function () {
      setTimeout(function () {
        me.hotspotTimerEvent();
      }, 10);
      var hs = "";
      if (me._ht_node.ggParameter) {
        hs += parameterToTransform(me._ht_node.ggParameter) + " ";
      }
      hs +=
        "scale(" +
        ((1.0 / Math.tan(((player.getFov() / 2.0) * Math.PI) / 180.0)) * 0.7 +
          0) +
        ") ";
      me._ht_node.style.transform = hs;
    };
    me.hotspotTimerEvent();
    me.__div = me._ht_node;
  }
  function SkinHotspotClass_buttom_1(parentScope, hotspot) {
    var me = this;
    var flag = false;
    var hs = "";
    me.parentScope = parentScope;
    me.hotspot = hotspot;
    var nodeId = String(hotspot.url);
    nodeId = nodeId.charAt(0) == "{" ? nodeId.substr(1, nodeId.length - 2) : ""; // }
    me.ggUserdata = skin.player.getNodeUserdata(nodeId);
    me.ggUserdata.nodeid = nodeId;
    me.elementMouseDown = {};
    me.elementMouseOver = {};
    me.findElements = function (id, regex) {
      return skin.findElements(id, regex);
    };
    el = me._buttom_1 = document.createElement("div");
    el.ggId = "buttom_1";
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1, def: "" };
    el.ggVisible = true;
    el.className = "ggskin ggskin_hotspot ";
    el.ggType = "hotspot";
    hs = "";
    hs += "height : 0px;";
    hs += "left : 32px;";
    hs += "position : absolute;";
    hs += "top : 14px;";
    hs += "visibility : inherit;";
    hs += "width : 0px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "50% 50%";
    me._buttom_1.ggIsActive = function () {
      return player.getCurrentNode() == this.ggElementNodeId();
    };
    el.ggElementNodeId = function () {
      if (me.hotspot.url != "" && me.hotspot.url.charAt(0) == "{") {
        // }
        return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
      } else {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        } else {
          return player.getCurrentNode();
        }
      }
    };
    me._buttom_1.onclick = function (e) {
      player.triggerEvent("hsproxyclick", {
        id: me.hotspot.id,
        url: me.hotspot.url,
      });
    };
    me._buttom_1.ondblclick = function (e) {
      player.triggerEvent("hsproxydblclick", {
        id: me.hotspot.id,
        url: me.hotspot.url,
      });
    };
    me._buttom_1.onmouseover = function (e) {
      player.setActiveHotspot(me.hotspot);
      me.elementMouseOver["buttom_1"] = true;
      player.triggerEvent("hsproxyover", {
        id: me.hotspot.id,
        url: me.hotspot.url,
      });
    };
    me._buttom_1.onmouseout = function (e) {
      player.setActiveHotspot(null);
      me.elementMouseOver["buttom_1"] = false;
      player.triggerEvent("hsproxyout", {
        id: me.hotspot.id,
        url: me.hotspot.url,
      });
    };
    me._buttom_1.ggUpdatePosition = function (useTransition) {};
    me.__div = me._buttom_1;
  }
  function SkinHotspotClass_hs_gift(parentScope, hotspot) {
    var me = this;
    var flag = false;
    var hs = "";
    me.parentScope = parentScope;
    me.hotspot = hotspot;
    var nodeId = String(hotspot.url);
    nodeId = nodeId.charAt(0) == "{" ? nodeId.substr(1, nodeId.length - 2) : ""; // }
    me.ggUserdata = skin.player.getNodeUserdata(nodeId);
    me.ggUserdata.nodeid = nodeId;
    me.elementMouseDown = {};
    me.elementMouseOver = {};
    me.findElements = function (id, regex) {
      return skin.findElements(id, regex);
    };
    el = me._hs_gift = document.createElement("div");
    el.ggId = "hs_gift";
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1, def: "" };
    el.ggVisible = true;
    el.className = "ggskin ggskin_hotspot ";
    el.ggType = "hotspot";
    hs = "";
    hs += "cursor : pointer;";
    hs += "height : 0px;";
    hs += "left : 409px;";
    hs += "position : absolute;";
    hs += "top : 413px;";
    hs += "visibility : inherit;";
    hs += "width : 0px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "50% 50%";
    me._hs_gift.ggIsActive = function () {
      return player.getCurrentNode() == this.ggElementNodeId();
    };
    el.ggElementNodeId = function () {
      if (me.hotspot.url != "" && me.hotspot.url.charAt(0) == "{") {
        // }
        return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
      } else {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        } else {
          return player.getCurrentNode();
        }
      }
    };
    me._hs_gift.onclick = function (e) {
      player.triggerEvent("hsproxyclick", {
        id: me.hotspot.id,
        url: me.hotspot.url,
      });
    };
    me._hs_gift.ondblclick = function (e) {
      player.triggerEvent("hsproxydblclick", {
        id: me.hotspot.id,
        url: me.hotspot.url,
      });
    };
    me._hs_gift.onmouseover = function (e) {
      player.setActiveHotspot(me.hotspot);
      me.elementMouseOver["hs_gift"] = true;
      player.triggerEvent("hsproxyover", {
        id: me.hotspot.id,
        url: me.hotspot.url,
      });
    };
    me._hs_gift.onmouseout = function (e) {
      player.setActiveHotspot(null);
      me.elementMouseOver["hs_gift"] = false;
      player.triggerEvent("hsproxyout", {
        id: me.hotspot.id,
        url: me.hotspot.url,
      });
    };
    me._hs_gift.ggUpdatePosition = function (useTransition) {};
    el = me._img_gift = document.createElement("div");
    els = me._img_gift__img = document.createElement("img");
    els.className = "ggskin ggskin_external";
    hs = "";
    hs += "position: absolute;-webkit-user-drag:none;pointer-events:none;;";
    els.setAttribute("style", hs);
    els.onload = function () {
      me._img_gift.ggUpdatePosition();
    };
    el.appendChild(els);
    el.ggSubElement = els;
    hs = "";
    el.ggAltText = "";
    el.ggScrollbars = false;
    el.ggUpdateText = function () {
      me._img_gift.ggSubElement.setAttribute(
        "alt",
        player._(me._img_gift.ggAltText)
      );
      if (me._img_gift.ggUpdateImageInternal)
        me._img_gift.ggUpdateImageInternal();
    };
    el.ggUpdateImage = function () {
      me._img_gift.ggSubElement.style.width = "0px";
      me._img_gift.ggSubElement.style.height = "0px";
      me._img_gift.ggSubElement.src = "";
      me._img_gift.ggSubElement.src = me._img_gift.ggText;
    };
    el.ggText = basePath + "assets/icon/tuybien.gif";
    el.ggUpdateImage();
    els["ondragstart"] = function () {
      return false;
    };
    player.checkLoaded.push(els);
    el.ggUpdateText();
    el.ggId = "img_gift";
    el.ggDx = 0;
    el.ggDy = 0;
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1, def: "" };
    el.ggVisible = true;
    el.className = "ggskin ggskin_external ";
    el.ggType = "external";
    hs = "";
    hs += "border : 0px solid #000000;";
    hs += "cursor : pointer;";
    hs += "height : 80px;";
    hs += "left : calc(50% - ((80px + 0px) / 2) + 0px);";
    hs += "position : absolute;";
    hs += "top : calc(50% - ((80px + 0px) / 2) + 0px);";
    hs += "visibility : inherit;";
    hs += "width : 80px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style.transformOrigin = "50% 50%";
    me._img_gift.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return me.ggNodeId;
    };
    me._img_gift.ggUpdatePosition = function (useTransition) {
      var parentWidth = me._img_gift.clientWidth;
      var parentHeight = me._img_gift.clientHeight;
      var img = me._img_gift__img;
      var aspectRatioDiv = me._img_gift.clientWidth / me._img_gift.clientHeight;
      var aspectRatioImg = img.naturalWidth / img.naturalHeight;
      var currentWidth, currentHeight;
      if (aspectRatioDiv > aspectRatioImg) {
        currentHeight = parentHeight;
        currentWidth = Math.round(parentHeight * aspectRatioImg);
        img.style.width = "";
        img.style.height = parentHeight + "px";
      } else {
        currentWidth = parentWidth;
        currentHeight = Math.round(parentWidth / aspectRatioImg);
        img.style.width = parentWidth + "px";
        img.style.height = "";
      }
      if (
        !me._img_gift.ggScrollbars ||
        currentWidth < me._img_gift.clientWidth
      ) {
        img.style.right = "";
        img.style.left = "50%";
        img.style.marginLeft = "-" + currentWidth / 2 + "px";
      } else {
        img.style.right = "";
        img.style.left = "0px";
        img.style.marginLeft = "0px";
        me._img_gift.scrollLeft =
          currentWidth / 2 - me._img_gift.clientWidth / 2;
      }
      if (
        !me._img_gift.ggScrollbars ||
        currentHeight < me._img_gift.clientHeight
      ) {
        img.style.bottom = "";
        img.style.top = "50%";
        img.style.marginTop = "-" + currentHeight / 2 + "px";
      } else {
        img.style.bottom = "";
        img.style.top = "0px";
        img.style.marginTop = "0px";
        me._img_gift.scrollTop =
          currentHeight / 2 - me._img_gift.clientHeight / 2;
      }
    };
    me._hs_gift.appendChild(me._img_gift);
    me.__div = me._hs_gift;
  }
  me.addSkinHotspot = function (hotspot) {
    var hsinst = null;
    if (hotspot.skinid == "hs_gift") {
      hotspot.skinid = "hs_gift";
      hsinst = new SkinHotspotClass_hs_gift(me, hotspot);
      if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
        hotspotTemplates[hotspot.skinid] = [];
      }
      hotspotTemplates[hotspot.skinid].push(hsinst);
    } else if (hotspot.skinid == "buttom_1") {
      hotspot.skinid = "buttom_1";
      hsinst = new SkinHotspotClass_buttom_1(me, hotspot);
      if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
        hotspotTemplates[hotspot.skinid] = [];
      }
      hotspotTemplates[hotspot.skinid].push(hsinst);
    } else if (hotspot.skinid == "ht_node") {
      hotspot.skinid = "ht_node";
      hsinst = new SkinHotspotClass_ht_node(me, hotspot);
      if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
        hotspotTemplates[hotspot.skinid] = [];
      }
      hotspotTemplates[hotspot.skinid].push(hsinst);
    } else if (hotspot.skinid == "hs_sanpham") {
      hotspot.skinid = "hs_sanpham";
      hsinst = new SkinHotspotClass_hs_sanpham(me, hotspot);
      if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
        hotspotTemplates[hotspot.skinid] = [];
      }
      hotspotTemplates[hotspot.skinid].push(hsinst);
    } else if (hotspot.skinid == "hs_info") {
      hotspot.skinid = "hs_info";
      hsinst = new SkinHotspotClass_hs_info(me, hotspot);
      if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
        hotspotTemplates[hotspot.skinid] = [];
      }
      hotspotTemplates[hotspot.skinid].push(hsinst);
    } else if (hotspot.skinid == "ht_arrow") {
      hotspot.skinid = "ht_arrow";
      hsinst = new SkinHotspotClass_ht_arrow(me, hotspot);
      if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
        hotspotTemplates[hotspot.skinid] = [];
      }
      hotspotTemplates[hotspot.skinid].push(hsinst);
    } else {
      hotspot.skinid = "infoclick";
      hsinst = new SkinHotspotClass_infoclick(me, hotspot);
      if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
        hotspotTemplates[hotspot.skinid] = [];
      }
      hotspotTemplates[hotspot.skinid].push(hsinst);
    }
    return hsinst;
  };
  me.removeSkinHotspots = function () {
    hotspotTemplates = [];
  };
  player.addListener("changenode", function () {
    me.ggUserdata = player.userdata;
  });
  me.skinTimerEvent = function () {
    if (player.isInVR()) return;
    me.ggCurrentTime = new Date().getTime();
    me._timer_1.ggUpdateConditionTimer();
    if (me._timer_1.ggLastIsActive != me._timer_1.ggIsActive()) {
      me._timer_1.ggLastIsActive = me._timer_1.ggIsActive();
      if (me._timer_1.ggLastIsActive) {
        player.setVariableValue(
          "var_hs_ani",
          !player.getVariableValue("var_hs_ani")
        );
      } else {
      }
    }
  };
  player.addListener("timer", me.skinTimerEvent);
  me.addSkin();
  var style = document.createElement("style");
  style.type = "text/css";
  style.appendChild(
    document.createTextNode(
      ".ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px;}"
    )
  );
  document.head.appendChild(style);
  document.addEventListener("keyup", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      let activeElement = document.activeElement;
      if (activeElement.classList.contains("ggskin") && activeElement.onclick)
        activeElement.onclick();
    }
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      let activeElement = document.activeElement;
      if (
        activeElement.classList.contains("ggskin") &&
        activeElement.onmousedown
      )
        activeElement.onmousedown();
    }
  });
  document.addEventListener("keyup", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      let activeElement = document.activeElement;
      if (activeElement.classList.contains("ggskin") && activeElement.onmouseup)
        activeElement.onmouseup();
    }
  });
  me.skinTimerEvent();
  document.fonts.onloadingdone = () => {
    me.updateSize(me.divSkin);
  };
}
