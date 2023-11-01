import React from "react";
import { useState } from "react";

const LambdaDemo = () => {
  const [ loading, setLoading ] = useState( false );
  const [ msg, setMsg ] = useState( '' );

  const handleClick = (e) => {
    
    // console.log( "e.target.dataset.schmoo", e.target.dataset.schmoo );
    // console.log( "e.target.getAttribute('data-schmoo')" , e.target.getAttribute('data-schmoo') );

    // let baseEarl = "/.netlify/functions";
    // let fullUrl = `${baseEarl}/${e.target.dataset.schmoo}`;

    let fullUrl = undefined;
    if(e.target.dataset.schmoo === 'hello-world'){
      fullUrl = `/konichiwa`;
    }
    else 
    if(e.target.getAttribute('data-schmoo') === 'async-dadjoke'){
      fullUrl = `/joke`;
    }

    setLoading( true );

    fetch( fullUrl )
    .then( response => response.json() )
    .then( data => {
      console.log( "data: " , data );
      
      // this.setState( { loading: false, msg: data.msg } );
      setLoading( false );
      setMsg( data.msg );

    } )
    .catch( err => { console.log( "err: ", err ); } );

  };

  let element = (
    <React.Fragment>
      <p>
        <button onClick={ handleClick } data-schmoo="hello-world">{ loading ? "Loading..." : "Call Hello!" }</button>
        &nbsp;
        <button onClick={ handleClick } data-schmoo="async-dadjoke">{ loading ? "Loading..." : "Call Dad Joke!"}</button>
        <br />
        <span>{ msg }</span>
      </p>
    </React.Fragment>
  );

  return element;
};

export { LambdaDemo };