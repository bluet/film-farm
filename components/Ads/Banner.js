import PropTypes from "prop-types";

function Banner({ width, height, ...rest }) {
  return (
    <div
      className="flex items-center justify-center mb-1 overflow-hidden text-4xl bg-yellow-300 cursor-pointer"
      style={{ ...rest, maxWidth: width, height }}
    >
      Banner Ads - {parseInt(width, 10)}x{parseInt(height, 10)}
    </div>
  );
}

Banner.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
};

export default Banner;
