var data = {
    labels: ["Overall", "Assessment", "Feedback and communication", "Engagement with the learning activities"],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [65, 59, 90, 81]
        },
        {
            label: "My Second dataset",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [28, 48, 40, 19]
        }
    ]
};

  $(document).ready(function() {
    var $chart = $('#myChart');
    if ($chart.length === 0){
        return;
    }
    var ctx = $chart.get(0).getContext('2d');
    var myRadarChart = new Chart(ctx).Radar(data, {
            pointDotRadius : 3,
            datasetStroke : true    
    });
  });