/* eslint-disable react/prop-types */

const React = require('react');
const { act } = require('react-dom/test-utils');
const { mount } = require('enzyme');

const { useOutsideClickListener } = require('../');

const TestComponent = ({ onClickOutside }) => {
    const ref = useOutsideClickListener(onClickOutside);

    return (
        <div>
            <div id="div-1" />
            <div ref={ ref } id="div-2">
                <div id="div-3" />
            </div>
        </div>
    );
};

describe('useOutsideClickListener', () => {
    it('should not call onClickOutside callback on click inside children', () => {
        document.addEventListener = jest.fn();
        const onClickOutside = jest.fn();

        const wrapper = mount(
            <TestComponent onClickOutside={ onClickOutside } />
        );

        expect(document.addEventListener).toHaveBeenCalled();

        const [ [ , handleClick ] ] = document.addEventListener.mock.calls;
        [ 'div-2', 'div-3' ].forEach(
            (id) => {
                const target = wrapper.find(`#${ id }`).getDOMNode();

                handleClick({ target });
            }
        );

        expect(onClickOutside).not.toHaveBeenCalled();
    });

    it('should call onClickOutside callback on click outside children', () => {
        document.addEventListener = jest.fn();
        const onClickOutside = jest.fn();

        const wrapper = mount(
            <TestComponent onClickOutside={ onClickOutside } />
        );

        expect(document.addEventListener).toHaveBeenCalled();

        const [ [ , handleClick ] ] = document.addEventListener.mock.calls;
        const target = wrapper.find('#div-1').getDOMNode();
        handleClick({ target });

        expect(onClickOutside).toHaveBeenCalled();
    });

    it('should work without callback', () => {
        document.addEventListener = jest.fn();

        const wrapper = mount(
            <TestComponent />
        );

        expect(document.addEventListener).toHaveBeenCalled();

        const [ [ , handleClick ] ] = document.addEventListener.mock.calls;
        const target = wrapper.find('#div-1').getDOMNode();
        handleClick({ target });
    });

    it('should support multiple refs', () => {
        document.addEventListener = jest.fn();
        const onClickOutsideSpy = jest.fn();
        const CustomTestComponent = ({ onClickOutside }) => {
            const refs = useOutsideClickListener(onClickOutside);

            return (
                <div>
                    <div ref={ refs(0) } id="div-1" />
                    <div ref={ refs(1) } id="div-2">
                        <div id="div-3" />
                    </div>
                </div>
            );
        };

        const wrapper = mount(
            <CustomTestComponent onClickOutside={ onClickOutsideSpy } />
        );

        expect(document.addEventListener).toHaveBeenCalled();

        const [ [ , handleClick ] ] = document.addEventListener.mock.calls;
        [ 'div-1', 'div-2', 'div-3' ].forEach(
            (id) => {
                const target = wrapper.find(`#${ id }`).getDOMNode();

                handleClick({ target });
            }
        );

        expect(onClickOutsideSpy).not.toHaveBeenCalled();
    });

    it('should subscribe on document click event only once', () => {
        document.addEventListener = jest.fn();
        const CustomTestComponent = jest.fn(() => {
            const ref = useOutsideClickListener(() => {});

            return (
                <div ref={ ref } />
            );
        });

        const wrapper = mount(<CustomTestComponent />);
        // :( somewhy enzyme's update() doesn't work without props change
        wrapper.setProps({});
        wrapper.update();

        expect(CustomTestComponent).toHaveBeenCalledTimes(2);
        expect(document.addEventListener).toHaveBeenCalledTimes(1);
    });

    it('should always use latest callback', () => {
        document.addEventListener = jest.fn();
        const log = [];
        const CustomTestComponent = ({ closure }) => {
            const ref = useOutsideClickListener(
                () => log.push(closure)
            );

            return (
                <div>
                    <div ref={ ref } />
                    <div id="outside" />
                </div>
            );
        };

        const wrapper = mount(<CustomTestComponent closure={ 0 } />);

        expect(document.addEventListener).toHaveBeenCalled();

        const [ [ , handleClick ] ] = document.addEventListener.mock.calls;
        const target = wrapper.find('#outside').getDOMNode();
        act(() => handleClick({ target }));

        wrapper.setProps({ closure: 1 });
        act(() => handleClick({ target }));

        expect(log).toEqual([ 0, 1 ]);
    });
});
