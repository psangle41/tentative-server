import React from 'react';
import Svg,{Path} from 'react-native-svg'

const User=(props)=>{
    return(
        <Svg width={28} height={20} viewBox="0 0 25 17" fill="none" {...props}>
      <Path
        d="M2.086.49C1.169.49.413 1.247.413 2.164v12.823c0 .917.756 1.673 1.673 1.673H23.27c.917 0 1.673-.756 1.673-1.673V2.163c0-.917-.756-1.672-1.673-1.672H2.086zm.313 1.116h20.559l-9.774 8.746c-.238.212-.773.212-1.01 0L2.398 1.606zm-.871.714l6.934 6.211-6.934 6.281V2.32zm22.3 0v12.492l-6.933-6.28 6.934-6.212zM9.299 9.28l2.126 1.9c.71.634 1.8.634 2.509 0l2.125-1.9 6.917 6.264H2.382L9.298 9.28z"
        fill="#3D3A3A"
      />
    </Svg>
    )
}

export default User;
