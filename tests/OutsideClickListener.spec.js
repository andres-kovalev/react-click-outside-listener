const React = require('react');
const { mount } = require('enzyme');

const OutsideClickListener = require('../');

describe('OutsideClickListener', () => {
    it('should render children as is', () => {
        const wrapper = mount(
            <OutsideClickListener>
                <div id="div-1" />
                <div id="div-2" />
            </OutsideClickListener>
        );

        expect(wrapper.find('#div-1').exists()).toBeTruthy();
        expect(wrapper.find('#div-2').exists()).toBeTruthy();
    });

    it('should support renderProp to render children', () => {
        const wrapper = mount(
            <OutsideClickListener>
                {() => (
                    <React.Fragment>
                        <div id='div-1' />
                        <div id='div-2' />
                    </React.Fragment>
                )}
            </OutsideClickListener>
        );

        expect(wrapper.find('#div-1').exists()).toBeTruthy();
        expect(wrapper.find('#div-2').exists()).toBeTruthy();
    });

    it('should not call onClickOutside callback on click inside children', () => {
        const onClickOutside = jest.fn();

        document.addEventListener = jest.fn();
        const wrapper = mount(
            <OutsideClickListener onClickOutside={ onClickOutside }>
                <div id="div-1" />
                <div id="div-2">
                    <div id="div-3" />
                </div>
            </OutsideClickListener>
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
                <OutsideClickListener onClickOutside={ onClickOutside }>
                    <div id="div-1" />
                    <div id="div-2">
                        <div id="div-3" />
                    </div>
                </OutsideClickListener>
                <div id="div-4" />
            </React.Fragment>
        );

        expect(document.addEventListener).toHaveBeenCalled();

        const [ [ , handleClick ] ] = document.addEventListener.mock.calls;
        const target = wrapper.find('#div-4').getDOMNode();

        handleClick({ target });

        expect(onClickOutside).toHaveBeenCalled();
    });
});
