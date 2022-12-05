

function register()
{
    username=reg_name.value,
    phnumber=reg_num.value,
    gmail=reg_mail.value,
    pswd=reg_pswd.value,
    qualification=reg_qual.value

    studRegister={
        username,
        phnumber,
        gmail,
        pswd,
        qualification
    }

    if(username=="" || phnumber=="" || phnumber=='' || gmail=='' || pswd==''||qualification=='')
    {
        alert('no blank values allowed')
    }
    else
    {
        if(gmail in localStorage)
       {
        alert('account already exist')
       }
       else
       {
        localStorage.setItem(gmail,JSON.stringify(studRegister))
        alert('registration successful')
        window.location.href='index.html'
       }

    }

}

function login()
{
     Gmail=log_mail.value,
     pass=log_pswd.value
    
     if(Gmail=="" || pass=="")
     {
        alert('blank value not allowed')
     }
    
     else
     {
        if(Gmail in localStorage)
        {
            studDetails=JSON.parse(localStorage.getItem(Gmail))
            
            if(pass==studDetails.pswd)
            {
                alert('login successfull')
                window.location.href='home.html'
            }
            else
            {
                alert('incorrect password')
            }
         }
         else
         {
            alert('invalid account')
         }

     }
     
}
