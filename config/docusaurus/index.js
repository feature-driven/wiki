const { announcementBar } = require("./announcementBar");
const { navbar } = require("./navbar");
const { footer } = require("./footer");
const consts = require("./consts");
const { metadata } = require("./metadata");
const { i18n } = require("./i18n");
const { presets, plugins, algolia, metrics } = require("./extensions");

module.exports = {
    announcementBar,
    navbar,
    footer,
    consts,
    metadata,
    i18n,
    presets,
    plugins,
    algolia,
    metrics,
};
