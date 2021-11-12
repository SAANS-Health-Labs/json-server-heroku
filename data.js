const faker = require("faker");
const _ = require("lodash");

const users = _.times(20, function (n) {
  return {
    id: faker.random.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    enabled: faker.random.boolean(),
    deleted: faker.random.boolean(),
    preferences: {},
  };
});

const projects = _.times(20, function (n) {
  return {
    id: faker.random.uuid(),
    name: faker.helpers.randomize([
      "Advoco solutions",
      "Cheif outsiders",
      "Choice one",
      "Malouf solutions",
      "Pariveda",
    ]),
    employeeCountRange: faker.helpers.randomize([
      "100 - 200",
      "200 - 500",
      "500 - 1000",
      "1000 - 2000",
    ]),
    employeeCount: faker.random.number(),
    status: faker.helpers.randomize(["Off Track", "On Track", "At Risk"]),
    statusStartDate: faker.date.future(),
    statusEndDate: faker.date.future(),
    industry: faker.helpers.randomize(["Medical", "Insurance"]),
    logo: faker.image.imageUrl(),
    carriers: {},
    addressId: faker.random.uuid(),
  };
});

const employees = _.times(20, function (n) {
  var project_id = projects[0].id;
  if (n > 5 && n < 10) {
    project_id = projects[5].id;
  } else if (n > 10 && n < 15) {
    project_id = projects[10].id;
  } else if (n > 15) {
    project_id = projects[15].id;
  }
  return {
    id: faker.random.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    projectId: project_id,
    dob: faker.date.future(),
    gender: faker.name.gender(),
    email: faker.internet.email(),
    phone: faker.phone.phoneNumber(),
    empType: faker.helpers.randomize(["Employee", "Dependent"]),
    zip: faker.address.zipCode(),
    carrierId: faker.random.uuid(),
    carrierPlanName: faker.helpers.randomize(["Anthem", "Cigna"]),
    carrierPlanType: faker.helpers.randomize(["Anthem", "Cigna"]),
    planStartDate: faker.date.future(),
    planEndDate: faker.date.future(),
    parentId: faker.random.uuid(),
  };
});

module.exports = {
  users,
  projects,
  employees,
};