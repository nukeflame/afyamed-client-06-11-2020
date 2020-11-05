// Routes Navigation

export default modules => {
  if (modules && modules.length > 0) {
    return {
      items: [...modules]
    };
  }
};
