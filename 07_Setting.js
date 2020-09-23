// Singletons in JavaScript
class Setting {
    constructor() {
        if (Setting.instance instanceof Setting) {
            return Setting.instance;
        }

        console.log(Setting.instance instanceof Setting)

        this.settingObject = {
            'background': '#ff0000',
            'version': Math.floor(Math.random() * 4000)
        }

        Object.freeze(this.settingObject);
        Object.freeze(this);
        Setting.instance = this;
    }

    get(key) {
        return this.settingObject[key]
    }
}