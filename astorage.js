(function(exports) {
 
  var ls = window.localStorage;

  exports.Astorage = function () {
    if (!isLocalStorageAvailable()) {
      throw new Error('localStorage is not supported');
    }

    this.set = function(key, value) {
      try {
        ls.setItem(key, JSON.stringify(value));
      } catch (e) {
        console.warn("Data can't be saved because localStorage is full");
      }
    };

    this.get = function(key) {
      return JSON.parse(ls.getItem(key));
    };

    this.remove = function(key) {
      ls.removeItem(key);
    };

    this.clear = function() {
      ls.clear();
    };
  }

  Astorage.prototype = {
    get length() {
      return ls.length;
    }
  }

  function isLocalStorageAvailable () {
    try {
      return 'localStorage' in window && window['localStorage'] !== null;
    } catch (e) {
      return false;
    }
  }
 
})(this);