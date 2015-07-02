var TeamCityReporter;
(function (TeamCityReporter) {
	var teamcityreporter = require('tslint-teamcity-reporter');
	var formatter = new teamcityreporter.Formatter();

	function reporter(output, file, options) {
	    var failures = [];
	    output.forEach(function (o) {
	        var failure = {
	            getFileName: function() {
	                return o.name;
	            },
	            getStartPosition: function () {
	                return {
	                    getLineAndCharacter: function() {
	                        return {
	                            line: function() {
	                                return o.startPosition.line;
	                            },
	                            character: function() {
	                                return o.startPosition.character;
	                            }
	                        }
	                    }
	                }
	            },
	            getFailure: function () {
	                return o.failure;
	            },
	            getRuleName: function () {
	                return o.ruleName;
	            }
	        }
	        failures.push(failure);
	    });
	    process.stdout.write(formatter.format(failures));
	};
	
	TeamCityReporter.reporter = reporter;
})(TeamCityReporter || (TeamCityReporter = {}));

module.exports = TeamCityReporter.reporter;