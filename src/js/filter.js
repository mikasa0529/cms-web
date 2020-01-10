function dateFormat(val, type) {
  let days = Math.floor((new Date() - val) / (1000 * 60 * 60 * 24));
  let year = val.getFullYear();
  let month = val.getMonth() + 1;
  let day = val.getDate();
  let week = val.getDay();
  switch (week) {
    case 1:
      week = "一";
      break;
    case 2:
      week = "二";
      break;
    case 3:
      week = "三";
      break;
    case 4:
      week = "四";
      break;
    case 5:
      week = "五";
      break;
    case 6:
      week = "六";
      break;
    case 7:
      week = '日';
      break;
  }
  let hour = val.getHours();
  let minute = val.getMinutes();
  let second = val.getSeconds();
  switch (type) {
    case "days":
      return days + "天前";
    case "yyyy-MM-dd hh:mi:ss":
      return year + '-' + month + '-' + day + " " + hour + ":" + minute + ":" + second;
    case "c-yyyy-MM-dd hh:mi:ss":
      return year + '年' + month + '月' + day + "日 " + hour + ":" + minute + ":" + second;
    case 'c-yyyy-MM-dd':
      return year + '年' + month + '月' + day + "日";
    case "c-yyyy-MM-dd-week":
      return year + '年' + month + '月' + day + "日 星期" + week;
    default:
      return year + '-' + month + '-' + day;
  }
}

export {
  dateFormat,
}
