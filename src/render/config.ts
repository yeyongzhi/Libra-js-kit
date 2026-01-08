import { isString } from '../dataType/index';

let EmptyText = "-"
export function setEmptyText(text: string) {
    if (!isString(text)) {
        throw new TypeError('EmptyText must be a string');
    }
    EmptyText = text;
}
export function getEmptyText() {
    return EmptyText;
}

let TimeRangeSeparator = '~'
export function setTimeRangeSeparator(separator: string) {
    if (!isString(separator)) {
        throw new TypeError('TimeRangeSeparator must be a string');
    }
    TimeRangeSeparator = separator;
}
export function getTimeRangeSeparator() {
    return TimeRangeSeparator;
}

export const FILE_SIZE_UNITS = ['B', 'KB', 'MB', 'GB', 'TB']