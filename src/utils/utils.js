import axios from "axios";
export function formatDate (date) {
  var dateString = new Date(date)
  // let FormattedDateTime =
  //   dateString.getFullYear() + '-' +
  //   (dateString.getMonth() + 1) + '-' +
  //   dateString.getDate() + ' ' +
  //   dateString.getHours() + ':' +
  //   dateString.getMinutes() + ':' +
  //   dateString.getSeconds();

  return dateString.pattern("yyyy-MM-dd HH:mm:ss")
}
