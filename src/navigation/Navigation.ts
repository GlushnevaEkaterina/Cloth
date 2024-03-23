import { NavigationContainerRef } from "@react-navigation/native";
import React from "react";

export default class Navigation {
    static navigationRef = React.createRef<NavigationContainerRef<any>>();

    static navigate = (routeName: string, params?: any) => {
        setTimeout(() => this.navigationRef.current?.navigate(routeName, params));
    }
}
