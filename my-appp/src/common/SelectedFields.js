import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { roles } from '../MockData/MockData';


export default function SelectedFields(props) {
  const [age, setAge] = React.useState('');
  const {name, placeholder,label} = props;

  const handleChange = (event) => {
    console.log(event,"event")
    setAge(event.target.value);
  };
  

  return (
    <Box sx={{ minWidth: 200 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{name}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label={label}
          placeholder={placeholder}
          onChange={handleChange}
        >
          {roles.data.map((department, index) => (
        <Box key={index} sx={{ mt: 2 }}>
          {/* <Typography variant="h6" gutterBottom>{department.department}</Typography> */}
          <MenuItem key={index} >{department.department}</MenuItem>
            {department.roles.map((role, roleIndex) => (
              <MenuItem key={`${index}${roleIndex}`} value={role} >
                {role}
              </MenuItem>
            ))}
        </Box>
         ))}
        </Select>
      </FormControl>
    </Box>
  );
}
