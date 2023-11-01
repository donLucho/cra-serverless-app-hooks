import axios from "axios";

exports.handler = async (event, context, callback) => {

  try{
    // console.log( "event", event );
    // console.log( "context", context ); // { clientContext: {} }
    // console.log( "callback", callback );
    let earl = "https://icanhazdadjoke.com";
    let dadjokeoptions = { headers: { Accept: 'application/json' } };
    const response = await axios.get( earl , dadjokeoptions );
    const { data } = await response;
    console.log( "await data" , await data  );
    const netlifyresponseobject = {
      statusCode: 200
      , body: JSON.stringify( { msg: await data.joke } )
    };
    return netlifyresponseobject;
  }
  catch(err){
    console.log( 'response err catch: ', err );    
    const netlifyresponseerror = {
      statusCode: 500 , 
      body: JSON.stringify( { message: err.message } )
    };
    return netlifyresponseerror;
  }
};