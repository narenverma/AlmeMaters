import * as Yup from "yup";

const emailRegex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

const urlRegex = /^((http|https):\/\/)?(www.)?(?!.*(http|https|www.))[a-za-z0-9_-]+(\.[a-za-z]+)+(\/)?.([\w\?[a-za-z-_%\/@?]+)*([^\/\w\?[a-za-z0-9_-]+=\w+(&[a-za-z0-9_]+=\w+)*)?$/;

// export const signUpSchema = Yup.object({
//     name: Yup.string().min(3).required("Name is required").transform(value => value.charAt(0).toUpperCase() + value.slice(1)),
// age: Yup.number().min(10).max(100),
// country: Yup.string().min(1).required("Country is required"),
// email: Yup.string().email("Invalid email").matches(emailRegex,"Invalid email").required("Email is required"),
// description: Yup.string().min(3).required("Description is required"),
// instagram: Yup.string().matches(urlRegex,"Invalid URL"),
// twitter:  Yup.string().matches(urlRegex,"Invalid URL"),
// linkedin: Yup.string().matches(urlRegex,"Invalid URL"),
// // profile_image: Yup.string(),
// })

export const subscribeSchema = Yup.object({
    email: Yup.string().email("Invalid email").matches(emailRegex,"Invalid email"),
})

// export const messageForm = Yup.object({
//     name: Yup.string().min(3).required("Name is required").transform(value => value.charAt(0).toUpperCase() + value.slice(1)),
//     country: Yup.string().min(1).required("Country is required"),
//     email: Yup.string().email("Invalid email").matches(emailRegex,"Invalid email").required("Email is required"),
//     instagram: Yup.string().matches(urlRegex,"Invalid URL").required("Instagram is required"),
//     profile_image:  Yup.mixed().required('Image is required'),
// })