import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';

import { StandaloneDayView } from '@mui/x-scheduler/day-view';

import { ptBR as dateFnsPtBR } from 'date-fns/locale/pt-BR';
import { ptBR as schedulerPtBR } from '@mui/x-scheduler/locales';

import { resources } from '../data/calendarEvents';

const DashboardCalendarDay = () => {
  // const [events, setEvents] = useState(calendarEvents);

  return (
    <Box sx={{ width: '100%', height: 450 }}>
      <Typography sx={{ fontWeight: 600, color: 'text.secondary' }}>
        Próximos Atendimentos
      </Typography>

      <StandaloneDayView
        // events={events}
        resources={resources}
        defaultVisibleDate={new Date()}
        // onEventsChange={setEvents}
        dateLocale={dateFnsPtBR}
        localeText={
          schedulerPtBR.components?.MuiEventCalendar?.defaultProps?.localeText
        }
        readOnly
        viewConfig={{
          day: {
            startTime: 8,
            endTime: 20,
          },
        }}
      />
    </Box>
  );
};

export default DashboardCalendarDay;
