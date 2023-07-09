/* eslint-disable @typescript-eslint/no-explicit-any */

import React from "react"
import "./styles/globals.css"
import { FileBasedRoutingProvider } from "./contexts/FilebasedRouting"

export const App: React.FC = () => {
  return <FileBasedRoutingProvider />
}
