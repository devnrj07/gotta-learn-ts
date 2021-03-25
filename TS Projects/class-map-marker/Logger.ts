export class Logger {
    constructor(private className: string, private level: ('info' | 'debug' | 'warn')) { }

    log(message: string) {
        const prefix = "::" + this.className.toLocaleUpperCase() + "::"
        if (this.level === 'info')
            console.log(`${prefix} : ${message}`);
        else if (this.level === 'debug')
            console.debug(`${prefix} : ${message}`);
        else if (this.level === 'warn')
            console.warn(`${prefix} : ${message}`);
    }
}
