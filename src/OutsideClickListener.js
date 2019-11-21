const React = require('react');

const { useRefs } = require('./hooks');

module.exports = OuterClickListener;

function OuterClickListener({ onClickOutside, children }) {
    const refs = useRefs();
    const handleClick = React.useCallback(
        (event) => {
            const { target } = event;

            if (!refs.refs.some(ref => ref.contains(target))) {
                onClickOutside(event);
            }
        },
        [ onClickOutside ]
    );

    React.useEffect(() => {
        document.addEventListener('click', handleClick);

        return () => document.removeEventListener('click', handleClick);
    }, []);

    if (typeof children === 'function') {
        return children(refs.set);
    }

    return React.Children.map(
        children,
        (child, index) => React.cloneElement(child, { ref: refs.set(index) })
    );
}
