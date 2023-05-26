import { ChangeEvent, useEffect, useState } from "react";

export const Timer = () => {
    const [timer, setTimer] = useState<number>(0);
  const [input, setInput] = useState<string>("");

  const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value.replace(/[^0-9]/g, ""));
  }

  const buttonHandler = () => {
    setTimer(Number(input));
    setInput("");
  }

  const getTime = (value: number): string => {
    const hours = Math.floor(value / 3600)
    const minutes = Math.floor(value / 60) % 60
    const seconds = value % 60

    return [hours, minutes, seconds]
      .map(v => v < 10 ? "0" + v : v)
      .filter((v, i) => v !== "00" || i > 0)
      .join(":")
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(timer => timer - 1);
    }, 1000)
    if (timer === 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timer])

  return (
    <>
      <input placeholder="Seconds" type="text" value={input} onChange={inputHandler} />

      <button onClick={buttonHandler}>Start</button>

      <br />
      <br />

      <span>{getTime(timer)}</span>
    </>
  )

}
