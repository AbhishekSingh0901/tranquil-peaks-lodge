import { useEffect, useRef } from "react";

export function useOutsideClick(handler, listen) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          handler();
        }
      }
      document.addEventListener("click", handleClick, listen);

      return () => document.removeEventListener("click", handleClick, listen);
    },
    [handler, listen]
  );

  return ref;
}
