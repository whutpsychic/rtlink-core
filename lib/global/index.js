const global = {

  // ================ 放在js线程最后执行 ================
  finalDo: (fn) => {
    if (typeof (fn) === "function")
      setTimeout(() => {
        fn()
      }, 0)
  }

}

export default global;