import React from "react";
import PropTypes from "prop-types";
import Base from "./base";

/**
 * ## When to use
 * - When need to display a title or paragraph contents in Articles/Blogs/Notes.
 * - When you need copyable/editable/ellipsis texts.
 */
const Paragraph = React.forwardRef((props, ref) => {
  return Base({ component: "div", ...props, ref });
});

Paragraph.defaultProps = {
  code: false,
  delete: false,
  disabled: false,
  ellipsis: false,
  keyboard: false,
  mark: false,
  strong: false,
  italic: false,
  underline: false
};

Paragraph.propTypes = {
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

export default Paragraph;
