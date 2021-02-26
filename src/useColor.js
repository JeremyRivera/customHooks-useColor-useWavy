import { useEffect } from "react";

export default function useColor() {
  useEffect(() => {
    const handler = (e) => {
      if (e.key == "f") {
        document.body.style.backgroundColor = "yellowgreen";
      } else {
        document.body.style.backgroundColor = "lightblue";
      }
    };

    window.addEventListener("keyup", handler);

    return () => {
      window.removeEventListener("keyup", handler);
      document.body.style.backgroundColor = "white";
    };
  }, []);
}
