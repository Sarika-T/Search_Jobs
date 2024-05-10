import React from 'react';
import { Tabs, Tab, Typography } from '@mui/material';
import FilterFields from '../components/FilterFields/FilterFields';
import { useState } from 'react';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <div>{children}</div>}
    </Typography>
  );
}

function StyleTabs(props) {
  const [value, setValue] = React.useState(1);
  const {selectedFilters,setSelectedFilters} = props

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className='tabs-page'>
      <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
        <Tab label="Applied Jobs" />
        <Tab label="Search Jobs" />
        <Tab label="Suggested Jobs " />
      </Tabs>
      <TabPanel value={value} index={1}>
        <FilterFields selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters} />
      </TabPanel>
    </div>
  );
}

export default StyleTabs;