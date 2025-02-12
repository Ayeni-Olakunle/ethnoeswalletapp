import axios from "axios";


const axiosInstanceAuth = axios.create({
    baseURL: "https://ethnoeswalletapp-backend.vercel.app/",
    // baseURL: process.env.NEXT_PUBLIC_BASEURL,
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
    },
  });


  export const getBalance = async () => {
    return(
        (await axiosInstanceAuth.get(`get_balance/`))
    )
}

export const savingsPlans = async () => {
    return(
        (await axiosInstanceAuth.get(`savings-plans/`))
    )
}

export const recentActivitiesData = async () => {
    return(
        (await axiosInstanceAuth.get(`recent_activities_data/`))
    )
}

export const financialData = async () => {
    return(
        (await axiosInstanceAuth.get(`financial-data/`))
    )
}