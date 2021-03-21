import React, {Component} from 'react';
import {Doughnut} from 'react-chartjs-2';
import {HorizontalBar} from 'react-chartjs-2';
const Dona = ({country,code,confirmed,critical,deaths,recovered}) => {
    const data = {
        labels: ['Casos Confirmados: '+confirmed,'Recuperados: '+recovered,'Muertes: '+deaths,'Casos Criticos: '+critical],
        datasets: [{
            label: ['Total de casos en: '+country+' ('+code+')'],
            data: [confirmed,recovered,deaths,critical],
            backgroundColor: [
            'rgba(21, 101, 192,1)',
            'rgba(77, 208, 225,1)',
            'rgba(0, 131, 143,1)',
            'rgba(3, 169, 244,1)'
            ],
            hoverBackgroundColor: [
            'rgba(21, 101, 192,0.8)',
            'rgba(77, 208, 225,0.8)',
            'rgba(0, 131, 143,0.8)',
            'rgba(3, 169, 244,0.8)'
            ]
        }]
    };
    const opciones={
        maintainAspectRatio: false,
        responsive: true,
        showTooltips: true,
        showLabel: false
    }

    return (
        <div>
            <h2 className="text-l sm:text-xl font-semibold text-center w-full p-5 text-white bg-yellow-500">
                Casos de Covid-19 en {country}-{code}
            </h2>
            <div class="flex flex-wrap overflow-hidden h-96">
                <div class="w-full overflow-hidden lg:w-1/2 p-5 border-2 border-gray-200">
                    <Doughnut
                        className="w-2/5 h-2/5"
                        data={data}
                        options={opciones}
                    />
                </div>
                <div class="w-full overflow-hidden lg:w-1/2 p-5 border-2 border-gray-200">
                    <HorizontalBar
                    data={data}
                    />
                    </div>
            </div>      
	    </div>
    );


}
export default Dona;
