import React from 'react'
import './icon.css'

function Icon() {
    const data = [
        {
          menu:[
            {
              title: 'menu1',
              icon: 'ri-kick-fill'
            },
            {
              title: 'menu2',
              icon: 'ri-kick-fill'
            },
            {
              title: 'menu3',
              icon: 'ri-kick-line',
            },
            {
              title: 'menu4',
              icon: 'ri-kick-line',
            },
            {
              title: 'menu5',
              icon: 'ri-kick-line',
            },
            {
              title: 'menu6',
              icon: 'ri-kick-line',
            },
            {
              title: 'menu7',
              icon: 'ri-kick-line',
            }
          ]
        }
      ]
      return (
    
        <>
    
    
    {/* ----------------section start icon open ----------------  */}
    <div className="flex content-center justify-center mt-10">
              {data[0].menu.map((item, index) => (
                <li class="liiconmenu" key={index}>
                  <a
                    href='#'
                    className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                    aria-current="page">
                    <i className={`text-black text-3xl ${item.icon}`}></i>
                  </a>
                </li>
              ))}
          </div>
    
    {/* ----------------section  icon close  ----------------  */}
    
  </>
  );
}

export default Icon