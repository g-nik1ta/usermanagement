export default {
    methods: {
        AddUserAvatar(firstname, surname, email) {
            if(firstname.trim() === '' || surname.trim() === '') {
                if (email.trim() === '') return '?'
                return (email.split('.')[0][0] + email.split('.')[1][0]);
            }
            return (firstname[0] + surname[0]);
        },
        getFullName(firstname, surname, email) {
            if(firstname.trim() === '' || surname.trim() === '') return email;
            return `${surname}, ${firstname}`
        },
    }
}