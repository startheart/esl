define( 
    function ( require ) {
        var h1 = require( './h1' );
        return {
            name: 'amd/complexCircleDependency/h3',
            check: function () {
                var valid = 
                    h1.name == 'amd/complexCircleDependency/h1';
                return valid;
            }
        };
    }
);