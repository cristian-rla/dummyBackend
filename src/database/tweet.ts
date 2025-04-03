class TweetService{
    constructor(/*Pool with connections to db */){

    }
    
    getAllTweets(){
        return [0,1,2,3,4,5,6,7,8,9,10]; // Regreso del arreglo de números de la base de datos
    }
}

export default new TweetService();