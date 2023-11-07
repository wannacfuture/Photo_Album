import { Draggable, Droppable } from "react-beautiful-dnd";

import { ImageType } from "@/pages";
import { CustomImage } from "@/components/CustomImage";

interface ImageBoxProps {
  photos: ImageType[];
}
export const ImageBox = ({ photos }: ImageBoxProps) => {
  return (
    <Droppable droppableId="albumDroppable" isDropDisabled>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          className="flex flex-wrap gap-4 justify-center"
        >
          {photos.map((photo, index) => (
            <Draggable
              key={`img-draggable-${photo.id}`}
              draggableId={`img-draggable-${photo.id}`}
              index={index}
            >
              {(provided, snapshot) => (
                <>
                  <article
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <CustomImage
                      src={photo.url}
                      alt={photo.title}
                      width={200}
                      height={200}
                    />
                  </article>
                  {snapshot.isDragging && (
                    <div className="!w-[200px] !h-[200px]"></div>
                  )}
                </>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};
