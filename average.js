function avg(arr, n){



    if(n==1)
    {
        return arr[n-1];
    }
    else
    
    
    {
        return((avg(arr,n-1)*(n-1)+arr[n-1])/n);

    }
}



let arr =[4,5,6,7,8,9];
let n=arr.length;
let ans= avg(arr,n);
console.log(ans);