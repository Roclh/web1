let x,y,r, responce = '';

function check(){
    let choose = false;
    let fail = false;

    for(let i = 0; i<9; i++){
        if(document.getElementById('X' + i.toString()).checked){
            choose = true;
            x = document.getElementById('X' + i.toString()).value;
            break;
        }
    }


    let check = false;
    for(let i = 0; i<5; i++){
        if(document.getElementById('R' + i.toString()).checked && !check){
            check = true;
            r = document.getElementById('R'+i.toString()).value;
        }else if(document.getElementById('R' + i.toString()).checked && check){
            fail = true;
            responce += 'Вы выбрали больше одного значения R \n';
            break;
        }
    }

    if(!check){
        fail = true;
        responce += 'Выберите R \n';
    }

    if(!choose) {
        fail = true;
        responce += 'Выберите X \n';
    }

    y = document.getElementById('Y').value.trim();
    if(y.length >= 12){
        y = y.prototype.slice(0, 12);
    }
    if(y === ''){
        responce += 'Введите Y \n';
        fail = true;
    }else{
        if(!/^(-?\d+)([,.]\d+)?$/.test(y)){
            responce += 'Некорректный ввод Y \n';
            fail = true;
        }else if( y<= -3 || y >= 5){
            responce += 'Y вне диапозона \n';
            fail = true;
        }
    }

    if (fail){
        alert(responce);
        responce = '';
        return false;
    } return true;
}

function ask() {
    if(check())
    {
        jQuery("#resultTable tr").remove();
        jQuery.post('check.php', {'X':x, 'Y':y, 'R':r}, function (data) {document.getElementById('resultTable').innerHTML+=data;});
    }
}