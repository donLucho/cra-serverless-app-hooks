exports.handler = async (event, context, callback) => {

  try{
    
    // console.log( "event", event );
    // console.log( "context", context ); // { clientContext: {} }
    // console.log( "callback", callback );
    
    const message = 'Konichiwa, baby!';
    const netlifyresponseobject = {
      statusCode: 200
      , body: JSON.stringify( { msg: await message } )
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