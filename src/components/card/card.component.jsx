
import './card.styles.css';

//its argument is the property, the value inside is an object
//the object has name, email, id properties
//same as stating monster.name, monster.email, monster.id 
const Card = ({ monster }) => {
  const { name, email, id } = monster;

  let randomSprite = [
    {type: 'bottts', id: 0}
  ]

  let grabRandomSprite = (arr) => arr[Math.floor(Math.random() * arr.length)]['type'];

  return (
    <div className="card-container" key={id}>
      <img className='monster-img'
        src={`https://avatars.dicebear.com/api/${grabRandomSprite(randomSprite)}/${id}.svg`} 
        alt={`monster ${name}`} />
      <h2 className="card-name-title">{name}</h2>
      <div className="email-border">
        <p className='email'>{email}</p>
      </div>
      </div>
  )
}

export default Card;