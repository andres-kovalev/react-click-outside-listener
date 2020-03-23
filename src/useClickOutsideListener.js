const { useRef, useEffect, useMemo } = require('react');

module.exports = useClickOutsideListener;

function useClickOutsideListener(handleOutsideClick) {
    const refs = useRefs();
    const callback = useRef();

    callback.current = handleOutsideClick;

    useEffect(() => {
        const handleClick = (event) => {
            const { target } = event;

            if (!refs.refs.some(ref => ref.contains(target))) {
                // eslint-disable-next-line no-unused-expressions
                callback.current && callback.current(event);
            }
        };

        document.addEventListener('click', handleClick);

        return () => document.removeEventListener('click', handleClick);
    }, []);

    return refs.set;
}

function useRefs() {
    const refs = useRef([]).current;

    return useMemo(() => {
        const set = (item) => {
            const isNumber = typeof item === 'number';
            const index = isNumber ? item : 0;
            const setter = (ref) => {
                refs[index] = ref;

                return ref;
            };

            if (typeof item === 'number') {
                return setter;
            }

            return setter(item);
        };

        return { refs, set };
    }, []);
}
