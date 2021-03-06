// =================================== random id ==========================================

class Tools {
    randomString(length: number, chars: string) {
        let mask = '';

        if (chars.indexOf('a') > -1) mask += 'abcdefghijklmnopqrstuvwxyz';
        if (chars.indexOf('A') > -1) mask += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (chars.indexOf('#') > -1) mask += '0123456789';
        if (chars.indexOf('!') > -1) mask += '~`!@#$%^&*()_+-={}[]:";\'<>?,./|\\';
        let result = '';

        for (let i = length; i > 0; --i) result += mask[Math.floor(Math.random() * mask.length)];
            return result;
    }

    randomStr(length: number) {
        return this.randomString(length, "a#");
    }
}

export const tools = new Tools();

// =================================== LocalStore ==========================================

export function loadLocalStorage() {
    const items = localStorage.getItem('msgs');

    return JSON.parse(items);
}

export function saveLocalStorage(data) {
    const items = JSON.stringify(data);

    localStorage.setItem('msgs', items);
}
