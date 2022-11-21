import React from "react";
import Admin from "@/Layouts/AdminLayout";

const Index = (props) => {
    // console.log(props);
    return <Admin user={props.auth} />;
};

export default Index;
