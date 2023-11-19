import Image from "next/image";
import React from "react";

import "../style.css";

const Reload = () => {
  return (
    <div className="reolad" onClick={() => window.location.reload()}>
      <Image
        width={30}
        height={30}
        src={"https://cdn.icon-icons.com/icons2/1898/PNG/512/reload_121122.png"}
        alt="reload"
      />
    </div>
  );
};

export default Reload;
