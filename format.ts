declare global {
    interface String {
        format(...args: string[]): string;
    }
}

String.prototype.format = function (...args: string[]): string {
    let i = 0;
    return this.replace(/%s/g, () => args[i++]);
};
