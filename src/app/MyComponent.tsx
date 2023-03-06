"use client";

import { useEffect, useState } from "react";

export function MyComponent() {
  const [value, setValue] = useState("");

  const isBrowser = () => typeof window !== "undefined";

  useEffect(() => {
    if (isBrowser()) {
      localStorage.setItem("test-key", "lorem ipsum");
      const lv = localStorage.getItem("test-key");
      if (lv) {
        setValue(lv);
      }
    }
  }, [value, setValue]);

  return (
    <>
      <h1>Mycompoent</h1>
      <h3>LocalStorage: {value}</h3>
    </>
  );
}
