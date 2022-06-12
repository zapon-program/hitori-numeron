'use strict'

//遊び方
function rule(){
    let rule_element = document.getElementById('rule_container');
    rule_element.style.display = 'inline';
}
function del(){
    let rule_element = document.getElementById('rule_container');
    rule_element.style.display = 'none';
}

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

    var num2 = document.numbers.num2;
    var num22 = num2.selectedIndex;
    var slc2 = num2.options[num22].value;

    var num3 = document.numbers.num3;
    var num33 = num3.selectedIndex;
    var slc3 = num3.options[num33].value;

    var num4 = document.numbers.num4;
    var num44 = num4.selectedIndex;
    var slc4 = num4.options[num44].value;

    if (slc1 !== slc2 && slc1 !== slc3 && slc1 !== slc4 && slc2 !== slc3 && slc2 !== slc4 && slc3 !== slc4){
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
        span_element1.textContent = slc1;
        span_element2.textContent = slc2;
        span_element3.textContent = slc3;
        span_element4.textContent = slc4;

        //eat
        var eat = 0;
        if(slc1 == answer1){
            eat = eat + 1;
        }
        if(slc2 == answer2){
            eat = eat + 1;
        }
        if(slc3 == answer3){
            eat = eat + 1;
        }
        if(slc4 == answer4){
            eat = eat + 1;
        }
        td_element3.textContent = eat;
        //正解時
        if(eat == 4){
            window.alert('4EAT!!!')
        }

        //bite
        var bite = 0;
        if(slc1 == answer2 || slc1 == answer3 || slc1 == answer4){
            bite = bite + 1;
        }
        if(slc2 == answer1 || slc2 == answer3 || slc2 == answer4){
            bite = bite + 1;
        }
        if(slc3 == answer2 || slc3 == answer1 || slc3 == answer4){
            bite = bite + 1;
        }
        if(slc4 == answer2 || slc4 == answer3 || slc4 == answer1){
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
        document.getElementById('aspan1').textContent = answer1;
        document.getElementById('aspan2').textContent = answer2;
        document.getElementById('aspan3').textContent = answer3;
        document.getElementById('aspan4').textContent = answer4;
    }
}