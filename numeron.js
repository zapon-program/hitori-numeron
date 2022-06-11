'use strict'

//正解
var answer1 = Math.floor(Math.random()*10);
var answer2 = Math.floor(Math.random()*10);
var answer3 = Math.floor(Math.random()*10);
var answer4 = Math.floor(Math.random()*10);
while(answer1 === answer2 || answer1 === answer3 || answer1 === answer4 || answer2 === answer3 || answer2 === answer4 || answer3 === answer4){
    var answer1 = Math.floor(Math.random()*10);
    var answer2 = Math.floor(Math.random()*10);
    var answer3 = Math.floor(Math.random()*10);
    var answer4 = Math.floor(Math.random()*10);    
}
console.log(answer1)
console.log(answer2)
console.log(answer3)
console.log(answer4)

//counter用意
let counter = 0;

//確定後
function clickBtn1(){
    //数字を取得
    var num1 = document.numbers.num1;
    var num11 = num1.selectedIndex;
    var slc1 = num1.options[num11].value;
    var con1 = parseInt(slc1);

    var num2 = document.numbers.num2;
    var num22 = num2.selectedIndex;
    var slc2 = num2.options[num22].value;
    var con2 = parseInt(slc2);

    var num3 = document.numbers.num3;
    var num33 = num3.selectedIndex;
    var slc3 = num3.options[num33].value;
    var con3 = parseInt(slc3);

    var num4 = document.numbers.num4;
    var num44 = num4.selectedIndex;
    var slc4 = num4.options[num44].value;
    var con4 = parseInt(slc4);

    if (con1 !== con2 && con1 !== con3 && con1 !== con4 && con2 !== con3 && con2 !== con4 && con3 !== con4){
    //被っていない場合
        //表を1段生成
        var tr_element = document.createElement('tr');
        var td_element1 = document.createElement('td');
        var td_element2 = document.createElement('td');
        var td_element3 = document.createElement('td');
        var td_element4 = document.createElement('td');
        var span_element1 = document.createElement('span');
        var span_element2 = document.createElement('span');
        var span_element3 = document.createElement('span');
        var span_element4 = document.createElement('span');
        td_element2.appendChild(span_element1);
        td_element2.appendChild(span_element2);
        td_element2.appendChild(span_element3);
        td_element2.appendChild(span_element4);
        tr_element.appendChild(td_element1);
        tr_element.appendChild(td_element2);
        tr_element.appendChild(td_element3);
        tr_element.appendChild(td_element4);
        var tbody_element = document.getElementById('tbody');
        tbody_element.appendChild(tr_element);

        //counter
        counter = counter + 1;
        td_element1.textContent = counter;


        //selectnumber
        span_element1.textContent = con1;
        span_element2.textContent = con2;
        span_element3.textContent = con3;
        span_element4.textContent = con4;

        //eat
        var eat = 0;
        if(con1 === answer1){
            eat = eat + 1;
        }
        if(con2 === answer2){
            eat = eat + 1;
        }
        if(con3 === answer3){
            eat = eat + 1;
        }
        if(con4 === answer4){
            eat = eat + 1;
        }
        td_element3.textContent = eat;
        //正解時
        if(eat == 4){
            window.alert('4EAT!!!')
        }

        //bite
        var bite = 0;
        if(con1 === answer2 || con1 === answer3 || con1 === answer4){
            bite = bite + 1;
        }
        if(con2 === answer1 || con2 === answer3 || con2 === answer4){
            bite = bite + 1;
        }
        if(con3 === answer2 || con3 === answer1 || con3 === answer4){
            bite = bite + 1;
        }
        if(con4 === answer2 || con4 === answer3 || con4 === answer1){
            bite = bite + 1;
        }
        td_element4.textContent = bite;
    } else {
        //被っている場合
        window.alert('同じ数字を二つ以上使用した数字はありません。');
    }
}

//答え表示
function clickBtn2() {
    if(window.confirm('答えを表示します。よろしいですか？')){
        document.getElementById('answer').textContent = answer1 * 1000 + answer2 * 100 + answer3 * 10 + answer4
    }
}