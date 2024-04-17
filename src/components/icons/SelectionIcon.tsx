import {Path, Svg, G} from 'react-native-svg'

export const SelectionIcon = ({color}: {color: string}) => {
  return (
    <Svg width="30" height="30" viewBox="0 0 24 24" fill="none">
      <G id="style=linear">
        <G id="copy">
          <Path
            id="rec"
            d="M17.8333 18C20.1345 18 22 16.0972 22 13.75V5.25C22 2.90279 20.1345 1 17.8333 1H11.1667C8.86548 1 7 2.90279 7 5.25"
            stroke={color}
          />
          <Path
            id="rec_2"
            d="M2 10.25C2 7.90279 3.86548 6 6.16667 6H12.8333C15.1345 6 17 7.90279 17 10.25V18.75C17 21.0972 15.1345 23 12.8333 23H6.16667C3.86548 23 2 21.0972 2 18.75V10.25Z"
            stroke={color}
          />
        </G>
      </G>
    </Svg>
  )
}
