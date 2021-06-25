import "./card.css"
 
export const Card = props => {
    return (
        <div className="card">
            <img alt="monster" src={`https://robohash.org/${props.monsters.id}?set=set2&size=200x220`} />
            <h1>{props.monsters.name}</h1>
            <p>{props.monsters.email}</p>
        </div>
    )
}