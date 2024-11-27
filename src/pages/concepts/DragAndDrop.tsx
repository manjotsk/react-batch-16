import {
  DndContext,
  DragOverlay,
  PointerSensor,
  useDraggable,
  useDroppable,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { useState } from "react";

const pointerSensor = PointerSensor;

function Shiddi(props) {
  const wheatDraggable = useDraggable({
    id: props.wheat.id,
    data: props.wheat,
  });
  return (
    <div
      {...wheatDraggable.attributes}
      {...wheatDraggable.listeners}
      ref={wheatDraggable.setNodeRef}
      className="absolute bg-red-500 w-20"
      style={{
        top: props.wheat.placement.top,
        left: props.wheat.placement.left,
        transform: CSS.Translate.toString(wheatDraggable.transform),
      }}
    >
      <span className="top-4 z-50">{props.wheat.shiddiNumber}</span>
      <img id={props.wheat.id} src="/wheat.png " className="h-60 w-10" />
    </div>
  );
}

function Bucket(props) {
  const droppableBucket = useDroppable({
    id: "bucket",
  });

  console.log("droppableBucket", droppableBucket);

  return (
    <div
      ref={droppableBucket.setNodeRef}
      className="w-[32rem] h-[32rem] bg-blue-500 rounded-full"
    >
      <div className="relative container">
        {props.bucketWheats.map((wheat: any) => (
          <div
            key={wheat.id}
            className="absolute"
            style={{
              top: wheat.placement.top,
              left: wheat.placement.left,
            }}
          >
            <span className="top-0 ">{wheat.id}</span>
            <img id={wheat.id} src="/wheat.png " className="h-60 " />
          </div>
        ))}
      </div>
    </div>
  );
}

const DragAndDrop = () => {
  const [fieldWheats, setFieldWheats] = useState([
    {
      id: "wheat1",
      shiddiNumber: 1,
      placement: {
        top: "13rem",
        left: "6rem",
      },
    },
    {
      id: "wheat2",
      shiddiNumber: 2,
      placement: {
        top: "13rem",
        left: "9rem",
      },
    },
    {
      id: "wheat3",
      shiddiNumber: 3,
      placement: {
        top: "13rem",
        left: "12rem",
      },
    },
  ]);
  const [bucketWheats, setBucketWheats] = useState([]);
  const sensor = useSensors(useSensor(pointerSensor));

  return (
    <DndContext
      sensors={sensor}
      onDragStart={(e) => {
        console.log("drag start", e.active.data.current.id);
      }}
      onDragEnd={(e) => {
        setFieldWheats((prev) =>
          prev.filter((wheat) => wheat.id !== e.active.data.current.id)
        );
        setBucketWheats((prev) => [...prev, e.active.data.current]);
      }}
    >
      <div className="h-full bg-red-500">
        <div className="flex items-center justify-around h-full">
          <div className="relative flex">
            {fieldWheats.map((wheat) => (
              <Shiddi key={wheat.id} wheat={wheat}></Shiddi>
            ))}

            <img src="/farm-house.png" alt="placeholder" className="h-screen" />
          </div>
          <div className="flex flex-col items-center justify-center">
            {/* circle */}
            <Bucket bucketWheats={bucketWheats}></Bucket>
          </div>
        </div>
      </div>
    </DndContext>
  );
};

export default DragAndDrop;
