let inputValo = document.getElementById('input');
let num = 10;
function dice() {
    let random = Math.ceil(Math.random()*6);
    console.log(random);
    console.log(inputValo.value);
    
    let para = document.getElementById('left').innerText = num--; 
    if (para >0) {
        
  
    if (inputValo.value == '') {
        alert('plzz enter a dice number')
    }else{
    if (random == 1) {
        num = num +3
        document.getElementById('co1').style.backgroundColor='red'
        document.getElementById('co2').style.backgroundColor='transparent'
        document.getElementById('co3').style.backgroundColor='transparent'
        document.getElementById('co4').style.backgroundColor='transparent'
        document.getElementById('co5').style.backgroundColor='transparent'
        document.getElementById('co6').style.backgroundColor='transparent'
    }else if (random == 2){
        document.getElementById('co1').style.backgroundColor='transparent'
        document.getElementById('co2').style.backgroundColor='red'
        document.getElementById('co3').style.backgroundColor='transparent'
        document.getElementById('co4').style.backgroundColor='transparent'
        document.getElementById('co5').style.backgroundColor='transparent'
        document.getElementById('co6').style.backgroundColor='transparent'
        num = num +3
    }else if (random == 3){
        document.getElementById('co1').style.backgroundColor='transparent'
        document.getElementById('co2').style.backgroundColor='transparent'
        document.getElementById('co3').style.backgroundColor='red'
        document.getElementById('co4').style.backgroundColor='transparent'
        document.getElementById('co5').style.backgroundColor='transparent'
        document.getElementById('co6').style.backgroundColor='transparent'
        num = num +3
    }else if (random == 4){
        document.getElementById('co1').style.backgroundColor='transparent'
        document.getElementById('co2').style.backgroundColor='transparent'
        document.getElementById('co3').style.backgroundColor='transparent'
        document.getElementById('co4').style.backgroundColor='red'
        document.getElementById('co5').style.backgroundColor='transparent'
        document.getElementById('co6').style.backgroundColor='transparent'
        num = num +3
    }else if (random == 5){
        document.getElementById('co1').style.backgroundColor='transparent'
        document.getElementById('co2').style.backgroundColor='transparent'
        document.getElementById('co3').style.backgroundColor='transparent'
        document.getElementById('co4').style.backgroundColor='transparent'
        document.getElementById('co5').style.backgroundColor='red'
        document.getElementById('co6').style.backgroundColor='transparent'
        num = num +3
    }else if (random == 6){
        document.getElementById('co1').style.backgroundColor='transparent'
        document.getElementById('co2').style.backgroundColor='transparent'
        document.getElementById('co3').style.backgroundColor='transparent'
        document.getElementById('co4').style.backgroundColor='transparent'
        document.getElementById('co5').style.backgroundColor='transparent'
        document.getElementById('co6').style.backgroundColor='red'
        num = num +3
    }
    
    if (random == inputValo.value) {
        document.getElementById(`co${inputValo.value}`).style.backgroundColor='green'
        document.getElementById('loss').innerText= 'win'
        
    }else{
        document.getElementById('loss').innerText= 'loss'
        
    }
  
 
    
}
}else{
    alert('Batter then next time')
}
}
