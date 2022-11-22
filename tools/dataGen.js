const m = {};

// 生成一个随机数
m.genRandomNum = (min, max, fixed = 0) => {
	if (fixed) {
		return parseFloat((Math.random() * (max - min) + min).toFixed(fixed));
	} else {
		return parseInt(Math.random() * (max - min) + min);
	}
};

// 生成一组随机数
m.genRandomNumArr = (min, max, num, fixed = 0) => {
	const result = [];

	for (let i = 0; i < num; i++) {
		if (fixed) {
			result.push(
				parseFloat((Math.random() * (max - min) + min).toFixed(fixed))
			);
		} else {
			result.push(parseInt(Math.random() * (max - min) + min));
		}
	}

	return result;
};

// 生成一个以某天为起始，之前n天的字符串数组
// YYYY-MM-DD
m.genDatesArr = (date, n) => {
  let result = [];
  // moment
  if (date._isAMomentObject) {
    for (let i = 0; i < n; i++) {
      result.unshift(date.subtract(1, "days").format("YYYY-MM-DD"));
    }
  } else {
    throw new Error("genDatesArr函数中参数date不是一个moment对象或者moment版本过低");
  }

  return result;
};

// 生成一个以某月为起始，之前n个月的字符串数组
// YYYY-MM
m.genMonthsArr = (month, n) => {
  let result = [];
  // moment
  if (month._isAMomentObject) {
    for (let i = 0; i < n; i++) {
      result.unshift(month.subtract(1, "months").format("YYYY-MM"));
    }
  } else {
    throw new Error("genDatesArr函数中参数date不是一个moment对象");
  }

  return result;
};

export default m;
