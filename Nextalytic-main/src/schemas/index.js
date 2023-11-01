import * as Yup from 'yup'

export const validationSchema = Yup.object({
    firstName : Yup.string().min(3).required("Please Enter Your Firs Name"),
    lastName : Yup.string().min(3).required("Please Enter Your Last Name"),
    fatherName: Yup.string().min(3).required("Please Enter Your Father Name"),
    phone: Yup.number().min(13).required("Please Enter 13 digits Phone Number"),
    password: Yup.string().min(3).required("Please Enter Your Passwrod"),
    confirmPass: Yup.string().oneOf([Yup.ref('password')],"Password Must Match"),
    email: Yup.string().email().required("Please Enter valid Email Adress"),
    city: Yup.string().required("Please Select City"),
    country: Yup.string().required("Please Select Country"),
    university: Yup.string().min(3).required("Please Enter university"),
    fieldStudy: Yup.string().min(3).required("Please Enter Field of Study"),
    degree: Yup.string().required("Please Select Degree"),
    gpa: Yup.number().typeError('Please enter valid value').positive('Value must be positive').min(0, 'Value must be greater than or equal to 0'),
    cgpa: Yup.number().typeError('Please enter valid value').positive('Value must be positive').min(0, 'Value must be greater than or equal to 0'),
    age: Yup.number().required("Please Entrer Age"),
    martailStatus: Yup.string().required("Please Select Martial Status"),
    hairColor:Yup.string().required("Please Select Hair Color"),
})