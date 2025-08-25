import { useEffect, useState } from "react";

export default function VisitorCounter() {
  const [count, setCount] = useState(() => {
    return parseInt(localStorage.getItem("visitor-count") || "8798");
  });

  useEffect(() => {
    const newCount = count + 1;
    localStorage.setItem("visitor-count", newCount.toString());
    setCount(newCount);
  }, []);

  return (
    <div className="text-gray-800 font-cursive1 text-xl md:text-base font-lg text-center mx-2">
      Visitor Count:{" "}
      <span className="text-gray-800 font-semibold">{count.toLocaleString()}</span>
    </div>
  );
}