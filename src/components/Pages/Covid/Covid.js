import {useState,useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import firebaseSDK from '../../../FireBaseInit';
import getCountryCodeTotal from './CovidApi';
import Barras from './graficos/graficobarras';
import Dona from './graficos/graficopastel';

function Covid (){
  
  let [data, setdata] = useState();
  const [code, setcode] = useState();
  const [confirmed, setconfirmed] = useState();
  const [country, setcountry] = useState();
  const [critical, setcritical] = useState();
  const [deaths, setdeaths] = useState();
  const [lastChange, setlastChange] = useState();
  const [lastUpdate, setlastUpdate] = useState();
  const [recovered, setrecovered] = useState();

  function snap(snapshot){
    // const datos=[];
    // snapshot.forEach((childSnapshot) => {
    //   var childKey = childSnapshot.key;
    //   var childData = childSnapshot.val();
    //   datos.push(childKey)
    // });
    // setdata(datos);
    setdata(snapshot.val());
    setcode(snapshot.child('code').val());
    setconfirmed(snapshot.child('confirmed').val());
    setcountry(snapshot.child('country').val());
    setcritical(snapshot.child('critical').val());
    setdeaths(snapshot.child('deaths').val());
    setlastChange(snapshot.child('lastChange').val());
    setlastUpdate(snapshot.child('lastUpdate').val());
    setrecovered(snapshot.child('recovered').val());
  }
  useEffect(
    ()=>{
       firebaseSDK.database().ref('covid').child('0').get().then(function(snapshot) {
         if (!(snapshot.exists())){
             console.log(" No encontrado ");
             getCountryCodeTotal((err, data)=>{
               if(err){
                 console.log(err);
               } 
               else{
                    firebaseSDK.database().ref('covid').set(data);
                    firebaseSDK.database().ref('covid').child('0').get().then(function(snapshot) {
                      snap(snapshot);
                    });
               }
             })
         }else{

          // snapshot.forEach((childSnapshot) => {
          //   var childKey = childSnapshot.key;
          //   var childData = childSnapshot.val();
          //   console.log(childKey+":"+childData);
          // });
         
          // const datos=snapshot.val();
          // for (const key in datos) {
          //   console.log(key+":"+datos[key]);
          // }
          snap(snapshot);
          console.log(data);

         }
       });
    },
    []
  );
  const actualizar = ()=>{
    getCountryCodeTotal((err, data)=>{
      if(err){
        console.log(err);
      } 
      else{
           firebaseSDK.database().ref('covid').set(data);
           firebaseSDK.database().ref('covid').child('0').get().then(function(snapshot) {
             snap(snapshot);
           });
           window.parent.location = window.parent.location.href;
      }
    })
  }
  return (
    <section>
      <div className="flex items-center w-full overflow-hidden bg-blue-500 mt-32 md:mt-20">
          <h1 className="text-xl sm:text-3xl font-semibold text-center w-full m-5 text-white">CORONAVIRUS</h1>
          <button onClick={actualizar} className="bg-green-500 text-white p-2 mr-5 rounded-lg hover:bg-white hover:text-green-500">
              <svg class="h-6 w-6 currentcolor"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polyline points="23 4 23 10 17 10" />  <polyline points="1 20 1 14 7 14" />  <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" /></svg>
          </button>
      </div>
      <Barras 
        country={country}
        code={code}
        confirmed={confirmed}
        critical={critical}
        deaths={deaths}
        recovered={recovered}
      >
      </Barras>
      <div className="flex flex-wrap overflow-hidden w-full bg-black text-white text-center p-5">
          <h2 className="w-full md:w-1/2 py-2">Último cambio: <span className="text-blue-500 p-2">{lastChange}</span></h2>
          <h2 className="w-full md:w-1/2 py-2">Última actualización: <span className="text-blue-500 p-2">{lastUpdate}</span></h2>
      </div>
      <Dona
      country={country}
      code={code}
      confirmed={confirmed}
      critical={critical}
      deaths={deaths}
      recovered={recovered}
    ></Dona>
    </section>
  );
}

export default Covid;