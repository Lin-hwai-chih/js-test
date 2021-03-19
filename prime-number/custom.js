let isPrime = true;

for (let dividend = 2; dividend <= 10; dividend++) {

    let isPrime = true;


    for (let divisor = 2; divisor < dividend; divisor++) {
        if (dividend % divisor == 0) {
            isPrime = false;
        }
    }
    if (isPrime == false) {
        console.log(`${dividend} 不是質數`);



    }
    else {
        console.log(`${dividend} 是質數`);
    }
}

