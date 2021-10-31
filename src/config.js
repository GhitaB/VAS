export const APP_NAME = "Demo Virtual After School";
export const APP_DESCRIPTION = `Lorem ipsum dolor sit amet, consetetur
  sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
  magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
  dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
  Lorem ipsum dolor sit amet.`;

export const appConfig = {
  name: APP_NAME,
  description: APP_DESCRIPTION,

  workflow: { // TODO is this secure?
    home: {
      anonymous: true,
      member: true,
      admin: true,
    },
    login: {
      anonymous: true,
      member: true,
      admin: true,
    },
    logout: {
      anonymous: false,
      member: true,
      admin: true,
    },
    admin: {
      anonymous: false,
      member: false,
      admin: true,
    },
  }
}
