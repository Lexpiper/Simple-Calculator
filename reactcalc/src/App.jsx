import { useState } from "react";

function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops = ["/", "*", "+", "-", "."];

  const updateCalc = (value) => {
    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }

    setCalc(calc + value);

    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  };

  const handleClr = () => {
    setCalc("");
    setResult("");
  };

  const createDigits = () => {
    const digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(
        <button
          className="bg-black appearance-none flex-1 basis-[33.333%] max-w-[33.333%]   hover:opsacity-[0.9] border-none outline-none text-white text-xl p-4 cursor-pointer transition-[0.4s] hover:bg-slate-700"
          onClick={() => updateCalc(i.toString())}
        >
          {i}
        </button>
      );
    }
    return digits;
  };

  const calculate = () => {
    setCalc(eval(calc).toString());
  };

  const handleDel = () => {
    if (calc == "") {
      return;
    }
    const value = calc.slice(0, -1);
    setCalc(value);
  };
  return (
    <div className="App flex h-screen items-center justify-center bg-[url(https://media.istockphoto.com/id/170958625/photo/dark-blue-grunge-background.jpg?b=1&s=170667a&w=0&k=20&c=UV13_w89rM2RJbG-2l-aSD70qP6i3zkLD9QtFZUQMzA=)] p-4">
      <div className="calculator w-full max-w-[400px] bg-[#eee] rounded-2xl overflow-hidden shadow-md">
        <div className="display p-8 text-right bg-black text-white text-lg font-[400] shadow-lg">
          {result ? (
            <span className="text-sm text-[#888] italic">({result})</span>
          ) : (
            ""
          )}
          &nbsp;
          {calc || 0}
        </div>
        <div className="opseratora flex ">
          <button
            className=" appearance-none flex-1 0% bg-pink-600 hover:opsacity-[0.9] hover:bg-pink-700 border-none outline-none text-white text-xl p-4 cursor-pointer transition-[0.4s] font-bold"
            onClick={() => handleClr()}
          >
            Clr
          </button>
          <button
            className=" appearance-none flex-1 0% bg-pink-600 hover:opsacity-[0.9] hover:bg-pink-700 border-none outline-none text-white text-xl p-4 cursor-pointer transition-[0.4s] font-bold"
            onClick={() => updateCalc("/")}
          >
            /
          </button>
          <button
            className=" appearance-none flex-1 0% bg-pink-600 hover:opsacity-[0.9] hover:bg-pink-700 border-none outline-none text-white text-xl p-4 cursor-pointer transition-[0.4s] font-bold"
            onClick={() => updateCalc("*")}
          >
            *
          </button>
          <button
            className=" appearance-none flex-1 0% bg-pink-600 hover:opsacity-[0.9] hover:bg-pink-700 border-none outline-none text-white text-xl p-4 cursor-pointer transition-[0.4s] font-bold"
            onClick={() => updateCalc("+")}
          >
            +
          </button>
          <button
            className=" appearance-none flex-1 0% bg-pink-600 hover:opsacity-[0.9] hover:bg-pink-700 border-none outline-none text-white text-xl p-4 cursor-pointer transition-[0.4s] font-bold"
            onClick={() => updateCalc("-")}
          >
            -
          </button>
          <button
            className=" appearance-none flex-1 0% bg-pink-600 hover:opsacity-[0.9] hover:bg-pink-700 border-none outline-none text-white text-xl p-4 cursor-pointer transition-[0.4s] font-bold"
            onClick={() => handleDel()}
          >
            Del
          </button>
        </div>
        <div className="digits flex flex-wrap">
          {createDigits()}
          <button
            className="bg-black appearance-none   hover:bg-slate-700 flex-1 basis-[33.333%] max-w-[33.333%]   hover:opsacity-[0.9] border-none outline-none text-white text-xl p-4 cursor-pointer transition-[0.4s]"
            onClick={() => updateCalc("0")}
          >
            0
          </button>
          <button
            className="bg-black appearance-none   hover:bg-slate-700  flex-1 basis-[33.333%] max-w-[33.333%]   hover:opsacity-[0.9] border-none outline-none text-white text-xl p-4 cursor-pointer transition-[0.4s]"
            onClick={() => updateCalc(".")}
          >
            .
          </button>
          <button
            className="bg-gray-900 appearance-none  hover:bg-slate-700  flex-1 basis-[33.333%] max-w-[33.333%]   hover:opsacity-[0.9] border-none outline-none text-white text-xl p-4 cursor-pointer transition-[0.4s]"
            onClick={() => calculate()}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
