// --------------------------------------------------------
// 判断当前网页是不是在微信内置的浏览器环境打开的
// Author:zbc 
// Last maintain time: 2023-11-30
// --------------------------------------------------------

export default function () {
  const userAgentStr = JSON.stringify(navigator.userAgent)
  const _isWX = userAgentStr.includes("MicroMessenger")
  return _isWX;
}