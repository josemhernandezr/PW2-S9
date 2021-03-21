import React, {Component} from 'react';
import { Line } from 'react-chartjs-2';

const data = {
    labels: ['Casos Confirmados', 'Casos Criticos', 'Muertes', 'Recuperados'],
    datasets: [
      {
        label: 'CASOS DE CORONAVIRUS EN HONDURAS',
        fill: true,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [70, 59, 80, 81]
      }
    ]
  };

class LineDemo extends Component {
    render() {
        return (
            <div>
                <h2>GRAFICO</h2>
                <Line ref="chart" data={data} width={100}
                height={20} />
            </div>
            );
    }
    componentDidMount() {
        const { datasets } = this.refs.chart.chartInstance.data
        console.log(datasets[0].data);
    }
}
export default LineDemo;

