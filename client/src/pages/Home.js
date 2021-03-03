import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const dispatch = useDispatch;
  const state = useSelector((state) => state);

  
  return (
    <div className="container">
      <div>Ini Home</div>
    </div>
  );
}
