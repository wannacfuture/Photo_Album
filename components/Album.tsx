import { useEffect, useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { ImageType } from "@/pages";

import { ImageBox } from "./ImageBox";
import { SelectedImageBox } from "./SelectedImageBox";

const Album = ({ photos }: { photos: ImageType[] }) => {
  const [selectedImages, setSelectedImages] = useState<ImageType[]>([]);
  const [winReady, setWinReady] = useState(false);

  useEffect(() => {
    setWinReady(true);
  }, []);

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    const selectedPhoto = photos[result.source.index];
    selectedImages.filter((image) => image.id === selectedPhoto.id).length ===
      0 && setSelectedImages([...selectedImages, photos[result.source.index]]);
  };

  const onHandleRemove = (id: string) => {
    setSelectedImages([...selectedImages.filter((image) => image.id !== id)]);
  };

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        {winReady && (
          <>
            <div className="flex justify-center w-[95vw] h-[calc(100vh-470px)] overflow-y-auto sm:w-[65vw] sm:h-fit">
              <ImageBox photos={photos} />
            </div>
            <div className="fixed right-0 w-[100vw] sm:top-[20px] sm:h-[calc(100vh-50px)] p-5 bg-slate-300 h-[300px] bottom-0 sm:w-[35vw]">
              <SelectedImageBox
                photos={selectedImages}
                handleRemove={onHandleRemove}
              />
            </div>
          </>
        )}
      </DragDropContext>
    </>
  );
};

export default Album;
