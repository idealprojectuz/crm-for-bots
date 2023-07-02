const { fetchMy } = require("./pgsql");
const getCount = async (table, where = null) => {
  try {
    let query = `SELECT COUNT(*) FROM ${table}`;
    if (where) {
      const whereKeys = Object.keys(where);
      const whereConditions = whereKeys.map(
        (key, index) => `${key} = $${index + 1}`
      );
      query += ` WHERE ${whereConditions.join(" AND ")}`;
    }

    const result = await fetchMy(query, where ? Object.values(where) : null);
    return result[0].count;
  } catch (e) {
    console.log(e);
    return 0;
  }
};

module.exports = getCount;
