import {Container, SVG} from "@svgdotjs/svg.js";
const { map, random, spline } = require("../lib/generative-utils");
const tinycolor = require("../lib/tinycolor");

const config = {
  numWaves: 9,
};

function lerp(v0: number, v1: number, t: number) {
  return v0 * (1 - t) + v1 * t;
}

type XYPoint = {
  x: number;
  y: number;
};

export default class WaveGenerator {
  private static instance: WaveGenerator;

  private colors: any[] = [];

  public static getInstance(): WaveGenerator {
    if (!this.instance) {
      this.instance = new WaveGenerator();
    }
    return this.instance;
  }

  public generate(svgCanvasClassName = ".canvas"): any {
    const svg = SVG(svgCanvasClassName) as Container;
    const { width, height } = svg.viewbox();

    const wave = (start: XYPoint, end: XYPoint, gradient: any) => {
      const numSteps = random(4, 8, true);
      const randomRange = random(32, 64);

      const points = [];

      for (let i = 0; i <= numSteps; i++) {
        const step = map(i, 0, numSteps, 0, 1);

        let x = lerp(start.x, end.x, step);
        let y = lerp(start.y, end.y, step);

        if (i !== 0 && i !== numSteps) {
          x += random(-randomRange, randomRange);
          y += random(-randomRange, randomRange);
        }

        points.push({ x, y });
      }
      const pathData = `${spline(points, 1, false)}L ${end.x} ${height} L ${
        start.x
      } ${height} Z`;
      svg.path(pathData).addClass("path").attr("fill", gradient);
    };

    const { numWaves } = config;
    const base = tinycolor(`hsl(${random(50, 360)}, 65%, 55%)`);
    this.colors = base.analogous(10);

    svg
      .rect(width, height)
      .fill(random(this.colors).clone().toString());

    for (let i = 0; i < numWaves; i++) {
      const randomOffset = random(-50, 50);
      const originY =
        map(i, 0, numWaves, -height / 2, height / 3) + randomOffset;
      const endY = map(i, 0, numWaves, 0, 1000) + randomOffset;

      const darkenFactor = 45;
      let color = random(this.colors).darken(darkenFactor).clone();

      if (i > 4) {
        color = color.darken(darkenFactor/2).desaturate(random(10, 20));
      }

      const gradientOffset = map(i, 0, numWaves, 0.1, 1);

      const gradient = svg.gradient("linear", function (add: any) {
        add.stop(0, color.clone().lighten(30).toHexString());
        add.stop(gradientOffset, color.clone().spin(60).toHexString());
      });

      gradient.from(0.5, 0).to(0, 1);

      wave({ x: 0, y: originY }, { x: width, y: endY }, gradient);
    }
  }

  public getGeneratedColors() {
    return this.colors;
  }

  public getRandomHexColor() {
    const randomIndex = random(0, this.colors.length);
    console.warn(randomIndex, this.colors);
    const color = this.colors[randomIndex];
    return color ? color.toHexString() : "";
  }
}
