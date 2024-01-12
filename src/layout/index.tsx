import {  FC, HTMLAttributes ,PropsWithChildren} from 'react';
import {Outlet} from "react-router-dom"
interface LayoutProps  extends HTMLAttributes<HTMLDivElement>{ 

}
type  LayoutComponents=FC<LayoutProps>  & PropsWithChildren
const Layout: LayoutComponents = ({children,...resProps }) => {
  return <div
            {...resProps}
            className={
                `${resProps.className ? resProps.className : ""}`
              }
            >
                <h1 className=''>

                LEAUGE OF LEGENDS CHAMPION
                </h1>
           <Outlet/>
        </div>;
};

export default Layout;