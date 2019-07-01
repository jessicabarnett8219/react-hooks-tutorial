import React from "react";
import ImageToggleOnMouseover from "../src/ImageToggleOnMouseover"

const ImageChange = () => {
    return (
        <div>
            <ImageToggleOnMouseover primaryImg="../static/javascript-plain.svg" secondaryImg="../static/javascript-yellow.svg" />
            <br />
            <ImageToggleOnMouseover primaryImg="../static/nodejs-original-wordmark.svg" secondaryImg="../static/nodejs-plain-wordmark.svg" />
        </div>
    )

}

export default ImageChange;