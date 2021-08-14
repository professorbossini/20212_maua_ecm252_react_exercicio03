import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css'
import doc1 from './images/doc1.jpg'

const App = () => {

    const docNames = {doc1: 'José da Silva', doc2: 'Maria da Silva', doc3: 'Jaquelines Mendes'}

    const estilosComponentePrincipal = () => {
        return {
            width: 1280,
            margin: 'auto',
            border: '1px solid black',
            backgroundColor: '#EEE',
            borderRadius: 8,
            padding: 12,
            textAlign: 'center'
        }
    }

    return (
        
        <div style={estilosComponentePrincipal()}>
            <h2>Profissionais de saúde</h2>
            <div style={{margin: 8, border: '1px solid #DDD', borderRadius: 8, padding: 8, display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
               
                <div className="profissional">
                    <p>{docNames.doc1}</p>
                    <img src={doc1}/>
                </div>

                <div className="profissional">
                    <p>{docNames.doc2}</p>
                    <img src={process.env.PUBLIC_URL + 'doc2.jpg'}/>
                </div>

                <div className="profissional">
                    <p>{docNames.doc3}</p>
                    <img src="https://images.unsplash.com/photo-1613918108466-292b78a8ef95?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=755&q=80" />
                </div>
            </div>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)