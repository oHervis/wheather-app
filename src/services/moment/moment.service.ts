import momentTz from 'moment-timezone';

const moment = (date?: string, format?: string) => {
  momentTz.locale('pt-br');
  return momentTz(date, format).tz('America/Bahia');
};

export default moment;
