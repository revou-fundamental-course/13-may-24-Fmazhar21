// Ini JS
//let isKelilingVisible = false; //keliliang is hide
//function hideor show() {
   // if (isKelilingVisible == false) {
   //     isKelilingVisible == true;
   //     document.getElementById('luas-section').style.display = 'none';
   //     document.getElementById('keliling-section').style.display = 'block';
   // } else {
       // isKelilingVisible == false;
       // document.getElementById('luas-section').style.dispnlay = 'block';
       // document.getElementById('keliling-section').style.dispnlay = 'hide';
  //  }
//}

function validation ( {
       let alasValue = document.getElementById('alas-input').value;
       let tinggiValue = document.getElementById('tinggi-input').value;
    console.log(alasValue)
    console.log(tinggiValue) 

    if (alasValue != '' && tinggiValue != '') {
        console.log('sukses validasi');
    }else{
        alert {'inputan kosong'};
    }

)