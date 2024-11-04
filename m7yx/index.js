var conf = {
    v: "1.0.0.0",
    maintaining: false,
    index: ""
}

function go(v, prefix) {
    window.location.href = getUrl(v, prefix)
}

function getUrl(v, prefix) {
    if (conf.maintaining) {
        return prefix + "pages/maintaining.html";
    }

    if (v != conf.v) {
        return prefix + "pages/update.html";
    }

    //return conf.index;
    return prefix + "pages/index.html";
}