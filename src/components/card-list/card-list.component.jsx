import './card-list.styles.css';
import Card from '../card/card.component'

const CardList = ({ monsters }) => (
    <div className='card-list'>
      {
        monsters.map((monster) => {
          //each iteration returns that card component "monster" from card.component
          return (
            <Card monster={ monster } />
          )
        })
      }
  
    </div>
  )


export default CardList;