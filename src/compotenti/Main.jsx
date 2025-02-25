import languages from "../data/languages"
import Button from "./Button"
import Card from "./Card"

const Main = () => {
    return(
        <>
        <h1>Main</h1>
        {
            languages.map( (element) => {
                return <Button key={element.id} title={element.title} />
            })
              
        }
        

        <Card/>
        
        </>
    )
}

export default Main;