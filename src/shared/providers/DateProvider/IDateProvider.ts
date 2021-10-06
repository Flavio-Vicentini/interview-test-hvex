import { Dayjs } from "dayjs";

interface IDateProvider {
  ValidateDateFormat(
    date: Date,
    format: string,
    locale: string,
    strict: boolean
  ): boolean;
}

export { IDateProvider };
