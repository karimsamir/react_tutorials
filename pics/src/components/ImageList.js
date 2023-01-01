import ImageShow from "./ImageShow";
import "./ImageList.css";

function ImageList({ images })
{

    const renederedImages = images.map((image) =>
    {
        return <ImageShow key={image.id} image={image} />
    });

    return (
        <div className="image-list">
            {renederedImages}
        </div>
    )
}

export default ImageList;