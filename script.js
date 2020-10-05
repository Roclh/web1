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

    for(let i = 0; i<5; i++){
        
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



}