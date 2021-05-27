import PropTypes from "prop-types";

function AdsContainer({ className, children }) {
  return <div className={`flex flex-col space-y-1 ${className}`}>{children}</div>;
}

AdsContainer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default AdsContainer;
