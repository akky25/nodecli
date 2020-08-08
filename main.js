// commanderモジュールをインポート
const program = require("commander");
// fsモジュールをインポート
const fs = require("fs");
// markedモジュールをインポート
const marked = require("marked");

// コマンドライン引数を取得する
program.option("--gfm", "GFMを有効にする");
program.parse(process.args);
const filePath = program.args[0];

// コマンドライン引数のオプションを取得し、デフォルトのオプションを上書きする
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
  // htmlへ変換を行う
  // gfm(GitHub Flavored Markdown)オプションの有効無効を設定する
  const html = marked(file, {
    gfm: cliOptions.gfm,
  });
  console.log(html);
})