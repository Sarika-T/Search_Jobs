import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './common.scss';


export default function TextFields(props) {
    const {id, label, placeholder, onChange} = props
    return (
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div className='textfield-content'>
          <TextField
           className='textfield-company'
            id={`outlined-textarea${id}`}
            label={label}
            placeholder={placeholder}
            multiline
            onChange={onChange}
          />
        </div>
      </Box>
    );
  }
  