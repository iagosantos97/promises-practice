// EXEMPLO 1 SEM PROMISE

function sumNumbers() {
    let result = 1 + 1;

    if(result === 2) {
        successCallback();
    } else {
        errorCallback();
    }
}

function successCallback() {
    console.log("Yeah! Number 2!");
}

function errorCallback() {
    console.log("Oops! Something went wrong");
}

sumNumbers();

// EXEMPLO 1 COM PROMISE

let p = new Promise((resolve, reject) => {
    let result = 1 + 1;
    if(result === 2) {
        resolve('Cool!');
    } else {
        reject('Not Cool!');
    }
});

p.then((message) => {
    console.log(message);
})
.catch((error) => {
    console.log(error);
});

// EXEMPLO 2 SEM PROMISE

const betterDeveloper = 'vanessa';

function whoIsBetterCallback(callback, errorCallback) {
    if(betterDeveloper !== 'vanessa' && betterDeveloper !== 'gabriel') {
        errorCallback({
            name: 'This is Wrong!',
            message: betterDeveloper + '? Really ?',
        });
    } else {
        callback({
            name: betterDeveloper,
            message: 'CDFs are the best!',
        });
    }
}

whoIsBetterCallback((result) => {
    console.log(result.name + '? Yeah! ' + result.message);
}, (error) => {
    console.log(error.name + ' ' + error.message);
});

// EXEMPLO 2 COM PROMISE

function whoIsBetterCallbackPromise() {
    return new Promise((resolve, reject) => {
        if(betterDeveloper !== 'vanessa' && betterDeveloper !== 'gabriel') {
            reject({
                name: 'This is Wrong!',
                message: betterDeveloper + '? Really ?',
            });
        } else {
            resolve({
                name: betterDeveloper,
                message: 'CDFs are the best!',
            });
        }
    });
}

whoIsBetterCallbackPromise()
    .then((result) => {
        console.log(result.name + '? Yeah! ' + result.message);
    })
    .catch((error) => {
        console.log(error.name + ' ' + error.message);
    });

// EXEMPLO DO MUNDO REAL

const ul = document.getElementById('users');
const url = 'https://jsonplaceholder.typicode.com/users';

fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
        return data.map((user) => {
            let li = document.createElement('li');
            li.innerHTML = `${user.name} (${user.username})`;
            ul.appendChild(li);
        });
    })
    .catch((error) => {
        console.log(`Ooops! Error! ${error}`);
    });