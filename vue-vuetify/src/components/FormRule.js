let FormValidation = {
    emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    nameRules: [
        v => !!v || "Name is required",
        v => (v && v.length <= 10) || "Name must be less than 10 characters"
    ],
    rules: [
        value => !!value || "Required.",
        value => (value && value.length >= 3) || "Min 3 characters"
    ]
}

export default FormValidation