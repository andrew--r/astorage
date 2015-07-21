(function(w, l, j) {

  var isLocalStorageAvailable,
      isJsonParserAvailable,
      messages;

  messages = {
    ls: 'localStorage is not available',
    json: 'JSON is not available',
    full: 'Data can\'t be saved because localStorage is full'
  };

  isLocalStorageAvailable = (l in w && w[l] != undefined);
  isJsonParserAvailable = (j in w && w[j] != undefined);

  if (!isLocalStorageAvailable) {
    throw new Error(messages.ls);
  }
  if (!isJsonParserAvailable) {
    throw new Error(messages.json);
  }

  w.astorage = {

    set: function(key, value) {
      try {
        w[l].setItem(key, w[j].stringify(value));
      } catch (e) {
        console.warn(messages.full);
      }
    },

    get: function(key) {
      return w[j].parse(w[l].getItem(key));
    },

    remove: function(key) {
      w[l].removeItem(key);
    },

    clear: function() {
      w[l].clear();
    },

    get length() {
      return w[l].length;
    }
  };

})(window, 'localStorage', 'JSON');