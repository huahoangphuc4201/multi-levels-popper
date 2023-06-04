# multi-levels-popper

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/multi-levels-popper.svg)](https://www.npmjs.com/package/multi-levels-popper) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

This component will help you create nested poppers.

## Install

```bash
npm install --save multi-levels-popper
```

## Usage

```jsx
import { MultiLevelsPopper } from 'multi-levels-popper'

const MyComponent = () => {
  return (
    <MultiLevelsPopper right basePopper={<BasePopper />}>
      <div>Hover me!</div>
    </MultiLevelsPopper>
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

When you click on `PopperItem` which has `childPopper` prop, it will open the child popper.

## MultiLevelsPopper Props

| **Prop**                       | **Description**                                                                                                            | **Required** |
| ------------------------------ | -------------------------------------------------------------------------------------------------------------------------- | :----------: | --- | --- |
| **basePopper**                 | It is the first level popper(parent)                                                                                       |      ✔       |
| **[left, right, top, bottom]** | Pick up one position, where you want your popper shown.                                                                    |      ✔       |
| **arrow**                      | Your popper will have tooltip arrow.                                                                                       |              |
| **visible**                    | The popper is always visible with this prop. If it not have this prop, it is only visible when you hover the wrapped node. |              |
| **popperPosition**             | This prop helps you change your popper position easily. ie: {top : '20px'}, {left\|right\|top\|bottom : '...'}             |              |
| **dark**                       | Switch to dark theme.                                                                                                      |              |     |     |

## License

MIT © [huahoangphuc4201](https://github.com/huahoangphuc4201)
