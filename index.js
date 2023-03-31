// Your code here
class Polygon{
    constructor(sides){
        this.sides=sides;
    }
    get countSides(){
       return this.sides.length;
   }
  get perimeter() {
    return this.sides.reduce((acc, curr) => {return acc + curr}, 0);
  }
   
}
class Triangle extends Polygon{
    constructor(sides){
        super(sides)
    }
  get isValid() {
        const [a, b, c] = this.sides;
        return (a + b > c) && (a + c > b) && (b + c > a)
      }

}


class Square extends Polygon{
    constructor(sides){
        super(sides);
    }
    get isValid(){
        const [a,b,c,d]=this.sides;
        return (a === b) && (b === c) && (a === d);
    }
    get area(){
        const [a,b,c,d]=this.sides;
        return ((a*b) || (b*c));
    }
    
}