class Kindom {
  constructor(backBone, withOutBackBone, coldBlooded, warmBlooded) {
    backBone;
    withOutBackBone;
    coldBlooded;
    warmBlooded;
  }

  setbackBone() {
    console.log("has backbone");
  }
  setwithOutBackBone() {
    console.log("does not have backbone");
  }
  setcoldBlooded() {
    console.log("is coolblooded");
  }
  setwarmBlooded() {
    console.log("is warm blooded");
  }
}

class Mammals extends Kindom {
  constructor(backBone, warmBlooded) {
    super(backBone, warmBlooded);
    this.backBone = backBone;
    this.warmBlooded = warmBlooded;
  }
  leg = "2 or 4 legs";
  eyes = "2 eyes";
}

let mammal = new Mammals("has backbone", "is warm blooded");
console.log(mammal);

class Fish extends Kindom {
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

class Aves extends Kindom {
  constructor(warmBlooded, backBone) {
    super(warmBlooded, backBone);
    this.warmBlooded = warmBlooded;
    this.backBone = backBone;
    let eyes;
    let leg;
    let hasFeathers;
  }

  getEyes() {
    console.log();
  }
  setEyes(eyes) {
    eyes = eyes;
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
pegion.setEyes(true);
console.log(pegion.getEyes());

class Arthropoda extends Kindom {
  constructor(warmBlooded, backBone) {
    super(warmBlooded, backBone);
    this.warmBlooded = warmBlooded;
    this.backBone = backBone;
  }
  eyes = 2;
  leg = "more than 4 legs";
  hasFeathers = true;
}
class Amphibians {}
class Reptilia {}
