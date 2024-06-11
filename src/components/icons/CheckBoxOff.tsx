import {Rect, Svg} from 'react-native-svg'

export const CheckBoxOff = () => {
  return (
    <Svg width="30" height="30" viewBox="0 0 24 24">
      <Rect
        fill="#f9fbff"
        stroke-width="1"
        stroke="#868c8f"
        x="0.5"
        y="0.5"
        width="23"
        height="23"
        rx="5.5"
      />
    </Svg>
  )
}
