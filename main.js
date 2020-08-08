// commanderモジュールをインポート
const program = require("commander");
// fsモジュールをインポート
const fs = require("fs");
// md2htmlをインポート
const md2html = require("./md2html");

// コマンドライン引数を取得する
program.option("--gfm", "GFMを有効にする");
program.parse(process.args);
const filePath = program.args[0];

// デフォルトのオプションを上書きする
const cliOptions = {
  gfm: false,
  ...program.opts(),
}

// 非同期でファイルを読み込む
// utf8でエンコードを行う
fs.readFile(filePath, { encoding: "utf8" }, (err, file) => {
  if (err) {
    console.error(err.message);
    process.exit(1);
    return;
  }
  // md2htmlでhtmlへ変換する
  const html = md2html(file, cliOptions);
  console.log(html);
})