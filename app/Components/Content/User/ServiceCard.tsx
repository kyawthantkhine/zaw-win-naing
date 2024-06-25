
export default function ServiceCard({icon, price} : {icon : any, price : number}) {
  return (
     <div className="flex flex-col justify-between border-[3px] border-blue-800 rounded-[5px] h-full overflow-hidden">
        <div className="bg-stone-200 inline-flex items-center justify-center w-full h-full min-w-[30px] rounded-[inherit] p-[4px]">
           {icon}
        </div>
        <div className=" bg-blue-800 w-full h-full text-stone-200 text-center font-semibold text-[8px]">
           <h3>${price}</h3>
        </div>
     </div>
  );
}