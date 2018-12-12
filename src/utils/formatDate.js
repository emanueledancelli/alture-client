import moment from "moment";
import "moment/locale/it";

export const formatDate = date =>
  moment(date)
    .locale("it")
    .format("MMMM D, YYYY");
