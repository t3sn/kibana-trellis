module.exports = function(kibana) {
	return new kibana.Plugin({
		uiExports: {
			visTypes: ['plugins/bar-vis-trellis/trellis']
		}
	});
};