const func3 = () => {
  return "func3 string yoyoyo";
};

const func2 = () => {
  return func3;
};

const func1 = () => {
  return func2;
};
const val = func1()()();
console.log(val);
