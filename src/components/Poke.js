import {Link} from 'react-router-dom';

const Poke = (props) => {

  return(
    <div>
      <Link style={{color: 'black'}} to={`/pokemon/${props.pokemon}`}><h2>{props.pokemon}</h2></Link>
    </div>
  )
}

export default Poke;