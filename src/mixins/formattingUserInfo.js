export default {
    methods: {
        AddUserAvatar(name, surname, email) {
            if(name.trim() === '' || surname.trim() === '') return (email.split('.')[0][0] + email.split('.')[1][0]);
            return (name[0] + surname[0]);
        },
        getFullName(name, surname, email) {
            if(name.trim() === '' || surname.trim() === '') return email;
            return `${surname}, ${name}`
        },
    }
}