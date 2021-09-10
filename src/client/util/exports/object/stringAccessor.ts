import _ from "lodash";

const stringAccessor = ({ object, accessor }) => {
  try {
    const ret = _.get(object, accessor);
    return ret || {};
  } catch (err) {
    console.error(err);
  }
};

export default stringAccessor;
