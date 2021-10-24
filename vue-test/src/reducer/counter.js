const counterReduce = (data) => {
  function plusEvent() {
    return data.result + 1;
  }

  function minusEvent() {
    console.log("1231")
    return data.result - 1;
  }

  return {
    plusEvent,
    minusEvent,
  };
};

export default counterReduce;
