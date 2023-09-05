import { createContext, useState, useMemo } from 'react';
import { createTheme } from "@mui/material/styles";

// color design tokens
export const tokens = (mode) => ({
    ...(mode === "dark"
        ? {
            indigo: {
                100: "#e0e0e0",
                200: "#c2c2c2",
                300: "#a3a3a3",
                400: "#858585",
                500: "#666666",
                600: "#525252",
                700: "#3d3d3d",
                800: "#292929",
                900: "#141414"
            },
            orange: {
                100: "#ead8cc",
                200: "#d4b099",
                300: "#bf8967",
                400: "#a96134",
                500: "#943a01",
                600: "#762e01",
                700: "#592301",
                800: "#3b1700",
                900: "#1e0c00"
            },
            teal: {
                100: "#cdf4f2",
                200: "#9be9e6",
                300: "#68dfd9",
                400: "#36d4cd",
                500: "#04c9c0",
                600: "#03a19a",
                700: "#027973",
                800: "#02504d",
                900: "#012826"
            },
            gray: {
                100: "#e8faf5",
                200: "#d2f6eb",
                300: "#bbf1e1",
                400: "#a5edd7",
                500: "#8ee8cd",
                600: "#72baa4",
                700: "#558b7b",
                800: "#395d52",
                900: "#1c2e29"
            },
            red: {
                100: "#fedbe0",
                200: "#feb7c1",
                300: "#fd94a1",
                400: "#fd7082",
                500: "#fc4c63",
                600: "#ca3d4f",
                700: "#972e3b",
                800: "#651e28",
                900: "#320f14"
            },  
        }  
    : {
        indigo: {
            100: "#e0e0e0",
            200: "#c2c2c2",
            300: "#a3a3a3",
            400: "#858585",
            500: "#666666",
            600: "#525252",
            700: "#3d3d3d",
            800: "#292929",
            900: "#141414"
        },
        orange: {
            100: "#ead8cc",
            200: "#d4b099",
            300: "#bf8967",
            400: "#a96134",
            500: "#943a01",
            600: "#762e01",
            700: "#592301",
            800: "#3b1700",
            900: "#1e0c00"
        },
        teal: {
            100: "#cdf4f2",
            200: "#9be9e6",
            300: "#68dfd9",
            400: "#36d4cd",
            500: "#04c9c0",
            600: "#03a19a",
            700: "#027973",
            800: "#02504d",
            900: "#012826"
        },
        greenAccent: {
            100: "#e8faf5",
            200: "#d2f6eb",
            300: "#bbf1e1",
            400: "#a5edd7",
            500: "#8ee8cd",
            600: "#72baa4",
            700: "#558b7b",
            800: "#395d52",
            900: "#1c2e29"
        },
        red: {
            100: "#fedbe0",
            200: "#feb7c1",
            300: "#fd94a1",
            400: "#fd7082",
            500: "#fc4c63",
            600: "#ca3d4f",
            700: "#972e3b",
            800: "#651e28",
            900: "#320f14"
        } 
    }),
});

//mui theme configurações
export const themeSettings = (mode) => {
    const colors = tokens(mode);

    return {
        palette: {
            mode: mode,
            ...(mode === "dark"
                ? {
                    primary: {
                        main: colors.orange[800],
                    },
                    secondary: {
                        main: colors.teal[500],
                    },
                    neutral: {
                        dark: colors.indigo[700],
                        main: colors.indigo[500],
                        light: colors.indigo[100],
                    },
                    background: {
                        default: colors.indigo[500],
                    }
                }
            )
        }
    }
}
