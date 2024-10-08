// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Input } from "./ui/input";
// import { Button } from "./ui/button";
// import {BeatLoader} from "react-spinners"
// import Error from "./error";
// import { useEffect, useState } from "react";
// import * as Yup from "yup";
// import useFetch from "@/hooks/use-fetch";
// import { useNavigate, useSearchParams } from "react-router-dom";
// import { login } from "@/db/apiAuth";
// import { useUrlState } from "@/context";


// const Login = () => {
//   const [errors, setErrors] = useState([])

//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const navigate = useNavigate();
//   let [searchParams] = useSearchParams();
//   const longLink = searchParams.get("createNew");

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const {name, value} = e.target;

//     setFormData ((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }))
//   };

//   const {data, error, loading, fn : fnLogin} = useFetch(login, formData);
//   const {fetchUser} = useUrlState();

//   useEffect(() => {
//     if(error === null && data) {
//       navigate(`/dashboard?${longLink ? `createNew=${longLink}` : ""}`);
//       fetchUser();
//     }
//   }, [data, error])


//   const handleLogin = async () => {
    
//     setErrors([]);

//     try {
//       const schema = Yup.object().shape({
//         email: Yup.string().email("Invalid Email").required("Email is Required"),
//         password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is Required"),
//       });

//       await schema.validate(formData, {abortEarly: false});

//       // API call
//       await fnLogin();
      
//     } catch (error) {
//       const newErrors = {};
//       e?.inner?.forEach((err: any) => {
//         newErrors[err.path] = err.message;
//       });

//       setErrors(newErrors); 
//     }
//   };


//   return (
//     <Card>
//       <CardHeader>
//         <CardTitle>Login</CardTitle>
//         <CardDescription>to your account if you already have one</CardDescription>
//         {error && <Error message={error.message} />}
//       </CardHeader>

//       <CardContent className="space-y-2">
//         <div className="space-y-1">
//           <Input 
//            name="email" 
//            type="email" 
//            placeholder="Enter Email"
//            onChange={handleInputChange}
//           />
//           {errors.email && <Error message={errors.email} />}
//         </div>
//         <div className="space-y-1">
//           <Input 
//            name="password" 
//            type="password" 
//            placeholder="Enter Password"
//            onChange={handleInputChange}
//            />
//           {errors.password && <Error message={errors.password} />}
//         </div>
//       </CardContent>
//       <CardFooter>
//         <Button onClick={handleLogin}>
//           {loading ? <BeatLoader size={10} color="#36d7b7"/> : "Login" }
//         </Button>
//       </CardFooter>
//     </Card>
//   )
// }

// export default Login;


import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import * as Yup from "yup";
import useFetch from "@/hooks/use-fetch";
import { login }  from "@/Auth/apiAuth"
import { UrlState } from "@/context";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Input} from "./ui/input";
import { Button} from "./ui/button";
import Error from "./error";
import { BeatLoader } from "react-spinners";

interface FormData {
  email: string;
  password: string;
}

interface FormErrors {
  email?: string;
  password?: string;
}

const Login: React.FC = () => {
  const [errors, setErrors] = useState<FormErrors>({});
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  let [searchParams] = useSearchParams();
  const longLink = searchParams.get("createNew");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    })
    setErrors({});
  };

  const { data, error, loading, fn: fnLogin } = useFetch(login,formData);
  const { fetchUser } = UrlState();

  useEffect(() => {
    if (error === null && data) {
      navigate(`/dashboard?${longLink ? `createNew=${longLink}` : ""}`);
      fetchUser();
    }
  }, [data, error, loading]);


  const handleLogin = async () => {
    setErrors({});

    try {
      const schema = Yup.object().shape({
        email: Yup.string().email("Invalid Email").required("Email is Required"),
        password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is Required"),
      });

      await schema.validate(formData, { abortEarly: false });

      // API call
      await fnLogin();
    } catch (error) {
      if (error instanceof Yup.ValidationError) {

        const newErrors: any = {};
        error?.inner?.forEach((err) => {
          if (err.path) {
            newErrors[err.path] = err.message;
          }
        });

        setErrors(newErrors);
      }
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>to your account if you already have one</CardDescription>
        {/* {error && <Error message={error} />} */}
      </CardHeader>

      <CardContent className="space-y-2">
        <div className="space-y-1">
          <Input
            name="email"
            type="email"
            placeholder="Enter Email"
            onChange={handleInputChange}
          />
          {errors.email && <Error message={errors.email} />}
        </div>

        <div className="space-y-1">
          <Input
            name="password"
            type="password"
            placeholder="Enter Password"
            onChange={handleInputChange}
          />
          {errors.password && <Error message={errors.password} />}
        </div>
      </CardContent>

      <CardFooter>
        <Button onClick={handleLogin}>
          {loading ? <BeatLoader size={10} color="#36d7b7" /> : "Login"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Login;

