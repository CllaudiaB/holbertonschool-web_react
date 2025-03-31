import PropTypes from "prop-types";
import React from "react";
import BodySection from "./BodySection";
import { StyleSheet, css } from 'aphrodite';

class BodySectionWithMarginBottom extends React.Component {
  render() {
    return (
      <div className={css(styles.margin)}>
        <BodySection {...this.props} />
      </div>
    );
  }
}

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

const styles = StyleSheet.create({
  margin: {
    marginBottom: 40
  }
});

export default BodySectionWithMarginBottom;
