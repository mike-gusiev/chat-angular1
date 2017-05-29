module.exports = {
	parserOptions: {
		"ecmaVersion": 7,
		"sourceType": "module",
		"ecmaFeatures": {
			"jsx": true,
		}
	},
	plugins: [
		"react",
		"react-native"
	],
  rules: {
    'angular/no-service-method': 0
  }
};
