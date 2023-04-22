export function resolveFunction<T>(func: Function, args: Array<any>): [T | null, any] {
    try {
        const result = func.apply(args);

        return [result, null];
    } catch (error) {
        return [null, error];
    }
}
