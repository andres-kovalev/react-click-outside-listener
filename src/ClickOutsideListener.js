const React = require('react');

const useClickOutsideListener = require('./useClickOutsideListener');

module.exports = ClickOutsideListener;

function ClickOutsideListener({ onClickOutside, children }) {
    const refs = useClickOutsideListener(onClickOutside);

    if (typeof children === 'function') {
        return children(refs);
    }

    return React.Children.map(
        children,
        (child, index) => React.cloneElement(child, { ref: refs(index) })
    );
}
