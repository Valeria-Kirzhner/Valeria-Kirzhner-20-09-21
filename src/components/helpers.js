const setIconId = (iconId) => {
  let icon = iconId;
  const reg = /[0-9]{2}/;
  const isTwoDigits = reg.test(iconId);
  toString(iconId);
  if (!isTwoDigits) {
    icon = "0" + iconId;
  }
  return icon;
};

const helpers = {
  setIconId,
};
export default helpers;
