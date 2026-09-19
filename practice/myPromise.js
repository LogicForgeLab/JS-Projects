class MyPromise {
  constructor(executor) {
    this.state = "pending";
    this.value = undefined;
    this.reason = undefined;

    this.onRejectedCb = [];
    this.onFulfilledCb = [];

    const resolve = (value) => {
      if (this.state !== "pending") return;

      this.value = value;
      this.state = "fulfilled";

      for (let cb of this.onFulfilledCb) {
        queueMicrotask(() => cb(this.value));
      }
    };

    const reject = (reason) => {
      if (this.state !== "pending") return;

      this.reason = reason;
      this.state = "rejected";

      for (let cb of this.onRejectedCb) {
        queueMicrotask(() => cb(this.reason));
      }
    };
    try {
      executor(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }

  then(onFulfilled, onRejected) {
    return new MyPromise((resolve, reject) => {
      const handleFulfilled = (value) => {
        try {
          if (typeof onFulfilled !== "function") {
            resolve(value);

            return;
          }

          const result = onFulfilled(value);

          if (result instanceof MyPromise) {
            result.then(resolve, reject);
          } else {
            resolve(result);
          }
        } catch (err) {
          reject(err);
        }
      };

      const handleRejected = (reason) => {
        try {
          if (typeof onRejected !== "function") {
            reject(reason);

            return;
          }

          const result = onRejected(reason);

          if (result instanceof MyPromise) {
            result.then(resolve, reject);
          } else {
            resolve(result);
          }
        } catch (err) {
          reject(err);
        }
      };

      if (this.state === "fulfilled") {
        queueMicrotask(() => {
          handleFulfilled(this.value);
        });
      } else if (this.state === "rejected") {
        queueMicrotask(() => handleRejected(this.reason));
      } else {
        this.onFulfilledCb.push((val) => {
          handleFulfilled(val);
        });

        this.onRejectedCb.push((err) => {
          handleRejected(err);
        });
      }
    });
  }

  catch(onRejected) {
    return this.then(null, onRejected);
  }
}
