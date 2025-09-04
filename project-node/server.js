const express = require('express');
const AWS = require('aws-sdk');

const app = express();
const port = process.env.PORT || 3000;

// Configure CloudWatch
const cloudwatch = new AWS.CloudWatch({ region: 'ap-south-1' }); // Mumbai

// Function to push RequestCount metric
function pushRequestCount() {
  const params = {
    MetricData: [
      {
        MetricName: 'RequestCount',
        Dimensions: [
          { Name: 'ServiceName', Value: 'MyWebApp' }
        ],
        Unit: 'Count',
        Value: 1
      }
    ],
    Namespace: 'Devops-project/Metrics'
  };

  cloudwatch.putMetricData(params, (err, data) => {
    if (err) console.error('Error pushing metric:', err);
    else console.log('Metric sent:', data);
  });
}

// ✅ Health check endpoint (for ALB / Auto Scaling)
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// Example normal route
app.get('/', (req, res) => {
  // Push metric when user visits homepage
  pushRequestCount();
  res.send('Hello from MyWebApp!');
});

// Start Express server
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});

// Optional: push metric automatically every 10s (testing only)
setInterval(pushRequestCount, 10000);
