'use strict';

module.exports = function (kibana) {

  return new kibana.Plugin({

    uiExports: {
      visTypes: ['plugins/gauge_sg/gauge_sg']
    }

  });
};
