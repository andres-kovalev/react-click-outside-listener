[![ci](https://img.shields.io/circleci/build/github/andres-kovalev/react-click-outside-listener.svg?style=flat-square&logo=circleci)](https://circleci.com/gh/andres-kovalev/react-click-outside-listener)
[![codecov](https://img.shields.io/codecov/c/github/andres-kovalev/react-click-outside-listener.svg?style=flat-square&logo=codecov&token=1280f2cf41a24522add9857967be2a73)](https://codecov.io/gh/andres-kovalev/react-click-outside-listener)
[![downloads](https://img.shields.io/npm/dm/react-click-outside-listener.svg?style=flat-square&logo=data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDAwcHgiIGhlaWdodD0iNDAwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiCj48ZyBmaWxsPSJ3aGl0ZSI+PHBhdGggZD0iTTM3OSwxODAuNWgtMTAydi0xMDBoLTE1M3YxMDBoLTEwMmwxNzguNSwxNzguNWwxNzguNSwtMTc4LDUiLz48L2c+PC9zdmc+Cg==)](https://www.npmjs.com/package/react-click-outside-listener)
[![node](https://img.shields.io/node/v/react-click-outside-listener.svg?style=flat-square&logo=node.js&color=007ec6)](https://nodejs.org/)
[![npm](https://img.shields.io/npm/v/react-click-outside-listener.svg?style=flat-square&logo=npm)](https://www.npmjs.com/package/react-click-outside-listener)
[![MIT](https://img.shields.io/npm/l/react-click-outside-listener.svg?color=007ec6&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAA5ElEQVR4AY3SJWyDcRQE8G+MsnIg63XNmMm2ZuB9xjyv5tWYfAZ2TD6tGW9qzHCX3H9bX4rJz7y7K3t8NK20OT7ogHnYl3ndfK5nRwFYgxf4Nl6UBVzfjcoholIiEXbdsBS2TCERdks5HIaPVIfqDnN4HCO8gUm5iZEfc/gYI+gBT3pi5I8M3szxE0LgSYg303ljcGqOtAHFshEjP+VwOkbwCvXyGiOf5rASrkwQhhIJm4zdKg4zYBDe/z8j72Te0bu6GRxSIUzAHXxBF3jSpdudOoX2/5oDQVgEP3ji1y3Ijhv9ABp7euvVsybrAAAAAElFTkSuQmCC&style=flat-square)](https://github.com/andres-kovalev/react-click-outside-listener/blob/master/LICENSE)
[![npm bundle size](https://img.shields.io/bundlephobia/min/react-click-outside-listener.svg?style=flat-square&logo=data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDAwcHgiIGhlaWdodD0iNDAwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnIGZpbGw9IndoaXRlIj48cGF0aCBkPSJNNzUsMzBoMTc1bDEwMCwxMDB2MjQwaC0yNzV2LTI0MCIvPjwvZz48ZyBmaWxsPSIjREREIj48cGF0aCBkPSJNMjUwLDMwbDEwMCwxMDBoLTEwMHYtMTAwIi8+PC9nPjwvc3ZnPgo=)](https://www.npmjs.com/package/react-click-outside-listener)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg?style=flat-square)](https://conventionalcommits.org)

# react-click-outside-listener

Wrapping component to register click outside.

# Installation

As any other npm package `react-click-outside-listener` can be added to your project by following command:

```bash
npm i -S react-click-outside-listener
```

It requires any version of react with new context API support as peer dependency, so it should be installed as well.

```bash
npm i -S react
```

# Quick start

Nothing is easier than use `ClickOutsideListener` component - just wrap your content with it:

```js
import { ClickOutsideListener } from 'react-click-outside-listener';

const Parent = () => {
    const handleClickOutside = ...;

    return (
        <ClickOutsideListener onClickOutside={ handleClickOutside }>
            <div>Just put your content inside</div>
            <div>You can put several elements, if you need</div>
            <div>ClickOutsideListener component will call listener only if none of those clicked</div>
            <div>
                <div>Of course we can nest items</div>
            </div>
        </ClickOutsideListener>
    );
}
```

It is only possible to track clicks on html elements, so children should be html elements or React components forwarding refs:

```js
const Child = React.forwardRef((props, ref) => (
    <div ref={ ref }>
        We should attach ref to html container
    </div>
));

const Parent = () => {
    ...

    return (
        <ClickOutsideListener onClickOutside={ handleClickOutside }>
            <Child />
        </ClickOutsideListener>
    );
}
```

If you need to support custom properties for refs or want to track selected items, use render prop as a child:

```js
const Parent = () => {
    return (
        <ClickOutsideListener onClickOutside={ handleClickOutside }>
            {refs => (
                <div>
                    Click here to invoke callback
                    <div ref={ refs(0) }>
                        No callback when click here
                    </div>
                    <div>Beware callbacks</div>
                    <div ref={ refs(1) }>
                        Another safe zone
                    </div>
                </div>
            )}
        </ClickOutsideListener>
    );
}
```

renderProp argument can be also used as regular ref:

```js
const Component = () => {
    return (
        <ClickOutsideListener onClickOutside={ handleClickOutside }>
            {ref => (
                <div>
                    <div ref={ ref }>
                        No callback when click here
                    </div>
                </div>
            )}
        </ClickOutsideListener>
    );
}
```

Let's consider small example with dropdown menu:

```js
const Menu = ({ label, items }) => {
    const [ isShown, setIsShown ] = useState(false);
    const toggleMenu = useCallback(
        () => setIsShown(isShown => !isShown),
        []
    );
    const handleClickOutside = useCallback(
        () => setIsShown(false),
        []
    );

    return (
        <ul className="menu">
            <ClickOutsideListener onClickOutside={ handleClickOutside }>
                {refs => (
                    <React.Fragment>
                        <button
                            className="menu__trigger"
                            onClick={ toggleMenu }
                            ref={ refs(0) }
                        >
                            { label }
                        </button>
                        <Dropdown
                            items={ items }
                            wrapperRef={ refs(1) }
                            />
                    </React.Fragment>
                )}
            </ClickOutsideListener>
        </ul>
    );
}

...

const Dropdown = ({ items, wrapperRef }) => (
    <ul
        className='dropdown'
        ref={ wrapperRef }
    >
        { items.map(
            ({ id, label, action }) => (
                <li
                    key={ id || label }
                    className="dropdown__item"
                    onClick={ action }
                >
                    { label }
                </li>
            )
        ) }
    </ul>
);
```

# Hook

`react-click-outside-listener` package also exposes hook to achieve the same functionality. It returns `refs` item similar to `ClickOutsideListener` renderProp argument. It cab be used to set several refs or only one:

```js
import { useClickOutsideListener } from 'react-click-outside-listener';

const Component = () => {
    const refs = useClickOutsideListener(
        () => { ... }
    );

    // several refs
    return (
        <div>
            Click here to invoke callback
            <div ref={ refs(0) }>
                No callback when click here
            </div>
            <div>Beware callbacks</div>
            <div ref={ refs(1) }>
                Another safe zone
            </div>
        </div>
    );
}

// or

const Component = () => {
    const ref = useClickOutsideListener(
        () => { ... }
    );

    // one ref
    return (
        <div>
            <div ref={ ref }>
                No callback when click here
            </div>
        </div>
    );
}
```
