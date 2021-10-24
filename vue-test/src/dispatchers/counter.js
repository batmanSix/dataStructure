import counterReduce from "../reducer/counter";
import { PLUS, MINUS } from "../action/actionType.js";
export default (ctx) => {
  const { plusEvent, minusEvent } = counterReduce(ctx.$data);
  return function(type, ...args) {
    console.log(...args,"type")
    switch (type) {
      case PLUS:
        ctx.result = plusEvent(...args);
        break;
      case MINUS:
        ctx.result = minusEvent(...args);
        break;
      default:
        break;
    }
  };
};
