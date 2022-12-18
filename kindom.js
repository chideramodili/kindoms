class Kingdom {
  constructor(backBone, withOutBackBone, coldBlooded, warmBlooded ) {
    this.backBone;
   this.withOutBackBone;
    this.coldBlooded;
   this.warmBlooded;
  }

getBackBone(){
    return this.backBone
}
  setBackBone(backBone) {
    this.backBone = backBone;
  }
  setwithOutBackBone() {
    console.log("does not have backbone");
  }
  setcoldBlooded() {
    console.log("is coolblooded");
  }
  getWarmBlooded(){
      return this.warmBlooded
  }
  setWarmBlooded(warmBlooded) {
    this.warmBlooded = warmBlooded
  }
}
let all = new Kingdom()
console.log(all)
all.setBackBone("has it")
all.setWarmBlooded("they are warm-blooded in mature")
console.log(all.getBackBone())
class Mammals extends Kingdom {
  constructor(backBone, warmBlooded) {
    super(backBone, warmBlooded);
    this.warmBlooded = warmBlooded;
    let hasHair;
   
  }
  
  getHasHair(){
      return this.hasHair;
  }
  setHasHair(hasHair){
      this.hasHair = hasHair;
  }
  getBackBone(){
      return all.getBackBone()
  }
  setBackBone(backBone){
      this.backBone = backBone
  }
  getWarmBlooded(){
      return all.getWarmBlooded()
  }
  leg = "2 or 4 legs";
  eyes = "2 eyes";
}

let mammal = new Mammals();
mammal.setHasHair(true);


console.log(mammal);
console.log(mammal.getHasHair());
console.log(mammal.getBackBone())
console.log(mammal.getWarmBlooded())
class Fish extends Kingdom {
  constructor(
    backBone,

    coldBlooded
  ) {
    super(backBone, coldBlooded);

    this.backBone = backBone;

    this.coldBlooded = coldBlooded;
    
  }
  leg = "none";
  eyes = 2;
  fin = true;
}
let fish = new Fish("has back bone", "is cold blooded in nature");
console.log(fish);

class Aves extends Kingdom {
  constructor(warmBlooded, backBone) {
    super(warmBlooded, backBone);
    this.warmBlooded = warmBlooded;
    this.backBone = backBone;
    let eyes;
    let leg;
    let hasFeathers;
  }

  getEyes() {
    return this.eyes;
  }
  setEyes(eyes) {
    this.eyes = eyes;
  }

  getLeg() {
    return this.leg;
  }
  setLeg(leg) {
    this.leg = leg;
  }

  getHasFeathers() {
    return this.hasFeathers;
  }
  setHasFeathers(hasFeathers) {
    this.hasFeathers = hasFeathers;
  }
}

let pegion = new Aves("is warm blooded in nature", "has back bone");
console.log(pegion);
pegion.setEyes("has 2 eyes");
pegion.setHasFeathers(true)
console.log(pegion.getEyes());
console.log(pegion.getHasFeathers())

class Arthropoda extends Kingdom {
  constructor(warmBlooded, backBone) {
    super(warmBlooded, backBone);
    this.warmBlooded = warmBlooded;
    this.backBone = backBone;
  }
  eyes = 2;
  leg = "more than 4 legs";
  hasFeathers = true;
}
class Amphibians extends Kingdom {
    constructor(coldBlooded, backBone){
        super (coldBlooded, backBone)
        this.coldBlooded = coldBlooded
        this.backBone = backBone
        
        
    }
}
let ant = new Amphibians("is cold-blooded in nature", true)
console.log(ant)
class Reptilia {
    constructor(backBone, warmBlooded) {
    this.warmBlooded = warmBlooded;
    let hasHair;
   
  }
  
  getHasHair(){
      return this.hasHair;
  }
  setHasHair(hasHair){
      this.hasHair = hasHair;
  }
  getBackBone(){
      return all.getBackBone()
  }
  setBackBone(backBone){
      this.backBone = backBone
  }
  leg = "2 or 4 legs";
  eyes = "2 eyes";
}

let lizard = new Reptilia()

console.log(lizard.getBackBone())
