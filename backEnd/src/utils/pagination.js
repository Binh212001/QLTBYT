const pagination = async (page, limit = 7) => {
  if (page <= 0) {
    return {
      skip: 0,
      limit,
    };
  } else {
    return {
      skip: (page - 1) * limit,
      limit,
    };
  }
};

module.exports = pagination;
