import { useContext } from 'react'
import DataContext from '../DataContext'
import ComponentC from './ComponentC'
export default function ComponentA () {

    const { userInfo, setUserInfo } = useContext(DataContext)

    return (
        <div className="card">
            <h2>This is component A</h2>

            <div>
               <p> {userInfo.name}'s favorite color is </p>
               <p style={{ color: userInfo.favColor }}>{userInfo.favColor}</p>
            </div>

             <button
        onClick={() => setUserInfo({ ...userInfo, favColor: "green" })}>
        Change to Green
              </button>


      <button
         onClick={() => setUserInfo({...userInfo, favColor: "blue"})}>
        Change back to Blue
      </button>
      

        <ComponentC/>



        </div>

    )
}