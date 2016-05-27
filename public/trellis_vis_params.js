define(function (require) {
  var _ = require('lodash');

  require('ui/modules').get('bar-vis-trellis')
  .directive('trellisVisParams', function () {
    return {
      restrict: 'E',
      template: require('plugins/bar-vis-trellis/trellis_vis_params.html'),
      link: function ($scope) {
        $scope.$watchMulti([
          'vis.params.showPartialRows',
          'vis.params.showMeticsAtAllLevels'
        ], function () {
          if (!$scope.vis) return;

          var params = $scope.vis.params;
          if (params.showPartialRows || params.showMeticsAtAllLevels) {
            $scope.metricsAtAllLevels = true;
          } else {
            $scope.metricsAtAllLevels = false;
          }
        });
      }
    };
  });
});
