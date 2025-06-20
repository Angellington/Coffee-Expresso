// const doStep1 = (init) => {
//     return init + 1;
// };

// const doStep2 = (init) => {
//     return init + 2;
// };

// const doStep3 = (init) => {
//     return init + 3;
// };

// const doOperation = () => {
//     let result = 0;
//     result = doStep1(result);
//     result = doStep2(result);
//     result = doStep3(result);
//     console.log(`result: ${result}`);
// }

// doOperation()

const doStep1 = (init, callback) => {
    const result = init + 1;
    callback(result);
}

const doStep2 = (init, callback) => {
    const result = init + 2;
    callback(result);
}

const doStep3 = (init, callback) => {
    const result = init + 3;
    callback(result)
}

const doOperation = () => {
    doStep1(0, (result1) => {
        doStep2(result1, (result2) => {
            doStep3(result2, (result3) => {
                console.log(`result: ${result3}`);
            })
        })
    })
}

doOperation();