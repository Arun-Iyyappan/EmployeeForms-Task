const post = async(data)=>{
            const res = await fetch('http://localhost:3000',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(data)
            })
        }
        
        const form = document.querySelector('form')
        form.addEventListener('submit',(e)=>{
            e.preventDefault();
            const formData = new FormData(form);
            const result = Object.fromEntries(formData);
            post(result);
        })
   