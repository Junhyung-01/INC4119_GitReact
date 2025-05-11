import React from "react";
// alias를 사용하여 경로를 간단하게 참조
import useCalculatorLogic from '@calculator/component/useCalculatorLogic';
import Display from '@calculator/component/Display';
import Buttons from '@calculator/component/Buttons';

const CalculatorPage = () => {
  const { input, result, handleClick, calculateResult, clearInput, handleRoot } = useCalculatorLogic();

  return (
    <div className="calculator">
      <Display input={input} result={result} />
      <Buttons
        onButtonClick={(value) => {
          if (value === "=") calculateResult();
          else if (value === "AC") clearInput();
          else if (value === "√") handleRoot();
          else handleClick(value);
        }}
      />
    </div>
  );
};

export default CalculatorPage;
