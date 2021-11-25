module.exports.User =class User {
    id;
    acc_id;
    username;
    password;
    full_name;
    birth_date;
    sex;
    phone_number;
    email;
    status;
    street;
    date_created;


    constructor(){
        this.id = '';
        this.acc_id = '';
        this.username = '';
        this.password = '';
        this.full_name = '';
        this.birth_date = '';
        this.sex = '';
        this.phone_number = '';
        this.email = '';
        this.status = '';
        this.street = '';
        this.date_created = '';
    }
    

    get getbirth_date()
    {
        return this.birth_date;
    }
    set setbirth_date(date)
    {
        this.birth_date = date;
    }



    get getid()
    {
        return this.id;
    }
    set setid(id)
    {
        this.id = id;
    }


    get getacc_id()
    {
        return this.acc_id;
    }
    set setacc_id(acc_id)
    {
        this.acc_id = acc_id;
    }


    get getusername()
    {
        return this.username;
    }
    set setusername(username)
    {
        this.username = username;
    }


    get getpassword()
    {
        return this.password;
    }
    set setpassword(password)
    {
        this.password = password;
    }


    get getfull_name()
    {
        return this.full_name;
    }
    set setfull_name(full_name)
    {
        this.full_name = full_name;
    }


    get getphone()
    {
        return this.phone_number;
    }
    set setphone(phone)
    {
        this.phone_number = phone;
    }

    get getsex()
    {
        return this.sex;
    }
    set setsex(sex)
    {
        this.sex = sex;
    }

    get getemial()
    {
        return this.email;
    }
    set setemail(email)
    {
        this.email = email;
    }


    get getstatus()
    {
        return this.status;
    }
    set setstatus(status)
    {
        this.status = status;
    }

    get getstreet()
    {
        return this.street;
    }
    set setstreet(street)
    {
        this.street = street;
    }


    get getdate_created()
    {
        return this.date_created;
    }
    set setdate_created(date)
    {
        this.date_created = date;
    }
};

