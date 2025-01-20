export const logger = (data: any) => {
  if (!__DEV__) {
    console.log(data);
  }
};
