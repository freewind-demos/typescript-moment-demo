import moment from 'moment';

const date = new Date();

const format = 'YYYY-MM-DD hh:mm:ss SSS';

console.log(moment(date).format(format));
