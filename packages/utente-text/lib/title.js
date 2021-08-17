import React from "react";
import PropTypes from "prop-types";
import Base from "./base";

/**
 * ## When to use
 * - When need to display a title or paragraph contents in Articles/Blogs/Notes.
 * - When you need copyable/editable/ellipsis texts.
 */
const Title = React.forwardRef((props, ref) => {
  const { lvl } = props;
  return Base({ component: `h${lvl}`, ...props, ref });
});

Title.defaultProps = {
  code: false,
  deleted: false,
  disabled: false,
  ellipsis: false,
  keyboard: false,
  lvl: 1,
  mark: false,
  strong: false,
  italic: false,
  underline: false,
  variant: "default"
};

Title.propTypes = {
  /**
   * variant of text - danger/warning/success/default
   */
  variant: PropTypes.oneOf(["danger", "warning", "success", "default"]),
  /**
   * level style - h1/2/3/4/5
   */
  lvl: PropTypes.oneOf([1, 2, 3, 4, 5]),
  /**
   * code style
   */
  code: PropTypes.bool,
  /**
   * deleted line style
   */
  deleted: PropTypes.bool,
  /**
   * disabled content
   */
  disabled: PropTypes.bool,
  /**
   * display ellipsis when text overflow
   */
  ellipsis: PropTypes.bool,
  /**
   * keyboard style
   */
  keyboard: PropTypes.bool,
  /**
   * marked style
   */
  mark: PropTypes.bool,
  /**
   * bold style
   */
  strong: PropTypes.bool,
  /**
   * italic style
   */
  italic: PropTypes.bool,
  /**
   * underline style
   */
  underline: PropTypes.bool,
  /**
   * class of the input
   */
  className: PropTypes.string,
  /**
   * style of input
   */
  style: PropTypes.object
};

export default Title;
