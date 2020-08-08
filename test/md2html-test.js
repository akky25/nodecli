const assert = require("assert");
const fs = require("fs");
const path = require("path");
const md2html = require("../md2html");

/**
 * gfm:false
 */
it("converts Markdown to HTML (GFM=false)", () => {
  // テスト対象(sample.md)と期待値ファイル(expected.html)をfs.readFileSyncで同期的にファイルを読み込む
  const sample = fs.readFileSync(path.resolve(__dirname, "./fixtures/sample.md"), { encoding: "utf8" });
  const expected = fs.readFileSync(path.resolve(__dirname, "./fixtures/expected.html"), { encoding: "utf8" });

  // 変換結果を比較する
  assert.strictEqual(md2html(sample, { gfm: false }), expected);
})

/**
 * gfm:true
 */
it("converts Markdown to HTML (GFM=true)", () => {
  // テスト対象(sample.md)と期待値ファイル(expected.html)をfs.readFileSyncで同期的にファイルを読み込む
  const sample = fs.readFileSync(path.resolve(__dirname, "./fixtures/sample.md"), { encoding: "utf8" });
  const expected = fs.readFileSync(path.resolve(__dirname, "./fixtures/expected-gfm.html"), { encoding: "utf8" });

  // 変換結果を比較する
  assert.strictEqual(md2html(sample, { gfm: true }), expected);
})