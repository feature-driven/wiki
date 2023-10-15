const { createSVGText } = require("./font");
const { Logger } = require("./utils");

function createLayoutLayers(doc, layout, previewFont, textWidthLimit) {
    /* Check for all layers names exist in doc fields */
    if (layout.some((layer) => !doc[layer.name])) {
        Logger.err(`Wrong template config.`);
        return;
    }

    return layout.map((layer) => {
        const layoutOptions = {
            fontSize: layer.fontSize,
            fill: layer.fill,
            stroke: layer.stroke,
        };

        return {
            input: Buffer.from(
                createSVGText(
                    previewFont,
                    doc[layer.name],
                    layoutOptions,
                    textWidthLimit,
                ),
            ),
            top: layer.top,
            left: layer.left,
        };
    });
}

module.exports = { createLayoutLayers };
