import { ImageType } from "@/pages";
import Image from "next/image";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { CustomImage } from "./CustomImage";

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
          className="flex flex-wrap gap-4"
        >
          {photos.map((photo, index) => (
            <Draggable
              key={`img-draggable-${photo.id}`}
              draggableId={`img-draggable-${photo.id}`}
              index={index}
            >
              {(provided, snapshot) => (
                <>
                  <div
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
                  </div>
                  {snapshot.isDragging && (
                    <div className="!w-[200px] !h-[150px]"></div>
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
