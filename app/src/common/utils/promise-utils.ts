export async function resolvePromise<T>(promise: Promise<T>): Promise<[T | null, any]> {
    try {
        const result = await promise;

        return [result, null];
    } catch (error) {
        return [null, error];
    }
}
