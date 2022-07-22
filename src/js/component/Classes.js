import React from "react";

class Characters{
   constructor(characterAPI){
    this.hairColor = characterAPI.hair_Color
    this.name = characterAPI.name
   }
   get firstName(){
    return this.name.split('')[0]
   }
}
const Luke = new Characters({hair_Color:"brown", name:"Luke Skywalker"})

export default Characters;