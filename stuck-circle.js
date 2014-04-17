module.exports = function() {

};

if (typeof module !== 'undefined' && typeof module.exports == 'object') {
  module.exports = stuckcircle;
}

if (typeof window !== 'undefined') {
  window.stuckcircle = window.stuckcircle || stuckcircle;
}


