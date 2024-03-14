import * as validator from 'validator';

type TypeButton = HTMLButtonElement | null;
type TypeDiv = HTMLDivElement | null;
type TypeInput = HTMLInputElement | null;
type TypeValidate = {
    element: HTMLInputElement | null;
    empty: boolean;
    equal?: boolean;
    valid?: boolean
};

const tagFormField = document.querySelectorAll(".form-fields") as NodeListOf<HTMLElement>;

const htmlElements: {button: TypeButton[], div:TypeDiv[], input: TypeInput[]} = {
    button: [],
    div:[],
    input:[]
};

const validatedData: {
    username: TypeValidate, 
    email: TypeValidate, 
    password: TypeValidate, 
    password2: TypeValidate, 
    equal?: boolean, 
    valid?: boolean
} = 
    {
        username: {
            element : null,
            empty: false
        },
        email: {
            element : null,
            empty: false,
            valid: false
        },
        password: {
            element : null,
            empty: false,
            equal: false
        },
        password2: {
            element : null,
            empty: false,
            equal: false
        }
    }

function isDiv (element:HTMLElement) : void {
    if (element){
        if(element instanceof HTMLDivElement){
            htmlElements.div.push(element);
        }
    }
}

function mapDiv (element:TypeDiv) : void {
    if ( element && element.childNodes) {

        element.childNodes.forEach((element)=>{
            if(element instanceof HTMLButtonElement){
                htmlElements.button.push(element);
            }
            if(element instanceof HTMLInputElement){
                htmlElements.input.push(element);
            }
        })
    }
}

function validateData():void{
    htmlElements.input.forEach((inputElement)=>{
        if (inputElement?.classList.contains('username')) {
            validatedData.username.element = inputElement;
            validatedData.username.empty = validator.isEmpty(inputElement?.value);
        } 
        
        if (inputElement?.classList.contains('email')) {
            validatedData.email.element = inputElement;
            validatedData.email.empty = validator.isEmpty(inputElement?.value);
            validatedData.email.valid = validator.isEmail(inputElement?.value);
        } 

        if (inputElement?.classList.contains('password')) {
            validatedData.password.element = inputElement;
            validatedData.password.empty = validator.isEmpty(inputElement?.value);
            validatedData.password.equal = htmlElements.input[2]?.value === htmlElements.input[3]?.value;
        }

        if (inputElement?.classList.contains('password2')) {
            validatedData.password2.element = inputElement;
            validatedData.password2.empty = validator.isEmpty(inputElement?.value);
            validatedData.password2.equal = htmlElements.input[2]?.value === htmlElements.input[3]?.value;
        } 

    })
}

function showWarning():void {
    for (const [, value] of Object.entries(validatedData)) {
        if (typeof value === 'object' && 'empty' in value) {
            if(value.empty === true){
                value.element?.nextElementSibling?.classList.add('show-error-message');
                if
                (
                    value.element && 
                    value.element.nextElementSibling && 
                    value.element.nextElementSibling.tagName.toLocaleLowerCase() === 'span'
                )
                {
                    value.element.nextElementSibling.textContent = "*Campo Obrigatório";
                }         
            }else{
                value.element?.nextElementSibling?.classList.remove('show-error-message');
            }
        }

        if (typeof value === 'object' && 'equal' in value){

            if(value.equal === false ||  value.empty === true){
                value.element?.nextElementSibling?.classList.add('show-error-message');
                if(value.empty !== true){
                    if
                    (
                        value.element && 
                        value.element.nextElementSibling && 
                        value.element.nextElementSibling.tagName.toLocaleLowerCase() === 'span'
                    )
                    {
                        value.element.nextElementSibling.textContent = "As senhas não conferem";
                    } 
                }
            }else{
                console.log("falso: " + value.element);
                value.element?.nextElementSibling?.classList.remove('show-error-message');
                if
                    (
                        value.element && 
                        value.element.nextElementSibling && 
                        value.element.nextElementSibling.tagName.toLocaleLowerCase() === 'span'
                    )
                    {
                        value.element.nextElementSibling.textContent = "*Campo Obrigatório";
                    } 
            }
        }

        if (typeof value === 'object' && 'valid' in value){

            if(value.valid === false ||  value.empty === true){
                value.element?.nextElementSibling?.classList.add('show-error-message');
                if(value.empty !== true){
                    if
                    (
                        value.element && 
                        value.element.nextElementSibling && 
                        value.element.nextElementSibling.tagName.toLocaleLowerCase() === 'span'
                    )
                    {
                        value.element.nextElementSibling.textContent = "Email inválido";
                    } 
                }
            }else{
                value.element?.nextElementSibling?.classList.remove('show-error-message');
                if
                    (
                        value.element && 
                        value.element.nextElementSibling && 
                        value.element.nextElementSibling.tagName.toLocaleLowerCase() === 'span'
                    )
                    {
                        value.element.nextElementSibling.textContent = "*Campo Obrigatório";
                    } 
                }
        }
    }
}

tagFormField.forEach((element:HTMLElement)=>{
    isDiv(element);
})

htmlElements.div.forEach((element:TypeDiv)=>{
    mapDiv(element);
})

htmlElements.button[0]?.addEventListener('click', (event : MouseEvent)=>{
    event.preventDefault();
    validateData();
    /* console.log(validatedData); */
    showWarning();
})