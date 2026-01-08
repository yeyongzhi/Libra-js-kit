export function isDefined<T>(value: any): value is T {
    return value !== undefined && value !== null;
}

export function defaultValue<T>(value: T, defaultValue: T): T {
    return isDefined(value) ? value : defaultValue;
}