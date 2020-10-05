let x,y,r, responce = '';

function pressX(id){
    x = document.getElementById(id).value;
}

function pressR(id){
    r = document.getElementById(id).value;
}

function check(){
    let choose = false;
    let fail = false;

    for(let i = 0; i<9; i++){
        if(document.getElementById('X' + i.toString()).checked){
            choose = true;
            break;
        }
    }


    let check = false;
    for(let i = 0; i<5; i++){
        if(document.getElementById('R' + i.toString()).checked && !check){
            check = true;
        }else if(document.getElementById('R' + i.toString()).checked && check){
            fail = true;
            responce += 'Вы выбрали больше одного значения R';
        }
    }

    if(!check){
        fail = true;
        responce += 'Выберите R';
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
        }else if( y<= -5 || y >= 3){
            responce += 'Y вне диапозона \n';
            fail = true;
        }
    }

    if (fail){
        alert(responce);
        return false;
    } return true;
}

function ask() {
    if(check())
    {
        // jQuery("#resultTable tr").remove();
        // jQuery.get('check.php', {'X':x, 'Y':y, 'R':r}, function (data) {document.getElementById('resultTable').innerHTML+=data;});
    }
}