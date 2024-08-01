function total(element) {
    const row = element.closest('tr');
    const theory = row.querySelector('.theory');
    const practical = row.querySelector('.practical');
    const Total = row.querySelector('.total');
    
    const theoryMarks = parseFloat(theory.value) || 0;
    const practicalMarks = parseFloat(practical.value) || 0;
    const totalMarks = theoryMarks + practicalMarks;
    
    Total.value = totalMarks;
    grandtotal();
}

function grandtotal() {
    const inps=document.querySelectorAll('.total');
    
    let grandTotal = 0;
    inps.forEach(input => {
        grandTotal += parseFloat(input.value) || 0;
    });
    let passing=700;
    let maxmark=800;
    let per=(grandTotal/maxmark)*100;
    let str=document.getElementById('pass');
    let percent=document.getElementById('Percentage');

    if(grandTotal < passing) {
        str.value="FAIL";
    }
    else{
        str.value="PASS";
    }
    percent.value=per.toFixed(2)+'%';
 document.getElementById('result').value = grandTotal;
 
}

