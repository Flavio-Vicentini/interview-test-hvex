import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

import "dayjs/locale";
import { IDateProvider } from "./IDateProvider";

class DateProvider implements IDateProvider {
  ValidateDateFormat(
    date: Date,
    format: string,
    locale: string,
    strict: boolean
  ): boolean {
    dayjs.extend(customParseFormat);
    const isValid = dayjs(date, format, locale, strict).isValid();
    return isValid;
  }
}
export { DateProvider };
