import { build, fake } from "test-data-bot";

const buildUser = build("user").fields({
  name: fake((f) => f.name.firstName() + " " + f.name.lastName()),
  phoneNumber: fake(
    (f) =>
      f.random.number({ min: 0, max: 0 }) +
      "" +
      f.random.number({ min: 6, max: 9 }) +
      "" +
      f.random.number({ min: 0, max: 9 }) +
      "" +
      f.random.number({ min: 0, max: 9 }) +
      "" +
      f.random.number({ min: 0, max: 9 }) +
      "" +
      f.random.number({ min: 0, max: 9 }) +
      "" +
      f.random.number({ min: 0, max: 9 }) +
      "" +
      f.random.number({ min: 0, max: 9 }) +
      "" +
      f.random.number({ min: 0, max: 9 }) +
      "" +
      f.random.number({ min: 0, max: 9 }) +
      ""
  ),
  email: fake((f) =>  f.internet.email()),
  password: fake((f) => f.internet.password()),
  role: "customer",
});

export { buildUser };
