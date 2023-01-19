import { Box } from "@mui/system";
import React from "react";
import { useState, useRef, useCallback } from "react";
import usePhotos from "../hooks/usePhotos";
import Photo from "./Photo";

const Posts = () => {
  const [pageNum, setPageNum] = useState(1);
  const { isLoading, isError, error, results, hasNextPage } =
    usePhotos(pageNum);

  const intObserver = useRef();
  const lastPhotoRef = useCallback(
    (photo) => {
      if (isLoading) return;

      if (intObserver.current) intObserver.current.disconnect();

      intObserver.current = new IntersectionObserver((photos) => {
        if (photos[0].isIntersecting && hasNextPage) {
          // console.log('We are near the last photos')
          setPageNum((prev) => prev + 1);
        }
      });

      if (photo) intObserver.current.observe(photo);
    },
    [isLoading, hasNextPage]
  );

  const content = results.map((photo, i) => {
    if (results.length === i + 1) {
      return <Photo ref={lastPhotoRef} key={photo.id} photo={photo} />;
    }
    return <Photo key={photo.id} photo={photo} />;
  });
  return (
    <>
      {isError && <Box>Error: {error.message}</Box>}
      {isLoading && <Box>Loading More Posts...</Box>}
      {content}
    </>
  );
};

export default Posts;
