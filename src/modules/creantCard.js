export default class CreantCard{

    controHouve(){
        const card = document.querySelectorAll('.card')




        // for( let i = 0; i < card.length; i++ ){    

        //     card[i].addEventListener('mouseenter', (e)=>{
        //         this.houverAdd()
        //     });


        //     card[i].addEventListener('mouseleave', (e)=>{
        //        this.houverRemove()
        //     })
        //   }

        
    }

    houverAdd(){
        for(let i = 0; i <= 4; i++){
            let btns = document.querySelector('.btnsRemove')    
            btns.classList.add("btns")
            btns.classList.remove("btnsRemove")
        }     
    }
 
    houverRemove(){
        for(let i = 0; i <= 4; i++){
            let btns = document.querySelector('.btns')    
            btns.classList.remove("btns")
            btns.classList.add("btnsRemove")
        }
    } 

}