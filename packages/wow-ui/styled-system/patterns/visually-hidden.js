import { getPatternStyles, patternFns } from '../helpers.js';
import { css } from '../css/index.js';

const visuallyHiddenConfig = {
transform(props) {
  return {
    srOnly: true,
    ...props
  };
}}

export const getVisuallyHiddenStyle = (styles = {}) => {
  const _styles = getPatternStyles(visuallyHiddenConfig, styles)
  return visuallyHiddenConfig.transform(_styles, patternFns)
}

export const visuallyHidden = (styles) => css(getVisuallyHiddenStyle(styles))
visuallyHidden.raw = getVisuallyHiddenStyle