import {Path, Svg, Rect} from 'react-native-svg'

export const GalleryIcon = ({color}: {color: string}) => {
  return (
    <Svg width="35" height="35" viewBox="0 0 24 24" fill="none">
      <Rect
        x="4"
        y="4"
        width="16"
        height="16"
        rx="3"
        stroke={color || '#000000'}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M4 16L8.29289 11.7071C8.68342 11.3166 9.31658 11.3166 9.70711 11.7071L13 15M13 15L15.7929 12.2071C16.1834 11.8166 16.8166 11.8166 17.2071 12.2071L20 15M13 15L15.25 17.25"
        stroke={color || '#000000'}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  )
}
