

const eq_button = document.getElementById("button_eq");
eq_button.addEventListener("click", calculate);
// const num_box = document.getElementById("num_button_1");
// num_box.addEventListener("click", insert_num);

document.getElementById("expression").value = "0";
let val_1 = document.getElementById("expression").value;
function insert_num_1(){
    val_1 = val_1 + "1";
    document.getElementById("expression").value = val_1;

}
function insert_num_2(){
    val_1 = val_1 + "2";
    document.getElementById("expression").value = val_1;
}
function insert_num_3(){
    val_1 = val_1 + "3";
    document.getElementById("expression").value = val_1;

}
function insert_num_4(){
    val_1 = val_1 + "4";
    document.getElementById("expression").value = val_1;
}
function insert_num_5(){

    val_1 = val_1 + "5";
    document.getElementById("expression").value = val_1;
}
function insert_num_6(){
    val_1 = val_1 + "6";
    document.getElementById("expression").value = val_1;
}
function insert_num_7(){
    val_1 = val_1 + "7";
    document.getElementById("expression").value = val_1;
}
function insert_num_8(){
    val_1 = val_1 + "8";
    document.getElementById("expression").value = val_1;
}
function insert_num_9(){
    val_1 = val_1 + "9";
    document.getElementById("expression").value = val_1;
}
function insert_num_0(){
    val_1 = val_1 + "0";
    document.getElementById("expression").value = val_1;
}
function insert_num_00(){
    val_1 = val_1 + "00";
    document.getElementById("expression").value = val_1;
}
function insert_sign_mul(){
    val_1 = val_1 + "*";
    document.getElementById("expression").value = val_1;
}
function insert_sign_div(){
    val_1 = val_1 + "/";
    document.getElementById("expression").value = val_1;
}
function insert_sign_cancel(){
    val_1 = "0"
    document.getElementById("expression").value = val_1;
}
function insert_sign_plu(){
    val_1 = val_1 + "+";
    document.getElementById("expression").value = val_1;
}
function insert_sign_mod(){
    val_1 = val_1 + "%";
    document.getElementById("expression").value = val_1;
}
function insert_sign_sub(){
    val_1 = val_1 + "-";
    document.getElementById("expression").value = val_1;
}



      function calculate() {
        let val = document.getElementById("expression").value;
        // document.getElementById("expression").value = "Hello"; //this correct way to modify the content for input element.
        // let input_box = document.getElementById("expression").value;

        // document.getElementById("expression").innerHTML = "Hello"; // this does not modify the content for input element.
        // let input_box1 = document.getElementById("expression").value;

        // let result = 0;
        // for (let i = 0; i < val.length; i++) {
        //   if (i == 1) {
        //     if (val[i] == "+") {
        //       result = Number(val[i - 1]) + Number(val[i + 1]);
        //     } else if (val[i] == "-") {
        //       result = Number(val[i - 1]) - Number(val[i + 1]);
        //     } else if (val[i] == "*") {
        //       result = Number(val[i - 1]) * Number(val[i + 1]);
        //     } else if (val[i] == "/");
        //     {
        //       result = Number(val[i - 1]) / Number(val[i + 1]);
        //     }
        //   } else {
        //     if (val[i] == "+") {
        //       result = result + Number(val[i + 1]);
        //     } else if (val[i] == "-") {
        //       result = result - Number(val[i + 1]);
        //     } else if (val[i] == "*") {
        //       result = result * Number(val[i + 1]);
        //     } else if (val[i] == "/") {
        //       result = result + Number(val[i + 1]);
        //     } else if (val[i] == "%") {
        //       result = result % Number(val[i + 1]);
        //     }
        //   }
        // }
        // document.getElementById("expression").value = result;
        // console.log(result);
        let arr = [];
        let result = 0;
        for (let i = 0; i < val.length; i++) {
          if (val[i] == "+") {
            arr.push(result);
            arr.push("+");
            result = 0;
          } else if (val[i] == "-") {
            arr.push(result);
            arr.push("-");
            result = 0;
          } else if (val[i] == "*") {
            arr.push(result);
            arr.push("*");
            result = 0;
          } else if (val[i] == "/") {
            arr.push(result);
            arr.push("/");
            result = 0;
          } else if (val[i] == "%") {
            arr.push(result);
            arr.push("%");
            result = 0;
          } else if (i == val.length - 1) {
            result = result + val[i];
            arr.push(result);
          } else {
            result = result + val[i];
          }
        }

        let sum = 0;
        for (let j = 0; j < arr.length; j++) {
          if (j == 1) {
            if (arr[j] == "+") {
              sum = Number(arr[j - 1]) + Number(arr[j + 1]);
            } else if (arr[j] == "-") {
              sum = Number(arr[j - 1]) - Number(arr[j + 1]);
            } else if (arr[j] == "*") {
              sum = Number(arr[j - 1]) * Number(arr[j + 1]);
            } else if (arr[j] == "/") {
              sum = Number(arr[j - 1]) / Number(arr[j + 1]);
            } else if (arr[j] == "%") {
              sum = Number(arr[j - 1]) % Number(arr[j + 1]);
            }
          } else {
            if (arr[j] == "+") {
              sum = sum + Number(arr[j + 1]);
            } else if (arr[j] == "-") {
              sum = sum - Number(arr[j + 1]);
            } else if (arr[j] == "*") {
              sum = sum * Number(arr[j + 1]);
            } else if (arr[j] == "/") {
              sum = sum / Number(arr[j + 1]);
            } else if (arr[j] == "%") {
              sum = sum % Number(arr[j + 1]);
            }
          }
        }
        console.log(sum);
        document.getElementById("expression").value = sum;
      }
      // let val = "010";
      // let val1 = Number(val);
      // console.log(val1);