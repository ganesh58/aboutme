function area(input1,input2){
    length = input1;
    breadth = input2;
    let area;
    if(length<0||breadth<0){
        area=0;
}
else if(length>300||breadth>270){
    area=0;
}
else{
    area=(length)*(breadth);
}
return area;
    
 }
