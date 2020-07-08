const user = {
    fullName: '',
    userEmail: '',
    userPhone: '',
    fullAddress: '',
};

const data = {
    xhr: new XMLHttpRequest(),
    statusReq: '',
    dataItem: '',
    sendRequest: function () {
        this.xhr.open('GET', 'https://randomuser.me/api/', false);
        this.xhr.send(null);

        if(this.xhr.status !== 200) {
            this.statusReq =`Error ${this.xhr.status}: ${this.xhr.statusText}`;
            console.log(this.statusReq);
            return;
        }

        this.dataItem = JSON.parse(this.xhr.response);
        console.log(this.dataItem);

    },

    getUserInfo: function() {
       let dataItem = this.dataItem.results;
       for(let i = 0; i < dataItem.length; i++){
           let elem = dataItem[i];
           user.fullName = `${elem.name.first} ${elem.name.last}`;
           user.userEmail = `${elem.email}`;
           user.userPhone = `${elem.phone}`;
           user.fullAddress = `${elem.location.country} ${elem.location.city} ${elem.location.street.name} ${elem.location.street.number}`;
       }
       console.log(user);
    },

    setInfoUser: function() {
        document.querySelector('.user_full_name').textContent = user.fullName;
        document.querySelector('.user_email').textContent = user.userEmail;
        document.querySelector('.user_phone').textContent = user.userPhone;
        document.querySelector('.user_full_address').textContent = user.fullAddress;
    },
    runReq: function () {
        this.sendRequest();
        this.getUserInfo();
        this.setInfoUser();
    }
};

window.onload = data.runReq();