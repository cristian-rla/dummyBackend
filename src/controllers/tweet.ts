import TweetService from "../database/tweet";

// No es necesario hacer una interfaz porque la clase ya dice cual es la estructura y los tipos de datos
class TweetController{
    service: typeof TweetService; // De haber utilizado el commonJS module, esto sería typeof TweetService, porque gracias al es modules, TweetService puede ser intepretado como un tipo y como una función (constructora)
    constructor(service: typeof TweetService){ // Al final sí hice typeof, porque el servicio exporta una instancia de un objeto.
        this.service = service;
    }

    getAllTweets(){

        // Solo regresar los números pares. ESto lo hago en el controlador, no en el query. Segundo comit
        return this.service.getAllTweets().filter((element) => element % 2 == 0); // QUe este arreglo, que es la fuente de datos, se regrese desde la base de datos. No conectar ninguna base de datos. Primer comit
    }
}

export default TweetController;