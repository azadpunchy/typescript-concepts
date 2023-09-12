interface Coordinate {
  x: number;
  y: number;
}

function parseCoordinateFromObject(obj: Coordinate): Coordinate {
  return {
    ...obj,
  };
}

function parseCoordinateFromNumbers(x: number, y: number): Coordinate {
  return {
    x,
    y,
  };
}

function parseCoordinate(obj: Coordinate): Coordinate;
function parseCoordinate(str: string): Coordinate;
function parseCoordinate(x: number, y: number): Coordinate;
function parseCoordinate(arg1: unknown, arg2?: unknown): Coordinate {
  let coord = {
    x: 0,
    y: 0,
  };

  if (typeof arg1 === "string") {
    arg1.split(",").forEach((elem) => {
      const [key, value] = elem.split(":");
      coord[key as "x" | "y"] = Number(value);
    });
  } else if (typeof arg1 === "object") {
    coord = {
      ...(arg1 as Coordinate),
    };
  } else {
    coord = {
      x: arg1 as number,
      y: arg2 as number,
    };
  }

  return coord;
}

console.log(parseCoordinate(454, 38343383));
console.log(parseCoordinate({ x: 454, y: 38383 }), "from obj");
console.log(parseCoordinate("x:5454,y:23423"), "from string");
