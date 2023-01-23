export default class TextFieldBinding{
    constructor(value,label,typeField){        
        this.value = value;
        this.label = label;
        this.typeField = typeField;
        this.invalid = false;
        this.disabled = false;
        this.overideClass = "form-control form-control-sm col-12";
    }

}