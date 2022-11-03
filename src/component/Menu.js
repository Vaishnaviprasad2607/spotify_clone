import React, { useEffect } from 'react';

function Menu({title, menuobj}) {
  useEffect(()=> {
    const allLi =document
    .querySelector('.MenuContainer ul')
    .querySelectorAll("li");
function changeMenuActive(){
  allLi.forEach((n)=>n.classList.remove("active") );
  this.classList.add("active");
}
  allLi.forEach(n=> n.addEventListener('click',changeMenuActive))

  },[])
  return (
    <div className='MenuContainer'>
      <p className='title'>{title}</p>
      <ul style={{padding:'0px'}}>
        {
          menuobj && menuobj.map((menu)=>(
            <li key={menu.id}>
              {" "}
              <a href='#'>
              <i>{menu.icon}</i>
              <span>{menu.name}</span>
              </a>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export{ Menu };