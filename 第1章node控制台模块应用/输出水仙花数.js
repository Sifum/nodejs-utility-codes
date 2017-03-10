var m, a, b, c, sum;
for(m = 100; m < 1000; m++){
    a = parseInt(m/100);  //计算百位
    b = parseInt((m - a * 100) / 10); //计算十位
    c = parseInt(m - a * 100 - b * 10); //计算个位
    sum = a*a*a + b*b*b + c*c*c;
    if(m == sum){
        console.info("%d", m);
    }
}

// 输出
// 153
// 370
// 371
// 407
