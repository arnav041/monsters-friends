import { Card } from '../card-component/card'
import './monster-list.style.css'

export const Cardlist = (props) => {
    return (
        <div className="card_list"  >
            {props.monsters.map(monster => (
                <Card key={monster.id} monsters={monster} />
            ))}
        </div>
    )
}
