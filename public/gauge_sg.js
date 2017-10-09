// we need to load the css ourselves
import 'plugins/gauge_sg/gauge_sg.less';
// we also need to load the controller and used by the template
import 'plugins/gauge_sg/gauge_sg_controller';
import { TemplateVisTypeProvider } from 'ui/template_vis_type/template_vis_type';
import { VisTypesRegistryProvider } from 'ui/registry/vis_types';
import { VisSchemasProvider } from 'ui/vis/schemas';
import gaugeVisTemplate from 'plugins/traffic_sg/traffic_sg.html';
import gaugeVisParamsTemplate from 'plugins/traffic_sg/traffic_sg_params.html';

// register the provider with the visTypes registry
VisTypesRegistryProvider.register(MetricVisProvider);

function MetricVisProvider(Private) {
  var TemplateVisType = Private(TemplateVisTypeProvider);
  var Schemas = Private(VisSchemasProvider);

  // return the visType object, which kibana will use to display and configure new
  // Vis object of this type.
  return new TemplateVisType({
    name: 'gauge',
    title: 'Gauge',
    description: 'Display as Gauge Chart',
    icon: 'fa-tachometer',
    template: gaugeVisTemplate,
    params: {
      defaults: {
        titleGauge: null,
        labelGauge: null,
        heightGauge: 180,
	      minGauge: 0,
	      maxGauge: 100,
        sizeGauge: 100,
	      level1Gauge: 30,
	      colorlevel1Gauge: '#FF0000',
	      level2Gauge: 60,
	      colorlevel2Gauge: '#F97600',
	      level3Gauge: 90,
	      colorlevel3Gauge: '#F6C600',
	      level4Gauge: 100,
	      colorlevel4Gauge: '#60B044'
      },
      editor: gaugeVisParamsTemplate
    },
    schemas: new Schemas([
      {
        group: 'metrics',
        name: 'metric',
        title: 'Metric',
        min: 1,
        max: 1,
        defaults: [
          { type: 'count', schema: 'metric' }
        ]
      },
      {
        group: 'buckets',
        name: 'segment',
        title: 'X-Axis',
        min: 0,
        max: 2,
        aggFilter: ['date_histogram', 'terms']
      }

    ])
  });
}

// export the provider so that the visType can be required with Private()
export default MetricVisProvider;