import { writeFile } from 'node:fs';

const args = process.argv.slice(2);

const memo = args.join(" ");

writeFile("./out/memo.md", memo, (err) => {
  console.log("sucsess!!!");
  console.log(memo);
});
