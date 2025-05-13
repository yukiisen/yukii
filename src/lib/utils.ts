export function sleep (time: number): Promise<void> {
    return new Promise((res) => {
        setTimeout(() => res(void 0), time);
    });
}
