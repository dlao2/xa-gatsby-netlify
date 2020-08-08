import React from "react"

const BaseMember = (props) => {
  // const classObject = (borderColor) => {
  //   var color = 'blue';
  //   if (borderColor) {
  //     color = borderColor;
  //   }

  //   return `p-1 rounded-full border-4 border-${ color }-400 `;
  // };

  return (
    <div className={`p-1 rounded-full border-4 border-blue-400 ` + props.className } style={{width:'200px', height:'200px'}} onClick={props.onClick}>
      <div
        className="rounded-full staff-member bg-center"
        style={{
          backgroundImage: 'url(/' + (props.member.headshot || props.member.photo) + ')'
        }}
      >
        <div className={ `opacity-50 h-full rounded-full ` + (props.hoverable ? 'lg:hover:bg-blue-500 cursor-pointer ' : ' ') +  (props.selectedMember === props.member ? 'lg:bg-blue-500': '') }>
          <img src={ (props.member.headshot || props.member.photo) } className="invisible" />
        </div>
      </div>
    </div>
  )
}

export default BaseMember
