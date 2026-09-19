class myPromise {
  constructor(executor) {
    this.state = "pending";
    this.value = undefined;
    this.reason = undefined;

    this.onFulfilled = [];
    this.onRejected = [];

    const resolve = (value) => {
      if (this.state !== "pending") return;

      this.state = "fulfilled";
      this.value = value;

      this.onFulfilled.forEach((callback) => {
        callback(value);
      });
    };

    const reject = (reason) => {
      if (this.state !== "pending") return;

      this.state = "rejected";
      this.reason = reason;

      this.onRejected.forEach((callback) => {
        callback(reason);
      });
    };

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(onFulfilled, onRejected) {
    return new myPromise((resolve, reject) => {
      const fulfilledCallback = (value) => {
        try {
          if (onFulfilled) {
            const result = onFulfilled(value);
            resolve(result);
          } else {
            resolve(value);
          }
        } catch (error) {
          reject(error);
        }
      };

      const rejectCallback = (reason) => {
        try {
          if (onRejected) {
            const result = onRejected(reason);
            resolve(result);
          } else {
            reject(reason);
          }
        } catch (error) {
          reject(error);
        }
      };

      if (this.state === "fulfilled") {
        fulfilledCallback(this.value);
      } else if (this.state === "rejected") {
        rejectCallback(this.reason);
      } else {
        this.onFulfilled.push(fulfilledCallback);
        this.onRejected.push(rejectCallback);
      }
    });
  }

  catch(onRejected) {
    return this.then(null, onRejected);
  }
}
