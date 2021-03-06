function formatDate(date_ob) {
  // adjust 0 before single digit date
  let date = ("0" + date_ob.getDate()).slice(-2);

  // current month
  let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

  // current year
  let year = date_ob.getFullYear();

  // current hours
  let hours = date_ob.getHours();
  if (hours < 10) hours = `0${hours}`;

  // current minutes
  let minutes = date_ob.getMinutes();
  if (minutes < 10) minutes = `0${minutes}`;

  // current seconds
  let seconds = date_ob.getSeconds();
  if (seconds < 10) seconds = `0${seconds}`;

  // prints date & time in YYYY-MM-DD HH:MM:SS format
  let formatDate = date + "-" + month + "-" + year + ", " + hours + ":" + minutes + ":" + seconds;
  return formatDate;
}

module.exports = formatDate;
