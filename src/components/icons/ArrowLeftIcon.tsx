import {Path, Svg} from 'react-native-svg'

export const ArrowLeftIcon = ({color}: {color: string}) => {
  return (
    <Svg width="40" height="40" fill="none" viewBox="0 0 24 24">
      <Path
        d="M15 7L10 12L15 17"
        stroke={color || '#6981D3'}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  )
}
