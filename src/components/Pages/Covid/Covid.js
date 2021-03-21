import {useState,useEffect} from 'react';
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
  return (
    <section>
      <div className="flex items-center w-full overflow-hidden bg-blue-500 pt-32 sm:pt-20">
          <h1 class="text-xl sm:text-3xl font-semibold text-center w-full m-5 text-white">CORONAVIRUS</h1>
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