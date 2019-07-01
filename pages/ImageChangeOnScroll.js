import React from "react";
import ImageToggleOnScroll from "../src/ImageToggleOnScroll"

const ImageChangeOnScroll = () => {
    return (
        <div>
            <ImageToggleOnScroll primaryImg="../static/javascript-plain.svg" secondaryImg="../static/javascript-yellow.svg" />
            <br />
            <ImageToggleOnScroll primaryImg="../static/nodejs-original-wordmark.svg" secondaryImg="../static/nodejs-plain-wordmark.svg" />
        </div>
    )

}

export default ImageChangeOnScroll;