import React, { useEffect, useState  } from 'react'
import {
  Image
} from './slider.elements'
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';
import { styled } from '@mui/material/styles';
const Input = styled(MuiInput)`
  width: 42px;
`;

function SliderItem(props) {
  const {min, max, value, handleSliderChange, handleInputChange, img, handleSliderDone } = props

  return (
         <Stack spacing={1} direction="column">
            <Input
            value={value}
            size="small"
            onChange={handleInputChange}
           
          />
      <Slider
        orientation="vertical"
        min={min}
        max={max}
        onChange={handleSliderChange}
        onChangeCommitted={handleSliderDone}
        value={typeof value === 'number' ? value : 0}
      />
      <Image src={img} alt="icon_image" />
      
    </Stack>
  )
}

export default SliderItem