/**
 * New Relic agent configuration.
 * test
 * See lib/config.defaults.js in the agent distribution for a more complete
 * description of configuration variables and their potential values.
 */
var nconf = require('nconf')
exports.config = {
  /**
   * Array of application names.
   */
  app_name : ['HabitRPG'],
  /**
   * Your New Relic license key.
   */
  license_key : nconf.get('NEW_RELIC_LICENSE_KEY'),
  logging : {
    /**
     * Level at which to log. 'trace' is most useful to New Relic when diagnosing
     * issues with the agent, 'info' and higher will impose the least overhead on
     * production applications.
     */
    level : 'warning'
  }
};
