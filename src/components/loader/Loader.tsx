"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

const Loader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const hideLoader = () => {
      setIsVisible(false);
    };

    setTimeout(hideLoader, 3000);
  }, []);
  return (
    <div className={`loader ${isVisible ? "visible" : "hidden"}`}>
      <Image src={"/loader.svg"} alt="loader" width={200} height={200} />
    </div>
  );
};

export default Loader;
