function stringToSignedInteger(string) {
  let theInteger = stringToInteger(string.replace(/^[+-]/, ''));
  return string[0] === '-' ? -theInteger : theInteger;
}