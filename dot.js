class Dot {

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  rotate(theta) {
    return new Dot(
      this.x * Math.cos(theta) - this.y * Math.sin(theta),
      this.x * Math.sin(theta) + this.y * Math.cos(theta)
    );
  }

  translate(x, y) {
    return new Dot(
      this.x + x,
      this.y + y
    );
  }

  scale(s) {
    return new Dot(
      this.x * s,
      this.y * s
    );
  }
}
