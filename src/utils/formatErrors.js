import { capitalize } from './capitalize';

export const formatErrors = (errors: Array) => {
  let formattedErrors = {};
  if (errors instanceof Array) {
    errors.reduce((errorPaths, error) => {
      const [firstPath] = error.path;
      if (errorPaths.includes(firstPath)) {
        return errorPaths;
      }
      const newMessage = capitalize(error.message.replace(/"/gi, ''));
      Object.assign(
        formattedErrors,
        JSON.parse(`{"${firstPath}":"${newMessage}"}`)
      );
      return [...errorPaths, firstPath];
    }, []);
  } else if (errors instanceof Object) {
    formattedErrors = errors;
  } else {
    formattedErrors = { error: errors };
  }
  return formattedErrors;
};
