import React from "react";
import LocalClock from "../components/local-clock";
import ClockList from "../components/clock-list";
import useClock from "../hooks/useClock";

const App = () => {
  const { clock: Local } = useClock();
  const { clock: PST } = useClock("PST");
  const { clock: EST } = useClock("EST");
  const { clock: pakistan } = useClock("UTC", 5 * 60);
  const { clock: EDT } = useClock("EDT");
  const { clock: BST } = useClock("BST");
  console.log("local", Local?.date);
  console.log("PST", PST?.date);
  console.log("EST", EST?.date);
  console.log("EDT", EDT?.date);
  console.log("BRITISH", BST?.date);
  console.log("pakistan", pakistan?.date);
  return (
    <div>
      <LocalClock />
      <ClockList />
    </div>
  );
};

export default App;
