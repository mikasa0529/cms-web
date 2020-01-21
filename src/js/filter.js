function dateFormat(val, type) {
  let days = Math.floor((new Date() - val) / (1000 * 60 * 60 * 24));
  let date = new Date(val);
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  if(10>month) {
    month ='0'+month;
  }
  let day = date.getUTCDate();
   if(day<10) {
    day = '0'+day;
  }
  let week = date.getDay();
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
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  switch (type) {
    case "days":
      return days + "天前";
    case "date":
      return year + '-' + month + '-' + day;
    case "dateTime":
      return year + '-' + month + '-' + day + " " + hour + ":" + minute + ":" + second;
    case "cDateTime":
      return year + '年' + month + '月' + day + "日 " + hour + ":" + minute + ":" + second;
    case 'cDate':
      return year + '年' + month + '月' + day + "日";
    case "cWeek":
      return year + '年' + month + '月' + day + "日 星期" + week;
    default:
      return year + '-' + month + '-' + day;
  }
}

export {
  dateFormat,
}
