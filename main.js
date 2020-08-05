document.bgColor = "#FFFFEE";  //webの背景色を変更

let CrewCode=['HF727','EA283','GUEST'];
let CrewName=['末廣勇祐','松下海','guest'];
var AllNumber=3;  //人数
var data=new Array(3);

var UpLoadPass='09366390';
//var UpLoadPass="";開発時のみ使用

var Flag = 0;

let CrewNumber=0;
var Nowname='';
var Active=document.getElementsByClassName("Active");
var NonActive=document.getElementsByClassName("NonActive");

//タブの色指定
const ActiveColor = "#000";
const ActiveBackColor = "#CCFFCC";
const NonActiveColor = "#fff";
const NonActiveBackColor = "#009966";


function func1() {
    var input_message = document.getElementById("input_message").value;
    var input_message_name = document.getElementById("input_message_name").value;

    for (let num=0;num<CrewCode.length;num++) {
      if (CrewCode[num] === input_message) {
        if (CrewName[num] === input_message_name) {
          Flag=1;
          Nowname=CrewName[num];
          CrewNumber=num;
          input_message = "<br>"+CrewName[CrewNumber]+"さん<br>しばらくお待ちください";
      }
    }
    }
    if (Flag == 1) {
      input_message = "";
      document.getElementById("hint_message").innerHTML = input_message;
      window.location.href = "index2.php";

    }
    else {
      input_message = "<br>入力された内容は誤っています<br>もう一度入力してください";
      document.getElementById("output_message").innerHTML = input_message;
      input_message = "<br><br>ヒント<br>・英字や数字は半角で入力していますか？<br>・大文字と小文字は正確ですか？";
      document.getElementById("hint_message").innerHTML = input_message;
      Flag=0;
      CrewNumber = 0;
    }
  }

function func2() {

  var input_message = document.getElementById("input_message").value;
  var result_ = document.getElementsByClassName("result_output")[0];

  if (UpLoadPass === input_message) {
    console.log("認証成功")
    result_.textContent = Nowname + "さん　正解!";
    document.getElementsByClassName("hint_message")[0].innerHTML = "";
  }
  else {
    result_.textContent = Nowname + "さん　失敗!";
    document.getElementsByClassName("hint_message")[0].innerHTML = "<br>ヒント<br>・英字や数字は半角で入力していますか？<br>・大文字と小文字は正確ですか？";
    Flag=0;
  }
}

//ここから下はexcelに出力する関数
//https://techacademy.jp/magazine/21073
/*
var array1 =
[
  ["名前", "従業員コード", "月曜日"],
  [CrewName[CrewNumber],CrewCode[CrewNumber],"OK"]

];
*/
function sheet_to_workbook(sheet, opts) {
  var n = opts && opts.sheet ? opts.sheet : "Sheet1";
  var sheets = {}; sheets[n] = sheet;
  return { SheetNames: [n], Sheets: sheets };
}
function aoa_to_workbook(data, opts) {
  return sheet_to_workbook(XLSX.utils.aoa_to_sheet(data, opts), opts);
}
function s2ab(s) {
  var buf = new ArrayBuffer(s.length);
  var view = new Uint8Array(buf);
  for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
    return buf;
  }
  /*
function func4() {
var write_opts = {
  type: 'binary'
};
var wb = aoa_to_workbook(array1);
var wb_out = XLSX.write(wb, write_opts);
var blob = new Blob([s2ab(wb_out)], { type: 'application/octet-stream' });
saveAs(blob, 'myExcelFile.xlsx');
}
*/
//ここまで
/*
function func3() {
  var input_message = document.getElementById("input_message_name").value;
  var Monday = document.getElementById("Monday").value;
  var Tuesday = document.getElementById("Tuesday").value;
  var Wednesday = document.getElementById("Wednesday").value;
  var Thursday = document.getElementById("Thursday").value;
  var Friday = document.getElementById("Friday").value;
  var Saturday = document.getElementById("Saturday").value;
  var Sunday = document.getElementById("Sunday").value;

  for (let num=0;num<CrewCode.length;num++) {
    if (CrewName[num] === input_message) {
      Flag=1;
      Nowname=CrewName[num];
      CrewNumber=num;

  }
  }
  if (Flag ===1) {
    input_message =Nowname + "　さんようこそ！";
    document.getElementById("finish_message").innerHTML = input_message;

    data[CrewNumber]=[CrewName[CrewNumber],CrewCode[CrewNumber],"OK"];
    var array1 =
    [
      ["名前", "従業員コード", "月曜日"],
      data[CrewNumber]
    ];

    var write_opts = {
      type: 'binary'
    };
    var wb = aoa_to_workbook(array1);
    var wb_out = XLSX.write(wb, write_opts);
    var blob = new Blob([s2ab(wb_out)], { type: 'application/octet-stream' });
    //FileOpenName=open('test.xlsx',0,'True');
    //FileOpenName.save;
    saveAs(blob, 'myExcelFile.xlsx');
  }



  else {
    input_message = "<br>入力された内容は誤っています<br>もう一度入力してください";
    document.getElementById("finish_message").innerHTML = input_message;
    Flag=0;
  }
}

*/
//タブの操作
  //クルー専用
  NonActive[0].onclick = function() {
  NonActive[0].style.color=ActiveColor;
  NonActive[0].style.backgroundColor=ActiveBackColor;
  Active[0].style.color=NonActiveColor;
  Active[0].style.backgroundColor=NonActiveBackColor;
  NonActive[1].style.display="block";
  Active[1].style.display="none";
  }
  //責任者専用
  Active[0].onclick = function() {
  NonActive[0].style.color=NonActiveColor;
  NonActive[0].style.backgroundColor=NonActiveBackColor;
  Active[0].style.color=ActiveColor;
  Active[0].style.backgroundColor=ActiveBackColor;
  Active[1].style.display="block";
  NonActive[1].style.display="none";
  }
