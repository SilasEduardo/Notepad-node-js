export default class SelectInputs{
   constructor(){
        this.search = document.querySelector('.search');
        this.btnSearch = document.querySelector('.btnSearch');
        this.btnHelp = document.querySelector('.btnHelp');
        this.textarea  = document.querySelector('.textarea');
        this.btnSave = document.querySelector('.btnSave');
        this.click = document.querySelector('.section');
    }

    clickTextarea(){
        this.textarea.addEventListener('click', (e)=>{
            this.textarea.classList.add('selectTextarea')

        })
    }
    
    
}