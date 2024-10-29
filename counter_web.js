var c=0;
function count(){
    c++;
    console.log("Hello ");
    postMessage(c);
    setTimeout(count,5000);
}
count();