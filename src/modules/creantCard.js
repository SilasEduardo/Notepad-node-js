export default class CreantCard{

    controHouve(){
        const card = document.querySelectorAll('.card')




        for( let i = 0; i < card.length; i++ ){    

            card[i].addEventListener('mouseenter', (e)=>{
                let btns = document.querySelectorAll('.btnsRemove') 
                btns.forEach((val)=>{
                    val.classList.add("btns")
                     val.classList.remove("btnsRemove")
                })
                
            });


            card[i].addEventListener('mouseleave', (e)=>{
                let btns = document.querySelectorAll('.btns') 
                btns.forEach((val)=>{
                    i.classList.remove("btns")
                     i.classList.add("btnsRemove")
                })
            })
          }

            // card.forEach((value, i) =>{
            //     console.log(value, i)

            //     value.addEventListener('mouseenter', (e)=>{
            //     this.houverAdd()
            //     })
        
            //     value.addEventListener('mouseleave', (e)=>{
            //         this.houverRemove()
            //     })
            // })

            
           

        
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