function submitForm(){
    let date=document.querySelector("#date").value
    let month=document.querySelector("#month").value
    let year=document.querySelector("#year").value
    if(date<1 || date>31){
        alert("Please Enter correct date")
    }else if(month<1 || month>12){
        alert("Please Enter correct month")
    }else if(year<1000 || year>9999){
        alert("Please Enter correct year")
    }else{
        let cdate=new Date()
        let d=cdate.getDate()
        let m=cdate.getMonth()+1
        let y=cdate.getFullYear()
        let allmonth=[31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
        if(date>d){
            d=d+allmonth[m-1]
            m=m-1
        }
        if(month>m){
            m=m+12
            y=y-1
        }
        let d1=d-date
        let m1=m-month
        let y1=y-year
        let p=document.querySelector(".result")
        p.innerHTML=`Your Age is ${y1} Years ${m1} Months ${d1} Days.`
    }
}