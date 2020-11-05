import React, { Component } from "react";
import PropTypes from "prop-types";

const propTypes = {
  children: PropTypes.node
};

const defaultProps = {};

class DefaultFooter extends Component {
  getYear = () => {
    return new Date().getFullYear();
  };

  render() {
    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <span>
          <a href="https://epsotechsolutions.com">AfyaMed</a> &copy;
          {this.getYear()}
        </span>
        {/* <span className="ml-auto">
          Developed by <a href="https://coreui.io/react">Ken</a>
        </span> */}
      </React.Fragment>
    );
  }
}

DefaultFooter.propTypes = propTypes;
DefaultFooter.defaultProps = defaultProps;

export default DefaultFooter;
