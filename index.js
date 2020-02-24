     //    EX_1
     let date = new Date();
     var weekday = new Array(7);
     weekday[0] = "Sunday";
     weekday[1] = "Monday";
     weekday[2] = "Tuesday";
     weekday[3] = "Wednesday";
     weekday[4] = "Thursday";
     weekday[5] = "Friday";
     weekday[6] = "Saturday";
     let day = weekday[date.getDay()];
     let DateAndTime = day + ' ' + date.getHours() + ':' + date.getMinutes();
     document.getElementById("date_time").innerHTML = DateAndTime;

     //    EX_2
     document.getElementById("mm-dd-yyyy").innerHTML = date.getMonth() + '-' + date.getDate() + '-' + date
         .getFullYear();
     document.getElementById("mm/dd/yyyy").innerHTML = date.getMonth() + '/' + date.getDate() + '/' + date
         .getFullYear();
     document.getElementById("dd-mm-yyyy").innerHTML = date.getDate() + '-' + date.getMonth() + '-' + date
         .getFullYear();
     document.getElementById("dd/mm/yyyy").innerHTML = date.getDate() + '/' + date.getMonth() + '/' + date
         .getFullYear();

     //    EX_3 

     function EX_3() {
         let Num = document.getElementById("num").value;
         if (CheckNum(Num) == 1) {
             alert("Dãy số có tăng dần!!");
         } else {
             alert("Dãy số không tăng dần !!");
         }
     }
     function EX_4(){
        let StringIn=document.getElementById("StringFour").value;
        let StringOut="";
        l=StringIn.length-1;
        for(var i=0;i<=l;i++){
            StringOut=StringOut+String.fromCharCode(StringIn.charCodeAt(i) + 1)
        }
        alert(StringOut);
     }
     function EX_5(){
        let StringIn=document.getElementById("StringFive").value;
        let  l=StringIn.length;
        if ((l<3) || (l%2==0)) {
            alert("Mời bạn nhập lại");
        }
        else{
            let mid=(l-1)/2;
            let StringOut="";
            for(var i=mid-1;i<=(mid+1);i++){
                StringOut = StringOut + StringIn[i];
            }
            alert(StringOut);
        }
        
     }
     function EX_6(){
            let str =document.getElementById("StringSix").value;
            let a=str.split(" ");
            let max=0;
            let maxNum=a[0];
            let count=0;
            for(var i=0;i<=a.length-2;i++){
                count=1;
                for(var j=i+1;j<=a.length-1;j++){
                    if(a[i]==a[j]) count++;
                }
                if(count>max){
                    max=count;
                    maxNum=a[i];
                }
            }
            alert("Số xuất hiện nhiều nhất là "+ maxNum);
     }
     function EX_7(){
         let StringIn = document.getElementById("StringSev").value;
         let Str = StringIn.indexOf("java");
         if(Str!=-1) alert("Chuỗi có chứa java ");
         else alert("Chuỗi không chứa java ")
     }
     function EX_8(){
         var MonthDay= ["Null","Tháng Một", "Tháng Hai","Tháng Ba","Tháng Tư","Tháng Năm","Tháng Sáu","Tháng Bảy","Tháng Tám","Tháng Chín","Tháng Mười","Tháng Mười Một","Tháng Mười Hai"];
         let i=document.getElementById("StringEig").value;
         alert(MonthDay[i]);
     }
     function EX_9(){
         let StringIn=document.getElementById("StringNine").value;
         let str=StringIn.split(" ");
         let l=str.length;
         let max=0;
         let StringMax="";
         for (var i=0;i<=l-1;i++)
            if(str[i].length>max) 
            {
                 max=str[i].length;
                 StringMax=str[i];
            }
            alert(StringMax);
     }
     function EX_10(){
         let StringIn=document.getElementById("StringTen").value;
         let arr=StringIn.split(" ");
         let First=Number(arr[0]);
         let Last=Number(arr[1]);
         let str="Các số Nguyên Tố ở giữa "+First+" và "+Last+" là: ";
         for (var i=First+1;i<Last;i++){
             if( CheckNT(i)==1){
                str=str + i + " ";
             }
         }
         alert(str);
     }
     function CheckNT(n){
         if(n==1) return 0;
         for (var j=2;j*j<=n;j++){
             if (n%j==0) return 0;
         }
         return 1;
     }
     function CheckNum(n) {
        let l = n.length - 1;
        for (var i = 0; i <= l; i++) {
            if (n[i] >= n[i + 1]) return 0;
        }
        
        return 1;
    }