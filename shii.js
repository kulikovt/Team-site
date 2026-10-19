const change=document.getElementById('change')

change.addEventListener('click', translatetolatin)

function translatetolatin() {

if (document.getElementsByClassName('surname')[0].innerHTML==="Куликов")
{
    document.getElementsByClassName('surname')[0].innerHTML="Kulikov"
    document.getElementsByClassName('name')[0].innerHTML="Timur"
    document.getElementsByClassName('s_name')[0].innerHTML="Aleksandrovich"
}

else
{
    document.getElementsByClassName('surname')[0].innerHTML="Куликов"
    document.getElementsByClassName('name')[0].innerHTML="Тимур"
    document.getElementsByClassName('s_name')[0].innerHTML="Александрович"
}
}