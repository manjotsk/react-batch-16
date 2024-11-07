import { textAtom } from "../../atoms/text.atom";
import { useAtom } from "jotai";

const GlobalState = () => {
  const [, setText] = useAtom(textAtom);

  return (
    <div className="h-[30vh] m-10 border-red-500 border-8">
      <div>Hello Worlds from GlobalState</div>
      <input onChange={(e) => setText(e.target.value)} />
      <ComponentOne />
    </div>
  );
};

export default GlobalState;

export const ComponentOne = () => {
  return (
    <div className="border-blue-500 border-8">
      ComponentOne
      <div>
        <ComponentTwo />
      </div>
    </div>
  );
};

export const ComponentTwo = () => {
  return (
    <div className="border-yellow-500 border-8">
      ComponentTwo
      <ComponentThree />
    </div>
  );
};

export const ComponentThree = () => {
  return (
    <div className="border-green-500 border-8">
      ComponentThree
      <div>
        <ComponentFour />
      </div>
    </div>
  );
};

export const ComponentFour = () => {
  const [text] = useAtom(textAtom);

  return (
    <div className="border-purple-500 border-8">
      ComponentFour
      <div>{text}</div>
    </div>
  );
};
