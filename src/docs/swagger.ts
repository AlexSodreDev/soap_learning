import { findAddresses } from "./schemas/addresses"

export default {
  openapi: "3.0.0",
  info: {
    title: "Soap Learning Documentation",
    description: "API for learnig about SOAP",
    version: "1.0.0",
    contact: {
      email: "testcontact@testmail.com"
    }
  },
  paths: {
    "/addresses": {
      get: findAddresses,
    }
  }
}