// Include the angular controller
require('plugins/bar-vis-trellis/trellisController');
require('plugins/bar-vis-trellis/render.css');
require('plugins/bar-vis-trellis/trellis_vis_params');

// The provider function, which must return our new visualization type
function TrellisProvider(Private) {
	var TemplateVisType = Private(require('ui/template_vis_type/TemplateVisType'));
	// Include the Schemas class, which will be used to define schemas
	var Schemas = Private(require('ui/Vis/Schemas'));

	// Describe our visualization
	return new TemplateVisType({
		name: 'barTrellis', // The internal id of the visualization (must be unique)
		title: 'Trellis', // The title of the visualization, shown to the user
		description: 'A space optimised chart to show various measures with shared dimension', // The description of this vis
		icon: 'fa-bars', // The font awesome icon of this visualization
		template: require('plugins/bar-vis-trellis/render.html'), // The template, that will be rendered for this visualization
		editor: '<trellis-vis-params></trellis-vis-params>',
		// Define the aggregation your visualization accepts
		schemas: new Schemas([
				{
					group: 'metrics',
					name: 'metric',
					title: 'Metric',
					min: 1,
					defaults: [
						{ type: 'count', schema: 'metric' }
					]
				},
				{
					group: 'buckets',
					name: 'bucket',
					icon: 'fa fa-bars',					
					title: 'Bucket',
					min: 1,
					max: 1,
					mustBeFirst: true,					
					aggFilter: '!geohash_grid'
				},
				{
					group: 'buckets',
					name: 'split',
					icon: 'fa fa-th',
					title: 'Split Bars',
					aggFilter: '!geohash_grid'
				}
			])
	});
}

require('ui/registry/vis_types').register(TrellisProvider);
