import dayjsBase from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import localizedFormat from "dayjs/plugin/localizedFormat";
import utc from "dayjs/plugin/utc";
import duration from "dayjs/plugin/duration";
import advancedFormat from "dayjs/plugin/advancedFormat";
import "dayjs/locale/pl";

dayjsBase.extend(localizedFormat);
dayjsBase.extend(duration);
dayjsBase.extend(relativeTime);
dayjsBase.extend(utc);
dayjsBase.extend(advancedFormat);

export const dayjs = dayjsBase;
