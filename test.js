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

function primeChecker(n) {
  if (n <= 2) {
    return n === 2;
  }
  for (var i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function doubler(n) {
  var i = 1;
  while (i < n) {
    i *= 2;
  }
}

function printer(n) {
  console.log(n);
}


function bigO(functionBody, functionName) {
  var tests = ["1000", "1001", "1002", "1003", "1004", "1005", "1006", "1007", "1008", "1009", "1010", "1011", "1012", "1013"];
  var functionLines = [];
  var functionAsString = functionBody.toString().replace("console.log", "");
  var x = functionAsString.split('\n');
  // console.log(x);
  for (var i2 = 0; i2 < x.length; i2++) {
    functionLines.push(x[i2]);
    functionLines.push("lineCounts[x.indexOf('" + x[i2] + "')] += 1;");
  }
  var mostStepsForTestNs = [];

  tests.forEach(function(testN) {
    var lineCounts = [];
    for (var i = 0; i < x.length; i++) {
      lineCounts.push(0);
    }
    eval(functionLines.join("") + functionName + "(" + testN + ")");
    mostStepsForTestNs.push(Math.max(...lineCounts));
  });

  var mostSteps = Math.max(...mostStepsForTestNs);
  if (mostSteps / 1000 > 0.8 && mostSteps / 10000 < 1.2) {
    return "n";
  } else if (mostSteps / 31.6 > 0.8 && mostSteps / 100 < 1.2) {
    return "sqrt(n)";
  } else if (mostSteps / 1000000 > 0.8 && mostSteps / 100000000 < 1.2) {
    return "n ^ 2";
  } else if (mostSteps / 9.97 > 0.8 && mostSteps / 9.97 < 1.2) {
    return "log n";
  } else {
    return "1";
  }
}

console.log(bigO(looper, "looper"));
console.log(bigO(primeChecker, "primeChecker"));
console.log(bigO(squareLooper, "squareLooper"));
console.log(bigO(doubler, "doubler"));
console.log(bigO(printer, "printer"));
