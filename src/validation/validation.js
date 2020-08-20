import { isEmpty, reduce } from 'lodash';
import PasswordValidator from 'password-validator';

// eslint-disable-next-line no-useless-escape
const EMAIL_TESTER = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-?\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

const passwordSchema = new PasswordValidator();
passwordSchema
  .is()
  .min(8) // Minimum length 8
  .is()
  .max(100) // Maximum length 100
  .has()
  .uppercase() // Must have uppercase letters
  .has()
  .lowercase() // Must have lowercase letters
  .has()
  .digits(2) // Must have at least 2 digits
  .has()
  .not()
  .spaces(); // Should not have spaces
const passValidationMessages = {
  min: 'minimum length 8',
  max: 'maximum length 100',
  uppercase: 'must has uppercase letters',
  lowercase: 'must has lowercase letters',
  digits: 'must has at least 2 digits',
  spaces: 'should not has spaces',
};

const CONFIRMATION_CODE_LENGTH = 4;

const validateEmail = (value) => {
  if (isEmpty(value)) {
    return { isValid: false, message: 'Please, provide an email.' };
  }
  if (EMAIL_TESTER.test(value)) {
    return { isValid: true };
  }

  return { isValid: false, message: 'Email is not correct!' };
};

const validatePassword = (value) => {
  const failedRules = passwordSchema.validate(value, { list: true });
  if (isEmpty(failedRules)) {
    return { isValid: true };
  }
  const message = reduce(
    failedRules,
    (acc, ruleKey, index) => {
      if (index !== failedRules.length - 1) {
        return `${acc + passValidationMessages[ruleKey]}, `;
      }

      return `${acc + passValidationMessages[ruleKey]}!`;
    },
    'Password '
  );
  return { isValid: false, message };
};

const validateCode = (value) => {
  if (isEmpty(value)) {
    return { isValid: false, message: 'Please provide the code' };
  }
  if (value.length !== CONFIRMATION_CODE_LENGTH) {
    return { isValid: false, message: 'Code must contain 4 digits' };
  }

  return { isValid: true };
};

export { validateEmail, validatePassword, validateCode, CONFIRMATION_CODE_LENGTH };
