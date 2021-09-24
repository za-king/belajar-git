function myfunction(){
    console.log('test')
    var tr = document.createElement('TR');
    tr.setAttribute('id','mytr');
    document.getElementById("tbody").appendChild(tr);
    
    var td = document.createElement('TD');

    var inputname = document.getElementById('name').Value;
    // var inputdate = document.getElementById('date').value;
    // var inputamount = document.getElementById('amount').value;

    var t = document.createTextNode(inputname);

    td.appendChild(t);
    document.getElementById("mytr").appendChild(td); 


    
    
  
}