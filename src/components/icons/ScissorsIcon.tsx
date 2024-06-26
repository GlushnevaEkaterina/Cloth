import {Path, Svg, Circle} from 'react-native-svg'

export const ScissorsIcon = () => {
  return (
    <Svg width="30" height="30" viewBox="0 0 24 24" fill="none">
      <Circle
        cx="6.5"
        cy="6.5"
        r="2.5"
        stroke="#7286CF"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Circle
        cx="6.5"
        cy="17.5"
        r="2.5"
        stroke="#7286CF"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M6 14.9999L20 6.26758"
        stroke="#7286CF"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.6985 11.9995L6.52936 8.15153C6.06076 7.85925 5.44394 8.00218 5.15166 8.47078C4.85937 8.93939 5.0023 9.55621 5.47091 9.84849L10.809 13.1781L12.6985 11.9995ZM14.5881 13.1781L12.6985 14.3566L19.4709 18.5809C19.9395 18.8731 20.5564 18.7302 20.8486 18.2616C21.1409 17.793 20.998 17.1762 20.5294 16.8839L14.5881 13.1781Z"
        fill="#7286CF"
      />
    </Svg>
  )
}
