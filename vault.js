"use strict";
module.exports = function() {
  let myVault = {};

  function setValue(key, value) {
    if (!key || !value) {
      return null;
    }
    myVault.key = value;
  }

  function getValue(key) {
    if (myVault.key) {
      return myVault.key;
    } else {
      return null;
    }
  }

  return {
    setValue: setValue,
    getValue: getValue
  };
};
