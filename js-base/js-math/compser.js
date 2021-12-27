// const compose =
//   (...fns) =>
//   (arg) =>
//     fns.reduce((composed, f) => f(composed), arg);

const compose = (...fns) =>{
  return function(...arg){
    fns.reduce((composed, f) => f(composed), arg);
  }
}

const first = () => console.clear();
const second = () => {
  return "first str";
};

const third = (input) => {
  return input + ", second input";
};
const fourth = (input) => {
  console.log(input);
};

const funcs = () =>
  compose(
    //	first,
    second,
    third,
    fourth
  );


const t = () => {
  let f = funcs();
  f();
};

t();
