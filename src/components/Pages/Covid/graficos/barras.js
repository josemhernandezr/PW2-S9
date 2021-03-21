import {Bar} from 'react-chartjs-2';

function Barra({confirmed,critical,deaths,recovered}){

  const data ={
    labels: ['Casos Confirmados', 'Casos Criticos', 'Muertes', 'Recuperados'],
    datasets:[
      {
      backgroundColor: [
        'rgba(255, 99, 132, 0.1)',
        'rgba(54, 162, 235, 0.1)',
        'rgba(255, 206, 86, 0.1)',
        'rgba(75, 192, 192, 0.1)',
        'rgba(153, 102, 255, 0.1)',
        'rgba(255, 159, 64, 0.1)'
        ],
        borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
        ],
      borderWidth: 1,
      hoverBackgroundColor: [
        'rgba(255, 99, 132, 0.4)',
        'rgba(54, 162, 235, 0.4)',
        'rgba(255, 206, 86, 0.4)',
        'rgba(75, 192, 192, 0.4)',
        'rgba(153, 102, 255, 0.4)',
        'rgba(255, 159, 64, 0.4)'
        ],
      hoverBorderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
        ],
      data:[confirmed,critical,deaths,recovered]
      }
  ]
  };

  const opciones={
    maintainAspectRatio: false,
    responsive: true
  }

  return (
    <div className="style">
      <h1 class="text-xl sm:text-3xl font-semibold text-center w-full m-5 black">CORONAVIRUS</h1>
      <div className="desing">
        <Bar data = {data} opcions = {opciones} width={700} height={500}/>
      </div>
      
    </div>
  )
}

export default Barra;