var c=0;
function count(){
    c++;
    console.log("Hii "+c);
    postMessage(c);
    setTimeout(count,5000);
}
count();
    