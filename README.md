# multi-levels-popper

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/multi-levels-popper.svg)](https://www.npmjs.com/package/multi-levels-popper) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

This component will help you create nested poppers.

## Install

```bash
npm install --save multi-levels-popper
```

## Usage

In this example, we use [Tippy.js](https://www.npmjs.com/package/@tippyjs/react)(recommend) to display popper, you can use other libraries.

```jsx
import { MultiLevelsPopper } from 'multi-levels-popper'

const MyComponent = () => {
  return (
    <Tippy
      interactive
      placement='right-start'
      render={(attrs) => (
        <MultiLevelsPopper>
          <SettingPopper />
        </MultiLevelsPopper>
      )}
    >
      <button style={{ position: 'absolute', top: '200px', left: '200px' }}>
        My button
      </button>
    </Tippy>
  )
}
```

## Customized Popper

```jsx
import { Popper, PopperItem } from 'multi-levels-popper'

const SettingPopper = () => {
  return (
    <Popper>
      <PopperItem>
        <div>Setting 1</div>
      </PopperItem>
      <PopperItem childPopper={<ChildPopper />}>
        <div>Setting 2</div>
      </PopperItem>
      <PopperItem>
        <div>Setting 3</div>
      </PopperItem>
    </Popper>
  )
}
```

When you click on `PopperItem` which has `childPopper` prop, it will display the child popper.

## MultiLevelsPopper Props

| **Prop**     | **Description**         | **Required** |
| ------------ | ----------------------- | :----------: |
| **children** | The first level popper. |      ✔       |
| **dark**     | Switch to dark theme.   |              |

## Popper Props

| **Prop**      | **Description**                                                    | **Required** |
| ------------- | ------------------------------------------------------------------ | :----------: |
| **title**     | Popper's header title.                                             |              |
| **maxHeigth** | This will enable vertical scroll bar. Example: `maxHeight='200px'` |              |
| **className** | You can pass className from parent.                                |              |

## PopperItem Props

| **Prop**        | **Description**                                                           | **Required** |
| --------------- | ------------------------------------------------------------------------- | :----------: |
| **childPopper** | Child popper(next level popper). Example: `childPopper={<ChildPopper />}` |              |

## License

MIT © [huahoangphuc4201](https://github.com/huahoangphuc4201)
