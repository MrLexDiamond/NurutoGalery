const toggle = document.getElementById('toggleDark');

toggle.addEventListener('click', function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        toggleDark.classList = "bi-brightness-high-fill";
    }else{
        toggleDark.classList = "bi-moon";
    }
});