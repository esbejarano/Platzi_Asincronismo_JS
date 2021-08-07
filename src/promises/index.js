const someThingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!! its ok');
        } else {
            reject('UPPSSS');
        }
    });
}

someThingWillHappen()
    .then(response => console.log(response))
    .catch(error => console.error(error));

const someThingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            setTimeout(()=>{
                resolve('Hey!! its ok');
            }, 2000);
        } else {
            const error = new Error('UPPSSS');
            reject(error);
        }
    });
}

someThingWillHappen2()
    .then(response => console.log(response))
    .catch(error => console.error(error));