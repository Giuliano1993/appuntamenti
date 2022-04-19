import React from 'react';

class Home extends React.Component {
    render(){
        return(
            <div>
                <h1  className="px-4 text-title font-bold my-4 text-emerald-900">Benvenuti!</h1>
                <div className="grid grid-cols-3">

                    <p className="text-emerald-800 px-4 my4 text-lg font-medium self-center">
                        Benvenuti su Appuntament.io, la free web-app per l'organizzazione dei tuoi appuntamenti. Utilizzabile sia per il tuo ufficio che per gli impegni di vita quotidiana, la flessibilitàò di utilizzo è la chiave di volte di questo sistema.
                    </p>
                    <div></div>
                    <img src="pictures/calendar.jpg"/>
                </div>
            </div>
        );
    }
}
export default Home;