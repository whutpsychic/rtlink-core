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
		throw new Error(
			"genDatesArr函数中参数date不是一个moment对象或者moment版本过低"
		);
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

// 生成数字序列
m.genNumberStream = (start = 1, length = 10, spliter = 1) => {
	let arr = [];
	for (let i = 0; i < length; i++) {
		arr.push(start + i * spliter);
	}
	return arr;
};

// 生成随机编码
m.genRandomCode = (
	length,
	option = { onlyChar: false, onlysChar: false, withChar: false }
) => {
	const { onlyChar, onlysChar, withChar } = option;
	// ascii 码表对照数字索引
	const numList = m.genNumberStream(48, 10);
	const wordList = m.genNumberStream(65, 26);
	const wordList2 = m.genNumberStream(97, 26);

	const targetList = onlyChar
		? wordList
		: onlysChar
		? wordList2
		: withChar
		? [...numList, ...wordList, ...wordList2]
		: numList;

	let resStr = "";
	for (let i = 0; i < length; i++) {
		let index = parseInt(Math.random() * 10);
		resStr += String.fromCharCode(targetList[index]);
	}
	return resStr;
};

export default m;
