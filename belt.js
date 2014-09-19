belt = (function(){
  'use strict';

    var string2type = {
        '[object Boolean]': 'boolean',
        '[object Number]': 'number',
        '[object String]': 'string',
        '[object Function]': 'function',
        '[object Array]': 'array',
        '[object Date]': 'date',
        '[object RegExp]': 'regexp',
        '[object Object]': 'object',
        '[object Error]': 'error'
    },

    belt = {
        typeof: function( obj ) {
            if ( obj === null ) {
                return obj + '';
            }

            // Support: Android < 4.0, iOS < 6 (functionish RegExp)
            return typeof obj === 'object' || typeof obj === 'function' ?
                string2type[ toString.call(obj) ] || 'object' :
                typeof obj;
        }
    };

    return belt;
})();
