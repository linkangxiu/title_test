function Promise(excutor) {

    this.PromiseState = "pending";//状态
    this.PromiseResult = null;//结果值

    this.callBack = [];
    const _this = this;

    // resolve函数
    function resolve(data) {
        if(_this.PromiseState !== "pending") return
        //修改对象的状态
        _this.PromiseState = "fulFilled";//resolve
        //修改对象对结果值
        _this.PromiseResult = data;
        //执行回调
        // if (_this.callBack.onResolved) {
        //     _this.callBack.onResolved(data);
        // }
        _this.callBack.forEach(item => {
            item.onResolved(data);
        });
    }

    //reject函数
    function reject(data) {
        if(_this.PromiseState !== "pending") return
        //修改对象的状态
        _this.PromiseState = "rejected";//resolve
        //修改对象对结果值
        _this.PromiseResult = data;
        //执行回调
        // if (_this.callBack.onResolved) {
        //     _this.callBack.onResolved(data);
        // }
        _this.callBack.forEach(item => {
            item.onRejected(data);
        });
    }

    //同步调用执行器函数excutor
    //抛出错误使用try--catch
    try {
        excutor(resolve, reject);
    } catch (error) {
        reject(error);
    }
}

//添加.then方法
Promise.prototype.then = function (onResolved,onRejected) {
    //成功回调
    if (this.PromiseState === "fulFilled") {
        onResolved(this.PromiseResult);
    }
    //失败回调
    if (this.PromiseState === "rejected") {
        onRejected(this.PromiseResult);
    }

    //保存状态
    if (this.PromiseState === "pending") {
        this.callBack.push({
            onResolved,
            onRejected,
        })
    }
}