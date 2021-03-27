const firstRow = 'мама мыла раму';
const secondRow = 'собака друг человека';

function getRow(firstRow, secondRow) {
    let resFirstRow;
    let resSecondRow;
    let rpt     = 0;
    let rpt2    = 0;
    
    for (let i = 0; i < firstRow.length; i++) {
        
        if (firstRow.charAt(i) == 'а'){
            //console.log(firstRow.charAt(i).length);
            resFirstRow += firstRow.charAt(i);
            rpt++;
            continue;
        }
    }
    //console.log(rpt);

    for (let i = 0; i < secondRow.length; i++) {
        
        if (secondRow.charAt(i) == 'а'){
            //console.log(secondRow.charAt(i).length);
            resSecondRow += secondRow.charAt(i);
            rpt2++;
            continue;
        }
    }
    //console.log(rpt2);

    if (rpt < rpt2) {
        console.log(secondRow);
    } else {
        console.log(firstRow);
    }
};

getRow(firstRow, secondRow);