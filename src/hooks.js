const { useRef, useMemo } = require('react');

module.exports = {
    useRefs
};

function useRefs() {
    const refs = useRef([]).current;

    return useMemo(() => {
        const set = index => (ref) => {
            refs.length = index;
            refs[index] = ref;

            return ref;
        };

        return { refs, set };
    }, []);
}
