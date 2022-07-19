import React from "react";
import {CompanyInterface} from "../types";

export const CompanyContext = React.createContext<Partial<CompanyInterface>>({})
