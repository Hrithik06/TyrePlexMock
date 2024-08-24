import React, { useEffect, useState } from "react";
import photosData from "../../utils/sellerPhotos.json";

const PhotosContainer = () => {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    setPhotos(photosData);
  }, []);
  return (
    <div className="hideHorizontalScrollBar flex gap-4 pb-2">
      {photos?.map((photo) => (
        <img
          src={photo?.photoUrl}
          key={photo?.photoUrl}
          alt="seller-photo"
          className=" xl:w-full md:w-3/4 h-44 rounded"
        />
      ))}
    </div>
  );
};

export default PhotosContainer;
