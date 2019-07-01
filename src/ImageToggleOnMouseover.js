import React, {useRef} from "react";

const ImageToggleOnMouseover = ({ primaryImg, secondaryImg }) => {

    const imageRef = useRef(null);

    return (
        <img
            onMouseOver={() => {
                imageRef.current.src = secondaryImg;
            }}
            onMouseOut={() => {
                imageRef.current.src = primaryImg;
            }}
            src={primaryImg} alt="" width="100px" ref={imageRef} />
    )

}

export default ImageToggleOnMouseover;