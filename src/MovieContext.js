import React,{useState, createContext} from 'react';
import Movies from './Movie';


export const MovieContext = createContext();

export const MovieProvider = (props) =>{

    const [movies, setMovies] = useState([
        {
            name:'Harry Potter',
            price : '$10',
            id: 23124
        },
        {
           name:'Game of Thrones',
           price : '$10',
           id: 23125
       },
       {
           name:'Inception',
           price : '$10',
           id: 23126
       }
   ]);
    return (
       <MovieContext.Provider value={[movies,setMovies]}>
           {props.children}
       </MovieContext.Provider>
    );
}