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

| **Prop**                      | **Description**                                                                                                                   | **Required** |
| ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | :----------: |
| **basePopper**                | The first level popper.ie: `<span style={color:'orange'}>basePopper={<BasePopper />}</span>`                                      |      ✔       |
| **[left, right, top bottom]** | Pick up one position, where you want to display popper.                                                                           |      ✔       |
| **arrow**                     | Enable tooltip arrow.                                                                                                             |              |
| **visible**                   | Always display popper.                                                                                                            |              |
| **popperPosition**            | Change popper position easier.ie: `<span style={color:'orange'}>popperPosition={{top : '20px'}}</span>`(left, right, top, bottom) |              |
| **className**                 | You can pass class name from parent.                                                                                              |              |
| **dark**                      | Switch to dark theme                                                                                                              |              |

## Popper Props

| **Prop**      | **Description**                                                                                   | **Required** |
| ------------- | ------------------------------------------------------------------------------------------------- | :----------: |
| **title**     | Popper's header title.                                                                            |              |
| **maxHeigth** | This will enable vertical scroll bar. ie: `<span style={color:'orange'}>maxHeight='200px'</span>` |              |
| **className** | You can pass className from parent.                                                               |              |

## PopperItem Props

| **Prop**        | **Description**                                                                                             | **Required** |
| --------------- | ----------------------------------------------------------------------------------------------------------- | :----------: |
| **childPopper** | Child popper(next level popper). ie: `<span style={color:'orange'}>childPopper={<LanguagePopper />}</span>` |              |

## License

MIT © [huahoangphuc4201](https://github.com/huahoangphuc4201)
