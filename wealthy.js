
/* function wealthyCustomer(accounts, m, n)
{
    let sum= 0;
   let richest= sum;
    
   for(var i = 0; i<=m-1; i++){
        for( let j=0; j<=n-1; j++){            
			sum= sum + accounts[i][j];            
        }        
        if(richest <= sum){
			richest = sum;
        }
        sum=0;
    }
    return i;
}  */
/* function wealthyCustomer(accounts, m, n)
{ 
	let min = 0;
    let max = 0;
    for (var i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            max += accounts[i][j]
        }
        if (max > min) {
            min = max;
            console.log(min, max);
            max = 0
        } else {
            max = 0;
        }
        console.log(i);
    }
    return i;

}
*/
function wealthyCustomer(accounts, m, n)
{ 
	let result = 0
    accounts.forEach((account) => {
		 console.log(account);
        let count = 0;
        for(let i = 0; i < m; i++){
            count += account[i];
        }
        result = Math.max(count, result);
    })
    
    return result;
}
//let accounts = [[1,2,3],[3,2,1]];
let accounts = [[1,5],[7,3],[3,5]];
console.log('r '+wealthyCustomer(accounts, 3, 2));

