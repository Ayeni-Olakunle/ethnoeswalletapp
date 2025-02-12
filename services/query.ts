import { useQuery } from "@tanstack/react-query";
import { getBalance, savingsPlans, recentActivitiesData, financialData } from "./api";

export function getBalanceFn() {
    return useQuery({
        queryKey: ["get-balance"],
        queryFn: getBalance
    })
};

export function savingsPlansFn() {
    return useQuery({
        queryKey: ["savings-plans"],
        queryFn: savingsPlans
    })
};

export function recentActivitiesDataFn() {
    return useQuery({
        queryKey: ["recent-activities-data"],
        queryFn: recentActivitiesData
    })
};

export function financialDataFn() {
    return useQuery({
        queryKey: ["financial-data"],
        queryFn: financialData
    })
};