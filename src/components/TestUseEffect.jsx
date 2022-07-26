import { useEffect, useState } from "react";

console.clear();

export default function TestUseEffect() {
  const [count, setCount] = useState();
  const [words, setWords] = useState();

  /**
   * USE-EFFECT stuff
   */
  useEffect(() => {
    loadWords();
  }, []);

  async function loadWords() {
    const apiResponse = await fetch("https://api.adviceslip.com/advice");

    if (apiResponse.ok) {
      // console.log(apiResponse);
      const dataInJson = await apiResponse.json();

      console.log(dataInJson.slip.advice);

      setWords(dataInJson.slip.advice);
    }
  }

  return (
    <div>
      <h1>Some Elvish</h1>
      <button
        onClick={words.map((word) => (
          <p>{word.slip.advice}</p>
        ))}
      >
        Press 4 Quote
      </button>
    </div>
  );
}
