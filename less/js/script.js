// var str = 'aaa@bbb@ccc';
// alert(str.replace("@",'!'))                     // replace -n  @-i poxaren poxarinuma araji handipacn e poxarinum

// var str = "aaa@bbb@ccc"
// alert(str.replace(/@/g, '!'))                    //   /@/g-n bolor handipacnern

// var str = 'aaa bbb ccc'
// alert(str.substr(4,3))                                  // aysinqn 4-ic sksac ktruma

// var str = 'aaa bbb ccc'
// alert(str.substring(1,3))                              // 1-ic 3 -@ bayc erordn chi nerarum

// var str = "Kimkardashyan";
// alert(str.slice(-3,-1))                             // verjic 3 ic ktrelov galisa


// var str = "01-12-2018"
// console.log(str.split("-"));                           // arandzin arandzin zangvac e sarqum 


// var arr = [1,2,3,4,5]
// arr.push(7)
// arr.pop()                                                       // pushn-n verjic avelacnum e
// arr.pop()                                                       // pop-n verjic ktrum e
// console.log(arr);

// var arr = [1,2,3,4,5]
// arr.unshift(9)                                            // unshift-n skzbic avelacnum e linelu e8,9,1,2,3, xi 8 n skzbic? vortev arajinn 9  enq avelacre
// arr.unshift(8);
// console.log(arr);// unshift-n skzbic avelacnum e linelu e8,9,1,2,3, xi 8 n skzbic? vortev arajinn 9  enq avelacre



// var arr = [1,2,3,4,5]
// arr.unshift(9)                                            
// arr.unshift(8);
// arr.shift()                                              //shift-n skzbic ktrum e
// console.log(arr);


// var arr = [6,1,2,3,4,5]
// arr.sort()                                                   //sort-n hertakanutyamb achman kargov dasavorum em
// alert(arr)


// var arr = [6,1,2,3,4,5]
// arr.sort()                                                   // es depqum @ntruma mec tivn
// alert(arr[arr.length-1])


// var str = 'hello'
// str = str[0].toUpperCase() + str.substr(1)                     // es depqum araji h-n sarqum e mecatar substr-i koxqn vor tiv enq dnum texic sksac e nshanakum;
// alert(str)                                                      //urish depqum substr-n asuma nshvac texic

// var x = "Kimkardashyan"
// console.log(x.toUpperCase());            // senc bolorna mecatar sarqum x -n textna 

// var x = "Kimkardashyan"

// console.log("k" + x.substr(1));
// console.log((x[0].toUpperCase()+x.substr(1)));                         //nuynna naxordini het


// var x = "hayk abelyan"
// var res = x.split(" ")                                  // es depqum vor arandzin sarqi eru bari araji tarern,qcumenq zangvaci mej,arajini depqum`0.0-n veraberum en arajini araji tarin
// console.log(res[0][0].toUpperCase()+res[0].substr(1));
// console.log(res[1][0].toUpperCase()+res[1].substr(1));  // erkrordi depqum [1][0 erkrordn mek isk o-n erkrordi arajinn mecatar]

// var str = 'hello'
// str = str.split('');           //arandzin arandzin zangvaca sarqum naxnakan
// str[0] = str[0].toUpperCase()     //heto arandznacac zangvacn aysinqn linuma [h]-n miacnuma JOIN -mijocov
// var result =str.join('')
// alert(result)                          // u asauma result ara stacvacn?   linuma Hello h-n mecatarov


// var str = 'http://phptm';
// if(str.substr(0,7)=='http://'){
//     alert("yes")
// }else{                                             // es depqum asum enq ete grvacn link a aysinqn substr-ov 0-7-n linka asa ayo 
//     alert("no")
// }

// var str = 'index.html';
// if(str.substr(-5)== '.html'){            // es depqum substr(-5)-n asum enq vor verjic hashvi ete verjic hamapatasxanum a asa yes 
//     alert("yes")
// }else{                                              // inqn verjica hashvum
//     alert("no")
// }


