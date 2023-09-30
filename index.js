const data = require("./task.json");
const _ = require("lodash");
const result1 = data.groupPermissions.map(
  ({ permissions, groupPermissionCode, groupPermissionName }) =>
    permissions.map((i) => ({
      ...i,
      groupPermissionCode,
      groupPermissionName,
    }))
);

const result = result1.reduce((previousValue, currentValue) => {
  return previousValue.concat(currentValue);
}, []);

const newData = _.chain(result)
  .map((x) => ({
    ...x,
    activeChannelCode: x.activeChannelCode || "OTHER",
    activeChannelName: x.activeChannelName || "Khác",
  }))
  .groupBy("activeChannelCode", "groupPermissionCode")
  .value();

function transformData(data) {
  const transformedData = _.mapValues(data, (dataArray) => {
    const groupedData = _.groupBy(
      _.concat(...dataArray),
      "groupPermissionCode"
    );
    return _.mapValues(groupedData, (group) => group);
  });
  return transformedData;
}

const transformedData = transformData(newData);
console.log(transformedData);
