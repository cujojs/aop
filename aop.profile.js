var profile = (function(){
	var testRE = /^aop\/test\//;
	return {
		resourceTags: {
			test: function(filename, mid){
				// Tag test files as such
				return testRE.test(mid);
			},
			amd: function(filename, mid){
				// Tag the module as AMD so it doesn't get
				// wrapped by the Dojo builder
				return mid == "aop/aop";
			},
			copyOnly: function(filename, mid){
				// Don't process package.json
				return mid == "aop/package.json";
			}
		}
	};
})();
