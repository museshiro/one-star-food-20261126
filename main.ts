import { mkdirSync, writeFileSync } from "node:fs";

const part1 = "One star: you make me chew in front of other people while a rectangle in the wall shouts about toothpaste, ";
const part2 = "but the warm bread at the airport was a genuine act of planetary mercy.";
const line = part1 + part2;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);
