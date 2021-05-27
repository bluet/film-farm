import React, { useState } from "react";
import { GrFormClose } from "react-icons/gr";
import PropTypes from "prop-types";

function Catfish({ className }) {
  const [isClosed, setIsClosed] = useState(false);

  return (
    !isClosed && (
      <div
        className={`overflow-hidden text-3xl text-center bg-yellow-300 cursor-pointer relative ${className}`}
      >
        <span
          className="absolute top-1 right-1"
          onClick={() => setIsClosed(true)}
        >
          <GrFormClose />
        </span>
        Catfish Ads - 1280x90
      </div>
    )
  );
}

Catfish.propTypes = {
  className: PropTypes.string,
};

export default Catfish;
