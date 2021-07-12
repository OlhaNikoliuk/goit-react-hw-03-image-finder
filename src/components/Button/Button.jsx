import PropTypes from "prop-types";

import { LoadButton } from "./Button.styled";

function Button({ onClick }) {
  return (
    <LoadButton className="Button" type="button" onClick={onClick}>
      Load more
    </LoadButton>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};


export default Button;
