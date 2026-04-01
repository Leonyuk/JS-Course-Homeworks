// console.log("Hello");
import * as validator from "validator";
import _ from "lodash";

const email = "test@gmail.com";
console.log("Валідація:", validator.default.isEmail(email));
