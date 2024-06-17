import React from "react";
import { useDrag, useDrop } from "react-dnd";
// import galleryList from "../../../data.js";
const Card = ({ src, title, id, index, moveImage }) => {
    const ref = React.useRef(null);
    const [, drop] = useDrop({
      accept: "image",
      drop: (item, monitor) => {
        if (!ref.current) {
          return;
        }
        const dragIndex = item.index;
        const hoverIndex = index;
        if (dragIndex === hoverIndex) {
          return;
        }
        const hoverBoundingRect = ref.current?.getBoundingClientRect();
        const hoverMiddleY =
          (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
        const clientOffset = monitor.getClientOffset();
        const hoverClientY = clientOffset.y - hoverBoundingRect.top;
        // if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        //   return;
        // }
        // if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        //   return;
        // }
        moveImage(dragIndex, hoverIndex);
        item.index = hoverIndex;
      }
    });
    const [{ isDragging }, drag] = useDrag({
      type: "image",
      item: () => {
        return { id, index };
      },
      collect: (monitor) => {
        return {
          isDragging: monitor.isDragging()
        };
      }
    });
    const opacity = isDragging ? 0 : 1;
    drag(drop(ref));
    return (
      <div ref={ref} style={{ opacity }}>
        <button className="btn">{title}</button>
      </div>
    );
  };

const DraggableSections = ({sectionArray,setSectionArray}) => {
    // const [images, setImages] = React.useState(galleryList);
  const moveImage = React.useCallback((dragIndex, hoverIndex) => {
    console.log(dragIndex,hoverIndex);

    setSectionArray((prevCards) => {
      const clonedCards = [...prevCards];

    let temp = clonedCards[dragIndex]
    clonedCards[dragIndex] = clonedCards[hoverIndex];
    clonedCards[hoverIndex] = temp;
   
    
      return clonedCards;
    });
  }, []);

  return (
    
      <div className="grid grid-cols-2 gap-4">
        {React.Children.toArray(
            sectionArray.map((section, index) => (
          <Card
            src=""
            title={section}
            id={index}
            index={index}
            moveImage={moveImage}
          />
        ))
      )}
      </div>

  );
};

export default DraggableSections;