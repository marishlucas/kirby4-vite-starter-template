const basicLightbox = (function() {
  return function i(c, u, a) {
    function s(n, e) {
      if (!u[n]) {
        if (!c[n]) {
          var t = "function" == typeof require && require;
          if (!e && t) return t(n, !0);
          if (l) return l(n, !0);
          var o = new Error("Cannot find module '" + n + "'");
          throw o.code = "MODULE_NOT_FOUND", o;
        }
        var r = u[n] = { exports: {} };
        c[n][0].call(r.exports, function(e) {
          return s(c[n][1][e] || e);
        }, r, r.exports, i, c, u, a);
      }
      return u[n].exports;
    }
    for (var l = "function" == typeof require && require, e = 0; e < a.length; e++) s(a[e]);
    return s;
  }({
    1: [function(e, n, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      t.create = t.visible = void 0;

      var u = function(e) {
        var n = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
          t = document.createElement("div");
        return t.innerHTML = e.trim(), !0 === n ? t.children : t.firstChild;
      };

      var a = function(e, n) {
        var t = e.children;
        return 1 === t.length && t[0].tagName === n;
      };

      var c = function(e) {
        return null != (e = e || document.querySelector(".basicLightbox")) && !0 === e.ownerDocument.body.contains(e);
      };

      t.visible = c;

      t.create = function(e, o) {
        var r = function(e, n) {
          var t = u(`
            <div class="basicLightbox ${n.className}">
              <div class="basicLightbox__placeholder" role="dialog"></div>
            </div>
          `);

          var o = t.querySelector(".basicLightbox__placeholder");
          e.forEach(function(e) {
            return o.appendChild(e);
          });

          var r = a(o, "IMG");
          var i = a(o, "VIDEO");
          var c = a(o, "IFRAME");

          if (r === !0) t.classList.add("basicLightbox--img");
          if (i === !0) t.classList.add("basicLightbox--video");
          if (c === !0) t.classList.add("basicLightbox--iframe");

          return t;
        }(e = function(e) {
          var n = "string" == typeof e;
          var t = e instanceof HTMLElement == 1;

          if (!1 === n && !1 === t) throw new Error("Content must be a DOM element/node or string");
          return !0 === n ? Array.from(u(e, !0)) : e.tagName === "TEMPLATE" ? [e.content.cloneNode(!0)] : Array.from(e.children);
        }(e), o = function() {
          var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};

          if (null == (e = Object.assign({}, e)).closable && (e.closable = !0),
            null == e.className && (e.className = ""),
            null == e.onShow && (e.onShow = function() { }),
            null == e.onClose && (e.onClose = function() { }),
            "boolean" != typeof e.closable) throw new Error("Property `closable` must be a boolean");

          if ("string" != typeof e.className) throw new Error("Property `className` must be a string");
          if ("function" != typeof e.onShow) throw new Error("Property `onShow` must be a function");
          if ("function" != typeof e.onClose) throw new Error("Property `onClose` must be a function");

          return e;
        }(o));

        var n = function(e) {
          return !1 !== o.onClose(i) && (t = function() {
            if ("function" == typeof e) return e(i);
          }, (n = r).classList.remove("basicLightbox--visible"), setTimeout(function() {
            return !1 === c(n) || n.parentElement.removeChild(n), t();
          }, 410), !0);

          var n, t;
        };

        if (!0 === o.closable) {
          r.addEventListener("click", function(e) {
            if (e.target === r) n();
          });
        }

        var i = {
          element: function() { return r },
          visible: function() { return c(r) },
          show: function(e) {
            return !1 !== o.onShow(i) && (n = r, t = function() {
              if ("function" == typeof e) return e(i);
            }, document.body.appendChild(n), setTimeout(function() {
              requestAnimationFrame(function() {
                return n.classList.add("basicLightbox--visible"), t();
              });
            }, 10), !0);

            var n, t;
          },
          close: n
        };

        return i;
      }
    }, {}]
  }, {}, [1])(1);

  return t;
})();

export default basicLightbox;

