const Button = ( {title, isActive, onSelect} ) => {

    const active = isActive ? "btn-warning" : "btn-primary"

    return(
        <button className={`btn ${active}`} onClick={ () => onSelect() }>
            { title }
        </button>
    )
}
export default Button;