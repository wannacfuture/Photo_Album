import { Droppable } from "react-beautiful-dnd";

import { ImageType } from "@/pages";
import { CustomImage } from "@/components/CustomImage";

interface SelectedImageBoxProps {
  photos: ImageType[];
  handleRemove: (id: string) => void;
}

export const SelectedImageBox = ({
  photos,
  handleRemove,
}: SelectedImageBoxProps) => {
  return (
    <Droppable droppableId="selectedImageDroppable">
      {(provided) => (
        <section
          ref={provided.innerRef}
          {...provided.droppableProps}
          className="w-full h-full overflow-y-auto"
        >
          <div className="mb-5">
            Album Generator(Click the image to remove it)
          </div>
          <div className="flex flex-row">
            <div className="w-[50%] flex flex-wrap flex-row gap-2 h-fit">
              {photos.map((photo, ind) => (
                <article className="h-fit relative" key={ind}>
                  <CustomImage
                    src={photo.url}
                    alt={photo.title}
                    width={60}
                    height={60}
                  />
                  <button
                    className="absolute opacity-0 hover:opacity-50 bg-[rgba(0,0,0)] top-0 left-0 w-full h-full flex justify-center items-center cursor-pointer text-white"
                    onClick={() => handleRemove(photo.id)}
                  >
                    <b>Remove</b>
                  </button>
                </article>
              ))}
            </div>
            <ul className="w-[50%] flex flex-col gap-2">
              {photos.map((photo, index) => (
                <li key={index}>{`${index + 1}. ${photo.title}`}</li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </Droppable>
  );
};
