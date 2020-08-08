
// markedモジュールをインポート
const marked = require("marked");

/**
 * markdownファイルをHTMLへ変換する 
 * オプションとしてgfm(GitHub Flavored Markdown)のon/offを指定する
 * @param {object} markdown 
 * @param {object} cliOptions 
 */
module.exports = (markdown, cliOptions) => {
  return marked(markdown, {
    gfm: cliOptions.gfm,
  });
}