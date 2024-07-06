let btns = document.querySelectorAll('.btn1')
let screen = document.getElementById('screen')
let c = document.getElementById('delete')
let btn1 = document.getElementsByClassName('.btn1')
let clear1 = document.getElementById('clear1')
let equal = document.getElementById('equal')
let checkk
let not = Array.from(document.querySelectorAll('.not'))
////////////////////////////////////////////////////////element print
let x
let y
not.forEach((element, i) => {
    element.addEventListener('click', () => {

        x = screen.innerHTML.split(" ")//screen from string to array
        console.log(typeof (x))
        console.log(not[i].innerHTML)
        x.push(element.innerHTML);
        console.log(x)
        screen.innerHTML += element.innerHTML
        screen.innerHTML - element.innerHTML
        element.addEventListener('click', () => {
            y += screen.innerHTML.replace(x.slice(-1), element.innerHTML)
            y.slice(-1);
            console.log(y)
        })

        // console.warn(last);


    })


    //      if(x =="1")
    //      {
    //      console.log(screen.innerHTML)
    //      let y= screen.innerHTML.replace(screen.innerHTML.slice(-1),element.innerHTML)
    //           console.log(y)
    //           console.log(screen.innerHTML)
    //           screen.innerHTML=y
    //  }
    //  else
    //  {
    //      screen.innerHTML += element.innerHTML
    //  } 

})
//


////////////////////////////////numbers print////////////////////////////

btns.forEach(x => {
    x.addEventListener('click', () => {

        if (checkk == '1') {

            screen.innerHTML = ''
            checkk = 0
            screen.innerHTML += x.innerHTML
        }
        else {
            screen.innerHTML += x.innerHTML
        }
    });

})
////////////////////////////////////////////////////delet function////////////
c.addEventListener('click', () => {
    screen.innerHTML = 0;
})
/////////////////////////////////////////////////////////////delet the last charachter////
clear1.addEventListener('click', () => {
    //slice   string.slice(0,lengh-1)
    let x = screen.innerHTML
    let y = x.slice(0, x.length - 1)
    screen.innerHTML = y
})
///////////////////////equal ////
equal.addEventListener('click', () => {
    console.log(screen.innerHTML)
    let result = eval(screen.innerHTML)
    console.log(result)
    screen.innerHTML = result
    checkk = 1
})
/////////////////////////////////////////on off key
let offf = document.querySelectorAll(".disable")
let onoff = document.getElementById('onoff')
onoff.addEventListener('click', () => {
    currentvalue = document.getElementById('onoff').value;
    if (currentvalue == "Off") {
        onoff.value = "On";
        screen.classList.remove('off')

        offf.forEach(element => {
            element.disabled = false
        });

    }
    else {
        onoff.value = "Off";
        screen.classList.add('off')
        screen.innerHTML = "";

        offf.forEach(element => {
            element.disabled = true
        });


    }
})
//replace + with-=============let result = text.replace(/blue/g, "red");
//there is bug if i need to do any calculation  on the result 