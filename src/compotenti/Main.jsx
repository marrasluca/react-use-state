import languages from "../data/languages"
import Button from "./Button"
import Card from "./Card"
import { useState } from "react"


const Main = () => {
const[selectedLanguage, setSelectedLanguage] = useState( null )

const renderLanguage = () => languages.map((language) => {
    const active = selectedLanguage === language

    return(
        <Button key={language.id} isActive={active} title={language.title}
         onSelect={() => setSelectedLanguage (language)} />
    )
})
    const renderSelectLanguage = () => {
        if ( !selectedLanguage ) return <h3>Nessun Linguaggio Selezionato</h3>

        const { title, description } = selectedLanguage
        return ( 
            <Card title={title} description={description}/>
        )
    }
    return(
        <main className="container">
            <div className="mb-4">
                { renderLanguage() }
            </div>
            <div> 
                { renderSelectLanguage() }
            </div>
        </main>
    )
}


  


export default Main;