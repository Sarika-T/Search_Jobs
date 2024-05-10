import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export default function SelectedFieldsV2(props) {
  const {name, placeholder, label, data, onChange} = props;
  return (
    <Box sx={{ minWidth: 200 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{name}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label={label}
          data={data}
          placeholder={placeholder}
          onChange={onChange}
        >
          {data.map((tech, index) => (
              <MenuItem key={index} value={tech} >
                {tech}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </Box>
  );
}
