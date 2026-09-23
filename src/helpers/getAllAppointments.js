export const getAllAppointments = (patients) => {
  //Pegue as consultas + nome → depois junte todas as consultas em uma única lista
  return patients
    .map((patient) => {
      const patientAppointments = patient.appointments || [];
      return patientAppointments.map((appointment) => ({
        ...appointment,
        patientName: patient.name,
      }));
    })
    .flat();
};
