export const getDate = () => {
    let today = new Date()
    let dateObj = new Date(today.getTime() - (24 * 60 * 60 * 1000));
    let month = dateObj.getUTCMonth() + 1; 
    let day = (dateObj.getDate() < 10 ? "0" : "") + dateObj.getDate();;
    let year = dateObj.getUTCFullYear();

    return `${year}${month}${day}`;
  }