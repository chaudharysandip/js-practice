const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async Function Call");
    resolve();
  }, 1000);
});

promiseOne
  .then(() => {
    console.log("Promise Consumed");
  })
  .catch((err) => {
    console.log("Error", err);
  })
  .finally();

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Promise Call");
    resolve();
  }, 1000);
}).then(() => {
  console.log("Then Call");
});

const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ userName: "Sandeep", email: "sandeep@gmail.com" });
  }, 1000);
});

promiseThree.then((user) => {
  console.log(user);
});

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ userName: "Sandeep", password: "123" });
    } else {
      reject("Erro Something is wrong");
    }
  }, 2000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.userName;
  })
  .then((userName) => {
    console.log(userName);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Finally Promise is either rsolved or reject");
  });

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ userName: "sandeep", password: "1234" });
    } else {
      reject("Js Went Wrong!!!");
    }
  }, 1000);
});

async function cosumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

cosumePromiseFive();

fetch("https://api.github.com/users/hitesh")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
