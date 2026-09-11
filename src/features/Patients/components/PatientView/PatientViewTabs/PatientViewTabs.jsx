import React, { useState } from 'react';
import { Tabs, Tab } from '@mui/material';

const PatientViewTabs = ({value, setValue}) => {

  const handleChangeTab = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs
      value={value}
      onChange={handleChangeTab}
      aria-label="abas do paciente"
      sx={{
        alignSelf: 'flex-start',
        m: 1,
      }}
    >
      <Tab
        value={0}
        label="Informações"
        sx={{
          color: value === 0 ? 'primary.main' : 'text.secondary',
          borderRadius: 3,
        }}
      />

      <Tab
        value={1}
        label="Prontuário"
        sx={{
          color: value === 1 ? 'primary.main' : 'text.secondary',
          borderRadius: 3,
        }}
      />
    </Tabs>
  );
};

export default PatientViewTabs;
