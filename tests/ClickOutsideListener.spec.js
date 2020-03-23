const React = require('react');
const { mount } = require('enzyme');

const { ClickOutsideListener } = require('../');

describe('ClickOutsideListener', () => {
    it('should render children as is', () => {
        const wrapper = mount(
            <ClickOutsideListener>
                <div id="div-1" />
                <div id="div-2" />
            </ClickOutsideListener>
        );

        expect(wrapper.find('#div-1').exists()).toBeTruthy();
        expect(wrapper.find('#div-2').exists()).toBeTruthy();
    });

    it('should support renderProp to render children', () => {
        const onClickOutside = jest.fn();

        document.addEventListener = jest.fn();
        const wrapper = mount(
            <ClickOutsideListener onClickOutside={ onClickOutside }>
                {refs => (
                    <React.Fragment>
                        <div ref={ refs(0) } id='div-1' />
                        <div ref={ refs(1) } id='div-2' />
                    </React.Fragment>
                )}
            </ClickOutsideListener>
        );

        const [ [ , handleClick ] ] = document.addEventListener.mock.calls;
        [ 'div-1', 'div-2' ].forEach(
            (id) => {
                const target = wrapper.find(`#${ id }`).getDOMNode();

                handleClick({ target });
            }
        );

        expect(onClickOutside).not.toHaveBeenCalled();
    });

    it('should not call onClickOutside callback on click inside children', () => {
        const onClickOutside = jest.fn();

        document.addEventListener = jest.fn();
        const wrapper = mount(
            <ClickOutsideListener onClickOutside={ onClickOutside }>
                <div id="div-1" />
                <div id="div-2">
                    <div id="div-3" />
                </div>
            </ClickOutsideListener>
        );

        expect(document.addEventListener).toHaveBeenCalled();

        const [ [ , handleClick ] ] = document.addEventListener.mock.calls;
        [ 'div-1', 'div-2', 'div-3' ].forEach(
            (id) => {
                const target = wrapper.find(`#${ id }`).getDOMNode();

                handleClick({ target });
            }
        );

        expect(onClickOutside).not.toHaveBeenCalled();
    });

    it('should call onClickOutside callback on click outside children', () => {
        const onClickOutside = jest.fn();

        document.addEventListener = jest.fn();
        const wrapper = mount(
            <React.Fragment>
                <ClickOutsideListener onClickOutside={ onClickOutside }>
                    <div id="div-1" />
                    <div id="div-2">
                        <div id="div-3" />
                    </div>
                </ClickOutsideListener>
                <div id="div-4" />
            </React.Fragment>
        );

        expect(document.addEventListener).toHaveBeenCalled();

        const [ [ , handleClick ] ] = document.addEventListener.mock.calls;
        const target = wrapper.find('#div-4').getDOMNode();
        handleClick({ target });

        expect(onClickOutside).toHaveBeenCalled();
    });

    it('should subscribe on document click event only once', () => {
        document.addEventListener = jest.fn();
        const TestComponent = jest.fn(() => (
            <ClickOutsideListener>
                <div />
            </ClickOutsideListener>
        ));

        const wrapper = mount(
            <TestComponent />
        );
        // :( somewhy enzyme's update() doesn't work without props change
        wrapper.setProps({});
        wrapper.update();

        expect(TestComponent).toHaveBeenCalledTimes(2);
        expect(document.addEventListener).toHaveBeenCalledTimes(1);
    });
});
