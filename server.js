const path = require("path");
const express = require("express");
const doc = require("./google_spreadsheet_auth")

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "/build")));

app.post("/gcp", async (req, res) => {
  await doc.loadInfo(); // loads document properties and worksheets
  console.log(doc.title);

  const sheet = doc.sheetsByTitle["cc-pairmaker-test"];

  let data = await req.body;
  data = JSON.parse(data.input);
  console.log("data: ", data)

  await sheet.loadCells("A1:U21"); //セルの操作（読み込み）, @miku 20日分以上の組み合わせを作成または20組以上のペアを作成する場合は変更が必要
  let day_offset = 1; //　行のタイトル分のオフセット
  let pair_offset = 1; // 列のタイトル分のオフセット
  let counter = 0;
  //20日分ペアを組む設定　※定値
  console.log("data: ", data)
  for (
    // let day_index = 0 + day_offset;
    // day_index < 1 + day_offset;
    // day_index++
    let day_index = 0 + day_offset; day_index < data.length + day_offset; day_index++
    ) {
      for (
        let pair_index = 0 + pair_offset;
        pair_index < data.length + pair_offset;
        pair_index++
        ) {
      console.log("data[pair_index]: ", data[pair_index -1]);
      const cell = await sheet.getCell(day_index, pair_index);

      cell.value = data[pair_index-1][counter];
      await sheet.saveUpdatedCells();
      counter++;
    }
  }
  res.send("update spread sheet!");
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log("App listening on port " + port);
});
