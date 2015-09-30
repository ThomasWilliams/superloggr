var superloggr = require('./index');

superloggr.trace('trace');
superloggr.debug('debug');
superloggr.info('info');
superloggr.warn('warn');
superloggr.error('error');
superloggr.fire('fire');

superloggr.error('another error', 'still more error');
superloggr.fire([ 'another fire', 'still more fire' ]);
