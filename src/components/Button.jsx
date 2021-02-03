import React from "react";
import PropTypes from 'prop-types'
import classNames from "classnames";

function Button({onClick, className, outline, children} /* props */) {

  // const {onClick, className, outline, children} = props

  return (
    <button onClick={onClick}
    className={classNames("button", className, {
      "button--outline": outline,
    })}
  >
    {children}
  </button>
  )
}

/*
class Button extends React.Component {
  // componentDidMount() {
  //   console.log('i am here')
  // }
  render() {
    return (
      <button
        className={classNames("button", {
          "button--outline": this.props.outline,
        })}
      >
        {this.props.children}
      </button>
    );
  }
  // render() {
  //   return <button className={`button ${this.props.outline ? 'button--outline' : ''}`} >{this.props.children}</button>
  // }
}
 */

Button.propTypes = {
   onClick: PropTypes.func,
 }
export default Button;
