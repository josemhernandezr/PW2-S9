import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';
import './graficobarras.css';
const Barras = ({country,code,confirmed,critical,deaths,recovered}) => {
    const data = {
    labels: ['Casos Confirmados: '+confirmed,'Recuperados: '+recovered,'Muertes: '+deaths,'Casos Criticos: '+critical],
    datasets: [{
        label: ['Total de casos en: '+country+' ('+code+')'],
        value:'0',
        data: [confirmed,recovered,deaths,critical],
        backgroundColor: [
        'rgba(21, 101, 192,0.7)',
        'rgba(77, 208, 225,0.7)',
        'rgba(0, 131, 143,0.7)',
        'rgba(3, 169, 244,0.7)'
        ],
        borderColor: [
        'rgba(21, 101, 192,1)',
        'rgba(77, 208, 225,1)',
        'rgba(0, 131, 143,1)',
        'rgba(3, 169, 244,1)'
        ],
        borderWidth: 1,
    }]
    }
    const opciones={
        maintainAspectRatio: false,
        responsive: true,
        showTooltips: true,
        showLabel: false
    }
    


    return (
        <div class="flex flex-wrap overflow-hidden">
            <div id="barras" class="flex w-full h-96 lg:h-100 overflow-hidden lg:w-2/5">
            </div>
            <div class="text-center w-full overflow-hidden lg:w-3/5">
                <h2 className="text-l sm:text-xl font-semibold text-center w-full p-5 text-white bg-yellow-500">
                    Casos de Covid-19 en {country}-{code}
                </h2>
                <div className="w-10/12 lg:w-11/12 inline-block">
                    <Bar
                    data={data}
                    width={400}
                    height={410}
                    options={opciones}
                    />
                </div>
            </div>
        </div>

    );


}
export default Barras;

