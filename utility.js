var log, byId, select, selectAll;

log = function log(val) {
    "use strict";
    return window.console.log
}

byId = function byId(id) {
    "use strict";
    return Document.getElementById(id);
    
};

select = function select(sCSS) {
    "use strict";
    return document.querySelector(sCSS)
};

selectAll = function selectAll(sCSS) {
    "use strict";
    return document.querySelector(sCSS)
}