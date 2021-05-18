import Poke from './Poke';
import useAxios from '../hooks/useAxios';
const List = () => {

  // const [pokemon, setPokemon] = useState([]);

  // useEffect(() => {
  //   axios.get('https://pokeapi.co/api/v2/pokemon/').then(res => {
  //     setPokemon(res.data.results)
  //   }).catch(err => console.log(err))
  // }, []);

  // console.log(pokemon);



  const [pokemon, setPokemon] = useAxios('https://pokeapi.co/api/v2/pokemon/', 'results');

  console.log(useAxios('https://pokeapi.co/api/v2/pokemon/', 'results'));


  return (
    <div>
      <h1>List</h1>
      {pokemon.map((poke, i) => {
        return <Poke pokemon={poke.name} key={i} />
      })}

    </div>
  )
}
export default List