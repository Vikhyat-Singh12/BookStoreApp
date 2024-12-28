import React from 'react'

const Card = ({item}) => {    
  return (
    <>
      <div className="m-4">
        <div className="card bg-base-100 w-full shadow-xl hover:scale-105 duration-500 dark:border">
          <figure>
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[420px]"
            />
          </figure>
          <div className="p-6 h-[200px] flex flex-col justify-between">
            <div>
              <h2 className="card-title mb-3">
                {item.name}
                <div className="badge bg-orange-500 border-none badge-secondary">
                  {item.cateogory}
                </div>
              </h2>
              <p className="text-sm">{item.title}</p>
            </div>
            <div className="card-actions flex justify-between mt-auto">
              <div className="badge badge-outline">₹{item.price}</div>
              <div className="badge badge-outline hover:bg-orange-500 duration-500 cursor-pointer hover:text-white">Buy Now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card
