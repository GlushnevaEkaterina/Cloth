import {Path, Svg} from 'react-native-svg'

export const HomeIcon = ({color}: {color: string}) => {
  return (
    <Svg width="40" height="40" viewBox="0 0 24 24" fill="none">
      <Path
        d="M5 4H17M5 8H13M5 12H9M5 16H8M5 20H11M16.4729 17.4525C17.046 16.8743 17.4 16.0785 17.4 15.2C17.4 13.4327 15.9673 12 14.2 12C12.4327 12 11 13.4327 11 15.2C11 16.9673 12.4327 18.4 14.2 18.4C15.0888 18.4 15.893 18.0376 16.4729 17.4525ZM16.4729 17.4525L19 20"
        stroke={color}
      />
    </Svg>
  )
}
