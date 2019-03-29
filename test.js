function looper(n) {
  for (var i = 0; i < n; i++) {
    console.log("hi");
  }
}

function squareLooper(n) {
  for (var i = 10; i < n * n; i++) {
    console.log("goodbye");
  }
}


function bigO(functionBody, functionName) {
  var functionLines = [];
  var lineCounts = [];
  var functionAsString = functionBody.toString().replace("console.log", "");
  // eval("var x = " + functionName + ".toString().split('\n')");
  var x = functionAsString.split('\n');
  // console.log(x);
  for (var i = 0; i < x.length; i++) {
    lineCounts.push(0);
  }
  for (var i2 = 0; i2 < x.length; i2++) {
    functionLines.push(x[i2]);
    functionLines.push("lineCounts[x.indexOf('" + x[i2] + "')] += 1;");
  }
  // console.log(functionLines);
  eval(functionLines.join("") + functionName + "(10000)");
  // console.log(lineCounts);
  var mostSteps = Math.max(...lineCounts);
  if (mostSteps / 10000 > 0.8 && mostSteps / 10000 < 1.2) {
    return "n";
  } else if (mostSteps / 100 > 0.8 && mostSteps / 100 < 1.2) {
    return "sqrt(n)";
  } else if (mostSteps / 100000000 > 0.8 && mostSteps / 100000000 < 1.2) {
    return "n ^ 2";
  }
}

console.log(bigO(looper, "looper"));
console.log(bigO(squareLooper, "squareLooper"));
