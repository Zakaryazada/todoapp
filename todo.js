class Todo {
    constructor(){
        this.todos= [] ;
        this.turalin_zakazi= "all"
    }
     addNewTodo (text){
        let new_todo = {
        text : text,
        status : "active" ,
        }
        this.todos.push (new_todo)
    }

    removeTodo (index){
    this.todos.splice(index,0 )
    }
    changeStatus(index){
    let todo = this.todos[index]
    if ( todo.status === "active" ){
       
        todo.status = "completed"
    }   
    else {
        todo.status = "active"
    }
    }
    
    showTodos () {
        $('#todolar').html('')
        for( let i=0 ; i<this.todos.length ; i++){
        
            let z = this.todos[i]
        
            if(this.turalin_zakazi !== "all" && z.status !== this.turalin_zakazi){
                continue
            }

            let t = "" 
            if(z.status === 'active'){
                t = "active" 
            }
            else{
                t = "completed"
            }
            $('#todolar').append("<p data-nomre='" + i + "' class='todo-element " + t + " '>" + z.text + "</p>")  

        }
    }

    
    

    


}