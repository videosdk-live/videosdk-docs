!(function () {
  "use strict";
  !(function (e, t) {
    var r = e.amplitude || { _q: [], _iq: [] };
    if (r.invoked)
      e.console &&
        console.error &&
        console.error("Amplitude snippet has been loaded.");
    else {
      var n = function (e, t) {
          e.prototype[t] = function () {
            return (
              this._q.push({
                name: t,
                args: Array.prototype.slice.call(arguments, 0),
              }),
              this
            );
          };
        },
        s = function (e, t, r) {
          return function (n) {
            e._q.push({
              name: t,
              args: Array.prototype.slice.call(r, 0),
              resolve: n,
            });
          };
        },
        o = function (e, t, r) {
          e[t] = function () {
            if (r)
              return {
                promise: new Promise(
                  s(e, t, Array.prototype.slice.call(arguments))
                ),
              };
          };
        },
        i = function (e) {
          for (var t = 0; t < m.length; t++) o(e, m[t], !1);
          for (var r = 0; r < y.length; r++) o(e, y[r], !0);
        };
      r.invoked = !0;
      var a = t.createElement("script");
      (a.type = "text/javascript"),
        (a.integrity =
          "sha384-PPfHw98myKtJkA9OdPBMQ6n8yvUaYk0EyUQccFSIQGmB05K6aAMZwvv8z50a5hT2"),
        (a.crossOrigin = "anonymous"),
        (a.async = !0),
        (a.src =
          "https://cdn.amplitude.com/libs/marketing-analytics-browser-0.3.2-min.js.gz"),
        (a.onload = function () {
          console.log("LOAD COMPLETE");
          e.amplitude.runQueuedFunctions ||
            console.log("[Amplitude] Error: could not load SDK");
        });
      var c = t.getElementsByTagName("script")[0];
      c.parentNode.insertBefore(a, c);
      for (
        var u = function () {
            return (this._q = []), this;
          },
          p = [
            "add",
            "append",
            "clearAll",
            "prepend",
            "set",
            "setOnce",
            "unset",
            "preInsert",
            "postInsert",
            "remove",
            "getUserProperties",
          ],
          l = 0;
        l < p.length;
        l++
      )
        n(u, p[l]);
      r.Identify = u;
      for (
        var d = function () {
            return (this._q = []), this;
          },
          v = [
            "getEventProperties",
            "setProductId",
            "setQuantity",
            "setPrice",
            "setRevenue",
            "setRevenueType",
            "setEventProperties",
          ],
          f = 0;
        f < v.length;
        f++
      )
        n(d, v[f]);
      r.Revenue = d;
      var m = [
          "getDeviceId",
          "setDeviceId",
          "getSessionId",
          "setSessionId",
          "getUserId",
          "setUserId",
          "setOptOut",
          "setTransport",
          "reset",
        ],
        y = [
          "init",
          "add",
          "remove",
          "track",
          "logEvent",
          "identify",
          "groupIdentify",
          "setGroup",
          "revenue",
          "flush",
        ];
      i(r),
        (r.createInstance = function () {
          var e = r._iq.push({ _q: [] }) - 1;
          return i(r._iq[e]), r._iq[e];
        }),
        (e.amplitude = r);
    }
  })(window, document);
})();
let name = "user=";
let decodedCookie = decodeURIComponent(document.cookie);
let ca = decodedCookie.split(";");
let user;
for (let i = 0; i < ca.length; i++) {
  let c = ca[i];
  while (c.charAt(0) == " ") {
    c = c.substring(1);
  }
  if (c.indexOf(name) == 0) {
    user = JSON.parse(c.substring(name.length, c.length));
    break;
  }
}
window.amplitude.init(
  "56315692e04ea10f7c60e0574631d820",
  user?.id != null ? user.id : undefined,
  {
    pageViewTracking: {
      trackHistoryChanges: "all",
    },
    trackingOptions: {
      deviceManufacturer: true,
      deviceModel: true,
      ipAddress: true,
      language: true,
      osName: true,
      osVersion: true,
      platform: true,
    },
    attribution: {
      trackPageViews: true,
    },
    logLevel: 4,
  }
);
