/* Here you put all the middleware functions. for example:*/

export const middleware1 = (req, res, next) => {
    /* Here you put all the code for handling the middleware1 function*/
    /* For example: */
    console.log('middleware1...');
    next();
}

export const middleware2 = (req, res, next) => {
    /* Here you put all the code for handling the middleware2 function*/
    /* For example: */
    console.log('middleware2...');
    next();
}