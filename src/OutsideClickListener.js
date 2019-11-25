const React = require('react');

const useOuterClickListener = require('./useOutsideClickListener');

module.exports = OuterClickListener;

function OuterClickListener({ onClickOutside, children }) {
    const refs = useOuterClickListener(onClickOutside);

    if (typeof children === 'function') {
        return children(refs);
    }

    return React.Children.map(
        children,
        (child, index) => React.cloneElement(child, { ref: refs(index) })
    );
}
