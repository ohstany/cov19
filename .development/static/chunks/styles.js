(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./src/global.scss":
/*!*************************!*\
  !*** ./src/global.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"clickable":"clickable","title":"title","description":"description","card":"card","mainBlock":"mainBlock","block":"block","activityArea":"activityArea","makeMark":"makeMark","popup":"popup","mapArea":"mapArea","form":"form","act":"act","path1":"path1","active":"active","news":"news","activity":"activity","acts":"acts","local":"local","bb":"bb","b2":"b2","b3":"b3","author":"author","src":"src","comments":"comments","cm":"cm","chead":"chead","imgb":"imgb","subscribe":"subscribe","selected":"selected","sel":"sel","inpf":"inpf","phone":"phone","email":"email","socials":"socials","share-links":"share-links","skeleton":"skeleton","skeleton-content":"skeleton-content","skeleton-title":"skeleton-title","skeleton-paragraph":"skeleton-paragraph","skeleton-loading":"skeleton-loading"};;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1583301605113");
          });
      }
    }
  

/***/ })

}]);
//# sourceMappingURL=styles.js.map