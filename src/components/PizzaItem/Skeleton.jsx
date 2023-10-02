import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    className="pizza-block"
    speed={20}
    width={260}
    height={457}
    viewBox="0 0 260 456"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="130" cy="130" r="120" /> 
    <rect x="0" y="321" rx="14" ry="14" width="260" height="84" /> 
    <rect x="106" y="422" rx="14" ry="14" width="152" height="32" /> 
    <rect x="0" y="284" rx="14" ry="14" width="260" height="24" /> 
    <rect x="0" y="424" rx="13" ry="13" width="71" height="32" />
  </ContentLoader>
)

export default Skeleton;