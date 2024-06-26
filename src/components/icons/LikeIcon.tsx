import {G, Path, Svg} from 'react-native-svg'

export const LikeIcon = ({color}: {color: string}) => {
  return (
    <Svg fill={color} width="30" height="30" viewBox="-0.5 0.5 42 42">
      <Path
        d="M20.938,10.725C14.51,0.796,1.5,6.205,1.5,17.021c0,8.122,17.836,20.827,19.438,22.479
	C22.551,37.848,39.5,25.143,39.5,17.021C39.5,6.287,27.378,0.796,20.938,10.725z"
      />
    </Svg>
  )
}
