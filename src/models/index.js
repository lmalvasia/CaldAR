const Building = require('./buildings');
const boilers = require('./boilersSchema');
const companies = require('./companiesSchema');
const technicians = require('./technicians');
const appointments = require('./appointmentsSchema');
const boilerTypes = require('./boilerTypesSchema');

module.exports = {
  Building,
  boilers,
  companies,
  technicians,
  appointments,
  boilerTypes,
};
