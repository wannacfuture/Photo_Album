import { useEffect, useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

import { ImageType } from "@/pages";
import { ImageBox } from "@/components/ImageBox";
import { SelectedImageBox } from "@/components/SelectedImageBox";

const Album = ({ photos }: { photos: ImageType[] }) => {
  const [selectedImages, setSelectedImages] = useState<ImageType[]>([]);
  const [winReady, setWinReady] = useState(false);

  useEffect(() => {
    setWinReady(true);
  }, []);

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    const selectedPhoto = photos[result.source.index];
    const duplicatedPhotos = selectedImages.filter(
      (image) => image.id === selectedPhoto.id
    );

    if (duplicatedPhotos.length === 0) {
      setSelectedImages([...selectedImages, photos[result.source.index]]);
    }
  };

  const onHandleRemove = (id: string) => {
    setSelectedImages([...selectedImages.filter((image) => image.id !== id)]);
  };

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        {winReady && (
          <main className="flex flex-col sm:flex-row space-x-0 sm:space-x-2">
            <section className="flex justify-center w-[95vw] h-[calc(100vh-470px)] md:h-full overflow-y-auto sm:overflow-visible sm:w-[65vw] sm:h-fit">
              <ImageBox photos={photos} />
            </section>
            <aside className="sticky right-0 w-full mt-5 sm:mt-0 top-0 sm:h-[calc(100vh-50px)] p-5 bg-slate-300 h-[300px] sm:w-[35vw]">
              <SelectedImageBox
                photos={selectedImages}
                handleRemove={onHandleRemove}
              />
            </aside>
          </main>
        )}
      </DragDropContext>
    </>
  );
};

export default Album;
