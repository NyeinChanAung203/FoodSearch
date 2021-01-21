import React,{useEffect,useState} from 'react';
import Recipe from './Receipe';
import './index.css'

function App() {
  const APP_ID = '9ecfaab2'
  const APP_KEY = 'cd3f2260bebe3e8a24d67cdce4cad668'
  

  const [recipes,setRecipes] = useState([]);
  const [search,setSearch] = useState('');
  const [query,setQuery] = useState('chicken')

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
  useEffect(() => {
    getRecipes();
    console.log('effect',recipes);
  }, [query])

  const getRecipes = async() =>{
    const response = await fetch(url)
    const data = await response.json()
    setRecipes(data.hits)
    console.log(recipes)
  }
  const getSearch = (e) =>{
    e.preventDefault();
    console.log(search)
    setQuery(search)
    setSearch('')
  }
  return (
    <div className="App container text-center p-3">
      <h1 className="font-weight-bold">Search The Food You Love</h1>
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col">
          <form className="w-3" onSubmit={getSearch}>
            <div className="input-group mb-3">
                <input 
                  type="text" 
                  aria-describedby="search-btn" 
                  className="form-control" 
                  value={search} 
                  onChange={(e)=>setSearch(e.target.value)}/>
                <div className="input-group-append">
                  <button className="btn btn-outline-secondary" type="submit" id="search-btn">Search</button>
                </div>
            </div>
          </form>
        </div>
        <div className="col-md-3"></div>
      </div>
      
      <div className="row row-cols-1 row-cols-lg-2 row-cols-md-2">
          {recipes.map( (r)=>{
            return <Recipe 
                      key={r.recipe.label} 
                      title={r.recipe.label} 
                      calories={r.recipe.calories} 
                      image={r.recipe.image}
                      ingredients={r.recipe.ingredients}  
                    />
          })}
       </div>
        
      
    </div>
  );
}

export default App;
