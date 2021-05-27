import PropTypes from "prop-types";

function Banner({ className }) {
  return (
    <div
      className={`overflow-hidden text-3xl text-center bg-yellow-300 cursor-pointer ${className}`}
    >
      Banner Ads
    </div>
  );
}

Banner.propTypes = {
  className: PropTypes.string,
};

export default Banner;
