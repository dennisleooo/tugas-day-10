var nama, harga, gambar, button, countdown
var total = 0

const addProduk=(a)=>{
    alert ('apa anda yakin menambahkan' + document.getElementById('nama'+a).innerHTML + 'ke cart anda')
    nama = document.getElementById('nama'+a).innerHTML
    harga = document.getElementById('harga'+a).innerHTML
    gambar = document.getElementById('gambar'+a).innerHTML
    button = document.getElementById('button'+a).innerHTML
    produk =[nama, harga, gambar, button]
    var table = '<tr>'
    for(i=0;i<produk.length;i++){
        if(i==3){
            produk[i]='<input type="button" value="Delete">'
        }
        table +='<td>' + produk[i] + '</td>'
        if(i==produk.length-1){
            table += '</tr>'
        }
    }
    document.getElementById('produk').innerHTML += table

    // total yang harus dibayar
    for (a=0;a<document.getElementById("produk").rows.length;a++){
        belanja = document.getElementById("produk").rows[a].cells[1].innerHTML
        total += parseInt(belanja)
    }
    document.getElementById('total').innerHTML = (' total yang harus dibayar ' +total)

    // head belanja
    if(produk.length==0){
        document.getElementById('head').innerHTML = 'Keranjang masih kosong'
    }else {
        document.getElementById('head').innerHTML = 'isi keranjang '+document.getElementById("produk").rows.length+''
    }
    // button cekout
    document.getElementById("checkOut").innerHTML = '<input type="button" value="checkout" onclick="checkOut()"></input>'
}
function checkOut(){
    // waktu mundur
    var seconds = 31
    document.getElementById("pay").innerHTML = '<input type="number" id="price"><input type="button" value="bayar"onclick="bayar()">'
      countdown = setInterval(function(){
            seconds--
            document.getElementById("checkOut").textContent = seconds
            if (seconds <= 0){
                clearInterval(countdown)
                document.getElementById('produk').innerHTML =''
                document.getElementById('head').innerHTML = document.getElementById('head').innerHTML
                document.getElementById('produk').innerHTML = ''
                document.getElementById('head').innerHTML = 'Keranjang masih kosong'
                document.getElementById('total').innerHTML = ''
                document.getElementById("pay").innerHTML = ''
                document.getElementById("checkOut").innerHTML = ''
                total = 0
            }
        }   , 1000)
}

 function bayar(){
     var totalbayar = document.getElementById('price').value
     if(totalbayar==total){
         alert('terimakasih')
         document.getElementById('produk').innerHTML = ''
         document.getElementById('head').innerHTML = 'Keranjang masih kosong'
         document.getElementById('total').innerHTML = ''
         document.getElementById("pay").innerHTML = ''
         document.getElementById("checkOut").innerHTML = ''
         total = 0
         clearInterval(countdown)
     }else if (totalbayar<total){
         alert('Uang anda kurang ' + (totalbayar-total))
     }else if (totalbayar>total){
         alert('uang kembalian anda ' + (totalbayar-total))
         document.getElementById('produk').innerHTML = ''
         document.getElementById('head').innerHTML = 'Keranjang masih kosong'
         document.getElementById('total').innerHTML = ''
         document.getElementById("pay").innerHTML = ''
         document.getElementById("checkOut").innerHTML = ''
         clearInterval(countdown)
         total = 0
     }
 }