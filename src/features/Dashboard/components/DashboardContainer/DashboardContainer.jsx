import React from 'react';
import { Box, Stack } from '@mui/material';
import Title from '@/components/ui/Title/Title';
import InfoCard from '../InfoCard/InfoCard';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AssignmentIcon from '@mui/icons-material/Assignment';

const DashboardContainer = () => {
  return (
    <Box sx={{ padding: 2, maxWidth: 1200, width: '100%' }}>
      <Stack
        spacing={2}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'start',
        }}
      >
        <Box>
          <Title>Dashboard</Title>
        </Box>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Box sx={{ flex: 1 }}>
          <InfoCard
            icon={<PeopleAltIcon />}
            bgColor={'background.secondary'}
            color={'primary.main'}
          />
        </Box>

        <Box sx={{ flex: 1 }}>
          <InfoCard
            icon={<PersonAddIcon />}
            bgColor={'background.active'}
            color={'success.main'}
          />
        </Box>

        <Box sx={{ flex: 1 }}>
          <InfoCard
            icon={<AssignmentIcon />}
            bgColor={'border.default'}
            color={'text.muted'}
          />
        </Box>
      </Stack>
    </Box>
  );
};

export default DashboardContainer;
